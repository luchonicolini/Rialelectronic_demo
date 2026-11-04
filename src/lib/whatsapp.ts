import { siteConfig } from "./site";
import type { CartItem } from "@/context/cart-context";
import type { Product } from "@/data/mock-catalog";

export interface QuotationDetails {
  customerName?: string;
  customerCity?: string;
  preferredPayment?: "transferencia" | "usdt" | "indistinto";
  notes?: string;
}

/**
 * Construye el enlace de WhatsApp con el mensaje preformateado y estructurado
 * para enviar la lista completa de cotización.
 */
export function buildCartWhatsAppUrl(
  items: CartItem[],
  details?: QuotationDetails
): string {
  if (!items.length) {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      "¡Hola Rial Electrónica! Quisiera consultar disponibilidad y cotización de equipos tecnológicos."
    )}`;
  }

  const itemsList = items
    .map((item) => {
      const p = item.product;
      const priceText = p.priceUsd
        ? `— US$ ${(p.priceUsd * item.quantity).toLocaleString("es-AR")}`
        : "";
      return `• ${item.quantity}x ${p.brand} ${p.name} ${priceText}`.trim();
    })
    .join("\n");

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalUsd = items.reduce(
    (sum, item) => sum + (item.product.priceUsd || 0) * item.quantity,
    0
  );

  const intro = details?.customerName?.trim()
    ? `¡Hola Rial Electrónica! Mi nombre es ${details.customerName.trim()}${
        details.customerCity?.trim() ? ` de ${details.customerCity.trim()}` : ""
      }. Quiero consultar disponibilidad y cotización para mi lista de equipos:`
    : "¡Hola Rial Electrónica! Quiero consultar disponibilidad y cotización para mi lista de equipos:";

  const paymentText =
    details?.preferredPayment === "usdt"
      ? "Medio de pago previsto: USDT (Cripto)"
      : details?.preferredPayment === "transferencia"
      ? "Medio de pago previsto: Transferencia bancaria"
      : "Medios de pago a evaluar: Transferencia / USDT";

  const messageParts = [
    intro,
    "",
    itemsList,
    "",
    `Total de equipos: ${totalUnits} ${totalUnits === 1 ? "unidad" : "unidades"}`,
    `Importe estimado: US$ ${totalUsd.toLocaleString("es-AR")}`,
    paymentText,
  ];

  if (details?.customerCity?.trim()) {
    messageParts.push(`Destino para envío: ${details.customerCity.trim()}`);
  }

  if (details?.notes?.trim()) {
    messageParts.push(`Nota: ${details.notes.trim()}`);
  }

  messageParts.push(
    "",
    "¿Tienen stock para coordinar la entrega o cotización final? ¡Muchas gracias!"
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    messageParts.join("\n")
  )}`;
}

/**
 * Construye el enlace de WhatsApp para consultar directamente por un solo producto.
 */
export function buildProductWhatsAppUrl(
  product: Product,
  details?: { customerName?: string; customerCity?: string }
): string {
  const intro = details?.customerName?.trim()
    ? `¡Hola Rial Electrónica! Mi nombre es ${details.customerName.trim()}${
        details.customerCity?.trim() ? ` de ${details.customerCity.trim()}` : ""
      }.`
    : "¡Hola Rial Electrónica!";

  const message = [
    `${intro} Quiero consultar cotización y stock de:`,
    `• ${product.brand} ${product.name} — US$ ${product.priceUsd.toLocaleString("es-AR")}`,
    "",
    "Medio de pago previsto: Transferencia / USDT",
    "¿Tienen disponibilidad física o plazo estimado de entrega?",
  ].join("\n");

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
