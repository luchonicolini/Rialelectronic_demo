"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

const FEATURED = [
  {
    name: "iPhone 17 Pro",
    category: "Celulares",
    image: "/images/iphone-17-pro.jpg",
    href: "/catalogo?categoria=celulares",
    position: "object-top",
  },
  {
    name: "MacBook Air M3",
    category: "Notebooks",
    image: "/images/macbook-flagship.jpg",
    href: "/catalogo?categoria=notebooks",
    position: "object-center",
  },
  {
    name: "PlayStation 5",
    category: "Consolas",
    image: "/images/ps5-flagship.jpg",
    href: "/catalogo?categoria=consolas",
    position: "object-center",
  },
] as const;

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = FEATURED[activeIndex];

  const currentWhatsappUrl = whatsappUrl(
    `¡Hola Rial Electrónica! Quiero consultar precio y disponibilidad de ${current.name}.`
  );

  return (
    <section
      className="w-full bg-background border-b border-border py-8 sm:py-12 lg:py-16"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* Columna Izquierda: Tipografía y Conversión */}
          <BlurReveal blur={10} yOffset={20} duration={0.65} className="min-w-0 lg:pb-4">
            <h1
              id="hero-title"
              className="max-w-[14ch] text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground text-balance"
            >
              Tecnología importada,{" "}
              <span className="mt-1 block font-serif font-normal italic tracking-normal text-foreground">
                atención directa.
              </span>
            </h1>

            <p className="mt-6 max-w-[53ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explorá equipos de tecnología y consultanos por WhatsApp. Antes de reservar, confirmamos
              juntos la variante, el precio, la disponibilidad y la entrega.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/catalogo"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-foreground px-7 py-3 text-sm font-bold text-background transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                Explorar catálogo
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>

              <a
                href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar por un equipo del catálogo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Consultar por WhatsApp
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <p className="mt-8 max-w-[52ch] border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              Elegí lo que te interesa; la consulta no confirma una reserva ni un pago.
            </p>
          </BlurReveal>

          {/* Columna Derecha: Showroom Interactivo con Crossfade */}
          <BlurReveal blur={12} yOffset={24} delay={0.1} duration={0.7} className="min-w-0">
            {/* Tarjeta del Equipo Activo */}
            <div className="relative aspect-[4/4.5] min-h-[340px] overflow-hidden rounded-[24px] bg-[#171d25] sm:aspect-[5/5] lg:aspect-[4/5] shadow-lg border border-border/60">
              {FEATURED.map((item, index) => (
                <Image
                  key={item.name}
                  src={item.image}
                  alt={index === activeIndex ? `Imagen ilustrativa de ${item.name}` : ""}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={`object-cover ${item.position} transition-opacity duration-300 motion-reduce:transition-none ${
                    index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={index !== activeIndex}
                />
              ))}

              {/* Degradado inferior protector de texto */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

              {/* Contenido sobre la imagen */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                <div>
                  <p className="text-xs font-medium text-white/75">{current.category}</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl text-white">
                    {current.name}
                  </h2>
                </div>

                <a
                  href={currentWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar por ${current.name} en WhatsApp`}
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#171d25] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                >
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>

            {/* Barra inferior: Enlace de categoría y selectores */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
              <Link
                href={current.href}
                className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Ver {current.category}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>

              {/* Selector de equipos */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Elegir equipo destacado">
                {FEATURED.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={activeIndex === index}
                    className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeIndex === index
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:bg-elevated hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
