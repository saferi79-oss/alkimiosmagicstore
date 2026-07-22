import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Alkimios — Acompañamiento holístico y prácticas alquímicas",
      },
      {
        name: "description",
        content:
          "Acompañamiento holístico y prácticas alquímicas: Aritmomancia, Cartomancía, Sinastría, Tránsitos planetarios, Carta astral, Oráculos rúnicos y Psicomagia. Donde la llama ilumina el camino interior.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="section" style={{ textAlign: "center", paddingTop: "8rem" }}>
      <h1>Esta página no existe</h1>
      <p style={{ color: "var(--color-parchment-muted)", marginTop: "1rem" }}>
        El grimorio que buscas aún no ha sido escrito.
      </p>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <Outlet />
      <Footer />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">{children}</div>
        <Scripts />
      </body>
    </html>
  );
}

/* ---- Header ---- */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crescent moon — Hécate emblem */}
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="var(--color-gold)"
              opacity="0.85"
            />
            <circle cx="60" cy="44" r="38" fill="var(--color-carbon)" />
            {/* Triple-moon dots */}
            <circle cx="25" cy="30" r="2" fill="var(--color-gold)" />
            <circle cx="72" cy="26" r="1.4" fill="var(--color-gold)" />
            <circle cx="78" cy="64" r="1.2" fill="var(--color-gold)" />
          </svg>
          <span className="header-logo-text">Alkimios</span>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <nav>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/linaje"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                El Linaje
              </Link>
            </li>
            <li>
              <Link
                to="/tienda"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "active" }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ---- Footer ---- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">Alkimios</div>
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/linaje">El Linaje</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/sobre">Sobre mí</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Alkimios. Todos los derechos
          reservados.
        </p>
        <a
          href="https://instagram.com/alkimiosmagicstore"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
          @alkimiosmagicstore
        </a>
      </div>
    </footer>
  );
}
