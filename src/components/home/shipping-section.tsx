"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, Package, PackageCheck, Truck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function ShippingSection() {
  const reducedMotion = useReducedMotion();

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

            {/* Cuerpo: Efecto de Envío en Vivo y Rutas */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-stretch gap-8 lg:gap-12 py-7 sm:py-9">
              {/* Tarjeta Visual: Efecto de Envío y Tracking GPS en Vivo */}
              <div className="order-2 lg:order-1 relative rounded-[22px] sm:rounded-[24px] bg-[#f8f9fb] dark:bg-elevated/40 border border-border/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between overflow-hidden min-h-[360px] sm:min-h-[400px]">
                {/* Cabecera del Mapa en Vivo */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight">
                      En camino a tu domicilio
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-muted-foreground">
                    Hoy, 15:40 hs
                  </span>
                </div>

                {/* Lienzo del Mapa con Trazado Callejero y Recorrido Animado */}
                <div className="relative w-full flex-1 my-3 sm:my-4 rounded-[18px] bg-white dark:bg-surface border border-border/60 overflow-hidden min-h-[220px]">
                  {/* Cuadrícula Callejera de Fondo */}
                  <svg
                    viewBox="0 0 340 220"
                    className="absolute inset-0 w-full h-full stroke-gray-200 dark:stroke-white/10 fill-none"
                    strokeWidth="2.5"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M 0,35 Q 80,45 200,30 T 340,40" />
                    <path d="M 0,85 Q 90,80 180,95 T 340,90" />
                    <path d="M 0,140 Q 110,135 220,150 T 340,140" />
                    <path d="M 0,195 Q 120,190 240,205 T 340,195" />
                    <path d="M 45,0 Q 55,70 45,220" />
                    <path d="M 120,0 Q 130,90 125,220" />
                    <path d="M 200,0 Q 190,80 205,220" />
                    <path d="M 280,0 Q 290,90 285,220" />
                  </svg>

                  {/* Trayectoria Animada del Envío */}
                  <svg
                    viewBox="0 0 340 220"
                    className="absolute inset-0 w-full h-full fill-none overflow-visible"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M 45,45 L 45,95 L 120,90 L 155,125 L 200,120 L 240,165"
                      stroke="#0d7a53"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: reducedMotion ? 1 : 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Nodo Inicial: Depósito Central */}
                  <div
                    className="absolute left-[13.2%] top-[20.4%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                    title="Depósito Rial Electrónica"
                  >
                    <div className="size-8 sm:size-9 rounded-xl bg-[#171d25] text-white flex items-center justify-center shadow-md">
                      <Package className="size-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Nodo Final: Domicilio con Efecto Radar Ping */}
                  <div
                    className="absolute left-[70.5%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                    title="Destino del comprador"
                  >
                    {!reducedMotion && (
                      <span
                        className="absolute size-10 sm:size-11 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative size-8 sm:size-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <MapPin className="size-4.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Badge de Flota Logística Flotante */}
                  <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-surface/95 backdrop-blur-sm border border-border/80 px-2.5 sm:px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-2">
                    <Truck className="size-3.5 text-emerald-600 dark:text-emerald-500" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-foreground">
                      Despacho vía Andreani
                    </span>
                  </div>
                </div>

                {/* Pie del Mapa con Código de Tracking */}
                <div className="flex items-center justify-between pt-2 border-t border-border/70">
                  <span className="text-xs font-medium text-muted-foreground">
                    Seguimiento: <strong className="text-foreground font-semibold">AR-9482103</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                    A tiempo
                  </span>
                </div>
              </div>

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
