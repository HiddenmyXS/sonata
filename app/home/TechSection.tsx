"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const hardwareStack = [
  {
    name: "AMD EPYC™",
    type: "Processor",
    icon: "/aset/images/icons/amd.svg",
    description: "High performance multi-core processing.",
    textColor: "text-red-400",
    color: "bg-red-500/8 border-red-500/20",
    glow: "rgba(239,68,68,0.12)",
  },
  {
    name: "Intel® Xeon®",
    type: "Processor",
    icon: "/aset/images/icons/intel.svg",
    description: "Reliable enterprise grade computing.",
    textColor: "text-indigo-400",
    color: "bg-indigo-500/8 border-indigo-500/20",
    glow: "rgba(99,102,241,0.12)",
  },
  {
    name: "Samsung NVMe",
    type: "Storage",
    icon: "/aset/images/icons/samsung.svg",
    description: "Ultra-fast Gen 4 SSD storage.",
    textColor: "text-blue-400",
    color: "bg-blue-500/8 border-blue-500/20",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    name: "OVHcloud",
    type: "Infrastructure",
    icon: "/aset/images/icons/ovh.svg",
    description: "Global anti-DDoS infrastructure.",
    textColor: "text-purple-400",
    color: "bg-purple-500/8 border-purple-500/20",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    name: "Terabix",
    type: "Datacenter",
    icon: "/aset/images/icons/terabix.svg",
    description: "Premium data center facilities.",
    textColor: "text-violet-400",
    color: "bg-violet-500/8 border-violet-500/20",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    name: "HostHatch",
    type: "Network",
    icon: <Server className="w-6 h-6 text-slate-400" />,
    description: "High capacity storage network.",
    textColor: "text-slate-400",
    color: "bg-slate-500/8 border-slate-500/20",
    glow: "rgba(148,163,184,0.08)",
  },
];

const softwareStack = [
  {
    name: "Ubuntu Server",
    type: "OS",
    icon: "/aset/images/icons/ubuntu.svg",
    description: "Stable and secure Linux environment.",
    textColor: "text-orange-400",
    color: "bg-orange-500/8 border-orange-500/20",
    glow: "rgba(249,115,22,0.12)",
  },
  {
    name: "Debian",
    type: "OS",
    icon: "/aset/images/icons/debian.svg",
    description: "Robust operating system foundation.",
    textColor: "text-rose-400",
    color: "bg-rose-500/8 border-rose-500/20",
    glow: "rgba(244,63,94,0.12)",
  },
  {
    name: "Pterodactyl",
    type: "Panel",
    icon: "/aset/images/icons/pterodactyl.svg",
    description: "Next-generation game server management.",
    textColor: "text-indigo-400",
    color: "bg-indigo-500/8 border-indigo-500/20",
    glow: "rgba(99,102,241,0.12)",
  },
  {
    name: "Paymenter",
    type: "Billing",
    icon: "/aset/images/icons/paymenter.svg",
    description: "Seamless automated billing gateway.",
    textColor: "text-sky-400",
    color: "bg-sky-500/8 border-sky-500/20",
    glow: "rgba(14,165,233,0.12)",
  },
  {
    name: "Cloudflare",
    type: "Security",
    icon: "/aset/images/icons/cloudflare.svg",
    description: "Global edge network protection.",
    textColor: "text-amber-400",
    color: "bg-amber-500/8 border-amber-500/20",
    glow: "rgba(245,158,11,0.12)",
  },
  {
    name: "Docker",
    type: "Container",
    icon: "/aset/images/icons/docker.svg",
    description: "Isolated resource environments.",
    textColor: "text-cyan-400",
    color: "bg-cyan-500/8 border-cyan-500/20",
    glow: "rgba(34,211,238,0.12)",
  },
];

const TechIcon = ({ icon, textColor }: { icon: string | React.ReactNode; textColor: string }) => {
  if (typeof icon === "string") {
    return (
      <div className={cn("relative w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity", textColor)}>
        <Image
          src={icon}
          alt="icon"
          fill
          className="object-contain"
          style={{
            filter:
              "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
          }}
        />
      </div>
    );
  }
  return (
    <div className="opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
  );
};

const TechCard = ({ item }: { item: (typeof hardwareStack)[0] }) => (
  <div
    className={cn(
      "group relative flex items-center gap-3.5 w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-3",
      "transition-all duration-300",
      item.color
    )}
    style={{
      background: "rgba(255,255,255,0.03)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
    }}
  >
    <div className={cn("flex-shrink-0 p-2.5 rounded-xl border transition-all duration-300", item.color)}>
      <TechIcon icon={item.icon} textColor={item.textColor} />
    </div>

    <div className="flex flex-col min-w-0">
      <span className={cn("text-[9px] font-bold uppercase tracking-widest mb-0.5", item.textColor)}>
        {item.type}
      </span>
      <span className="text-sm font-semibold text-white leading-tight truncate">
        {item.name}
      </span>
      <span className="text-[10px] text-slate-600 mt-0.5 line-clamp-1 leading-snug">
        {item.description}
      </span>
    </div>

    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/4 to-transparent pointer-events-none" />
  </div>
);

export default function TechStack() {
  return (
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: "#08080a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none blur-[140px] z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16 px-6"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/4 text-purple-400 text-xs font-bold uppercase tracking-widest">
              <Cpu className="w-3 h-3" />
              <span>Powered by Giants</span>
            </div>
            <div className="h-px w-8 bg-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            World-Class{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
              Infrastructure
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            We don't compromise on hardware. Only the best technology runs under the hood.
          </p>
        </motion.div>
        <div className="relative w-full flex flex-col gap-5">
          <div className="relative flex items-center w-full">
            <Marquee pauseOnHover className="[--duration:45s]">
              {hardwareStack.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </Marquee>
          </div>
          <div className="relative flex items-center w-full">
            <Marquee reverse pauseOnHover className="[--duration:45s]">
              {softwareStack.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </Marquee>
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-40 z-20"
            style={{ background: "linear-gradient(to right, #08080a, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-40 z-20"
            style={{ background: "linear-gradient(to left, #08080a, transparent)" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 px-6"
        >
          {[
            { value: "12+", label: "Tech Partners" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "Gen 4", label: "NVMe Storage" },
            { value: "10Tbps", label: "DDoS Protection" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                {stat.value}
              </span>
              <span className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}