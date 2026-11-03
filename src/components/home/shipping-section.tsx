"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, PackageCheck, Truck } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function ShippingSection() {
  return (
    <section
      id="envios"
      className="border-b border-border bg-background py-8 sm:py-14 scroll-mt-24"
      aria-labelledby="shipping-title"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal duration={0.65} yOffset={24}>
          <div className="rounded-[20px] sm:rounded-[28px] border border-border bg-white dark:bg-surface p-6 sm:p-10 lg:px-10 lg:pt-14 lg:pb-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-foreground">
            {/* Encabezado */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] items-end gap-5 lg:gap-12 pb-7 lg:pb-9 border-b border-border/70">
              <h2
                id="shipping-title"
                className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight text-foreground leading-[1.08] text-balance"
              >
                Recibilo sin{" "}
                <span className="font-serif italic font-normal tracking-normal text-foreground">
                  complicaciones.
                </span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-[0.95rem] leading-[1.75] max-w-[52ch] lg:max-w-[36ch] lg:justify-self-end text-pretty">
                Elegí recibirlo en tu domicilio o coordinar un retiro. Confirmamos disponibilidad,
                costo y plazo con vos antes de avanzar.
              </p>
            </div>

            {/* Cuerpo: Imagen y Rutas */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-stretch gap-8 lg:gap-12 py-7 sm:py-9">
              {/* Foto de Logística */}
              <figure className="order-2 lg:order-1 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[400px] h-full rounded-[20px] overflow-hidden bg-[#eef0f3] dark:bg-elevated border border-border/60">
                <Image
                  src="/images/delivery-package.jpg"
                  alt="Paquetes organizados en un centro logístico de Rial Electrónica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b12]/80 via-[#0c0b12]/20 to-transparent pointer-events-none" />
                <figcaption className="absolute z-10 bottom-5 inset-x-6 text-white text-sm leading-relaxed text-balance">
                  Coordinamos cada entrega antes de despachar.
                </figcaption>
              </figure>

              {/* Árbol de Rutas y Estados */}
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                {/* Origen: Pedido confirmado */}
                <div className="flex items-start gap-3.5">
                  <PackageCheck
                    className="size-5 shrink-0 text-emerald-600 dark:text-emerald-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="grid gap-1">
                    <strong className="text-[0.9375rem] font-semibold text-foreground">
                      Pedido confirmado
                    </strong>
                    <span className="text-xs sm:text-[0.8125rem] text-muted-foreground leading-[1.55] text-pretty">
                      Stock, importe y condiciones acordados por WhatsApp.
                    </span>
                  </div>
                </div>

                {/* Ramas de Envío y Retiro */}
                <div className="relative mt-2.5 ml-[9px] sm:ml-2.5 pl-7 sm:pl-[34px] py-1.5 border-l border-border/80">
                  {/* Nodo 1: Envío a domicilio */}
                  <article className="relative py-5 sm:py-[22px] grid grid-cols-1">
                    <span className="absolute -left-[49px] sm:-left-[55px] top-4.5 sm:top-[18px] size-10 sm:size-[42px] rounded-full border border-border bg-white dark:bg-surface shadow-[0_2px_6px_rgba(0,0,0,0.04)] text-foreground flex items-center justify-center">
                      <Truck className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-bold tracking-tight text-foreground">
                        Envío a tu domicilio
                      </h3>
                      <p className="mt-1.5 max-w-[48ch] text-sm text-muted-foreground leading-[1.7] text-pretty">
                        A todo el país. El costo y el plazo se confirman según el producto y el
                        destino antes de despachar.
                      </p>
                      <span className="inline-flex items-center gap-2 mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                        Costo y plazo informados por WhatsApp
                      </span>
                    </div>
                  </article>

                  {/* Separador discontinuo */}
                  <div className="border-t border-dashed border-border/80" />

                  {/* Nodo 2: Retiro coordinado */}
                  <article className="relative py-5 sm:py-[22px] grid grid-cols-1">
                    <span className="absolute -left-[49px] sm:-left-[55px] top-4.5 sm:top-[18px] size-10 sm:size-[42px] rounded-full border border-border bg-white dark:bg-surface shadow-[0_2px_6px_rgba(0,0,0,0.04)] text-foreground flex items-center justify-center">
                      <MapPin className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-bold tracking-tight text-foreground">
                        Retiro coordinado
                      </h3>
                      <p className="mt-1.5 max-w-[48ch] text-sm text-muted-foreground leading-[1.7] text-pretty">
                        Acordamos el punto de encuentro y el horario antes de que te acerques.
                      </p>
                      <span className="inline-flex items-center gap-2 mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                        Punto y horario acordados con vos
                      </span>
                    </div>
                  </article>
                </div>

                {/* Nota de soporte */}
                <div className="flex items-center gap-2.5 mt-3.5 text-xs sm:text-[0.8125rem] text-muted-foreground leading-[1.55]">
                  <MessageCircle
                    className="size-4 shrink-0 text-emerald-600 dark:text-emerald-500"
                    aria-hidden="true"
                  />
                  <span>La atención y la coordinación continúan por WhatsApp.</span>
                </div>
              </div>
            </div>

            {/* Pie de Logística */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-7 pt-7 border-t border-border/70">
              <a
                href={whatsappUrl(
                  "¡Hola Rial Electrónica! Quiero consultar opciones de envío o retiro para un producto. Mi localidad es:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-12 px-6 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto shadow-sm"
              >
                Consultar envío o retiro <ArrowUpRight className="size-[18px]" aria-hidden="true" />
              </a>
              <Link
                href="/envios"
                className="inline-flex items-center min-h-11 text-sm font-semibold text-foreground underline underline-offset-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Ver información de envíos
              </Link>
              <p className="text-xs text-muted-foreground leading-[1.55] max-w-[32ch] lg:ml-auto">
                Sin pagos en la web. La entrega se coordina después de confirmar tu pedido.
              </p>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
