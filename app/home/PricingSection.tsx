"use client";

import { useState } from "react";
import { Check, Zap, Server, Shield, DollarSign, Clock, Activity, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingPlans = [
  {
    name: "CORE",
    tagline: "Stable & Economical",
    price: "Rp 15.000",
    period: "/mo",
    description: "Ideal for websites, Discord bots, and lightweight databases.",
    recommendation: "Best for Web & Bots",
    icon: Server,
    features: [
      "From 1 vCPU Core",
      "From 1GB RAM",
      "From 5GB NVMe SSD",
      "1Gbps Network Port",
      "Standard DDoS Protection",
      "24/7 Technical Support",
    ],
    highlight: false,
    linkId: "core",
    accentColor: "emerald",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/8 border-emerald-500/15",
    checkBg: "bg-emerald-500/10",
    checkColor: "text-emerald-400",
    glow: "rgba(16,185,129,0.12)",
    hoverGlow: "rgba(16,185,129,0.2)",
    borderActive: "border-emerald-500/35",
    badgeColor: "text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
  },
  {
    name: "FLUX",
    tagline: "High Performance Gaming",
    price: "Rp 20.000",
    period: "/mo",
    description: "High performance with fast clock speeds tailored for game servers.",
    recommendation: "Most Popular",
    icon: Zap,
    features: [
      "From 2 vCPU High-Freq",
      "From 2GB DDR4 RAM",
      "From 512GB NVMe Gen 4",
      "10Gbps Network Port",
      "Advanced Game DDoS",
      "Priority Support Routing",
    ],
    highlight: true,
    linkId: "flux",
    accentColor: "purple",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    checkBg: "bg-purple-500/15",
    checkColor: "text-purple-300",
    glow: "rgba(168,85,247,0.18)",
    hoverGlow: "rgba(168,85,247,0.3)",
    borderActive: "border-purple-500/50",
    badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/30",
  },
  {
    name: "ATLAS",
    tagline: "Extreme Compute",
    price: "Rp 30.000",
    period: "/mo",
    description: "Full power for enterprise, Mega SMPs, and heavy workloads.",
    recommendation: "Best for Enterprise",
    icon: Shield,
    features: [
      "From 2 CPU Dedicated",
      "Up to 32GB DDR5 RAM",
      "Up to 2TB Enterprise NVMe",
      "L7 Custom Mitigation",
      "Dedicated Account Manager",
    ],
    highlight: false,
    linkId: "atlas",
    accentColor: "indigo",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/8 border-indigo-500/15",
    checkBg: "bg-indigo-500/10",
    checkColor: "text-indigo-400",
    glow: "rgba(99,102,241,0.12)",
    hoverGlow: "rgba(99,102,241,0.22)",
    borderActive: "border-indigo-500/35",
    badgeColor: "text-indigo-400 bg-indigo-500/8 border-indigo-500/20",
  },
];

const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const active = hovered || plan.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full",
        active ? plan.borderActive : "border-white/6"
      )}
      style={{
        background: plan.highlight
          ? "rgba(109,40,217,0.05)"
          : hovered
          ? "rgba(255,255,255,0.025)"
          : "rgba(255,255,255,0.02)",
        boxShadow: active
          ? `0 0 32px ${plan.glow}, 0 1px 0 rgba(255,255,255,0.05) inset`
          : "0 1px 0 rgba(255,255,255,0.04) inset",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, transparent, ${plan.glow.replace("0.12", "0.5").replace("0.18", "0.55")}, transparent)`,
          opacity: active ? 1 : 0,
        }}
      />
      <div className="flex flex-col h-full p-7">
        <div className="flex items-start justify-between mb-6">
          <div className={cn("p-3 rounded-xl border", plan.iconBg)}>
            <plan.icon className={cn("w-5 h-5", plan.iconColor)} />
          </div>
          {plan.highlight ? (
            <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-300">
              <Sparkles className="w-2.5 h-2.5" />
              Most Popular
            </span>
          ) : (
            <span className={cn("text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border", plan.badgeColor)}>
              {plan.recommendation}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white tracking-tight mb-0.5">{plan.name}</h3>
        <p className={cn("text-xs font-bold uppercase tracking-widest mb-3", plan.iconColor)}>
          {plan.tagline}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-7 min-h-12">
          {plan.description}
        </p>
        <div className="mb-6">
          <span className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold">Starting from</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-4xl font-light tracking-tighter text-white">{plan.price}</span>
            <span className="text-slate-500 text-sm">{plan.period}</span>
          </div>
        </div>
        <div className="h-px bg-white/5 mb-6" />
        <div className="grid grid-cols-2 gap-2.5 mb-7">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/3 border border-white/5">
            <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">Uptime</p>
              <p className="text-xs text-white font-medium">99.9%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/3 border border-white/5">
            <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <div>
              <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">Setup</p>
              <p className="text-xs text-white font-medium">Instant</p>
            </div>
          </div>
        </div>
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <div className={cn("mt-0.5 p-0.5 rounded-full shrink-0", plan.checkBg)}>
                <Check className={cn("w-3 h-3", plan.checkColor)} />
              </div>
              <span className="text-slate-400 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/game-host?plan=${plan.linkId}`} className="block mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer group/btn",
              plan.highlight
                ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white border border-purple-500/40 shadow-lg shadow-purple-900/40"
                : "bg-white/4 border border-white/8 text-slate-300 hover:bg-white/6 hover:text-white hover:border-white/14"
            )}
          >
            Deploy {plan.name}
            <ArrowRight className="w-4 h-4 opacity-60 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all duration-200" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 md:py-36 px-6 lg:px-8 overflow-hidden font-sans"
      style={{ background: "#08080a" }}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-28 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/4 text-slate-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
          >
            <DollarSign className="w-3.5 h-3.5 text-purple-400" />
            <span>Transparent Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              Power
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-slate-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Flexible infrastructure tailored for every need. Scale seamlessly from a simple bot host to a massive gaming cluster.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-700 text-xs mt-12 tracking-wide"
        >
          All plans include instant deployment · No setup fees · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}