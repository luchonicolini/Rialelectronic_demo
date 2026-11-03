import { SiteHeader } from "@/components/layout/site-header";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { CategoriesGrid } from "@/components/home/categories-grid";
import { FeaturedGrid } from "@/components/home/featured-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { ShippingSection } from "@/components/home/shipping-section";
import { TestimonialsGrid } from "@/components/home/testimonials-grid";
import { FaqSection } from "@/components/home/faq-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <HeroShowcase />
        <CategoriesGrid />
        <FeaturedGrid />
        <HowItWorks />
        <ShippingSection />
        <TestimonialsGrid />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
