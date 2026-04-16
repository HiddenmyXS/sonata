"use client";

import HeroSection from "./HeroSection";
import WhyChooseSection from "./WhySection";
import PricingSection from "./PricingSection";
import CTASection from "./CtaSection";
import ClientWrapping from "@/components/ClientWrapping";
import TestimonialsSection from "./TestiSection";
import LocationSection from "./LocationSection";
import FaqSection from "./FaqSection";
import TechSection from "./TechSection";
import '../globals.css';

export default function HomeComponent() {
  return (
    <ClientWrapping>
      <main className="flex flex-col items-center w-full min-h-screen bg-[#08080a] text-white font-sans selection:bg-purple-500/30">
        {/* Persistent ambient layer — creates visual continuity across all sections */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 85% 15%, rgba(109,40,217,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 35% at 15% 85%, rgba(79,70,229,0.05) 0%, transparent 60%)
            `,
          }}
        />
        <HeroSection />
        <WhyChooseSection />
        <LocationSection />
        <TestimonialsSection />
        <TechSection />
        <PricingSection />
        <FaqSection />
        <CTASection />
      </main>
    </ClientWrapping>
  );
}
