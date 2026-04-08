import type { VideoHighlightContent } from "@/content/site";

import { Container } from "@/components/ui/container";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type VideoHighlightProps = {
  content: VideoHighlightContent;
};

export function VideoHighlight({ content }: VideoHighlightProps) {
  return (
    <Section className="pt-2" id="work">
      <Container>
        <Reveal>
          <InteractiveCard
            className="group relative overflow-hidden rounded-[34px] border border-line p-8 shadow-[0_28px_60px_rgba(17,17,17,0.18)] sm:p-10 lg:p-14"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(var(--background-rgb), 0.98) 0%, rgba(var(--background-rgb), 0.92) 24%, rgba(var(--accent-rgb), 0.42) 52%, rgba(var(--foreground-rgb), 0.98) 100%)",
            }}
          >
            <div
              className="absolute inset-y-0 left-0 w-[62%]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(var(--background-rgb), 0.96) 0%, rgba(var(--background-rgb), 0.8) 52%, rgba(var(--background-rgb), 0) 100%)",
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[46%]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(var(--foreground-rgb), 0.14), transparent 68%)",
              }}
            />
            <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-background/70 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute right-6 top-6 hidden gap-2 rounded-full border border-contrast-foreground/16 bg-contrast px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-contrast-foreground shadow-[0_16px_36px_rgba(17,17,17,0.2)] backdrop-blur sm:flex">
              <span>Discovery</span>
              <span className="text-contrast-foreground/45">/</span>
              <span>Design</span>
              <span className="text-contrast-foreground/45">/</span>
              <span>Build</span>
            </div>
            <div className="relative flex min-h-[260px] flex-col justify-between gap-10 lg:min-h-[300px]">
              <div className="max-w-[540px] rounded-[30px] border border-background/60 bg-background/24 p-6 shadow-[0_18px_40px_rgba(237,246,249,0.22)] backdrop-blur-md sm:p-8">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-accent">
                    {content.eyebrow}
                  </p>
                  <h3 className="max-w-[11ch] text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-contrast sm:text-5xl">
                    {content.title}
                  </h3>
                </div>
                <p className="mt-10 max-w-xl text-sm leading-7 text-contrast/82 sm:text-base">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/36 bg-contrast shadow-[0_18px_44px_rgba(17,17,17,0.22)] backdrop-blur-md transition duration-500 group-hover:scale-110 sm:h-28 sm:w-28">
                <span className="ml-1 block h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-background sm:border-y-[14px] sm:border-l-[22px]" />
              </div>
            </div>
          </InteractiveCard>
        </Reveal>
      </Container>
    </Section>
  );
}
