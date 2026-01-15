"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  X, 
  Database,
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Code2,
  Coffee,
  Terminal,
  Server
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";

const tiers = {
  nodejs: {
    label: "Node.js",
    desc: "Scalable JS Runtime",
    icon: <Code2 className="w-4 h-4" />,
    color: "from-green-500 to-emerald-700",
    apps: [
      { id: "node1", title: "Node Starter", price: "Rp 25.000", ram: "1GB", cpu: "1 vCPU", storage: "10GB NVMe", image: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png" },
    ]
  },
  python: {
    label: "Python",
    desc: "Powerful & Versatile",
    icon: <Terminal className="w-4 h-4" />,
    color: "from-blue-500 to-yellow-500",
    apps: [
      { id: "py1", title: "Python Basic", price: "Rp 30.000", ram: "1GB", cpu: "1 vCPU", storage: "15GB NVMe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    ]
  },
  java: {
    label: "Java",
    desc: "Enterprise Grade",
    icon: <Coffee className="w-4 h-4" />,
    color: "from-red-500 to-orange-600",
    apps: [
      { id: "java1", title: "Java Standard", price: "Rp 40.000", ram: "2GB", cpu: "2 vCPU", storage: "20GB NVMe", image: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    ]
  },
  mysql: {
    label: "MySQL",
    desc: "Relational Database",
    icon: <Database className="w-4 h-4" />,
    color: "from-sky-500 to-blue-700",
    apps: [
      { id: "sql1", title: "DB Starter", price: "Rp 20.000", ram: "1GB", cpu: "Shared", storage: "5GB SSD", image: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
    ]
  }
};

type TierKey = keyof typeof tiers;

export default function AppHostPage() {
  const [activeTier, setActiveTier] = useState<TierKey>("nodejs"); // Default ke Node.js
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  const currentTierData = tiers[activeTier];
  const filteredApps = currentTierData.apps.filter(app => 
    app.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-700 font-sans selection:bg-sky-500/30 overflow-x-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" />
        
        <motion.div 
          animate={{ 
            background: activeTier === 'nodejs' ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' :
                        activeTier === 'python' ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' :
                        activeTier === 'java' ? 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)' :
                        'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)'
          }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[100px] transition-colors duration-1000"
        />
        <LightRays />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 pt-32 pb-20">
        
        <motion.div style={{ opacity, y }} className="flex flex-col items-center text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md shadow-lg">
              <Server className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Cloud App Hosting</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
             Deploy Aplikasi <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Impianmu</span>
           </h1>
           
           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Platform hosting modern untuk developer. Pilih environment yang sesuai dan deploy dalam hitungan detik.
           </p>
        </motion.div>

        <div className="sticky top-24 z-40 w-full mb-12">
           <div className="flex justify-center overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
             <div className="inline-flex p-1.5 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl gap-2 min-w-max">
                {(Object.keys(tiers) as TierKey[]).map((tierKey) => {
                   const isActive = activeTier === tierKey;
                   const tier = tiers[tierKey];
                   
                   return (
                      <button
                         key={tierKey}
                         onClick={() => setActiveTier(tierKey)}
                         className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                            isActive ? "text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                         }`}
                      >
                         {isActive && (
                            <motion.div
                               layoutId="activeTab"
                               className={`absolute inset-0 bg-linear-to-r ${tier.color} rounded-xl`}
                               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                         )}
                         <span className="relative z-10 flex items-center gap-2">
                            {tier.icon}
                            <span className="capitalize">{tier.label}</span>
                         </span>
                      </button>
                   )
                })}
             </div>
           </div>

           <motion.div 
              key={activeTier}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-4"
           >
              <span className="text-sm font-medium text-gray-400 bg-gray-900/50 px-4 py-1 rounded-full border border-gray-800">
                 Environment: <span className="text-white">{tiers[activeTier].desc}</span>
              </span>
           </motion.div>
        </div>

        <div className="relative max-w-md mx-auto mb-10 group">
            <input 
               type="text" 
               placeholder={`Cari paket ${tiers[activeTier].label}...`}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-4 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all backdrop-blur-sm"
            />
            {query && (
               <button onClick={() => setQuery('')} className="absolute inset-y-0 right-3 flex items-center">
                  <X className="w-4 h-4 text-gray-500 hover:text-white" />
               </button>
            )}
        </div>

        <motion.div 
           layout 
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full perspective-container"
        >
           <AnimatePresence mode="wait">
              {filteredApps.length > 0 ? (
                 filteredApps.map((app, index) => (
                   <motion.div
                      key={app.id + activeTier}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                   >
                      <div className="relative h-40 w-full overflow-hidden bg-gray-900/50 flex items-center justify-center p-8">
                         <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent z-10" />
                         <div className={`absolute top-0 inset-x-0 h-1 bg-linear-to-r ${tiers[activeTier].color} z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                         <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl">
                            <Image
                              src={app.image}
                              alt={app.title}
                              fill
                              className="object-contain"
                            />
                         </div>
                         
                         <div className="absolute bottom-3 right-3 z-20 bg-gray-950/80 backdrop-blur border border-gray-800 px-3 py-1 rounded-full">
                            <p className="text-white font-bold text-sm">{app.price}<span className="text-xs font-normal text-gray-500">/bln</span></p>
                         </div>
                      </div>

                      <div className="flex-1 flex flex-col p-5 pt-2">
                         <h3 className="text-lg font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                           {app.title}
                         </h3>
                         
                         <div className="space-y-2 mb-6 text-sm">
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><MemoryStick className="w-3.5 h-3.5 text-gray-500" /> RAM</span>
                               <span className="text-gray-200 font-medium">{app.ram}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-gray-500" /> CPU</span>
                               <span className="text-gray-200 font-medium">{app.cpu}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><HardDrive className="w-3.5 h-3.5 text-gray-500" /> Storage</span>
                               <span className="text-gray-200 font-medium">{app.storage}</span>
                            </div>
                         </div>

                         <div className="mt-auto">
                            <Button className={`w-full rounded-xl font-bold text-white bg-linear-to-r ${tiers[activeTier].color} opacity-90 hover:opacity-100 shadow-lg transition-all`}>
                               Deploy {tiers[activeTier].label}
                            </Button>
                         </div>
                      </div>
                   </motion.div>
                 ))
              ) : (
                 <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                 >
                    <div className="p-4 bg-gray-900 rounded-full mb-4 border border-gray-800">
                       <Search className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-300">Paket tidak ditemukan</h3>
                    <p className="text-gray-500 mt-1">Belum ada paket &quot;{query}&quot; untuk {tiers[activeTier].label}.</p>
                 </motion.div>
              )}
           </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}