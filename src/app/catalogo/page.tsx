import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { CatalogBrowser } from "@/components/catalogo/catalog-browser";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export const metadata: Metadata = {
  title: "Catálogo de Productos — Rial Electrónica",
  description: "Equipos de tecnología originales con cotización al instante en dólares y USDT.",
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Suspense
          fallback={
            <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10">
              <div className="h-8 w-60 animate-pulse rounded bg-border/50" />
              <div className="mt-4 h-4 w-40 animate-pulse rounded bg-border/40" />
            </div>
          }
        >
          <CatalogBrowser />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
