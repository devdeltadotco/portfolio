"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  offset = 28,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: offset }}
      transition={{
        delay,
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ amount: 0.25, once: true }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
