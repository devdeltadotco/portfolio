import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/site/legal-document-page";
import { privacyPage } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Read how DevDelta handles inquiry data, analytics information, and operational privacy practices for this website.",
  keywords: [
    "DevDelta privacy policy",
    "website privacy",
    "software studio privacy policy",
  ],
  path: "/privacy",
  title: "Privacy",
}) satisfies Metadata;

export default function PrivacyPage() {
  return <LegalDocumentPage content={privacyPage} />;
}
