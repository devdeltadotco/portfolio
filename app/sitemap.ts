import type { MetadataRoute } from "next";

import { projectsPage } from "@/content/pages";
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
      images: projectsPage.projects.map((project) => project.imageSrc),
      lastModified,
      priority: 0.85,
      url: absoluteUrl("/projects"),
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
  ];
}
