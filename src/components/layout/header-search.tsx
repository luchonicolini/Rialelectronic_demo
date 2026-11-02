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
    <div id="header-search-panel" className="border-t border-border bg-surface">
      <form
        role="search"
        action="/catalogo"
        onSubmit={onClose}
        className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-10 xl:px-14"
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
          className="h-9 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="inline-flex h-9 shrink-0 items-center rounded-control border border-border px-3 text-sm font-medium text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated"
        >
          Buscar
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar búsqueda"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-control text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated hover:text-foreground"
        >
          <CloseIcon className="size-4" />
        </button>
      </form>
    </div>
  );
}
