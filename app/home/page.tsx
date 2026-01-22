"use client";

import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import WhyChooseSection from "./WhySection";
import PricingSection from "./PricingSection";
import CTASection from "./CtaSection";
import PanelSection from "./PanelSection";
import ClientWrapping from "@/components/ClientWrapping";
import TestimonialsSection from "./TestimonialSection";
import LocationSection from "./LocationSection";
import FaqSection from "./FaqSection";
import TechSection from "./TechSection";
import CalculatorSection from "./CalculatorSection";
import CompareSection from "./CompareSection";
import SentinelSection from "./SentinelSection";

export default function HomeComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-1000 ease-in-out font-sans selection:bg-sky-500/30`}
      >
      <ClientWrapping>
      <HeroSection />
      <WhyChooseSection />
      <LocationSection />
      <TestimonialsSection />
      {/* <CompareSection /> */}
      <TechSection />
      <PanelSection />
      <SentinelSection />
      <CalculatorSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
      </ClientWrapping>
    </main>
  );
}