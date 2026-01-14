"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  LayoutTemplate, 
  PackageOpen, 
  Settings2, 
  Wrench, 
  Globe, 
  FolderOpen, 
  Gamepad2
} from "lucide-react";

// Data Fitur Panel, jgnnn lupa diganti ato tambah nanti
const panelFeatures = [
  {
    title: "Clean Minimalist UI",
    desc: "Antarmuka modern yang intuitif. Mudah digunakan oleh pemula maupun expert.",
    icon: <LayoutTemplate className="w-5 h-5 text-sky-400" />,
  },
  {
    title: "Plugins & Mod Manager",
    desc: "Install ribuan plugins (Spigot/Paper) & modpacks hanya dengan 1-klik.",
    icon: <PackageOpen className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "Startup Changer",
    desc: "Ganti versi Java, Node.js, atau parameter startup server sesuka hati.",
    icon: <Settings2 className="w-5 h-5 text-yellow-400" />,
  },
  {
    title: "MCTools Integrated",
    desc: "Tools khusus Minecraft: Reset world, fix chunks, & optimasi otomatis.",
    icon: <Wrench className="w-5 h-5 text-green-400" />,
  },
  {
    title: "Subdomain Manager",
    desc: "Buat alamat IP custom (namamu.zerocloud.id) secara gratis & instan.",
    icon: <Globe className="w-5 h-5 text-blue-400" />,
  },
  {
    title: "Web File Manager",
    desc: "Edit config & upload file langsung dari browser tanpa perlu FTP client.",
    icon: <FolderOpen className="w-5 h-5 text-orange-400" />,
  },
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
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring" as const, stiffness: 50 } 
  }
};

export default function FeaturePanelSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={targetRef} className="relative w-full py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Power in Your Hands</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Control Panel <span className="text-sky-500">Next-Gen</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            Kelola server game Anda dengan panel Pterodactyl yang sudah dimodifikasi khusus untuk performa dan kemudahan penggunaan maksimal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            style={{ y, opacity }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-linear-to-r from-sky-600 to-purple-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-2 shadow-2xl shadow-black/50 transform transition-transform duration-500 hover:scale-[1.02]">
               <div className="h-8 bg-gray-800/50 rounded-t-xl flex items-center px-4 gap-2 border-b border-gray-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 h-4 w-40 bg-gray-700/30 rounded-full" />
               </div>

               <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-gray-950">
                  <Image 
                    src="https://placehold.co/800x500/1a1a1a/FFF?text=ZeroCloud+Panel+Preview" // Ganti path ini nanti
                    alt="Control Panel Preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent" />
               </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
            >
               <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
               <div>
                  <p className="text-xs text-gray-400">Server Status</p>
                  <p className="text-sm font-bold text-white">Online (100%)</p>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2"
          >
            {panelFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.6)" }} // hover:bg-gray-800/60
                className="p-5 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-2.5 rounded-xl bg-gray-950 border border-gray-800 shadow-sm group-hover:border-gray-700 transition-colors">
                   {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}