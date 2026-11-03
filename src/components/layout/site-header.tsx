"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { HeaderNav } from "@/components/layout/header-nav";
import { HeaderSearch } from "@/components/layout/header-search";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

type Panel = "search" | "menu" | null;

const iconButton =
  "inline-flex size-9 sm:size-10 items-center justify-center rounded-control text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function SiteHeader() {
  const [panel, setPanel] = useState<Panel>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
    <header className="sticky top-0 z-40 border-b border-border bg-surface transition-colors">
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
          className="relative hidden md:flex items-center flex-1 max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] ml-auto lg:ml-2"
        >
          <SearchIcon className="absolute left-3.5 size-3.5 text-muted-foreground pointer-events-none" />
          <input
            ref={searchInputRef}
            type="search"
            name="q"
            placeholder="¿Qué estás buscando?"
            className="h-9 w-full rounded-full border border-border/80 bg-elevated/60 pl-9 pr-9 text-xs text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
          />
          <kbd className="absolute right-2.5 hidden xl:inline-flex items-center gap-0.5 rounded border border-border/70 bg-surface px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground select-none">
            ⌘K
          </kbd>
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

          {/* Pill de Cotización USDT de referencia */}
          <div
            title="Cotización USDT de referencia estimada de mercado (sujeta a confirmación en WhatsApp)"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-elevated/60 px-3 py-1.5 text-[11px] font-semibold text-foreground tracking-tight select-none"
          >
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
            <span className="tabular-nums">USDT $1.657,71</span>
          </div>

          {/* Botón Carrito / Lista de Cotización */}
          <Link
            href="/lista"
            aria-label="Ver carrito de cotizaciones"
            className="inline-flex h-9 items-center gap-1.5 sm:gap-2 rounded-full border border-border/80 bg-elevated/60 px-3 sm:px-3.5 text-xs font-semibold text-foreground transition-all duration-200 hover:bg-elevated hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-95"
          >
            <ShoppingCart className="size-3.5 text-foreground shrink-0" aria-hidden="true" />
            <span>Carrito</span>
          </Link>

          {/* Selector de Tema */}
          <ThemeToggle />

          {/* Enlace WhatsApp Desktop */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-9 items-center gap-1.5 border-l border-border pl-3 text-xs font-semibold text-foreground transition-colors duration-[var(--duration-feedback)] hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface xl:inline-flex"
          >
            WhatsApp
            <ArrowUpRightIcon className="size-3 text-muted-foreground transition-transform duration-[var(--duration-feedback)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>

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
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                name="q"
                placeholder="¿Qué estás buscando?"
                className="h-10 w-full rounded-full border border-border bg-elevated/70 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </form>

            <HeaderNav
              orientation="vertical"
              onNavigate={() => setPanel(null)}
            />

            <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                <span>USDT $1.657,71</span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                Cotización de referencia
              </span>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-background text-sm font-semibold text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated shadow-xs"
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
