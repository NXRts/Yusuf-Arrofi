import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatsRow from "@/components/sections/StatsRow";
import Capabilities from "@/components/sections/Capabilities";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import GitActivity from "@/components/sections/GitActivity";
import Testimonials from "@/components/sections/Testimonials";
import ContactTerminal from "@/components/sections/ContactTerminal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsRow />
      <Capabilities />
      <FeaturedProjects />
      <ExperienceTimeline />
      <GitActivity />
      <Testimonials />
      <ContactTerminal />
    </div>
  );
}
