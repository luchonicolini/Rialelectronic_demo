import { InfoPageLayout } from "@/components/layout/info-page-layout";
import { infoMetadata } from "@/lib/info-pages";

export const metadata = infoMetadata("privacidad");

export default function PrivacidadPage() {
  return <InfoPageLayout currentKey="privacidad" />;
}
