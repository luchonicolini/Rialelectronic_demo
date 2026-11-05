import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/commerce/cart-drawer";
import "./globals.css";

// 1. Cuerpo & UI: Variable Font optimizada y auto-alojada
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// 2. Titulares / Acento: Serif editorial
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// 3. Metadatos / Números: Variable Mono sutil
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rialelectronica-demo.vercel.app"
  ),
  title: {
    default: "Rial Electrónica — Tecnología y Equipos Originales",
    template: "%s · Rial Electrónica",
  },
  description:
    "Equipos de tecnología importada, nuevos y cerrados en caja con garantía. Atención directa y personalizada en cada operación.",
  keywords: [
    "Rial Electrónica",
    "electrónica buenos aires",
    "tecnología importada",
    "iPhone",
    "MacBook",
    "PlayStation",
    "equipos originales",
    "cotización en dólares",
    "USDT",
  ],
  authors: [{ name: "Rial Electrónica" }],
  creator: "Rial Electrónica",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Rial Electrónica",
    title: "Rial Electrónica — Tecnología y Equipos Originales",
    description:
      "Equipos de tecnología importada, nuevos y cerrados en caja con garantía. Atención directa y cotizaciones por WhatsApp.",
    images: [
      {
        url: "/images/delivery-package.jpg",
        width: 1200,
        height: 630,
        alt: "Rial Electrónica — Equipos originales con garantía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rial Electrónica — Tecnología y Equipos Originales",
    description:
      "Equipos de tecnología importada, nuevos y cerrados en caja con garantía.",
    images: ["/images/delivery-package.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground"
        >
          Saltar al contenido
        </a>
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
