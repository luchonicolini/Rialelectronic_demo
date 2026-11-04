"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { HeaderNav } from "@/components/layout/header-nav";
import { HeaderSearch } from "@/components/layout/header-search";
import { UsdtBadge } from "@/components/layout/usdt-badge";
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

type Panel = "search" | "menu" | null;

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-control text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function SiteHeader() {
  const [panel, setPanel] = useState<Panel>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanel(null);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggle(next: Exclude<Panel, null>) {
    setPanel((current) => (current === next ? null : next));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:h-20 lg:gap-6 lg:px-10 xl:px-14">
        {/* Identidad / Logo */}
        <Link
          href="/"
          onClick={() => setPanel(null)}
          className="group flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-base"
        >
          <span className="flex size-7 items-center justify-center border border-foreground text-[10px] font-bold tracking-[-0.08em] transition-colors group-hover:bg-foreground group-hover:text-background">
            R
          </span>
          <span>
            Rial <span className="font-normal text-muted-foreground">Electrónica</span>
          </span>
        </Link>

        {/* Navegación Principal Desktop */}
        <HeaderNav className="hidden lg:block shrink-0" />

        {/* Buscador Inline Directo (Desktop / Tablet) */}
        <form
          action="/catalogo"
          method="GET"
          role="search"
          className="relative hidden md:flex items-center flex-1 max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] ml-auto lg:ml-4"
        >
          <SearchIcon className="absolute left-3.5 size-4 text-muted-foreground pointer-events-none" />
          <input
            ref={searchInputRef}
            type="search"
            name="q"
            placeholder="¿Qué estás buscando?"
            className="h-10 w-full rounded-control border border-border bg-elevated/50 pl-10 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-[var(--duration-feedback)] focus:border-foreground focus:bg-surface focus:outline-none focus:ring-1 focus:ring-foreground"
          />
        </form>

        {/* Acciones del lado derecho */}
        <div className="flex items-center gap-2 sm:gap-2.5 ml-auto md:ml-0 shrink-0">
          {/* Lupa para Mobile (< md) */}
          <button
            type="button"
            onClick={() => toggle("search")}
            aria-expanded={panel === "search"}
            aria-controls="header-search-panel"
            aria-label="Buscar productos"
            className={`${iconButton} md:hidden`}
          >
            <SearchIcon className="size-4" />
          </button>

          {/* Indicador de Cotización USDT en vivo vía DolarApi */}
          <UsdtBadge className="hidden sm:inline-flex h-10" />

          {/* Botón Carrito / Lista de Cotización: abre el panel lateral sin salir de la página */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Ver carrito de cotizaciones${totalItems > 0 ? ` (${totalItems} artículos)` : ""}`}
            className="relative inline-flex h-10 items-center gap-2 rounded-control border border-border bg-elevated/50 px-2.5 sm:px-3.5 text-xs font-semibold text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98]"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingCart className="size-4 text-foreground shrink-0" aria-hidden="true" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2.5 flex min-w-4 h-4 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[9px] font-extrabold text-[var(--accent-contrast)]">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Carrito</span>
          </button>

          {/* Botón Menú Mobile */}
          <button
            type="button"
            onClick={() => toggle("menu")}
            aria-expanded={panel === "menu"}
            aria-controls="mobile-menu"
            aria-label={panel === "menu" ? "Cerrar menú" : "Abrir menú"}
            className={`${iconButton} lg:hidden`}
          >
            {panel === "menu" ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Panel de Búsqueda Desplegable para Mobile */}
      {panel === "search" ? (
        <HeaderSearch onClose={() => setPanel(null)} />
      ) : null}

      {/* Menú Desplegable Mobile */}
      {panel === "menu" ? (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-3 sm:px-6">
            {/* Buscador en Menú Mobile */}
            <form action="/catalogo" method="GET" className="relative mb-4">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                name="q"
                placeholder="¿Qué estás buscando?"
                className="h-10 w-full rounded-control border border-border bg-elevated/60 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </form>

            <HeaderNav
              orientation="vertical"
              onNavigate={() => setPanel(null)}
            />

            <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setPanel(null);
                  openCart();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground shadow-2xs"
              >
                <ShoppingCart className="size-3.5" />
                <span>Carrito ({totalItems})</span>
              </button>
              <UsdtBadge className="h-9" />
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-control border border-border bg-background text-sm font-semibold text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated"
            >
              Consultar por WhatsApp
              <ArrowUpRightIcon className="size-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
