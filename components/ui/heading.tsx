import { cn } from "@/lib/cn";

type HeadingProps = {
  align?: "center" | "left";
  className?: string;
  description?: string;
  descriptionClassName?: string;
  eyebrow?: string;
  title: string;
  titleClassName?: string;
};

export function Heading({
  align = "left",
  className,
  description,
  descriptionClassName,
  eyebrow,
  title,
  titleClassName,
}: HeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment, className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "max-w-[12ch] text-balance font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
