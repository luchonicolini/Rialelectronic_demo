import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { MOCK_FEATURED_PRODUCTS } from "@/data/mock-catalog";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function FeaturedGrid() {
  return (
    <section className="py-14 sm:py-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal duration={0.6} yOffset={20}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Selección destacada
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Equipos más{" "}
                <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
                  consultados.
                </span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Todos los equipos son nuevos, originales y cerrados en caja. Cotización al
              instante en USD, USDT o pesos.
            </p>
          </div>
        </BlurReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_FEATURED_PRODUCTS.map((prod, idx) => {
            const waLink = whatsappUrl(
              `¡Hola Rial Electrónica! Quiero consultar precio y stock de ${prod.name} (${prod.brand}).`
            );

            return (
              <BlurReveal key={prod.id} delay={0.06 * idx} duration={0.5} yOffset={16}>
                <article className="group flex flex-col h-full rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)] hover:-translate-y-1">
                  {/* Contenedor de Imagen y Badge */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-elevated p-3 mb-4 flex items-center justify-center">
                    {prod.badge && (
                      <span
                        className={`absolute top-2.5 left-2.5 z-10 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider shadow-2xs ${
                          prod.badge === "Últimas unidades"
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                            : prod.badge === "Oferta"
                            ? "bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30"
                            : "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30"
                        }`}
                      >
                        {prod.badge}
                      </span>
                    )}

                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info del Producto */}
                  <div className="flex flex-col flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      {prod.brand} · {prod.category}
                    </span>

                    <h3 className="mt-1 font-bold text-base text-foreground leading-snug line-clamp-2">
                      {prod.name}
                    </h3>

                    {/* Micro-specs */}
                    <ul className="mt-2.5 mb-4 space-y-1 text-xs text-muted-foreground flex-1">
                      {prod.specs.slice(0, 2).map((spec, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-[var(--accent)]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Precios y Botón de Conversión */}
                    <div className="pt-3 border-t border-border flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                          Cotización de referencia
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <strong className="text-lg font-extrabold text-foreground tracking-tight">
                            US$ {prod.priceUsd.toLocaleString("en-US")}
                          </strong>
                          {prod.priceUsdt && (
                            <span className="text-xs font-bold text-[var(--accent)]">
                              · {prod.priceUsdt} USDT
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Consultar por WhatsApp"
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-xs transition-transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                      >
                        <MessageCircle className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </BlurReveal>
            );
          })}
        </div>

        <BlurReveal delay={0.2} duration={0.5} yOffset={12} className="mt-12 text-center">
          <Link
            href="/catalogo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-sm font-bold text-foreground transition-all hover:bg-elevated hover:border-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Explorar todos los productos disponibles
            <ArrowUpRight className="size-4" />
          </Link>
        </BlurReveal>
      </div>
    </section>
  );
}
