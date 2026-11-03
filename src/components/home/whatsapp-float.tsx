"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <aside
      aria-label="Atención por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <a
        href={whatsappUrl("¡Hola Rial Electrónica! Vengo desde la web y quiero consultar por un producto.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Rial Electrónica por WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-white" />
        </span>
        <MessageCircle className="size-5 fill-current" />
        <span className="hidden text-sm font-bold sm:inline">
          Consultar por WhatsApp
        </span>
      </a>
    </aside>
  );
}
