"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <aside
      aria-label="Atención por WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center sm:bottom-6 sm:right-6"
    >
      <a
        href={whatsappUrl("¡Hola Rial Electrónica! Vengo desde la web y quiero consultar por un producto.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Rial Electrónica por WhatsApp"
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#128C7E] px-3.5 sm:px-4 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
      >
        <MessageCircle className="size-4 shrink-0" />
        <span className="hidden min-[380px]:inline">Consultar por WhatsApp</span>
        <span className="min-[380px]:hidden">WhatsApp</span>
      </a>
    </aside>
  );
}
