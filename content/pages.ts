import type { ActionLink, CtaBannerContent } from "@/content/site";

export type HeroStat = {
  description?: string;
  label: string;
  value: string;
};

export type PageHeroContent = {
  description: string;
  eyebrow: string;
  panelDescription: string;
  panelEyebrow: string;
  panelTitle: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  stats: HeroStat[];
  title: string;
};

export type SectionIntro = {
  description: string;
  eyebrow: string;
  title: string;
};

export type FeatureCard = {
  description: string;
  eyebrow?: string;
  title: string;
};

export type SpotlightContent = {
  description: string;
  eyebrow: string;
  items: string[];
  title: string;
};

export type PricingPlan = {
  bestFor: string;
  cadence: string;
  cta: ActionLink;
  description: string;
  featured?: boolean;
  features: string[];
  name: string;
  price: string;
  timeline: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  cta: ActionLink;
  description: string;
  eyebrow: string;
  highlights: string[];
  imageAlt: string;
  imageSrc: string;
  metrics: ProjectMetric[];
  outcome: string;
  title: string;
};

export type ContactMethod = {
  cta: ActionLink;
  description: string;
  eyebrow: string;
  title: string;
};

export const aboutPage = {
  cards: [
    {
      description:
        "We define the problem, flow, and tradeoffs before design starts.",
      eyebrow: "01",
      title: "Scope clarity before speed",
    },
    {
      description:
        "You work directly with the builders. No handoffs. No relay layers.",
      eyebrow: "02",
      title: "Senior execution throughout",
    },
    {
      description: "We build for the next version, not just the first.",
      eyebrow: "03",
      title: "Built to extend cleanly",
    },
  ],
  cardsIntro: {
    description:
      "We stay small and AI-first. Strategy, design, and engineering stay aligned.",
    eyebrow: "⚙️ How we work",
    title: "A lean team. High ownership.",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Start your sprint",
      emoji: "🏁",
      hoverEmoji: "🚀",
    },
    title: "Need senior builders on your next phase?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "DevDelta is an AI-first product squad for teams that need fast delivery, sound architecture, and software that scales.",
    eyebrow: "🧠 About DevDelta",
    panelDescription:
      "Strategy, design, and implementation stay in one loop. Nothing gets lost in handoffs.",
    panelEyebrow: "What teams get",
    panelTitle: "AI speed. Senior judgment. Zero agency drag.",
    primaryCta: {
      href: "/contact-us",
      label: "Talk to us",
      emoji: "☕",
      hoverEmoji: "✨",
    },
    secondaryCta: {
      href: "/work",
      label: "See our work model",
      emoji: "🧪",
      hoverEmoji: "🛠️",
    },
    stats: [
      { label: "Typical sprint", value: "100h" },
      { label: "Kickoff time", value: "48h" },
      { label: "Delivery team", value: "1" },
      { label: "Structured checkpoints", value: "Weekly" },
    ],
    title: "Senior thinking. Scalable execution.",
  } satisfies PageHeroContent,
  spotlight: {
    description:
      "Communication stays light and clear. You always know what changed, what is blocked, and what is next.",
    eyebrow: "Inside the engagement",
    items: [
      "Scope, tradeoffs, and assumptions are documented",
      "Reviews stay fast and focused",
      "Design and engineering move together",
      "Every sprint ends with clear handoff notes",
    ],
    title: "Momentum without overhead",
  } satisfies SpotlightContent,
};

export const workPage = {
  cards: [
    {
      description:
        "Fast product builds for teams that need a usable release quickly.",
      eyebrow: "Build type",
      title: "Product launches",
    },
    {
      description:
        "Internal systems that reduce friction across teams and operations.",
      eyebrow: "Build type",
      title: "Internal systems",
    },
    {
      description:
        "AI products where UX, reliability, and integrations must work together.",
      eyebrow: "Build type",
      title: "AI workflow platforms",
    },
  ],
  cardsIntro: {
    description:
      "We use AI to speed research, design, engineering, and QA. Quality stays controlled.",
    eyebrow: "🚀 What we ship",
    title: "What we build",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Discuss your product",
      emoji: "🧩",
      hoverEmoji: "🚀",
    },
    title: "Need a plan for your next build?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "We focus on usable releases, scalable architecture, and faster delivery.",
    eyebrow: "🛠️ Our Work",
    panelDescription:
      "Our four-step process turns a brief into a working release. AI speeds execution. Senior oversight protects quality.",
    panelEyebrow: "Delivery lens",
    panelTitle: "From brief to scalable release.",
    primaryCta: {
      href: "/contact-us",
      label: "Plan a build",
      emoji: "🚧",
      hoverEmoji: "🚀",
    },
    secondaryCta: {
      href: "/pricing",
      label: "Review pricing",
      emoji: "💸",
      hoverEmoji: "🧾",
    },
    stats: [
      {
        description: "Brief, users, constraints",
        label: "01",
        value: "Scope lock",
      },
      {
        description: "Flows, screens, systems",
        label: "02",
        value: "UX direction",
      },
      {
        description: "Core path, QA, integrations",
        label: "03",
        value: "Build sprint",
      },
      {
        description: "Deploy, docs, next steps",
        label: "04",
        value: "Production handoff",
      },
    ],
    title: "Built for real use and growth",
  } satisfies PageHeroContent,
  spotlight: {
    description: "We protect speed without shipping fragile software.",
    eyebrow: "Delivery rhythm",
    items: [
      "Kickoff defines constraints and acceptance criteria",
      "UI stays tied to product goals",
      "Engineering focuses on the core path first",
      "Release includes notes, guidance, and next steps",
    ],
    title: "Built for real delivery",
  } satisfies SpotlightContent,
};

export const pricingPage = {
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Get a tailored quote",
      emoji: "🧮",
      hoverEmoji: "✨",
    },
    title: "Want pricing mapped to your exact scope?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "Choose the engagement that fits your stage. We separate discovery, build, and scale-up work.",
    eyebrow: "💸 Pricing",
    panelDescription:
      "Most teams need clarity, a first release, or the next iteration.",
    panelEyebrow: "How pricing works",
    panelTitle: "Three simple ways to work with DevDelta.",
    primaryCta: {
      href: "/contact-us",
      label: "Request a quote",
      emoji: "🧮",
      hoverEmoji: "💬",
    },
    secondaryCta: {
      href: "/work",
      label: "See work focus",
      emoji: "👀",
      hoverEmoji: "🛠️",
    },
    stats: [
      { label: "Need clarity", value: "Discovery" },
      { label: "Need first release", value: "Product build" },
      { label: "Need scale", value: "Iteration" },
      { label: "Always included", value: "Full code ownership" },
    ],
    title: "Simple pricing for each stage",
  } satisfies PageHeroContent,
  plans: [
    {
      bestFor: "You need scope and technical direction.",
      cadence: "Best first step",
      cta: {
        href: "/contact-us",
        label: "Start with discovery",
        emoji: "🧭",
        hoverEmoji: "✨",
      },
      description: "We turn a rough brief into a clear plan.",
      features: [
        "Scope and success criteria",
        "Stack and delivery plan",
        "Early UI direction",
      ],
      name: "Discovery Sprint",
      price: "From $2,000",
      timeline: "1 focused sprint",
    },
    {
      bestFor: "You need a first release, new workflow, or scoped module.",
      cadence: "Most common choice",
      cta: {
        href: "/contact-us",
        label: "Start product build",
        emoji: "🚀",
        hoverEmoji: "🔥",
      },
      description: "We design, build, QA, and ship the core workflow.",
      featured: true,
      features: [
        "Core flow shipped end-to-end",
        "Design and build in one loop",
        "Deployment and handoff guidance",
      ],
      name: "Core Build",
      price: "Custom quote",
      timeline: "About 100 delivery hours",
    },
    {
      bestFor:
        "Your product is live and needs expansion, cleanup, or integration work.",
      cadence: "Post-release",
      cta: {
        href: "/contact-us",
        label: "Plan next phase",
        emoji: "📈",
        hoverEmoji: "⚡",
      },
      description: "We improve the product with focused follow-on blocks.",
      features: [
        "Features and workflow improvements",
        "Fixes, performance, and hardening",
        "Clear next-step roadmap",
      ],
      name: "Growth Iteration",
      price: "Scoped after review",
      timeline: "Flexible follow-on block",
    },
  ] satisfies PricingPlan[],
  plansIntro: {
    description:
      "Start with the option that fits today. If unsure, begin with discovery.",
    eyebrow: "🧠 Common engagement models",
    title: "Choose the option that fits where you are",
  },
  spotlight: {
    description: "Every engagement keeps the basics clear.",
    eyebrow: "Always included",
    items: [
      "Defined scope before work starts",
      "Direct access to the people building",
      "Full code ownership at handoff",
      "Clear next steps",
    ],
    title: "What every engagement includes",
  } satisfies SpotlightContent,
};

export const projectsPage = {
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Start your project",
      emoji: "🚀",
      hoverEmoji: "✨",
    },
    title: "Want something in this league for your own product?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "Representative builds that show how DevDelta scopes, ships, and hands off scalable software.",
    eyebrow: "Previous Work",
    panelDescription:
      "Different products. Same model. Clear scope. AI-assisted delivery. Production-first decisions.",
    panelEyebrow: "Selected case studies",
    panelTitle: "Proof of execution, not just a process pitch.",
    primaryCta: {
      href: "/contact-us",
      label: "Discuss your product",
      emoji: "🧩",
      hoverEmoji: "🚀",
    },
    secondaryCta: {
      href: "/pricing",
      label: "See pricing",
      emoji: "💸",
      hoverEmoji: "👀",
    },
    stats: [
      { label: "Case studies", value: "2" },
      { label: "Delivery model", value: "AI-assisted" },
      { label: "Priority", value: "Scale-ready" },
      { label: "Handoff", value: "Production-ready" },
    ],
    title: "Work that shows how DevDelta ships",
  } satisfies PageHeroContent,
  projects: [
    {
      cta: {
        href: "/contact-us",
        label: "Build something similar",
        emoji: "⚡",
        hoverEmoji: "🛠️",
      },
      description:
        "A client onboarding SaaS for creative agencies. It needed faster activation and room to grow.",
      eyebrow: "Project 01",
      highlights: [
        "Mapped activation around first value",
        "Shipped guided setup, tasks, and status views",
        "Used AI-assisted iteration and QA to shorten review cycles",
      ],
      imageAlt:
        "Desk setup with laptop and monitor representing a client workspace product",
      imageSrc:
        "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        { label: "Timeline", value: "3 weeks" },
        { label: "Core modules", value: "5" },
        { label: "Launch goal", value: "Faster onboarding" },
      ],
      outcome:
        "The team got a clearer onboarding flow and a foundation that could support larger clients.",
      title: "StudioPilot streamlined agency onboarding",
    },
    {
      cta: {
        href: "/contact-us",
        label: "Plan a similar sprint",
        emoji: "📈",
        hoverEmoji: "🚀",
      },
      description:
        "An AI workflow product for operations and support teams. It needed cleaner summaries, actions, and searchable context.",
      eyebrow: "Project 02",
      highlights: [
        "Designed around reviewable AI output",
        "Built summaries, action capture, and activity history",
        "Kept the first release narrow to validate trust before scaling",
      ],
      imageAlt:
        "Modern workspace with laptop and monitor representing an AI operations workflow product",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?auto=format&fit=crop&w=1600&q=80",
      metrics: [
        { label: "Timeline", value: "100h release" },
        { label: "Primary users", value: "Ops teams" },
        { label: "Launch goal", value: "Faster follow-up" },
      ],
      outcome:
        "The first release reduced manual wrap-up work and created a solid base for broader AI workflows.",
      title: "SignalDesk AI moved teams from conversation to action",
    },
  ] satisfies ProjectCaseStudy[],
  projectsIntro: {
    description:
      "Different product types. Same delivery model. Tight scope. Strong foundation.",
    eyebrow: "Selected projects",
    title: "Representative builds that match our current delivery model",
  },
  spotlight: {
    description: "The product changes. The execution model stays reliable.",
    eyebrow: "What stays consistent",
    items: [
      "The first release balances proof and foundation",
      "AI is used to accelerate iteration, not hide weak product decisions",
      "Design and engineering stay in one loop",
      "Every build ends with clear handoff and next steps",
    ],
    title: "A method that scales",
  } satisfies SpotlightContent,
};

export const contactPage = {
  ctaBanner: {
    cta: {
      href: "mailto:karthik@devdelta.co",
      label: "Email us directly",
      emoji: "💌",
      hoverEmoji: "📨",
    },
    title: "Prefer email over forms? We reply within one business day.",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "Share a brief, concept, or workflow problem. We turn it into a practical delivery plan.",
    eyebrow: "💌 Contact Us",
    panelDescription:
      "Send the goal, users, integrations, and what the first release must prove.",
    panelEyebrow: "What to send",
    panelTitle: "A clear goal beats a perfect brief every time.",
    primaryCta: {
      href: "mailto:karthik@devdelta.co",
      label: "Email your brief",
      emoji: "📨",
      hoverEmoji: "⚡",
    },
    secondaryCta: {
      href: "/pricing",
      label: "Review pricing first",
      emoji: "💸",
      hoverEmoji: "👀",
    },
    stats: [
      { label: "Response window", value: "24h" },
      { label: "Kickoff target", value: "48h" },
      { label: "Preferred input", value: "Brief" },
      { label: "Timezone overlap", value: "Global" },
    ],
    title: "Tell us what you need to build",
  } satisfies PageHeroContent,
  methods: [
    {
      cta: {
        href: "mailto:karthik@devdelta.co",
        label: "karthik@devdelta.co",
        emoji: "✉️",
        hoverEmoji: "🚀",
      },
      description:
        "Send a note, deck, or rough brief. Clear goals are enough to start.",
      eyebrow: "Email",
      title: "Share your product context",
    },
    {
      cta: {
        href: "tel:+919493454298",
        label: "+91 949 345 4298",
        emoji: "📞",
        hoverEmoji: "✨",
      },
      description: "Use a quick call to align on fit, urgency, and scope.",
      eyebrow: "Phone",
      title: "Talk through the scope",
    },
    {
      cta: {
        href: "/about",
        label: "Learn how we work",
        emoji: "🧭",
        hoverEmoji: "👀",
      },
      description:
        "Review the process first if you are not ready to brief us yet.",
      eyebrow: "Prep",
      title: "Get familiar with the process",
    },
  ] satisfies ContactMethod[],
  methodsIntro: {
    description:
      "Use the starting point that feels easiest. We move from first message to plan quickly.",
    eyebrow: "🎉 Start the conversation",
    title: "A few simple ways to reach us",
  },
  spotlight: {
    description:
      "You do not need a polished PRD. A rough idea and context are enough.",
    eyebrow: "Before you reach out",
    items: [
      "The problem to solve",
      "The initial users",
      "What success looks like",
      "Deadlines, budget, or technical constraints",
    ],
    title: "Clear inputs speed up the process",
  } satisfies SpotlightContent,
};
