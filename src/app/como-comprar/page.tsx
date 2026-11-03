import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { HowItWorks } from "@/components/home/how-it-works";
import { FaqSection } from "@/components/home/faq-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export const metadata: Metadata = {
  title: "Cómo Comprar — Rial Electrónica",
  description: "Paso a paso para elegir, cotizar y recibir tu equipo con total seguridad y atención por WhatsApp.",
};

export default function ComoComprarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-white">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <HowItWorks />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
