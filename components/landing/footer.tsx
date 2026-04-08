import Link from "next/link";

import type { FooterContent, SocialLink } from "@/content/site";

import { BrandLockup } from "@/components/ui/brand-lockup";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type FooterProps = {
  brandName: string;
  content: FooterContent;
};

function FooterNavLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link className="transition hover:text-ink" href={href}>
        {label}
      </Link>
    );
  }

  return (
    <a className="transition hover:text-ink" href={href}>
      {label}
    </a>
  );
}

function SocialIcon({ platform }: Pick<SocialLink, "platform">) {
  if (platform === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 0 0 3.2 5.02c0 1.1.9 2 2 2 1.16 0 2.05-.9 2.05-2.01A2 2 0 0 0 5.25 3Zm6.86 5.5H8.83V20h3.28v-6.07c0-3.4 4.43-3.68 4.43 0V20h3.29v-7.17c0-5.58-6.38-5.37-7.72-2.63V8.5Z" />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
          width="14"
          x="5"
          y="5"
        />
        <circle
          cx="12"
          cy="12"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="16.3" cy="7.7" fill="currentColor" r="1" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.9 3H21l-6.56 7.5L22 21h-5.95l-4.66-6.1L6.05 21H4l7.02-8.01L2 3h6.1l4.2 5.55L18.9 3Zm-1.04 16.2h1.65L7.1 4.7H5.33l12.53 14.5Z" />
    </svg>
  );
}

export function Footer({ brandName, content }: FooterProps) {
  return (
    <Section className="pb-12" id="contact">
      <Container>
        <Reveal>
          <footer className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
            <div className="space-y-5">
              <Link href="/">
                <BrandLockup name={brandName} />
              </Link>
              <p className="max-w-md text-base leading-7 text-muted">
                {content.intro}
              </p>
              <div className="flex items-center gap-3">
                {content.socials.map((social) => (
                  <a
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-strong/74 transition duration-300 hover:-translate-y-0.5 hover:bg-contrast hover:text-contrast-foreground"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>

            {content.columns.map((column) => (
              <div className="space-y-4" key={column.title}>
                <h3 className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">
                Contact
              </h3>
              <ul className="space-y-4 text-sm text-muted">
                {content.contacts.map((item) => (
                  <li className="space-y-1" key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted/70">
                      {item.label}
                    </p>
                    <p className="leading-6 text-ink">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </Reveal>
      </Container>
    </Section>
  );
}
