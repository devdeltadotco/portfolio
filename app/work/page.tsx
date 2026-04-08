import type { Metadata } from "next";

import { CardsSection } from "@/components/site/cards-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { workPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Work | DevDelta",
  description:
    "See the kinds of products DevDelta helps teams launch and the delivery model behind our MVP work.",
};

export default function WorkPage() {
  return (
    <SiteChrome ctaContent={workPage.ctaBanner}>
      <PageHero content={workPage.hero} />
      <CardsSection cards={workPage.cards} intro={workPage.cardsIntro} />
      <SpotlightSection content={workPage.spotlight} />
    </SiteChrome>
  );
}
