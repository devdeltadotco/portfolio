import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { ProjectCaseStudiesSection } from "@/components/site/project-case-studies-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { projectsPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "See MVP development case studies and launch-ready product builds delivered by DevDelta for founders and internal teams.",
  keywords: [
    "MVP case studies",
    "startup product portfolio",
    "AI product development examples",
  ],
  path: "/projects",
  title: "Projects",
}) satisfies Metadata;

export default function ProjectsPage() {
  return (
    <SiteChrome ctaContent={projectsPage.ctaBanner}>
      <PageHero content={projectsPage.hero} />
      <ProjectCaseStudiesSection
        intro={projectsPage.projectsIntro}
        projects={projectsPage.projects}
      />
      <SpotlightSection content={projectsPage.spotlight} />
    </SiteChrome>
  );
}
