import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/layout/section-placeholder";

export const metadata: Metadata = {
  title: "Catálogo",
};

export default function CatalogoPage() {
  return (
    <SectionPlaceholder
      title="Catálogo"
      description="La grilla de productos, los filtros y la búsqueda se implementan en la Fase 3, con datos de ejemplo explícitos y sin inventar stock ni precios."
    />
  );
}
