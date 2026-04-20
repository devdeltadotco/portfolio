export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectReview = {
  author: string;
  company: string;
  isPlaceholder?: boolean;
  note?: string;
  quote: string;
  role: string;
};

export type ProjectVisual = {
  accentFrom: string;
  accentTo: string;
  label: string;
  pattern: "beams" | "grid" | "nodes" | "orbits" | "pulse";
  tags: string[];
};

export type PortfolioProject = {
  category: string;
  challenge: string;
  client: string;
  description: string;
  featured?: boolean;
  highlights: string[];
  outcome: string;
  review: ProjectReview;
  services: string[];
  slug: string;
  stack: string[];
  summary: string;
  title: string;
  visual: ProjectVisual;
  metrics: ProjectMetric[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    category: "Content platform",
    challenge:
      "Umbrix needed a publishing system that made Microsoft-focused articles easier to draft, organize, and maintain without slowing editorial teams down.",
    client: "Umbrix",
    description:
      "A content management workspace for writing, structuring, and managing articles around Microsoft products and cloud services.",
    featured: true,
    highlights: [
      "Editorial workflow tuned for technical Microsoft content",
      "Structured article management for drafts, revisions, and publishing",
      "Search-first experience for large knowledge collections",
    ],
    metrics: [
      { label: "Platform type", value: "CMS" },
      { label: "Focus", value: "Microsoft content" },
      { label: "Experience", value: "Editorial operations" },
    ],
    outcome:
      "The product turned scattered content operations into a dedicated workspace for publishing and maintaining Microsoft service knowledge at scale.",
    review: {
      author: "Founder or editorial lead",
      company: "Umbrix",
      isPlaceholder: true,
      note: "Replace with an approved client quote.",
      quote:
        "Placeholder review: add a founder quote here about publishing speed, editorial clarity, and the value of a structured Microsoft content workflow.",
      role: "Placeholder testimonial",
    },
    services: ["Product design", "CMS architecture", "Workflow design"],
    slug: "umbrix",
    stack: ["Next.js", "TypeScript", "Node.js", "Azure", "Search indexing"],
    summary:
      "A Microsoft-focused CMS built to help editorial teams publish and manage technical content with less friction.",
    title: "Umbrix",
    visual: {
      accentFrom: "#2563eb",
      accentTo: "#38bdf8",
      label: "Microsoft publishing",
      pattern: "grid",
      tags: ["CMS", "Articles", "Microsoft"],
    },
  },
  {
    category: "Data intelligence",
    challenge:
      "Government stakeholders needed a clearer way to understand public sentiment from social channels without depending on static reports.",
    client: "Bangladesh Government",
    description:
      "A social media sentiment analysis platform with data visualization built on AWS, Elasticsearch, and Kibana.",
    featured: true,
    highlights: [
      "Centralized sentiment signals for public-facing monitoring",
      "Dashboards shaped for reporting instead of raw log inspection",
      "Elastic tooling used for search, filters, and visual trend analysis",
    ],
    metrics: [
      { label: "Cloud", value: "AWS" },
      { label: "Analytics", value: "Kibana" },
      { label: "Search", value: "Elasticsearch" },
    ],
    outcome:
      "Teams gained a faster way to monitor public sentiment, surface narrative shifts, and review trend data in one operational dashboard.",
    review: {
      author: "Program stakeholder",
      company: "Bangladesh Government",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a stakeholder quote here about sentiment visibility, faster reporting, and the usefulness of Kibana-based dashboards.",
      role: "Placeholder testimonial",
    },
    services: ["Data visualization", "Search architecture", "Analytics UX"],
    slug: "sentiment-analysis",
    stack: ["AWS", "Python", "Elasticsearch", "Kibana", "NLP pipelines"],
    summary:
      "A sentiment intelligence dashboard that transformed social media signals into searchable, reportable insight.",
    title: "Sentiment Analysis",
    visual: {
      accentFrom: "#f97316",
      accentTo: "#fb7185",
      label: "Public sentiment intelligence",
      pattern: "pulse",
      tags: ["Analytics", "Social", "GovTech"],
    },
  },
  {
    category: "Mobility commerce",
    challenge:
      "Stayhalo needed one consumer journey that could bridge open networks, booking flows, and multiple transport or ticketing services.",
    client: "Stayhalo",
    description:
      "An Open Kochi initiative that connects open network experiences for booking Wonderla tickets, cabs, and metro travel.",
    featured: true,
    highlights: [
      "Unified booking flows across separate service types",
      "Consumer experience shaped around quick trip planning",
      "Open-network friendly architecture for partner integrations",
    ],
    metrics: [
      { label: "Use case", value: "Tickets + mobility" },
      { label: "Model", value: "Open networks" },
      { label: "Region", value: "Kochi" },
    ],
    outcome:
      "The product created a more connected city-booking experience by bringing leisure and transport actions into one user-facing flow.",
    review: {
      author: "Program founder",
      company: "Stayhalo",
      isPlaceholder: true,
      note: "Replace with an approved founder quote.",
      quote:
        "Placeholder review: add a founder quote here about simplifying booking journeys across metro, cabs, and destination tickets.",
      role: "Placeholder testimonial",
    },
    services: ["Platform design", "Integration architecture", "Transaction UX"],
    slug: "stayhalo",
    stack: ["React", "Node.js", "PostgreSQL", "Payments", "Open network APIs"],
    summary:
      "A connected mobility and ticketing product for booking city transport and destination experiences from one place.",
    title: "Stayhalo",
    visual: {
      accentFrom: "#14b8a6",
      accentTo: "#22c55e",
      label: "Connected city booking",
      pattern: "orbits",
      tags: ["Travel", "Mobility", "Tickets"],
    },
  },
  {
    category: "Public sector content",
    challenge:
      "The initiative needed a presentable public landing page plus a back-office way to manage stories and campaign updates.",
    client: "Janatar Sarkar",
    description:
      "A landing page to showcase Bangladesh Government initiatives with a management flow for posts and updates.",
    highlights: [
      "Public-facing communication layer for initiatives and announcements",
      "Simple post management workflow for internal teams",
      "Content structure tuned for campaigns and government updates",
    ],
    metrics: [
      { label: "Surface", value: "Landing page + CMS" },
      { label: "Audience", value: "Public sector" },
      { label: "Goal", value: "Program visibility" },
    ],
    outcome:
      "The site gave the initiative a clearer digital front door and a manageable publishing flow for frequent campaign content.",
    review: {
      author: "Program lead",
      company: "Janatar Sarkar",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about campaign visibility, easier content publishing, and a cleaner digital presence.",
      role: "Placeholder testimonial",
    },
    services: [
      "Landing page design",
      "Content management",
      "Public communication",
    ],
    slug: "janatar-sarkar",
    stack: ["Next.js", "TypeScript", "CMS", "SEO", "Content workflows"],
    summary:
      "A public initiative website paired with a lightweight publishing system for ongoing government communications.",
    title: "Janatar Sarkar",
    visual: {
      accentFrom: "#0f766e",
      accentTo: "#f59e0b",
      label: "Initiative showcase",
      pattern: "beams",
      tags: ["Landing", "Posts", "GovTech"],
    },
  },
  {
    category: "Operations platform",
    challenge:
      "Avigna needed a tool that could coordinate fleet movement and order workflows across Shell petrol bunk operations in Karnataka.",
    client: "Avigna Enterprises",
    description:
      "A fleet and order management application for Shell petrol bunks operating across Karnataka.",
    highlights: [
      "Operational dashboard for dispatch and order visibility",
      "Workflow support for transport coordination and fulfillment",
      "Internal tooling focused on field execution accuracy",
    ],
    metrics: [
      { label: "Domain", value: "Fleet + orders" },
      { label: "Sector", value: "Fuel retail" },
      { label: "Region", value: "Karnataka" },
    ],
    outcome:
      "The tool gave operations teams a more reliable way to coordinate asset movement and track business-critical order flow.",
    review: {
      author: "Operations stakeholder",
      company: "Avigna Enterprises",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about fleet coordination, order tracking, and day-to-day operational visibility.",
      role: "Placeholder testimonial",
    },
    services: ["Internal tools", "Operations UX", "Workflow automation"],
    slug: "avigna-enterprises",
    stack: ["React", "Node.js", "PostgreSQL", "Maps", "Order workflows"],
    summary:
      "An internal operations platform for coordinating orders and fleet activity across fuel retail operations.",
    title: "Avigna Enterprises",
    visual: {
      accentFrom: "#dc2626",
      accentTo: "#f59e0b",
      label: "Fleet operations",
      pattern: "nodes",
      tags: ["Fleet", "Orders", "Shell"],
    },
  },
  {
    category: "AI extension",
    challenge:
      "Mindo needed an extension experience that could turn raw LinkedIn profile data into immediate, usable insight powered by GPT-4.",
    client: "Mindo",
    description:
      "A LinkedIn Chrome extension that uses ChatGPT 4 to analyze profiles and surface insights directly inside the browser.",
    highlights: [
      "Browser extension UX built around in-context profile analysis",
      "AI-assisted summaries surfaced without leaving LinkedIn",
      "Workflow optimized for quick recruiter or sales review",
    ],
    metrics: [
      { label: "Surface", value: "Chrome extension" },
      { label: "AI", value: "GPT-4" },
      { label: "Context", value: "LinkedIn profiles" },
    ],
    outcome:
      "The extension shortened the distance between viewing a profile and understanding its relevance, fit, or outreach angle.",
    review: {
      author: "Founder",
      company: "Mindo",
      isPlaceholder: true,
      note: "Replace with an approved founder quote.",
      quote:
        "Placeholder review: add a founder quote here about making LinkedIn profile review faster and more actionable with AI.",
      role: "Placeholder testimonial",
    },
    services: ["Extension UX", "AI workflow design", "Product engineering"],
    slug: "mindo",
    stack: ["React", "TypeScript", "Chrome Extensions", "OpenAI", "Node.js"],
    summary:
      "A GPT-4 powered browser extension that turns LinkedIn profiles into faster, clearer decision-making input.",
    title: "Mindo",
    visual: {
      accentFrom: "#1d4ed8",
      accentTo: "#8b5cf6",
      label: "AI profile analysis",
      pattern: "pulse",
      tags: ["Extension", "AI", "LinkedIn"],
    },
  },
  {
    category: "Workforce visibility",
    challenge:
      "Project managers and leadership teams needed a clearer way to understand employee availability, meeting load, and coordination signals inside Microsoft Teams.",
    client: "Presence",
    description:
      "A Microsoft Teams extension that collects employee availability, meetings, and related collaboration signals from the Microsoft Graph API and visualizes them on a dashboard for project managers and leadership teams.",
    highlights: [
      "Teams extension tailored for availability and meeting intelligence",
      "Graph API data transformed into a dashboard for project oversight",
      "Visibility layer designed for project managers and top-level team leads",
    ],
    metrics: [
      { label: "Platform", value: "Microsoft Teams" },
      { label: "Data source", value: "Microsoft Graph API" },
      { label: "Primary users", value: "Managers and leadership" },
    ],
    outcome:
      "The product turned scattered collaboration data into a more usable planning view for teams that needed to understand capacity, meeting patterns, and operational availability.",
    review: {
      author: "Founder or product lead",
      company: "Presence",
      isPlaceholder: true,
      note: "Replace with an approved founder quote.",
      quote:
        "Placeholder review: add a founder quote here about giving project managers clearer visibility into availability, meeting load, and team coordination patterns.",
      role: "Placeholder testimonial",
    },
    services: [
      "Teams extension development",
      "Dashboard design",
      "Microsoft Graph integration",
    ],
    slug: "presence",
    stack: [
      "Microsoft Teams",
      "Microsoft Graph API",
      "React",
      "TypeScript",
      "Dashboard analytics",
    ],
    summary:
      "A Teams extension that converted Graph API collaboration signals into a dashboard for understanding employee availability and meeting load.",
    title: "Presence",
    visual: {
      accentFrom: "#4f46e5",
      accentTo: "#0ea5e9",
      label: "Team availability intelligence",
      pattern: "grid",
      tags: ["Teams", "Graph API", "Dashboard"],
    },
  },
  {
    category: "Marketing site",
    challenge:
      "Livesloka needed a front door that explained the brand clearly and supported lead generation for a broader product ecosystem.",
    client: "Livesloka",
    description:
      "A branded landing page designed to introduce the Livesloka offering and support inbound acquisition.",
    highlights: [
      "Messaging-led landing structure for first-time visitors",
      "Sections designed for conversion and service clarity",
      "Foundation prepared for growth into a larger product suite",
    ],
    metrics: [
      { label: "Type", value: "Landing page" },
      { label: "Goal", value: "Lead generation" },
      { label: "Focus", value: "Brand clarity" },
    ],
    outcome:
      "The landing page gave Livesloka a cleaner narrative, stronger first impression, and a more usable acquisition surface.",
    review: {
      author: "Founder",
      company: "Livesloka",
      isPlaceholder: true,
      note: "Replace with an approved founder quote.",
      quote:
        "Placeholder review: add a founder quote here about brand presentation, lead quality, and first-impression clarity.",
      role: "Placeholder testimonial",
    },
    services: [
      "Landing page design",
      "Messaging architecture",
      "Frontend build",
    ],
    slug: "livesloka-landing-page",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "CMS-ready content",
    ],
    summary:
      "A conversion-oriented landing page that gave Livesloka a stronger, clearer digital introduction.",
    title: "Livesloka Landing Page",
    visual: {
      accentFrom: "#9333ea",
      accentTo: "#ec4899",
      label: "Brand launch surface",
      pattern: "beams",
      tags: ["Brand", "Landing", "Leads"],
    },
  },
  {
    category: "Business platform",
    challenge:
      "Livesloka needed one system that could manage customer relationships, accounting, scheduling, payments, and online classes without fragmenting operations.",
    client: "Livesloka",
    description:
      "A CRM application for customer management, accounting, scheduling, payment workflows, and online class operations.",
    highlights: [
      "Operational modules brought into one workflow-heavy application",
      "Scheduling and payments connected to day-to-day service delivery",
      "CRM designed around ongoing customer lifecycle management",
    ],
    metrics: [
      { label: "Modules", value: "CRM + finance + scheduling" },
      { label: "Payments", value: "Integrated" },
      { label: "Delivery", value: "Online classes" },
    ],
    outcome:
      "The application reduced operational fragmentation by moving customer management, finance, and scheduling into one platform.",
    review: {
      author: "Founder",
      company: "Livesloka",
      isPlaceholder: true,
      note: "Replace with an approved founder quote.",
      quote:
        "Placeholder review: add a founder quote here about consolidating customer, class, and payment workflows into a single product.",
      role: "Placeholder testimonial",
    },
    services: ["CRM design", "Workflow systems", "Payments integration"],
    slug: "livesloka-crm-application",
    stack: ["React", "Node.js", "PostgreSQL", "Payments", "Scheduling"],
    summary:
      "A multi-module CRM platform that unified customer operations, finance, and class management into one system.",
    title: "Livesloka CRM Application",
    visual: {
      accentFrom: "#7c3aed",
      accentTo: "#22c55e",
      label: "CRM operations core",
      pattern: "grid",
      tags: ["CRM", "Payments", "Classes"],
    },
  },
  {
    category: "E-commerce",
    challenge:
      "Mom's Food needed a reliable ordering experience that could support discovery, checkout, and fulfillment for an online food business.",
    client: "Mom's Food",
    description:
      "An online e-commerce application built for food ordering, checkout, and customer purchase flow management.",
    highlights: [
      "Customer ordering flow tuned for repeat purchases",
      "Catalog and checkout experience shaped for food commerce",
      "Operational foundation prepared for order and payment handling",
    ],
    metrics: [
      { label: "Type", value: "Food commerce" },
      { label: "Journey", value: "Catalog to checkout" },
      { label: "Goal", value: "Online ordering" },
    ],
    outcome:
      "The product gave the business a direct online sales channel with a cleaner customer path from menu discovery to order confirmation.",
    review: {
      author: "Business owner",
      company: "Mom's Food",
      isPlaceholder: true,
      note: "Replace with an approved client quote.",
      quote:
        "Placeholder review: add a founder quote here about making food ordering easier and giving customers a smoother checkout flow.",
      role: "Placeholder testimonial",
    },
    services: ["Commerce UX", "Checkout design", "Ordering workflows"],
    slug: "moms-food",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Payments", "Order management"],
    summary:
      "A food ordering commerce experience designed to make browsing, checkout, and repeat orders straightforward.",
    title: "Mom's Food",
    visual: {
      accentFrom: "#f97316",
      accentTo: "#ef4444",
      label: "Food ordering",
      pattern: "orbits",
      tags: ["E-commerce", "Food", "Checkout"],
    },
  },
  {
    category: "Civic registration",
    challenge:
      "The caucus process needed a dependable digital registration flow that could handle voter intake cleanly and clearly.",
    client: "Utah Republican Caucus",
    description:
      "A portal created to register participants for the Utah Republican Caucus.",
    highlights: [
      "Registration workflow tuned for event-based voter intake",
      "Simple portal UX focused on fast completion",
      "Structured participant data capture for later verification",
    ],
    metrics: [
      { label: "Type", value: "Registration portal" },
      { label: "Audience", value: "Caucus participants" },
      { label: "Use", value: "State event intake" },
    ],
    outcome:
      "The portal gave organizers a clearer digital registration channel for caucus participation and downstream attendance handling.",
    review: {
      author: "Program organizer",
      company: "Utah Republican Caucus",
      isPlaceholder: true,
      note: "Replace with an approved organizer quote.",
      quote:
        "Placeholder review: add a quote here about registration reliability, participant throughput, and the value of a streamlined intake portal.",
      role: "Placeholder testimonial",
    },
    services: ["Portal UX", "Event registration", "Data capture"],
    slug: "utah-republican-caucus-registration",
    stack: [
      "React",
      ".NET",
      "SQL Server",
      "Email notifications",
      "Form workflows",
    ],
    summary:
      "A registration portal that digitized caucus participant intake with a simpler, more dependable submission flow.",
    title: "Utah Republican Caucus Registration",
    visual: {
      accentFrom: "#1d4ed8",
      accentTo: "#ef4444",
      label: "Civic registration",
      pattern: "nodes",
      tags: ["Portal", "Registration", "Civic"],
    },
  },
  {
    category: "Event operations",
    challenge:
      "Organizers needed a fast entry tool that could verify attendance statewide using QR code scans without creating bottlenecks at check-in.",
    client: "Utah Republican Caucus",
    description:
      "A QR-driven entry application used to scan, verify, and list all attendees across caucus events in Utah.",
    highlights: [
      "Entry operations optimized for scan-and-verify speed",
      "Attendance data surfaced in one statewide view",
      "Check-in workflow designed for high-volume event moments",
    ],
    metrics: [
      { label: "Check-in", value: "QR based" },
      { label: "Coverage", value: "Statewide" },
      { label: "Use case", value: "Attendance tracking" },
    ],
    outcome:
      "The application reduced friction at event entry and gave organizers a clearer statewide record of verified attendance.",
    review: {
      author: "Operations lead",
      company: "Utah Republican Caucus",
      isPlaceholder: true,
      note: "Replace with an approved organizer quote.",
      quote:
        "Placeholder review: add a quote here about scan speed, attendance visibility, and smoother entry operations on event day.",
      role: "Placeholder testimonial",
    },
    services: ["QR workflows", "Event operations", "Verification tooling"],
    slug: "caucus-entry-application",
    stack: [
      "React",
      ".NET",
      "QR scanning",
      "Live reporting",
      "Operational dashboards",
    ],
    summary:
      "A QR-based event entry tool that helped caucus organizers verify and report attendance at scale.",
    title: "Caucus Entry Application",
    visual: {
      accentFrom: "#0f172a",
      accentTo: "#22c55e",
      label: "Scan + verify",
      pattern: "pulse",
      tags: ["QR", "Entry", "Attendance"],
    },
  },
  {
    category: "OTT platform",
    challenge:
      "SPOTV needed a streaming product that could package Korean sports and event content into a consumer-ready OTT experience.",
    client: "SPOTV",
    description:
      "An OTT platform for Korean sports and event streaming with a consumer-facing viewing experience.",
    highlights: [
      "Streaming experience shaped around premium sports content",
      "Content browsing and playback flow designed for OTT use",
      "Platform foundation prepared for connected content operations",
    ],
    metrics: [
      { label: "Type", value: "OTT platform" },
      { label: "Content", value: "Korean sports" },
      { label: "Audience", value: "Subscribers" },
    ],
    outcome:
      "The platform created a dedicated streaming destination for sports and event content with a clearer user path into playback.",
    review: {
      author: "Product lead",
      company: "SPOTV",
      isPlaceholder: true,
      note: "Replace with an approved product quote.",
      quote:
        "Placeholder review: add a stakeholder quote here about content discovery, playback quality, and OTT launch readiness.",
      role: "Placeholder testimonial",
    },
    services: ["Streaming UX", "Frontend engineering", "Platform architecture"],
    slug: "spotv-ott-platform",
    stack: ["React", "Video streaming", "CDN", "Subscriptions", "Playback UX"],
    summary:
      "A sports-focused OTT experience built to showcase premium Korean events and guide users smoothly into streaming.",
    title: "SPOTV",
    visual: {
      accentFrom: "#2563eb",
      accentTo: "#ec4899",
      label: "Sports streaming",
      pattern: "beams",
      tags: ["OTT", "Streaming", "Sports"],
    },
  },
  {
    category: "Media operations",
    challenge:
      "SPOTV's content team needed a back-office system to keep landing page updates and content operations manageable.",
    client: "SPOTV",
    description:
      "A CMS built to manage the content shown across the SPOTV landing experience.",
    highlights: [
      "Editorial controls created for marketing and homepage operations",
      "Content publishing tuned for media scheduling needs",
      "Admin experience designed for repeat campaign updates",
    ],
    metrics: [
      { label: "Type", value: "CMS" },
      { label: "Audience", value: "Internal content teams" },
      { label: "Purpose", value: "Landing page control" },
    ],
    outcome:
      "The CMS gave non-engineering teams a more direct way to manage landing content and respond to campaign needs faster.",
    review: {
      author: "Content lead",
      company: "SPOTV",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a stakeholder quote here about faster updates, easier campaign changes, and better editorial control.",
      role: "Placeholder testimonial",
    },
    services: ["CMS design", "Admin UX", "Content operations"],
    slug: "spotv-cms",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "CMS architecture",
      "Editorial workflows",
    ],
    summary:
      "A content operations workspace that gave SPOTV's internal teams more direct control over landing page updates.",
    title: "SPOTV CMS",
    visual: {
      accentFrom: "#7c3aed",
      accentTo: "#3b82f6",
      label: "Media content control",
      pattern: "grid",
      tags: ["CMS", "Media", "Marketing"],
    },
  },
  {
    category: "Marketing site",
    challenge:
      "SPOTV also needed a landing surface that could present the product clearly, support acquisition, and stay aligned with streaming campaigns.",
    client: "SPOTV",
    description:
      "A landing page built to showcase SPOTV Now and communicate the product to prospective viewers.",
    highlights: [
      "Marketing page architecture built around subscription intent",
      "Visual direction tuned for premium sports entertainment",
      "Content structure aligned with campaign-driven updates",
    ],
    metrics: [
      { label: "Type", value: "Landing page" },
      { label: "Goal", value: "Viewer acquisition" },
      { label: "Brand", value: "SPOTV Now" },
    ],
    outcome:
      "The landing page gave SPOTV Now a sharper acquisition surface and a clearer way to position premium streaming content.",
    review: {
      author: "Marketing lead",
      company: "SPOTV",
      isPlaceholder: true,
      note: "Replace with an approved marketing quote.",
      quote:
        "Placeholder review: add a quote here about brand presentation, campaign execution, and a stronger streaming product narrative.",
      role: "Placeholder testimonial",
    },
    services: ["Landing page design", "Brand presentation", "Campaign UX"],
    slug: "spotv-landing-page",
    stack: ["Next.js", "TypeScript", "SEO", "Motion design", "CMS integration"],
    summary:
      "A branded acquisition page built to showcase SPOTV Now with more energy, clarity, and marketing flexibility.",
    title: "SPOTV Landing Page",
    visual: {
      accentFrom: "#0f172a",
      accentTo: "#3b82f6",
      label: "Streaming acquisition",
      pattern: "beams",
      tags: ["Landing", "Sports", "Brand"],
    },
  },
  {
    category: "Microsoft ecosystem",
    challenge:
      "DAENIT needed commercial SharePoint experiences that felt polished, extensible, and aligned with Microsoft 365 usage patterns.",
    client: "DAENIT",
    description:
      "Commercial SharePoint web parts and pages designed for structured business use within the Microsoft ecosystem.",
    highlights: [
      "SharePoint components designed for reusable enterprise use",
      "Page experiences tailored to Microsoft 365 environments",
      "Delivery focused on commercial-grade polish and maintainability",
    ],
    metrics: [
      { label: "Platform", value: "SharePoint" },
      { label: "Deliverable", value: "Web parts + pages" },
      { label: "Context", value: "Commercial M365" },
    ],
    outcome:
      "The work produced reusable SharePoint experiences that better matched commercial expectations for usability and presentation.",
    review: {
      author: "Stakeholder",
      company: "DAENIT",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about SharePoint usability, polish, and the value of reusable web parts for the business.",
      role: "Placeholder testimonial",
    },
    services: [
      "SharePoint development",
      "Enterprise UI",
      "Microsoft 365 delivery",
    ],
    slug: "daenit",
    stack: ["SPFx", "React", "TypeScript", "SharePoint", "Microsoft 365"],
    summary:
      "Commercial SharePoint components built to deliver better enterprise experiences inside Microsoft 365.",
    title: "DAENIT",
    visual: {
      accentFrom: "#0ea5e9",
      accentTo: "#22c55e",
      label: "SharePoint delivery",
      pattern: "nodes",
      tags: ["SPFx", "SharePoint", "M365"],
    },
  },
  {
    category: "Embedded finance",
    challenge:
      "Alto IRA needed a lightweight embeddable experience that let users start crypto investment actions without forcing a full product handoff.",
    client: "Alto IRA",
    description:
      "An embeddable JavaScript widget that enables crypto investment purchase flows inside partner or client surfaces.",
    highlights: [
      "Embeddable widget architecture for partner integration",
      "Investment flow designed for low-friction entry",
      "Frontend system packaged for reuse across host surfaces",
    ],
    metrics: [
      { label: "Format", value: "Embeddable widget" },
      { label: "Domain", value: "Crypto IRA" },
      { label: "Goal", value: "Investment initiation" },
    ],
    outcome:
      "The widget gave Alto IRA a more flexible way to distribute crypto investment flows into other product environments.",
    review: {
      author: "Product stakeholder",
      company: "Alto IRA",
      isPlaceholder: true,
      note: "Replace with an approved client quote.",
      quote:
        "Placeholder review: add a quote here about partner integration speed, conversion flow quality, and the value of an embeddable experience.",
      role: "Placeholder testimonial",
    },
    services: [
      "Embeddable UX",
      "JavaScript SDK work",
      "Fintech product engineering",
    ],
    slug: "alto-ira",
    stack: [
      "JavaScript",
      "TypeScript",
      "Widget architecture",
      "APIs",
      "Fintech flows",
    ],
    summary:
      "An embeddable crypto investment widget designed to bring Alto IRA actions into partner-facing products.",
    title: "Alto IRA",
    visual: {
      accentFrom: "#16a34a",
      accentTo: "#22c55e",
      label: "Embedded crypto investing",
      pattern: "orbits",
      tags: ["Widget", "Crypto", "Fintech"],
    },
  },
  {
    category: "Operations sync",
    challenge:
      "Rollzi Pace needed to reconcile fleet and asset workflows across multiple services without forcing teams into disconnected tools.",
    client: "Rollzi Pace",
    description:
      "A fleet and asset management tool built to synchronize data and workflows across multiple connected services.",
    highlights: [
      "Cross-service synchronization for operational data",
      "Internal visibility into fleets and physical assets",
      "Workflow design focused on reducing coordination gaps",
    ],
    metrics: [
      { label: "Domain", value: "Fleet + assets" },
      { label: "Key need", value: "Service sync" },
      { label: "Use", value: "Operations" },
    ],
    outcome:
      "The platform created a more connected operational layer for teams managing assets and fleet data across systems.",
    review: {
      author: "Operations leader",
      company: "Rollzi Pace",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about cross-service synchronization, asset visibility, and cleaner fleet coordination.",
      role: "Placeholder testimonial",
    },
    services: [
      "Systems integration",
      "Operations dashboards",
      "Workflow engineering",
    ],
    slug: "rollzi-pace",
    stack: ["React", "Node.js", "APIs", "Dashboards", "Operational sync"],
    summary:
      "A fleet and asset operations tool that connected multiple services into a more unified management workflow.",
    title: "Rollzi Pace",
    visual: {
      accentFrom: "#ea580c",
      accentTo: "#facc15",
      label: "Asset synchronization",
      pattern: "nodes",
      tags: ["Assets", "Fleet", "Sync"],
    },
  },
  {
    category: "Procurement workflow",
    challenge:
      "Avendra needed a system that could handle purchasing documents cleanly across purchase orders, invoices, and receipts.",
    client: "Avendra",
    description:
      "An iBuyEfficient application used to manage procurement workflows spanning POs, invoices, and receipts.",
    highlights: [
      "Procurement workflow management for document-heavy processes",
      "Internal application design focused on transaction clarity",
      "Operational support for finance-adjacent approvals and records",
    ],
    metrics: [
      { label: "Domain", value: "Procurement" },
      { label: "Documents", value: "POs + invoices + receipts" },
      { label: "Audience", value: "Internal teams" },
    ],
    outcome:
      "The application improved visibility across procurement records and helped teams manage core purchasing workflows with less friction.",
    review: {
      author: "Stakeholder",
      company: "Avendra",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about procurement visibility, document control, and smoother purchase workflows.",
      role: "Placeholder testimonial",
    },
    services: ["Workflow systems", "Internal tools", "Procurement UX"],
    slug: "avendra",
    stack: [
      "React",
      ".NET",
      "SQL Server",
      "Workflow engines",
      "Procurement logic",
    ],
    summary:
      "A procurement management application built to organize purchasing records and simplify internal workflow execution.",
    title: "Avendra",
    visual: {
      accentFrom: "#1d4ed8",
      accentTo: "#14b8a6",
      label: "Procurement operations",
      pattern: "grid",
      tags: ["POs", "Invoices", "Receipts"],
    },
  },
  {
    category: "Automotive experience",
    challenge:
      "Lucid Motors needed a premium experience that could bring customer vehicle information together in a more immersive 360-degree format.",
    client: "Lucid Motors",
    description:
      "A Vehicle 360 application that showcases customer vehicle information in an interactive product experience.",
    highlights: [
      "Vehicle information presented through a richer interactive surface",
      "Experience designed to support premium customer engagement",
      "Product direction aligned with a brand-led automotive journey",
    ],
    metrics: [
      { label: "Experience", value: "Vehicle 360" },
      { label: "Audience", value: "Customers" },
      { label: "Focus", value: "Premium product showcase" },
    ],
    outcome:
      "The application elevated vehicle information from static data to a more immersive customer experience aligned with Lucid's brand positioning.",
    review: {
      author: "Product stakeholder",
      company: "Lucid Motors",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a quote here about customer experience quality, product storytelling, and the value of the 360 presentation.",
      role: "Placeholder testimonial",
    },
    services: ["Experience design", "Interactive UI", "Enterprise frontend"],
    slug: "lucid-motors",
    stack: [
      "React",
      ".NET",
      "Interactive UI",
      "3D-ready presentation",
      "Customer data surfaces",
    ],
    summary:
      "A premium vehicle information experience built to present customer-facing automotive data in a richer, more interactive way.",
    title: "Lucid Motors",
    visual: {
      accentFrom: "#06b6d4",
      accentTo: "#6366f1",
      label: "Vehicle 360",
      pattern: "orbits",
      tags: ["Automotive", "360", "Experience"],
    },
  },
  {
    category: "Enterprise modernization",
    challenge:
      "Aramark's CPS initiative needed a modernization path from a legacy WESphere implementation into a React and .NET based application foundation.",
    client: "CPS for Aramark",
    description:
      "An enterprise modernization effort that moved CPS from WESphere into a React and .NET application architecture.",
    highlights: [
      "Legacy-to-modern application transition planning and delivery",
      "React and .NET foundation prepared for long-term maintainability",
      "Modernization focused on enterprise continuity, not just visual refresh",
    ],
    metrics: [
      { label: "Type", value: "Modernization" },
      { label: "Stack", value: "React + .NET" },
      { label: "Context", value: "Enterprise app" },
    ],
    outcome:
      "The project set up a stronger long-term application foundation by shifting a legacy platform into a more maintainable modern stack.",
    review: {
      author: "Program stakeholder",
      company: "Aramark",
      isPlaceholder: true,
      note: "Replace with an approved stakeholder quote.",
      quote:
        "Placeholder review: add a stakeholder quote here about modernization confidence, maintainability gains, and the transition away from legacy tooling.",
      role: "Placeholder testimonial",
    },
    services: [
      "Modernization strategy",
      "React migration",
      "Enterprise engineering",
    ],
    slug: "cps-aramark-modernization",
    stack: [
      "React",
      ".NET",
      "Enterprise migration",
      "Design systems",
      "App modernization",
    ],
    summary:
      "A modernization program that moved a legacy enterprise application toward a cleaner React and .NET foundation.",
    title: "CPS",
    visual: {
      accentFrom: "#111827",
      accentTo: "#3b82f6",
      label: "Enterprise modernization",
      pattern: "beams",
      tags: ["React", ".NET", "Migration"],
    },
  },
];

export const featuredProjects = portfolioProjects.filter(
  (project) => project.featured,
);

const baseProjectKeywords = [
  "DevDelta projects",
  "software case studies",
  "product engineering portfolio",
  "web application development",
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectHref(slug: string) {
  return `/projects/${slug}`;
}

export function getProjectKeywords(project: PortfolioProject) {
  return [
    ...new Set(
      [
        ...baseProjectKeywords,
        project.client,
        project.title,
        project.category,
        ...project.stack,
        ...project.services,
        ...project.visual.tags,
        ...project.metrics.map((metric) => metric.value),
      ].filter(Boolean),
    ),
  ];
}

export function getProjectMetaDescription(project: PortfolioProject) {
  return `${project.client} case study: ${project.summary} Tech stack: ${project.stack
    .slice(0, 4)
    .join(", ")}. Services: ${project.services.slice(0, 3).join(", ")}.`;
}

export function getPortfolioKeywords(projects: PortfolioProject[]) {
  return [
    ...new Set(projects.flatMap((project) => getProjectKeywords(project))),
  ].slice(0, 60);
}
