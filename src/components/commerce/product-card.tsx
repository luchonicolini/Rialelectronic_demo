"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import type { Product } from "@/data/mock-catalog";
import { whatsappUrl } from "@/lib/site";
import { useCart } from "@/context/cart-context";
import { ProductImage } from "@/components/ui/product-image";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addItem, isInCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = isInCart(product.id);

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

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
      {/* Contenedor Fotográfico con Aspect Ratio y Enlace al Detalle */}
      <Link
        href={`/producto/${product.id}`}
        aria-label={`Ver detalles de ${product.name}`}
        className="relative block aspect-[1/1.02] w-full rounded-[18px] sm:rounded-[22px] bg-[#f5f5f7] border border-black/[0.04] p-3 sm:p-5 overflow-hidden transition-all duration-300 group-hover:border-black/[0.12] group-hover:shadow-md"
      >
        {/* Badge de Descuento en Esquina Superior Derecha Biselada */}
        {product.discountBadge && (
          <div className="absolute top-0 right-0 z-10 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#f43f37] text-white rounded-bl-[18px] sm:rounded-bl-[20px] flex items-center justify-center shadow-xs font-bold leading-none select-none">
            <span className="text-xs font-bold tracking-tight">
              {product.discountBadge}
            </span>
          </div>
        )}

        {/* Imagen Centrada con Efecto Zoom en Hover y Fallback Automático */}
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
            <ProductImage
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 380px"
              className="object-contain"
            />
          </div>
        </div>
      </Link>

      {/* Meta, Título y Especificaciones con la Tipografía Estándar del Sitio */}
      <div className="mt-3 flex flex-col flex-1">
        <span className="text-xs font-medium text-muted-foreground tracking-tight">
          {product.brand} · {product.category}
        </span>
        <h3 className="text-base font-bold text-foreground tracking-tight mt-1 line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
          <Link href={`/producto/${product.id}`} title={product.name}>
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

        {/* Acciones: Botón Secundario (Añadir a lista) + Botón Primario (WhatsApp) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Botón Secundario: Añadir a lista de consulta */}
          <button
            type="button"
            onClick={handleAddToList}
            aria-label={`Añadir ${product.name} a la lista de cotización`}
            title={justAdded ? "¡Añadido a la lista!" : inCart ? "Sumar una unidad más" : "Añadir a la lista de consulta"}
            className={`size-9 sm:size-10 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 ${
              justAdded
                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                : inCart
                ? "border-emerald-500/50 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-100/50"
                : "border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-elevated hover:border-foreground/30"
            }`}
          >
            {justAdded ? (
              <Check className="size-4 text-emerald-600" />
            ) : inCart ? (
              <Check className="size-4 text-emerald-700" />
            ) : (
              <Plus className="size-4" />
            )}
          </button>

          {/* Botón Primario: Consulta directa por WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar cotización de ${product.name} por WhatsApp`}
            title="Consultar por WhatsApp"
            className="size-9 sm:size-10 rounded-full bg-[#18191c] text-white flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-2xs shrink-0"
          >
            <ArrowUpRight className="size-4 sm:size-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
