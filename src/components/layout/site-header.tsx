"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { HeaderSearch } from "@/components/layout/header-search";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowUpRightIcon,
  CloseIcon,
  ListIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

type Panel = "search" | "menu" | null;

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-control text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function SiteHeader() {
  const [panel, setPanel] = useState<Panel>(null);

  useEffect(() => {
    if (!panel) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPanel(null);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [panel]);

  function toggle(next: Exclude<Panel, null>) {
    setPanel((current) => (current === next ? null : next));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:h-20 lg:gap-10 lg:px-10 xl:px-14">
        <Link
          href="/"
          onClick={() => setPanel(null)}
          className="group flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-base"
        >
          <span className="flex size-7 items-center justify-center border border-foreground text-[10px] font-bold tracking-[-0.08em] transition-colors group-hover:bg-foreground group-hover:text-background">R</span>
          <span>Rial <span className="font-normal text-muted-foreground">Electrónica</span></span>
        </Link>

        <HeaderNav className="hidden lg:block" />

        <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
          <span
            title="Cotización USDT de ejemplo, no verificada"
            className="hidden text-xs text-muted-foreground xl:inline"
          >
            USDT · valor de ejemplo
          </span>

          <button
            type="button"
            onClick={() => toggle("search")}
            aria-expanded={panel === "search"}
            aria-controls="header-search-panel"
            aria-label="Buscar productos"
            className={iconButton}
          >
            <SearchIcon className="size-5" />
          </button>

          <Link href="/lista" aria-label="Lista de consulta" className={iconButton}>
            <ListIcon className="size-5" />
          </Link>

          <ThemeToggle />

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-10 items-center gap-1.5 border-l border-border px-3 text-sm font-medium text-foreground transition-colors duration-[var(--duration-feedback)] hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:inline-flex"
          >
            WhatsApp
            <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-transform duration-[var(--duration-feedback)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>

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

      {panel === "search" ? (
        <HeaderSearch onClose={() => setPanel(null)} />
      ) : null}

      {panel === "menu" ? (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-2 sm:px-6">
            <HeaderNav
              orientation="vertical"
              onNavigate={() => setPanel(null)}
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <span
                title="Cotización USDT de ejemplo, no verificada"
                className="text-xs text-muted-foreground"
              >
                USDT · valor de ejemplo
              </span>
              <span className="text-xs text-muted-foreground">
                Propuesta no oficial
              </span>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-control border border-border bg-background text-sm font-medium text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated"
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
