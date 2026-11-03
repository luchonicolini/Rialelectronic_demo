"use client";

import React from "react";
import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

interface BrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
  className: string;
}

const BRANDS: BrandItem[] = [
  { name: "Apple", src: "/images/brands/apple.svg", width: 48, height: 48, className: "h-8 sm:h-9 w-auto" },
  { name: "Sony", src: "/images/brands/sony.svg", width: 190, height: 46, className: "h-6 sm:h-7 w-auto" },
  { name: "Samsung", src: "/images/brands/samsung.svg", width: 168, height: 28, className: "h-4 sm:h-5 w-auto" },
  { name: "PlayStation", src: "/images/brands/playstation.svg", width: 52, height: 44, className: "h-7 sm:h-8 w-auto" },
  { name: "Nintendo", src: "/images/brands/nintendo.svg", width: 150, height: 40, className: "h-5 sm:h-6 w-auto" },
  { name: "Xiaomi", src: "/images/brands/xiaomi.svg", width: 52, height: 52, className: "h-7 sm:h-8 w-auto" },
  { name: "JBL", src: "/images/brands/jbl.svg", width: 100, height: 42, className: "h-7 sm:h-8 w-auto" },
  { name: "DJI", src: "/images/brands/dji.svg", width: 114, height: 42, className: "h-5 sm:h-6 w-auto" },
  { name: "ASUS", src: "/images/brands/asus.svg", width: 190, height: 54, className: "h-7 sm:h-8 w-auto" },
  { name: "Motorola", src: "/images/brands/motorola.svg", width: 52, height: 52, className: "h-7 sm:h-8 w-auto" },
  { name: "Garmin", src: "/images/brands/garmin.svg", width: 132, height: 38, className: "h-5 sm:h-6 w-auto" },
  { name: "Google", src: "/images/brands/google.svg", width: 120, height: 38, className: "h-5 sm:h-6 w-auto" },
];

export function BrandTicker() {
  return (
    <section className="w-full py-8 sm:py-12 overflow-hidden border-b border-border bg-background" aria-label="Marcas oficiales">
      <BlurReveal blur={8} yOffset={16} duration={0.6} className="w-full">
        {/* Encabezado sutil */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Marcas oficiales &bull; Garantía 100% original
          </p>
        </div>

        {/* Carrusel infinito con degradado lateral para desvanecimiento */}
        <div className="relative w-full overflow-hidden pause-on-hover [mask-image:_linear-gradient(to_right,transparent_0,_black_90px,_black_calc(100%-90px),transparent_100%)]">
          <div className="flex w-max items-center">
            {/* Secuencia 1 */}
            <div className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 shrink-0 animate-infinite-scroll">
              {BRANDS.map((brand, idx) => (
                <div
                  key={`brand-1-${idx}`}
                  title={brand.name}
                  className="flex min-w-10 items-center justify-center opacity-50 hover:opacity-100 dark:invert dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-300 select-none cursor-default"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className={`${brand.className} object-contain`}
                  />
                </div>
              ))}
            </div>

            {/* Secuencia 2 para bucle sin saltos */}
            <div
              aria-hidden="true"
              className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 shrink-0 animate-infinite-scroll"
            >
              {BRANDS.map((brand, idx) => (
                <div
                  key={`brand-2-${idx}`}
                  title={brand.name}
                  className="flex min-w-10 items-center justify-center opacity-50 hover:opacity-100 dark:invert dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-300 select-none cursor-default"
                >
                  <Image
                    src={brand.src}
                    alt=""
                    width={brand.width}
                    height={brand.height}
                    className={`${brand.className} object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurReveal>
    </section>
  );
}
