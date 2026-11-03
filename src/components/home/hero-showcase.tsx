import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const FEATURED_HERO = {
  name: "MacBook Air 13″ M3",
  brand: "Apple Silicon",
  priceUsd: "US$ 1,220",
  priceUsdt: "1,220 USDT",
  image: "/images/macbook-flagship.jpg",
  specs: ["Chip M3 8-Core", "Pantalla Liquid Retina 13.6″", "Autonomía de hasta 18h"],
};

export function HeroShowcase() {
  const message = `¡Hola Rial Electrónica! Quiero consultar precio y disponibilidad del ${FEATURED_HERO.name}.`;

  return (
    <section
      aria-labelledby="hero-title"
      className="bg-background"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 py-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20 xl:px-14">
        {/* Columna Izquierda: Tipografía Editorial y Conversión */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <h1
            id="hero-title"
            className="text-[clamp(2.15rem,6vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground"
          >
            Tecnología y equipos importados.{" "}
            <span className="block font-serif italic font-normal tracking-normal text-muted-foreground mt-0.5">
              Cotización directa y transparente.
            </span>
          </h1>

          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Consultá stock y precio en tiempo real por WhatsApp. Cotizamos en dólares,
            pesos o USDT de referencia y coordinamos envíos asegurados a todo el país.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-control bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:w-auto"
            >
              Pedir cotización
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="/catalogo"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-control border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors hover:bg-elevated sm:w-auto"
            >
              Explorar catálogo
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
          </div>

          {/* Información técnica y comercial limpia */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-6 sm:pt-8">
            <div className="border-b border-border/50 pb-3 sm:border-b-0 sm:pb-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Atención
              </span>
              <p className="mt-0.5 text-sm font-medium text-foreground sm:mt-1">
                Asesoramiento directo vía WhatsApp
              </p>
            </div>
            <div className="border-b border-border/50 pb-3 sm:border-b-0 sm:pb-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Despacho
              </span>
              <p className="mt-0.5 text-sm font-medium text-foreground sm:mt-1">
                Envíos asegurados por Andreani
              </p>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Moneda
              </span>
              <p className="mt-0.5 text-sm font-medium text-foreground sm:mt-1">
                Operaciones en USD y USDT
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Producto Editorial Limpia */}
        <div className="lg:col-span-5">
          <div className="flex flex-col overflow-hidden rounded-[1.85rem] border border-border bg-[#F2F4F7] p-5 dark:bg-elevated sm:rounded-[2.25rem] sm:p-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/60 dark:bg-black/20 sm:aspect-[16/11] sm:rounded-2xl">
              <Image
                src={FEATURED_HERO.image}
                alt={FEATURED_HERO.name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-5 flex flex-col sm:mt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {FEATURED_HERO.brand}
                  </span>
                  <h2 className="mt-0.5 text-base font-bold text-foreground sm:text-lg">
                    {FEATURED_HERO.name}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                    Referencia
                  </span>
                  <strong className="text-base font-bold text-foreground sm:text-lg">
                    {FEATURED_HERO.priceUsd}
                  </strong>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-border/60 pt-3.5 sm:mt-4 sm:gap-2 sm:pt-4">
                {FEATURED_HERO.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-full border border-border/60 bg-white px-2.5 py-0.5 text-[11px] text-muted-foreground dark:bg-surface sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
