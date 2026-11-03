import { MOCK_BRANDS } from "@/data/mock-catalog";

export function BrandTicker() {
  return (
    <div className="border-b border-border bg-surface py-5 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-1">
          <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground border-r border-border pr-6">
            Marcas oficiales
          </span>
          <div className="flex items-center gap-8 sm:gap-12 shrink-0">
            {MOCK_BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold tracking-wide text-foreground/75 hover:text-foreground transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
