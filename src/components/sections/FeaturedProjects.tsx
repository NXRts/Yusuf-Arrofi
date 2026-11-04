"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { projectsData, Project } from "@/data/projects";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const japanApp = projectsData.find((p) => p.id === "japan-app")!;
  const dataScry = projectsData.find((p) => p.id === "datascry")!;
  const aria2App = projectsData.find((p) => p.id === "aria2-app")!;
  const prameswariEO = projectsData.find((p) => p.id === "prameswari-eo")!;

  // Additional projects for the curated index
  const archiveProjects = projectsData.filter(
    (p) => !["japan-app", "datascry", "aria2-app", "prameswari-eo"].includes(p.id)
  ).slice(0, 6);

  return (
    <section id="projects" className="w-full py-16 sm:py-22 lg:py-28 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-12 sm:gap-20 lg:gap-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-[#232732]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              <span>02</span>
              <span className="w-8 h-px bg-[#3b82f6]" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-sans editorial-h1 font-bold tracking-tight text-[#f4f4f6]">
              Featured Projects
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            Case studies of software engineered with clean architectures, local-first computing, and practical user utility.
          </p>
        </div>

        {/* =========================================================================
            FEATURED PROJECT 01: JAPANAPP (Flagship Showcase)
           ========================================================================= */}
        <article className="border border-[#232732] bg-surface-container-low rounded-sm overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-0">
          {/* Left / Visual Showcase */}
          <div className="lg:col-span-7 bg-[#0c0d10] p-4 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#232732] min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pb-4 font-mono text-xs text-[#6b7280]">
              <span>PROJECT 01 / FLAGSHIP</span>
              <span className="text-[#3b82f6]">japan-mee.vercel.app</span>
            </div>

            <div className="relative w-full aspect-16/10 rounded border border-[#232732] overflow-hidden bg-[#08090b] shadow-lg group">
              <img
                src={japanApp.image}
                alt="JapanApp Interface Screenshot"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-xs text-[#9ca3af]">
              <span>Curriculum: JLPT N5 → N1</span>
              <span>Algorithm: Spaced Repetition (SRS)</span>
            </div>
          </div>

          {/* Right / Technical Case Study */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-surface-container-low min-w-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#3b82f6]">
                  Language Learning Platform
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                {japanApp.title}
              </h3>

              <p className="font-sans text-sm text-[#9ca3af] leading-relaxed">
                {japanApp.description}
              </p>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  The Engineering Problem
                </span>
                <p className="font-sans text-xs text-[#d1d5db] leading-relaxed">
                  {japanApp.problem}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  Key Technical Decisions
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#9ca3af]">
                  {japanApp.technicalDecisions.slice(0, 3).map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#3b82f6] mt-0.5 shrink-0">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {japanApp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container border border-[#232732] text-[#9ca3af] font-mono text-[11px] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 sm:pt-6 border-t border-[#232732] flex flex-wrap items-center gap-2.5 sm:gap-3">
              {japanApp.link && (
                <a
                  href={japanApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-xs transition-colors"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}

              {japanApp.github && (
                <a
                  href={japanApp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container hover:bg-surface-container-high text-[#f4f4f6] border border-[#232732] font-mono text-xs transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Source Code</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(japanApp)}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] cursor-pointer"
              >
                <span>Read Full Spec</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </button>
            </div>
          </div>
        </article>

        {/* =========================================================================
            FEATURED PROJECT 02: DATASCRY (Reversed Rhythm / Privacy-First)
           ========================================================================= */}
        <article className="border border-[#232732] bg-surface-container-low rounded-sm overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-0">
          {/* Left / Context & Details */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-surface-container-low order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#232732] min-w-0">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#3b82f6]">
                Offline-First Document Suite
              </span>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                {dataScry.title}
              </h3>

              <p className="font-sans text-sm text-[#9ca3af] leading-relaxed">
                {dataScry.description}
              </p>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  Core Philosophy & Privacy
                </span>
                <p className="font-sans text-xs text-[#d1d5db] leading-relaxed">
                  {dataScry.problem}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  Architecture Highlight
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#9ca3af]">
                  {dataScry.technicalDecisions.slice(0, 3).map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#3b82f6] mt-0.5 shrink-0">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {dataScry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container border border-[#232732] text-[#9ca3af] font-mono text-[11px] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 sm:pt-6 border-t border-[#232732] flex flex-wrap items-center gap-2.5 sm:gap-3">
              {dataScry.link && (
                <a
                  href={dataScry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-xs transition-colors"
                >
                  <span>Open Application</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}

              {dataScry.github && (
                <a
                  href={dataScry.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container hover:bg-surface-container-high text-[#f4f4f6] border border-[#232732] font-mono text-xs transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(dataScry)}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] cursor-pointer"
              >
                <span>Details</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right / Visual Showcase */}
          <div className="lg:col-span-7 bg-[#0c0d10] p-4 sm:p-8 flex flex-col justify-between order-1 lg:order-2 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pb-4 font-mono text-xs text-[#6b7280]">
              <span>PROJECT 02 / PRIVACY SUITE</span>
              <span className="text-[#3b82f6]">100% Client-Side Processing</span>
            </div>

            <div className="relative w-full aspect-16/10 rounded border border-[#232732] overflow-hidden bg-[#08090b] shadow-lg group">
              <img
                src={dataScry.image}
                alt="DataScry Interface Screenshot"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-xs text-[#9ca3af]">
              <span>Runtime: Web Workers</span>
              <span>Network: Zero Server Uploads</span>
            </div>
          </div>
        </article>

        {/* =========================================================================
            FEATURED PROJECTS 03 & 04: ARIA2APP & PRAMESWARI EO (2-Column Grid)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Project 03: Aria2App */}
          <article className="border border-[#232732] bg-surface-container-low rounded-sm p-5 sm:p-7 lg:p-8 flex flex-col justify-between gap-6 min-w-0">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-xs text-[#6b7280]">
                <span>PROJECT 03 / DESKTOP GUI</span>
                <span className="text-[#3b82f6]">Python + PyQt6</span>
              </div>

              <div className="relative w-full aspect-16/10 rounded border border-[#232732] overflow-hidden bg-[#08090b]">
                <img
                  src={aria2App.image}
                  alt="Aria2App Desktop Interface"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f6]">
                  {aria2App.title}
                </h3>
                <span className="font-mono text-xs text-[#9ca3af]">
                  {aria2App.subtitle}
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {aria2App.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-1.5 text-xs text-[#9ca3af]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  Engineering Highlight
                </span>
                <p className="text-[#d1d5db]">
                  Asynchronous JSON-RPC socket communication with the aria2 daemon, allowing multi-connection segmented downloads without blocking the Qt event loop.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {aria2App.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-surface-container border border-[#232732] text-[#9ca3af] font-mono text-[11px] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#232732] flex flex-wrap items-center justify-between gap-3">
              {aria2App.github && (
                <a
                  href={aria2App.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-[#f4f4f6] hover:text-[#3b82f6] transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>github/NXRts/Aria2App</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(aria2App)}
                className="py-1.5 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] cursor-pointer"
              >
                Inspect Spec →
              </button>
            </div>
          </article>

          {/* Project 04: Prameswari EO */}
          <article className="border border-[#232732] bg-surface-container-low rounded-sm p-5 sm:p-7 lg:p-8 flex flex-col justify-between gap-6 min-w-0">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-xs text-[#6b7280]">
                <span>PROJECT 04 / CLIENT PLATFORM</span>
                <span className="text-[#3b82f6]">Next.js + WhatsApp API</span>
              </div>

              <div className="relative w-full aspect-16/10 rounded border border-[#232732] overflow-hidden bg-[#08090b]">
                <img
                  src={prameswariEO.image}
                  alt="Prameswari EO Website Screenshot"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f6]">
                  {prameswariEO.title}
                </h3>
                <span className="font-mono text-xs text-[#9ca3af]">
                  {prameswariEO.subtitle}
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {prameswariEO.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232732]/60 flex flex-col gap-1.5 text-xs text-[#9ca3af]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                  Practical Business Impact
                </span>
                <p className="text-[#d1d5db]">
                  Dynamic WhatsApp booking dispatch formatting pre-filled packages and itineraries, reducing administrative consultation overhead for Kemuning tour operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {prameswariEO.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-surface-container border border-[#232732] text-[#9ca3af] font-mono text-[11px] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#232732] flex flex-wrap items-center justify-between gap-3">
              {prameswariEO.link && (
                <a
                  href={prameswariEO.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-[#f4f4f6] hover:text-[#3b82f6] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>prameswari-eo.vercel.app</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(prameswariEO)}
                className="py-1.5 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] cursor-pointer"
              >
                Inspect Spec →
              </button>
            </div>
          </article>
        </div>

        {/* =========================================================================
            ADDITIONAL VERIFIED PROJECTS INDEX (Curated Archive)
           ========================================================================= */}
        <div className="pt-6 sm:pt-8 border-t border-[#232732]/60 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              Selected Archive & Tools
            </span>
            <Link
              href="/projects"
              className="py-1 font-mono text-xs text-[#3b82f6] hover:underline inline-flex items-center gap-1"
            >
              <span>View full software catalog ({projectsData.length} projects)</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archiveProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="p-4 rounded border border-[#232732] bg-surface-container-low hover:border-[#3b82f6]/50 transition-all cursor-pointer flex flex-col justify-between gap-3 group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#6b7280]">
                    <span className="uppercase">{p.category}</span>
                    <span className="text-[#3b82f6] group-hover:translate-x-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#f4f4f6] group-hover:text-white transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9ca3af] line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#232732]/60">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 bg-surface-container text-[#6b7280] font-mono text-[10px] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Spec Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
