import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { ProjectsGridSection } from "@/components/site/projects-grid-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { allProjectsPage } from "@/content/pages";
import { getPortfolioKeywords, portfolioProjects } from "@/content/projects";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildProjectsCollectionJsonLd,
  serializeProjectJsonLd,
} from "@/lib/project-seo";

export const metadata = buildPageMetadata({
  description:
    "Browse the full DevDelta project archive across AI products, enterprise platforms, OTT experiences, civic tools, and internal operations systems.",
  keywords: [
    "software project archive",
    "product portfolio",
    "enterprise and startup case studies",
    ...getPortfolioKeywords(portfolioProjects),
  ],
  path: "/projects/all",
  title: "All Projects",
}) satisfies Metadata;

export default function AllProjectsPage() {
  const projectsJsonLd = buildProjectsCollectionJsonLd({
    description:
      "The full DevDelta project archive across content systems, AI products, enterprise modernization, OTT platforms, and internal operations software.",
    path: "/projects/all",
    projects: portfolioProjects,
    title: "All DevDelta Projects",
  });

  return (
    <SiteChrome ctaContent={allProjectsPage.ctaBanner}>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeProjectJsonLd(projectsJsonLd),
        }}
        type="application/ld+json"
      />
      <PageHero content={allProjectsPage.hero} />
      <ProjectsGridSection
        intro={allProjectsPage.projectsIntro}
        projects={portfolioProjects}
      />
    </SiteChrome>
  );
}
