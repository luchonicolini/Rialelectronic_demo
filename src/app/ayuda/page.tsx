import Link from "next/link";
import { Truck, ShieldCheck, FileText, Lock, ArrowRight } from "lucide-react";
import { InfoPageLayout } from "@/components/layout/info-page-layout";
import { FaqSection } from "@/components/home/faq-section";
import { infoMetadata } from "@/lib/info-pages";

export const metadata = infoMetadata("ayuda");

const quickLinks = [
  {
    href: "/envios",
    title: "Envíos y retiros",
    description: "Despachos asegurados con Vía Cargo, Andreani y Correo Argentino, o retiro coordinado en persona.",
    icon: Truck,
  },
  {
    href: "/cambios",
    title: "Garantía y cambios",
    description: "Cobertura escrita, equipos nuevos sellados o swap verificado, y cambio directo en 7 días.",
    icon: ShieldCheck,
  },
  {
    href: "/terminos",
    title: "Términos y condiciones",
    description: "Mecanismo de cotizaciones de referencia, lista de consulta y acuerdos comerciales.",
    icon: FileText,
  },
  {
    href: "/privacidad",
    title: "Política de privacidad",
    description: "Transparencia de datos, almacenamiento local seguro y control total en WhatsApp.",
    icon: Lock,
  },
];

export default function AyudaPage() {
  return (
    <InfoPageLayout currentKey="ayuda">
      {/* Accesos rápidos a otras secciones informativas */}
      <div className="pt-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          Guías y políticas complementarias
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-card border border-border bg-surface p-5 transition-all hover:border-black/30 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-control bg-[var(--elevated)] text-[var(--accent)]">
                    <item.icon className="size-4" />
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes integradas */}
      <div className="pt-8 border-t border-border">
        <FaqSection className="border-none py-4 sm:py-6 !bg-transparent" />
      </div>
    </InfoPageLayout>
  );
}
