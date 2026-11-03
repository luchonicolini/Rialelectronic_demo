"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { MOCK_CATEGORIES } from "@/data/mock-catalog";

export function CategoriesGrid() {
  const reduced = useReducedMotion();

  return (
    <section
      className="w-full bg-background py-10 sm:py-16 border-b border-border"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14 flex flex-col gap-5 sm:gap-6">
        {/* Encabezado Editorial idéntico a Nicolini Import */}
        <BlurReveal blur={8} yOffset={15}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 border-b border-border/70 pb-4">
            <div>
              <h2
                id="categories-heading"
                className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]"
              >
                Elegir por{" "}
                <span className="font-serif italic font-normal text-[1.08em] tracking-normal">
                  categoría.
                </span>
              </h2>
            </div>

            <Link
              href="/catalogo"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors self-start sm:self-end"
            >
              <span>Ver catálogo completo</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            </Link>
          </div>
        </BlurReveal>

        {/* Grilla de Podios de Hardware: 3 columnas en mobile, 6 en desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {MOCK_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              whileHover={reduced ? undefined : { y: -3 }}
              whileTap={reduced ? undefined : { scale: 0.97 }}
              className="h-full"
            >
              <Link
                href={`/catalogo?categoria=${category.slug}`}
                title={`Ver departamento: ${category.name}`}
                className="group flex flex-col items-center text-center p-2 sm:p-2.5 rounded-[20px] transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
              >
                {/* Podio / Pedestal */}
                <div className="relative w-full aspect-square max-w-[115px] sm:max-w-[135px] rounded-[22px] sm:rounded-[26px] bg-[#f4f5f8] dark:bg-elevated border border-black/[0.05] dark:border-border p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 group-hover:bg-white dark:group-hover:bg-surface group-hover:border-black/[0.12] dark:group-hover:border-border group-hover:shadow-[0_12px_24px_rgba(24,25,28,0.07)]">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 95px, (max-width: 1024px) 120px, 140px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-[0_6px_12px_rgba(0,0,0,0.08)]"
                    />
                  </div>
                </div>

                {/* Título y Subtítulo */}
                <div className="mt-2.5 sm:mt-3 flex flex-col items-center">
                  <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5 line-clamp-1">
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
