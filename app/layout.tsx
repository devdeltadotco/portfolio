import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import {
  absoluteUrl,
  defaultKeywords,
  serializeJsonLd,
  siteConfig,
  siteOgImage,
} from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  applicationName: siteConfig.name,
  category: "technology",
  creator: siteConfig.name,
  description: siteConfig.description,
  keywords: defaultKeywords,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    description: siteConfig.description,
    images: [siteOgImage],
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    type: "website",
    url: siteConfig.siteUrl,
  },
  publisher: siteConfig.name,
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: [siteOgImage.url],
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": absoluteUrl("/#organization"),
      "@type": "Organization",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.phone,
          url: absoluteUrl("/contact-us"),
        },
      ],
      description: siteConfig.description,
      email: siteConfig.contact.email,
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      url: siteConfig.siteUrl,
    },
    {
      "@id": absoluteUrl("/#website"),
      "@type": "WebSite",
      description: siteConfig.description,
      inLanguage: "en",
      name: siteConfig.name,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      url: siteConfig.siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full bg-background antialiased`}
      lang="en"
    >
      <body className="min-h-full bg-background text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(siteJsonLd),
          }}
          type="application/ld+json"
        />
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4SNFT76Z95"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4SNFT76Z95');
        `}
      </Script>
    </html>
  );
}
