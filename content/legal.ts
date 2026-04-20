import type { PageHeroContent, SpotlightContent } from "@/content/pages";
import type { CtaBannerContent } from "@/content/site";

export type LegalSection = {
  body: string[];
  title: string;
};

export type LegalPageContent = {
  ctaBanner: CtaBannerContent;
  hero: PageHeroContent;
  sections: LegalSection[];
  spotlight: SpotlightContent;
};

export const termsPage = {
  ctaBanner: {
    cta: {
      href: "/contact-us",
      label: "Discuss a project",
      emoji: "💬",
      hoverEmoji: "🚀",
    },
    title: "Need commercial terms tailored to an actual delivery engagement?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "These terms set the baseline conditions for using the DevDelta website and opening conversations about product, engineering, or consulting work.",
    eyebrow: "Terms",
    panelDescription:
      "This page governs public website use. Client work is governed by a separate proposal, statement of work, master services agreement, or other signed commercial document.",
    panelEyebrow: "How to read this",
    panelTitle:
      "Website terms cover the site. Signed project documents control delivery work.",
    primaryCta: {
      href: "/contact-us",
      label: "Talk about a project",
      emoji: "💬",
      hoverEmoji: "🚀",
    },
    secondaryCta: {
      href: "mailto:karthik@devdelta.co",
      label: "Email a question",
      emoji: "✉️",
      hoverEmoji: "⚡",
    },
    stats: [
      { label: "Applies to", value: "Website use" },
      { label: "Delivery terms", value: "Signed contract" },
      { label: "Commercial scope", value: "Written agreement" },
      { label: "Updates", value: "Published here" },
    ],
    title: "Terms for using the DevDelta site and engaging with the studio",
  } satisfies PageHeroContent,
  sections: [
    {
      title: "Acceptance of these terms",
      body: [
        "By accessing or using the DevDelta website, you agree to these terms. If you do not agree, you should not use the site.",
        "If you later engage DevDelta for project work, the signed engagement documents take precedence over this website page wherever the two overlap.",
      ],
    },
    {
      title: "Use of the website",
      body: [
        "You may use the website to learn about DevDelta, review portfolio material, and contact us about potential work.",
        "You may not use the site to interfere with availability, test for vulnerabilities without authorization, scrape materials for commercial reuse, impersonate another party, or submit unlawful, abusive, or misleading content.",
      ],
    },
    {
      title: "Website content and intellectual property",
      body: [
        "Unless otherwise stated, website copy, design, branding, code, layout, and portfolio presentation are owned by DevDelta or used with permission.",
        "Case studies may describe work completed for clients, but the presentation of those case studies on this site remains part of DevDelta's portfolio and may not be copied or republished for commercial use without written permission.",
      ],
    },
    {
      title: "Project inquiries, proposals, and estimates",
      body: [
        "Any timeline, quote, delivery suggestion, or technical recommendation shared through the website, email, or discovery calls is indicative until confirmed in writing.",
        "A project only starts when both parties accept a written agreement that defines scope, deliverables, assumptions, pricing, payment terms, ownership, dependencies, and change handling.",
      ],
    },
    {
      title: "Scope changes and client responsibilities",
      body: [
        "Unless otherwise specified in writing, the client is responsible for supplying timely feedback, access credentials, source materials, decision-makers, and any necessary third-party approvals needed for delivery.",
        "If scope, integrations, requirements, or timelines change, DevDelta may revise pricing, milestones, or delivery expectations accordingly. Informal conversations do not automatically amend an agreed scope.",
      ],
    },
    {
      title: "Payments and commercial terms",
      body: [
        "General website references to pricing or sprint models are informational and do not create a binding commercial offer.",
        "Actual billing terms, payment schedules, taxes, late-payment treatment, expense treatment, refund position, and suspension rights are defined in the signed engagement documents for each client.",
      ],
    },
    {
      title: "Confidentiality and materials shared through the site",
      body: [
        "Initial inquiries sent through contact forms, email, or direct messages will be treated responsibly, but sensitive projects should not assume a full contractual confidentiality framework exists until an NDA or engagement document is signed.",
        "Once a separate confidentiality obligation is executed, that signed document will govern how confidential information is handled during the relationship.",
      ],
    },
    {
      title: "Third-party services and dependencies",
      body: [
        "Client work may involve third-party platforms, APIs, cloud providers, plugins, payment systems, analytics, or communication tools. DevDelta is not responsible for outages, policy changes, pricing changes, or actions taken by those providers.",
        "Where third-party dependencies materially affect delivery, those constraints should be handled in the commercial scope and technical planning documents.",
      ],
    },
    {
      title: "No warranty for public website materials",
      body: [
        "The website is provided on an as-is and as-available basis. We aim to keep information current and accurate, but we do not guarantee that every page, testimonial placeholder, pricing note, or case-study reference will always be complete, current, or error-free.",
        "Nothing on this website should be treated as legal, tax, procurement, or binding project advice without direct written confirmation.",
      ],
    },
    {
      title: "Limitation of liability",
      body: [
        "To the maximum extent permitted by law, DevDelta is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from use of this website.",
        "Where a client relationship exists, any limitation of liability, warranty, indemnity, and risk allocation will be governed by the signed client agreement, not by this website page.",
      ],
    },
    {
      title: "Suspension, termination, and enforcement",
      body: [
        "DevDelta may restrict or block access to the site where misuse, abuse, security issues, or unlawful activity is suspected.",
        "We may also take reasonable action to protect systems, intellectual property, personnel, and commercial interests where necessary.",
      ],
    },
    {
      title: "Changes to these terms",
      body: [
        "We may update these terms from time to time. The latest version published on this page applies to future use of the website after publication.",
      ],
    },
  ],
  spotlight: {
    description:
      "For a software studio like DevDelta, the website sets expectations, but the real legal and commercial rules live in the signed project paperwork.",
    eyebrow: "What usually matters",
    items: [
      "Website copy does not replace a statement of work or services agreement",
      "Scope, pricing, timelines, and ownership are finalized in writing",
      "Sensitive disclosures should move under NDA or contract quickly",
      "Third-party tools and APIs can affect delivery and need to be scoped explicitly",
    ],
    title: "Use the site to start the conversation, not to infer the contract",
  } satisfies SpotlightContent,
} satisfies LegalPageContent;

export const privacyPage = {
  ctaBanner: {
    cta: {
      href: "mailto:karthik@devdelta.co",
      label: "Ask about data handling",
      emoji: "🔐",
      hoverEmoji: "✉️",
    },
    title: "Need a direct answer about how inquiry data is handled?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "This page explains what information DevDelta may collect through the website, why it is used, and how it may be stored, shared, and protected.",
    eyebrow: "Privacy",
    panelDescription:
      "For active client work, additional confidentiality, security, and data-processing obligations may be set out in the contract, NDA, or procurement documents.",
    panelEyebrow: "What this covers",
    panelTitle:
      "Website inquiry data, analytics information, and operational privacy handling.",
    primaryCta: {
      href: "mailto:karthik@devdelta.co",
      label: "Email a privacy question",
      emoji: "✉️",
      hoverEmoji: "⚡",
    },
    secondaryCta: {
      href: "/cookies",
      label: "Read cookie policy",
      emoji: "🍪",
      hoverEmoji: "👀",
    },
    stats: [
      { label: "Personal data", value: "Inquiry details" },
      { label: "Usage data", value: "Basic analytics" },
      { label: "Sold to others", value: "No" },
      { label: "Rights requests", value: "Email us" },
    ],
    title:
      "How DevDelta handles personal information collected through the site",
  } satisfies PageHeroContent,
  sections: [
    {
      title: "Information we may collect",
      body: [
        "If you contact DevDelta, we may collect information you choose to provide, including your name, email address, phone number, company, job title, project requirements, budget context, timelines, and any files or materials you send.",
        "We may also collect limited technical information such as browser type, operating system, device information, referral source, approximate location, page views, session activity, and general interaction signals used for site operations and analytics.",
      ],
    },
    {
      title: "How the information is used",
      body: [
        "Inquiry information may be used to respond to requests, assess project fit, prepare estimates or proposals, schedule calls, maintain a sales pipeline, and support future client communications.",
        "Technical and analytics information may be used to understand traffic patterns, improve site content, identify broken experiences, protect against abuse, and make product and marketing decisions.",
      ],
    },
    {
      title: "Lawful basis and business rationale",
      body: [
        "Where applicable, DevDelta processes information because it is necessary to respond to an inquiry, pursue legitimate business interests, operate the site, comply with legal obligations, or perform steps requested before entering into a contract.",
        "In limited cases, specific consent may be relied on, such as where optional analytics or tracking preferences are offered.",
      ],
    },
    {
      title: "How information is shared",
      body: [
        "We do not sell personal information. Information may be shared with trusted vendors or service providers that support hosting, analytics, scheduling, communication, CRM, storage, or operational administration where reasonably necessary.",
        "Information may also be disclosed where required by law, regulation, court order, audit requirement, or where reasonably necessary to protect rights, systems, people, contracts, or business operations.",
      ],
    },
    {
      title: "International handling and transfers",
      body: [
        "Because modern software operations may involve cloud, communication, or analytics tools operated from multiple regions, personal information may be processed or stored outside your immediate jurisdiction.",
        "Where this occurs, DevDelta aims to use reputable providers and reasonable safeguards appropriate to the scale of the business and the nature of the information involved.",
      ],
    },
    {
      title: "Retention and data minimization",
      body: [
        "Inquiry and communication records are retained only as long as reasonably necessary for follow-up, business development, legal compliance, accounting, dispute resolution, or legitimate record-keeping.",
        "If an inquiry does not convert into a project, we may eventually delete or archive the information unless retention is reasonably required for operational or legal reasons.",
      ],
    },
    {
      title: "Security and confidentiality",
      body: [
        "DevDelta uses reasonable administrative, technical, and operational measures to protect information against unauthorized access, loss, misuse, or disclosure.",
        "No system, transmission channel, inbox, or cloud provider can be guaranteed completely secure, so sensitive information should be shared carefully until a formal engagement and security posture are in place.",
      ],
    },
    {
      title: "Your rights and choices",
      body: [
        "Subject to applicable law, you may ask to access, correct, update, or delete personal information associated with your inquiry, or ask questions about how the information is being used.",
        "You may also limit analytics or cookie use through browser settings, blocking tools, or consent controls where available.",
      ],
    },
    {
      title: "Children and sensitive information",
      body: [
        "The DevDelta website is intended for business and professional audiences, not children. We do not intentionally market to or knowingly collect information from children through the site.",
        "Please avoid submitting highly sensitive personal information through open website channels unless specifically requested and appropriately protected.",
      ],
    },
    {
      title: "Policy updates",
      body: [
        "We may revise this privacy page from time to time. The latest version posted here applies after publication.",
      ],
    },
  ],
  spotlight: {
    description:
      "A company like DevDelta mainly uses data to respond to leads, run operations, and understand site usage, not to build a consumer data business.",
    eyebrow: "In plain language",
    items: [
      "Inquiry details are used to respond, qualify, and manage sales conversations",
      "Basic analytics may be used to improve the site and understand content performance",
      "Personal information is not sold",
      "Client contracts may impose stronger confidentiality, privacy, and security rules than this public page",
    ],
    title:
      "Operational use of data, with contract-grade protections added when needed",
  } satisfies SpotlightContent,
} satisfies LegalPageContent;

export const cookiesPage = {
  ctaBanner: {
    cta: {
      href: "mailto:karthik@devdelta.co",
      label: "Ask about cookies",
      emoji: "🍪",
      hoverEmoji: "✉️",
    },
    title: "Need clarification on cookies, analytics, or tracking behavior?",
  } satisfies CtaBannerContent,
  hero: {
    description:
      "This page explains how cookies and similar technologies may be used on the DevDelta website for functionality, measurement, and improvement.",
    eyebrow: "Cookies",
    panelDescription:
      "Cookies may support essential website behavior, performance measurement, referral attribution, and understanding how visitors navigate the site.",
    panelEyebrow: "What they do",
    panelTitle:
      "Cookies help the site work properly and help us understand what content is useful.",
    primaryCta: {
      href: "mailto:karthik@devdelta.co",
      label: "Ask a question",
      emoji: "✉️",
      hoverEmoji: "⚡",
    },
    secondaryCta: {
      href: "/privacy",
      label: "Read privacy page",
      emoji: "🔐",
      hoverEmoji: "👀",
    },
    stats: [
      { label: "Essential cookies", value: "Possible" },
      { label: "Analytics cookies", value: "Possible" },
      { label: "Marketing cookies", value: "Limited if used" },
      { label: "Controls", value: "Browser or consent settings" },
    ],
    title: "How cookies and similar technologies may be used on the site",
  } satisfies PageHeroContent,
  sections: [
    {
      title: "What cookies are",
      body: [
        "Cookies are small data files stored on your device when you visit a website. Similar technologies can include local storage, pixels, SDK-based identifiers, scripts, or server-side session mechanisms used for functionality or measurement.",
      ],
    },
    {
      title: "Categories of cookies we may use",
      body: [
        "Essential cookies may be used to support core website functionality, security, routing, session continuity, and basic performance.",
        "Analytics or measurement cookies may be used to understand traffic sources, page engagement, navigation behavior, content effectiveness, and general site usage trends.",
        "Preference cookies may be used to remember settings or consent choices where those controls are implemented.",
        "Marketing or attribution-related cookies are not the core purpose of the site, but limited campaign attribution or referral measurement may be used where relevant.",
      ],
    },
    {
      title: "How cookies may be used by DevDelta",
      body: [
        "Cookies and similar tools may be used to understand which pages attract attention, how visitors move through the site, which channels generate inquiries, and where the website needs performance or usability improvements.",
        "They may also help maintain reliable site behavior and prevent repeated or unnecessary processing of the same tasks.",
      ],
    },
    {
      title: "Third-party services",
      body: [
        "If third-party analytics, hosting, form providers, scheduling tools, embedded media, or other external services are used, those providers may set or access cookies according to their own policies.",
        "Those providers operate under their own privacy notices and terms, so their practices should be reviewed directly where relevant.",
      ],
    },
    {
      title: "Duration and storage",
      body: [
        "Some cookies may persist only for the duration of a session, while others may remain for a longer period depending on their function, your browser settings, and the behavior of any third-party service involved.",
      ],
    },
    {
      title: "Your controls",
      body: [
        "Most browsers allow you to block, delete, or limit cookies. You can also configure browser privacy settings, use extensions, or clear stored site data manually.",
        "If a consent banner or preference center is implemented, you may also be able to manage optional cookie categories there.",
        "Blocking some cookies may affect site performance, analytics accuracy, or certain convenience features.",
      ],
    },
    {
      title: "Updates to this page",
      body: [
        "This cookie page may be updated as site tooling, analytics usage, or provider choices change over time.",
      ],
    },
  ],
  spotlight: {
    description:
      "For a business website like DevDelta, cookies are generally operational and measurement-oriented rather than aggressive consumer profiling tools.",
    eyebrow: "What usually matters",
    items: [
      "Essential site behavior may rely on cookies or similar storage",
      "Analytics can help understand what content drives useful inquiries",
      "Third-party tools may introduce their own cookie behavior",
      "Visitors can usually limit cookie use through browser or consent controls",
    ],
    title:
      "Operational measurement, limited tracking, and user control where possible",
  } satisfies SpotlightContent,
} satisfies LegalPageContent;
