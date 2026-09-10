"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ExternalLink, 
  Code2, 
  ArrowLeft, 
  Filter, 
  Sparkles,
  Layers
} from "lucide-react";
import { projectsData, Project } from "@/data/projects";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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
          className="inline-flex items-center gap-2 text-xs font-mono text-[#c7c4d8] hover:text-[#4cd7f6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
            PORTFOLIO REPOSITORY
          </span>
          <span className="w-12 h-0.5 bg-[#4f46e5]" />
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          Engineered Projects & Software Artifacts
        </h1>
        <p className="font-sans text-base text-[#c7c4d8] max-w-2xl leading-relaxed">
          A comprehensive archive of production web applications, backend APIs, command-line utilities, and open-source contributions created by Yusuf Arrofi.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#172133] border border-[#2f3446]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#4f46e5] text-white font-bold shadow-md shadow-[#4f46e5]/25 border border-[#4f46e5]"
                  : "bg-[#151b2c] text-[#c7c4d8] border border-[#2f3446] hover:bg-[#24293b]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search className="w-4 h-4 text-[#918fa1] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, tag, or stack..."
            className="w-full bg-[#151b2c] border border-[#2f3446] text-[#F8FAFC] pl-10 pr-4 py-2 rounded-xl text-xs font-mono focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#918fa1] transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <Layers className="w-12 h-12 text-[#918fa1]" />
          <h3 className="font-sans text-lg font-bold text-[#F8FAFC]">
            No projects matched your filter criteria
          </h3>
          <p className="font-sans text-xs text-[#c7c4d8]">
            Try searching for another keyword or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-2 px-4 py-2 rounded-lg bg-[#24293b] text-xs font-mono text-[#4cd7f6] border border-[#2f3446]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md flex flex-col justify-between group hover:border-[#4cd7f6]/50 hover:shadow-xl hover:shadow-[#4cd7f6]/5 transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="h-48 w-full rounded-xl overflow-hidden bg-[#080e1d] border border-[#2f3446]/60 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-[#172133]/90 border border-[#2f3446] font-mono text-xs text-[#4cd7f6]">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
                    {project.subtitle || project.category}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-[#F8FAFC]">
                    {project.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#c7c4d8] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-[#2f3446]/50 mt-6">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#151b2c] border border-[#2f3446]/60 text-[#CBD5E1] font-mono text-[11px] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#CBD5E1] hover:text-[#4cd7f6] transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#918fa1]">Private Repository</span>
                  )}

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4cd7f6]/10 hover:bg-[#4cd7f6]/20 border border-[#4cd7f6]/30 text-xs font-mono font-bold text-[#4cd7f6] transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
