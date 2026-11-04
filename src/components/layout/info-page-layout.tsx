import React from "react";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  HelpCircle,
  FileText,
  Lock,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/home/whatsapp-float";
import { infoPages, type InfoPageKey } from "@/lib/info-pages";
import { whatsappUrl } from "@/lib/site";

interface InfoPageLayoutProps {
  currentKey: InfoPageKey;
  children?: React.ReactNode;
}

const navLinks = [
  { key: "ayuda" as const, href: "/ayuda", label: "Centro de ayuda", icon: HelpCircle },
  { key: "envios" as const, href: "/envios", label: "Envíos y retiros", icon: Truck },
  { key: "cambios" as const, href: "/cambios", label: "Garantía y cambios", icon: ShieldCheck },
  { key: "terminos" as const, href: "/terminos", label: "Términos y condiciones", icon: FileText },
  { key: "privacidad" as const, href: "/privacidad", label: "Política de privacidad", icon: Lock },
  { key: null, href: "/contacto", label: "Contacto directo", icon: Phone },
];

export function InfoPageLayout({ currentKey, children }: InfoPageLayoutProps) {
  const page = infoPages[currentKey];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
      <SiteHeader />

      <main id="contenido" className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1328px] px-4 sm:px-6 lg:px-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 sm:mb-8"
          >
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Inicio
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/50" />
            <Link
              href="/ayuda"
              className="hover:text-foreground transition-colors"
            >
              Información
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/50" />
            <span className="font-medium text-foreground">
              {page.title} {page.titleEmphasis}
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10 sm:mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--elevated)] text-[var(--accent)] border border-border mb-4">
              {page.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {page.title}{" "}
              <span className="font-serif italic font-normal tracking-normal text-foreground">
                {page.titleEmphasis}
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {page.intro}
            </p>
            {page.lastUpdated && (
              <p className="mt-2 text-xs font-mono text-muted-foreground/70">
                {page.lastUpdated}
              </p>
            )}
          </header>

          {/* Quick Mobile Navigation Pills */}
          <div className="lg:hidden mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none flex gap-2">
            {navLinks.map((item) => {
              const isActive = item.key === currentKey;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex shrink-0 items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                      : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:bg-[var(--elevated)]"
                  }`}
                >
                  <item.icon className="size-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Grid Layout: Desktop Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 items-start">
            {/* Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block sticky top-28 space-y-6">
              <div className="rounded-card border border-border bg-surface p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2 block font-mono">
                  Secciones de información
                </span>
                <nav className="space-y-1">
                  {navLinks.map((item) => {
                    const isActive = item.key === currentKey;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-control text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[var(--elevated)] text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
                        }`}
                      >
                        <item.icon className={`size-4 ${isActive ? "text-[var(--accent)]" : "text-muted-foreground"}`} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Support Card */}
              <div className="rounded-card border border-border bg-surface p-5 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--success)] flex items-center gap-1.5 font-mono">
                  <span className="size-2 rounded-full bg-[var(--success)] animate-pulse" />
                  Atención en vivo
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  ¿Precisás asistencia inmediata?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Respondemos tus consultas sobre modelos, cotizaciones o despachos directamente por WhatsApp.
                </p>
                <a
                  href={whatsappUrl(`¡Hola Rial Electrónica! Tengo una consulta sobre ${page.title} ${page.titleEmphasis}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-[var(--accent)] px-3 py-2.5 text-xs font-semibold text-[var(--accent-contrast)] hover:opacity-90 transition-opacity"
                >
                  <span>Consultar por WhatsApp</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </aside>

            {/* Main Content Area */}
            <article className="space-y-8 min-w-0">
              {/* Structured Sections */}
              <div className="space-y-6">
                {page.sections.map((section, idx) => (
                  <section
                    key={section.title}
                    className="rounded-card border border-border bg-surface p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono text-xs font-bold text-muted-foreground/60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {section.text}
                    </p>

                    {section.highlights && section.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-border/70 pt-4">
                        {section.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                          >
                            <CheckCircle2 className="size-4 shrink-0 text-[var(--success)] mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Extra Children / Custom Blocks */}
              {children}

              {/* Direct WhatsApp Callout Banner */}
              <div className="rounded-card border border-black/15 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    ¿Tenés alguna consulta puntual sobre este tema?
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    Hablás directamente con un asesor de Rial Electrónica. Sin bots ni demoras.
                  </p>
                </div>
                <a
                  href={whatsappUrl(`¡Hola Rial Electrónica! Quiero consultar sobre ${page.title} ${page.titleEmphasis}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-control bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] hover:opacity-90 transition-opacity"
                >
                  <span>Escribir por WhatsApp</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
