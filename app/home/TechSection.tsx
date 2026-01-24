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
    textColor: "text-red-500", 
    color: "bg-red-500/10 border-red-500/20"
  },
  {
    name: "Intel® Xeon®",
    type: "Processor",
    icon: "/aset/images/icons/intel.svg",
    description: "Reliable enterprise grade computing.",
    textColor: "text-blue-500",
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    name: "Samsung NVMe",
    type: "Storage",
    icon: "/aset/images/icons/samsung.svg",
    description: "Ultra-fast Gen4 SSD storage.",
    textColor: "text-indigo-500",
    color: "bg-indigo-500/10 border-indigo-500/20"
  },
  {
    name: "OVHcloud",
    type: "Infrastructure",
    icon: "/aset/images/icons/ovh.svg",
    description: "Global Anti-DDoS infrastructure.",
    textColor: "text-sky-500",
    color: "bg-sky-500/10 border-sky-500/20"
  },
  {
    name: "Terabix",
    type: "Datacenter",
    icon: "/aset/images/icons/terabix.svg", 
    description: "Premium data centers.",
    textColor: "text-purple-500",
    color: "bg-purple-500/10 border-purple-500/20"
  },
  {
    name: "HostHatch",
    type: "Network",
    icon: <Server className="w-8 h-8 text-gray-400" />, 
    description: "High capacity storage network.",
    textColor: "text-gray-400",
    color: "bg-gray-500/10 border-gray-500/20"
  },
];

const softwareStack = [
  {
    name: "Ubuntu Server",
    type: "OS",
    icon: "/aset/images/icons/ubuntu.svg",
    description: "Stable & secure Linux environment.",
    textColor: "text-orange-500",
    color: "bg-orange-500/10 border-orange-500/20"
  },
  {
    name: "Debian",
    type: "OS",
    icon: "/aset/images/icons/debian.svg",
    description: "Robust operating system core.",
    textColor: "text-red-600",
    color: "bg-red-600/10 border-red-600/20"
  },
  {
    name: "Pterodactyl",
    type: "Panel",
    icon: "/aset/images/icons/pterodactyl.svg",
    description: "Next-gen game server management.",
    textColor: "text-blue-400",
    color: "bg-blue-600/10 border-blue-600/20"
  },
  {
    name: "Paymenter",
    type: "Billing",
    icon: "/aset/images/icons/paymenter.svg", 
    description: "Seamless automated billing gateway.",
    textColor: "text-indigo-600",
    color: "bg-indigo-600/10 border-indigo-600/20"
  },
  {
    name: "Cloudflare",
    type: "Security",
    icon: "/aset/images/icons/cloudflare.svg",
    description: "Global edge network protection.",
    textColor: "text-orange-400",
    color: "bg-orange-400/10 border-orange-400/20"
  },
  {
    name: "Docker",
    type: "Container",
    icon: "/aset/images/icons/docker.svg",
    description: "Isolasi resource yang aman.",
    textColor: "text-blue-500",
    color: "bg-blue-500/10 border-blue-500/20"
  },
];

const TechIcon = ({ icon, textColor }: { icon: string | React.ReactNode, textColor: string }) => {
  if (typeof icon === "string") {
    return (
        <div className={cn("relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity", textColor)}>
            <Image 
                src={icon} 
                alt="icon" 
                fill
                className="object-contain"
                style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)' }} 
            />
            <div className={cn("absolute inset-0 mix-blend-color", textColor)} />
        </div>
    );
  }
  
  return <div className="opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>;
};

const TechCard = ({ item }: { item: typeof hardwareStack[0] }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-row items-center gap-4 w-72 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-4",
        "bg-gray-900/40 hover:bg-gray-900/80 backdrop-blur-md transition-all duration-300",
        "border-gray-800 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10"
      )}
    >
      <div className={cn("p-3 rounded-xl border transition-colors duration-300", item.color)}>
        <TechIcon icon={item.icon} textColor={item.textColor} />
      </div>

      <div className="flex flex-col">
        <span className={cn("text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors", item.textColor)}>
          {item.type}
        </span>
        <span className="text-sm font-bold text-white leading-tight">
          {item.name}
        </span>
        <span className="text-[10px] text-gray-400 mt-1 line-clamp-1">
          {item.description}
        </span>
      </div>
      
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="relative w-full py-24 bg-gray-950 border-t border-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Cpu className="w-3 h-3" />
                <span>Powered by Giants</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Infrastruktur <span className="text-transparent bg-clip-text bg-sky-500">Kelas Dunia</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Kami tidak main-main dengan hardware. Kami menggunakan teknologi terbaik untuk memastikan server Anda berjalan tanpa kompromi.
            </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
            
            <Marquee pauseOnHover className="[--duration:40s]">
                {hardwareStack.map((item) => (
                    <TechCard key={item.name} item={item} />
                ))}
            </Marquee>
            
            <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                {softwareStack.map((item) => (
                    <TechCard key={item.name} item={item} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-gray-950 to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-gray-950 to-transparent z-20"></div>
        </div>

      </div>
    </section>
  );
}