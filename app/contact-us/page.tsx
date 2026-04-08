import type { Metadata } from "next";

import { ContactMethodsSection } from "@/components/site/contact-methods-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { contactPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Contact Us | DevDelta",
  description:
    "Contact DevDelta to discuss your MVP, launch constraints, and the fastest route to a credible first release.",
};

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
