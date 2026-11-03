import { Search, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Elegí tu equipo",
    description:
      "Explorá nuestro catálogo de tecnología original. Elegí la marca, modelo, capacidad y color que mejor se adapte a lo que buscás.",
    icon: Search,
  },
  {
    number: "02",
    title: "Cotizá y congelá por WhatsApp",
    description:
      "Escribinos directamente. Te pasamos fotos reales del equipo en stock y congelamos la cotización en dólares, pesos o USDT al instante.",
    icon: MessageSquareQuote,
  },
  {
    number: "03",
    title: "Retirá o recibí con total seguridad",
    description:
      "Coordinamos el despacho asegurado a tu domicilio a través de Andreani o Correo Argentino, o retiro presencial en punto acordado.",
    icon: ShieldCheck,
  },
];

export function HowItWorks() {
  return (
    <section id="como-comprar" className="py-14 sm:py-20 border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            Transparencia total
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            ¿Cómo comprar en Rial Electrónica?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Un proceso directo y seguro, sin intermediarios ni letra chica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col rounded-2xl border border-border bg-surface p-7 relative transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tighter text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl("¡Hola Rial Electrónica! Quiero consultar cómo es el proceso de compra para un equipo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-opacity"
          >
            Hablar con un asesor ahora
          </a>
        </div>
      </div>
    </section>
  );
}
