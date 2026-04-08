import type { SpotlightContent } from "@/content/pages";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type SpotlightSectionProps = {
  content: SpotlightContent;
};

export function SpotlightSection({ content }: SpotlightSectionProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Card className="overflow-hidden p-6 sm:p-8 lg:p-10" tone="dark">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {content.eyebrow}
                </p>
                <h2 className="max-w-[12ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-contrast-foreground sm:text-5xl">
                  {content.title}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-contrast-foreground/72 sm:text-base">
                  {content.description}
                </p>
              </div>
              <ul className="grid gap-4">
                {content.items.map((item) => (
                  <li
                    className="rounded-[24px] border border-contrast-foreground/10 bg-contrast-foreground/6 px-5 py-4 text-sm leading-7 text-contrast-foreground/86 sm:text-base"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
