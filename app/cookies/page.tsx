import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/site/legal-document-page";
import { cookiesPage } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Read how cookies and similar technologies may be used on the DevDelta website for functionality, analytics, and performance.",
  keywords: ["DevDelta cookie policy", "website cookies", "cookie policy"],
  path: "/cookies",
  title: "Cookies",
}) satisfies Metadata;

export default function CookiesPage() {
  return <LegalDocumentPage content={cookiesPage} />;
}
