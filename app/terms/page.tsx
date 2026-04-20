import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/site/legal-document-page";
import { termsPage } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Read the DevDelta website terms covering site usage, intellectual property, inquiries, and general commercial expectations.",
  keywords: [
    "DevDelta terms",
    "website terms",
    "software studio terms and conditions",
  ],
  path: "/terms",
  title: "Terms",
}) satisfies Metadata;

export default function TermsPage() {
  return <LegalDocumentPage content={termsPage} />;
}
