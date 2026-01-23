"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, FolderOpen, Code2 } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const projects = [
  {
    title: "ZeroCloud Panel",
    category: "SaaS Application",
    desc: "Next-gen game server control panel dengan real-time console, file manager. Menggunakan Pterodactyl.",
    image: "/aset/images/panel/panel.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Pterodactyl"],
    link: "https://ctrl.zerocloud.id",
    color: "#0ea5e9"
  },
  {
    title: "LucentUI Theme",
    category: "Paymenter Theme",
    desc: "Theme Paymenter yang modern dan minimalis. Mengusung konsep glassmorphism dan animasi halus.",
    image: "/aset/images/panel/billing.png",
    tech: ["Paymenter", "Tailwind CSS", "Laravel", "Alpine.js", "Blade"],
    link: "https://lucentui.zaqua.studio",
    color: "#0ea5e9"
  },
  {
    title: "ZeroCloud Website",
    category: "Official Website",
    desc: "Website resmi ZeroCloud Indonesia. Menampilkan layanan, fitur, dan informasi perusahaan secara profesional.",
    image: "/aset/images/panel/website.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://zerocloud.id",
    color: "#0ea5e9"
  }
];

export default function ShowcaseSection() {
  return (
    <section id="projects" className="relative w-full py-32 bg-zinc-900 border-t border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider"
            >
              <FolderOpen className="w-3 h-3" />
              <span>Selected Works</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight"
            >
              Crafting Digital <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-yellow-500">Masterpieces.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-gray-800 hover:border-gray-700 transition-all text-sm font-bold text-gray-300 hover:text-white"
            >
              Lihat Semua Proyek 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 50 }}
              className="h-full"
            >
              <Link href={project.link} target="_blank" className="block h-full">
                <MagicCard
                  className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-zinc-800 bg-gray-900/40 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-[1.01]"
                  gradientColor="#f59e0b25"
                  gradientSize={400}
                  gradientOpacity={0.4}
                >
                  
                  <div className="relative w-full aspect-video overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[20px_20px]" />
                    
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-900 text-amber-500 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                        {project.desc}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-800/50">
                      <Code2 className="w-4 h-4 text-gray-600 mr-2" />
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-1 rounded-md bg-gray-800/50 border border-gray-700/50 text-[10px] font-medium text-gray-400 group-hover:border-amber-500/20 group-hover:text-amber-200/80 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </MagicCard>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}