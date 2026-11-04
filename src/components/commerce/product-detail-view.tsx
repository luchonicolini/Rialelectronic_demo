"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Plus,
  Check,
  Share2,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import type { Product } from "@/data/mock-catalog";
import { ProductCard } from "@/components/commerce/product-card";
import { whatsappUrl } from "@/lib/site";
import { useCart } from "@/context/cart-context";
import { ProductImage } from "@/components/ui/product-image";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const images =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.image];

  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [justCopied, setJustCopied] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const { addItem, isInCart, getItemQuantity } = useCart();
  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  const waMessage = `¡Hola Rial Electrónica! Quisiera consultar precio y disponibilidad del ${product.name} (${product.brand}).`;
  const waHref = whatsappUrl(waMessage);

  const handleAddToCart = () => {
    addItem(product, true);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: `${product.name} — Rial Electrónica`,
            text: `Consultá ${product.name} en Rial Electrónica`,
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          setJustCopied(true);
          setTimeout(() => setJustCopied(false), 2000);
        }
      } catch {
        // Ignora cancelación de compartir
      }
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-14">
      {/* Migas de Pan (Breadcrumbs) */}
      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/catalogo"
              className="transition-colors hover:text-foreground"
            >
              Catálogo
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/catalogo?categoria=${product.categorySlug}`}
              className="capitalize transition-colors hover:text-foreground"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Botón Volver */}
      <div className="mb-6">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Volver al catálogo
        </Link>
      </div>

      {/* Grid Principal de Ficha de Producto */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Columna Izquierda: Galería Fotográfica */}
        <div className="space-y-4 lg:col-span-7">
          {/* Imagen Activa Principal */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-border bg-[#f5f5f7] p-6 sm:p-10 shadow-xs flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <ProductImage
                src={activeImage || product.image}
                alt={`${product.brand} ${product.name}`}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Miniaturas de la Galería (si hay más de 1 y no son pendientes) */}
          {images.length > 1 && !images.every(img => img.includes("imagen-pendiente")) && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((imgUrl, idx) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    aria-label={`Ver foto ${idx + 1} de ${product.name}`}
                    className={`relative size-20 sm:size-22 shrink-0 overflow-hidden rounded-[16px] border bg-[#f5f5f7] p-2 transition-all ${
                      isActive
                        ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/20 shadow-xs"
                        : "border-border hover:border-foreground/30 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <ProductImage
                      src={imgUrl}
                      alt={`${product.name} vista ${idx + 1}`}
                      sizes="88px"
                      className="object-contain"
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Nota de Foto Pendiente si corresponde */}
          {(!activeImage || activeImage.includes("imagen-pendiente")) && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Imagen pendiente de carga. Escribinos por WhatsApp para recibir fotos y video de la unidad física en stock.
            </p>
          )}

          {/* Bloque de Confianza y Entrega */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-4 border-t border-border/60">
            <div className="flex items-start gap-3 rounded-card border border-border/80 bg-surface p-4">
              <ShieldCheck className="size-5 shrink-0 text-[#0D7A53] mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-foreground">
                  Original Sellado
                </strong>
                <span className="text-[11px] leading-tight text-muted-foreground">
                  Caja cerrada con precintos de fábrica.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-card border border-border/80 bg-surface p-4">
              <Truck className="size-5 shrink-0 text-[#0D7A53] mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-foreground">
                  Envíos Asegurados
                </strong>
                <span className="text-[11px] leading-tight text-muted-foreground">
                  Andreani, Correo Arg y Vía Cargo a todo el país.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-card border border-border/80 bg-surface p-4">
              <BadgeCheck className="size-5 shrink-0 text-[#0D7A53] mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-foreground">
                  Garantía & Asesoría
                </strong>
                <span className="text-[11px] leading-tight text-muted-foreground">
                  Atención directa y verificación de stock real.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información, Precios y Acciones */}
        <div className="flex flex-col lg:col-span-5">
          {/* Marca y Categoría */}
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center rounded-full bg-elevated px-3 py-1 text-xs font-semibold text-foreground">
              {product.brand} · {product.category}
            </span>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Compartir este equipo"
              title={justCopied ? "¡Enlace copiado al portapapeles!" : "Compartir"}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              {justCopied ? (
                <CheckCircle2 className="size-4 text-emerald-600" />
              ) : (
                <Share2 className="size-4" />
              )}
            </button>
          </div>

          {/* Título de Producto */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.08]">
            {product.name}
          </h1>

          {/* Subtítulo o Especificaciones Clave */}
          {product.subtitleSpecs && (
            <p className="mt-2 text-base font-normal text-muted-foreground">
              {product.subtitleSpecs}
            </p>
          )}

          {/* Caja de Cotización / Precios */}
          <div className="mt-6 rounded-card border border-border bg-surface p-5 sm:p-6 shadow-xs">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Cotización orientativa
            </span>

            <div className="mt-2 flex flex-wrap items-baseline gap-3">
              <strong className="text-3xl sm:text-4xl font-extrabold text-[#0D7A53] tracking-tight tabular-nums">
                US$ {product.priceUsd.toLocaleString("es-AR")}
              </strong>

              {product.originalPriceUsd && (
                <span className="text-sm text-muted-foreground line-through tabular-nums">
                  US$ {product.originalPriceUsd.toLocaleString("es-AR")}
                </span>
              )}
            </div>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Aceptamos pagos en <strong>dólares billete (USD)</strong> al coordinar entrega, <strong>USDT / Cripto</strong> con paridad directa, o <strong>transferencia bancaria</strong> con cotización congelada al instante.
            </p>

            {/* Acciones de Conversión */}
            <div className="mt-6 flex flex-col gap-3">
              {/* CTA Primario: WhatsApp */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#171d25] text-sm font-bold text-white transition-opacity hover:opacity-95 active:scale-98 shadow-sm"
              >
                <MessageCircle className="size-4 shrink-0" />
                Consultar por WhatsApp
                <ArrowUpRight className="size-4 shrink-0 opacity-70" />
              </a>

              {/* CTA Secundario: Agregar a lista de consulta */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-all active:scale-98 ${
                  justAdded
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                    : inCart
                    ? "border-emerald-500/50 bg-emerald-50/40 text-emerald-800 hover:bg-emerald-100/50"
                    : "border-border bg-surface text-foreground hover:bg-elevated hover:border-foreground/30"
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="size-4 text-emerald-600" />
                    ¡Sumado a tu lista de consulta!
                  </>
                ) : inCart ? (
                  <>
                    <Check className="size-4 text-emerald-700" />
                    En tu lista de consulta ({quantity} {quantity === 1 ? "unidad" : "unidades"}) — Sumar otra
                  </>
                ) : (
                  <>
                    <Plus className="size-4" />
                    Añadir a lista para cotizar varios
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Descripción Detallada */}
          {product.description && (
            <div className="mt-8 border-t border-border pt-6">
              <h2 className="text-base font-bold text-foreground">
                Descripción del equipo
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          )}

          {/* Ficha Técnica / Especificaciones */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-8 border-t border-border pt-6">
              <h2 className="text-base font-bold text-foreground">
                Ficha técnica y características
              </h2>
              <ul className="mt-3 divide-y divide-border/60 rounded-card border border-border bg-surface">
                {product.specs.map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 text-xs sm:text-sm text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono text-xs text-muted-foreground select-none">
                      0{index + 1}
                    </span>
                    <span className="font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sección de Equipos Relacionados */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section
          className="mt-20 border-t border-border pt-12"
          aria-labelledby="related-heading"
        >
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2
                id="related-heading"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Equipos relacionados
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Otras opciones similares disponibles para cotizar.
              </p>
            </div>

            <Link
              href={`/catalogo?categoria=${product.categorySlug}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:underline"
            >
              Ver más en {product.category}
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
