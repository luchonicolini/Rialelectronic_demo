import { Star } from "lucide-react";
import { MOCK_TESTIMONIALS } from "@/data/mock-catalog";

export function TestimonialsGrid() {
  return (
    <section className="py-14 sm:py-20 border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            Experiencias reales
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Confianza construida en cada entrega
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Opiniones de clientes que eligieron comprar en Rial Electrónica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs transition-all hover:border-[var(--accent)]"
            >
              <div>
                {/* 5 estrellas */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-foreground/90 italic">
                  “{item.text}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <strong className="block text-sm font-bold text-foreground">
                  {item.author}
                </strong>
                <span className="block text-xs font-medium text-[var(--accent)]">
                  {item.product}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
