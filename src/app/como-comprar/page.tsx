import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/layout/section-placeholder";

export const metadata: Metadata = {
  title: "Cómo comprar",
};

export default function ComoComprarPage() {
  return (
    <SectionPlaceholder
      title="Cómo comprar"
      description="El proceso de compra se publicará solo con información confirmada por Rial. La demo no procesa pagos ni confirma operaciones."
    />
  );
}
