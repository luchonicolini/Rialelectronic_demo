export const siteConfig = {
  name: "Rial Electrónica",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://rialelectronica-demo.vercel.app",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491131568131",
  whatsappMessage:
    "Hola, estuve viendo el catálogo de Rial Electrónica y quisiera hacer una consulta. Gracias.",
  email: "admin@rialelectronica.com",
  instagramUrl: "https://www.instagram.com/electronica.rial/",
  instagramHandle: "@electronica.rial",
} as const;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
