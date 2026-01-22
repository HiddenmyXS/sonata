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
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20"
  },
  {
    title: "Startup Editor",
    desc: "Ubah versi Java & parameter startup sesuka hati.",
    icon: Settings2,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20"
  },
  {
    title: "Subdomains",
    desc: "Kelola subdomain langsung dari panel, gunakan gratis.",
    icon: Globe,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20"
  },
  {
    title: "File Manager",
    desc: "Edit config server langsung di browser.",
    icon: FolderOpen,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  }
};

export default function PanelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const rotateX = useTransform(springScroll, [0, 0.3, 0.7], [10, 0, -2]);
  const scale = useTransform(springScroll, [0, 0.3, 0.9], [0.94, 1, 1.02]);
  const opacity = useTransform(springScroll, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6]);
  const y = useTransform(springScroll, [0, 0.3, 1], [50, 0, -20]);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Next-Gen Management</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-5"
          >
            Meet our custom <span className="text-sky-500">ZeroCloud Control Panel</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2"
          >
            Powered by Pterodactyl®. Lebih cepat, stabil, dan dilengkapi fitur canggih.
          </motion.p>
        </div>

        {/* --- HERO IMAGE (SAFARI MOCKUP) --- */}
        <motion.div 
          style={{ rotateX, scale, opacity, y }}
          className="w-full max-w-5xl mb-12 md:mb-20 relative z-20"
        >
          <motion.div 
            className="relative group rounded-xl"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Safari 
              url="panel.zerocloud.id" 
              className="size-full shadow-2xl shadow-sky-500/10"
              imageSrc="/aset/images/panel/panel.png" 
            />
          </motion.div>
        </motion.div>

        {/* --- FEATURES GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 w-full"
        >
          {panelFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-4 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 hover:bg-gray-900/60 transition-colors duration-300 flex flex-col items-start h-full"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 border",
                feature.bg, 
                feature.border
              )}>
                <feature.icon className={cn("w-5 h-5", feature.color)} />
              </div>
              
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-1 group-hover:text-sky-400 transition-colors duration-300">
                {feature.title}
                <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              
              <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}