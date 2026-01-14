"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Search, 
  X, 
  Zap,
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Trophy,
  Rocket,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { LightRays } from "@/components/ui/light-rays";
import { Button } from "@/components/ui/button";

const tiers = {
  core: {
    label: "Core",
    desc: "Budget Friendly",
    icon: <Zap className="w-4 h-4" />,
    color: "from-green-400 to-emerald-600",
    games: [
      { id: "n1", title: "Minecraft Paper", price: "Rp 15.000", ram: "2GB", cpu: "Standard", slots: "Unlimited", image: "/aset/minecraft.jpg" },
    ]
  },
  flux: {
    label: "Flux",
    desc: "Best Seller & Balanced",
    icon: <Trophy className="w-4 h-4" />,
    color: "from-sky-400 to-blue-600",
    games: [
      { id: "p1", title: "Minecraft Java", price: "Rp 45.000", ram: "4GB", cpu: "Ryzen 5", slots: "Unlimited", image: "/aset/minecraft.jpg" },
    ]
  },
  atlas: {
    label: "Atlas",
    desc: "Extreme Performance",
    icon: <Rocket className="w-4 h-4" />,
    color: "from-purple-400 to-indigo-600",
    games: [
      { id: "v1", title: "GTA V (FiveM)", price: "Rp 120.000", ram: "8GB", cpu: "i9 13900K", slots: "64+ Slots", image: "/aset/GTAV.png" },
    ]
  }
};

type TierKey = keyof typeof tiers;

export default function GameHostPage() {
  const [activeTier, setActiveTier] = useState<TierKey>("flux");
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
  const filteredGames = currentTierData.games.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-700 font-sans selection:bg-sky-500/30 overflow-x-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            background: activeTier === 'core' ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' :
                        activeTier === 'flux' ? 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)' :
                        'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
          }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[100px] transition-colors duration-1000"
        />
              <LightRays />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 pt-32 pb-20">
        
        <motion.div style={{ opacity, y }} className="flex flex-col items-center text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Premium Game Hosting</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
             Pilih Level <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Performamu</span>
           </h1>
           
           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Dari server santai hingga kompetitif level turnamen. Sesuaikan dengan kebutuhan komunitasmu.
           </p>
        </motion.div>

        <div className="sticky top-24 z-40 w-full mb-12">
           <div className="flex justify-center">
             <div className="inline-flex p-1.5 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl gap-2">
                {(Object.keys(tiers) as TierKey[]).map((tierKey) => {
                   const isActive = activeTier === tierKey;
                   const tier = tiers[tierKey];
                   
                   return (
                      <button
                         key={tierKey}
                         onClick={() => setActiveTier(tierKey)}
                         className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
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
                 Kategori: <span className="text-white">{tiers[activeTier].desc}</span>
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
              {filteredGames.length > 0 ? (
                 filteredGames.map((game, index) => (
                   <motion.div
                      key={game.id + activeTier}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                   >
                      <div className="relative h-48 w-full overflow-hidden">
                         <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80" />
                         <div className={`absolute top-0 inset-x-0 h-1 bg-linear-to-r ${tiers[activeTier].color} z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                         <Image
                           src={game.image}
                           alt={game.title}
                           fill
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/FFF?text=Game+Image"; }}
                         />
                         
                         <div className="absolute bottom-3 left-3 z-20">
                            <p className="text-gray-400 text-xs font-medium">Mulai dari</p>
                            <p className="text-white font-bold text-lg">{game.price}<span className="text-xs font-normal text-gray-500">/bln</span></p>
                         </div>
                      </div>

                      <div className="flex-1 flex flex-col p-5 pt-2">
                         <h3 className="text-lg font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                           {game.title}
                         </h3>
                         
                         <div className="space-y-2 mb-6 text-sm">
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><MemoryStick className="w-3.5 h-3.5 text-gray-500" /> RAM</span>
                               <span className="text-gray-200 font-medium">{game.ram}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-gray-500" /> CPU</span>
                               <span className="text-gray-200 font-medium">{game.cpu}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                               <span className="flex items-center gap-2"><HardDrive className="w-3.5 h-3.5 text-gray-500" /> Slots</span>
                               <span className="text-gray-200 font-medium">{game.slots}</span>
                            </div>
                         </div>

                         <div className="mt-auto">
                            <Button className={`w-full rounded-xl font-bold text-white bg-linear-to-r ${tiers[activeTier].color} opacity-90 hover:opacity-100 shadow-lg transition-all`}>
                               Order {tiers[activeTier].label}
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
                    <h3 className="text-xl font-bold text-gray-300">Game tidak ditemukan</h3>
                    <p className="text-gray-500 mt-1">Belum ada game &quot;{query}&quot; di kategori {tiers[activeTier].label}.</p>
                 </motion.div>
              )}
           </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}