"use client";

import { useEffect, useRef } from "react";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";

type HeaderSearchProps = {
  onClose: () => void;
};

export function HeaderSearch({ onClose }: HeaderSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      id="header-search-panel"
      className="mx-auto mt-2 w-full max-w-[1328px] rounded-[20px] border border-black/20 bg-white/95 px-4 py-2 backdrop-blur-[32px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] lg:rounded-[24px]"
    >
      <form
        role="search"
        action="/catalogo"
        onSubmit={onClose}
        className="flex w-full items-center gap-3"
      >
        <label htmlFor="site-search" className="sr-only">
          Buscar productos
        </label>
        <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          id="site-search"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Buscar productos, marcas o categorías"
          className="h-10 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="inline-flex h-9 shrink-0 items-center rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Buscar
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar búsqueda"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-black/[0.05] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <CloseIcon className="size-4" />
        </button>
      </form>
    </div>
  );
}
