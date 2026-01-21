"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, ShieldCheck, X, RefreshCw, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useServerStock } from "@/hooks/useServerStock";
import { tiers, type TierData } from "@/lib/data/gametiers";
import { ProductCard } from "./ProductCard";

type TierKey = keyof typeof tiers;

export default function GameHostPage() {
  const [activeTier, setActiveTier] = useState<TierKey>("flux");
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTierSwitching, setIsTierSwitching] = useState(false);
  
  const { getStockCount, refreshStock, isLoading: isStockLoading } = useServerStock();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTierChange = (newTier: TierKey) => {
    if (newTier === activeTier) return;
    setIsTierSwitching(true);
    setActiveTier(newTier);
    setTimeout(() => setIsTierSwitching(false), 400); 
  };

  const handleRefreshClick = async () => {
      setIsRefreshing(true);
      await refreshStock();
      setTimeout(() => setIsRefreshing(false), 600);
  };

  const currentTierData = tiers[activeTier];
  const filteredGames = currentTierData.games.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main ref={containerRef} className={cn(
        "flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-700 font-sans selection:bg-sky-500/30 overflow-x-hidden",
        isVisible ? "opacity-100" : "opacity-0"
    )}>
      
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000">
        <motion.div 
          animate={{ 
            background: activeTier === 'core' ? 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)' :
                        activeTier === 'flux' ? 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)' :
                        'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)'
          }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 pt-32 pb-20">
        
        <motion.div style={{ opacity: headerOpacity, y: headerY }} className="flex flex-col items-center text-center mb-16 space-y-5">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Realtime Stock Available</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
             Pilih Level <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">Performamu</span>
           </h1>
           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
             Dari server santai hingga kompetitif level turnamen. Sesuaikan dengan kebutuhan komunitasmu.
           </p>
        </motion.div>

        <div className="sticky top-24 z-40 w-full mb-12 flex flex-col items-center gap-6">
           <div className="flex justify-center bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-1.5 gap-2">
                {(Object.keys(tiers) as TierKey[]).map((tierKey) => {
                   const isActive = activeTier === tierKey;
                   const tier = tiers[tierKey];
                   const Icon = tier.icon;
                   
                   return (
                      <button
                         key={tierKey}
                         onClick={() => handleTierChange(tierKey)}
                         className={cn(
                             "relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                             isActive ? "text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                         )}
                      >
                         {isActive && (
                            <motion.div layoutId="activeTab" className={`absolute inset-0 bg-linear-to-r ${tier.color} rounded-xl`} />
                         )}
                         <span className="relative z-10 flex items-center gap-2">
                            <Icon className="w-4 h-4" /> 
                            <span className="capitalize">{tier.label}</span>
                         </span>
                      </button>
                   )
                })}
           </div>

           <div className="flex items-center gap-4 bg-gray-900/60 px-5 py-2.5 rounded-full border border-gray-800 backdrop-blur-md shadow-sm">
                <span className="text-sm font-medium text-gray-400 border-r border-gray-700 pr-4">
                    {tiers[activeTier].desc}
                </span>
                <button 
                    onClick={handleRefreshClick}
                    disabled={isRefreshing || isStockLoading}
                    className="flex items-center gap-2 text-xs font-bold text-sky-500 hover:text-sky-400 transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={cn("w-3.5 h-3.5", (isRefreshing || isStockLoading) && "animate-spin")} />
                    {isRefreshing || isStockLoading ? "Checking..." : "Refresh Stock"}
                </button>
           </div>
        </div>

        <div className="relative max-w-md mx-auto mb-12 group">
            <input 
               type="text" 
               placeholder={`Cari paket ${tiers[activeTier].label}...`}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-3 pr-10 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all backdrop-blur-sm"
            />
            {query && (
               <button onClick={() => setQuery('')} className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                  <X className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
               </button>
            )}
        </div>

        <AnimatePresence mode="wait">
          {isTierSwitching ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center py-32">
               <div className="flex flex-col items-center gap-4">
                  <Loader2 className={`w-10 h-10 animate-spin bg-linear-to-r ${currentTierData.color} bg-clip-text text-transparent`} />
                  <p className="text-gray-500 text-sm font-medium">Mengambil data nodes...</p>
               </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
            >
              <AnimatePresence mode="wait">
                {filteredGames.length > 0 ? (
                  filteredGames.map((game, index) => {
                    const ramGB = parseInt(game.ram.replace("GB", ""));
                    const stockStatus = getStockCount(activeTier, ramGB);

                    return (
                        <ProductCard 
                            key={game.id}
                            game={game}
                            tierColor={currentTierData.color}
                            stockStatus={stockStatus}
                            isLoadingStock={isStockLoading}
                            index={index}
                        />
                    );
                  })
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                    <div className="p-4 bg-gray-900/50 rounded-full mb-4 border border-gray-800">
                      <Search className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-400">Game tidak ditemukan</h3>
                    <p className="text-gray-600 mt-1 text-sm">Coba kata kunci lain atau ganti kategori tier.</p>
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