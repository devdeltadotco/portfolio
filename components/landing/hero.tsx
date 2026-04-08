import type { HeroContent } from "@/content/site";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <Section className="pt-8 sm:pt-10 lg:pt-12" id="home">
      <Container className="page-grid rounded-[40px] py-6 sm:py-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-10">
          <Reveal className="space-y-6">
            <Badge>
              <span className="h-2 w-2 rounded-full bg-accent" />
              {content.badge}
            </Badge>
            <div className="space-y-5">
              <h1 className="max-w-[10ch] text-balance font-display text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                emoji={content.primaryCta.emoji}
                hoverEmoji={content.primaryCta.hoverEmoji}
                href={content.primaryCta.href}
              >
                {content.primaryCta.label}
              </Button>
              <Button
                emoji={content.secondaryCta.emoji}
                hoverEmoji={content.secondaryCta.hoverEmoji}
                href={content.secondaryCta.href}
                variant="secondary"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
            <p className="text-sm font-medium text-muted">
              {content.supportingNote}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <InteractiveCard className="group">
              <Card
                className="relative overflow-hidden p-6 sm:p-7 lg:p-8"
                tone="dark"
              >
                <div className="absolute -left-16 bottom-6 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/18 blur-3xl" />
                <div className="relative flex min-h-[420px] flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {content.guaranteeEyebrow}
                    </p>
                    <h2 className="max-w-[12ch] whitespace-pre-line font-display text-4xl font-semibold tracking-[-0.05em] text-contrast-foreground sm:text-[2.75rem]">
                      {content.guaranteeTitle}
                    </h2>
                    <p className="max-w-sm text-sm leading-7 text-contrast-foreground/72">
                      {content.guaranteeDescription}
                    </p>
                  </div>
                  <div className="mt-10 flex items-end gap-3 sm:gap-4">
                    {content.timelineBars.map((bar) => (
                      <div
                        className="flex flex-1 flex-col items-center gap-3"
                        key={bar.label}
                      >
                        <div className="flex h-48 w-full items-end rounded-[22px] bg-contrast-foreground/6 p-2">
                          <span
                            className="block w-full rounded-[18px] bg-gradient-to-b from-background via-accent to-contrast shadow-[0_12px_28px_rgba(17,17,17,0.2)] transition duration-500 group-hover:-translate-y-1"
                            style={{ height: bar.height }}
                          />
                        </div>
                        <span className="text-xs uppercase tracking-[0.18em] text-contrast-foreground/58">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </InteractiveCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
