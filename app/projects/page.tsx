import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { ProjectCaseStudiesSection } from "@/components/site/project-case-studies-section";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { featuredProjects, getPortfolioKeywords } from "@/content/projects";
import { projectsPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildProjectsCollectionJsonLd,
  serializeProjectJsonLd,
} from "@/lib/project-seo";

export const metadata = buildPageMetadata({
  description:
    "See MVP development case studies and launch-ready product builds delivered by DevDelta for founders and internal teams.",
  keywords: [
    "MVP case studies",
    "startup product portfolio",
    "AI product development examples",
    ...getPortfolioKeywords(featuredProjects),
  ],
  path: "/projects",
  title: "Projects",
}) satisfies Metadata;

export default function ProjectsPage() {
  const projectsJsonLd = buildProjectsCollectionJsonLd({
    description:
      "Featured DevDelta case studies across AI products, internal tools, civic workflows, and enterprise software delivery.",
    path: "/projects",
    projects: featuredProjects,
    title: "Featured DevDelta Projects",
  });

  return (
    <SiteChrome ctaContent={projectsPage.ctaBanner}>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeProjectJsonLd(projectsJsonLd),
        }}
        type="application/ld+json"
      />
      <PageHero content={projectsPage.hero} />
      <ProjectCaseStudiesSection
        intro={projectsPage.projectsIntro}
        projects={featuredProjects}
      />
      <SpotlightSection content={projectsPage.spotlight} />
    </SiteChrome>
  );
}
