"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Star } from "lucide-react";
import { useReducedMotion } from "motion/react";

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  product: string;
  comment: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "demian",
    name: "Demian Pozzi",
    location: "CABA",
    product: "iPhone 16 Pro Max",
    comment:
      "Completamente original, sellado y confiable. Es una gran máquina de teléfono duradero y muy recomendado.",
  },
  {
    id: "ricardo",
    name: "Ricardo Balboni",
    location: "Córdoba Capital",
    product: "PlayStation 5 Slim",
    comment:
      "La verdad tenía mis dudas al principio, pero me brindaron toda la seguridad y fotos del producto. La consola llegó en caja sellada y en perfecto estado. 100% recomendable.",
  },
  {
    id: "lulu",
    name: "Lulú López",
    location: "Rosario, Santa Fe",
    product: "Auriculares Inalámbricos",
    comment:
      "Súper rápido el despacho y el código de seguimiento funcionó perfecto. Los auriculares son 100% originales con un sonido increíble. Sin dudas vuelvo a comprar.",
  },
  {
    id: "martin",
    name: "Martín Silveira",
    location: "Mendoza",
    product: "MacBook Air M3",
    comment:
      "Excelente atención. Me pasaron fotos reales del equipo antes de pagar y verifiqué el número de serie en la web oficial de Apple. Impecable servicio.",
  },
  {
    id: "camila",
    name: "Camila Valenzuela",
    location: "Mar del Plata",
    product: "Apple Watch Series 9",
    comment:
      "Llegó en 24 horas a mi domicilio por transporte asegurado. Caja sellada con precintos intactos y súper bien embalado. Muy buena experiencia.",
  },
  {
    id: "lucas",
    name: "Lucas Torrens",
    location: "La Plata",
    product: "iPad Pro 11″ M4",
    comment:
      "El trato directo uno a uno por WhatsApp hace toda la diferencia. Cotización súper clara en pesos y dólares sin sorpresas al momento de la entrega.",
  },
  {
    id: "valentina",
    name: "Valentina Moretti",
    location: "San Isidro, Buenos Aires",
    product: "Sony WH-1000XM5",
    comment:
      "Pagué por transferencia con cotización congelada al instante. Al otro día ya tenía la guía de seguimiento de Correo Argentino. Todo de diez.",
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <li className="flex flex-col w-[320px] sm:w-[360px] shrink-0 pl-6 pr-8 sm:pl-8 sm:pr-10 border-r border-white/15">
      <div className="flex gap-1 text-white mb-4" role="img" aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="size-3.5 fill-current text-white" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="my-2 sm:my-4 text-base sm:text-[17px] leading-relaxed font-normal text-white/95">
        “{item.comment}”
      </blockquote>
      <div className="mt-auto pt-6 flex flex-col gap-1 text-xs sm:text-[13px] text-[#c3c5c9]">
        <strong className="text-sm sm:text-[15px] font-semibold text-white">
          {item.name}
        </strong>
        <span>{item.product}</span>
        <span>{item.location}</span>
      </div>
    </li>
  );
}

export function TestimonialsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = scrollRef.current;
    const group = groupRef.current;
    if (!track || !group || reducedMotion !== false || paused || hovered || focused || !visible) return;
    let frame: number;
    let lastTime: number | null = null;
    let position = track.scrollLeft;
    const move = (time: number) => {
      if (lastTime !== null) position += Math.min(time - lastTime, 64) * 0.025;
      lastTime = time;
      if (position >= group.offsetWidth) position %= group.offsetWidth;
      track.scrollLeft = position;
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, paused, hovered, focused, visible]);

  function scroll(direction: number) {
    setPaused(true);
    const track = scrollRef.current;
    const card = groupRef.current?.firstElementChild as HTMLElement | null;
    track?.scrollBy({
      left: direction * ((card?.offsetWidth ?? 340) + 32),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <section
      id="testimonios"
      className="bg-background py-10 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Contenedor Oscuro de Testimonios idéntico a Nicolini Import */}
        <div className="rounded-[28px] bg-[#111318] text-white py-12 sm:py-16 overflow-hidden shadow-2xl">
          {/* Encabezado con Controles */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-6 sm:px-12 pb-8 sm:pb-10 border-b border-white/10">
            <div>
              <h2
                id="testimonials-heading"
                className="max-w-xl text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
              >
                Confianza construida en cada{" "}
                <span className="font-serif italic font-normal tracking-normal text-white">
                  entrega.
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#c3c5c9]">
                Experiencias reales de quienes eligen Rial Electrónica.
              </p>
            </div>

            {/* Botones de Control Anterior / Pausa / Siguiente */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0" aria-label="Controles de testimonios">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Ver testimonios anteriores"
                className="inline-flex size-11 items-center justify-center rounded-full border border-[#606269] text-white bg-transparent transition-colors hover:bg-[#323438] active:scale-95"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setPaused(!paused)}
                  aria-label={paused ? "Reanudar movimiento de testimonios" : "Pausar movimiento de testimonios"}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#606269] text-white bg-transparent transition-colors hover:bg-[#323438] active:scale-95"
                >
                  {paused ? (
                    <Play className="size-4" aria-hidden="true" />
                  ) : (
                    <Pause className="size-4" aria-hidden="true" />
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Ver testimonios siguientes"
                className="inline-flex size-11 items-center justify-center rounded-full border border-[#606269] text-white bg-transparent transition-colors hover:bg-[#323438] active:scale-95"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Riel Deslizante Infinito */}
          <div
            id="testimonials-track"
            ref={scrollRef}
            className="flex overflow-x-auto overscroll-x-contain scrollbar-none pt-8 [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]"
            role="region"
            aria-label="Opiniones de clientes. Deslizá para leer más experiencias."
            tabIndex={0}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            {/* Grupo 1 */}
            <ul ref={groupRef} className="flex flex-none gap-0 pl-6 sm:pl-10 list-none m-0">
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={`g1-${item.id}`} item={item} />
              ))}
            </ul>

            {/* Grupo 2 Duplicado para Scroll Infinito Fluido */}
            <ul className="flex flex-none gap-0 list-none m-0" aria-hidden="true">
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={`g2-${item.id}`} item={item} />
              ))}
            </ul>
          </div>

          {/* Pie del Contenedor de Testimonios */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mx-6 sm:mx-12 mt-8 pt-6 border-t border-white/10 text-xs text-[#c3c5c9]">
            <span>Valoraciones verificadas de clientes en todo el país.</span>
            <span>Atención personalizada 1 a 1 por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
