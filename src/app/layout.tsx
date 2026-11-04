import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/commerce/cart-drawer";
import { FloatingCartButton } from "@/components/commerce/floating-cart-button";
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
  metadataBase: new URL("https://rialelectronica-demo.vercel.app"),
  title: {
    default: "Rial Electrónica — Tecnología y Equipos Originales",
    template: "%s · Rial Electrónica",
  },
  description:
    "Equipos de tecnología importada, nuevos y cerrados en caja con garantía. Atención directa y personalizada en cada operación.",
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
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
