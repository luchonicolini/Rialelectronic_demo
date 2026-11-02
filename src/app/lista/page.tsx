import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/layout/section-placeholder";

export const metadata: Metadata = {
  title: "Lista de consulta",
};

export default function ListaPage() {
  return (
    <SectionPlaceholder
      title="Lista de consulta"
      description="La lista agrupa productos para pedir una cotización por WhatsApp. No es un carrito de compra, no confirma stock y no procesa pagos."
    />
  );
}
