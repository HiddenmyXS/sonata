"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Database, 
  MapPin, 
  ShieldCheck,
  Cpu,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA COMPARISON ---
const comparisonData = [
  {
    feature: "CPU Architecture",
    icon: Cpu,
    zerocloud: { 
      text: "Multi-Tier Choice", 
      sub: "Xeon / Ryzen 5 / EPYC 4004" 
    }, 
    zlpe: "Ryzen 7 5700G, EPYC 4464P, I9 13900HK",
    arra: "EPYC 9354, 4464P & R9 9950X",
    nscd: "EPYC 4464P & 4584PX"
  },
  {
    feature: "Storage / GB RAM",
    icon: HardDrive,
    zerocloud: { text: "~6.6 GB", sub: "40GB for 6GB Plan" },
    zlpe: "~6.25 GB",
    arra: "~3.3 GB", 
    nscd: "~3.3 GB"  
  },
  {
    feature: "Server Location",
    icon: MapPin,
    zerocloud: { text: "Indonesia / SG 🇮🇩", sub: "Low Latency (15-30ms)" },
    zlpe: "Europe / USA",
    arra: "Singapore (Shared)",
    nscd: "Europe / USA"
  },
  {
    feature: "Off-site Backups",
    icon: Database,
    zerocloud: { text: "Included", sub: "Free User-Managed" },
    zlpe: "Included",
    arra: "Included*", 
    nscd: "Paid / Limited"
  },
  {
    feature: "Dedicated IP",
    icon: ShieldCheck,
    zerocloud: { text: "Available", sub: "Optional Add-on" },
    zlpe: "No / Shared",
    arra: "No / Shared",
    nscd: "No / Shared"
  }
];

const pricingRow = {
  zerocloud: "Rp 90.000",
  zlpe: "Rp 91.200",
  arra: "Rp 60.000", 
  nscd: "Rp 81.000"
};

const providers = [
  { id: "zerocloud", name: "ZeroCloud", color: "text-sky-400" },
  { id: "zlpe", name: "Ze*****re", color: "text-gray-500" },
  { id: "arra", name: "Ar****ra", color: "text-gray-500" },
  { id: "nscd", name: "N*******d", color: "text-gray-500" },
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider"
          >
            <Zap className="w-3 h-3" />
            <span>Market Comparison</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Mengapa <span className="text-transparent bg-clip-text bg-sky-500">ZeroCloud?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Transparansi adalah kunci. Lihat bagaimana spesifikasi dan harga kami bersaing dengan provider lain.
          </p>
        </div>

        <div className="relative w-full overflow-x-auto pb-4">
            <div className="min-w-[900px] bg-gray-900/40 border border-gray-800 rounded-3xl p-2 backdrop-blur-sm">
                
                <div className="grid grid-cols-5 gap-4 mb-4 p-4 border-b border-gray-800">
                    <div className="col-span-1 flex items-center font-bold text-gray-500 uppercase text-xs tracking-wider">
                        Features
                    </div>
                    {providers.map((prov) => (
                        <div key={prov.id} className="col-span-1 text-center">
                            <h4 className={cn("font-black text-lg", prov.color)}>
                                {prov.name}
                            </h4>
                            {prov.id === 'zerocloud' && (
                                <span className="text-[10px] font-bold bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full border border-sky-500/30">
                                    RECOMMENDED
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    {comparisonData.map((row, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="grid grid-cols-5 gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors items-center"
                        >
                            <div className="col-span-1 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-gray-300 font-bold text-sm">
                                    <row.icon className="w-4 h-4 text-sky-500" />
                                    {row.feature}
                                </div>
                            </div>

                            <div className="col-span-1 relative">
                                <div className="absolute inset-0 bg-sky-500/10 blur-xl rounded-full opacity-50" />
                                <div className="relative bg-gray-800/80 border border-sky-500/50 rounded-xl p-3 text-center shadow-lg shadow-sky-500/10">
                                    <p className="text-sm font-bold text-white leading-tight">{row.zerocloud.text}</p>
                                    <p className="text-[10px] text-sky-300 mt-1 font-medium">{row.zerocloud.sub}</p>
                                </div>
                            </div>

                            <div className="col-span-1 text-center text-sm text-gray-500 font-medium px-2">{row.zlpe}</div>
                            <div className="col-span-1 text-center text-sm text-gray-500 font-medium px-2">{row.arra}</div>
                            <div className="col-span-1 text-center text-sm text-gray-500 font-medium px-2">{row.nscd}</div>
                        </motion.div>
                    ))}
                </div>

                {/* PRICING FOOTER - GRID COLS 5 */}
                <div className="grid grid-cols-5 gap-4 mt-4 p-6 bg-black/20 rounded-2xl border border-white/5 items-center">
                    <div className="col-span-1 font-bold text-white">
                        Price (6GB RAM)
                        <p className="text-xs text-gray-500 font-normal mt-1">*Monthly Estimate</p>
                    </div>
                    
                    {/* ZeroCloud Price */}
                    <div className="col-span-1 text-center">
                        <div className="text-2xl font-black text-sky-400">{pricingRow.zerocloud}</div>
                        <p className="text-xs text-gray-400">Core Advanced</p>
                    </div>

                    <div className="col-span-1 text-center text-lg font-bold text-gray-600">{pricingRow.zlpe}</div>
                    <div className="col-span-1 text-center text-lg font-bold text-gray-600">{pricingRow.arra}</div>
                    <div className="col-span-1 text-center text-lg font-bold text-gray-600">{pricingRow.nscd}</div>
                </div>

            </div>
        </div>

        <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 font-mono">
                *Comparison data accurate as of January 21st, 2026 based on public claims. Competitor names obfuscated for privacy.
            </p>
        </div>

      </div>
    </section>
  );
}