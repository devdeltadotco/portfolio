import type { LegalPageContent } from "@/content/legal";

import { PageHero } from "@/components/site/page-hero";
import { SiteChrome } from "@/components/site/site-chrome";
import { SpotlightSection } from "@/components/site/spotlight-section";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type LegalDocumentPageProps = {
  content: LegalPageContent;
};

export function LegalDocumentPage({ content }: LegalDocumentPageProps) {
  return (
    <SiteChrome ctaContent={content.ctaBanner}>
      <PageHero content={content.hero} />
      <Section>
        <Container>
          <div className="grid gap-5">
            {content.sections.map((section, index) => (
              <Reveal delay={0.05 * index} key={section.title}>
                <InteractiveCard>
                  <Card className="p-6 sm:p-7 lg:p-8">
                    <h2 className="max-w-[18ch] font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.body.map((paragraph) => (
                        <p
                          className="max-w-4xl text-sm leading-7 text-muted sm:text-base"
                          key={paragraph}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </Card>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <SpotlightSection content={content.spotlight} />
    </SiteChrome>
  );
}
