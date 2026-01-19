"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  X, 
  Zap,
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Trophy,
  Rocket,
  ShieldCheck,
  Loader2,
  Database
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export const tiers = {
  core: {
    label: "Core",
    desc: "Ekonomis & Stabil (Start Rp 15rb/GB)",
    icon: <Zap className="w-4 h-4" />,
    color: "from-emerald-400 to-green-600",
    games: [
      { id: "c1", title: "Core Iron", price: "Rp 15.000", ram: "1GB", cpu: "100% vCPU EPYC", storage: "5GB NVMe", slots: "Unltd", recommended: "Proxy / Bungeecord", billingUrl: "#" },
      { id: "c2", title: "Core Bronze", price: "Rp 30.000", ram: "2GB", cpu: "150% vCPU EPYC", storage: "10GB NVMe", slots: "Unltd", recommended: "Survival Mabar (2-3 Org)", billingUrl: "#" },
      { id: "c3", title: "Core Silver", price: "Rp 60.000", ram: "4GB", cpu: "200% vCPU EPYC", storage: "20GB NVMe", slots: "Unltd", recommended: "PaperMC / Vanilla SMP", billingUrl: "#" },
      { id: "c4", title: "Core Gold", price: "Rp 90.000", ram: "6GB", cpu: "250% vCPU EPYC", storage: "30GB NVMe", slots: "Unltd", recommended: "Modpack Ringan / Plugin", billingUrl: "#" },
      { id: "c5", title: "Core Platinum", price: "Rp 120.000", ram: "8GB", cpu: "300% vCPU EPYC", storage: "40GB NVMe", slots: "Unltd", recommended: "Server Komunitas", billingUrl: "#" },
      { id: "c6", title: "Core Diamond", price: "Rp 180.000", ram: "12GB", cpu: "350% vCPU EPYC", storage: "60GB NVMe", slots: "Unltd", recommended: "Network Hub Kecil", billingUrl: "#" },
      { id: "c7", title: "Core Bedrock", price: "Rp 240.000", ram: "16GB", cpu: "400% vCPU EPYC", storage: "80GB NVMe", slots: "Unltd", recommended: "Heavy Storage Server", billingUrl: "#" },
    ]
  },
  flux: {
    label: "Flux",
    desc: "High Performance (Start Rp 20rb/GB)",
    icon: <Trophy className="w-4 h-4" />,
    color: "from-blue-400 to-indigo-600",
    games: [
      { id: "f1", title: "Flux Spark", price: "Rp 40.000", ram: "2GB", cpu: "2 vCPU EPYC High-Freq", storage: "15GB NVMe", slots: "Unltd", recommended: "Private SMP Lancar", billingUrl: "#" },
      { id: "f2", title: "Flux Volt", price: "Rp 80.000", ram: "4GB", cpu: "3 vCPU EPYC High-Freq", storage: "25GB NVMe", slots: "Unltd", recommended: "Bedwars / Skywars", billingUrl: "#" },
      { id: "f3", title: "Flux Ampere", price: "Rp 120.000", ram: "6GB", cpu: "4 vCPU EPYC High-Freq", storage: "35GB NVMe", slots: "Unltd", recommended: "Pixelmon / Mod Berat", billingUrl: "#" },
      { id: "f4", title: "Flux Watt", price: "Rp 160.000", ram: "8GB", cpu: "4 vCPU EPYC High-Freq", storage: "50GB NVMe", slots: "Unltd", recommended: "Genshin MC / RPG", billingUrl: "#" },
      { id: "f5", title: "Flux Surge", price: "Rp 240.000", ram: "12GB", cpu: "6 vCPU EPYC High-Freq", storage: "70GB NVMe", slots: "Unltd", recommended: "Public SMP Ramai", billingUrl: "#" },
      { id: "f6", title: "Flux Fusion", price: "Rp 320.000", ram: "16GB", cpu: "8 vCPU EPYC High-Freq", storage: "100GB NVMe", slots: "Unltd", recommended: "Tournament Event", billingUrl: "#" },
    ]
  },
  atlas: {
    label: "Atlas",
    desc: "Extreme Dedicated (Start Rp 30rb/GB)",
    icon: <Rocket className="w-4 h-4" />,
    color: "from-purple-500 to-pink-600",
    games: [
      { id: "a1", title: "Atlas Titan", price: "Rp 120.000", ram: "4GB", cpu: "2 Core Dedicated", storage: "40GB NVMe", slots: "Unltd", recommended: "Esport / Competitive", billingUrl: "#" },
      { id: "a2", title: "Atlas Helios", price: "Rp 180.000", ram: "6GB", cpu: "3 Core Dedicated", storage: "60GB NVMe", slots: "Unltd", recommended: "Heavy Modpack + Shaders", billingUrl: "#" },
      { id: "a3", title: "Atlas Kronos", price: "Rp 240.000", ram: "8GB", cpu: "4 Core Dedicated", storage: "80GB NVMe", slots: "Unltd", recommended: "FiveM Starter / GTA", billingUrl: "#" },
      { id: "a4", title: "Atlas Olympus", price: "Rp 360.000", ram: "12GB", cpu: "6 Core Dedicated", storage: "120GB NVMe", slots: "Unltd", recommended: "Large Roleplay Server", billingUrl: "#" },
      { id: "a5", title: "Atlas Zenith", price: "Rp 480.000", ram: "16GB", cpu: "8 Core Dedicated", storage: "160GB NVMe", slots: "Unltd", recommended: "Enterprise / Network", billingUrl: "#" },
    ]
  }
};

type TierKey = keyof typeof tiers;

export default function GameHostPage() {
  const [activeTier, setActiveTier] = useState<TierKey>("flux");
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [displayedGames, setDisplayedGames] = useState(tiers.flux.games);
  const [isLoading, setIsLoading] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end start"] 
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTierChange = (newTier: TierKey) => {
    if (newTier === activeTier) return;
    
    setIsLoading(true);
    setActiveTier(newTier);
    
    setTimeout(() => {
      setDisplayedGames(tiers[newTier].games);
      setTimeout(() => setIsLoading(false), 100);
    }, 600);
  };

  const currentTierData = tiers[activeTier];
  const filteredGames = displayedGames.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-700 font-sans selection:bg-sky-500/30 overflow-x-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Optimized background untuk iOS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            background: activeTier === 'core' ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' :
                        activeTier === 'flux' ? 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)' :
                        activeTier === 'atlas' ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' :
                        'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)'
          }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[100px] transition-colors duration-1000"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 pt-32 pb-20">
        
        <motion.div 
          style={{ opacity, y }} 
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Premium Game Hosting</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
             Pilih Level <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">Performamu</span>
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
                         onClick={() => handleTierChange(tierKey)}
                         className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                            isActive ? "text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                         }`}
                      >
                         {isActive && (
                            <motion.div
                               layoutId="activeTab"
                               className={`absolute inset-0 bg-linear-to-r ${tier.color} rounded-xl`}
                               transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                               style={{ willChange: 'transform' }}
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

           <AnimatePresence mode="wait">
              <motion.div 
                 key={activeTier}
                 initial={{ opacity: 0, y: 8 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -8 }}
                 transition={{ duration: 0.3 }}
                 className="flex justify-center mt-4"
              >
                 <span className="text-sm font-medium text-gray-400 bg-gray-900/50 px-4 py-1 rounded-full border border-gray-800">
                    Kategori: <span className="text-white">{tiers[activeTier].desc}</span>
                 </span>
              </motion.div>
           </AnimatePresence>
        </div>

        <div className="relative max-w-md mx-auto mb-10 group">
            <input 
               type="text" 
               placeholder={`Cari paket ${tiers[activeTier].label}...`}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-4 pr-10 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all backdrop-blur-sm"
            />
            {query && (
               <button 
                  onClick={() => setQuery('')} 
                  className="absolute inset-y-0 right-3 flex items-center"
               >
                  <X className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
               </button>
            )}
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center justify-center py-32"
            >
              <div className="flex flex-col items-center gap-4">
                <Loader2 className={`w-12 h-12 animate-spin bg-linear-to-r ${currentTierData.color} bg-clip-text text-transparent`} />
                <p className="text-gray-400 text-sm">Memuat paket {currentTierData.label}...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
            >
              <AnimatePresence mode="wait">
                {filteredGames.length > 0 ? (
                  filteredGames.map((game, index) => (
                    <motion.div
                      key={game.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.1,
                        ease: "easeInOut"
                      }}
                      className="group relative flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                      style={{ willChange: 'opacity' }}
                    >
                      <div className={`absolute top-0 inset-x-0 h-1 bg-linear-to-r ${tiers[activeTier].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="flex-1 flex flex-col p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                            {game.title}
                          </h3>
                          <div className="text-right">
                            <p className="text-gray-400 text-xs font-medium">Mulai dari</p>
                            <p className="text-white font-bold text-lg">
                              {game.price}<span className="text-xs font-normal text-gray-500">/bln</span>
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-500 mb-5 line-clamp-2 min-h-10">
                          Recommended: {game.recommended}
                        </p>
                        
                        <div className="space-y-2.5 mb-5 text-sm">
                          <div className="flex justify-between items-center text-gray-400">
                            <span className="flex items-center gap-2">
                              <MemoryStick className="w-3.5 h-3.5 text-gray-500" /> RAM
                            </span>
                            <span className="text-gray-200 font-medium">{game.ram}</span>
                          </div>
                          <div className="flex justify-between items-center text-gray-400">
                            <span className="flex items-center gap-2">
                              <Cpu className="w-3.5 h-3.5 text-gray-500" /> CPU
                            </span>
                            <span className="text-gray-200 font-medium">{game.cpu}</span>
                          </div>
                          <div className="flex justify-between items-center text-gray-400">
                            <span className="flex items-center gap-2">
                              <Database className="w-3.5 h-3.5 text-gray-500" /> Storage
                            </span>
                            <span className="text-gray-200 font-medium">{game.storage}</span>
                          </div>
                          <div className="flex justify-between items-center text-gray-400">
                            <span className="flex items-center gap-2">
                              <HardDrive className="w-3.5 h-3.5 text-gray-500" /> Slots
                            </span>
                            <span className="text-gray-200 font-medium">{game.slots}</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <a 
                            href={game.billingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full rounded-xl font-bold text-white bg-linear-to-r ${tiers[activeTier].color} py-2.5 opacity-90 hover:opacity-100 shadow-lg transition-all active:scale-95 flex items-center justify-center`}
                          >
                            Order {game.title}
                          </a>
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
                    <p className="text-gray-500 mt-1">
                      Belum ada game &quot;{query}&quot; di kategori {tiers[activeTier].label}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}