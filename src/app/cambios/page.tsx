import { InfoPageLayout } from "@/components/layout/info-page-layout";
import { infoMetadata } from "@/lib/info-pages";

export const metadata = infoMetadata("cambios");

export default function CambiosPage() {
  return <InfoPageLayout currentKey="cambios" />;
}
