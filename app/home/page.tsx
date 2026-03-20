"use client";

import { useState, useEffect } from "react";
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
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-1000 ease-in-out font-sans selection:bg-purple-500/30`}
      >
      <ClientWrapping>
      <HeroSection />
      <WhyChooseSection />
      <LocationSection />
      <TestimonialsSection />
      <TechSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
      </ClientWrapping>
    </main>
  );
}