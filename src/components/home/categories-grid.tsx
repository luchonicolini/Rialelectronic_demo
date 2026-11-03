import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_CATEGORIES } from "@/data/mock-catalog";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function CategoriesGrid() {
  return (
    <section className="py-14 sm:py-20 border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <BlurReveal duration={0.6} yOffset={20}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Líneas de producto
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Explorá por{" "}
                <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
                  categoría.
                </span>
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:underline underline-offset-4"
            >
              Ver catálogo completo <ArrowRight className="size-4" />
            </Link>
          </div>
        </BlurReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {MOCK_CATEGORIES.map((cat, idx) => (
            <BlurReveal key={cat.id} delay={0.08 * idx} duration={0.5} yOffset={16}>
              <Link
                href={`/catalogo?categoria=${cat.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-elevated mb-3 flex items-center justify-center p-2">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-foreground leading-tight group-hover:text-[var(--accent)] transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                  {cat.subtitle}
                </p>
                <span className="mt-3 text-[11px] font-bold text-muted-foreground/80">
                  {cat.itemCount} modelos
                </span>
              </Link>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
