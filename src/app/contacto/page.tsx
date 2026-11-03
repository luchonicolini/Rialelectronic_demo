import type { Metadata } from "next";
import { MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";
import { whatsappUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto — Rial Electrónica",
  description: "Atención comercial personalizada por WhatsApp, cotizaciones en el acto y soporte.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-white">
      <SiteHeader />
      <main id="contenido" className="flex-1 py-14 sm:py-20">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Canal oficial
            </span>
            <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Contactate con Rial Electrónica
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              La atención más rápida y directa es por WhatsApp. Te respondemos al instante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Tarjeta de WhatsApp Principal */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--accent)] bg-surface p-8 shadow-md">
              <div>
                <div className="size-12 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center mb-6">
                  <MessageCircle className="size-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Atención por WhatsApp
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Para consultas sobre stock en tiempo real, fotos de equipos cerrados en caja y cotización congelada en USD / USDT / ARS.
                </p>
                <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Clock className="size-4 text-[var(--accent)]" /> Horario comercial de lunes a sábados
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[var(--accent)]" /> Atención 1 a 1 sin intermediarios
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl("¡Hola Rial Electrónica! Quiero comunicarme con un asesor comercial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-sm hover:opacity-95"
              >
                Abrir chat de WhatsApp
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            {/* Tarjeta de Información y Modalidades */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-8">
              <div>
                <div className="size-12 rounded-2xl bg-elevated text-foreground flex items-center justify-center mb-6 border border-border">
                  <MapPin className="size-6 text-[var(--accent)]" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Modalidades de Entrega
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Podés solicitar envío asegurado a tu domicilio a través de Andreani o Correo Argentino, o pactar punto de retiro previo aviso.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-background p-4 space-y-3">
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Medios de pago
                    </strong>
                    <span className="text-sm font-semibold text-foreground">
                      USDT · Dólares billete · Transferencia bancaria
                    </span>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Garantía
                    </strong>
                    <span className="text-sm font-semibold text-foreground">
                      Directa de fábrica y soporte oficial de cada marca
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground">
                <p>Número de contacto: +{siteConfig.whatsappNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
