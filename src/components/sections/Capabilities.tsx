import React from "react";

export default function Capabilities() {
  const categories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      role: "Client Architecture & User Interface",
      description:
        "Building fast, accessible interfaces with disciplined typography, semantic HTML, and zero bloat. Focused on Next.js App Router and type-safe component design.",
      primary: ["Next.js", "React", "TypeScript"],
      secondary: ["JavaScript (ESNext)", "Tailwind CSS", "Vue", "Astro", "HTML5 / CSS3"],
    },
    {
      id: "backend",
      title: "Backend Architecture",
      role: "APIs & Distributed Microservices",
      description:
        "Engineering high-concurrency HTTP services in Go. Structuring systems with Clean Architecture, Domain-Driven Design, secure JWT middleware, and structured routing.",
      primary: ["Go (Golang)", "REST APIs", "Clean Architecture"],
      secondary: ["Node.js", "PHP", "Laravel", "Middleware & Auth"],
    },
    {
      id: "database",
      title: "Data & Persistence",
      role: "Relational Modeling & Schema Design",
      description:
        "Designing normalized relational schemas with foreign key integrity, query indexing, and connection pool tuning to maintain low query latency under load.",
      primary: ["PostgreSQL", "Relational Modeling", "Database Indexing"],
      secondary: ["MySQL", "Prisma ORM", "Firebase", "SQL Optimization"],
    },
    {
      id: "systems",
      title: "Desktop & Systems",
      role: "Native GUIs & Developer Tooling",
      description:
        "Developing cross-platform desktop GUIs with Python and PyQt6 over JSON-RPC. Operating within a customized Arch Linux environment with Bash automation.",
      primary: ["Linux (Arch / CachyOS)", "Python", "PyQt6"],
      secondary: ["Bash Scripting", "Git & GitHub", "Docker", "aria2 RPC"],
    },
  ];

  return (
    <section id="skills" className="w-full py-20 sm:py-28 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#232732]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              <span>03</span>
              <span className="w-8 h-px bg-[#3b82f6]" />
              <span>Technical Skills</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
              Toolchain & Competencies
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            Technologies selected for dependability, performance, and long-term maintainability.
          </p>
        </div>

        {/* 4-Block Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded border border-[#232732] bg-[#111317] flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#6b7280]">
                  <span>CATEGORY 0{idx + 1}</span>
                  <span className="text-[#3b82f6]">{cat.role}</span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f6]">
                  {cat.title}
                </h3>

                <p className="font-sans text-sm text-[#9ca3af] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-[#232732]/60">
                {/* Primary / Core */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                    Core Specialization
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {cat.primary.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#14171d] border border-[#3b82f6]/40 text-[#f4f4f6] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secondary / Supporting */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                    Working Knowledge & Supporting Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#9ca3af]">
                    {cat.secondary.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#0c0d10] border border-[#232732] text-[#9ca3af]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
