import type { FeatureIntroContent } from "@/content/site";

import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type FeatureIntroProps = {
  content: FeatureIntroContent;
};

export function FeatureIntro({ content }: FeatureIntroProps) {
  return (
    <Section id="about">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <Reveal>
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            titleClassName="max-w-[12ch]"
          />
        </Reveal>
        <Reveal className="lg:pt-16" delay={0.1}>
          <p className="max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
            {content.description}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
