import Link from "next/link";
import type { ReactNode } from "react";

import { EmojiSwap } from "@/components/ui/emoji-swap";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  emoji?: string;
  href: string;
  hoverEmoji?: string;
  icon?: "arrow" | "none";
  onClick?: () => void;
  variant?: "ghost" | "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  ghost:
    "border-transparent bg-transparent text-ink hover:bg-surface-strong/84 hover:text-ink",
  primary:
    "border-contrast bg-contrast text-contrast-foreground shadow-[0_18px_42px_rgba(17,17,17,0.18)] hover:-translate-y-0.5 hover:bg-contrast/92",
  secondary:
    "border-line bg-surface-strong/92 text-ink shadow-[0_12px_28px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 hover:bg-surface-strong",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 17L17 7M17 7H8.5M17 7V15.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function Button({
  children,
  className,
  emoji,
  href,
  hoverEmoji,
  icon = "arrow",
  onClick,
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
    "group/button relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contrast/20",
    variantClasses[variant],
    className,
  );

  const content = (
    <span className="relative inline-flex items-center gap-2 transition duration-300 group-hover/button:translate-x-0.5 group-focus-visible/button:translate-x-0.5">
      {emoji ? <EmojiSwap from={emoji} to={hoverEmoji} /> : null}
      <span>{children}</span>
      {icon === "arrow" ? (
        <span className="transition duration-300 group-hover/button:translate-x-1 group-focus-visible/button:translate-x-1">
          <ArrowIcon />
        </span>
      ) : null}
    </span>
  );

  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  ) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        <span className="absolute inset-y-1 left-2 w-10 rounded-full bg-background/14 blur-xl transition duration-500 group-hover/button:translate-x-5 group-focus-visible/button:translate-x-5" />
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      <span className="absolute inset-y-1 left-2 w-10 rounded-full bg-background/14 blur-xl transition duration-500 group-hover/button:translate-x-5 group-focus-visible/button:translate-x-5" />
      {content}
    </Link>
  );
}
