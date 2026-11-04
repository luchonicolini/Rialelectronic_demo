import { InfoPageLayout } from "@/components/layout/info-page-layout";
import { infoMetadata } from "@/lib/info-pages";

export const metadata = infoMetadata("terminos");

export default function TerminosPage() {
  return <InfoPageLayout currentKey="terminos" />;
}
