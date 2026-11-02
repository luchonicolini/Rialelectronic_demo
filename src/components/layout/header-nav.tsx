import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";

type HeaderNavProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function HeaderNav({
  className,
  orientation = "horizontal",
  onNavigate,
}: HeaderNavProps) {
  const isVertical = orientation === "vertical";

  return (
    <nav aria-label="Navegación principal" className={className}>
      <ul className={isVertical ? "flex flex-col" : "flex items-center gap-7"}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={
                isVertical
                  ? "block border-b border-border py-3 text-base font-medium text-foreground transition-colors duration-[var(--duration-feedback)] hover:text-accent"
                  : "text-sm font-medium text-muted-foreground transition-colors duration-[var(--duration-feedback)] hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
