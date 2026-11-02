import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-4 sm:px-6 lg:px-10">
      <header className="flex h-16 items-center justify-between border-b border-border sm:h-20">
        <p className="text-sm font-medium tracking-tight">
          Rial Electrónica · Base Fase 0
        </p>
        <ThemeToggle />
      </header>

      <section className="flex flex-1 flex-col justify-center py-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Demo no oficial
        </p>
        <h1 className="mt-3 max-w-2xl text-h1 font-semibold tracking-tight">
          Base inicializada
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Tokens semánticos y tema claro, oscuro y sistema listos. El header y el
          hero se implementan después de aprobar la dirección visual.
        </p>
      </section>
    </main>
  );
}
