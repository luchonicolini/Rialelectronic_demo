"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_FEATURED_PRODUCTS } from "@/data/mock-catalog";
import { ProductCard } from "@/components/commerce/product-card";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function FeaturedGrid() {
  // Mostramos 8 productos para formar filas exactas de 4 en desktop (2 en mobile)
  const displayProducts = MOCK_FEATURED_PRODUCTS.slice(0, 8);

  return (
    <section
      className="bg-background py-10 sm:py-16 lg:py-20 border-b border-border"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Encabezado Editorial Responsive */}
        <BlurReveal blur={8} yOffset={15}>
          <div className="mb-8 max-w-2xl sm:mb-10">
            <h2
              id="featured-heading"
              className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-[-0.03em] text-foreground leading-[1.12]"
            >
              Destacados y{" "}
              <span className="font-serif italic font-normal text-[1.08em] tracking-normal text-foreground">
                oportunidades.
              </span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Equipos seleccionados listos para consultar y coordinar.
            </p>
          </div>
        </BlurReveal>

        {/* Grilla: 2 columnas en mobile, 4 columnas en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {displayProducts.map((product, index) => (
            <BlurReveal key={product.id} delay={index * 0.04} blur={10} yOffset={18}>
              <ProductCard product={product} />
            </BlurReveal>
          ))}
        </div>

        {/* Botón Ver todos los productos */}
        <div className="flex justify-center mt-9 sm:mt-12">
          <BlurReveal blur={6} yOffset={10}>
            <Link
              href="/catalogo"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[0_8px_20px_rgba(24,25,28,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
            >
              Ver todos los productos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
