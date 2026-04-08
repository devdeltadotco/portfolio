import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  tone?: "dark" | "light";
};

export function Card({ className, tone = "light", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border",
        tone === "light"
          ? "surface-card border-line"
          : "dark-card border-contrast-foreground/10 text-contrast-foreground",
        className,
      )}
      {...props}
    />
  );
}
