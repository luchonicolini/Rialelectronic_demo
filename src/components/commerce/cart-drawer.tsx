"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowUpRight,
  ShoppingBag,
  RotateCcw,
} from "lucide-react";
import { useCart } from "@/context/cart-context";
import { whatsappUrl } from "@/lib/site";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalEstimatedUsd,
  } = useCart();

  // Cerrar con Escape y bloquear scroll del body cuando está abierto
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        closeCart();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    const header =
      "¡Hola Rial Electrónica! Quisiera consultar cotización, disponibilidad y entrega para los siguientes equipos de mi lista:\n";
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

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Fondo oscuro translúcido con blur */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Panel Deslizable Lateral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="relative z-10 flex h-full w-full max-w-[440px] flex-col border-l border-border bg-surface shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Cabecera del Drawer */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <h2
              id="cart-drawer-title"
              className="text-base font-bold tracking-tight text-foreground sm:text-lg"
            >
              Lista de consulta
            </h2>
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-contrast)]">
              {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                title="Vaciar lista de consulta"
                className="inline-flex items-center gap-1 rounded-control px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-red-600"
              >
                <RotateCcw className="size-3" />
                Vaciar
              </button>
            )}
            <button
              type="button"
              onClick={closeCart}
              aria-label="Cerrar lista de consulta"
              className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Cuerpo del Drawer: Lista de Productos o Estado Vacío */}
        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-border bg-elevated/60 text-muted-foreground shadow-2xs">
                <ShoppingBag className="size-6 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Tu lista está vacía
              </h3>
              <p className="mt-1.5 max-w-[28ch] text-xs leading-relaxed text-muted-foreground">
                Explorá el catálogo y usá el botón{" "}
                <span className="inline-flex size-4 items-center justify-center rounded-full border border-border bg-surface font-bold text-foreground">
                  +
                </span>{" "}
                para sumar equipos y pedir cotización conjunta por WhatsApp.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border/70">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3.5 py-4"
                >
                  {/* Foto miniatura del producto */}
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-control border border-border/80 bg-[#f5f5f7] p-1.5">
                    <Image
                      src={item.product.image || "/products/imagen-pendiente.png"}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  {/* Detalle y Precios */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {item.product.brand}
                    </span>
                    <h4 className="truncate text-xs font-bold text-foreground sm:text-sm">
                      <Link
                        href={`/producto/${item.product.id}`}
                        onClick={closeCart}
                        className="hover:underline"
                      >
                        {item.product.name}
                      </Link>
                    </h4>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <strong className="text-xs font-bold text-[#0D7A53] tabular-nums sm:text-sm">
                        US$ {item.product.priceUsd.toLocaleString("es-AR")}
                      </strong>
                      <span className="text-[10px] text-muted-foreground">
                        c/u
                      </span>
                    </div>
                  </div>

                  {/* Controles de Cantidad */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex items-center rounded-full border border-border bg-elevated/40">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        aria-label={`Disminuir cantidad de ${item.product.name}`}
                        className="flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 className="size-3 text-red-500" />
                        ) : (
                          <Minus className="size-3" />
                        )}
                      </button>
                      <span className="w-5 text-center text-xs font-bold tabular-nums text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        aria-label={`Aumentar cantidad de ${item.product.name}`}
                        className="flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      aria-label={`Quitar ${item.product.name} de la lista`}
                      className="inline-flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-red-600"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pie del Drawer: Resumen y CTA WhatsApp */}
        {items.length > 0 && (
          <div className="border-t border-border bg-surface/90 px-5 py-4 sm:px-6">
            {/* Total estimado */}
            <div className="mb-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Total estimado
                </span>
                <p className="text-[10px] text-muted-foreground">
                  (Cotización final en WhatsApp)
                </p>
              </div>
              <strong className="text-lg font-extrabold text-foreground tabular-nums sm:text-xl">
                US$ {totalEstimatedUsd.toLocaleString("es-AR")}
              </strong>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#171d25] text-sm font-bold text-white shadow-xs transition-opacity hover:opacity-90 active:scale-[0.99]"
            >
              Pedir cotización por WhatsApp
              <ArrowUpRight className="size-4" />
            </a>

            {/* Enlace secundario: Ver página completa */}
            <div className="mt-2.5 text-center">
              <Link
                href="/lista"
                onClick={closeCart}
                className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Ver pantalla completa de la lista
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
