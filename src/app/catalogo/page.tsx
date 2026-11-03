import type { Metadata } from "next";
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
        <CatalogBrowser />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
