"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { MOCK_FEATURED_PRODUCTS, MOCK_CATEGORIES, MOCK_BRANDS } from "@/data/mock-catalog";
import { whatsappUrl } from "@/lib/site";

export function CatalogBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedBrand, setSelectedBrand] = useState<string>("todas");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return MOCK_FEATURED_PRODUCTS.filter((prod) => {
      const matchesCat =
        selectedCategory === "todos" || prod.categorySlug === selectedCategory;
      const matchesBrand =
        selectedBrand === "todas" ||
        prod.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchesSearch =
        !searchTerm.trim() ||
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCat && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchTerm]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-14">
      {/* Barra de Búsqueda y Filtros Rápidos */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mb-2"
          >
            <ArrowLeft className="size-3.5" /> Volver al inicio
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Catálogo de Equipos
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Mostrando {filteredProducts.length} productos disponibles para cotización inmediata.
          </p>
        </div>

        {/* Input de Búsqueda */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por modelo o marca..."
            className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Barra Lateral de Filtros */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <SlidersHorizontal className="size-3.5 text-[var(--accent)]" />
              Categorías
            </h3>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setSelectedCategory("todos")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  selectedCategory === "todos"
                    ? "bg-[var(--accent)] text-white"
                    : "text-muted-foreground hover:bg-elevated hover:text-foreground"
                }`}
              >
                Todas las categorías
              </button>
              {MOCK_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    selectedCategory === cat.slug
                      ? "bg-[var(--accent)] text-white"
                      : "text-muted-foreground hover:bg-elevated hover:text-foreground"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs opacity-75">{cat.itemCount}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Marcas
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedBrand("todas")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedBrand === "todas"
                    ? "bg-[var(--accent)] text-white"
                    : "border border-border bg-background text-muted-foreground hover:bg-elevated"
                }`}
              >
                Todas
              </button>
              {MOCK_BRANDS.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedBrand === brand
                      ? "bg-[var(--accent)] text-white"
                      : "border border-border bg-background text-muted-foreground hover:bg-elevated"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grilla de Resultados */}
        <div className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
              <p className="text-base font-semibold text-foreground">
                No se encontraron productos con los filtros seleccionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("todos");
                  setSelectedBrand("todas");
                  setSearchTerm("");
                }}
                className="mt-4 text-xs font-bold text-[var(--accent)] hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const waLink = whatsappUrl(
                  `¡Hola Rial Electrónica! Quiero consultar disponibilidad del producto: ${prod.name}.`
                );

                return (
                  <article
                    key={prod.id}
                    className="flex flex-col rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-elevated p-3 mb-4 flex items-center justify-center">
                      {prod.badge && (
                        <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 px-2.5 py-0.5 text-[11px] font-bold text-[var(--accent)]">
                          {prod.badge}
                        </span>
                      )}
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex flex-col flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {prod.brand} · {prod.category}
                      </span>
                      <h3 className="mt-1 font-bold text-base text-foreground leading-snug">
                        {prod.name}
                      </h3>

                      <div className="mt-auto pt-4 border-t border-border flex items-end justify-between">
                        <div>
                          <span className="text-[10px] text-muted-foreground uppercase font-semibold block">
                            Cotización sugerida
                          </span>
                          <strong className="text-lg font-extrabold text-foreground">
                            US$ {prod.priceUsd.toLocaleString("en-US")}
                          </strong>
                          {prod.priceUsdt && (
                            <span className="block text-xs text-[var(--accent)] font-semibold">
                              {prod.priceUsdt} USDT
                            </span>
                          )}
                        </div>

                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 text-xs font-bold text-white shadow-2xs hover:opacity-95"
                        >
                          <MessageCircle className="size-3.5" />
                          Consultar
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
