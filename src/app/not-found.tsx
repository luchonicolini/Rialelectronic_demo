import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-2xs">
            Error 404 · Enlace no disponible
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            No encontramos lo que{" "}
            <span className="font-serif italic font-normal">
              estabas buscando.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Es posible que el producto haya cambiado de enlace, esté temporalmente fuera de catálogo o la dirección ingresada tenga un error tipográfico.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/catalogo"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 active:scale-98 shadow-sm"
            >
              <Search className="size-4" />
              Explorar el catálogo
            </Link>

            <Link
              href="/"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors hover:bg-elevated active:scale-98"
            >
              <ArrowLeft className="size-4" />
              Volver al inicio
            </Link>
          </div>

          <div className="mt-10 border-t border-border/70 pt-6 text-xs text-muted-foreground">
            <p>
              ¿Buscabas un modelo puntual?{" "}
              <Link
                href="/contacto"
                className="font-semibold text-foreground underline underline-offset-4 hover:text-emerald-600 transition-colors"
              >
                Escribinos por WhatsApp
              </Link>{" "}
              y te confirmamos disponibilidad al instante.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
