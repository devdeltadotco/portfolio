import type { CtaBannerContent } from "@/content/site";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type CtaBannerProps = {
  content: CtaBannerContent;
};

export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <Section className="pt-4">
      <Container>
        <Reveal>
          <InteractiveCard>
            <Card
              className="overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-9"
              tone="dark"
            >
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/18 blur-3xl" />
                <h2 className="relative max-w-[12ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-contrast-foreground sm:text-5xl lg:text-6xl">
                  {content.title}
                </h2>
                <Button
                  className="relative self-start"
                  emoji={content.cta.emoji}
                  href={content.cta.href}
                  hoverEmoji={content.cta.hoverEmoji}
                  variant="secondary"
                >
                  {content.cta.label}
                </Button>
              </div>
            </Card>
          </InteractiveCard>
        </Reveal>
      </Container>
    </Section>
  );
}
