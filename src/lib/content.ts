// Central content model for the portfolio.
// Edit this file to update copy, projects, skills, and links — the UI reads from here.

export const profile = {
  name: "Prince Fiifi Boateng",
  handle: "Kofi Babone",
  title: "Full-Stack Software Engineer",
  location: "Ghana · Open to relocation & remote (US / EU)",
  email: "princefiifiboateng@gmail.com",
  tagline:
    "I design and ship production web platforms end-to-end — pharmacy commerce, logistics, fintech and insurance systems used across West Africa.",
  summary:
    "Full-stack software engineer at Rigelis Inc. Over the last few years I've built and shipped real, revenue-generating products from database schema to deployment: multi-tenant SaaS, offline-first point-of-sale, marketplace + logistics platforms, and government revenue tooling. I work primarily in the Vue/Nuxt and TypeScript ecosystem and am equally comfortable in React/Next.js. ALX Software Engineering graduate.",
  links: {
    github: "https://github.com/griffin919",
    twitter: "https://twitter.com/Kofi__Babone",
    email: "mailto:princefiifiboateng@gmail.com",
  },
  stats: [
    { label: "Years building products", value: "4+" },
    { label: "Products shipped to production", value: "15+" },
    { label: "Core stack", value: "TypeScript" },
  ],
};

export type ProjectStatus = "live" | "private" | "wip";

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  year: string;
  links: {
    live?: string;
    repo?: string;
    extra?: { label: string; url: string };
  };
};

export const featuredProjects: Project[] = [
  {
    slug: "medsgh",
    title: "MedsGH",
    category: "Marketplace + Logistics Platform",
    tagline: "Online pharmacy marketplace with a full delivery-dispatch network.",
    description:
      "A production e-pharmacy platform where customers order medication and verified pharmacies fulfil it, backed by a purpose-built dispatch layer that routes deliveries to independent rider fleets. I built the customer storefront, the pharmacy back office, and the dispatch/rider portals — each with its own auth, wallet and real-time delivery state.",
    role: "Lead engineer — architecture, frontend, delivery/dispatch system, deployment",
    highlights: [
      "Multi-portal system: customer, pharmacy, dispatch-company admin and rider apps",
      "Wallet + transaction ledger and per-fleet financial reconciliation",
      "Delivery lifecycle: claim, assign rider, live status updates",
      "Dockerised deployment with Caddy handling automatic TLS",
    ],
    stack: ["Nuxt", "Vue 3", "TypeScript", "Node.js", "Docker", "Caddy"],
    status: "live",
    year: "2024–2025",
    links: {
      live: "https://medsgh.com",
      extra: { label: "Dispatch portal", url: "https://medsghdispatch.vercel.app" },
    },
  },
  {
    slug: "ros",
    title: "rOS — Rigel Pharmacy POS",
    category: "Offline-first PWA",
    tagline: "An offline-capable point-of-sale and pharmacy management system.",
    description:
      "A point-of-sale and inventory platform for pharmacies that keeps working when the internet doesn't. Built as an installable PWA so counter staff can ring up sales, manage stock and generate reports offline, syncing when back online. Currently being rebuilt on Nuxt 4 with a fully typed Pinia state layer.",
    role: "Architect & lead engineer — full rewrite to Nuxt 4 / TypeScript",
    highlights: [
      "Installable, offline-first PWA for unreliable-connectivity environments",
      "Typed domain layer with Pinia stores and vee-validate forms",
      "Inventory, sales, and reporting workflows for retail pharmacy",
      "Migration-driven rebuild with typecheck + test gates",
    ],
    stack: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia", "Vite PWA", "Nuxt UI"],
    status: "private",
    year: "2025",
    links: {},
  },
  {
    slug: "revgh",
    title: "RevGH — Revenue Collector",
    category: "GovTech / Fintech",
    tagline: "Digital tax and revenue collection and management.",
    description:
      "A revenue collection platform that digitises how levies and taxes are recorded, tracked and reconciled — replacing paper receipts with a field-collector app and a management dashboard. The management frontend is built in Next.js + TypeScript, paired with a collector-facing app.",
    role: "Full-stack engineer — collector app, management dashboard",
    highlights: [
      "Field-collector flow for capturing payments on the go",
      "Management dashboard for tracking, reconciliation and reporting",
      "Typed Next.js frontend for the administrative console",
      "Designed for low-friction use by non-technical collectors",
    ],
    stack: ["Next.js", "TypeScript", "Vue", "REST APIs"],
    status: "live",
    year: "2025",
    links: {
      live: "https://revgh.vercel.app",
    },
  },
  {
    slug: "rigel-insured",
    title: "Rigel Insured",
    category: "Multi-tenant SaaS",
    tagline: "A multi-tenant platform for insurance providers.",
    description:
      "A multi-tenant insurance platform where each provider operates in an isolated tenant on shared infrastructure. I worked across the stack — a Nuxt/Vue frontend, a TypeScript API backend, and a PostgreSQL schema designed for tenant isolation.",
    role: "Full-stack engineer — frontend, API, data modelling",
    highlights: [
      "Multi-tenant architecture with per-provider isolation",
      "Dedicated TypeScript backend and PostgreSQL schema (PL/pgSQL)",
      "Nuxt/Vue frontend for policy and customer management",
      "Clean separation of frontend, backend and DB schema repos",
    ],
    stack: ["Nuxt", "Vue 3", "TypeScript", "Node.js", "PostgreSQL"],
    status: "live",
    year: "2024–2025",
    links: {
      live: "https://rigelinsured.vercel.app",
    },
  },
  {
    slug: "ciraq",
    title: "Ciraq",
    category: "Career Platform",
    tagline: "Connecting African students and SMEs through verified digital resumes.",
    description:
      "A career platform that lets students build a verified digital resume, showcase skills and find short-term and part-time work, while giving SMEs access to affordable, vetted talent. Spans a web platform, a backend API and a companion mobile app.",
    role: "Engineer — product, frontend, backend",
    highlights: [
      "Verified digital resume and skills profiles for students",
      "Matching for short-term / part-time opportunities",
      "Employer side for SMEs to discover and hire talent",
      "Web platform + Node backend + Ionic/Vue mobile app",
    ],
    stack: ["Vue 3", "Ionic", "Node.js", "JavaScript"],
    status: "wip",
    year: "2024–2026",
    links: {},
  },
  {
    slug: "multi-pharmacy",
    title: "Multi-Pharmacy Management",
    category: "SaaS Dashboard",
    tagline: "One platform to run a network of pharmacies.",
    description:
      "A management platform for operators running multiple pharmacy branches — centralising inventory, staff and operations across locations with role-based dashboards for pharma, suppliers and customers.",
    role: "Engineer — frontend & dashboards",
    highlights: [
      "Centralised control across multiple pharmacy branches",
      "Separate dashboards for pharma, suppliers and customers",
      "Role-based access and operational reporting",
      "Part of the wider Rigelis pharmacy product suite",
    ],
    stack: ["Vue 3", "JavaScript", "Firebase"],
    status: "private",
    year: "2024",
    links: {},
  },
];

// Smaller / public projects with browsable source.
export const otherProjects = [
  {
    title: "Criminal Record Mgmt. System",
    description: "Records information system for security forces.",
    stack: ["JavaScript"],
    live: "https://cr-msys.vercel.app",
    repo: "https://github.com/griffin919/CRMsys",
  },
  {
    title: "Production Tracker",
    description: "Vue + Firebase app for tracking production quantities.",
    stack: ["Vue", "Firebase"],
    live: "https://production-tracker-gamma.vercel.app",
    repo: "https://github.com/griffin919/production_tracker",
  },
  {
    title: "Employee Management System",
    description: "HR / employee management dashboard.",
    stack: ["Vue"],
    live: "https://employee-mgt-system.vercel.app",
    repo: "https://github.com/griffin919/Employee_Mgt_System",
  },
  {
    title: "BidsGH",
    description: "Bidding / procurement web app.",
    stack: ["JavaScript"],
    live: "https://bidsgh.vercel.app",
    repo: "https://github.com/griffin919/bidsgh",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["Vue 3", "Nuxt 4", "React", "Next.js", "TypeScript", "Tailwind CSS", "Pinia", "PWA"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Firebase", "Multi-tenant design"],
  },
  {
    label: "DevOps & Tooling",
    skills: ["Docker", "Caddy", "Vercel", "Git", "Linux / Shell", "CI"],
  },
  {
    label: "Foundations",
    skills: ["C", "Java", "Data structures", "Systems / DevOps (ALX)"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Rigelis Inc.",
    period: "2022 — Present",
    location: "Ghana",
    points: [
      "Build and ship commercial web products across pharmacy, logistics, insurance and fintech.",
      "Work end-to-end: data modelling, TypeScript backends, Vue/Nuxt & Next.js frontends, Dockerised deployment.",
      "Contributed to flagship products including MedsGH (e-pharmacy + logistics), rOS (pharmacy POS) and Rigel Insured (multi-tenant SaaS).",
    ],
  },
  {
    role: "Software Engineering Program",
    org: "ALX Africa",
    period: "2023",
    location: "Remote",
    points: [
      "Intensive full-stack + systems engineering program (C, Python, DevOps, data structures).",
      "Built low-level projects including a Unix shell and systems/DevOps tooling.",
    ],
  },
];
