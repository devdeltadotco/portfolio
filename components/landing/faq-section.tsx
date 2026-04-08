import type { FaqContent } from "@/content/site";

import { FaqAccordion } from "@/components/landing/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type FaqSectionProps = {
  content: FaqContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="space-y-6">
                <Heading
                  description={content.description}
                  title={content.title}
                  titleClassName="max-w-[9ch] text-3xl sm:text-4xl"
                />
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button
                    emoji={content.primaryCta.emoji}
                    hoverEmoji={content.primaryCta.hoverEmoji}
                    href={content.primaryCta.href}
                    variant="secondary"
                  >
                    {content.primaryCta.label}
                  </Button>
                  <Button
                    emoji={content.secondaryCta.emoji}
                    hoverEmoji={content.secondaryCta.hoverEmoji}
                    href={content.secondaryCta.href}
                    variant="ghost"
                  >
                    {content.secondaryCta.label}
                  </Button>
                </div>
              </div>
              <FaqAccordion items={content.items} />
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
