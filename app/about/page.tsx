import type { Metadata } from "next";

import { CardsSection } from "@/components/site/cards-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { aboutPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Learn how DevDelta works as an AI-assisted MVP development studio for founders who need strategy, design, and engineering in one sprint.",
  keywords: [
    "about DevDelta",
    "MVP development team",
    "startup product studio process",
  ],
  path: "/about",
  title: "About",
}) satisfies Metadata;

export default function AboutPage() {
  return (
    <SiteChrome ctaContent={aboutPage.ctaBanner}>
      <PageHero content={aboutPage.hero} />
      <CardsSection cards={aboutPage.cards} intro={aboutPage.cardsIntro} />
      <SpotlightSection content={aboutPage.spotlight} />
    </SiteChrome>
  );
}
