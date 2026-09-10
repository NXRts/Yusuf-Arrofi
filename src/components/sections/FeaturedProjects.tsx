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
            <span className="font-mono text-xs font-bold text-secondary tracking-wider">
              02 // SHIPPED CODE
            </span>
            <span className="w-12 h-0.5 bg-primary-container" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
            Featured Engineering Projects
          </h2>
        </div>
        <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
          PRODUCTION-TESTED ARTIFACTS
        </span>
      </div>

      {/* Flagship Project Card (JapanApp) */}
      <div className="p-6 md:p-10 rounded-2xl bg-surface-elevated border border-surface-variant shadow-xl flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden group hover:border-secondary/40 transition-all">
        {/* Visual Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          {/* Screenshot Container - natural aspect ratio, no crop, no zoom */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-surface-variant/80 bg-surface-container-lowest">
            <img
              src={flagship.image}
              alt={flagship.title}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          
          {/* Status Bar (Moved Below Image) */}
          <div className="p-3 bg-surface-container-low border border-surface-variant/70 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-xs font-semibold text-text-primary">
                Live SRS Engine v4.2
              </span>
            </div>
            <span className="font-mono text-xs text-secondary font-semibold">
              {flagship.metrics?.users || "10,480 Active Users"}
            </span>
          </div>
        </div>

        {/* Description Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-container text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                Flagship Application
              </span>
              <span className="font-mono text-xs text-secondary">
                {flagship.subtitle}
              </span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
              {flagship.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {flagship.description}
            </p>
          </div>

          {/* 3 Metrics Column */}
          <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-surface-container-low border border-surface-variant/60 text-center">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-text-secondary">Platform</span>
              <span className="font-sans text-base font-bold text-secondary">
                {flagship.metrics?.platform || "Web App"}
              </span>
            </div>
            <div className="flex flex-col border-x border-surface-variant/60">
              <span className="font-mono text-[11px] text-text-secondary">Curriculum</span>
              <span className="font-sans text-base font-bold text-primary">
                {flagship.metrics?.curriculum || "N5 - N1"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-text-secondary">Deployment</span>
              <span className="font-sans text-base font-bold text-tertiary">
                {flagship.metrics?.deployment || "Vercel Edge"}
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {flagship.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-surface-container-high border border-surface-variant rounded text-text-secondary font-mono text-xs"
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
                className="px-5 py-2.5 bg-secondary hover:bg-secondary-fixed text-on-secondary font-sans text-sm font-bold rounded-lg shadow-md transition-colors flex items-center gap-2"
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
                className="px-5 py-2.5 bg-surface-container-high hover:bg-surface-bright text-text-primary border border-surface-variant font-sans text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
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
            className="p-6 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between group hover:border-secondary/40 transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container-lowest border border-surface-variant/60 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded bg-surface-elevated/90 border border-surface-variant font-mono text-xs text-secondary">
                  {project.metrics?.platform || project.category}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                  {project.subtitle || project.category}
                </span>
                <h4 className="font-sans text-xl font-bold text-text-primary mt-1">
                  {project.title}
                </h4>
              </div>

              <p className="font-sans text-sm text-on-surface-variant line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-surface-variant/50 mt-6">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container border border-surface-variant/40 text-text-secondary font-mono text-[11px] rounded"
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-primary transition-colors"
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors"
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
          className="px-6 py-3 rounded-xl bg-surface-elevated hover:bg-surface-container-high border border-surface-variant hover:border-secondary/50 text-text-primary font-sans text-sm font-semibold flex items-center gap-3 transition-all shadow-md group"
        >
          <span>Explore All 15+ Engineered Projects</span>
          <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
