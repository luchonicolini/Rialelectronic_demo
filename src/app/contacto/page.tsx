import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1 py-16 sm:py-20">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Contacto y atención comercial
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Atención directa vía WhatsApp para cotizaciones, fotos reales de equipos en stock y coordinación de entregas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
            {/* Canal WhatsApp */}
            <div className="flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Canal directo WhatsApp
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Respondemos en tiempo real con cotización en USD, USDT o pesos de referencia, fotos del empaque y confirmación de stock.
                </p>

                <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <p>· Lunes a sábados de 9:00 a 20:00 hs</p>
                  <p>· Asesoramiento personalizado sin intermediarios</p>
                  <p>· Número directo: +{siteConfig.whatsappNumber}</p>
                </div>
              </div>

              <a
                href={whatsappUrl("¡Hola Rial Electrónica! Quiero comunicarme con un asesor comercial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-control bg-[var(--accent)] text-sm font-medium text-[var(--accent-contrast)] transition-opacity hover:opacity-95"
              >
                Abrir chat de WhatsApp
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            {/* Condiciones de Entrega y Medios de Pago */}
            <div className="flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Operaciones y entrega
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Despachos con seguro a todo el país o retiro personal con cita previa para verificar el producto.
                </p>

                <div className="mt-6 space-y-4 border-t border-border pt-4 text-sm">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                      Medios aceptados
                    </span>
                    <p className="text-sm font-medium text-foreground mt-0.5">
                      USDT · Dólares en efectivo · Transferencia bancaria
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                      Modalidad
                    </span>
                    <p className="text-sm font-medium text-foreground mt-0.5">
                      Envíos con Andreani / Correo Argentino o punto pactado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground">
                <p>Propuesta no oficial de demostración digital.</p>
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
