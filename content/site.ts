export type NavItem = {
  href: string;
  label: string;
};

export type ActionLink = {
  emoji?: string;
  href: string;
  hoverEmoji?: string;
  label: string;
};

export type HeroBar = {
  height: string;
  label: string;
};

export type HeroContent = {
  badge: string;
  description: string;
  guaranteeDescription: string;
  guaranteeEyebrow: string;
  guaranteeTitle: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  supportingNote: string;
  timelineBars: HeroBar[];
  title: string;
};

export type FeatureIntroContent = {
  description: string;
  eyebrow: string;
  title: string;
};

export type VideoHighlightContent = {
  description: string;
  eyebrow: string;
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type FaqContent = {
  description: string;
  items: FaqItem[];
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  title: string;
};

export type CtaBannerContent = {
  cta: ActionLink;
  title: string;
};

export type FooterColumn = {
  links: ActionLink[];
  title: string;
};

export type ContactPoint = {
  label: string;
  value: string;
};

export type SocialLink = {
  href: string;
  label: string;
  platform: "instagram" | "linkedin" | "x";
};

export type FooterContent = {
  columns: FooterColumn[];
  contacts: ContactPoint[];
  intro: string;
  socials: SocialLink[];
};

export type SiteContent = {
  brandName: string;
  ctaBanner: CtaBannerContent;
  faq: FaqContent;
  featureIntro: FeatureIntroContent;
  footer: FooterContent;
  hero: HeroContent;
  navigation: NavItem[];
  navigationCta: ActionLink;
  videoHighlight: VideoHighlightContent;
};

export const siteContent: SiteContent = {
  brandName: "DevDelta",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
  ],
  navigationCta: {
    href: "/contact-us",
    label: "Get started",
    emoji: "🚀",
    hoverEmoji: "⚡",
  },
  hero: {
    badge: "🚀 AI-assisted shipping partner",
    description:
      "DevDelta is an AI-assisted MVP development studio for founders who need discovery, design, engineering, QA, and handoff aligned around a fast launch.",
    guaranteeDescription:
      "AI handles the heavy repetition across the sprint, while senior oversight keeps scope, tradeoffs, and delivery accountable from kickoff to handoff.",
    guaranteeEyebrow: "Fixed & reliable",
    guaranteeTitle: "Not launched in 100 hours?\nYou pay $0.",
    primaryCta: {
      href: "/contact-us",
      label: "Book a Free Call",
      emoji: "📞",
      hoverEmoji: "✨",
    },
    secondaryCta: {
      href: "/about",
      label: "See how we work",
      emoji: "🧭",
      hoverEmoji: "👀",
    },
    supportingNote:
      "AI-first execution compresses product discovery and shipping without hiding the tradeoffs.",
    timelineBars: [
      { height: "34%", label: "Plan" },
      { height: "52%", label: "Design" },
      { height: "72%", label: "Build" },
      { height: "92%", label: "Launch" },
    ],
    title: "Launch your MVP in 100 hours",
  },
  featureIntro: {
    description:
      "We run AI through product discovery, interface exploration, implementation, and QA so startup teams can validate ideas with a launch-ready MVP instead of a long agency cycle.",
    eyebrow: "✨ Built for founders with momentum",
    title: "AI-assisted MVP development for founders moving fast",
  },
  videoHighlight: {
    description:
      "A tight sprint walkthrough that maps your product goals into a concrete roadmap, interface direction, and delivery sequence before the build starts.",
    eyebrow: "🎬 Part 1",
    title: "How DevDelta scopes, designs, and launches an MVP",
  },
  faq: {
    description:
      "We work with an AI-first MVP sprint model, so expectations stay clear and delivery moves much faster from day one.",
    items: [
      {
        answer:
          "An MVP is the smallest version of your product that proves the user flow, captures the core value, and is stable enough for real feedback.",
        question: "What exactly counts as an MVP?",
      },
      {
        answer:
          "We handle changes through explicit tradeoffs. If something new matters more, we swap it into scope instead of silently extending the timeline.",
        question: "What if requirements shift mid-way?",
      },
      {
        answer:
          "Yes. You receive the full codebase, deployment notes, and a handoff summary so your team can keep moving after launch.",
        question: "Do I own the code?",
      },
      {
        answer:
          "The stack is chosen around speed and maintainability. For most MVPs that means Next.js, TypeScript, Tailwind, and a backend that fits the data complexity, with AI heavily used across research, scaffolding, QA, and iteration.",
        question: "What tech stack do you use?",
      },
      {
        answer:
          "For the right scope, yes. The point is not cheapest delivery, it is the fastest credible route to a product you can test with users or investors.",
        question: "Is $3,000 really the full cost?",
      },
      {
        answer:
          "Then we do not invoice the sprint. The promise is tied to locked scope, quick feedback loops, and shared accountability.",
        question: "What if you miss the 100 hours?",
      },
    ],
    primaryCta: {
      href: "/contact-us",
      label: "More Questions",
      emoji: "💬",
      hoverEmoji: "🤔",
    },
    secondaryCta: {
      href: "/contact-us",
      label: "Contact Us",
      emoji: "👋",
      hoverEmoji: "💌",
    },
    title: "Agency FAQs 😄",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Book a Free Call",
      emoji: "🔥",
      hoverEmoji: "🚀",
    },
    title: "Ready to work with us?",
  },
  footer: {
    columns: [
      {
        title: "Navigation",
        links: [
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/work", label: "Work" },
          { href: "/projects", label: "Projects" },
          { href: "/pricing", label: "Pricing" },
          { href: "/contact-us", label: "Contact Us" },
        ],
      },
      {
        title: "Licenses",
        links: [
          { href: "/pricing", label: "Terms" },
          { href: "/pricing", label: "Privacy" },
          { href: "/pricing", label: "Cookies" },
        ],
      },
    ],
    contacts: [
      { label: "Phone", value: "+91 949 345 4298" },
      { label: "Email", value: "karthik@devdelta.co" },
      { label: "Base", value: "Remote between Bangalore and San Francisco" },
    ],
    intro:
      "We are a compact AI-first product and engineering partner for teams that need speed, clarity, and a launch-ready MVP without agency drag.",
    socials: [
      {
        href: "https://www.linkedin.com",
        label: "LinkedIn",
        platform: "linkedin",
      },
      {
        href: "https://www.instagram.com",
        label: "Instagram",
        platform: "instagram",
      },
      { href: "https://x.com", label: "X", platform: "x" },
    ],
  },
};
