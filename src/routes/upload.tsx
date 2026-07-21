import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";

export const Route = createFileRoute("/upload")({
  component: UploadPage,
});

function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{
    ok: boolean;
    count: number;
    names: string[];
    git?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((newFiles: FileList | File[]) => {
    const validFiles = Array.from(newFiles).filter((f) =>
      f.type.startsWith("image/") ||
      f.type === "text/plain" ||
      f.type === "text/markdown" ||
      f.name.endsWith(".md") ||
      f.name.endsWith(".txt") ||
      f.type === "application/pdf" ||
      f.name.endsWith(".pdf")
    );
    setFiles((prev) => [...prev, ...validFiles]);
    setResult(null);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append("files", file);
      }

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.ok) {
        setResult(data);
        setFiles([]);
      } else {
        setError(data.error ?? "Error desconocido");
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-12 text-center">
      {/* Header */}
      <div className="mb-8">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Alkimios
        </span>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Subir imágenes
        </h1>
        <p className="mt-2 max-w-md text-base text-gray-500 dark:text-gray-400">
          Arrastra tus imágenes aquí y se guardarán automáticamente
        </p>
      </div>

      {/* Drop Zone */}
      <div
        className={`w-full max-w-lg rounded-2xl border-2 border-dashed p-12 transition-colors ${
          dragOver
            ? "border-indigo-400 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950/30"
            : "border-gray-300 dark:border-gray-700"
        } ${uploading ? "pointer-events-none opacity-50" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.txt,.md,.pdf"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
            e.target.value = "";
          }}
        />

        <div className="flex flex-col items-center gap-3">
          <svg
            className="h-12 w-12 text-gray-400 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              Haz clic para seleccionar
            </span>{" "}
            o arrastra y suelta archivos aquí
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            PNG, JPG, WebP, SVG, TXT, MD, PDF
          </p>
        </div>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {files.length} {files.length === 1 ? "archivo" : "archivos"}{" "}
              seleccionado{files.length > 1 ? "s" : ""}
            </p>
            <button
              onClick={() => setFiles([])}
              className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Limpiar
            </button>
          </div>

          <div className="max-h-48 space-y-2 overflow-y-auto rounded-lg border border-gray-200 p-3 dark:border-gray-800">
            {files.map((file, i) => (
              <div
                key={`${file.name}-${i}`}
                className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-1.5 dark:bg-gray-900"
              >
                <span className="truncate text-sm text-gray-700 dark:text-gray-300">
                  {file.name}
                </span>
                <button
                  onClick={() => removeFile(i)}
                  className="ml-2 shrink-0 text-gray-400 hover:text-red-500"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading ? "Subiendo..." : "Subir archivos"}
          </button>
        </div>
      )}

      {/* Result */}
      {result && result.ok && (
        <div className="mt-6 w-full max-w-lg rounded-lg border border-green-200 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-950/30">
          <p className="text-lg font-medium text-green-700 dark:text-green-400">
            ✅ Listo. {result.count} {result.count === 1 ? "imagen subida" : "imágenes subidas"} correctamente
          </p>
          <p className="mt-1 text-sm text-green-600 dark:text-green-500">
            {result.git === "pushed"
              ? "Guardadas en GitHub también."
              : "Guardadas localmente."}
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-6 w-full max-w-lg rounded-lg border border-red-200 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-950/30">
          <p className="text-red-700 dark:text-red-400">❌ Error: {error}</p>
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-400 dark:text-gray-600">
        Alkimios — subida de archivos
      </footer>
    </main>
  );
}
