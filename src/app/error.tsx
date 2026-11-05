"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logueo de error para diagnóstico
    console.error("Error no controlado en la aplicación:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16 sm:px-6 lg:px-8 text-foreground">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle className="size-6" aria-hidden="true" />
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Algo no salió como esperábamos
        </h1>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Ocurrió un inconveniente momentáneo al cargar esta sección. Podés intentar recargarla o regresar a la página principal.
        </p>

        {error.digest && (
          <p className="mt-2 font-mono text-[10px] text-muted-foreground opacity-70">
            Código de referencia: {error.digest}
          </p>
        )}

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-90 active:scale-98 shadow-sm"
          >
            <RotateCcw className="size-4" />
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:bg-elevated active:scale-98"
          >
            <Home className="size-4" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
