import type { Metadata } from "next";

type PageMetadataInput = {
  description: string;
  keywords?: string[];
  path: string;
  title: string;
};

export const siteConfig = {
  contact: {
    email: "karthik@devdelta.co",
    phone: "+91-949-345-4298",
  },
  description:
    "DevDelta is an AI-assisted MVP development studio for founders who need strategy, design, engineering, and QA aligned around a fast first launch.",
  locale: "en_US",
  name: "DevDelta",
  ogImage: "/opengraph-image",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devdelta.co",
  tagline: "Launch your MVP in 100 hours",
};

export const defaultKeywords = [
  "MVP development studio",
  "startup MVP development",
  "AI product development",
  "product studio for founders",
  "rapid MVP launch",
  "startup product design and development",
];

export const siteOgImage = {
  alt: `${siteConfig.name} | ${siteConfig.tagline}`,
  height: 630,
  url: absoluteUrl(siteConfig.ogImage),
  width: 1200,
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildPageMetadata({
  description,
  keywords = [],
  path,
  title,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    alternates: {
      canonical: absoluteUrl(path),
    },
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    openGraph: {
      description,
      images: [siteOgImage],
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      type: "website",
      url: absoluteUrl(path),
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [siteOgImage.url],
      title: fullTitle,
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
