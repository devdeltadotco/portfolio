import type { Metadata } from "next";

import { CardsSection } from "@/components/site/cards-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { workPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "See the startup MVPs, internal tools, and AI workflow products DevDelta builds for fast-moving teams.",
  keywords: [
    "MVP development services",
    "AI workflow product development",
    "startup product build services",
  ],
  path: "/work",
  title: "Work",
}) satisfies Metadata;

export default function WorkPage() {
  return (
    <SiteChrome ctaContent={workPage.ctaBanner}>
      <PageHero content={workPage.hero} />
      <CardsSection cards={workPage.cards} intro={workPage.cardsIntro} />
      <SpotlightSection content={workPage.spotlight} />
    </SiteChrome>
  );
}
