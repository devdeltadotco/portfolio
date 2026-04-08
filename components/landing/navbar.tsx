"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { ActionLink, NavItem } from "@/content/site";

import { BrandLockup } from "@/components/ui/brand-lockup";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

type NavbarProps = {
  brandName: string;
  cta: ActionLink;
  items: NavItem[];
};

export function Navbar({ brandName, cta, items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    <header className="pt-5 sm:pt-8">
      <Container>
        <Reveal>
          <div className="surface-card rounded-4xl border border-line px-4 py-4 sm:px-5">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <BrandLockup name={brandName} />
              </Link>
              <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
                <Button
                  className="hidden sm:inline-flex"
                  emoji={cta.emoji}
                  href={cta.href}
                  hoverEmoji={cta.hoverEmoji}
                  icon="none"
                  onClick={() => setIsMenuOpen(false)}
                  variant="secondary"
                >
                  {cta.label}
                </Button>
                <button
                  aria-controls="mobile-nav"
                  aria-expanded={isMenuOpen}
                  aria-label={
                    isMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-strong/84 text-ink transition duration-300 hover:bg-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contrast/20"
                  onClick={() => setIsMenuOpen((open) => !open)}
                  type="button"
                >
                  <span className="flex flex-col gap-1.5">
                    <span
                      className={cn(
                        "block h-0.5 w-5 rounded-full bg-current transition duration-300",
                        isMenuOpen && "translate-y-2 rotate-45",
                      )}
                    />
                    <span
                      className={cn(
                        "block h-0.5 w-5 rounded-full bg-current transition duration-300",
                        isMenuOpen && "opacity-0",
                      )}
                    />
                    <span
                      className={cn(
                        "block h-0.5 w-5 rounded-full bg-current transition duration-300",
                        isMenuOpen && "-translate-y-2 -rotate-45",
                      )}
                    />
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-4 hidden items-center justify-between gap-6 xl:flex">
              <nav
                aria-label="Primary"
                className="grid auto-cols-fr grid-flow-col items-center gap-2 rounded-full bg-contrast px-2 py-2 text-sm text-contrast-foreground"
              >
                {items.map((item) => (
                  <Link
                    className={cn(
                      "inline-flex h-11 w-full min-w-[104px] items-center justify-center whitespace-nowrap rounded-full px-4 text-center leading-none transition duration-300",
                      isActiveLink(item.href)
                        ? "bg-surface-strong text-contrast shadow-[0_8px_18px_rgba(17,17,17,0.12)]"
                        : "text-contrast-foreground/78 hover:bg-contrast-foreground/10 hover:text-contrast-foreground",
                    )}
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button
                emoji={cta.emoji}
                hoverEmoji={cta.hoverEmoji}
                href={cta.href}
              >
                {cta.label}
              </Button>
            </div>

            <AnimatePresence initial={false}>
              {isMenuOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden xl:hidden"
                  exit={{ height: 0, opacity: 0 }}
                  id="mobile-nav"
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <div className="mt-4 border-t border-line pt-4">
                    <nav aria-label="Mobile primary" className="grid gap-2">
                      {items.map((item) => (
                        <Link
                          className={cn(
                            "rounded-[20px] px-4 py-3 text-sm font-semibold transition duration-300",
                            isActiveLink(item.href)
                              ? "border border-line bg-surface-strong text-contrast"
                              : "bg-surface-strong/72 text-ink hover:bg-surface-strong",
                          )}
                          href={item.href}
                          key={item.label}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-4 flex flex-col gap-3 sm:hidden">
                      <Button
                        emoji={cta.emoji}
                        href={cta.href}
                        hoverEmoji={cta.hoverEmoji}
                        icon="none"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {cta.label}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </header>
  );
}
