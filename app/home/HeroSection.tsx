"use client";

import { useRef } from "react";
import { 
  MessageCircle, 
  Zap, 
  Activity, 
  ShieldCheck, 
  HardDrive, 
  Wifi, 
  Headset,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WordRotate } from "@/components/ui/word-rotate";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rotatingWords = [
    "Next Level!",
    "Fast & Reliable!",
    "Always Here!",
  ];

  return (
    <section 
      ref={containerRef}
      aria-label="Hero Section - Next-Gen Hosting Platform"
      role="region"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#08080a] px-6 lg:px-12 font-sans"
      id="hero-section"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 100% 40%, rgba(109,40,217,0.45) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 90% 70%, rgba(79,70,229,0.35) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 75% 10%, rgba(147,51,234,0.3) 0%, transparent 55%),
              radial-gradient(ellipse 40% 60% at 5%  50%, rgba(55,48,163,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 70% 40% at 50% 90%, rgba(88,28,135,0.15) 0%, transparent 60%)
            `
          }}
        />
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 95% 30%, rgba(167,139,250,0.22) 0%, transparent 60%),
              radial-gradient(ellipse 45% 55% at 85% 80%, rgba(99,102,241,0.18) 0%, transparent 55%),
              radial-gradient(ellipse 35% 30% at 60% 5%,  rgba(192,132,252,0.18) 0%, transparent 50%)
            `
          }}
        />
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(109,40,217,0.06) 0%, transparent 30%),
              linear-gradient(to left,   rgba(109,40,217,0.08) 0%, transparent 50%)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 120% at 50% 50%, transparent 55%, rgba(8,8,10,0.6) 100%)
          `
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="rounded-full border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl px-4 py-1.5 inline-flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse mr-3 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-400">
                New! App Hosting US Location | 🇺🇸
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-white leading-[1.05] mb-8"
          >
            <span className="block mb-2">Next-Gen Host</span>
            <WordRotate 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 font-medium" 
              words={rotatingWords} 
              duration={3000} 
            />
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-base md:text-lg text-zinc-400 max-w-lg mb-12 leading-relaxed"
          >
            Experience <span className="text-purple-300 font-medium">next-gen hosting</span> server performance with enterprise-grade security and support.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="group flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-lg text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors duration-200">
              <Zap className="w-4 h-4" />
              Deploy Server
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-lg text-sm font-semibold text-zinc-300 border border-zinc-700/80 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200">
              <MessageCircle className="w-4 h-4" />
              Join Community
            </button>
          </motion.div>
        </motion.div>
        <div className="lg:col-span-5 relative h-[400px] lg:h-[500px]">
          {[
            { label: "99.9% Uptime",     icon: Activity,    color: "text-emerald-400", border: "border-emerald-500/25", bg: "bg-emerald-500/10", top: "10%", left: "10%", delay: 0.5  },
            { label: "DDoS Protection",  icon: ShieldCheck, color: "text-indigo-400",  border: "border-indigo-500/25",  bg: "bg-indigo-500/10",  top: "25%", left: "55%", delay: 0.65 },
            { label: "NVMe SSD",         icon: HardDrive,   color: "text-purple-400",  border: "border-purple-500/25",  bg: "bg-purple-500/10",  top: "50%", left: "15%", delay: 0.55 },
            { label: "Low Latency",      icon: Wifi,        color: "text-blue-400",    border: "border-blue-500/25",    bg: "bg-blue-500/10",    top: "70%", left: "50%", delay: 0.70 },
            { label: "24/7 Support",     icon: Headset,     color: "text-rose-400",    border: "border-rose-500/25",    bg: "bg-rose-500/10",    top: "85%", left: "5%",  delay: 0.60 },
          ].map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tag.delay }}
              className={cn(
                "absolute flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-zinc-300 border backdrop-blur-xl",
                tag.border, tag.bg
              )}
              style={{ top: tag.top, left: tag.left }}
            >
              <tag.icon className={cn("w-3.5 h-3.5", tag.color)} />
              <span>{tag.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}