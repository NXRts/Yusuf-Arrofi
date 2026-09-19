export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  points: string[];
  tags: string[];
}

export const experiencesData: Experience[] = [
  {
    id: "umuka-solo",
    period: "2026 — Present",
    role: "Undergraduate Student in Informatics (S1 Informatika)",
    company: "Universitas Muhammadiyah Karanganyar (UMUKA SOLO)",
    location: "Karanganyar, Surakarta, Jawa Tengah",
    isCurrent: true,
    points: [
      "Pursuing Bachelor's Degree in Informatics (S1 Informatika), focusing on core computer science foundations, algorithms, and software engineering methodologies.",
      "Synthesizing academic theoretical rigor with real-world industry practices across modern full-stack, distributed backend systems, and Go architectures.",
      "Actively exploring advanced system design, relational database optimization, and high-concurrency computing paradigms.",
    ],
    tags: ["Informatics", "Computer Science", "Algorithms", "Software Engineering", "System Design", "Databases"],
  },
  {
    id: "nxrts-dev",
    period: "2023 — Present",
    role: "Full-Stack Developer & Open Sourcer",
    company: "Independent Projects / NXRts Dev",
    location: "Surakarta, Jawa Tengah / Remote",
    isCurrent: true,
    points: [
      "Created and shipped JapanApp (japan-mee.vercel.app), an interactive web platform for Japanese language learners featuring stroke order animations and spaced repetition (SRS).",
      "Developed Aria2App, a modern cross-platform desktop GUI written in Python and PyQt6 for efficient management of multi-connection aria2 download queues via JSON-RPC.",
      "Engineered full-stack and SaaS applications such as Smart Compressor (FileKompres), RemoveBG, and GhostData with Next.js App Router and Tailwind CSS.",
      "Maintained custom Linux developer desktop workflow with CachyOS / Arch Linux, writing custom Bash automation scripts and lightweight web tools.",
    ],
    tags: ["Go", "Next.js", "React", "Python", "PyQt6", "PostgreSQL", "Arch Linux", "Vercel"],
  },
  {
    id: "digidreams-intern",
    period: "Oktober 2024 — Intern",
    role: "Backend Developer Intern",
    company: "Digidreams Space",
    location: "Remote / Hybrid",
    points: [
      "Learned and applied backend engineering principles with Golang, implementing Clean Architecture and domain-driven design.",
      "Designed and optimized PostgreSQL relational database schemas, query indexing, and migration pipelines for production services.",
      "Created robust RESTful API endpoints with structured middleware authentication, logging, and comprehensive unit tests.",
    ],
    tags: ["Golang", "REST API", "PostgreSQL", "Clean Architecture", "Git", "Docker"],
  },
  {
    id: "smkn2-karanganyar",
    period: "2022 — 2025",
    role: "Web Development & Software Engineering Student",
    company: "SMK Negeri 2 Karanganyar",
    location: "Karanganyar / Surakarta, Indonesia",
    points: [
      "Mastered fundamentals of full-stack web development: PHP (Laravel/CI3), MySQL, HTML5, CSS3, and JavaScript.",
      "Engineered Periodik, an interactive Chemistry Periodic Table Single-Page Application (SPA) with real-time property searching.",
      "Built mobile prototypes using Flutter & Dart, emphasizing database relational design, responsive layouts, and seamless UI/UX integration.",
    ],
    tags: ["JavaScript", "PHP", "Laravel", "MySQL", "Flutter", "Dart", "Tailwind CSS", "Figma"],
  },
];
