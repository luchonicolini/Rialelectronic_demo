import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { ShippingSection } from "@/components/home/shipping-section";
import { FaqSection } from "@/components/home/faq-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export const metadata: Metadata = {
  title: "Envíos y Retiros — Rial Electrónica",
  description: "Despachos asegurados a todo el país vía Andreani y Correo Argentino, o retiro coordinado.",
};

export default function EnviosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-white">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <ShippingSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
