import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface-strong/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent shadow-[0_10px_24px_rgba(17,17,17,0.08)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
