import type { Metadata } from "next";

import { FaqSection } from "@/components/landing/faq-section";
import { PageHero } from "@/components/site/page-hero";
import { PricingPlansSection } from "@/components/site/pricing-plans-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { pricingPage } from "@/content/pages";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing | DevDelta",
  description:
    "Review DevDelta's pricing approach, common engagement models, and what is included in a launch-focused MVP sprint.",
};

export default function PricingPage() {
  return (
    <SiteChrome ctaContent={pricingPage.ctaBanner}>
      <PageHero content={pricingPage.hero} />
      <PricingPlansSection
        intro={pricingPage.plansIntro}
        plans={pricingPage.plans}
      />
      <SpotlightSection content={pricingPage.spotlight} />
      <FaqSection content={siteContent.faq} />
    </SiteChrome>
  );
}
