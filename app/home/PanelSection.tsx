"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  LayoutTemplate, 
  PackageOpen, 
  Settings2, 
  Globe, 
  FolderOpen, 
  Gamepad2,
  ChevronRight
} from "lucide-react";
import { Safari } from "@/components/ui/safari"; 
import { cn } from "@/lib/utils";

// --- DATA FEATURES ---
// Compact design: shorter description
const panelFeatures = [
  {
    title: "Clean UI",
    desc: "Antarmuka modern & intuitif tanpa gangguan.",
    icon: LayoutTemplate,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20"
  },
  {
    title: "1-Click Mod & Plugin",
    desc: "Install ribuan plugins & modpacks instan.",
    icon: PackageOpen,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    title: "Startup Editor",
    desc: "Ubah versi Java & parameter startup sesuka hati.",
    icon: Settings2,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    title: "Subdomains",
    desc: "Kelola subdomain langsung dari panel, gunakan gratis.",
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    title: "File Manager",
    desc: "Edit config server langsung di browser.",
    icon: FolderOpen,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
];

export default function PanelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animasi 3D Panel
  const rotateX = useTransform(springScroll, [0, 0.25, 0.6], [25, 0, 0]);
  const scale = useTransform(springScroll, [0, 0.25, 0.8], [0.85, 1, 1]);
  const opacity = useTransform(springScroll, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(springScroll, [0, 0.25, 1], [150, 0, -50]);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">
      
      {/* Background Glow Center (Blue Only) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Next-Gen Management</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Panel Kontrol <span className="text-transparent bg-clip-text bg-sky-500">Pro Player</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Lebih cepat, stabil, dan dilengkapi fitur otomatisasi canggih.
          </motion.p>
        </div>

        {/* --- HERO IMAGE (SAFARI MOCKUP) --- */}
        <motion.div 
          style={{ 
            rotateX, 
            scale, 
            opacity, 
            y,
            perspective: "1200px",
            transformStyle: "preserve-3d"
          }}
          className="w-full max-w-5xl mb-20 relative z-20"
        >
            <div className="relative group rounded-xl">
                <div className="absolute -inset-1 bg-linear-to-b from-sky-500/20 to-blue-600/5 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                
                <Safari 
                    url="panel.zerocloud.id" 
                    className="size-full shadow-2xl shadow-black/80"
                    imageSrc="/aset/images/panel/panel.png" 
                />
            </div>
        </motion.div>

        {/* --- FEATURES GRID (COMPACT) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
            {panelFeatures.map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="group p-4 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 hover:border-sky-500/30 transition-all duration-300 flex flex-col items-start h-full"
                >
                    <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
                        feature.bg, feature.border, "border"
                    )}>
                        <feature.icon className={cn("w-5 h-5", feature.color)} />
                    </div>
                    
                    <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-1 group-hover:text-sky-400 transition-colors">
                        {feature.title}
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    
                    <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                        {feature.desc}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}