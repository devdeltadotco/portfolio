import { cn } from "@/lib/cn";

type BrandLockupProps = {
  className?: string;
  name: string;
  theme?: "dark" | "light";
};

function DeltaMark({ theme }: Pick<BrandLockupProps, "theme">) {
  const isDark = theme === "dark";

  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
      <span
        className={cn(
          "absolute inset-1 rounded-full blur-md",
          isDark ? "bg-accent/24" : "bg-accent/16",
        )}
      />
      <svg
        aria-hidden="true"
        className="relative h-11 w-11"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          className={cn(
            isDark ? "stroke-contrast-foreground/78" : "stroke-ink/72",
          )}
          d="M24 7.5 40 36.5c.65 1.18-.2 2.65-1.55 2.65H9.55c-1.35 0-2.2-1.47-1.55-2.65L24 7.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          className="fill-accent"
          d="M24 16.2 31.8 30.35c.43.78-.13 1.75-1.02 1.75H17.22c-.89 0-1.45-.97-1.02-1.75L24 16.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function BrandLockup({
  className,
  name,
  theme = "light",
}: BrandLockupProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <DeltaMark theme={theme} />
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[-0.04em]",
            isDark ? "text-contrast-foreground" : "text-ink",
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "text-xs tracking-[0.18em]",
            isDark ? "text-contrast-foreground/60" : "text-muted",
          )}
        >
          Product studio
        </span>
      </div>
    </div>
  );
}
