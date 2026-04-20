import type { PortfolioProject } from "@/content/projects";
import type { SectionIntro } from "@/content/pages";

import { ProjectVisual } from "@/components/site/project-visual";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getProjectHref } from "@/content/projects";

type ProjectsGridSectionProps = {
  intro: SectionIntro;
  projects: PortfolioProject[];
};

export function ProjectsGridSection({
  intro,
  projects,
}: ProjectsGridSectionProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Heading
              description={intro.description}
              eyebrow={intro.eyebrow}
              title={intro.title}
              titleClassName="max-w-[15ch]"
            />
            <Button
              emoji="🔙"
              hoverEmoji="👀"
              href="/projects"
              variant="secondary"
            >
              Back to featured
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal delay={0.04 * (index % 6)} key={project.slug}>
              <InteractiveCard className="h-full">
                <Card className="flex h-full flex-col p-5 sm:p-6">
                  <ProjectVisual project={project} />
                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {project.category}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-ink">
                      {project.client}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item) => (
                        <span
                          className="rounded-full border border-line bg-surface-strong/72 px-3 py-1 text-xs text-ink"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Button
                        emoji="🔎"
                        hoverEmoji="👀"
                        href={getProjectHref(project.slug)}
                        variant="secondary"
                      >
                        View case study
                      </Button>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted">
                        {project.metrics[0]?.value}
                      </span>
                    </div>
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
