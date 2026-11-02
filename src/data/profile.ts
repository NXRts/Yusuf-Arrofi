export interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  handle: string;
  nickname: string;
  title: string;
  role: string;
  location: string;
  region: string;
  timezone: string;
  email: string;
  status: {
    available: boolean;
    label: string;
  };
  headline: string;
  tagline: string;
  bio: string;
  aboutStory: {
    lead: string;
    paragraphs: string[];
    technicalFocus: string[];
  };
  quote: string;
  socials: {
    github: string;
    linkedin: string;
    linksPortal: string;
    portfolioLive: string;
  };
  stats: {
    repos: string;
    shipped: string;
    experience: string;
    primaryStack: string;
  };
  capabilities: CapabilityGroup[];
  tenets: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Muhammad Yusuf Arrofi",
  handle: "NXRts",
  nickname: "Yusuf",
  title: "Software Engineer & Full-Stack Developer",
  role: "Full-Stack Developer",
  location: "Surakarta, Central Java, Indonesia",
  region: "Surakarta, ID",
  timezone: "GMT+7 (WIB)",
  email: "yusufarrofi21@gmail.com",
  status: {
    available: true,
    label: "Available for engineering roles & independent software builds",
  },
  headline: "Full-Stack Developer crafting resilient backend systems, thoughtful web applications, and local-first software.",
  tagline: "Software Engineer & Full-Stack Developer specializing in Go, Next.js, and offline-first tools.",
  bio: "Software engineer based in Surakarta, Indonesia. Focused on Go, Clean Architecture, responsive web applications with Next.js & React, and pragmatic desktop utilities. Currently studying Informatics at Universitas Muhammadiyah Karanganyar.",
  aboutStory: {
    lead: "I build software that prioritizes real utility, predictable performance, and deliberate design over unnecessary complexity.",
    paragraphs: [
      "My development journey began with curiosity about how computers and networks operate behind the surface. Over the past three years, that curiosity evolved into a dedicated engineering practice—designing clean backend services in Go, building full-stack platforms with Next.js, and crafting local-first utilities.",
      "In October 2024, during my Backend Developer Internship at Digidreams Space, I engineered production Go microservices following Clean Architecture and Domain-Driven Design principles, designing indexed PostgreSQL schemas and implementing secure authentication middleware.",
      "Alongside academic studies in Informatics at Universitas Muhammadiyah Karanganyar (UMUKA SOLO), I maintain an active ecosystem of independent open-source projects—including JapanApp (an interactive Japanese SRS platform), DataScry (a privacy-first offline document processor), and Aria2App (a PyQt6 desktop GUI for the aria2 download daemon).",
      "I work in a distraction-free Arch Linux environment, valuing tools that are fast, dependable, and respect user privacy."
    ],
    technicalFocus: [
      "Go backend engineering & Clean Architecture",
      "Full-stack Next.js & React applications",
      "Type-safe TypeScript & modern JavaScript",
      "PostgreSQL relational modeling & database optimization",
      "Desktop GUI engineering with Python & PyQt6",
      "Linux developer workflows & automation scripting"
    ]
  },
  quote: "Write code that does what it says, keeps boundaries clear, and stays maintainable when requirements change.",
  socials: {
    github: "https://github.com/NXRts",
    linkedin: "https://www.linkedin.com/in/muhammad-yusuf-arrofi-a26140299/",
    linksPortal: "https://links-mee.vercel.app",
    portfolioLive: "https://yusufarrofi.my.id",
  },
  stats: {
    repos: "19+",
    shipped: "12+",
    experience: "3+ yrs",
    primaryStack: "Go · TypeScript · React · Next.js · Linux",
  },
  capabilities: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "Deliberate UI Architecture",
      description: "Crafting accessible, responsive web interfaces with semantic markup, fast client runtimes, and disciplined typography.",
      tags: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vue", "Astro"],
    },
    {
      id: "backend",
      title: "Backend Architecture",
      subtitle: "Services & APIs",
      description: "Designing concurrent REST services, Clean Architecture boundaries, JWT authentication pipelines, and structured routing.",
      tags: ["Go (Golang)", "Node.js", "PHP", "Laravel", "REST APIs", "Clean Architecture"],
    },
    {
      id: "database",
      title: "Data & Persistence",
      subtitle: "Schemas & Storage",
      description: "Relational schema design, database indexing, foreign key integrity, ORMs, and real-time state synchronization.",
      tags: ["PostgreSQL", "MySQL", "Firebase", "Prisma"],
    },
    {
      id: "systems",
      title: "Desktop & Systems",
      subtitle: "Tooling & Workflow",
      description: "Cross-platform desktop GUIs, JSON-RPC IPC, Linux system configuration, Docker containers, and Git workflows.",
      tags: ["Python", "PyQt6", "Linux (Arch)", "Bash", "Docker", "Git"],
    },
  ],
  tenets: [
    {
      number: "01",
      title: "Real Utility Over Speculative Complexity",
      description: "Every line of code and UI component should solve a tangible user requirement. Avoid bloated dependencies and premature abstractions.",
    },
    {
      number: "02",
      title: "Predictable Performance & Clean Boundaries",
      description: "Separate business logic from presentation layers. High-throughput backends in Go and responsive frontends in Next.js thrive on clear contracts.",
    },
    {
      number: "03",
      title: "Privacy-First & Local Capabilities",
      description: "Whenever feasible, process data locally on the user's machine (as demonstrated in DataScry and Aria2App) rather than introducing unnecessary server dependencies.",
    },
  ],
};
