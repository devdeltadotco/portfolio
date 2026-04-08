import type { PricingPlan, SectionIntro } from "@/content/pages";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type PricingPlansSectionProps = {
  intro: SectionIntro;
  plans: PricingPlan[];
};

export function PricingPlansSection({
  intro,
  plans,
}: PricingPlansSectionProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Heading
            description={intro.description}
            eyebrow={intro.eyebrow}
            title={intro.title}
            titleClassName="max-w-[13ch]"
          />
        </Reveal>
        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal delay={0.08 * index} key={plan.name}>
              <InteractiveCard className="h-full">
                <Card
                  className="flex h-full flex-col p-6 sm:p-7"
                  tone={plan.featured ? "dark" : "light"}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {plan.cadence}
                      </p>
                      {plan.featured ? (
                        <span className="rounded-full border border-contrast-foreground/12 bg-contrast-foreground/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-contrast-foreground/72">
                          Popular
                        </span>
                      ) : null}
                    </div>
                    <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {plan.name}
                    </h3>
                    <p
                      className={
                        plan.featured
                          ? "text-sm leading-7 text-contrast-foreground/72 sm:text-base"
                          : "text-sm leading-7 text-muted sm:text-base"
                      }
                    >
                      {plan.description}
                    </p>
                  </div>
                  <div
                    className={
                      plan.featured
                        ? "mt-7 rounded-[24px] border border-contrast-foreground/10 bg-contrast-foreground/6 p-5"
                        : "mt-7 rounded-[24px] border border-line bg-surface-strong/72 p-5"
                    }
                  >
                    <p
                      className={
                        plan.featured
                          ? "text-xs font-semibold uppercase tracking-[0.18em] text-contrast-foreground/62"
                          : "text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                      }
                    >
                      Starting price
                    </p>
                    <p className="font-display text-4xl font-semibold tracking-[-0.05em]">
                      {plan.price}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div
                      className={
                        plan.featured
                          ? "rounded-[20px] border border-contrast-foreground/10 bg-contrast-foreground/6 px-4 py-4"
                          : "rounded-[20px] border border-line bg-surface-strong/72 px-4 py-4"
                      }
                    >
                      <p
                        className={
                          plan.featured
                            ? "text-xs font-semibold uppercase tracking-[0.16em] text-contrast-foreground/62"
                            : "text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                        }
                      >
                        Best for
                      </p>
                      <p
                        className={
                          plan.featured
                            ? "mt-2 text-sm leading-6 text-contrast-foreground/86"
                            : "mt-2 text-sm leading-6 text-ink"
                        }
                      >
                        {plan.bestFor}
                      </p>
                    </div>
                    <div
                      className={
                        plan.featured
                          ? "rounded-[20px] border border-contrast-foreground/10 bg-contrast-foreground/6 px-4 py-4"
                          : "rounded-[20px] border border-line bg-surface-strong/72 px-4 py-4"
                      }
                    >
                      <p
                        className={
                          plan.featured
                            ? "text-xs font-semibold uppercase tracking-[0.16em] text-contrast-foreground/62"
                            : "text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                        }
                      >
                        Timeline
                      </p>
                      <p
                        className={
                          plan.featured
                            ? "mt-2 text-sm leading-6 text-contrast-foreground/86"
                            : "mt-2 text-sm leading-6 text-ink"
                        }
                      >
                        {plan.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p
                      className={
                        plan.featured
                          ? "text-xs font-semibold uppercase tracking-[0.18em] text-contrast-foreground/62"
                          : "text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                      }
                    >
                      What you get
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        className={
                          plan.featured
                            ? "rounded-[20px] border border-contrast-foreground/10 bg-contrast-foreground/6 px-4 py-3 text-sm leading-6 text-contrast-foreground/86"
                            : "rounded-[20px] border border-line bg-surface-strong/72 px-4 py-3 text-sm leading-6 text-ink"
                        }
                        key={feature}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      emoji={plan.cta.emoji}
                      href={plan.cta.href}
                      hoverEmoji={plan.cta.hoverEmoji}
                      variant={plan.featured ? "secondary" : "primary"}
                    >
                      {plan.cta.label}
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
