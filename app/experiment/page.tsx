"use client";

import Image from "next/image";
import Header from "../component/Head";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"
import FastMarquee from "react-fast-marquee";
import { Particles } from "@/components/ui/particles";
import  TextAnimation from "@/components/TextType";
import { Safari } from "@/components/ui/safari";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BubblesIcon, ChartBarIcon, CloudLightning, Code, Container, MoveRight, Gamepad, Gamepad2, GamepadIcon, LightbulbOff, LucideCloudLightning, MessageCircle, Server, ChevronLeft, ChevronRight, Shield, User2Icon, User } from "lucide-react";
import { Button } from "@radix-ui/themes";

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

const texts = [
    "Maximum Speed Without Breaking Your Budget"
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    { src: '/aset/page-1.jpeg', alt: 'Northden PulcraOS - Page 1' },
    { src: '/aset/pulcra.svg', alt: 'Northden PulcraOS - Page 2' },
    { src: '/aset/page-3.jpeg', alt: 'Northden PulcraOS - Page 3' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  
  },[]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);
  

  return (
    <main className={`flex flex-col items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div id="sticky-header" className="top-0 left-0 overflow-x-hidden w-full z-50 transition-transform duration-300" style={{ transform: 'translateY(0)' }}>
        <Header />
        <div className="relative w-full h-full from-slate-900/50 to-transparent bg-gradient-to-r overflow-hidden">
            <Particles/>
            <div className="-mt-190 inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className={cn("group rounded-full border border-white/10 bg-slate-900/20 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/50 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                    <AnimatedShinyText className="inline-flex items-center justify-center text-lg px-4 py-1 transition ease-out text-neutral-300 hover:text-neutral-900 hover:duration-300 hover:dark:text-neutral-600">
                    <span>✨ Introducing Sonata Themes!</span>
                    <MoveRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
                <div className="w-full h-fit justify-center items-center flex flex-col px-4 mt-15 m-20">
                    <TextAnimation 
                    text={texts}
                    className="h-80 text-4xl justify-center text-center md:text-5xl lg:text-8xl font-extrabold mb-6 lg:mb-5 text-transparent max-w-4xl bg-clip-text
                        bg-gradient-to-r from-gray-300/80 to-white
                        drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
                        -shadow-[0_0_60px_rgba(34,211,238,0.4)]
                        transition-all duration-500"
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    /> 
                    <span className="text-base md:text-lg text-center justify-center text-white/90 mb-6 lg:mb-8 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id arcu eu massa hendrerit egestas vitae at turpis.
                    </span>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#list-game" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                        <Gamepad2 className="w-5 h-5" />
                        List Server Games
                    </a>
                    <a href="/chat" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                        <MessageCircle className="w-5 h-5" />
                        Chat Question
                    </a>
                    </div>
                </div>

                <div className="items-center w-7xl" style={{transform: 'perspective(1200px) rotateX(10deg) rotateY(0deg)',transformStyle: 'preserve-3d'}}>
                    <Safari
                        url="mulyono.com"
                    />
                </div>
            </div>
        </div>
        
        </div>
    </main>
  );
}