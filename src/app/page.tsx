import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutSection from "@/components/sections/AboutSection";
import Capabilities from "@/components/sections/Capabilities";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import GitActivity from "@/components/sections/GitActivity";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0c0d10]">
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <Capabilities />
      <ExperienceTimeline />
      <GitActivity />
      <ContactSection />
    </div>
  );
}
