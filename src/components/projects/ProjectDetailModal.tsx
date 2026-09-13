"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Server,
  Monitor
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-surface-elevated border border-surface-variant rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto flex flex-col relative shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-xl bg-surface-container-high/90 hover:bg-surface-bright text-on-surface-variant hover:text-white border border-surface-variant backdrop-blur-md transition-all shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media (Full Image Display) */}
        <div className="p-4 sm:p-5 md:p-7 pb-0">
          <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-surface-container-lowest border border-surface-variant/80 relative shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-1 rounded-lg bg-surface-elevated/90 border border-surface-variant font-mono text-xs font-semibold text-secondary uppercase tracking-wider backdrop-blur-xs">
              {project.category}
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-5 md:p-7 flex flex-col gap-5 sm:gap-6">
          {/* Title and Subtitle */}
          <div className="flex flex-col gap-1 pr-6 sm:pr-8">
            <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
              {project.subtitle || project.category}
            </span>
            <h2 
              id="modal-project-title"
              className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight"
            >
              {project.title}
            </h2>
          </div>

          {/* Metrics / Specifications Bar (if available) */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-surface-variant/60 font-mono text-xs">
              {project.metrics.platform && (
                <div className="flex flex-col">
                  <span className="text-on-surface-variant/70 text-[11px]">Platform</span>
                  <span className="text-text-primary font-semibold mt-0.5">
                    {project.metrics.platform}
                  </span>
                </div>
              )}
              {project.metrics.tech && (
                <div className="flex flex-col">
                  <span className="text-on-surface-variant/70 text-[11px]">Core Stack</span>
                  <span className="text-secondary font-semibold mt-0.5">
                    {project.metrics.tech}
                  </span>
                </div>
              )}
              {project.metrics.deployment && (
                <div className="flex flex-col">
                  <span className="text-on-surface-variant/70 text-[11px]">Deployment</span>
                  <span className="text-primary font-semibold mt-0.5">
                    {project.metrics.deployment}
                  </span>
                </div>
              )}
              {project.metrics.users && (
                <div className="flex flex-col">
                  <span className="text-on-surface-variant/70 text-[11px]">Reach</span>
                  <span className="text-secondary font-semibold mt-0.5">
                    {project.metrics.users}
                  </span>
                </div>
              )}
              {project.metrics.curriculum && (
                <div className="flex flex-col">
                  <span className="text-on-surface-variant/70 text-[11px]">Curriculum</span>
                  <span className="text-primary font-semibold mt-0.5">
                    {project.metrics.curriculum}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Full Narrative Description */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Project Overview</span>
            </h3>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Features Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                <span>Key Features & Capabilities</span>
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary font-sans leading-relaxed p-2.5 rounded-lg bg-surface-container-low/60 border border-surface-variant/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Pills */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-secondary" />
              <span>Technologies & Tooling</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-surface-container-high border border-surface-variant rounded-md text-xs font-mono text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Relocated Action Footer */}
          <div className="pt-4 sm:pt-5 border-t border-surface-variant/60 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 mt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto min-h-10.5 justify-center text-center px-4 py-2.5 rounded-xl border border-surface-variant bg-surface-container-low hover:bg-surface-container-high text-xs font-mono text-on-surface-variant hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-10.5 justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-variant bg-surface-container-high hover:bg-surface-bright text-xs font-mono font-semibold text-text-primary hover:text-white transition-all shadow-sm"
                >
                  <Code2 className="w-4 h-4 text-secondary" />
                  <span>Source Code</span>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-10.5 justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/90 text-surface font-mono text-xs font-bold transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/30"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
