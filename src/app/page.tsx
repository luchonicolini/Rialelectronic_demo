import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="contenido"
        className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] flex-col px-4 sm:px-6 lg:min-h-[calc(100dvh-5rem)] lg:px-10 xl:px-14"
      >
        <section className="flex flex-1 flex-col justify-center py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Demo no oficial
          </p>
          <h1 className="mt-3 max-w-2xl text-h1 font-semibold tracking-tight">
            Base lista
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Header implementado con navegación, búsqueda, lista de consulta,
            tema claro/oscuro/sistema y acceso a WhatsApp. El hero se define en
            la próxima etapa.
          </p>
        </section>
      </main>
    </>
  );
}
