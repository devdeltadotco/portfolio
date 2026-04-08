import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { ProjectCaseStudiesSection } from "@/components/site/project-case-studies-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { projectsPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Projects | DevDelta",
  description:
    "Review selected DevDelta case studies and see how the team turns rough product scope into launch-ready software.",
};

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
