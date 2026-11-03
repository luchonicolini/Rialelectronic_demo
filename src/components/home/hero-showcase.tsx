"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const FLAGSHIPS = [
  {
    id: "iphone",
    name: "iPhone 16 Pro Max",
    category: "Apple Flagship",
    badge: "Nuevo Ingreso",
    priceUsd: "US$ 1,450",
    priceUsdt: "1,450 USDT",
    image: "/images/iphone-17-pro.jpg",
    href: "/catalogo?categoria=celulares",
    position: "object-top",
  },
  {
    id: "macbook",
    name: "MacBook Air 13″ M3",
    category: "Apple Silicon",
    badge: "Mayor Potencia",
    priceUsd: "US$ 1,220",
    priceUsdt: "1,220 USDT",
    image: "/images/macbook-flagship.jpg",
    href: "/catalogo?categoria=notebooks",
    position: "object-center",
  },
  {
    id: "ps5",
    name: "PlayStation 5 Slim 1TB",
    category: "Sony Next-Gen",
    badge: "Últimas unidades",
    priceUsd: "US$ 680",
    priceUsdt: "680 USDT",
    image: "/images/ps5-flagship.jpg",
    href: "/catalogo?categoria=consolas",
    position: "object-center",
  },
] as const;

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = FLAGSHIPS[activeIndex];

  // Rotación suave pausada cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FLAGSHIPS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const message = `¡Hola Rial Electrónica! Quiero consultar precio y disponibilidad del ${current.name}.`;

  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-background transition-colors"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16 xl:px-14">
        {/* Columna Izquierda: Tipografía Editorial y Conversión */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs">
            <span className="size-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Equipos sellados de fábrica con garantía</span>
          </div>

          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground"
          >
            La tecnología que buscás.{" "}
            <span className="block italic text-[var(--accent)]">
              Atención directa y transparente.
            </span>
          </h1>

          <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Importamos los mejores equipos del mercado. Consultanos por WhatsApp,
            congelamos tu cotización al instante en dólares, pesos o USDT, y coordinamos
            tu entrega segura.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-95 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Pedir cotización
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="/catalogo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors hover:bg-elevated"
            >
              Ver catálogo completo
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
          </div>

          {/* Micro-beneficios con badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <strong className="block text-sm font-bold text-foreground">100% Originales</strong>
              <span className="text-xs text-muted-foreground">Cajas cerradas de fábrica</span>
            </div>
            <div>
              <strong className="block text-sm font-bold text-foreground">Envíos a todo el país</strong>
              <span className="text-xs text-muted-foreground">Andreani asegurado</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <strong className="block text-sm font-bold text-foreground">Pago en USDT / USD</strong>
              <span className="text-xs text-muted-foreground">Cotización al instante</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Escaparate con Transición Crossfade */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/4.8] min-h-[380px] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg sm:aspect-[4/4.5]">
            {/* Imágenes en Crossfade */}
            {FLAGSHIPS.map((item, index) => (
              <Image
                key={item.id}
                src={item.image}
                alt={index === activeIndex ? `Fotografía de ${item.name}` : ""}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`object-cover ${item.position} transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              />
            ))}

            {/* Gradiente para legibilidad */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Badge superior flotante */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                <Sparkles className="size-3 text-[var(--accent)]" />
                {current.badge}
              </span>
            </div>

            {/* Pie de la tarjeta */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-6 text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-white/70">
                  {current.category}
                </span>
                <h2 className="mt-0.5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {current.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[var(--accent)]">
                    {current.priceUsd}
                  </span>
                  <span className="text-xs text-white/70">
                    · {current.priceUsdt}
                  </span>
                </div>
              </div>

              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por ${current.name} en WhatsApp`}
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md transition-transform hover:scale-105"
              >
                <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>

          {/* Selector de pestañas para cambiar de producto */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-medium text-muted-foreground">Destacados:</span>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Elegir producto destacado">
              {FLAGSHIPS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeIndex === index
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "bg-surface text-muted-foreground hover:bg-elevated hover:text-foreground border border-border"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
