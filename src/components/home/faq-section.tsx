"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { MOCK_FAQS } from "@/data/mock-catalog";
import { whatsappUrl } from "@/lib/site";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  }

  return (
    <section className="py-14 sm:py-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
        <BlurReveal duration={0.6} yOffset={20}>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Respuestas claras
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
              Preguntas{" "}
              <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
                frecuentes.
              </span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Todo lo que necesitás saber antes de coordinar tu compra.
            </p>
          </div>
        </BlurReveal>

        <div className="space-y-3">
          {MOCK_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <BlurReveal key={idx} delay={0.06 * idx} duration={0.4} yOffset={12}>
                <div className="rounded-2xl border border-border bg-background transition-colors overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-foreground hover:text-[var(--accent)] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="size-5 text-[var(--accent)] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`size-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </BlurReveal>
            );
          })}
        </div>

        <BlurReveal delay={0.25} duration={0.5} yOffset={12}>
          <div className="mt-12 rounded-2xl border border-border bg-background p-6 text-center">
            <h3 className="text-base font-bold text-foreground">
              ¿Tenés alguna otra duda sobre stock o envíos?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Nuestro equipo te atiende de forma personalizada por WhatsApp en minutos.
            </p>
            <a
              href={whatsappUrl("¡Hola Rial Electrónica! Tengo una consulta antes de comprar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-bold text-white shadow-xs hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
