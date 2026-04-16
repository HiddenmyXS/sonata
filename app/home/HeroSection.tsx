"use client";

import { useRef } from "react";
import {
  MessageCircle,
  Zap,
  Activity,
  ArrowRight,
  Cpu,
  MemoryStick,
  Users,
  Globe,
  Server,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/ui/word-rotate";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 18, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
};

const stats = [
  { value: "1,500+", label: "Servers deployed",  icon: Server },
  { value: "99.9%",  label: "Uptime SLA",         icon: Activity },
  { value: "4",      label: "Active regions",      icon: Globe },
  { value: "<15m",   label: "Support response",    icon: Clock },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      aria-label="Hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#08080a] px-6 lg:px-12 font-sans"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* ── Main content — flex-1 keeps it centered, stats bar sinks to bottom ── */}
      <div className="flex-1 flex items-center relative z-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-28">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Announcement pill */}
            <motion.div variants={itemVariants} className="mb-7">
              <div className="rounded-full border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl px-4 py-1.5 inline-flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-400">
                  New — App Hosting in the US&nbsp;🇺🇸
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-[5.25rem] font-semibold tracking-tighter text-white leading-[1.05] mb-7"
            >
              <span className="block mb-1.5">Your Server,</span>
              <WordRotate
                className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-purple-400 font-medium"
                words={["Always Online.", "Built to Scale.", "Starts in 60s."]}
                duration={3000}
              />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-400 max-w-md mb-10 leading-relaxed"
            >
              Game servers, Discord bots, production apps — all on the same
              reliable infrastructure.{" "}
              <span className="text-zinc-300">
                Deploy once, forget about the server.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto"
            >
              <button className="group flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-lg text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors duration-200 shadow-lg shadow-purple-900/40">
                <Zap className="w-4 h-4" />
                Deploy Server
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-lg text-sm font-semibold text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-200">
                <MessageCircle className="w-4 h-4" />
                Join Community
              </button>
            </motion.div>
          </motion.div>

          {/* Right column — server dashboard card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px]"
            >
              <div
                className="rounded-2xl border border-white/8 overflow-hidden shadow-2xl shadow-purple-950/30"
                style={{ background: "#0c0c10" }}
              >
                {/* Card header */}
                <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <motion.span
                      animate={{ opacity: [1, 0.35, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
                    />
                    <span className="text-xs font-semibold text-white font-mono">
                      minecraft-server-01
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Running
                  </span>
                </div>

                {/* Resource bars */}
                <div className="px-5 pt-4 pb-3 space-y-3.5">
                  {[
                    { label: "CPU", icon: Cpu, value: "34%", width: "34%", gradient: "from-violet-500 to-purple-400" },
                    { label: "Memory", icon: MemoryStick, value: "3.2 / 8 GB", width: "40%", gradient: "from-indigo-500 to-blue-400" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <bar.icon className="w-3 h-3 text-zinc-600" />
                          <span className="text-[11px] text-zinc-500">{bar.label}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-mono">{bar.value}</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: bar.width }}
                          transition={{ delay: 0.9, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                          className={`h-full rounded-full bg-linear-to-r ${bar.gradient}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 px-5 pb-4">
                  {[
                    { label: "Uptime",  value: "99.9%", icon: Activity, color: "text-emerald-400" },
                    { label: "Players", value: "24/50", icon: Users,    color: "text-purple-400"  },
                    { label: "Latency", value: "3ms",   icon: Globe,    color: "text-blue-400"    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 p-2.5 text-center"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      <p className={`text-sm font-semibold font-mono ${stat.color}`}>{stat.value}</p>
                      <p className="text-[10px] text-zinc-600 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Deploy info */}
                <div
                  className="mx-5 mb-5 rounded-xl border border-white/5 p-3"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <p className="text-[10px] text-zinc-700 font-mono mb-1.5">Last deployed</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
                    <span className="text-xs text-zinc-400">v2.4.1 — Jakarta, ID</span>
                    <span className="text-[10px] text-zinc-700 ml-auto">2 min ago</span>
                  </div>
                </div>
              </div>

              {/* Floating pill */}
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
                className="absolute -right-3 top-1/3 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/8 backdrop-blur-xl shadow-lg"
                style={{ background: "rgba(12,12,16,0.92)" }}
              >
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-semibold text-white font-mono">2ms</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats bar — pinned to bottom, creates visual floor before WhySection ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
        className="relative z-20 pb-10"
      >
        <div className="max-w-7xl mx-auto border-t border-white/6 pt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg border border-white/6 bg-white/3">
                <s.icon className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">{s.value}</p>
                <p className="text-[11px] text-zinc-600 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}

          {/* Shield badge */}
          <div className="ml-auto flex items-center gap-2 text-zinc-600 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>DDoS protected on all plans</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
