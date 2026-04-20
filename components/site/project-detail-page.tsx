import Link from "next/link";

import type { PortfolioProject } from "@/content/projects";

import { ProjectVisual } from "@/components/site/project-visual";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getProjectHref } from "@/content/projects";

type ProjectDetailPageProps = {
  project: PortfolioProject;
  relatedProjects: PortfolioProject[];
};

export function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <Link
              className="underline-offset-4 hover:underline"
              href="/projects"
            >
              Featured projects
            </Link>
            <span>/</span>
            <Link
              className="underline-offset-4 hover:underline"
              href="/projects/all"
            >
              All projects
            </Link>
            <span>/</span>
            <span className="text-ink">{project.client}</span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-start">
            <Reveal className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface-strong/84 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {project.category}
                </span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
                  Case study page
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="max-w-[11ch] text-balance font-display text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                  {project.client}
                </h1>
                <p className="max-w-3xl text-pretty text-lg leading-8 text-muted">
                  {project.summary}
                </p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-muted">
                {project.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button emoji="💬" hoverEmoji="🚀" href="/contact-us">
                  Build something similar
                </Button>
                <Button
                  emoji="🗂️"
                  hoverEmoji="👀"
                  href="/projects/all"
                  variant="secondary"
                >
                  Browse all projects
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ProjectVisual project={project} size="hero" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_360px]">
            <div className="grid gap-5 md:grid-cols-3">
              <Reveal>
                <InteractiveCard className="h-full">
                  <Card className="h-full p-6 sm:p-7" tone="dark">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      Challenge
                    </p>
                    <p className="mt-4 text-sm leading-7 text-contrast-foreground/74 sm:text-base">
                      {project.challenge}
                    </p>
                  </Card>
                </InteractiveCard>
              </Reveal>
              <Reveal delay={0.06}>
                <InteractiveCard className="h-full">
                  <Card className="h-full p-6 sm:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      What shipped
                    </p>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          className="rounded-[20px] border border-line bg-surface-strong/72 px-4 py-3 text-sm leading-6 text-ink"
                          key={highlight}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </InteractiveCard>
              </Reveal>
              <Reveal delay={0.12}>
                <InteractiveCard className="h-full">
                  <Card className="h-full p-6 sm:p-7" tone="dark">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      Outcome
                    </p>
                    <p className="mt-4 text-sm leading-7 text-contrast-foreground/74 sm:text-base">
                      {project.outcome}
                    </p>
                  </Card>
                </InteractiveCard>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <InteractiveCard className="h-full">
                <Card className="h-full p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Project metrics
                  </p>
                  <div className="mt-5 grid gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        className="rounded-[22px] border border-line bg-surface-strong/72 px-4 py-4"
                        key={metric.label}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.05em] text-ink">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </InteractiveCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
            <Reveal>
              <InteractiveCard className="h-full">
                <Card className="h-full p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Tech stack
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        className="rounded-full border border-line bg-surface-strong/72 px-3 py-1.5 text-sm text-ink"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Delivery scope
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((item) => (
                      <span
                        className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </InteractiveCard>
            </Reveal>

            <Reveal delay={0.08}>
              <InteractiveCard className="h-full">
                <Card className="h-full p-6 sm:p-7" tone="dark">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        Founder review
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-contrast-foreground/54">
                        {project.review.note}
                      </p>
                    </div>
                    {project.review.isPlaceholder ? (
                      <span className="rounded-full border border-contrast-foreground/12 bg-contrast-foreground/8 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-contrast-foreground/74">
                        Placeholder
                      </span>
                    ) : null}
                  </div>
                  <blockquote className="mt-6 max-w-[26rem] font-display text-2xl leading-9 tracking-[-0.04em] text-contrast-foreground sm:text-[2rem]">
                    &ldquo;{project.review.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-contrast-foreground/10 pt-5">
                    <p className="font-semibold text-contrast-foreground">
                      {project.review.author}
                    </p>
                    <p className="mt-1 text-sm text-contrast-foreground/64">
                      {project.review.role} at {project.review.company}
                    </p>
                  </div>
                </Card>
              </InteractiveCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  More projects
                </p>
                <h2 className="mt-3 max-w-[12ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                  Keep exploring the archive
                </h2>
              </div>
              <Button
                emoji="🗂️"
                hoverEmoji="👀"
                href="/projects/all"
                variant="secondary"
              >
                View all projects
              </Button>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item, index) => (
              <Reveal delay={0.05 * index} key={item.slug}>
                <InteractiveCard className="h-full">
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <ProjectVisual project={item} />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-ink">
                      {item.client}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.summary}
                    </p>
                    <Button
                      className="mt-6 self-start"
                      emoji="🔎"
                      hoverEmoji="👀"
                      href={getProjectHref(item.slug)}
                    >
                      View case study
                    </Button>
                  </Card>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
