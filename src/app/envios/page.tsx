import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/layout/section-placeholder";

export const metadata: Metadata = {
  title: "Envíos",
};

export default function EnviosPage() {
  return (
    <SectionPlaceholder
      title="Envíos"
      description="La información de envíos se publicará únicamente cuando esté verificada. Mientras tanto, la consulta por WhatsApp es el canal disponible."
    />
  );
}
