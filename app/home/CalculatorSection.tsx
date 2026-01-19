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
import { Button } from "@/components/ui/button";

const softwareTypes = [
  { id: "vanilla", name: "Vanilla", type: "basic", icon: "/aset/images/icons/calculator/MCJE.png" },
  { id: "paper", name: "Paper", type: "plugin", icon: "/aset/images/icons/calculator/paper.webp" },
  { id: "spigot", name: "Spigot", type: "plugin", icon: "/aset/images/icons/calculator/spigotmc.png" },
  { id: "fabric", name: "Fabric", type: "mod", icon: "/aset/images/icons/calculator/fabric.png" },
  { id: "forge", name: "Forge", type: "mod", icon: "/aset/images/icons/calculator/forge.png" },
  { id: "bedrock", name: "Bedrock", type: "basic", icon: "/aset/images/icons/calculator/MCBE.png" },
];

const plansDB = [
    { name: "Core Entry", tier: "CORE", ram: 1, price: 15000, desc: "Starter pack untuk mabar berdua." },
    { name: "Core Basic", tier: "CORE", ram: 2, price: 30000, desc: "Cukup untuk Vanilla survival kecil." },
    { name: "Core Standard", tier: "CORE", ram: 4, price: 60000, desc: "Standar main Paper/Spigot lancar." },
    { name: "Core Advanced", tier: "CORE", ram: 6, price: 90000, desc: "Bisa handle plugin agak banyak." },
    { name: "Core Pro", tier: "CORE", ram: 8, price: 120000, desc: "Performa solid untuk komunitas." },
    { name: "Core Plus", tier: "CORE", ram: 10, price: 150000, desc: "Extra headroom untuk world besar." },
    { name: "Core Max", tier: "CORE", ram: 12, price: 180000, desc: "Kapasitas maksimal seri Core." },
    { name: "Flux Lite", tier: "FLUX", ram: 4, price: 80000, desc: "Entry level untuk modpack ringan." },
    { name: "Flux Standard", tier: "FLUX", ram: 6, price: 120000, desc: "Ideal untuk modpack medium (Fabric)." },
    { name: "Flux Pro", tier: "FLUX", ram: 8, price: 160000, desc: "Best seller untuk server modded." },
    { name: "Flux Ultra", tier: "FLUX", ram: 12, price: 240000, desc: "Monster performa untuk heavy mods." },
    { name: "Atlas Titan", tier: "ATLAS", ram: 8, price: 240000, desc: "Extreme compute i9/Ryzen 9." },
    { name: "Atlas Colossus", tier: "ATLAS", ram: 16, price: 480000, desc: "Untuk server skala network besar." },
];

export default function CalculatorSection() {
  const [selectedSoft, setSelectedSoft] = useState(softwareTypes[0]);
  const [players, setPlayers] = useState([5]);
  const [plugins, setPlugins] = useState([0]);
  const [mods, setMods] = useState([0]);

  const recommendation = useMemo(() => {
    const baseRam = 1.5;
    const ramPerPlayer = selectedSoft.type === "mod" ? 0.15 : 0.08;
    const ramPerPlugin = 0.05;
    const ramPerMod = 0.1;

    let requiredRam = baseRam + (players[0] * ramPerPlayer);
    
    if (selectedSoft.type === "plugin") requiredRam += (plugins[0] * ramPerPlugin);
    if (selectedSoft.type === "mod") requiredRam += (mods[0] * ramPerMod);

    let targetTier = "CORE";
    
    if (selectedSoft.type === "mod") targetTier = "FLUX";
    
    if (requiredRam > 12 || (mods[0] > 50)) targetTier = "ATLAS";

    const availablePlans = plansDB.filter(p => p.tier === targetTier);
    
    let recommendedPlan = availablePlans.find(p => p.ram >= requiredRam);

    if (!recommendedPlan && availablePlans.length > 0) {
        recommendedPlan = availablePlans[availablePlans.length - 1];
    }
    
    if (!recommendedPlan) recommendedPlan = plansDB[2];

    return recommendedPlan;

  }, [selectedSoft, players, plugins, mods]);

  return (
    <section className="relative w-full py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider"
          >
            <Calculator className="w-3 h-3" />
            <span>Smart Estimator</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Bingung Pilih <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">Paket?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Simulasikan kebutuhan servermu di sini. Algoritma kami akan mencarikan spesifikasi paling <i>worth it</i>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-gray-900/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            
            <div className="mb-10">
                <label className="text-xl font-bold text-gray-300 mb-8 flex items-center gap-2">
                    <Package className="w-4 h-4 text-sky-500" /> Platform Server
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {softwareTypes.map((soft) => (
                        <button
                            key={soft.id}
                            onClick={() => {
                                setSelectedSoft(soft);
                                if (soft.type !== 'mod') setMods([0]);
                                if (soft.type !== 'plugin') setPlugins([0]);
                            }}
                            className={cn(
                                "group flex flex-col items-center justify-center gap-3 p-3 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                                selectedSoft.id === soft.id 
                                    ? "bg-sky-500/10 border-sky-500 ring-1 ring-sky-500/50" 
                                    : "bg-gray-950 border-gray-800 hover:border-gray-700 hover:bg-gray-900"
                            )}
                        >
                            {selectedSoft.id === soft.id && (
                                <div className="absolute inset-0 bg-sky-500/5 z-0" />
                            )}
                            
                            <div className="relative w-8 h-8 z-10 transition-transform group-hover:scale-110">
                                <Image src={soft.icon} alt={soft.name} fill className="object-contain" />
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wide z-10",
                                selectedSoft.id === soft.id ? "text-sky-400" : "text-gray-500 group-hover:text-gray-300"
                            )}>{soft.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                
                <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/50">
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                            <Users className="w-4 h-4 text-sky-500" /> Player Online
                        </label>
                        <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-sky-500/20">
                            {players[0]} Orang
                        </span>
                    </div>
                    <Slider 
                        defaultValue={[5]} 
                        max={100} 
                        step={1} 
                        onValueChange={setPlayers}
                        className="py-2"
                    />
                    <p className="text-xs text-gray-500 mt-3">Estimasi jumlah pemain aktif secara bersamaan.</p>
                </div>

                <AnimatePresence mode="wait">
                    {selectedSoft.type === "plugin" && (
                        <motion.div
                            key="plugin-input"
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: "auto", scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/50"
                        >
                            <div className="flex justify-between mb-4">
                                <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-purple-500" /> Total Plugins
                                </label>
                                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-purple-500/20">
                                    {plugins[0]} Pcs
                                </span>
                            </div>
                            <Slider 
                                defaultValue={[0]} 
                                max={100} 
                                step={1} 
                                onValueChange={setPlugins}
                                className="py-2" 
                            />
                        </motion.div>
                    )}

                    {selectedSoft.type === "mod" && (
                        <motion.div
                            key="mod-input"
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: "auto", scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/50"
                        >
                            <div className="flex justify-between mb-4">
                                <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                    <Package className="w-4 h-4 text-orange-500" /> Total Mods
                                </label>
                                <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-orange-500/20">
                                    {mods[0]} Pcs
                                </span>
                            </div>
                            <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg mb-4 text-xs text-orange-300 flex gap-2 items-start">
                                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Modpack membutuhkan CPU High-Frequency (Flux/Atlas) agar tidak terjadi TPS drop.</span>
                            </div>
                            <Slider 
                                defaultValue={[0]} 
                                max={200} 
                                step={5} 
                                onValueChange={setMods}
                                className="py-2" 
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
          </div>

          <div className="lg:col-span-5 relative h-full">
             <div className="sticky top-24"> 
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative bg-linear-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden group"
                >
                    <div className={cn(
                        "absolute inset-0 opacity-20 blur-xl transition-colors duration-700",
                        recommendation.tier === "CORE" ? "bg-linear-to-tr from-green-500 to-emerald-500" : 
                        recommendation.tier === "FLUX" ? "bg-linear-to-tr from-sky-500 to-blue-500" : "bg-linear-to-tr from-purple-500 to-pink-500"
                    )} />

                    <div className="relative bg-gray-950/90 rounded-[2.3rem] p-8 h-full backdrop-blur-xl">
                        
                        <div className="flex justify-between items-start mb-8">
                            <div className={cn(
                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                recommendation.tier === "CORE" ? "bg-green-500/10 text-green-400 border-green-500/20" : 
                                recommendation.tier === "FLUX" ? "bg-sky-500/10 text-sky-400 border-sky-500/20" : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            )}>
                                Perfect Match
                            </div>
                            <Sparkles className={cn(
                                "w-6 h-6",
                                recommendation.tier === "CORE" ? "text-green-500" : 
                                recommendation.tier === "FLUX" ? "text-sky-500" : "text-purple-500"
                            )} />
                        </div>

                        <div className="mb-8">
                            <motion.h3 
                                key={recommendation.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-3xl font-black text-white mb-2"
                            >
                                {recommendation.name}
                            </motion.h3>
                            <div className="flex items-baseline gap-1">
                                <span className={cn(
                                    "text-4xl font-extrabold tracking-tight",
                                    recommendation.tier === "CORE" ? "text-green-400" : 
                                    recommendation.tier === "FLUX" ? "text-sky-400" : "text-purple-400"
                                )}>
                                    Rp {recommendation.price.toLocaleString('id-ID')}
                                </span>
                                <span className="text-gray-500 font-medium">/bulan</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                                <Server className="w-5 h-5 text-gray-400 mb-2" />
                                <span className="text-xl font-bold text-white">{recommendation.ram} GB</span>
                                <span className="text-xs text-gray-500">Dedicated RAM</span>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                                <Cpu className="w-5 h-5 text-gray-400 mb-2" />
                                <span className="text-sm font-bold text-white mt-1">
                                    {recommendation.tier === "CORE" ? "Standard CPU" : recommendation.tier === "FLUX" ? "Ryzen 9" : "Core i9 / Ryzen 9"}
                                </span>
                                <span className="text-xs text-gray-500">Processor</span>
                            </div>
                        </div>

                        <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                            <CheckCircle2 className={cn(
                                "w-5 h-5 shrink-0 mt-0.5",
                                recommendation.tier === "CORE" ? "text-green-500" : 
                                recommendation.tier === "FLUX" ? "text-sky-500" : "text-purple-500"
                            )} />
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {recommendation.desc}
                            </p>
                        </div>

                        <Button 
                            className={cn(
                                "w-full py-7 rounded-xl font-bold text-base shadow-lg transition-all hover:scale-[1.02] hover:ring-2 ring-offset-2 ring-offset-gray-950",
                                recommendation.tier === "CORE" ? "bg-green-600 hover:bg-green-500 text-white shadow-green-500/20 ring-green-500" : 
                                recommendation.tier === "FLUX" ? "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-500/20 ring-sky-500" : 
                                "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20 ring-purple-500"
                            )}
                        >
                            Order Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}