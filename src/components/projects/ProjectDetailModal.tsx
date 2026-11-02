"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
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
      if (e.key === "Escape") onClose();
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-[#111317] border border-[#232732] rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl animate-in zoom-in-95 duration-150 text-[#f4f4f6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded bg-[#14171d] hover:bg-[#1a1e26] text-[#9ca3af] hover:text-[#f4f4f6] border border-[#232732] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image Header */}
        <div className="p-4 sm:p-6 pb-0">
          <div className="w-full aspect-video rounded overflow-hidden bg-[#08090b] border border-[#232732] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0c0d10]/90 border border-[#232732] font-mono text-[11px] text-[#3b82f6] uppercase tracking-wider">
              {project.category}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 sm:pt-4 flex flex-col gap-6">
          {/* Header Title & Subtitle */}
          <div className="flex flex-col gap-1 pr-10">
            <span className="font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              {project.subtitle || project.category}
            </span>
            <h2 
              id="modal-project-title"
              className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f4f6]"
            >
              {project.title}
            </h2>
          </div>

          {/* Metrics bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded bg-[#0c0d10] border border-[#232732] font-mono text-xs">
              {project.metrics.platform && (
                <div>
                  <span className="text-[#6b7280] block text-[10px] uppercase">Platform</span>
                  <span className="text-[#f4f4f6] font-medium">{project.metrics.platform}</span>
                </div>
              )}
              {project.metrics.architecture && (
                <div>
                  <span className="text-[#6b7280] block text-[10px] uppercase">Architecture</span>
                  <span className="text-[#3b82f6] font-medium">{project.metrics.architecture}</span>
                </div>
              )}
              {project.metrics.deployment && (
                <div>
                  <span className="text-[#6b7280] block text-[10px] uppercase">Deployment</span>
                  <span className="text-[#f4f4f6] font-medium">{project.metrics.deployment}</span>
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
              Overview
            </span>
            <p className="font-sans text-sm text-[#9ca3af] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Problem & Contribution */}
          {(project.problem || project.contribution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#232732]/60">
              {project.problem && (
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
                    The Challenge
                  </span>
                  <p className="font-sans text-xs text-[#9ca3af] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.contribution && (
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
                    My Contribution
                  </span>
                  <p className="font-sans text-xs text-[#9ca3af] leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technical Decisions */}
          {project.technicalDecisions && project.technicalDecisions.length > 0 && (
            <div className="flex flex-col gap-2 pt-3 border-t border-[#232732]/60">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
                Key Technical Decisions
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-[#9ca3af]">
                {project.technicalDecisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3b82f6] mt-0.5">•</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-2 pt-3 border-t border-[#232732]/60">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
                Verified Capabilities
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9ca3af]">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3b82f6]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-[#14171d] border border-[#232732] text-[#9ca3af] font-mono text-[11px] rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#232732] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-xs transition-colors"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#14171d] hover:bg-[#1a1e26] text-[#f4f4f6] border border-[#232732] font-mono text-xs transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#6b7280] hover:text-[#f4f4f6] cursor-pointer"
            >
              Close Spec ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
