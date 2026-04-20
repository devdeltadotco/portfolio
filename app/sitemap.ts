import type { MetadataRoute } from "next";

import { portfolioProjects } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: absoluteUrl("/about"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.85,
      url: absoluteUrl("/work"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.85,
      url: absoluteUrl("/projects"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: absoluteUrl("/projects/all"),
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.8,
      url: absoluteUrl("/pricing"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.7,
      url: absoluteUrl("/contact-us"),
    },
    {
      changeFrequency: "yearly",
      lastModified,
      priority: 0.35,
      url: absoluteUrl("/terms"),
    },
    {
      changeFrequency: "yearly",
      lastModified,
      priority: 0.35,
      url: absoluteUrl("/privacy"),
    },
    {
      changeFrequency: "yearly",
      lastModified,
      priority: 0.35,
      url: absoluteUrl("/cookies"),
    },
    ...portfolioProjects.map((project) => ({
      changeFrequency: "monthly" as const,
      lastModified,
      priority: 0.75,
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
  ];
}
