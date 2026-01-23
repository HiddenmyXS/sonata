"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { LightRays } from "@/components/ui/light-rays";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rotatingWords = [
    "Masterpieces",
    "Experiences",
    "Ecosystems",
    "Identities",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-900 px-6 pt-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays 
            className="absolute top-0 left-1/2 -translate-x-1/2 opacity-60 dark:opacity-40"
            color="245, 158, 11"
        />
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full" />

        <InteractiveGridPattern
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-30 inset-0 h-full w-full fill-gray-800/40 stroke-gray-800/40"
          )}
          width={40}
          height={40}
          squares={[40, 40]}
          squaresClassName="hover:fill-amber-500/40 transition-colors duration-300"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-900 to-transparent z-10 pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="group relative rounded-full border border-amber-500/10 bg-amber-950/10 backdrop-blur-md transition-all hover:border-amber-500/30 hover:bg-amber-950/30 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-2 transition ease-out text-amber-200/90 hover:text-amber-100">
              <Sparkles className="mr-2 size-3 text-amber-400" />
              <span className="text-xs font-bold tracking-widest uppercase">Accepting New Clients</span>
              <ArrowRight className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-8 drop-shadow-2xl"
        >
          <span className="block text-gray-300 text-4xl md:text-6xl font-bold tracking-tight">
            We Craft Digital
          </span>
          <div className="relative inline-block py-2 px-4">
            <WordRotate 
              className="bg-clip-text text-transparent bg-linear-to-br from-amber-200 via-yellow-400 to-amber-600 leading-tight drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]" 
              words={rotatingWords} 
              duration={2500} 
            />
          </div>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Transformasi ide liar menjadi realitas digital yang <span className="text-amber-100 font-medium">memukau</span>. 
          Dibangun dengan presisi kode dan estetika tanpa batas.
        </motion.p>
        
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center"
        >
          <Link href="#contact" className="group relative px-8 py-4 rounded-xl bg-amber-500 text-zinc-900 font-bold text-sm overflow-hidden transition-all hover:bg-amber-400 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] active:scale-95">
            <div className="relative flex items-center gap-2 z-10">
              <Rocket className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Start Project</span>
            </div>
          </Link>

          <Link href="/portfolio" className="group px-8 py-4 rounded-xl text-sm font-bold text-gray-300 border border-white/5 bg-white/2 hover:bg-white/5 hover:text-white hover:border-amber-500/30 transition-all backdrop-blur-sm flex items-center gap-2 active:scale-95">
            <Code2 className="w-4 h-4 text-gray-500 group-hover:text-amber-400 transition-colors" />
            <span>Explore Work</span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}