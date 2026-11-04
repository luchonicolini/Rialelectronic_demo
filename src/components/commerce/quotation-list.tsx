"use client";

import React from "react";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ArrowUpRight,
  ArrowLeft,
  ShoppingBag,
  Info,
  RotateCcw,
} from "lucide-react";
import { useCart } from "@/context/cart-context";
import { whatsappUrl } from "@/lib/site";
import { ProductImage } from "@/components/ui/product-image";

export function QuotationList() {
  const {
    items,
    isLoaded,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalEstimatedUsd,
  } = useCart();

  // Genera el mensaje formateado según la directiva editorial de WhatsApp
  const generateWhatsAppMessage = () => {
    const header = "¡Hola Rial Electrónica! Quisiera consultar cotización, disponibilidad y entrega para los siguientes equipos de mi lista:\n";
    const body = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.brand} ${item.product.name} (Cant: ${item.quantity})`
      )
      .join("\n");
    const footer = `\n\nTotal de unidades: ${totalItems}.\n¿Me podrían confirmar cotización final y medios de pago? ¡Muchas gracias!`;
    return `${header}\n${body}${footer}`;
  };

  const whatsappHref = whatsappUrl(generateWhatsAppMessage());

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-8 border-b border-border pb-6">
          <div className="h-4 w-28 animate-pulse rounded bg-border/50" />
          <div className="mt-3 h-8 w-60 animate-pulse rounded bg-border/50" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <div className="h-28 animate-pulse rounded-card border border-border bg-surface/50" />
            <div className="h-28 animate-pulse rounded-card border border-border bg-surface/50" />
          </div>
          <div className="lg:col-span-4">
            <div className="h-64 animate-pulse rounded-card border border-border bg-surface/50" />
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-xs">
            <ShoppingBag className="size-8 stroke-[1.5]" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tu lista de consulta está vacía
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Podés explorar el catálogo y usar el botón secundario{" "}
            <span className="inline-flex size-5 items-center justify-center rounded-full border border-border bg-surface align-middle text-foreground">
              +
            </span>{" "}
            para agregar los equipos que te interesen y consultar por varios juntos vía WhatsApp.
          </p>

          <div className="mt-8">
            <Link
              href="/catalogo"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 active:scale-98"
            >
              <ArrowLeft className="size-4" />
              Explorar el catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-14">
      {/* Navegación y Título */}
      <div className="mb-8 border-b border-border pb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            href="/catalogo"
            className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Volver al catálogo
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Lista de consulta
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {totalItems} {totalItems === 1 ? "equipo seleccionado" : "equipos seleccionados"} para cotizar.
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-muted-foreground transition-colors hover:text-red-600 sm:self-auto"
        >
          <RotateCcw className="size-3.5" />
          Vaciar lista
        </button>
      </div>

      {/* Grilla Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Tabla / Lista de Productos Seleccionados */}
        <div className="space-y-4 lg:col-span-8">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 rounded-card border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              {/* Imagen y Datos del Producto */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative size-18 sm:size-20 shrink-0 overflow-hidden rounded-[14px] border border-border/50 bg-[#f5f5f7] p-1.5">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    sizes="80px"
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    {product.brand} · {product.category}
                  </span>
                  <h3 className="text-base font-bold text-foreground truncate">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-bold text-[#0D7A53] tabular-nums">
                    US$ {product.priceUsd.toLocaleString("es-AR")}
                  </p>
                </div>
              </div>

              {/* Controles de Cantidad y Subtotal */}
              <div className="flex items-center justify-between gap-4 border-t border-border/50 pt-3 sm:border-0 sm:pt-0">
                {/* Selector de Cantidad */}
                <div className="inline-flex items-center rounded-full border border-border bg-background p-1">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    aria-label={`Reducir cantidad de ${product.name}`}
                    className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold tabular-nums text-foreground">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    aria-label={`Aumentar cantidad de ${product.name}`}
                    className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>

                {/* Subtotal del ítem */}
                <div className="text-right sm:min-w-24">
                  <span className="block text-xs text-muted-foreground">Subtotal</span>
                  <strong className="text-sm font-bold text-foreground tabular-nums">
                    US$ {(product.priceUsd * quantity).toLocaleString("es-AR")}
                  </strong>
                </div>

                {/* Botón Eliminar */}
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  aria-label={`Eliminar ${product.name} de la lista`}
                  title="Eliminar de la lista"
                  className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen Comercial y Botón de WhatsApp */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-card border border-border bg-surface p-6 shadow-xs">
            <h2 className="text-lg font-bold text-foreground">
              Resumen de cotización
            </h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Equipos en la lista</span>
                <span className="font-semibold text-foreground tabular-nums">
                  {totalItems} {totalItems === 1 ? "unidad" : "unidades"}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal referencial</span>
                <span className="font-bold text-[#0D7A53] tabular-nums">
                  US$ {totalEstimatedUsd.toLocaleString("es-AR")}
                </span>
              </div>
            </div>

            {/* Disclaimer comercial obligatorio */}
            <div className="mt-6 flex gap-2.5 rounded-lg border border-border/80 bg-background/60 p-3.5 text-xs leading-relaxed text-muted-foreground">
              <Info className="size-4 shrink-0 text-muted-foreground mt-0.5" />
              <p>
                Los valores son orientativos en dólares. La cotización final, formas de pago (transferencia / USDT) y stock se confirman directamente con un asesor por WhatsApp.
              </p>
            </div>

            {/* CTA Principal: Consultar por WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171d25] text-sm font-bold text-white transition-opacity hover:opacity-95 active:scale-98 shadow-sm"
            >
              Consultar lista por WhatsApp
              <ArrowUpRight className="size-4" />
            </a>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Se abrirá WhatsApp con el mensaje precargado para que lo revises antes de enviarlo.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
