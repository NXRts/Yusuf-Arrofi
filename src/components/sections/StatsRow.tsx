import React from "react";
import { profileData } from "@/data/profile";

export default function StatsRow() {
  const stats = [
    {
      value: profileData.stats.publicRepos,
      label: "Public Repos",
      subtitle: "GitHub Open Source",
      accent: "text-text-primary",
    },
    {
      value: profileData.stats.shippedApps,
      label: "Shipped Apps",
      subtitle: "Web & Desktop GUI",
      accent: "text-primary",
    },
    {
      value: profileData.stats.passionate,
      label: "Passionate",
      subtitle: "Continuous Learner",
      accent: "text-tertiary",
    },
    {
      value: profileData.stats.appUsers,
      label: "App Users",
      subtitle: "JapanApp & Web Suites",
      accent: "text-secondary",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-3 sm:py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between"
          >
            <span className={`font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${stat.accent}`}>
              {stat.value}
            </span>
            <div className="flex flex-col mt-2 sm:mt-3">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-secondary uppercase tracking-wider truncate">
                {stat.label}
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-text-secondary mt-0.5 truncate">
                {stat.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
