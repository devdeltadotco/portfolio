import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-28 py-8 sm:py-10 lg:py-12", className)}
      {...props}
    />
  );
}
