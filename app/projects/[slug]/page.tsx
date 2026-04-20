import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/site/project-detail-page";
import { SiteChrome } from "@/components/site/site-chrome";
import {
  getProjectBySlug,
  getProjectKeywords,
  getProjectMetaDescription,
  portfolioProjects,
  type PortfolioProject,
} from "@/content/projects";
import { buildProjectJsonLd, serializeProjectJsonLd } from "@/lib/project-seo";
import { absoluteUrl } from "@/lib/seo";

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

function getRelatedProjects(currentProject: PortfolioProject) {
  const currentIndex = portfolioProjects.findIndex(
    (project) => project.slug === currentProject.slug,
  );

  if (currentIndex === -1) {
    return portfolioProjects.slice(0, 3);
  }

  return Array.from(
    { length: Math.min(3, portfolioProjects.length - 1) },
    (_, index) => {
      const nextIndex = (currentIndex + index + 1) % portfolioProjects.length;
      return portfolioProjects[nextIndex];
    },
  );
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.client} | Projects`;
  const description = getProjectMetaDescription(project);
  const path = `/projects/${project.slug}`;

  return {
    alternates: {
      canonical: absoluteUrl(path),
    },
    description,
    keywords: getProjectKeywords(project),
    openGraph: {
      description,
      siteName: "DevDelta",
      title: `${title} | DevDelta`,
      type: "article",
      url: absoluteUrl(path),
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      title: `${title} | DevDelta`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = buildProjectJsonLd(project);

  return (
    <SiteChrome showCta={false}>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeProjectJsonLd(projectJsonLd),
        }}
        type="application/ld+json"
      />
      <ProjectDetailPage
        project={project}
        relatedProjects={getRelatedProjects(project)}
      />
    </SiteChrome>
  );
}
