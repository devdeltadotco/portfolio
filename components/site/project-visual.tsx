import type { CSSProperties } from "react";

import type { PortfolioProject } from "@/content/projects";

import { cn } from "@/lib/cn";

type ProjectVisualProps = {
  className?: string;
  project: PortfolioProject;
  size?: "card" | "hero";
};

const patternClasses: Record<PortfolioProject["visual"]["pattern"], string> = {
  beams:
    "before:absolute before:-left-10 before:top-8 before:h-40 before:w-40 before:rounded-full before:border before:border-white/18 before:bg-white/8 before:blur-sm after:absolute after:bottom-[-4.5rem] after:right-[-3rem] after:h-48 after:w-48 after:rotate-12 after:rounded-[2rem] after:border after:border-white/12 after:bg-white/10",
  grid: "before:absolute before:inset-[8%] before:rounded-[1.8rem] before:border before:border-white/14 after:absolute after:inset-0 after:bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] after:bg-[size:36px_36px] after:opacity-30",
  nodes:
    "before:absolute before:left-[12%] before:top-[22%] before:h-3 before:w-3 before:rounded-full before:bg-white/70 before:shadow-[120px_28px_0_rgba(255,255,255,0.45),220px_130px_0_rgba(255,255,255,0.5),20px_150px_0_rgba(255,255,255,0.35)] after:absolute after:left-[14%] after:top-[25%] after:h-px after:w-[70%] after:rotate-[14deg] after:bg-white/30",
  orbits:
    "before:absolute before:left-1/2 before:top-1/2 before:h-40 before:w-40 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-white/24 after:absolute after:left-1/2 after:top-1/2 after:h-64 after:w-64 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-white/12",
  pulse:
    "before:absolute before:left-1/2 before:top-1/2 before:h-36 before:w-36 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white/24 before:blur-xl after:absolute after:left-1/2 after:top-1/2 after:h-56 after:w-56 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-white/16",
};

export function ProjectVisual({
  className,
  project,
  size = "card",
}: ProjectVisualProps) {
  const isHero = size === "hero";
  const style = {
    background: `radial-gradient(circle at top left, ${project.visual.accentTo}44, transparent 34%), linear-gradient(135deg, ${project.visual.accentFrom} 0%, ${project.visual.accentTo} 100%)`,
  } satisfies CSSProperties;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/12 text-white shadow-[0_24px_60px_rgba(17,17,17,0.18)]",
        isHero ? "min-h-[340px] p-6 sm:p-8" : "min-h-[250px] p-5",
        patternClasses[project.visual.pattern],
        className,
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(17,17,17,0.28),transparent_42%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex flex-wrap items-start gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {project.category}
            </p>
            <p className="mt-2 text-sm font-medium text-white/86">
              {project.visual.label}
            </p>
          </div>
        </div>

        <div className="max-w-[32rem]">
          <p
            className={cn(
              "font-display font-semibold tracking-[-0.05em] text-white",
              isHero ? "text-4xl sm:text-5xl" : "text-3xl",
            )}
          >
            {project.client}
          </p>
          <p
            className={cn(
              "mt-3 max-w-[30ch] text-balance text-white/78",
              isHero ? "text-base leading-7 sm:text-lg" : "text-sm leading-6",
            )}
          >
            {project.title}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.visual.tags.map((tag) => (
            <span
              className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-medium text-white/88"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
