"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function InteractiveCard({
  children,
  className,
  style,
}: InteractiveCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      style={style}
      transition={{ damping: 20, stiffness: 220, type: "spring" }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.01, y: -6 }}
    >
      {children}
    </motion.div>
  );
}
