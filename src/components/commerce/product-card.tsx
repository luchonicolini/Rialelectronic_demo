"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/mock-catalog";
import { whatsappUrl } from "@/lib/site";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const waLink = whatsappUrl(
    `¡Hola Rial Electrónica! Quiero consultar cotización y stock de ${product.name} (${product.brand}).`
  );

  const details =
    product.subtitleSpecs ||
    (product.specs && product.specs.length > 0
      ? product.specs.slice(0, 2).join(" · ")
      : null);

  return (
    <article
      className={`product-card group flex flex-col justify-between h-full ${className}`}
    >
      {/* Contenedor Fotográfico con Aspect Ratio y Bordes Redondeados */}
      <div className="relative block aspect-[1/1.02] w-full rounded-[18px] sm:rounded-[22px] bg-[#f5f5f7] border border-black/[0.04] p-3 sm:p-5 overflow-hidden transition-all duration-300 group-hover:border-black/[0.12] group-hover:shadow-md">
        {/* Badge Flotante Izquierdo: Novedad / Destacado */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#18191c]/90 backdrop-blur-sm text-white border border-white/10 flex items-center justify-center shadow-xs">
            <span className="text-[11px] font-semibold tracking-tight">
              {product.badge}
            </span>
          </div>
        )}

        {/* Badge de Descuento en Esquina Superior Derecha Biselada */}
        {product.discountBadge && (
          <div className="absolute top-0 right-0 z-10 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#f43f37] text-white rounded-bl-[18px] sm:rounded-bl-[20px] flex items-center justify-center shadow-xs font-bold leading-none select-none">
            <span className="text-xs font-bold tracking-tight">
              {product.discountBadge}
            </span>
          </div>
        )}

        {/* Imagen Centrada con Efecto Zoom en Hover */}
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
            <Image
              src={product.image || "/products/imagen-pendiente.png"}
              alt={`${product.brand} ${product.name}`}
              fill
              sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 25vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Meta, Título y Especificaciones con la Tipografía Estándar del Sitio */}
      <div className="mt-3 flex flex-col flex-1">
        <span className="text-xs font-medium text-muted-foreground tracking-tight">
          {product.brand} · {product.category}
        </span>
        <h3 className="text-base font-bold text-foreground tracking-tight mt-1 line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
          <Link
            href={`/catalogo?categoria=${product.categorySlug}`}
            title={product.name}
          >
            {product.name}
          </Link>
        </h3>
        {details && (
          <p className="text-xs font-normal text-muted-foreground mt-1 line-clamp-1">
            {details}
          </p>
        )}
      </div>

      {/* Footer: Precios y Botón Circular de Acción */}
      <div className="mt-3.5 pt-2.5 flex items-center justify-between gap-2 border-t border-border/50">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-1.5 min-w-0">
          <strong className="text-lg sm:text-xl font-bold text-[#0D7A53] tracking-tight leading-tight tabular-nums">
            US$ {product.priceUsd.toLocaleString("es-AR")}
          </strong>
          {product.originalPriceUsd && (
            <span className="text-xs text-muted-foreground line-through leading-tight tabular-nums">
              US$ {product.originalPriceUsd.toLocaleString("es-AR")}
            </span>
          )}
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar cotización de ${product.name} por WhatsApp`}
          title="Consultar por WhatsApp"
          className="size-9 sm:size-10 rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all duration-300 hover:bg-[#18191c] hover:text-white hover:border-[#18191c] hover:scale-105 active:scale-95 shadow-2xs shrink-0"
        >
          <ArrowUpRight className="size-4 sm:size-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
