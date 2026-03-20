"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  LayoutTemplate, 
  PackageOpen, 
  Settings2, 
  Globe, 
  FolderOpen, 
  ChevronRight,
  Terminal,
  ArrowUpRight
} from "lucide-react";
import { Safari } from "@/components/ui/safari"; 
import { cn } from "@/lib/utils";

const panelFeatures = [
  {
    title: "Clean UI",
    desc: "Modern & intuitive interface designed for absolute clarity without distractions.",
    icon: LayoutTemplate,
    color: "text-violet-400",
    bg: "bg-violet-500/8",
    border: "border-violet-500/15",
    activeBorder: "border-violet-500/50",
    activeBg: "bg-violet-500/12",
    glow: "rgba(139,92,246,0.15)",
    activeGlow: "rgba(139,92,246,0.3)",
    gradient: "from-violet-500 to-purple-600",
    shine: "from-violet-500/20",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    title: "1-Click Modpacks",
    desc: "Instantly install thousands of plugins, mods, and complete modpacks with one click.",
    icon: PackageOpen,
    color: "text-indigo-400",
    bg: "bg-indigo-500/8",
    border: "border-indigo-500/15",
    activeBorder: "border-indigo-500/50",
    activeBg: "bg-indigo-500/12",
    glow: "rgba(99,102,241,0.15)",
    activeGlow: "rgba(99,102,241,0.3)",
    gradient: "from-indigo-500 to-blue-600",
    shine: "from-indigo-500/20",
    stat: "5000+",
    statLabel: "Modpacks",
  },
  {
    title: "Startup Editor",
    desc: "Modify Java versions, flags, and startup parameters with complete freedom.",
    icon: Settings2,
    color: "text-sky-400",
    bg: "bg-sky-500/8",
    border: "border-sky-500/15",
    activeBorder: "border-sky-500/50",
    activeBg: "bg-sky-500/12",
    glow: "rgba(14,165,233,0.15)",
    activeGlow: "rgba(14,165,233,0.3)",
    gradient: "from-sky-500 to-cyan-600",
    shine: "from-sky-500/20",
    stat: "Full",
    statLabel: "Control",
  },
  {
    title: "Network Manager",
    desc: "Easily manage allocated ports, subdomains, and IP routing configurations.",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/15",
    activeBorder: "border-emerald-500/50",
    activeBg: "bg-emerald-500/12",
    glow: "rgba(16,185,129,0.15)",
    activeGlow: "rgba(16,185,129,0.3)",
    gradient: "from-emerald-500 to-teal-600",
    shine: "from-emerald-500/20",
    stat: "3",
    statLabel: "Regions",
  },
  {
    title: "Advanced Files",
    desc: "Full SFTP access paired with a powerful, built-in web code editor.",
    icon: FolderOpen,
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
    activeBorder: "border-amber-500/50",
    activeBg: "bg-amber-500/12",
    glow: "rgba(245,158,11,0.15)",
    activeGlow: "rgba(245,158,11,0.3)",
    gradient: "from-amber-500 to-orange-600",
    shine: "from-amber-500/20",
    stat: "SFTP",
    statLabel: "+ Web IDE",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof panelFeatures[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl border p-5 cursor-pointer overflow-hidden transition-all duration-300 flex flex-col",
        hovered ? `${feature.activeBorder} ${feature.activeBg}` : `${feature.border} ${feature.bg}`
      )}
      style={{
        boxShadow: hovered
          ? `0 0 32px ${feature.activeGlow}, 0 0 0 1px ${feature.activeGlow}`
          : `0 0 0 0 transparent`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
      }}
    >
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(180px circle at ${mousePos.x}% ${mousePos.y}%, ${feature.activeGlow}, transparent 70%)`,
          }}
        />
      )}
      <div className={cn(
        "absolute top-0 left-4 right-4 h-px rounded-full transition-opacity duration-300 bg-linear-to-r via-white/20 to-transparent",
        feature.shine,
        hovered ? "opacity-100" : "opacity-0"
      )} />
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300",
        feature.bg, feature.border,
        hovered && "scale-110"
      )}>
        <feature.icon className={cn("w-5 h-5", feature.color)} />
      </div>
      <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
        {feature.title}
      </h3>
      <p className="text-xs text-slate-500 leading-relaxed mb-5 flex-1">
        {feature.desc}
      </p>
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
        <div>
          <p className={cn("text-lg font-bold leading-none", feature.color)}>{feature.stat}</p>
          <p className="text-[10px] text-slate-600 mt-0.5">{feature.statLabel}</p>
        </div>
        <div className={cn(
          "flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
          hovered ? feature.color : "text-slate-700"
        )}>
          Explore
          <ArrowUpRight className={cn("w-3 h-3 transition-transform duration-300", hovered && "translate-x-0.5 -translate-y-0.5")} />
        </div>
      </div>
    </motion.div>
  );
};

export default function PanelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.65], [22, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.65], [-8, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.65], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.65], [60, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 px-6 lg:px-8 overflow-hidden font-sans"
      style={{ background: "#08080a" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(55,48,163,0.06) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none blur-[160px] z-0"
        style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.13) 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/4 text-slate-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Server Management</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Master Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              Server
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Take absolute control with our highly optimized Pterodactyl panel. Built for speed, security, and effortless community management.
          </motion.p>
        </div>
        <motion.div
          style={{
            opacity,
            y: translateY,
            rotateX,
            rotateY,
            scale,
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full max-w-5xl mx-auto mb-24 md:mb-32"
        >
          <motion.div
            style={{ rotateX, rotateY, scale, transformPerspective: 1200 }}
            className="absolute -bottom-10 left-[5%] right-[5%] h-20 pointer-events-none"
            aria-hidden
          >
            <div
              className="w-full h-full rounded-[3rem] blur-[50px]"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.35), transparent 80%)",
              }}
            />
          </motion.div>
          <div
            className="absolute inset-[-4%] rounded-[3rem] pointer-events-none blur-[60px] opacity-40"
            style={{
              background: "radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, rgba(79,70,229,0.1) 50%, transparent 75%)",
            }}
          />
          <div
            className="relative rounded-2xl md:rounded-[1.75rem] overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)",
              background: "rgba(10,10,14,0.7)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />
            <Safari
              url="panel.zerocloud.id"
              className="w-full h-auto object-cover border-none bg-transparent"
              src="/aset/images/panel-preview.webp"
            />
          </div>
          <div
            className="absolute top-[5%] bottom-[5%] left-0 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.3), transparent)" }}
          />
          <div
            className="absolute top-[5%] bottom-[5%] right-0 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.2), transparent)" }}
          />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {panelFeatures.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}