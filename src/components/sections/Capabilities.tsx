import React from "react";
import { Terminal, Code2, Database, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Capabilities() {
  const getIcon = (name: string, color: string) => {
    switch (name) {
      case "Terminal":
        return <Terminal className="w-6 h-6" style={{ color }} />;
      case "Code2":
        return <Code2 className="w-6 h-6" style={{ color }} />;
      case "Database":
        return <Database className="w-6 h-6" style={{ color }} />;
      case "Cpu":
      default:
        return <Cpu className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="capabilities" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-12 sm:py-16 flex flex-col gap-6 sm:gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-secondary tracking-wider">
              01 // CAPABILITIES
            </span>
            <span className="w-12 h-0.5 bg-primary-container" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
            Engineered for Precision & Resilience
          </h2>
        </div>
        <p className="font-sans text-sm text-on-surface-variant max-w-md">
          A balanced toolchain designed to build lightning-fast web client layers backed by highly concurrent distributed services.
        </p>
      </div>

      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {profileData.capabilities.map((item) => (
          <div
            key={item.id}
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between group hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-surface-container-high border border-surface-variant flex items-center justify-center shadow-inner">
                {getIcon(item.iconName, item.accentColor)}
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-text-secondary">
                  {item.subtitle}
                </span>
              </div>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 border-t border-surface-variant/40 mt-5 sm:mt-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-surface-container-low border border-surface-variant/60 rounded-md font-mono text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
