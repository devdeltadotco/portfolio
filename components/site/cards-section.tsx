import type { FeatureCard, SectionIntro } from "@/content/pages";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type CardsSectionProps = {
  cards: FeatureCard[];
  intro: SectionIntro;
};

export function CardsSection({ cards, intro }: CardsSectionProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Heading
            description={intro.description}
            eyebrow={intro.eyebrow}
            title={intro.title}
            titleClassName="max-w-[12ch]"
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal delay={0.08 * index} key={card.title}>
              <InteractiveCard className="h-full">
                <Card className="h-full p-6 sm:p-7">
                  {card.eyebrow ? (
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {card.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-4 max-w-[14ch] font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {card.description}
                  </p>
                </Card>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
