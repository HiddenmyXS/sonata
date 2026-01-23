"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, Globe, Layers, Zap, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const frontendStack = [
  {
    name: "Next.js",
    type: "Framework",
    icon: "/aset/images/icons/nextjs.svg", 
    description: "The React Framework for the Web.",
    textColor: "text-white", 
    color: "bg-white/5 border-white/10",
    fallback: <Globe className="w-8 h-8 text-white" />
  },
  {
    name: "React",
    type: "Library",
    icon: "/aset/images/icons/react.svg",
    description: "Library for web and native UIs.",
    textColor: "text-sky-400",
    color: "bg-sky-500/10 border-sky-500/20",
    fallback: <Code2 className="w-8 h-8 text-sky-400" />
  },
  {
    name: "Tailwind CSS",
    type: "Styling",
    icon: "/aset/images/icons/tailwind.svg",
    description: "Rapidly build modern websites.",
    textColor: "text-teal-400",
    color: "bg-teal-500/10 border-teal-500/20",
    fallback: <Layers className="w-8 h-8 text-teal-400" />
  },
  {
    name: "TypeScript",
    type: "Language",
    icon: "/aset/images/icons/typescript.svg",
    description: "JavaScript with syntax for types.",
    textColor: "text-blue-500",
    color: "bg-blue-500/10 border-blue-500/20",
    fallback: <Code2 className="w-8 h-8 text-blue-500" />
  },
  {
    name: "Framer Motion",
    type: "Animation",
    icon: "/aset/images/icons/framer.svg",
    description: "Production-ready animation library.",
    textColor: "text-purple-500",
    color: "bg-purple-500/10 border-purple-500/20",
    fallback: <Zap className="w-8 h-8 text-purple-500" />
  },
  {
    name: "Three.js",
    type: "3D Graphics",
    icon: "/aset/images/icons/threejs.svg", 
    description: "JavaScript 3D library.",
    textColor: "text-gray-200",
    color: "bg-gray-500/10 border-gray-500/20",
    fallback: <Layers className="w-8 h-8 text-white" />
  },
];

const backendStack = [
  {
    name: "Node.js",
    type: "Runtime",
    icon: "/aset/images/icons/nodejs.svg",
    description: "JavaScript runtime built on Chrome's V8.",
    textColor: "text-green-500",
    color: "bg-green-500/10 border-green-500/20",
    fallback: <Server className="w-8 h-8 text-green-500" />
  },
  {
    name: "PostgreSQL",
    type: "Database",
    icon: "/aset/images/icons/postgresql.svg",
    description: "The World's Most Advanced Open Source Relational Database.",
    textColor: "text-blue-400",
    color: "bg-blue-400/10 border-blue-400/20",
    fallback: <Database className="w-8 h-8 text-blue-400" />
  },
  {
    name: "Prisma",
    type: "ORM",
    icon: "/aset/images/icons/prisma.svg",
    description: "Next-generation Node.js and TypeScript ORM.",
    textColor: "text-indigo-400",
    color: "bg-indigo-500/10 border-indigo-500/20",
    fallback: <Database className="w-8 h-8 text-indigo-400" />
  },
  {
    name: "Docker",
    type: "DevOps",
    icon: "/aset/images/icons/docker.svg", 
    description: "Accelerate how you build, share, and run applications.",
    textColor: "text-sky-600",
    color: "bg-sky-600/10 border-sky-600/20",
    fallback: <Layers className="w-8 h-8 text-sky-600" />
  },
  {
    name: "AWS",
    type: "Cloud",
    icon: "/aset/images/icons/aws.svg",
    description: "Reliable, scalable, and inexpensive cloud computing services.",
    textColor: "text-orange-500",
    color: "bg-orange-500/10 border-orange-500/20",
    fallback: <Globe className="w-8 h-8 text-orange-500" />
  },
  {
    name: "Vercel",
    type: "Deployment",
    icon: "/aset/images/icons/vercel.svg",
    description: "Develop. Preview. Ship.",
    textColor: "text-white",
    color: "bg-white/10 border-white/20",
    fallback: <Zap className="w-8 h-8 text-white" />
  },
];

const TechIcon = ({ icon, textColor, fallback }: { icon: string, textColor: string, fallback: React.ReactNode }) => {
  return (
    <div className={cn("relative w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity", textColor)}>
      {icon.endsWith('.svg') || icon.endsWith('.png') ? (
         <Image 
            src={icon} 
            alt="icon" 
            fill
            className="object-contain"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
            }}
         />
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {fallback}
      </div>
    </div>
  );
};

const TechCard = ({ item }: { item: any }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-row items-center gap-4 w-80 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-4",
        "bg-gray-900/40 hover:bg-gray-900/80 backdrop-blur-md transition-all duration-300",
        "border-zinc-800 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10"
      )}
    >
      <div className={cn("p-3 rounded-xl border transition-colors duration-300", item.color)}>
        <TechIcon icon={item.icon} textColor={item.textColor} fallback={item.fallback} />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
            <span className="text-sm font-bold text-white leading-tight truncate">
            {item.name}
            </span>
            <span className={cn("text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-white/5", item.textColor)}>
            {item.type}
            </span>
        </div>
        <span className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {item.description}
        </span>
      </div>
      
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-amber-500/5 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="relative w-full py-24 bg-zinc-900 border-t border-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b0a_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b0a_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Cpu className="w-3 h-3" />
                <span>Modern Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Speed & Scale</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Kami menggunakan ekosistem teknologi terkini untuk memastikan website Anda memiliki performa maksimal, keamanan tinggi, dan mudah dikembangkan.
            </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
                {frontendStack.map((item) => (
                    <TechCard key={item.name} item={item} />
                ))}
            </Marquee>
            
            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {backendStack.map((item) => (
                    <TechCard key={item.name} item={item} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-zinc-900 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-zinc-900 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}