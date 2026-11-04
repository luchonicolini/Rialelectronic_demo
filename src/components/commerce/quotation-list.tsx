"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  RotateCcw,
  User,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/cart-context";
import { buildCartWhatsAppUrl } from "@/lib/whatsapp";
import { ProductImage } from "@/components/ui/product-image";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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

  // Campos opcionales para personalizar la cotización (inicialización lazy de localStorage)
  const [customerName, setCustomerName] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return localStorage.getItem("rial_customer_name") || "";
      } catch {
        return "";
      }
    }
    return "";
  });
  const [customerCity, setCustomerCity] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return localStorage.getItem("rial_customer_city") || "";
      } catch {
        return "";
      }
    }
    return "";
  });
  const [preferredPayment, setPreferredPayment] = useState<
    "transferencia" | "usdt" | "indistinto"
  >("indistinto");

  const handleNameChange = (val: string) => {
    setCustomerName(val);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("rial_customer_name", val);
      } catch {
        // Ignorar
      }
    }
  };

  const handleCityChange = (val: string) => {
    setCustomerCity(val);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("rial_customer_city", val);
      } catch {
        // Ignorar
      }
    }
  };

  const whatsappHref = buildCartWhatsAppUrl(items, {
    customerName,
    customerCity,
    preferredPayment,
  });

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-8">
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
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-2xs">
            <ShoppingBag className="size-8 stroke-[1.5]" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tu próxima consulta empieza acá
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Todavía no sumaste equipos a tu lista. Podés explorar el catálogo y usar el botón{" "}
            <span className="inline-flex size-5 items-center justify-center rounded-full border border-border bg-surface align-middle text-foreground font-bold">
              +
            </span>{" "}
            para agregar los productos que te interesen y consultar por varios juntos vía WhatsApp.
          </p>

          <div className="mt-8">
            <Link
              href="/catalogo"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 active:scale-98"
            >
              Explorar el catálogo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1360px] px-4 py-8 sm:px-6 lg:px-8">
      {/* Navegación y Encabezado Editorial */}
      <div className="mb-8 border-b border-border pb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <nav
            className="mb-2 flex items-center gap-2 text-xs text-muted-foreground"
            aria-label="Ruta de navegación"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/catalogo" className="hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <span className="opacity-40">/</span>
            <span className="font-semibold text-foreground">Mi consulta</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Lista de consulta
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {totalItems} {totalItems === 1 ? "equipo seleccionado" : "equipos seleccionados"} para cotización directa.
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

      {/* Grilla Principal: Productos + Sidebar de Resumen */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Columna Izquierda: Lista de Equipos */}
        <div className="space-y-4 lg:col-span-8">
          <div className="space-y-3">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 rounded-card border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 transition-shadow hover:shadow-2xs"
              >
                {/* Imagen y Datos del Producto */}
                <div className="flex items-center gap-4 min-w-0">
                  <Link
                    href={`/producto/${product.id}`}
                    className="relative size-18 sm:size-20 shrink-0 overflow-hidden rounded-[14px] border border-border/70 bg-[#f5f5f7] p-1.5 transition-transform hover:scale-105"
                  >
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      sizes="80px"
                      className="object-contain"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      {product.brand} · {product.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-foreground truncate mt-0.5">
                      <Link href={`/producto/${product.id}`} className="hover:underline">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[#0D7A53] tabular-nums">
                      US$ {product.priceUsd.toLocaleString("es-AR")}{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        c/u
                      </span>
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
                      className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-all duration-150 hover:bg-surface hover:text-emerald-700 hover:scale-115 active:scale-75 active:text-emerald-700"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>

                  {/* Subtotal del ítem */}
                  <div className="text-right sm:min-w-28">
                    <span className="block text-[11px] text-muted-foreground">
                      Subtotal
                    </span>
                    <strong className="text-base font-bold text-foreground tabular-nums">
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

          <div className="pt-2">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3.5" /> Seguir explorando más equipos
            </Link>
          </div>
        </div>

        {/* Columna Derecha: Sidebar de Resumen Comercial y Envío */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-card border border-border bg-surface p-6 shadow-xs space-y-5">
            <h2 className="text-lg font-bold text-foreground">
              Resumen de consulta
            </h2>

            {/* Desglose */}
            <dl className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Productos a consultar</dt>
                <dd className="font-semibold text-foreground tabular-nums">
                  {totalItems} {totalItems === 1 ? "unidad" : "unidades"}
                </dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Disponibilidad y entrega</dt>
                <dd className="font-medium text-foreground">A confirmar por asesor</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Medios de pago</dt>
                <dd className="font-medium text-foreground">Transferencia · USDT</dd>
              </div>
            </dl>

            <div className="border-t border-border pt-4 flex items-baseline justify-between">
              <div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Importe estimado
                </span>
                <p className="text-[10px] text-muted-foreground">
                  (Cotización final en WhatsApp)
                </p>
              </div>
              <strong className="text-2xl font-extrabold text-foreground tabular-nums">
                US$ {totalEstimatedUsd.toLocaleString("es-AR")}
              </strong>
            </div>

            {/* Campos rápidos para agilizar la cotización */}
            <div className="rounded-card border border-border bg-[#f7f8fa] p-4 space-y-3">
              <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <span>Agilizar mi respuesta (opcional)</span>
              </h3>

              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Tu nombre (ej: Lucas)"
                    className="h-9 w-full rounded-control border border-border bg-surface pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    value={customerCity}
                    onChange={(e) => handleCityChange(e.target.value)}
                    placeholder="Ciudad o Provincia (para envío)"
                    className="h-9 w-full rounded-control border border-border bg-surface pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <span className="block text-[11px] font-medium text-muted-foreground mb-1.5">
                    Medio de pago previsto:
                  </span>
                  <div className="flex gap-1.5">
                    {[
                      { id: "indistinto", label: "Indistinto" },
                      { id: "transferencia", label: "Transferencia" },
                      { id: "usdt", label: "USDT" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() =>
                          setPreferredPayment(
                            m.id as "transferencia" | "usdt" | "indistinto"
                          )
                        }
                        className={`flex-1 rounded-control py-1 text-xs font-medium transition-colors ${
                          preferredPayment === m.id
                            ? "bg-foreground text-background font-semibold"
                            : "border border-border bg-surface text-muted-foreground hover:bg-elevated"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso comercial de confirmación previa */}
            <div className="rounded-lg border border-border/80 bg-[#f5f5f7] p-3.5 text-xs text-[#52555a] leading-relaxed">
              <strong className="block font-semibold text-foreground mb-0.5">
                Confirmación previa
              </strong>
              Sin pagos en la web. Al enviar tu consulta por WhatsApp confirmamos disponibilidad física, cotización final y opciones de entrega asegurada.
            </div>

            {/* CTA Principal de WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#18191c] text-sm font-bold text-white shadow-xs transition-transform duration-200 hover:scale-[1.01] hover:bg-black active:scale-[0.99]"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              <span>Abrir WhatsApp para enviar la consulta</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground pt-1">
              <ShieldCheck className="size-4 text-[#0D7A53]" />
              <span>Atención directa y asesoramiento oficial</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
