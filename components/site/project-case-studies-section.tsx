import Image from "next/image";

import type { ProjectCaseStudy, SectionIntro } from "@/content/pages";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

type ProjectCaseStudiesSectionProps = {
  intro: SectionIntro;
  projects: ProjectCaseStudy[];
};

export function ProjectCaseStudiesSection({
  intro,
  projects,
}: ProjectCaseStudiesSectionProps) {
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
        <div className="mt-8 space-y-10 lg:space-y-12">
          {projects.map((project, index) => {
            const isDarkMain = index % 2 === 0;
            const mainTone = isDarkMain ? "dark" : "light";
            const sideTone = isDarkMain ? "light" : "dark";

            return (
              <Reveal delay={0.08 * index} key={project.title}>
                <div className="relative">
                  {index > 0 ? (
                    <div className="mb-10 flex items-center gap-4 lg:mb-12">
                      <div className="h-px flex-1 bg-line" />
                      <span className="rounded-full border border-line bg-surface-strong/84 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        Next case study
                      </span>
                      <div className="h-px flex-1 bg-line" />
                    </div>
                  ) : null}

                  <div className="rounded-[36px] border border-line/80 bg-surface/48 p-3 sm:p-4 lg:p-5">
                    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)]">
                      <InteractiveCard
                        className={cn(index % 2 === 1 && "xl:order-2")}
                      >
                        <Card
                          className="h-full p-6 sm:p-7 lg:p-8"
                          tone={mainTone}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            {project.eyebrow}
                          </p>
                          <h2
                            className={cn(
                              "mt-4 max-w-[14ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl",
                              isDarkMain
                                ? "text-contrast-foreground"
                                : "text-ink",
                            )}
                          >
                            {project.title}
                          </h2>
                          <p
                            className={cn(
                              "mt-5 max-w-xl text-sm leading-7 sm:text-base",
                              isDarkMain
                                ? "text-contrast-foreground/72"
                                : "text-muted",
                            )}
                          >
                            {project.description}
                          </p>
                          <div
                            className={cn(
                              "mt-8 overflow-hidden rounded-[28px] border",
                              isDarkMain
                                ? "border-contrast-foreground/10 bg-contrast-foreground/6"
                                : "border-line bg-surface-strong/72",
                            )}
                          >
                            <Image
                              alt={project.imageAlt}
                              className="aspect-[16/10] h-auto w-full object-cover"
                              height={780}
                              priority={index === 0}
                              src={project.imageSrc}
                              width={1200}
                            />
                          </div>
                          <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {project.metrics.map((metric) => (
                              <div
                                className={cn(
                                  "rounded-[22px] border px-4 py-4",
                                  isDarkMain
                                    ? "border-contrast-foreground/10 bg-contrast-foreground/6"
                                    : "border-line bg-surface-strong/72",
                                )}
                                key={metric.label}
                              >
                                <p
                                  className={cn(
                                    "text-xs font-semibold uppercase tracking-[0.16em]",
                                    isDarkMain
                                      ? "text-contrast-foreground/62"
                                      : "text-muted",
                                  )}
                                >
                                  {metric.label}
                                </p>
                                <p
                                  className={cn(
                                    "mt-2 font-display text-xl font-semibold tracking-[-0.04em]",
                                    isDarkMain
                                      ? "text-contrast-foreground"
                                      : "text-ink",
                                  )}
                                >
                                  {metric.value}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8">
                            <Button
                              emoji={project.cta.emoji}
                              hoverEmoji={project.cta.hoverEmoji}
                              href={project.cta.href}
                              variant={isDarkMain ? "secondary" : "primary"}
                            >
                              {project.cta.label}
                            </Button>
                          </div>
                        </Card>
                      </InteractiveCard>

                      <div
                        className={cn(
                          "grid gap-5",
                          index % 2 === 1 && "xl:order-1",
                        )}
                      >
                        <InteractiveCard>
                          <Card className="h-full p-6 sm:p-7" tone={sideTone}>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                              What shipped
                            </p>
                            <ul className="mt-5 space-y-3">
                              {project.highlights.map((highlight) => (
                                <li
                                  className={cn(
                                    "rounded-[20px] border px-4 py-3 text-sm leading-6 sm:text-base",
                                    sideTone === "dark"
                                      ? "border-contrast-foreground/10 bg-contrast-foreground/6 text-contrast-foreground/86"
                                      : "border-line bg-surface-strong/72 text-ink",
                                  )}
                                  key={highlight}
                                >
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </Card>
                        </InteractiveCard>

                        <InteractiveCard>
                          <Card className="p-6 sm:p-7" tone={sideTone}>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                              Outcome
                            </p>
                            <p
                              className={cn(
                                "mt-4 max-w-xl text-base leading-7",
                                sideTone === "dark"
                                  ? "text-contrast-foreground/76"
                                  : "text-muted",
                              )}
                            >
                              {project.outcome}
                            </p>
                          </Card>
                        </InteractiveCard>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
