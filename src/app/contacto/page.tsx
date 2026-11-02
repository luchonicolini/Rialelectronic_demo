import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/layout/section-placeholder";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <SectionPlaceholder
      title="Contacto"
      description="El canal principal es WhatsApp. Los datos de contacto y la autorización del número se confirmarán con Rial antes de publicar la demo."
    />
  );
}
