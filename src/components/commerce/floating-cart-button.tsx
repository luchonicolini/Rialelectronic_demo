"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function FloatingCartButton() {
  const { totalItems, totalEstimatedUsd, isLoaded, openCart, isOpen } = useCart();

  // No mostrar si está vacío, cargando o si el drawer ya está abierto
  if (!isLoaded || totalItems === 0 || isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <button
        type="button"
        onClick={openCart}
        aria-label={`Ver lista de consulta con ${totalItems} equipos`}
        className="group inline-flex h-11 items-center gap-2.5 rounded-full border border-black/10 bg-[#171d25] px-4 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
      >
        <div className="relative flex items-center justify-center">
          <ShoppingCart className="size-4 shrink-0 text-white" aria-hidden="true" />
          <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-extrabold text-white">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        </div>

        <span className="tabular-nums font-bold">
          US$ {totalEstimatedUsd.toLocaleString("es-AR")}
        </span>

        <span className="hidden sm:inline-block border-l border-white/20 pl-2 text-[11px] font-normal text-white/80 group-hover:text-white">
          Ver lista
        </span>
      </button>
    </div>
  );
}
