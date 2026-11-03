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
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-stretch gap-8 lg:gap-12 py-7 sm:py-9">
              {/* Tarjeta Visual: Efecto de Envío con Mapa Urbano Auténtico */}
              <div className="order-2 lg:order-1 relative rounded-[22px] sm:rounded-[24px] bg-[#f8f9fb] dark:bg-elevated/40 border border-border/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[420px]">
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

                {/* Lienzo del Mapa con Bloques Urbanos, Agua, Avenidas y Trazado */}
                <div className="relative w-full flex-1 my-3 sm:my-4 rounded-[18px] bg-[#edf0f5] dark:bg-[#181b22] border border-border/70 overflow-hidden min-h-[240px] sm:min-h-[260px]">
                  <svg
                    viewBox="0 0 400 250"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    {/* Fondo base urbano */}
                    <rect width="400" height="250" fill="#edf0f5" className="dark:fill-[#181b22]" />

                    {/* Costa / Río en lateral superior derecho */}
                    <path
                      d="M 285,0 Q 315,60 335,120 T 385,250 L 400,250 L 400,0 Z"
                      fill="#d7e5f2"
                      className="dark:fill-[#1e293b]/70"
                    />
                    <path
                      d="M 285,0 Q 315,60 335,120 T 385,250"
                      stroke="#b8d4ed"
                      className="dark:stroke-[#334155]"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Manzanas urbanas residenciales */}
                    <rect x="15" y="15" width="60" height="40" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="85" y="15" width="70" height="40" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="165" y="15" width="80" height="40" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />

                    {/* Parque o zona verde */}
                    <rect x="15" y="65" width="45" height="55" rx="8" fill="#dbe7dd" className="dark:fill-[#1e3328]" />
                    <path d="M 18,110 Q 35,90 55,115" stroke="#c8dec8" className="dark:stroke-[#274837]" strokeWidth="1.5" fill="none" />

                    {/* Manzanas centrales */}
                    <rect x="70" y="65" width="55" height="55" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="135" y="65" width="65" height="55" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="210" y="65" width="60" height="45" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />

                    {/* Manzanas inferiores */}
                    <rect x="15" y="130" width="75" height="50" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="100" y="130" width="80" height="50" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="190" y="120" width="70" height="60" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />

                    {/* Manzanas sur */}
                    <rect x="15" y="190" width="110" height="48" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="135" y="190" width="90" height="48" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />
                    <rect x="235" y="190" width="60" height="48" rx="4" fill="#e2e7ef" className="dark:fill-[#222733]" />

                    {/* Red de calles secundarias (blancas en claro, sutiles en oscuro) */}
                    <g stroke="#ffffff" className="dark:stroke-[#2d3342]" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="0" y1="60" x2="285" y2="60" />
                      <line x1="0" y1="125" x2="335" y2="125" />
                      <line x1="0" y1="185" x2="355" y2="185" />
                      <line x1="65" y1="0" x2="65" y2="250" />
                      <line x1="130" y1="0" x2="130" y2="250" />
                      <line x1="205" y1="0" x2="205" y2="250" />
                      <line x1="275" y1="0" x2="275" y2="250" />
                    </g>

                    {/* Avenidas principales y autopista ribereña */}
                    <path
                      d="M 275,0 Q 300,70 320,135 T 370,250"
                      stroke="#cbd5e1"
                      className="dark:stroke-[#334155]"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 275,0 Q 300,70 320,135 T 370,250"
                      stroke="#f8fafc"
                      className="dark:stroke-[#1e293b]"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Avenida Diagonal */}
                    <path
                      d="M 0,210 L 90,160 L 205,95 L 300,45"
                      stroke="#cbd5e1"
                      className="dark:stroke-[#334155]"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 0,210 L 90,160 L 205,95 L 300,45"
                      stroke="#f8fafc"
                      className="dark:stroke-[#1e293b]"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Rotonda */}
                    <circle cx="205" cy="95" r="10" fill="#edf0f5" className="dark:fill-[#181b22]" stroke="#cbd5e1" strokeWidth="3" />
                    <circle cx="205" cy="95" r="5" fill="#dbe7dd" className="dark:fill-[#1e3328]" />

                    {/* Etiquetas Cartográficas Discretas */}
                    <text x="22" y="80" fill="#94a3b8" fontSize="7.5" fontWeight="600" letterSpacing="0.05em">PARQUE NORTE</text>
                    <text x="315" y="40" fill="#64748b" fontSize="7.5" fontWeight="600" letterSpacing="0.05em">COSTANERA</text>
                    <text x="140" y="55" fill="#94a3b8" fontSize="7" fontWeight="500">AV. DEL LIBERTADOR</text>
                    <text x="145" y="180" fill="#94a3b8" fontSize="7" fontWeight="500">AV. SANTA FE</text>

                    {/* Trayectoria Dinámica del Envío (Ruta GPS en Verde Esmeralda) */}
                    <motion.path
                      d="M 65,40 L 65,95 L 130,95 L 170,125 L 205,125 L 235,160 L 275,160"
                      stroke="#0d7a53"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: reducedMotion ? 1 : 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Nodo Inicial: Depósito Central */}
                  <div
                    className="absolute left-[16.25%] top-[16%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                    title="Depósito Central Rial Electrónica"
                  >
                    <div className="size-8 sm:size-9 rounded-xl bg-[#171d25] text-white flex items-center justify-center shadow-lg border border-white/20">
                      <Package className="size-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Nodo Final: Domicilio con Efecto Radar Ping */}
                  <div
                    className="absolute left-[68.75%] top-[64%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                    title="Destino del comprador"
                  >
                    {!reducedMotion && (
                      <span
                        className="absolute size-10 sm:size-12 rounded-full bg-emerald-500/35 animate-ping pointer-events-none"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative size-8 sm:size-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg border border-white/20">
                      <MapPin className="size-4 sm:size-4.5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Pie del Mapa con Código de Tracking */}
                <div className="flex items-center justify-between pt-2.5 border-t border-border/70">
                  <span className="text-xs font-medium text-muted-foreground">
                    Seguimiento: <strong className="text-foreground font-semibold">AR-9482103</strong>
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Entrega asegurada
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
