import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rial Electrónica — Tecnología y Equipos Originales",
    short_name: "Rial Electrónica",
    description:
      "Equipos de tecnología importada, nuevos y cerrados en caja con garantía. Cotización en USD y USDT.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9fb",
    theme_color: "#171d25",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
