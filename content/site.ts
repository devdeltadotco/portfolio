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
      "DevDelta is a product engineering studio for startups, growing teams, and enterprises. Fast delivery. Scalable systems.",
    guaranteeDescription:
      "AI handles repetition. Senior oversight protects scope, architecture, and delivery.",
    guaranteeEyebrow: "Fixed & reliable",
    guaranteeTitle: "Scoped release in 100 hours. Otherwise, $0.",
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
      "We move fast without sacrificing scale, maintainability, or clarity.",
    timelineBars: [
      { height: "34%", label: "Plan" },
      { height: "52%", label: "Design" },
      { height: "72%", label: "Build" },
      { height: "92%", label: "Scale" },
    ],
    title: "Launch faster. Scale with confidence.",
  },
  featureIntro: {
    description:
      "We use AI across discovery, design, implementation, and QA. Teams move faster from MVPs to enterprise systems.",
    eyebrow: "✨ Built for speed and scale",
    title: "From MVPs to enterprise platforms",
  },
  videoHighlight: {
    description:
      "A short walkthrough of the roadmap, interface direction, architecture, and delivery plan.",
    eyebrow: "🎬 Part 1",
    title: "How DevDelta delivers scalable products",
  },
  faq: {
    description:
      "Our model fits MVPs, internal tools, and enterprise applications.",
    items: [
      {
        answer:
          "No. We build MVPs, internal tools, and scalable applications. Early releases move fast. Foundations stay ready to grow.",
        question: "Do you only build MVPs?",
      },
      {
        answer:
          "We handle changes through tradeoffs. If priorities change, scope changes too.",
        question: "What if requirements shift mid-way?",
      },
      {
        answer:
          "Yes. You get the codebase, deployment notes, and handoff context.",
        question: "Do I own the code?",
      },
      {
        answer:
          "We choose for speed, maintainability, and scale. Common choices include Next.js, TypeScript, and a fit-for-purpose backend.",
        question: "What tech stack do you use?",
      },
      {
        answer:
          "Discovery starts at $2,000. Larger builds are priced after scope, integrations, and risk review.",
        question: "How do pricing and scope work?",
      },
      {
        answer:
          "We do not invoice the sprint. This depends on locked scope and fast feedback.",
        question: "What if you miss the agreed milestone?",
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
    title: "FAQs",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Book a Free Call",
      emoji: "🔥",
      hoverEmoji: "🚀",
    },
    title: "Ready to build?",
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
        title: "Legal",
        links: [
          { href: "/terms", label: "Terms" },
          { href: "/privacy", label: "Privacy" },
          { href: "/cookies", label: "Cookies" },
        ],
      },
    ],
    contacts: [
      { label: "Phone", value: "+91 949 345 4298" },
      { label: "Email", value: "karthik@devdelta.co" },
      { label: "Base", value: "The Elite Enclave, Hyderabad" },
    ],
    intro:
      "We are an AI-first product and engineering partner for teams that need speed, clarity, and scalable software.",
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
