"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  RotateCcw,
  User,
  MapPin,
  ChevronDown,
  ChevronUp,
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

  // Datos opcionales para agilizar el mensaje de WhatsApp (inicialización lazy de localStorage)
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
  const [showFastFields, setShowFastFields] = useState(false);

  // Guardar en localStorage cuando cambian
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

  // Bloqueo de scroll y listener Escape
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

  const whatsappHref = buildCartWhatsAppUrl(items, {
    customerName,
    customerCity,
    preferredPayment,
  });

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop con desenfoque suave */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Panel Deslizable Lateral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="relative z-10 flex h-full w-full max-w-[460px] flex-col border-l border-border bg-surface shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Cabecera del Drawer */}
        <div className="border-b border-border px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2
                id="cart-drawer-title"
                className="text-lg font-bold tracking-tight text-foreground"
              >
                Mi consulta
              </h2>
              <span className="inline-flex items-center justify-center rounded-full bg-elevated px-2 py-0.5 text-xs font-semibold text-foreground">
                {totalItems} {totalItems === 1 ? "ítem" : "ítems"}
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
                className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Tu selección para cotizar, a un paso de coordinar con un asesor.
          </p>
        </div>

        {/* Cuerpo del Drawer: Lista de Productos o Estado Vacío */}
        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-border bg-elevated text-muted-foreground shadow-2xs">
                <ShoppingBag className="size-6 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Tu próxima consulta empieza acá
              </h3>
              <p className="mt-1.5 max-w-[28ch] text-xs leading-relaxed text-muted-foreground">
                Todavía no sumaste equipos. Podés explorar el catálogo y usar el botón{" "}
                <span className="inline-flex size-4 items-center justify-center rounded-full border border-border bg-surface font-bold text-foreground">
                  +
                </span>{" "}
                para armar tu lista de cotización.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
              >
                Explorar catálogo <ArrowRight className="size-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Lista de Items */}
              <div className="divide-y divide-border/60">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3.5 py-3.5"
                  >
                    {/* Miniatura del producto */}
                    <Link
                      href={`/producto/${item.product.id}`}
                      onClick={closeCart}
                      className="relative size-16 shrink-0 overflow-hidden rounded-[14px] border border-border/80 bg-[#f5f5f7] p-1.5 transition-transform hover:scale-105"
                    >
                      <ProductImage
                        src={item.product.image}
                        alt={item.product.name}
                        sizes="64px"
                        className="object-contain"
                      />
                    </Link>

                    {/* Datos del producto */}
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {item.product.brand} · {item.product.category}
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
                          US$ {(item.product.priceUsd * item.quantity).toLocaleString("es-AR")}
                        </strong>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-muted-foreground tabular-nums">
                            (US$ {item.product.priceUsd.toLocaleString("es-AR")} c/u)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Controles de Cantidad y Quitar */}
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
                          className="flex size-7 items-center justify-center text-muted-foreground transition-all duration-150 hover:text-emerald-700 hover:scale-115 active:scale-75 active:text-emerald-700"
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

              {/* Formulario Rápido Opcional para agilizar cotización */}
              <div className="rounded-card border border-border bg-[#f7f8fa] p-3.5">
                <button
                  type="button"
                  onClick={() => setShowFastFields((v) => !v)}
                  className="flex w-full items-center justify-between text-xs font-semibold text-foreground"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Agilizar mi cotización (opcional)</span>
                    {(customerName || customerCity) && (
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                    )}
                  </span>
                  {showFastFields ? (
                    <ChevronUp className="size-3.5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="size-3.5 text-muted-foreground" />
                  )}
                </button>

                {showFastFields && (
                  <div className="mt-3 space-y-2.5 pt-2 border-t border-border/60">
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => handleNameChange(e.target.value)}
                        placeholder="Tu nombre (ej: Lucas)"
                        className="h-8 w-full rounded-control border border-border bg-surface pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        value={customerCity}
                        onChange={(e) => handleCityChange(e.target.value)}
                        placeholder="Ciudad / Localidad (para calcular envío)"
                        className="h-8 w-full rounded-control border border-border bg-surface pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] focus:outline-none"
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
                            className={`flex-1 rounded-control py-1 text-[11px] font-medium transition-colors ${
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
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pie del Drawer: Resumen y CTA WhatsApp */}
        {items.length > 0 && (
          <div className="border-t border-border bg-surface px-5 py-4 sm:px-6 space-y-3">
            {/* Resumen de Importe */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Importe estimado
                </span>
                <p className="text-[10px] text-muted-foreground">
                  (Sujeto a confirmación previa)
                </p>
              </div>
              <strong className="text-xl font-extrabold text-foreground tabular-nums">
                US$ {totalEstimatedUsd.toLocaleString("es-AR")}
              </strong>
            </div>

            {/* Tarjeta de Confirmación previa */}
            <div className="rounded-lg border border-border/80 bg-[#f5f5f7] p-3 text-[11px] leading-relaxed text-[#52555a]">
              <strong className="block text-foreground font-semibold">
                Confirmación previa
              </strong>
              Sin pagos en la web. Al enviar tu consulta por WhatsApp confirmamos disponibilidad, cotización final y plazo de entrega.
            </div>

            {/* Botón WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#18191c] text-sm font-bold text-white shadow-xs transition-transform duration-200 hover:scale-[1.01] hover:bg-black active:scale-[0.99]"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              <span>Abrir WhatsApp para enviar la consulta</span>
            </a>

            {/* Enlace secundario: Ver pantalla completa */}
            <div className="text-center">
              <Link
                href="/lista"
                onClick={closeCart}
                className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Ver mi consulta en pantalla completa
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
