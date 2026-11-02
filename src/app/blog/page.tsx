"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { blogPostsData } from "@/data/blogPosts";

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
    <div className="w-full pt-28 sm:pt-36 pb-20 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-10 sm:gap-14 bg-[#0c0d10] text-[#f4f4f6]">
      {/* Top Breadcrumb & Language Switch */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Overview</span>
        </Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#111317] border border-[#232732] rounded font-mono text-xs">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
              language === "en"
                ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                : "text-[#9ca3af] hover:text-[#f4f4f6]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
              language === "id"
                ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                : "text-[#9ca3af] hover:text-[#f4f4f6]"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3 pb-8 border-b border-[#232732]/60">
        <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
          <span>JOURNAL</span>
          <span className="w-8 h-px bg-[#3b82f6]" />
          <span>ENGINEERING NOTES & ESSAYS</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
          {language === "en" ? "Articles & Engineering Notes" : "Artikel & Catatan Rekayasa"}
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed">
          {language === "en"
            ? "Reflections on systems programming, machine learning anomaly detection, Spaced Repetition algorithms, and full-stack software architecture."
            : "Refleksi seputar pemrograman sistem, deteksi anomali machine learning, algoritma Spaced Repetition, dan arsitektur software full-stack."}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded border border-[#232732] bg-[#111317]">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                  : "bg-[#14171d] text-[#9ca3af] hover:text-[#f4f4f6] border border-[#232732]"
              }`}
            >
              {cat === "all" ? (language === "en" ? "All Topics" : "Semua Topik") : cat}
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
            placeholder={language === "en" ? "Search articles..." : "Cari artikel..."}
            className="w-full pl-9 pr-3 py-1.5 rounded bg-[#0c0d10] border border-[#232732] text-xs font-mono text-[#f4f4f6] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      </div>

      {/* Articles List / Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3 border border-[#232732] rounded bg-[#111317]">
          <BookOpen className="w-8 h-8 text-[#6b7280]" />
          <h3 className="font-sans text-base font-bold text-[#f4f4f6]">
            {language === "en" ? "No articles match your query" : "Tidak ada artikel yang cocok"}
          </h3>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-2 px-3 py-1.5 rounded bg-[#14171d] text-xs font-mono text-[#3b82f6] border border-[#232732]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="p-5 rounded border border-[#232732] bg-[#111317] flex flex-col justify-between gap-5 group hover:border-[#3b82f6]/40 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="w-full h-44 rounded overflow-hidden bg-[#08090b] border border-[#232732] relative">
                  <img
                    src={post.image}
                    alt={post.title[language]}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0c0d10]/90 border border-[#232732] font-mono text-[10px] text-[#3b82f6] uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#6b7280]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-sans text-lg font-bold text-[#f4f4f6] group-hover:text-white transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title[language]}
                    </Link>
                  </h2>
                </div>

                <p className="font-sans text-xs text-[#9ca3af] line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232732]/60 flex items-center justify-between font-mono text-xs">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-[#14171d] border border-[#232732] text-[#9ca3af] text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#3b82f6] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
