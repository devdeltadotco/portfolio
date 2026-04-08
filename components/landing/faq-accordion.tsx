"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { FaqItem } from "@/content/site";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-line rounded-[28px] border border-line bg-surface-strong/72 px-5 sm:px-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <div className="py-5" key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-lg font-semibold tracking-[-0.03em] text-ink">
                {item.question}
              </span>
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line">
                <span className="absolute h-px w-3.5 bg-accent" />
                <span
                  className="absolute h-3.5 w-px bg-accent transition duration-300"
                  style={{ opacity: isOpen ? 0 : 1 }}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { height: "auto", opacity: 1 }
                  }
                  className="overflow-hidden"
                  exit={
                    prefersReducedMotion ? undefined : { height: 0, opacity: 0 }
                  }
                  initial={
                    prefersReducedMotion ? false : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div
                    aria-labelledby={triggerId}
                    className="pt-4 text-sm leading-7 text-muted sm:text-base"
                    id={panelId}
                    role="region"
                  >
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
