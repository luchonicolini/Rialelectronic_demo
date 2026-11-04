"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  ShoppingCart,
} from "lucide-react";
import {
  MOCK_FEATURED_PRODUCTS,
  MOCK_CATEGORIES,
  type Product,
} from "@/data/mock-catalog";
import { ProductCard } from "@/components/commerce/product-card";
import { useCart } from "@/context/cart-context";

const ITEMS_PER_PAGE = 12;

type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "name";

export function CatalogBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL searchParams is the single source of truth for page and filters
  const selectedCategory = searchParams.get("categoria") || "todos";
  const selectedBrands = useMemo(() => searchParams.getAll("marca"), [searchParams]);
  const sortBy = (searchParams.get("orden") as SortOption) || "featured";
  const onlyAvailable = searchParams.get("stock") === "1";
  const rawPage = parseInt(searchParams.get("pagina") || "1", 10);
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  // Local search text for instant zero-lag client-side filtering while typing
  const urlQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);

  // Sync state if URL query changed externally (e.g., from header search)
  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setSearchQuery(urlQuery);
  }

  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const { totalItems, openCart } = useCart();

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Keyboard Escape listener for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // URL updater
  const updateFilter = useCallback(
    (updates: {
      category?: string;
      brands?: string[];
      query?: string;
      sort?: SortOption;
      stock?: boolean;
      page?: number;
    }) => {
      const next = new URLSearchParams(searchParams.toString());

      if (updates.category !== undefined) {
        if (updates.category && updates.category !== "todos") {
          next.set("categoria", updates.category);
        } else {
          next.delete("categoria");
        }
        next.delete("pagina");
      }

      if (updates.brands !== undefined) {
        next.delete("marca");
        updates.brands.forEach((b) => next.append("marca", b));
        next.delete("pagina");
      }

      if (updates.query !== undefined) {
        if (updates.query.trim()) {
          next.set("q", updates.query.trim());
        } else {
          next.delete("q");
        }
        next.delete("pagina");
      }

      if (updates.sort !== undefined) {
        if (updates.sort && updates.sort !== "featured") {
          next.set("orden", updates.sort);
        } else {
          next.delete("orden");
        }
        next.delete("pagina");
      }

      if (updates.stock !== undefined) {
        if (updates.stock) {
          next.set("stock", "1");
        } else {
          next.delete("stock");
        }
        next.delete("pagina");
      }

      if (updates.page !== undefined) {
        if (updates.page > 1) {
          next.set("pagina", String(updates.page));
        } else {
          next.delete("pagina");
        }
      }

      const queryStr = next.toString();
      const targetUrl = queryStr ? `${pathname}?${queryStr}` : pathname;
      router.replace(targetUrl, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  // Debounced URL sync for typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() !== urlQuery) {
        updateFilter({ query: searchQuery });
      }
    }, 280);
    return () => clearTimeout(timer);
  }, [searchQuery, urlQuery, updateFilter]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of MOCK_CATEGORIES) {
      counts[cat.slug] = 0;
    }
    for (const p of MOCK_FEATURED_PRODUCTS) {
      if (counts[p.categorySlug] !== undefined) {
        counts[p.categorySlug]++;
      }
    }
    return counts;
  }, []);

  // Brands available in current category
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    for (const p of MOCK_FEATURED_PRODUCTS) {
      if (selectedCategory === "todos" || p.categorySlug === selectedCategory) {
        brandsSet.add(p.brand);
      }
    }
    return Array.from(brandsSet).sort((a, b) => a.localeCompare(b, "es"));
  }, [selectedCategory]);

  // Brand item counts
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of MOCK_FEATURED_PRODUCTS) {
      if (selectedCategory === "todos" || p.categorySlug === selectedCategory) {
        counts[p.brand] = (counts[p.brand] || 0) + 1;
      }
    }
    return counts;
  }, [selectedCategory]);

  // Displayed brands (first 6 or all)
  const displayedBrands = useMemo(() => {
    if (showAllBrands) return availableBrands;
    const checked = availableBrands.filter((b) => selectedBrands.includes(b));
    const unchecked = availableBrands.filter((b) => !selectedBrands.includes(b));
    return Array.from(new Set([...checked, ...unchecked.slice(0, 6)]));
  }, [availableBrands, selectedBrands, showAllBrands]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    const list = MOCK_FEATURED_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory !== "todos" && prod.categorySlug !== selectedCategory) {
        return false;
      }

      // Brand filter (multi-select)
      if (selectedBrands.length > 0 && !selectedBrands.includes(prod.brand)) {
        return false;
      }

      // Availability filter
      if (onlyAvailable && (!prod.priceUsd || prod.priceUsd <= 0)) {
        return false;
      }

      // Search text filter
      if (normalizedQuery) {
        const fullSearchTarget = (
          prod.name +
          " " +
          prod.brand +
          " " +
          prod.category +
          " " +
          (prod.subtitleSpecs || "") +
          " " +
          (prod.specs || []).join(" ")
        )
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (!fullSearchTarget.includes(normalizedQuery)) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.priceUsd - b.priceUsd);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.priceUsd - a.priceUsd);
    } else if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"));
    } else if (sortBy === "newest") {
      list.sort((a, b) => {
        const aNew = a.badge === "Novedad" || a.badge === "Nuevo";
        const bNew = b.badge === "Novedad" || b.badge === "Nuevo";
        return Number(bNew) - Number(aNew);
      });
    }

    return list;
  }, [selectedCategory, selectedBrands, onlyAvailable, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, safePage]);

  // Page numbers with ellipsis
  const pageNumbers = useMemo(() => {
    return Array.from(
      new Set([
        1,
        ...[safePage - 1, safePage, safePage + 1].filter(
          (n) => n > 1 && n < totalPages
        ),
        totalPages,
      ])
    ).sort((a, b) => a - b);
  }, [safePage, totalPages]);

  // Scroll to toolbar on page change
  const goToPage = (nextPage: number) => {
    const p = Math.max(1, Math.min(totalPages, nextPage));
    updateFilter({ page: p });
    document
      .querySelector(".catalog-toolbar")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handlers
  const handleCategoryChange = (slug: string) => {
    updateFilter({ category: slug, brands: [] });
  };

  const toggleBrand = (brand: string) => {
    const nextBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    updateFilter({ brands: nextBrands });
  };

  const handleSearchChange = (term: string) => {
    setSearchQuery(term);
    if (!term.trim()) {
      updateFilter({ query: "" });
    }
  };

  const handleSortChange = (newSort: SortOption) => {
    updateFilter({ sort: newSort });
  };

  const handleStockToggle = (checked: boolean) => {
    updateFilter({ stock: checked });
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    router.replace(pathname, { scroll: false });
  };

  // Active filters check
  const hasActiveFilters = Boolean(
    (selectedCategory && selectedCategory !== "todos") ||
      selectedBrands.length > 0 ||
      searchQuery.trim() ||
      onlyAvailable
  );

  // Active category info
  const currentCategory = MOCK_CATEGORIES.find(
    (c) => c.slug === selectedCategory
  );

  // Editorial title & subtitle
  const title = searchQuery.trim()
    ? `Resultados para “${searchQuery.trim()}”`
    : currentCategory
    ? currentCategory.name
    : "Encontrá tu próxima elección.";

  const subtitle = currentCategory
    ? `${currentCategory.subtitle} originales con garantía oficial y cotización inmediata en dólares y USDT.`
    : "Tecnología original con garantía oficial y envíos asegurados a todo el país.";

  // Empty state category suggestions
  const emptySuggestions = MOCK_CATEGORIES.filter(
    (c) => c.slug !== selectedCategory
  ).slice(0, 4);

  // Reusable Filter Controls component
  const filterControls = (
    <div className="filter-controls">
      {/* Categorías */}
      <fieldset>
        <legend>Categorías</legend>
        <button
          type="button"
          className="category-item"
          aria-current={selectedCategory === "todos" ? "true" : undefined}
          onClick={() => {
            handleCategoryChange("todos");
            setMobileOpen(false);
          }}
        >
          <span>Todos los productos</span>
          <span className="count-badge">{MOCK_FEATURED_PRODUCTS.length}</span>
        </button>

        {MOCK_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className="category-item"
            aria-current={selectedCategory === cat.slug ? "true" : undefined}
            onClick={() => {
              handleCategoryChange(cat.slug);
              setMobileOpen(false);
            }}
          >
            <span>{cat.name}</span>
            <span className="count-badge">{categoryCounts[cat.slug] || 0}</span>
          </button>
        ))}
      </fieldset>

      {/* Marcas */}
      {availableBrands.length > 0 && (
        <fieldset>
          <legend>Marca</legend>
          <div className="brand-options">
            {displayedBrands.map((brand) => (
              <label key={brand} className="filter-checkbox-label">
                <div className="flex items-center gap-2.5 min-w-0">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    aria-label={`Filtrar por marca ${brand}`}
                  />
                  <span className="truncate">{brand}</span>
                </div>
                <span className="count-badge">{brandCounts[brand] || 0}</span>
              </label>
            ))}
          </div>

          {availableBrands.length > 6 && (
            <button
              type="button"
              className="mt-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={showAllBrands}
              onClick={() => setShowAllBrands((val) => !val)}
            >
              {showAllBrands
                ? "Ver menos marcas"
                : `Ver todas las marcas (${availableBrands.length})`}
            </button>
          )}
        </fieldset>
      )}

      {/* Disponibilidad */}
      <fieldset>
        <legend>Disponibilidad</legend>
        <label className="filter-checkbox-label">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => handleStockToggle(e.target.checked)}
            />
            <span>Solo disponibles</span>
          </div>
        </label>
      </fieldset>

      {/* Nota comercial demo */}
      <p className="demo-note">
        Precios y disponibilidad sujetos a confirmación antes de coordinar el pedido o cotización directa.
      </p>
    </div>
  );

  return (
    <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Editorial Header */}
      <div className="py-8 sm:py-12 max-w-3xl">
        <nav
          className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"
          aria-label="Ruta de navegación"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-semibold text-foreground">
            {currentCategory?.name ?? "Catálogo"}
          </span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.08]">
          {title}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {totalItems > 0 && (
          <button
            type="button"
            onClick={openCart}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-2xs hover:bg-elevated transition-colors"
          >
            <ShoppingCart className="size-3.5 text-foreground" />
            <span>
              Ver lista de cotización ({totalItems}{" "}
              {totalItems === 1 ? "artículo" : "artículos"})
            </span>
          </button>
        )}
      </div>

      {/* Layout Principal: Sidebar Sticky + Contenido */}
      <div className="catalog-layout">
        {/* Sidebar en Desktop */}
        <aside className="catalog-sidebar" aria-label="Filtros de productos">
          {filterControls}
        </aside>

        {/* Área de Productos y Toolbar */}
        <div className="min-w-0">
          {/* Toolbar */}
          <div className="catalog-toolbar">
            {/* Buscador */}
            <label className="catalog-search-field">
              <Search
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Buscar por marca o modelo..."
                aria-label="Buscar por marca o modelo"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  aria-label="Limpiar búsqueda"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </label>

            {/* Contador de Productos */}
            <div className="flex items-center gap-3">
              <span
                aria-live="polite"
                className="text-sm text-muted-foreground tabular-nums whitespace-nowrap"
              >
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "producto" : "productos"}
              </span>
            </div>

            {/* Botón Filtros Mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="mobile-filter inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-elevated shadow-2xs transition-colors"
              aria-label="Abrir filtros de productos"
            >
              <SlidersHorizontal className="size-3.5 text-foreground" />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span
                  className="size-1.5 rounded-full bg-[var(--accent)]"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Ordenamiento */}
            <label className="sort-control">
              <span className="sr-only">Ordenar productos</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                aria-label="Ordenar productos"
              >
                <option value="featured">Destacados primero</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
                <option value="newest">Novedades primero</option>
                <option value="name">Nombre: A a Z</option>
              </select>
            </label>
          </div>

          {/* Chips de Filtros Activos */}
          {hasActiveFilters && (
            <div className="active-filters">
              {selectedCategory !== "todos" && currentCategory && (
                <button
                  type="button"
                  onClick={() => handleCategoryChange("todos")}
                  title="Quitar filtro de categoría"
                >
                  <span>{currentCategory.name}</span>
                  <X className="size-3.5" />
                </button>
              )}

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  title="Quitar búsqueda"
                >
                  <span>Búsqueda: {searchQuery}</span>
                  <X className="size-3.5" />
                </button>
              )}

              {selectedBrands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => toggleBrand(brand)}
                  title={`Quitar marca ${brand}`}
                >
                  <span>{brand}</span>
                  <X className="size-3.5" />
                </button>
              ))}

              {onlyAvailable && (
                <button
                  type="button"
                  onClick={() => handleStockToggle(false)}
                  title="Quitar filtro de disponibilidad"
                >
                  <span>Solo disponibles</span>
                  <X className="size-3.5" />
                </button>
              )}

              <button
                type="button"
                onClick={clearAllFilters}
                className="active-filters-clear"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Grilla de Productos o Estado Vacío */}
          <div>
            {!filteredProducts.length ? (
              <div className="catalog-empty">
                <div className="catalog-empty-icon">
                  <Search className="size-6 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    No encontramos esa combinación.
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Probá otra búsqueda o quitá algún filtro para explorar más opciones del catálogo.
                  </p>
                </div>

                {emptySuggestions.length > 0 && (
                  <div className="empty-suggestions">
                    <span className="empty-suggestions-label">
                      También podés explorar
                    </span>
                    <div className="empty-suggestions-list">
                      {emptySuggestions.map((suggestion) => (
                        <button
                          key={suggestion.slug}
                          type="button"
                          onClick={() => {
                            clearAllFilters();
                            handleCategoryChange(suggestion.slug);
                          }}
                          className="empty-suggestion"
                        >
                          <span>{suggestion.name}</span>
                          <ArrowRight className="size-3.5 text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 active:scale-98"
                >
                  Ver todos los productos <ArrowRight className="size-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {paginatedProducts.map((product: Product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            )}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <nav className="pagination" aria-label="Páginas de productos">
              <button
                type="button"
                aria-label="Página anterior"
                disabled={safePage === 1}
                onClick={() => goToPage(safePage - 1)}
              >
                <ChevronLeft className="size-4" />
              </button>

              {pageNumbers.map((number, i) => (
                <span className="pagination-part" key={number}>
                  {i > 0 && number - pageNumbers[i - 1] > 1 && (
                    <span aria-hidden="true" className="pagination-ellipsis">
                      …
                    </span>
                  )}
                  <button
                    type="button"
                    aria-current={safePage === number ? "page" : undefined}
                    aria-label={`Página ${number}`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </button>
                </span>
              ))}

              <button
                type="button"
                aria-label="Página siguiente"
                disabled={safePage === totalPages}
                onClick={() => goToPage(safePage + 1)}
              >
                <ChevronRight className="size-4" />
              </button>
            </nav>
          )}
        </div>
      </div>

      {/* Drawer / Sheet Móvil de Filtros */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop con desenfoque suave */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel deslizante desde la izquierda */}
          <div className="fixed inset-y-0 left-0 z-50 w-[min(88vw,360px)] bg-surface p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h2 className="text-base font-bold text-foreground">
                    Filtrar productos
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Encontrá lo que estás buscando.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
                  aria-label="Cerrar panel de filtros"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="py-4">{filterControls}</div>
            </div>

            <div className="pt-4 border-t border-border mt-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Ver {filteredProducts.length} productos
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
