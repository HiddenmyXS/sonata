"use client";

import HeroSection from "./HeroSection";
import TechSection from "./TechSection";
import ShowcaseSection from "./ShowcaseSection";
import WorkflowSection from "./WorkflowSection";
import CtaSection from "./CtaSection";

export default function WebDevPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-900 text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <HeroSection />
      <TechSection />
      <ShowcaseSection />
      <WorkflowSection />
      <CtaSection />
    </main>
  );
}