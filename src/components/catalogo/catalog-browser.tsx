"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { MOCK_FEATURED_PRODUCTS, MOCK_CATEGORIES, MOCK_BRANDS } from "@/data/mock-catalog";
import { ProductCard } from "@/components/commerce/product-card";

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
      {/* Barra de Búsqueda y Encabezado */}
      <div className="mb-8 border-b border-border pb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Volver al inicio
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Catálogo de equipos
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {filteredProducts.length} modelos listados para consulta y cotización directa.
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
            className="h-10 w-full rounded-control border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Barra Lateral de Filtros */}
        <aside className="space-y-6 lg:col-span-3">
          <div className="rounded-card border border-border bg-surface p-5">
            <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <SlidersHorizontal className="size-3.5 text-muted-foreground" />
              Categorías
            </h2>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setSelectedCategory("todos")}
                className={`rounded-control px-3 py-2 text-left text-sm font-medium transition-colors ${
                  selectedCategory === "todos"
                    ? "bg-foreground text-background"
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
                  className={`flex items-center justify-between rounded-control px-3 py-2 text-left text-sm font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-elevated hover:text-foreground"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs opacity-60">{cat.itemCount}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-card border border-border bg-surface p-5">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Marcas
            </h2>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedBrand("todas")}
                className={`rounded-control px-3 py-1 text-xs font-medium transition-colors ${
                  selectedBrand === "todas"
                    ? "bg-foreground text-background"
                    : "border border-border bg-surface text-muted-foreground hover:bg-elevated hover:text-foreground"
                }`}
              >
                Todas
              </button>
              {MOCK_BRANDS.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`rounded-control px-3 py-1 text-xs font-medium transition-colors ${
                    selectedBrand === brand
                      ? "bg-foreground text-background"
                      : "border border-border bg-surface text-muted-foreground hover:bg-elevated hover:text-foreground"
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
            <div className="rounded-card border border-dashed border-border bg-surface p-12 text-center">
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
                className="mt-4 text-xs font-medium text-[var(--accent)] hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
