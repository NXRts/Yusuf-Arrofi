"use client";

import { projectsData, Project } from "@/data/projects";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import { ArrowLeft, Search, Layers, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "flagship", label: "Flagship" },
    { id: "fullstack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Local Tools" },
    { id: "desktop", label: "Desktop GUI" },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 max-w-container-max mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8 sm:gap-12 lg:gap-14 bg-[#0c0d10] text-[#f4f4f6]">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="py-1.5 inline-flex items-center gap-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span>Return to Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3 pb-6 sm:pb-8 border-b border-[#232732]/60">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
          <span>CATALOG</span>
          <span className="w-8 h-px bg-[#3b82f6]" />
          <span>INDEX OF VERIFIED WORKS</span>
        </div>
        <h1 className="font-sans editorial-h1 font-bold tracking-tight text-[#f4f4f6]">
          Software Archive & Projects
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed">
          Complete repository of web applications, backend services, desktop utilities, and open-source software engineered by Muhammad Yusuf Arrofi.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded border border-[#232732] bg-surface-container-low">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 font-mono text-xs overscroll-x-contain">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 rounded text-xs transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                  : "bg-surface-container text-[#9ca3af] hover:text-[#f4f4f6] border border-[#232732]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-auto md:min-w-65 lg:min-w-[280px]">
          <Search className="w-3.5 h-3.5 text-[#6b7280] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, stack, or tag..."
            className="w-full pl-9 pr-3 py-2 rounded bg-[#0c0d10] border border-[#232732] text-xs font-mono text-[#f4f4f6] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3 border border-[#232732] rounded bg-surface-container-low">
          <Layers className="w-8 h-8 text-[#6b7280]" />
          <h3 className="font-sans text-base font-bold text-[#f4f4f6]">
            No projects matched your criteria
          </h3>
          <p className="font-sans text-xs text-[#9ca3af]">
            Try a different search query or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-2 px-3 py-2 rounded bg-surface-container text-xs font-mono text-[#3b82f6] border border-[#232732] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-5 rounded border border-[#232732] bg-surface-container-low flex flex-col justify-between gap-5 group hover:border-[#3b82f6]/40 transition-colors min-w-0"
            >
              <div className="flex flex-col gap-4">
                {/* Real screenshot */}
                <div className="w-full aspect-video rounded overflow-hidden bg-[#08090b] border border-[#232732] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#0c0d10]/90 border border-[#232732] font-mono text-[10px] text-[#3b82f6] uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] text-[#6b7280] uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h2 className="font-sans text-lg font-bold text-[#f4f4f6] group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                </div>

                <p className="font-sans text-xs text-[#9ca3af] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 pt-4 border-t border-[#232732]/60">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-surface-container border border-[#232732] text-[#9ca3af] font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-1.5 text-[#3b82f6] hover:underline cursor-pointer"
                  >
                    Inspect Spec →
                  </button>

                  <div className="flex items-center gap-1">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded text-[#9ca3af] hover:text-white hover:bg-surface-container transition-colors"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded text-[#9ca3af] hover:text-white hover:bg-surface-container transition-colors"
                        aria-label={`Source code of ${project.title}`}
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
