import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";

import { FeatureIntro } from "@/components/landing/feature-intro";
import { FaqSection } from "@/components/landing/faq-section";
import { Hero } from "@/components/landing/hero";
import { VideoHighlight } from "@/components/landing/video-highlight";
import { SiteChrome } from "@/components/site/site-chrome";
import { siteContent } from "@/content/site";

export const metadata = buildPageMetadata({
  description:
    "Launch a startup MVP with DevDelta's AI-assisted product studio for founders who need fast strategy, design, engineering, and QA in one sprint.",
  keywords: [
    "AI-assisted MVP development",
    "founder MVP sprint",
    "startup product studio",
  ],
  path: "/",
  title: "Launch your MVP in 100 hours",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": absoluteUrl("/#service"),
      "@type": "Service",
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "Founders and startup teams",
      },
      description:
        "AI-assisted MVP development that brings product strategy, design, engineering, and QA into one fast launch sprint.",
      name: "AI-assisted MVP development sprint",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      serviceType: "MVP development",
      url: absoluteUrl("/"),
    },
    {
      "@id": absoluteUrl("/#faq"),
      "@type": "FAQPage",
      mainEntity: siteContent.faq.items.map((item) => ({
        "@type": "Question",
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
        name: item.question,
      })),
    },
  ],
};

export default function Home() {
  return (
    <SiteChrome>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(homeJsonLd),
        }}
        type="application/ld+json"
      />
      <Hero content={siteContent.hero} />
      <FeatureIntro content={siteContent.featureIntro} />
      <VideoHighlight content={siteContent.videoHighlight} />
      <FaqSection content={siteContent.faq} />
    </SiteChrome>
  );
}
