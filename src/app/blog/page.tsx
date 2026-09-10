"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Globe } from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/blogPosts";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [language, setLanguage] = useState<"en" | "id">("en");

  const categories = ["all", "Data Science", "Case Study", "Project", "Technology", "Tutorial", "Development", "Programming"];

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const title = post.title[language].toLowerCase();
      const excerpt = post.excerpt[language].toLowerCase();
      const matchesSearch = title.includes(query) || excerpt.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, language]);

  return (
    <div className="w-full pt-28 pb-20 max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-10">
      {/* Top Breadcrumb & Language Switch */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>

        {/* Language Pill Switcher */}
        <div className="flex items-center gap-1 p-1 bg-surface-elevated border border-surface-variant rounded-xl">
          <Globe className="w-3.5 h-3.5 text-secondary ml-2 mr-1" />
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "en"
                ? "bg-primary-container text-white font-bold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "id"
                ? "bg-primary-container text-white font-bold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-secondary tracking-wider">
            TECHNICAL JOURNAL & ESSAYS
          </span>
          <span className="w-12 h-0.5 bg-primary-container" />
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
          {language === "en" ? "Engineering Insights & Articles" : "Artikel & Catatan Rekayasa Perangkat Lunak"}
        </h1>
        <p className="font-sans text-base text-on-surface-variant max-w-2xl leading-relaxed">
          {language === "en"
            ? "Deep dives into systems programming, machine learning anomaly detection, full-stack architecture, and zero-bloat web development."
            : "Catatan mendalam seputar pemrograman sistem, deteksi anomali machine learning, arsitektur full-stack, dan pengembangan web modern."}
        </p>
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-elevated border border-surface-variant">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary-container text-white font-bold shadow-md shadow-primary-container/25 border border-primary-container"
                  : "bg-surface-container-low text-on-surface-variant border border-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat === "all" ? (language === "en" ? "All Categories" : "Semua Topik") : cat}
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
            placeholder={language === "en" ? "Search articles..." : "Cari artikel..."}
            className="cyber-input w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between group hover:border-secondary/50 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container-lowest border border-surface-variant/60 relative">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-surface-elevated/90 border border-surface-variant font-mono text-xs text-secondary">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3 font-mono text-[11px] text-outline">
                  <span className="flex items-center gap-1 text-primary">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-sans text-lg font-bold text-text-primary group-hover:text-secondary transition-colors mt-1">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title[language]}
                  </Link>
                </h2>

                <p className="font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-surface-variant/50 mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-surface-container-low border border-surface-variant/60 text-[11px] font-mono text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-secondary hover:text-secondary-fixed transition-colors group-hover:translate-x-1"
              >
                <span>{language === "en" ? "Read Article" : "Baca Artikel"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
