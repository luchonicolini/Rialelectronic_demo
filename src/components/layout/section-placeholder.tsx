import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

type SectionPlaceholderProps = {
  title: string;
  description: string;
};

export function SectionPlaceholder({
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <>
      <SiteHeader />
      <main
        id="contenido"
        className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 xl:px-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Sección en preparación
        </p>
        <h1 className="mt-3 max-w-2xl text-h1 font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center rounded-control border border-border px-4 text-sm font-medium text-foreground transition-colors duration-[var(--duration-feedback)] hover:bg-elevated"
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
}
