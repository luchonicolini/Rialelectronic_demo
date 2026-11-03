export type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-control px-6 text-sm font-medium transition-colors duration-[var(--duration-feedback)]";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-contrast hover:bg-accent/90",
  secondary: "border border-border text-foreground hover:bg-elevated",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className = "",
) {
  return `${base} ${variants[variant]} ${className}`.trim();
}
