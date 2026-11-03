"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <aside
      aria-label="Atención por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href={whatsappUrl("¡Hola Rial Electrónica! Vengo desde la web y quiero consultar por un producto.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Rial Electrónica por WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
      >
        <MessageCircle className="size-4" />
        <span>Consultar por WhatsApp</span>
      </a>
    </aside>
  );
}
