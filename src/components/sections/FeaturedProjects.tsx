import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Code2, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  const flagship = projectsData.find((p) => p.category === "flagship") || projectsData[0];
  const secondary = projectsData.filter((p) => p.featured && p.id !== flagship.id).slice(0, 3);

  return (
    <section id="projects" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
              02 // SHIPPED CODE
            </span>
            <span className="w-12 h-0.5 bg-[#4f46e5]" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
            Featured Engineering Projects
          </h2>
        </div>
        <span className="font-mono text-xs text-[#CBD5E1] tracking-wider uppercase">
          PRODUCTION-TESTED ARTIFACTS
        </span>
      </div>

      {/* Flagship Project Card (JapanApp) */}
      <div className="p-6 md:p-10 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-xl flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden group hover:border-[#4cd7f6]/40 transition-all">
        {/* Visual Column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-72 md:h-80 w-full border border-[#2f3446]/80">
            <img
              src={flagship.image}
              alt={flagship.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080e1d] via-[#080e1d]/40 to-transparent" />
            
            {/* Overlay Status */}
            <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#172133]/90 border border-[#2f3446] backdrop-blur-md rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                <span className="font-mono text-xs text-[#F8FAFC]">
                  Live SRS Engine v4.2
                </span>
              </div>
              <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                {flagship.metrics?.users || "10,480 Active Users"}
              </span>
            </div>
          </div>
        </div>

        {/* Description Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#4f46e5] text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                Flagship Application
              </span>
              <span className="font-mono text-xs text-[#4cd7f6]">
                {flagship.subtitle}
              </span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              {flagship.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#c7c4d8] leading-relaxed">
              {flagship.description}
            </p>
          </div>

          {/* 3 Metrics Column */}
          <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#151b2c] border border-[#2f3446]/60 text-center">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#CBD5E1]">Platform</span>
              <span className="font-sans text-base font-bold text-[#4cd7f6]">
                {flagship.metrics?.platform || "Web App"}
              </span>
            </div>
            <div className="flex flex-col border-x border-[#2f3446]/60">
              <span className="font-mono text-[11px] text-[#CBD5E1]">Curriculum</span>
              <span className="font-sans text-base font-bold text-[#c3c0ff]">
                {flagship.metrics?.curriculum || "N5 - N1"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#CBD5E1]">Deployment</span>
              <span className="font-sans text-base font-bold text-[#fbabff]">
                {flagship.metrics?.deployment || "Vercel Edge"}
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {flagship.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#24293b] border border-[#2f3446] rounded text-[#CBD5E1] font-mono text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {flagship.link && (
              <a
                href={flagship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#4cd7f6] hover:bg-[#acedff] text-[#003640] font-sans text-sm font-bold rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch App</span>
              </a>
            )}
            {flagship.github && (
              <a
                href={flagship.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#24293b] hover:bg-[#33394a] text-[#F8FAFC] border border-[#2f3446] font-sans text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Projects Grid (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondary.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md flex flex-col justify-between group hover:border-[#4cd7f6]/40 transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-[#080e1d] border border-[#2f3446]/60 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded bg-[#172133]/90 border border-[#2f3446] font-mono text-xs text-[#4cd7f6]">
                  {project.metrics?.platform || project.category}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
                  {project.subtitle || project.category}
                </span>
                <h4 className="font-sans text-xl font-bold text-[#F8FAFC] mt-1">
                  {project.title}
                </h4>
              </div>

              <p className="font-sans text-sm text-[#c7c4d8] line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-[#2f3446]/50 mt-6">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#191f30] border border-[#2f3446]/40 text-[#CBD5E1] font-mono text-[11px] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4cd7f6] hover:text-[#c3c0ff] transition-colors"
                  >
                    <span>View Repository</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c3c0ff] hover:text-white transition-colors"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="flex justify-center pt-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl bg-[#172133] hover:bg-[#24293b] border border-[#2f3446] hover:border-[#4cd7f6]/50 text-[#F8FAFC] font-sans text-sm font-semibold flex items-center gap-3 transition-all shadow-md group"
        >
          <span>Explore All 15+ Engineered Projects</span>
          <ArrowRight className="w-4 h-4 text-[#4cd7f6] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
