import type { PageHeroContent } from "@/content/pages";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  content: PageHeroContent;
};

export function PageHero({ content }: PageHeroProps) {
  const hasDetailedStats = content.stats.some((stat) => stat.description);

  return (
    <Section className="pt-8 sm:pt-10 lg:pt-12">
      <Container className="page-grid rounded-[40px] py-6 sm:py-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10">
          <Reveal className="space-y-6">
            <Badge>
              <span className="h-2 w-2 rounded-full bg-accent" />
              {content.eyebrow}
            </Badge>
            <div className="space-y-5">
              <h1 className="max-w-[11ch] text-balance font-display text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
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
          </Reveal>

          <Reveal delay={0.12}>
            <InteractiveCard>
              <Card className="overflow-hidden p-6 sm:p-7 lg:p-8" tone="dark">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {content.panelEyebrow}
                  </p>
                  <h2 className="max-w-[12ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-contrast-foreground sm:text-[2.6rem]">
                    {content.panelTitle}
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-contrast-foreground/72 sm:text-base">
                    {content.panelDescription}
                  </p>
                </div>
                {hasDetailedStats ? (
                  <div className="mt-8 space-y-3">
                    {content.stats.map((stat) => (
                      <div
                        className="rounded-[24px] border border-contrast-foreground/10 bg-contrast-foreground/6 px-4 py-4 sm:px-5"
                        key={stat.label}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-contrast-foreground/12 bg-contrast-foreground/6 text-xs font-semibold tracking-[0.16em] text-contrast-foreground/74">
                            {stat.label}
                          </div>
                          <div className="min-w-0">
                            <p className="font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-contrast-foreground sm:text-[1.7rem]">
                              {stat.value}
                            </p>
                            {stat.description ? (
                              <p className="mt-1 text-sm leading-6 text-contrast-foreground/62">
                                {stat.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {content.stats.map((stat) => (
                      <div
                        className="rounded-[24px] border border-contrast-foreground/10 bg-contrast-foreground/6 p-5 sm:p-6"
                        key={stat.label}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/88">
                          {stat.label}
                        </p>
                        <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.9rem] font-semibold tracking-[-0.05em] text-contrast-foreground">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </InteractiveCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
