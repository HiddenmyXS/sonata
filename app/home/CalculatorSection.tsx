"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Users, 
  Package, 
  Cpu, 
  ArrowRight,
  Info,
  CheckCircle2,
  Sparkles,
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider"; 

const softwareTypes = [
  { id: "vanilla", name: "Vanilla", type: "basic", icon: "/aset/images/icons/calculator/MCJE.png" },
  { id: "paper", name: "Paper", type: "plugin", icon: "/aset/images/icons/calculator/paper.webp" },
  { id: "spigot", name: "Spigot", type: "plugin", icon: "/aset/images/icons/calculator/spigotmc.png" },
  { id: "fabric", name: "Fabric", type: "mod", icon: "/aset/images/icons/calculator/fabric.png" },
  { id: "forge", name: "Forge", type: "mod", icon: "/aset/images/icons/calculator/forge.png" },
  { id: "bedrock", name: "Bedrock", type: "basic", icon: "/aset/images/icons/calculator/MCBE.png" },
];

const plansDB = [
    { id: "c1", name: "Core Entry", tier: "CORE", ram: 1, price: 15000, cpu: "1 vCPU", storage: "5GB NVMe", desc: "Proxy / Bungeecord", url: "https://my.zerocloud.id/products/core/core-1" },
    { id: "c2", name: "Core Basic", tier: "CORE", ram: 2, price: 30000, cpu: "2 vCPU", storage: "10GB NVMe", desc: "Vanilla Survival (2-5 Org)", url: "https://my.zerocloud.id/products/core/core-2" },
    { id: "c3", name: "Core Standart", tier: "CORE", ram: 4, price: 60000, cpu: "3 vCPU", storage: "15GB NVMe", desc: "Minecraft SMP", url: "https://my.zerocloud.id/products/core/core-3" },
    { id: "c4", name: "Core Advanced", tier: "CORE", ram: 6, price: 90000, cpu: "3 vCPU", storage: "20GB NVMe", desc: "Modpack Ringan / Plugin", url: "https://my.zerocloud.id/products/core/core-4" },
    { id: "c5", name: "Core Pro", tier: "CORE", ram: 8, price: 120000, cpu: "4 vCPU", storage: "30GB NVMe", desc: "Server Komunitas", url: "https://my.zerocloud.id/products/core/core-5" },
    { id: "c6", name: "Core Plus", tier: "CORE", ram: 12, price: 180000, cpu: "4 vCPU", storage: "40GB NVMe", desc: "Server Bebas", url: "https://my.zerocloud.id/products/core/core-6" },
    
    { id: "f1", name: "Flux Entry", tier: "FLUX", ram: 2, price: 40000, cpu: "2 vCPU High-Freq", storage: "15GB NVMe", desc: "Proxy / Bungeecord", url: "https://my.zerocloud.id/products/flux/flux-1" },
    { id: "f2", name: "Flux Basic", tier: "FLUX", ram: 4, price: 80000, cpu: "3 vCPU High-Freq", storage: "25GB NVMe", desc: "Vanilla Survival", url: "https://my.zerocloud.id/products/flux/flux-2" },
    { id: "f3", name: "Flux Standart", tier: "FLUX", ram: 6, price: 120000, cpu: "4 vCPU High-Freq", storage: "35GB NVMe", desc: "Modded SMP / RPG", url: "https://my.zerocloud.id/products/flux/flux-3" },
    { id: "f4", name: "Flux Advanced", tier: "FLUX", ram: 8, price: 160000, cpu: "4 vCPU High-Freq", storage: "50GB NVMe", desc: "Genshin MC / RPG", url: "https://my.zerocloud.id/products/flux/flux-4" },
    { id: "f5", name: "Flux Pro", tier: "FLUX", ram: 12, price: 240000, cpu: "6 vCPU High-Freq", storage: "70GB NVMe", desc: "Public SMP Ramai", url: "https://my.zerocloud.id/products/flux/flux-5" },
    { id: "f6", name: "Flux Plus", tier: "FLUX", ram: 16, price: 320000, cpu: "8 vCPU High-Freq", storage: "100GB NVMe", desc: "Event Server", url: "https://my.zerocloud.id/products/flux/flux-6" },
    
    { id: "a1", name: "Atlas Entry", tier: "ATLAS", ram: 4, price: 120000, cpu: "2 Core Dedicated", storage: "40GB NVMe", desc: "Vanilla Survival", url: "https://my.zerocloud.id/products/atlas/atlas-1" },
    { id: "a2", name: "Atlas Basic", tier: "ATLAS", ram: 6, price: 180000, cpu: "3 Core Dedicated", storage: "60GB NVMe", desc: "Modpack + Shaders", url: "https://my.zerocloud.id/products/atlas/atlas-2" },
    { id: "a3", name: "Atlas Standart", tier: "ATLAS", ram: 8, price: 240000, cpu: "4 Core Dedicated", storage: "80GB NVMe", desc: "Modded SMP", url: "https://my.zerocloud.id/products/atlas/atlas-3" },
    { id: "a4", name: "Atlas Plus", tier: "ATLAS", ram: 12, price: 360000, cpu: "6 Core Dedicated", storage: "120GB NVMe", desc: "Large Roleplay Server", url: "https://my.zerocloud.id/products/atlas/atlas-4" },
    { id: "a5", name: "Atlas Pro", tier: "ATLAS", ram: 16, price: 480000, cpu: "8 Core Dedicated", storage: "160GB NVMe", desc: "Extreme Performance", url: "https://my.zerocloud.id/products/atlas/atlas-5" },
    { id: "a6", name: "Atlas Advanced", tier: "ATLAS", ram: 32, price: 960000, cpu: "8 Core Dedicated", storage: "250GB NVMe", desc: "Megaserver", url: "https://my.zerocloud.id/products/atlas/atlas-6" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

export default function CalculatorSection() {
  const [selectedSoft, setSelectedSoft] = useState(softwareTypes[0]);
  const [players, setPlayers] = useState([5]);
  const [plugins, setPlugins] = useState([0]);
  const [mods, setMods] = useState([0]);

  const recommendation = useMemo(() => {
    const baseRam = 1.0;
    const ramPerPlayer = selectedSoft.type === "mod" ? 0.15 : 0.08; 
    const ramPerPlugin = 0.03;
    const ramPerMod = 0.08;

    let requiredRam = baseRam + (players[0] * ramPerPlayer);
    
    if (selectedSoft.type === "plugin") requiredRam += (plugins[0] * ramPerPlugin);
    if (selectedSoft.type === "mod") requiredRam += (mods[0] * ramPerMod);

    let targetTier = "CORE";
    
    if (selectedSoft.type === "mod") targetTier = "FLUX";
    
    if (requiredRam > 12 || (mods[0] > 60) || (players[0] > 50 && selectedSoft.type === "mod")) {
        targetTier = "ATLAS";
    }

    const availablePlans = plansDB.filter(p => p.tier === targetTier);
    let recommendedPlan = availablePlans.find(p => p.ram >= requiredRam);

    if (!recommendedPlan) {
        recommendedPlan = availablePlans.length > 0 ? availablePlans[availablePlans.length - 1] : plansDB[2];
    }

    return recommendedPlan;
  }, [selectedSoft, players, plugins, mods]);

  return (
    <section className="relative w-full py-16 md:py-24 bg-gray-950 px-8 border-t border-gray-900 overflow-hidden">
      
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider"
          >
            <Calculator className="w-3 h-3" />
            <span>Smart Estimator</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7, 
              delay: 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Bingung Pilih <span className="text-purple-500">Paket?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2"
          >
            Simulasikan kebutuhan servermu di sini. Algoritma kami akan mencarikan spesifikasi paling <i>worth it</i>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="lg:col-span-7 bg-gray-900/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl"
          >
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mb-10"
            >
                <motion.label 
                  variants={itemVariants}
                  className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2"
                >
                    <Package className="w-4 h-4 text-purple-500" /> Platform Server
                </motion.label>
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-3 sm:grid-cols-6 gap-3"
                >
                    {softwareTypes.map((soft) => (
                        <motion.button
                            key={soft.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setSelectedSoft(soft);
                                if (soft.type !== 'mod') setMods([0]);
                                if (soft.type !== 'plugin') setPlugins([0]);
                            }}
                            className={cn(
                                "group flex flex-col items-center justify-center gap-3 p-3 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                                selectedSoft.id === soft.id 
                                    ? "bg-purple-500/10 border-purple-500 ring-1 ring-purple-500/50 scale-[1.02]" 
                                    : "bg-gray-950 border-gray-800 hover:border-gray-700 hover:bg-gray-900"
                            )}
                        >
                            <div className="relative w-8 h-8 z-10 transition-transform group-hover:scale-110">
                                <Image src={soft.icon} alt={soft.name} fill className="object-contain" />
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wide z-10 transition-colors",
                                selectedSoft.id === soft.id ? "text-purple-400" : "text-gray-500 group-hover:text-gray-300"
                            )}>{soft.name}</span>
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
                
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-gray-950/50 border border-gray-800/50 transition-all hover:border-gray-700"
                >
                    <div className="flex justify-between mb-6">
                        <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-500" /> Player Online
                        </label>
                        <motion.span 
                          key={players[0]}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-purple-500/20 shadow-[0_0_10px_rgba(14,165,233,0.1)]"
                        >
                            {players[0]} Orang
                        </motion.span>
                    </div>
                    <Slider 
                        defaultValue={[5]} max={100} step={1} 
                        onValueChange={setPlayers} className="py-2"
                    />
                    <p className="text-xs text-gray-500 mt-4 font-medium">Estimasi jumlah pemain aktif bersamaan.</p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {selectedSoft.type === "plugin" && (
                        <motion.div
                            key="plugin-input"
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: "auto", scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl bg-gray-950/50 border border-gray-800/50"
                        >
                            <div className="flex justify-between mb-6">
                                <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-purple-500" /> Total Plugins
                                </label>
                                <motion.span 
                                  key={plugins[0]}
                                  initial={{ scale: 1.2, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                  className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-purple-500/20"
                                >
                                    {plugins[0]} Pcs
                                </motion.span>
                            </div>
                            <Slider 
                                defaultValue={[0]} max={100} step={1} 
                                onValueChange={setPlugins} className="py-2" 
                            />
                        </motion.div>
                    )}

                    {selectedSoft.type === "mod" && (
                        <motion.div
                            key="mod-input"
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: "auto", scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl bg-gray-950/50 border border-gray-800/50"
                        >
                            <div className="flex justify-between mb-6">
                                <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                    <Package className="w-4 h-4 text-orange-500" /> Total Mods
                                </label>
                                <motion.span 
                                  key={mods[0]}
                                  initial={{ scale: 1.2, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                  className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-orange-500/20"
                                >
                                    {mods[0]} Pcs
                                </motion.span>
                            </div>
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg mb-6 text-xs text-orange-300 flex gap-2 items-start font-medium"
                            >
                                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Modpack butuh RAM & CPU lebih besar. Rekomendasi otomatis ke Flux/Atlas.</span>
                            </motion.div>
                            <Slider 
                                defaultValue={[0]} max={200} step={5} 
                                onValueChange={setMods} className="py-2" 
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="lg:col-span-5 relative h-full"
          >
             <div className="sticky top-24"> 
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative bg-linear-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden group"
                >
                    <motion.div 
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={cn(
                        "absolute inset-0 blur-2xl transition-colors duration-700",
                        recommendation.tier === "CORE" ? "bg-linear-to-tr from-emerald-500/20 to-green-900/0" : 
                        recommendation.tier === "FLUX" ? "bg-linear-to-tr from-purple-500/20 to-indigo-900/0" : 
                        "bg-linear-to-tr from-purple-500/20 to-pink-900/0"
                      )} 
                    />

                    <div className="relative bg-gray-950/90 rounded-[2.3rem] p-8 h-full backdrop-blur-xl">
                        
                        <motion.div 
                          key={recommendation.tier}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-between items-start mb-8"
                        >
                            <div className={cn(
                                "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-lg flex items-center gap-2",
                                recommendation.tier === "CORE" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
                                recommendation.tier === "FLUX" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : 
                                "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            )}>
                                <Sparkles className="w-3 h-3" />
                                Perfect Match
                            </div>
                        </motion.div>

                        <div className="mb-8">
                            <motion.h3 
                                key={recommendation.name}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                className="text-3xl font-black text-white mb-2"
                            >
                                {recommendation.name}
                            </motion.h3>
                            <motion.div 
                              key={recommendation.price}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-baseline gap-2"
                            >
                                <span className={cn(
                                    "text-4xl font-extrabold tracking-tight tabular-nums",
                                    recommendation.tier === "CORE" ? "text-emerald-400" : 
                                    recommendation.tier === "FLUX" ? "text-purple-400" : "text-purple-400"
                                )}>
                                    Rp {recommendation.price.toLocaleString('id-ID')}
                                </span>
                                <span className="text-gray-500 font-medium">/bulan</span>
                            </motion.div>
                        </div>

                        <motion.div 
                          key={recommendation.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="grid grid-cols-2 gap-3 mb-8"
                        >
                            <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                                <Server className="w-5 h-5 text-gray-400 mb-2" />
                                <span className="text-xl font-bold text-white">{recommendation.ram} GB</span>
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Dedicated RAM</span>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                                <Cpu className="w-5 h-5 text-gray-400 mb-2" />
                                <span className="text-sm font-bold text-white mt-1">{recommendation.cpu}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Processor</span>
                            </div>
                        </motion.div>

                        <motion.div 
                          key={recommendation.desc}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3 items-start"
                        >
                            <CheckCircle2 className={cn(
                                "w-5 h-5 shrink-0 mt-0.5",
                                recommendation.tier === "CORE" ? "text-emerald-500" : 
                                recommendation.tier === "FLUX" ? "text-purple-500" : "text-purple-500"
                            )} />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Why this plan?</p>
                                <p className="text-sm text-gray-200 leading-relaxed font-medium">
                                    {recommendation.desc}
                                </p>
                            </div>
                        </motion.div>

                        <motion.a 
                            key={recommendation.url}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={recommendation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "group flex items-center justify-center w-full py-4 rounded-xl font-bold text-base shadow-lg transition-all hover:ring-2 ring-offset-2 ring-offset-gray-950",
                                recommendation.tier === "CORE" ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20 ring-emerald-500" : 
                                recommendation.tier === "FLUX" ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20 ring-purple-500" : 
                                "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20 ring-purple-500"
                            )}
                        >
                            Order Sekarang <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}