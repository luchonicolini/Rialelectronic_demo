import { InfoPageLayout } from "@/components/layout/info-page-layout";
import { infoMetadata } from "@/lib/info-pages";

export const metadata = infoMetadata("envios");

export default function EnviosPage() {
  return <InfoPageLayout currentKey="envios" />;
}
