export interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  handle: string;
  nickname: string;
  title: string;
  version: string;
  age: number;
  location: string;
  timezone: string;
  email: string;
  status: {
    available: boolean;
    label: string;
    period: string;
  };
  nodeStatus: {
    state: string;
    region: string;
    latency: string;
    reqSpeed: string;
    coreStack: string;
    environment: string;
  };
  bio: string;
  tagline: string;
  quote: string;
  socials: {
    github: string;
    linkedin: string;
    linksPortal: string;
    portfolioLive: string;
  };
  stats: {
    publicRepos: string;
    shippedApps: string;
    passionate: string;
    appUsers: string;
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
  nickname: "YUSUF.DEV",
  title: "Full-Stack & Go Developer",
  version: "v2.6.0",
  age: 19,
  location: "Surakarta, Jawa Tengah (Remote / Open to Work)",
  timezone: "GMT+7",
  email: "yusufarrofi21@gmail.com",
  status: {
    available: true,
    label: "Available for Full-Stack & Engineering Roles",
    period: "Q3/Q4 2024",
  },
  nodeStatus: {
    state: "PROD_LIVE",
    region: "ap-northeast-1",
    latency: "14.2ms",
    reqSpeed: "4.8k/sec",
    coreStack: "Go & React",
    environment: "Arch Linux",
  },
  tagline: "19 y/o Software Engineer — Next.js, React, Go, and Arch Linux enthusiast",
  bio: "Specialized in building performant web applications, responsive frontend architectures, and Go/Node services. Creator of JapanApp, DataScry, and Aria2App. Focused on high-concurrency architectures, clean ergonomics, and lightweight digital experiences.",
  quote: "Always eager to learn new things. If it ain't broke, don't fix it.",
  socials: {
    github: "https://github.com/NXRts",
    linkedin: "https://www.linkedin.com/in/muhammad-yusuf-arrofi-a26140299/",
    linksPortal: "https://links-mee.vercel.app",
    portfolioLive: "https://yusufarrofi.my.id",
  },
  stats: {
    publicRepos: "19+",
    shippedApps: "10+",
    passionate: "100%",
    appUsers: "1k+",
  },
  capabilities: [
    {
      id: "frontend",
      title: "Frontend",
      subtitle: "Reactive UI & Web",
      description: "Building fast, responsive interfaces and web apps with clean user experience and glassmorphism polish.",
      iconName: "Terminal",
      accentColor: "#c3c0ff",
      tags: ["Next.js", "React", "Vue", "Astro", "Tailwind", "Flutter"],
    },
    {
      id: "languages",
      title: "Languages",
      subtitle: "Core Syntaxes",
      description: "Robust backend scripting, type-safe development, systems programming, and high-concurrency architectures.",
      iconName: "Code2",
      accentColor: "#4cd7f6",
      tags: ["Go (Golang)", "TypeScript", "JavaScript", "PHP", "Python"],
    },
    {
      id: "backend",
      title: "Backend & DB",
      subtitle: "APIs & Persistence",
      description: "RESTful microservices, clean architecture, relational schemas, ORMs, and real-time state synchronizations.",
      iconName: "Database",
      accentColor: "#fbabff",
      tags: ["Node.js", "Laravel", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
    },
    {
      id: "tools",
      title: "Tools & OS",
      subtitle: "Workflow & System",
      description: "Custom Linux desktop development setups, automation scripts, Docker containerization, and modern Git workflows.",
      iconName: "Cpu",
      accentColor: "#acedff",
      tags: ["Linux (Arch)", "Docker", "Git", "Vercel", "Figma", "Bash"],
    },
  ],
  tenets: [
    {
      number: "1",
      title: '"If It Ain\'t Broke, Don\'t Fix It"',
      description: "Prioritize reliability, simplicity, and battle-tested patterns over unnecessary complexity and bloated dependencies.",
    },
    {
      number: "2",
      title: "Always Eager to Learn New Things",
      description: "Constantly exploring modern stacks, from Go concurrency models and Next.js App Router to custom Linux kernel optimization.",
    },
    {
      number: "3",
      title: "Responsive & Lightweight Engineering",
      description: "Clean code with zero bloat, snappy interactive UI feedback, pixel-perfect responsiveness, and straightforward maintainability.",
    },
  ],
};
