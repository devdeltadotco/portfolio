import type { Metadata } from "next";

import { ContactMethodsSection } from "@/components/site/contact-methods-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { contactPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Contact DevDelta about MVP development, product discovery, or a launch sprint for your startup or internal tool.",
  keywords: [
    "contact MVP development studio",
    "startup product consultation",
    "book MVP discovery call",
  ],
  path: "/contact-us",
  title: "Contact Us",
}) satisfies Metadata;

export default function ContactUsPage() {
  return (
    <SiteChrome ctaContent={contactPage.ctaBanner}>
      <PageHero content={contactPage.hero} />
      <ContactMethodsSection
        intro={contactPage.methodsIntro}
        methods={contactPage.methods}
      />
      <SpotlightSection content={contactPage.spotlight} />
    </SiteChrome>
  );
}
