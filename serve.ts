// Production server for the built site. The TanStack Start build emits a portable
// fetch handler (dist/server/server.js) plus static client assets (dist/client);
// this wraps them in a Bun server on port 3000 — static files first, SSR for the
// rest. Run `bun run build` before starting. Restart it with `bun run publish`.
//
// Starting a new instance supersedes the old one: it frees the port no matter
// which user owns the current server (provisioning starts it as `engine`; a team
// member's `bun run publish` runs as their own user), so publish never collides
// with an already-running server. Every sandbox user has passwordless sudo, so
// the takeover works across user boundaries.
import handler from "./dist/server/server.js";
import { $ } from "bun";

// Pinned, NOT read from the environment. The published preview URL
// (<label>.<PUBLIC_SITE_DOMAIN>) is reverse-proxied to 0.0.0.0:3000 inside the
// sandbox, so the default site MUST bind there. Bun auto-loads .env files, so
// honouring process.env.PORT/HOST would let a stray env var or a .env in the site
// dir silently move the site off :3000 (or onto loopback) and break the public URL.
const PORT = 3000;
const HOST = "0.0.0.0";
const CLIENT_DIR = `${import.meta.dir}/dist/client`;

// Paths for file uploads
const SITE_DIR = import.meta.dir;
const ASSETS_REPO_DIR = "/home/team/shared/alkimios-repo";
const LOCAL_UPLOADS_DIR = `${SITE_DIR}/public/assets/subidas`;
const REPO_UPLOADS_DIR = `${ASSETS_REPO_DIR}/assets/subidas`;

// Ensure local upload dir exists
import { mkdirSync } from "node:fs";
mkdirSync(LOCAL_UPLOADS_DIR, { recursive: true });
mkdirSync(REPO_UPLOADS_DIR, { recursive: true });

// Free PORT regardless of which user owns the current listener. lsof runs under
// sudo so it can see (and the kill can signal) a process owned by another user;
// the loop waits for the socket to actually release before we bind.
const freePort =
  `for _ in $(seq 1 25); do ` +
  `pids=$(lsof -t -iTCP:${String(PORT)} -sTCP:LISTEN 2>/dev/null || true); ` +
  `if [ -z "$pids" ]; then exit 0; fi; ` +
  `kill $pids 2>/dev/null || true; sleep 0.2; ` +
  `done`;

// Handle file upload — save locally and commit+push to GitHub repo
async function handleUpload(req: Request): Promise<Response> {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return new Response("Expected multipart/form-data", { status: 400 });
  }

  try {
    const formData = await req.formData();
    const files: { name: string; buffer: ArrayBuffer }[] = [];

    for (const [_, value] of formData) {
      if (value instanceof File) {
        files.push({ name: value.name, buffer: await value.arrayBuffer() });
      }
    }

    if (files.length === 0) {
      return new Response("No files received", { status: 400 });
    }

    // Save files to local public/assets/subidas/
    for (const file of files) {
      const localPath = `${LOCAL_UPLOADS_DIR}/${file.name}`;
      await Bun.write(localPath, new Uint8Array(file.buffer));
    }

    // Save files to the GitHub repo clone and commit+push
    for (const file of files) {
      const repoPath = `${REPO_UPLOADS_DIR}/${file.name}`;
      await Bun.write(repoPath, new Uint8Array(file.buffer));
    }

    // Git add, commit, push (async, don't block response on this)
    const gitResult = await $`cd ${ASSETS_REPO_DIR} && git pull --rebase 2>&1 && git add assets/subidas/ && git commit -m "assets: upload images" && git push 2>&1`
      .nothrow()
      .quiet();

    const gitOk = gitResult.exitCode === 0;
    const gitOutput = gitResult.text().trim();

    if (!gitOk) {
      console.error("Git push failed:", gitOutput);
    }

    return new Response(
      JSON.stringify({
        ok: true,
        count: files.length,
        names: files.map((f) => f.name),
        git: gitOk ? "pushed" : "local-only",
        gitDetail: gitOutput.slice(0, 200),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Upload error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Take over the port, re-freeing and retrying if another publish grabbed it in the
// gap between freeing and binding (last publish wins). Bun.serve throws EADDRINUSE
// synchronously, so without this a raced publish would die while the shell already
// reported success.
for (let attempt = 1; ; attempt++) {
  await Bun.$`sudo sh -c ${freePort}`.quiet().nothrow();
  try {
    Bun.serve({
      port: PORT,
      hostname: HOST,
      async fetch(req) {
        const { pathname } = new URL(req.url);

        // Upload endpoint — handle before static/SSR routing
        if (pathname === "/api/upload" && req.method === "POST") {
          return handleUpload(req);
        }

        // GET /upload serves the upload page from the SSR handler, but
        // we handle it by returning a static HTML response to avoid
        // needing the SSR build to have the route
        if (pathname === "/upload" && req.method === "GET") {
          const uploadHtml = Bun.file(`${CLIENT_DIR}/upload.html`);
          if (await uploadHtml.exists()) {
            return new Response(uploadHtml, {
              headers: { "Content-Type": "text/html; charset=utf-8" },
            });
          }
          // Fallback: let SSR handle it
        }

        if (pathname !== "/") {
          const file = Bun.file(CLIENT_DIR + pathname);
          if (await file.exists()) return new Response(file);
        }
        return (
          handler as { fetch: (r: Request) => Response | Promise<Response> }
        ).fetch(req);
      },
    });
    break;
  } catch (err) {
    if (attempt >= 10) throw err;
    await Bun.sleep(200);
  }
}

console.log(`team-site serving on http://${HOST}:${String(PORT)}`);
