"use client";

import { useRef } from "react";
import { MessageCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rotatingWords = [
    "Next Level!",
    "Fast & Reliable!",
    "Always Here!",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 px-8"
    >
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern
          className={cn(
            "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
            "opacity-40 inset-0 h-full w-full"
          )}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-purple-500"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950 to-transparent z-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        
        <motion.div variants={itemVariants} className="mb-8">
          <div className="group rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/80 cursor-pointer">
            <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2 transition ease-out text-white hover:text-purple-300">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse mr-3 shadow-[0_0_10px_rgba(14,165,233,0.6)]"></span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-purple-500">New! App Hosting US Location | 🇺🇸</span>
            </AnimatedShinyText>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight mb-6 drop-shadow-2xl"
        >
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
            Next-Gen Host
          </span>
          <div className="drop-shadow-[0_0_40px_rgba(14,165,233,0.3)]">
            <WordRotate 
              className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-indigo-500 leading-tight" 
              words={rotatingWords} 
              duration={2500} 
            />
          </div>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Experience <span className="text-purple-400 font-semibold">next-gen hosting</span> server performance with enterprise-grade security and support that puts you at ease. Join us and take your gaming community to the Top!
        </motion.p>
        
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center"
        >
          <a href="/game-host" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white border border-purple-500 hover:border-gray800 bg-purple-500 hover:bg-purple-600 hover:text-white hover:border-gray-600 transition-all backdrop-blur-sm">
            <Zap className="w-5 h-5 text-white fill-white/50" />
            <span>Game Hosting</span>
          </a>

          <a href="/discord" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-gray-300 border border-gray-800 bg-gray-950/50 hover:bg-gray-900 hover:text-white hover:border-gray-600 transition-all backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            <span>Ask Questions</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}