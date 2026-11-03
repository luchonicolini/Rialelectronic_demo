import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { buttonStyles } from "@/components/ui/button";

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
        <h1 className="max-w-2xl text-h1 font-semibold tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <Link
          href="/"
          className={`mt-8 ${buttonStyles("secondary")}`}
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
}
