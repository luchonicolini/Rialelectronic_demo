"use client";

import React from "react";
import { ArrowRight, FileSpreadsheet } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { whatsappUrl } from "@/lib/site";

interface WholesaleSample {
  category: string;
  model: string;
  condition: string;
  tierQty: string;
  priceUsd: number;
}

const SAMPLE_ITEMS: WholesaleSample[] = [
  {
    category: "Apple",
    model: "iPhone 16 Pro 128GB",
    condition: "Caja sellada",
    tierQty: "Desde 3 un.",
    priceUsd: 1040,
  },
  {
    category: "Apple",
    model: "MacBook Air 13″ M3 8/256",
    condition: "Caja sellada",
    tierQty: "Desde 2 un.",
    priceUsd: 1080,
  },
  {
    category: "Sony",
    model: "PlayStation 5 Slim 1TB",
    condition: "Caja sellada",
    tierQty: "Desde 2 un.",
    priceUsd: 540,
  },
  {
    category: "Xiaomi",
    model: "Redmi Note 13 Pro 8/256",
    condition: "Caja sellada",
    tierQty: "Desde 5 un.",
    priceUsd: 245,
  },
];

export function WholesaleBanner() {
  const wholesaleMessage =
    "¡Hola Rial Electrónica! Tengo un local / soy revendedor y quiero solicitar la lista de precios mayorista actualizada y condiciones de compra.";

  const wholesaleLink = whatsappUrl(wholesaleMessage);

  return (
    <section
      className="w-full bg-background py-10 sm:py-16 lg:py-20 border-b border-border"
      aria-labelledby="wholesale-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal blur={8} yOffset={15}>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#F2F4F7] border border-border/80 p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Columna Izquierda: Mensaje Comercial Directo */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    Canal Revendedores
                  </span>
                  <h2
                    id="wholesale-heading"
                    className="mt-2.5 text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]"
                  >
                    Lista mayorista{" "}
                    <span className="font-serif italic font-normal text-[1.08em] tracking-normal text-foreground">
                      para locales y comercios.
                    </span>
                  </h2>
                  <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                    Si tenés un local de tecnología o revendés por tu cuenta, accedé a precios por volumen
                    en dólares o USDT desde 3 unidades mixtas. Despachamos bulto cerrado con seguro a todo el
                    país desde Puerto Iguazú.
                  </p>
                </div>

                {/* Especificaciones operativas reales (sin iconitos genéricos) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-border/80 py-4.5 text-xs sm:text-sm">
                  <div>
                    <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Mínimo
                    </span>
                    <strong className="mt-1 block font-bold text-foreground">
                      3 unidades mixtas
                    </strong>
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Cobro
                    </span>
                    <strong className="mt-1 block font-bold text-foreground">
                      USDT o billete
                    </strong>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Logística
                    </span>
                    <strong className="mt-1 block font-bold text-foreground">
                      Andreani asegurado
                    </strong>
                  </div>
                </div>

                {/* CTA Directo a la lista por WhatsApp */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href={wholesaleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background shadow-[0_8px_20px_rgba(24,25,28,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
                  >
                    <span>Pedir lista mayorista por WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-muted-foreground">
                  Enviamos el archivo diario con disponibilidad de stock, marcas y precios vigentes.
                </p>
              </div>

              {/* Columna Derecha: Vista previa auténtica de la lista de precios mayorista */}
              <div className="lg:col-span-6">
                <div className="rounded-[1.75rem] bg-white dark:bg-background border border-border shadow-[0_12px_32px_rgba(0,0,0,0.04)] overflow-hidden">
                  {/* Encabezado de la planilla */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border/80 bg-slate-50/60 dark:bg-muted/40">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-bold text-foreground tracking-tight">
                        Muestra de lista mayorista · Stock diario
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
                      Valores de referencia
                    </span>
                  </div>

                  {/* Tabla de Muestra Real de Precios */}
                  <div className="divide-y divide-border/60">
                    {SAMPLE_ITEMS.map((item) => (
                      <div
                        key={item.model}
                        className="px-5 py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm hover:bg-slate-50/40 dark:hover:bg-muted/20 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-[11px] font-bold text-foreground tracking-wider uppercase">
                              {item.category}
                            </span>
                            <span className="text-muted-foreground/30 font-light">·</span>
                            <span className="text-xs text-muted-foreground font-medium">
                              Caja sellada
                            </span>
                          </div>
                          <p className="text-sm sm:text-[15px] font-bold text-foreground truncate mt-0.5">
                            {item.model}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[11px] text-muted-foreground block">
                            {item.tierQty}
                          </span>
                          <strong className="text-sm sm:text-base font-bold text-[#0D7A53] tabular-nums">
                            US$ {item.priceUsd.toLocaleString("es-AR")}
                          </strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pie de la tabla */}
                  <div className="px-5 py-3.5 border-t border-border/80 bg-slate-50/40 dark:bg-muted/30 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>Líneas completas: Apple · Sony · Xiaomi · JBL · ASUS</span>
                    <a
                      href={wholesaleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      Ver lista completa
                      <ArrowRight className="w-3 h-3" />
                    </a>
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
