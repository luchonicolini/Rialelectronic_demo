"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "¿Los equipos son nuevos y sellados?",
    answer:
      "Sí. Trabajamos exclusivamente con equipos nuevos, originales de fábrica y sellados. Antes de coordinar te confirmamos número de serie, condición, color, capacidad y garantía por escrito.",
  },
  {
    question: "¿Cómo realizo el pago?",
    answer:
      "Aceptamos transferencias bancarias en pesos con cotización congelada al instante, dólares billete (USD) al momento de la entrega o retiro, y USDT. Te pasamos los datos y el importe exacto por WhatsApp.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí. Realizamos despachos protegidos y asegurados a todo el territorio nacional a través de Andreani. El costo y el plazo se confirman según tu localidad antes de despachar, con número de guía online.",
  },
  {
    question: "¿Qué garantía tienen los productos?",
    answer:
      "Todos los productos cuentan con garantía oficial de marca (Apple, Sony, Samsung, etc.) más nuestro soporte directo de gestión ante cualquier inconveniente técnico.",
  },
  {
    question: "¿Puedo coordinar un retiro presencial?",
    answer:
      "Sí. Acordamos punto seguro de encuentro y horario con cita previa para que puedas revisar el equipo y sus precintos antes de concretar la operación.",
  },
];

export function FaqSection({ className = "" }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const contactUrl = whatsappUrl("¡Hola Rial Electrónica! Tengo una consulta antes de comprar.");

  return (
    <section
      id="ayuda"
      className={`w-full py-14 sm:py-20 border-b border-border bg-background ${className}`}
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-16 items-start">
          {/* Columna Izquierda Sticky */}
          <BlurReveal blur={10} yOffset={20} duration={0.7} className="lg:sticky lg:top-28">
            <h2
              id="faq-title"
              className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]"
            >
              Preguntas{" "}
              <span className="font-serif italic font-normal text-[1.08em] tracking-normal">
                frecuentes.
              </span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Lo que más nos consultan antes de comprar. Si te queda alguna duda, escribinos de forma directa.
            </p>

            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-sm"
            >
              <span>Hablar con una persona</span>
              <ArrowRight className="size-4" />
            </a>
          </BlurReveal>

          {/* Columna Derecha: Acordeón */}
          <BlurReveal blur={10} yOffset={24} delay={0.1} duration={0.7} className="w-full">
            <div className="border-t border-border" role="presentation">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                const buttonId = `faq-trigger-${i}`;
                const panelId = `faq-panel-${i}`;

                return (
                  <div key={faq.question} className="border-b border-border">
                    <button
                      type="button"
                      id={buttonId}
                      className="w-full flex items-center justify-between gap-5 py-5 sm:py-[21px] text-left transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4 rounded-md"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                    >
                      <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground leading-snug flex-1 pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`size-7 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-250 ease-out ${
                          isOpen
                            ? "rotate-45 bg-foreground text-background border-transparent"
                            : "bg-transparent text-foreground group-hover:border-foreground"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-3.5" />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-280 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="pb-5 sm:pb-6 pr-6 sm:pr-12 text-sm sm:text-base leading-relaxed text-muted-foreground">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
