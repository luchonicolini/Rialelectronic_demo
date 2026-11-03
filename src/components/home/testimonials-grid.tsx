import { Star } from "lucide-react";
import { MOCK_TESTIMONIALS } from "@/data/mock-catalog";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function TestimonialsGrid() {
  return (
    <section className="py-14 sm:py-20 border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal duration={0.6} yOffset={20}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Experiencias reales
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
              Confianza construida en cada{" "}
              <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
                entrega.
              </span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Opiniones verificadas de clientes que compraron en Rial Electrónica.
            </p>
          </div>
        </BlurReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_TESTIMONIALS.map((item, idx) => (
            <BlurReveal key={item.id} delay={0.08 * idx} duration={0.5} yOffset={16}>
              <div className="flex flex-col justify-between h-full rounded-2xl border border-border bg-surface p-6 shadow-2xs transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:-translate-y-1">
                <div>
                  {/* 5 estrellas */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4" role="img" aria-label="5 de 5 estrellas">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/90 italic font-serif">
                    “{item.text}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <strong className="block text-sm font-bold text-foreground">
                    {item.author}
                  </strong>
                  <span className="block text-xs font-semibold text-[var(--accent)]">
                    {item.product}
                  </span>
                  <span className="block text-[11px] text-muted-foreground">
                    {item.location}
                  </span>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
