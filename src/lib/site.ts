export const siteConfig = {
  name: "Rial Electrónica",
  whatsappNumber: "5491131568131",
  whatsappMessage:
    "Hola, estuve viendo el catálogo de Rial Electrónica y quisiera hacer una consulta. Gracias.",
} as const;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
