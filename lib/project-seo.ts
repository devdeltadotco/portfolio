import type { PortfolioProject } from "@/content/projects";

import {
  getProjectKeywords,
  getProjectMetaDescription,
} from "@/content/projects";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/seo";

export function buildProjectsCollectionJsonLd({
  description,
  path,
  projects,
  title,
}: {
  description: string;
  path: string;
  projects: PortfolioProject[];
  title: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": absoluteUrl(`${path}#collection`),
        "@type": "CollectionPage",
        description,
        name: title,
        url: absoluteUrl(path),
      },
      {
        "@id": absoluteUrl(`${path}#itemlist`),
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          name: project.client,
          position: index + 1,
          url: absoluteUrl(`/projects/${project.slug}`),
        })),
        name: `${title} project list`,
      },
    ],
  };
}

export function buildProjectJsonLd(project: PortfolioProject) {
  const path = `/projects/${project.slug}`;
  const description = getProjectMetaDescription(project);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": absoluteUrl(`${path}#case-study`),
        "@type": "CreativeWork",
        about: [
          project.category,
          ...project.visual.tags,
          ...project.services,
          ...project.stack,
        ],
        creator: {
          "@id": absoluteUrl("/#organization"),
        },
        description,
        genre: project.category,
        headline: `${project.client} case study`,
        keywords: getProjectKeywords(project).join(", "),
        name: project.client,
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        url: absoluteUrl(path),
      },
      {
        "@id": absoluteUrl(`${path}#breadcrumb`),
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            item: absoluteUrl("/"),
            name: siteConfig.name,
            position: 1,
          },
          {
            "@type": "ListItem",
            item: absoluteUrl("/projects"),
            name: "Projects",
            position: 2,
          },
          {
            "@type": "ListItem",
            item: absoluteUrl(path),
            name: project.client,
            position: 3,
          },
        ],
      },
    ],
  };
}

export function serializeProjectJsonLd(data: unknown) {
  return serializeJsonLd(data);
}
