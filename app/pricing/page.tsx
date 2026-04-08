import type { Metadata } from "next";

import { FaqSection } from "@/components/landing/faq-section";
import { PageHero } from "@/components/site/page-hero";
import { PricingPlansSection } from "@/components/site/pricing-plans-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { pricingPage } from "@/content/pages";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Review pricing for DevDelta's MVP development services, discovery sprints, and launch-focused product builds.",
  keywords: [
    "MVP development pricing",
    "startup MVP cost",
    "product discovery sprint pricing",
  ],
  path: "/pricing",
  title: "Pricing",
}) satisfies Metadata;

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
