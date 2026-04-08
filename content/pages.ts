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
        "Before a single screen gets polished, we lock the problem, the user flow, and the tradeoffs that define the sprint.",
      eyebrow: "01",
      title: "Scope clarity before speed",
    },
    {
      description:
        "You work directly with the people shipping the product. No handoff layers, no account-manager relay, no diluted decisions.",
      eyebrow: "02",
      title: "Senior execution throughout",
    },
    {
      description:
        "Everything is designed to survive the next version, so the MVP can evolve instead of being thrown away after validation.",
      eyebrow: "03",
      title: "Built to extend cleanly",
    },
  ],
  cardsIntro: {
    description:
      "The studio is intentionally compact and AI-first, so strategy, design, and engineering stay aligned while the product moves much faster.",
    eyebrow: "⚙️ How we work",
    title: "A lean team with a founder-speed operating model",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Start your sprint",
      emoji: "🏁",
      hoverEmoji: "🚀",
    },
    title: "Want to work with the team behind the sprint?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "DevDelta acts like an AI-first product squad for early-stage teams that need an MVP launched fast without losing technical judgment.",
    eyebrow: "🧠 About DevDelta",
    panelDescription:
      "We combine product strategy, interface design, and implementation in one AI-assisted loop, so the product does not get passed between disconnected specialists.",
    panelEyebrow: "What founders get",
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
      { label: "Typical MVP sprint", value: "100h" },
      { label: "Kickoff turnaround", value: "48h" },
      { label: "Accountable delivery team", value: "1" },
      { label: "Structured checkpoints", value: "Weekly" },
    ],
    title: "Senior product thinking with launch-speed execution",
  } satisfies PageHeroContent,
  spotlight: {
    description:
      "We keep communication lightweight but explicit, using AI to remove repetitive work so founders always know what changed, what is blocked, and what matters next.",
    eyebrow: "Inside the engagement",
    items: [
      "Decision log for scope, tradeoffs, and assumptions",
      "Fast review loops with compact async updates",
      "Design and engineering developed together, not sequentially",
      "Clean handoff notes so your next sprint starts from clarity",
    ],
    title: "Working with us should feel like momentum, not overhead",
  } satisfies SpotlightContent,
};

export const workPage = {
  cards: [
    {
      description:
        "Fast validation builds for founders who need a usable product in market, not a six-month roadmap deck.",
      eyebrow: "Build type",
      title: "Founder MVPs",
    },
    {
      description:
        "Operations dashboards, internal workflows, and team tooling that remove friction inside early-stage companies.",
      eyebrow: "Build type",
      title: "Internal products",
    },
    {
      description:
        "AI-assisted prototypes and workflow tools where model behavior, UX clarity, and reliability need to be shaped together.",
      eyebrow: "Build type",
      title: "AI workflow products",
    },
  ],
  cardsIntro: {
    description:
      "We focus on product categories where AI can accelerate research, design, engineering, and QA without compromising what ships after launch.",
    eyebrow: "🚀 What we ship",
    title: "The kinds of products we help teams launch",
  },
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Discuss your product",
      emoji: "🧩",
      hoverEmoji: "🚀",
    },
    title: "Need a launch plan for your next build?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "Our work is shaped around practical launch outcomes: a core flow that users can test, a stack that can evolve, and an AI-assisted process that gets teams live much faster.",
    eyebrow: "🛠️ Our Work",
    panelDescription:
      "A compact four-step loop turns a rough brief into a live product. AI speeds up research, implementation support, and QA while we keep decisions and quality under control.",
    panelEyebrow: "Delivery lens",
    panelTitle: "From rough product brief to live, testable experience.",
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
        description: "Flows, screens, system choices",
        label: "02",
        value: "UX direction",
      },
      {
        description: "Core path, AI-assisted QA",
        label: "03",
        value: "Build sprint",
      },
      {
        description: "Deploy, docs, next steps",
        label: "04",
        value: "Launch handoff",
      },
    ],
    title: "We ship lean digital products that can stand up to real use",
  } satisfies PageHeroContent,
  spotlight: {
    description:
      "Every project is run through an AI-accelerated delivery rhythm that protects speed without turning the product into a rushed prototype.",
    eyebrow: "Delivery rhythm",
    items: [
      "Kickoff maps constraints, user flow, and acceptance criteria",
      "UI direction stays tied to product goals, not cosmetic drift",
      "Implementation prioritizes the core path before secondary polish",
      "Launch wraps with deployment notes and extension recommendations",
    ],
    title: "The work stays grounded in launch readiness at every step",
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
      "Pick the stage you are in and the matching engagement. We separate discovery, MVP build, and post-launch work so pricing stays easy to understand.",
    eyebrow: "💸 Pricing",
    panelDescription:
      "Most teams need one of three things: clarity, a first version, or the next iteration. Each option has a clear goal, scope, and handoff.",
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
      { label: "Need first version", value: "MVP build" },
      { label: "Already launched", value: "Iteration" },
      { label: "Always included", value: "Full code ownership" },
    ],
    title: "Simple pricing based on the stage of your product",
  } satisfies PageHeroContent,
  plans: [
    {
      bestFor:
        "You have an idea, but scope and technical direction are still unclear.",
      cadence: "Best first step",
      cta: {
        href: "/contact-us",
        label: "Start with discovery",
        emoji: "🧭",
        hoverEmoji: "✨",
      },
      description:
        "We turn a rough brief into a clear product plan before heavier build spend starts.",
      features: [
        "Scope, user flow, and success criteria",
        "Recommended stack and delivery plan",
        "Early UI direction for version one",
      ],
      name: "Discovery Sprint",
      price: "From $3,000",
      timeline: "1 focused sprint",
    },
    {
      bestFor:
        "You are ready to launch a first usable version for real users to test.",
      cadence: "Most common choice",
      cta: {
        href: "/contact-us",
        label: "Start MVP build",
        emoji: "🚀",
        hoverEmoji: "🔥",
      },
      description:
        "We design, build, QA, and launch the core workflow your users need first.",
      featured: true,
      features: [
        "Core flow shipped end-to-end",
        "Design and build in one loop",
        "Deployment help and handoff notes",
      ],
      name: "MVP Launch",
      price: "Custom quote",
      timeline: "Around 100 delivery hours",
    },
    {
      bestFor:
        "Your product is already live and now needs improvements, cleanup, or expansion.",
      cadence: "After launch",
      cta: {
        href: "/contact-us",
        label: "Plan next phase",
        emoji: "📈",
        hoverEmoji: "⚡",
      },
      description:
        "We keep momentum after launch with focused improvement blocks and clear priorities.",
      features: [
        "New features or workflow improvements",
        "Cleanup, fixes, and performance work",
        "Prioritized next-step roadmap",
      ],
      name: "Growth Iteration",
      price: "Scoped after review",
      timeline: "Flexible follow-on block",
    },
  ] satisfies PricingPlan[],
  plansIntro: {
    description:
      "Start with the option that matches your product right now. If you are unsure, discovery is the safest place to begin.",
    eyebrow: "🧠 Common engagement models",
    title: "Choose the option that fits where you are",
  },
  spotlight: {
    description: "No matter which option you choose, the basics stay clear.",
    eyebrow: "Always included",
    items: [
      "Defined scope before work starts",
      "Direct access to the people building",
      "Full code ownership at handoff",
      "A clear recommendation for what comes next",
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
      "This page shows representative product builds that reflect how DevDelta scopes, designs, ships, and hands off launch-ready work.",
    eyebrow: "Previous Work",
    panelDescription:
      "Different products, same operating model: clear scope, AI-assisted delivery, and product decisions that stay grounded in what needs to launch first.",
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
      { label: "Priority", value: "Launch first" },
      { label: "Handoff", value: "Production-ready" },
    ],
    title: "Previous work that shows how DevDelta actually ships",
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
        "A client onboarding SaaS for creative agencies that needed a faster path from signed proposal to active workspace.",
      eyebrow: "Project 01",
      highlights: [
        "Mapped the activation flow around first-value instead of admin setup",
        "Shipped a guided setup experience, client task board, and status dashboard",
        "Used AI-assisted interface iteration and QA to shorten review cycles",
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
        "The team got a demo-ready product with a clearer activation path and a system they could extend without reworking the foundation.",
      title:
        "StudioPilot turned agency onboarding into a guided client workspace",
    },
    {
      cta: {
        href: "/contact-us",
        label: "Plan a similar sprint",
        emoji: "📈",
        hoverEmoji: "🚀",
      },
      description:
        "An AI workflow product for internal operations teams that needed cleaner summaries, follow-up actions, and searchable context after every conversation.",
      eyebrow: "Project 02",
      highlights: [
        "Designed the workflow around reviewable AI output instead of blind automation",
        "Built structured summaries, action capture, and a searchable activity timeline",
        "Kept the first release narrow so the team could test trust before scaling features",
      ],
      imageAlt:
        "Modern workspace with laptop and monitor representing an AI operations workflow product",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?auto=format&fit=crop&w=1600&q=80",
      metrics: [
        { label: "Timeline", value: "100h MVP" },
        { label: "Primary users", value: "Ops teams" },
        { label: "Launch goal", value: "Faster follow-up" },
      ],
      outcome:
        "The first version reduced manual wrap-up work and created a stable base for expanding AI features without confusing the team.",
      title:
        "SignalDesk AI helped teams move from conversation to action much faster",
    },
  ] satisfies ProjectCaseStudy[],
  projectsIntro: {
    description:
      "Two different product types, one consistent delivery pattern: scope tightly, ship the core path, and leave the product in a state that can grow.",
    eyebrow: "Selected projects",
    title: "Representative builds that match our current delivery model",
  },
  spotlight: {
    description:
      "The point is not to make every project look the same. The point is to keep the execution model reliable when the product context changes.",
    eyebrow: "What stays consistent",
    items: [
      "The first release is shaped around a testable outcome, not feature sprawl",
      "AI is used to accelerate iteration, not hide weak product decisions",
      "Design and engineering stay in one loop so quality does not drift",
      "Every build ends with a clean handoff and a clear next-step recommendation",
    ],
    title: "The method scales across different kinds of products",
  } satisfies SpotlightContent,
};

export const contactPage = {
  ctaBanner: {
    cta: {
      href: "mailto:hello@devdelta.studio",
      label: "Email us directly",
      emoji: "💌",
      hoverEmoji: "📨",
    },
    title: "Prefer email over forms? We reply within one business day.",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "If you have a product brief, a rough concept, or just a messy set of notes, we can use our AI-first workflow to turn it into a launchable plan quickly.",
    eyebrow: "💌 Contact Us",
    panelDescription:
      "The fastest way to start is to share the product goal, intended users, and what you need to prove in the first release so we can put AI to work across the sprint immediately.",
    panelEyebrow: "What to send",
    panelTitle: "A clear goal beats a perfect brief every time.",
    primaryCta: {
      href: "mailto:hello@devdelta.studio",
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
    title: "Tell us what you need to launch and we will shape the fastest path",
  } satisfies PageHeroContent,
  methods: [
    {
      cta: {
        href: "mailto:hello@devdelta.studio",
        label: "hello@devdelta.studio",
        emoji: "✉️",
        hoverEmoji: "🚀",
      },
      description:
        "Send a short note, a deck, or a rough brief. We can work from incomplete inputs as long as the goal is clear.",
      eyebrow: "Email",
      title: "Share your product context",
    },
    {
      cta: {
        href: "tel:+14155550147",
        label: "+1 (415) 555-0147",
        emoji: "📞",
        hoverEmoji: "✨",
      },
      description:
        "If you want a direct conversation first, we can use a quick call to align on fit, urgency, and expected scope.",
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
        "Not ready to brief us yet? Review the operating model first and then come back once the timing feels right.",
      eyebrow: "Prep",
      title: "Get familiar with the process",
    },
  ] satisfies ContactMethod[],
  methodsIntro: {
    description:
      "Use whichever starting point feels easiest. The process is designed to reduce friction, and our AI-heavy workflow helps us move from first message to launch plan much faster.",
    eyebrow: "🎉 Start the conversation",
    title: "A few simple ways to reach us",
  },
  spotlight: {
    description:
      "You do not need a polished PRD. A rough idea plus the business context is enough for the first conversation to be useful.",
    eyebrow: "Before you reach out",
    items: [
      "What problem the first release needs to solve",
      "Who the initial users are",
      "What success looks like after launch",
      "Any deadline, budget, or technical constraints we should respect",
    ],
    title:
      "The more concrete the objective, the faster we can shape the sprint",
  } satisfies SpotlightContent,
};
