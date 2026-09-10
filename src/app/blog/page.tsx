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
          className="inline-flex items-center gap-2 text-xs font-mono text-[#c7c4d8] hover:text-[#4cd7f6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>

        {/* Language Pill Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#172133] border border-[#2f3446] rounded-xl">
          <Globe className="w-3.5 h-3.5 text-[#4cd7f6] ml-2 mr-1" />
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "en"
                ? "bg-[#4f46e5] text-white font-bold"
                : "text-[#c7c4d8] hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "id"
                ? "bg-[#4f46e5] text-white font-bold"
                : "text-[#c7c4d8] hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
            TECHNICAL JOURNAL & ESSAYS
          </span>
          <span className="w-12 h-0.5 bg-[#4f46e5]" />
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          {language === "en" ? "Engineering Insights & Articles" : "Artikel & Catatan Rekayasa Perangkat Lunak"}
        </h1>
        <p className="font-sans text-base text-[#c7c4d8] max-w-2xl leading-relaxed">
          {language === "en"
            ? "Deep dives into systems programming, machine learning anomaly detection, full-stack architecture, and zero-bloat web development."
            : "Catatan mendalam seputar pemrograman sistem, deteksi anomali machine learning, arsitektur full-stack, dan pengembangan web modern."}
        </p>
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#172133] border border-[#2f3446]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#4f46e5] text-white font-bold shadow-md shadow-[#4f46e5]/25 border border-[#4f46e5]"
                  : "bg-[#151b2c] text-[#c7c4d8] border border-[#2f3446] hover:bg-[#24293b]"
              }`}
            >
              {cat === "all" ? (language === "en" ? "All Categories" : "Semua Topik") : cat}
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
            placeholder={language === "en" ? "Search articles..." : "Cari artikel..."}
            className="w-full bg-[#151b2c] border border-[#2f3446] text-[#F8FAFC] pl-10 pr-4 py-2 rounded-xl text-xs font-mono focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#918fa1] transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md flex flex-col justify-between group hover:border-[#4cd7f6]/50 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-[#080e1d] border border-[#2f3446]/60 relative">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-[#172133]/90 border border-[#2f3446] font-mono text-xs text-[#4cd7f6]">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#918fa1]">
                  <span className="flex items-center gap-1 text-[#c3c0ff]">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-sans text-lg font-bold text-[#F8FAFC] group-hover:text-[#4cd7f6] transition-colors mt-1">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title[language]}
                  </Link>
                </h2>

                <p className="font-sans text-sm text-[#c7c4d8] line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2f3446]/50 mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#151b2c] border border-[#2f3446]/60 text-[11px] font-mono text-[#CBD5E1]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4cd7f6] hover:text-[#acedff] transition-colors group-hover:translate-x-1"
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
