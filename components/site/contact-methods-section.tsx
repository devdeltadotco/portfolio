import type { ContactMethod, SectionIntro } from "@/content/pages";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type ContactMethodsSectionProps = {
  intro: SectionIntro;
  methods: ContactMethod[];
};

export function ContactMethodsSection({
  intro,
  methods,
}: ContactMethodsSectionProps) {
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
          {methods.map((method, index) => (
            <Reveal delay={0.08 * index} key={method.title}>
              <InteractiveCard className="h-full">
                <Card className="flex h-full flex-col p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {method.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-[14ch] font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                    {method.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-base">
                    {method.description}
                  </p>
                  <div className="mt-8">
                    <Button
                      emoji={method.cta.emoji}
                      hoverEmoji={method.cta.hoverEmoji}
                      href={method.cta.href}
                      variant="secondary"
                    >
                      {method.cta.label}
                    </Button>
                  </div>
                </Card>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
