import { FeatureIntro } from "@/components/landing/feature-intro";
import { FaqSection } from "@/components/landing/faq-section";
import { Hero } from "@/components/landing/hero";
import { VideoHighlight } from "@/components/landing/video-highlight";
import { SiteChrome } from "@/components/site/site-chrome";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <SiteChrome>
      <Hero content={siteContent.hero} />
      <FeatureIntro content={siteContent.featureIntro} />
      <VideoHighlight content={siteContent.videoHighlight} />
      <FaqSection content={siteContent.faq} />
    </SiteChrome>
  );
}
