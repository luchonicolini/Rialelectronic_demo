import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { QuotationList } from "@/components/commerce/quotation-list";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export const metadata: Metadata = {
  title: "Lista de consulta — Rial Electrónica",
  description: "Equipos seleccionados para solicitar cotización y consultar disponibilidad directa por WhatsApp.",
};

export default function ListaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <QuotationList />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
