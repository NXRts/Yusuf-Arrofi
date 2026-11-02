export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  category: "education" | "work" | "independent";
  summary: string;
  points: string[];
  tags: string[];
}

export const experiencesData: Experience[] = [
  {
    id: "umuka-solo",
    period: "2026 — Present",
    role: "Undergraduate Student in Informatics",
    company: "Universitas Muhammadiyah Karanganyar (UMUKA SOLO)",
    location: "Karanganyar, Surakarta, Indonesia",
    isCurrent: true,
    category: "education",
    summary:
      "Pursuing a Bachelor's Degree in Informatics (S1), bridging foundational computer science theory with modern systems engineering.",
    points: [
      "Core studies in algorithms, data structures, relational database management, and discrete mathematics.",
      "Synthesizing academic computer science foundations with practical production software development.",
      "Researching distributed systems, concurrent programming models in Go, and modern web application architectures."
    ],
    tags: ["Informatics", "Algorithms", "Data Structures", "Database Systems", "Software Engineering"],
  },
  {
    id: "nxrts-independent",
    period: "2023 — Present",
    role: "Independent Software Developer & Open Source Contributor",
    company: "Personal Software Projects / NXRts",
    location: "Surakarta, Indonesia",
    isCurrent: true,
    category: "independent",
    summary:
      "Designing, building, and maintaining independent web applications, desktop utilities, and open-source software.",
    points: [
      "Engineered JapanApp (japan-mee.vercel.app), an interactive Japanese language learning ecosystem with Spaced Repetition (SRS) and Kanji canvas stroke recognition.",
      "Developed DataScry (datascry.vercel.app), a privacy-first offline document and image manipulation suite utilizing browser Web Workers for 100% local processing.",
      "Built Aria2App, a cross-platform desktop GUI for aria2c written in Python and PyQt6 with asynchronous JSON-RPC socket management.",
      "Maintained an Arch Linux development environment, authoring custom automation scripts and minimalist developer workflows."
    ],
    tags: ["Go", "Next.js", "React", "TypeScript", "Python", "PyQt6", "PostgreSQL", "Arch Linux"],
  },
  {
    id: "digidreams-intern",
    period: "October 2024",
    role: "Backend Developer Intern",
    company: "Digidreams Space",
    location: "Hybrid / Remote",
    isCurrent: false,
    category: "work",
    summary:
      "Engineered backend microservices in Go, implementing Clean Architecture and relational schema optimizations.",
    points: [
      "Implemented Clean Architecture and Domain-Driven Design patterns in Go for maintainable service decoupling.",
      "Designed PostgreSQL relational schemas with foreign key indexing, connection pooling, and migration scripts.",
      "Built authenticated RESTful endpoints using JWT token validation and structured logging middleware.",
      "Authored unit tests verifying business logic across repository and use-case boundaries."
    ],
    tags: ["Go (Golang)", "Clean Architecture", "REST API", "PostgreSQL", "JWT", "Docker", "Git"],
  },
  {
    id: "smkn2-karanganyar",
    period: "2022 — 2025",
    role: "Software Engineering & Web Development Foundations",
    company: "SMK Negeri 2 Karanganyar",
    location: "Karanganyar, Surakarta, Indonesia",
    isCurrent: false,
    category: "education",
    summary:
      "Foundational vocational education in software engineering, database design, and web programming.",
    points: [
      "Mastered web fundamentals: PHP (Laravel, CodeIgniter), MySQL, JavaScript, HTML5, and CSS3.",
      "Built Periodik (periodik-two.vercel.app), an interactive periodic table Single-Page Application with real-time property searching.",
      "Prototyped cross-platform mobile interfaces in Flutter & Dart, focusing on relational data modeling and responsive UI layout."
    ],
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "Flutter", "Figma"],
  },
];
