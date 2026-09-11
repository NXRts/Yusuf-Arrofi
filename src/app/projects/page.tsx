"use client";

import { projectsData, Project } from "@/data/projects";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import { ArrowLeft, ArrowRight, Layers, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "flagship", label: "Flagship" },
    { id: "fullstack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & SaaS" },
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
    <div className="w-full pt-28 pb-20 max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-10">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-secondary tracking-wider">
            PORTFOLIO REPOSITORY
          </span>
          <span className="w-12 h-0.5 bg-primary-container" />
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
          Engineered Projects & Software Artifacts
        </h1>
        <p className="font-sans text-base text-on-surface-variant max-w-2xl leading-relaxed">
          A comprehensive archive of production web applications, backend APIs,
          command-line utilities, and open-source contributions created by Yusuf
          Arrofi.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-elevated border border-surface-variant">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary-container text-white font-bold shadow-md shadow-primary-container/25 border border-primary-container"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-65 sm:min-w-[320px]">
          <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, tag, or stack..."
            className="cyber-input w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <Layers className="w-12 h-12 text-outline" />
          <h3 className="font-sans text-lg font-bold text-text-primary">
            No projects matched your filter criteria
          </h3>
          <p className="font-sans text-xs text-on-surface-variant">
            Try searching for another keyword or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-2 px-4 py-2 rounded-lg bg-surface-container-high text-xs font-mono text-secondary border border-surface-variant"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between group hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all"
            >
              <div className="flex flex-col gap-4">
                {/* Image Display - Full edge-to-edge */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-container-lowest border border-surface-variant/60 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-surface-elevated/90 border border-surface-variant font-mono text-xs text-secondary backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-secondary uppercase tracking-wider font-semibold">
                    {project.subtitle || project.category}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-surface-variant/50 mt-6">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-low border border-surface-variant/60 text-text-secondary font-mono text-[11px] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-outline uppercase tracking-wider">
                    {project.metrics?.platform || project.category}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-surface text-secondary border border-surface-variant/80 hover:border-secondary text-xs font-mono font-semibold transition-all shadow-xs cursor-pointer group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
