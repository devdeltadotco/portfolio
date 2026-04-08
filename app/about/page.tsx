import type { Metadata } from "next";

import { CardsSection } from "@/components/site/cards-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { aboutPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "About | DevDelta",
  description:
    "Learn how DevDelta works, how the team runs product sprints, and what founders can expect from an MVP engagement.",
};

export default function AboutPage() {
  return (
    <SiteChrome ctaContent={aboutPage.ctaBanner}>
      <PageHero content={aboutPage.hero} />
      <CardsSection cards={aboutPage.cards} intro={aboutPage.cardsIntro} />
      <SpotlightSection content={aboutPage.spotlight} />
    </SiteChrome>
  );
}
