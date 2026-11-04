import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";
import { ProductDetailView } from "@/components/commerce/product-detail-view";
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
} from "@/data/mock-catalog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado — Rial Electrónica",
    };
  }

  return {
    title: `${product.name} (${product.brand}) — Cotización y Stock`,
    description:
      product.description ||
      `Consultá precio en dólares y cotización en USDT de ${product.name}. Equipos nuevos sellados en caja cerrada con garantía.`,
    openGraph: {
      title: `${product.name} — Rial Electrónica`,
      description: `Cotización al instante de ${product.name} en USD y USDT. Atención personalizada por WhatsApp.`,
      images: [
        {
          url: product.image,
          alt: `${product.brand} ${product.name}`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.categorySlug);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <ProductDetailView
          product={product}
          relatedProducts={relatedProducts}
        />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
