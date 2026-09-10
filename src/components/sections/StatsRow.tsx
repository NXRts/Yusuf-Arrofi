import React from "react";
import { profileData } from "@/data/profile";

export default function StatsRow() {
  const stats = [
    {
      value: profileData.stats.publicRepos,
      label: "Public Repos",
      subtitle: "GitHub Open Source",
      accent: "text-[#F8FAFC]",
    },
    {
      value: profileData.stats.shippedApps,
      label: "Shipped Apps",
      subtitle: "Web & Desktop GUI",
      accent: "text-[#c3c0ff]",
    },
    {
      value: profileData.stats.passionate,
      label: "Passionate",
      subtitle: "Continuous Learner",
      accent: "text-[#fbabff]",
    },
    {
      value: profileData.stats.appUsers,
      label: "App Users",
      subtitle: "JapanApp & Web Suites",
      accent: "text-[#4cd7f6]",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md hover:border-[#4cd7f6]/40 transition-all flex flex-col"
          >
            <span className={`font-sans text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.accent}`}>
              {stat.value}
            </span>
            <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider mt-3">
              {stat.label}
            </span>
            <span className="font-sans text-xs text-[#CBD5E1] mt-0.5">
              {stat.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
