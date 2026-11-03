"use client";

import React from "react";
import Link from "next/link";
import {
  Boxes,
  ShieldCheck,
  Headphones,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  PackageCheck,
  FileSpreadsheet,
} from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { whatsappUrl } from "@/lib/site";

export function WholesaleBanner() {
  const wholesaleMessage =
    "¡Hola Rial Electrónica! Tengo un comercio / soy revendedor y quisiera solicitar la lista de precios mayorista actualizada y condiciones de compra por volumen.";

  const wholesaleLink = whatsappUrl(wholesaleMessage);

  return (
    <section
      className="w-full bg-background py-10 sm:py-16 lg:py-20 border-b border-border"
      aria-labelledby="wholesale-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Contenedor Principal tipo Squircle Editorial */}
        <BlurReveal blur={8} yOffset={15}>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#F2F4F7] dark:bg-card border border-border/80 p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Columna Izquierda: Información Editorial y Propuesta B2B */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Pill Superior */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-foreground text-background">
                    <Boxes className="w-3.5 h-3.5" aria-hidden="true" />
                    Canal Mayorista
                  </span>
                  <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
                    Para comercios, locales y revendedores
                  </span>
                </div>

                {/* Título Editorial con contraste de serif itálica */}
                <div>
                  <h2
                    id="wholesale-heading"
                    className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]"
                  >
                    Abastecimiento comercial{" "}
                    <span className="font-serif italic font-normal text-[1.08em] tracking-normal text-foreground">
                      para tu negocio.
                    </span>
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                    Precios preferenciales por volumen en USDT y pesos, equipos en caja sellada de fábrica,
                    despacho asegurado bulto cerrado a todo el país y atención ejecutiva directa vía WhatsApp.
                  </p>
                </div>

                {/* 3 Pilares B2B */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-background/80 border border-border/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="w-8 h-8 rounded-xl bg-[#F2F4F7] dark:bg-muted flex items-center justify-center text-foreground mb-2.5">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground">Precios en USDT</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">
                      Lista mayorista actualizada con cotización transparente por volumen.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-background/80 border border-border/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="w-8 h-8 rounded-xl bg-[#F2F4F7] dark:bg-muted flex items-center justify-center text-foreground mb-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground">Bulto Asegurado</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">
                      Envíos por Andreani o Vía Cargo con valor 100% declarado y precinto.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-background/80 border border-border/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="w-8 h-8 rounded-xl bg-[#F2F4F7] dark:bg-muted flex items-center justify-center text-foreground mb-2.5">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground">Asesor 1 a 1</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">
                      Coordinación directa de órdenes, pedidos mixtos y seguimiento en vivo.
                    </p>
                  </div>
                </div>

                {/* Acciones y Llamado a la Acción */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={wholesaleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
                  >
                    <span>Solicitar lista de precios mayorista</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white dark:bg-background px-5 py-3.5 text-xs sm:text-sm font-semibold text-foreground border border-border hover:bg-slate-50 transition-colors"
                  >
                    <span>Preguntas comerciales</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                </div>
              </div>

              {/* Columna Derecha: Tarjeta Ficha Ejecutiva del Canal Mayorista */}
              <div className="lg:col-span-5">
                <div className="rounded-[1.75rem] bg-white dark:bg-background p-6 sm:p-8 border border-border shadow-[0_12px_32px_rgba(0,0,0,0.04)]">
                  {/* Cabecera de la ficha */}
                  <div className="flex items-center justify-between pb-5 border-b border-border/80">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                        Condiciones Comerciales
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
                        Canal B2B & Distribuidores
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Activo
                    </span>
                  </div>

                  {/* Lista de Especificaciones Comerciales */}
                  <div className="divide-y divide-border/60 text-xs sm:text-sm">
                    <div className="py-3.5 flex items-center justify-between gap-3">
                      <span className="text-muted-foreground font-medium">Líneas disponibles</span>
                      <span className="font-semibold text-foreground text-right">
                        Apple, Sony, Xiaomi, Asus, JBL
                      </span>
                    </div>

                    <div className="py-3.5 flex items-center justify-between gap-3">
                      <span className="text-muted-foreground font-medium">Estado de los equipos</span>
                      <span className="font-semibold text-foreground text-right flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Caja sellada de fábrica
                      </span>
                    </div>

                    <div className="py-3.5 flex items-center justify-between gap-3">
                      <span className="text-muted-foreground font-medium">Moneda operativa</span>
                      <span className="font-semibold text-foreground text-right">
                        USDT (Red TRC20 / BEP20) o ARS
                      </span>
                    </div>

                    <div className="py-3.5 flex items-center justify-between gap-3">
                      <span className="text-muted-foreground font-medium">Logística nacional</span>
                      <span className="font-semibold text-foreground text-right">
                        Andreani / Vía Cargo puerta a puerta
                      </span>
                    </div>

                    <div className="py-3.5 flex items-center justify-between gap-3">
                      <span className="text-muted-foreground font-medium">Tiempo de despacho</span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400 text-right">
                        24 hs hábiles con seguro total
                      </span>
                    </div>
                  </div>

                  {/* Nota de garantía al pie */}
                  <div className="mt-5 pt-4 border-t border-border/80 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-muted flex items-center justify-center shrink-0">
                      <PackageCheck className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                      Despachamos desde Puerto Iguazú a comercios en todas las provincias de Argentina con número de guía oficial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
