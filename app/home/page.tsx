"use client";

import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import WhyChooseSection from "./WhySection";
import PricingSection from "./PricingSection";
import CTASection from "./CtaSection";
import PanelSection from "./PanelSection";
import TestimonialsSection from "./TestimonialSection";
import LocationSection from "./LocationSection";
import FaqSection from "./FaqSection";

export default function HomeComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-1000 ease-in-out font-sans selection:bg-sky-500/30 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeroSection />
      <WhyChooseSection />
      <LocationSection />
      <TestimonialsSection />
      <PanelSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
    </main>
  );
}