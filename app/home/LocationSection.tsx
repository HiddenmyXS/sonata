"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Wifi, 
  Globe2, 
  RefreshCw,
  Trophy,
  Server
} from "lucide-react";

import { DottedMap } from "@/components/ui/dotted-map"; 
import { cn } from "@/lib/utils";

// jng lupa harus diawali http:// atau https:// yh
const locations = [
  { 
    id: "id", 
    name: "Jakarta, Indonesia", 
    lat: -6.2088, 
    lng: 106.8456, 
    region: "Southeast Asia",
    url: "https://panel.lokanode.com" 
  },
  { 
    id: "sg", 
    name: "Singapore, SG", 
    lat: 1.3521, 
    lng: 103.8198, 
    region: "Southeast Asia",
    url: "https://bill.zerocloud.id" 
  },
  { 
    id: "my", 
    name: "Kuala Lumpur, MY", 
    lat: 3.1390, 
    lng: 101.6869, 
    region: "Southeast Asia",
    url: "https://ctrl.zerocloud.id" 
  },
  { 
    id: "us", 
    name: "Los Angeles, USA", 
    lat: 34.0522, 
    lng: -118.2437, 
    region: "North America",
    url: "https://lucentui.zaqua.studio" 
  },
];

const mapMarkers = locations.map(loc => ({
  lat: loc.lat,
  lng: loc.lng,
  size: 0.6,
}));

export default function LocationSection() {
  const [pings, setPings] = useState<Record<string, number | null>>({});
  const [isPinging, setIsPinging] = useState(false);
  const [bestLocation, setBestLocation] = useState<string | null>(null);
  const measureLatency = async (url: string) => {
    const start = performance.now();
    try {
      await fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
    } catch (err) {
      console.warn("Ping fallback", err);
    }
    const end = performance.now();
    return Math.floor(end - start);
  };

  const handlePingTest = async () => {
    setIsPinging(true);
    setPings({});
    setBestLocation(null);

    const results: Record<string, number> = {};

    for (const loc of locations) {
      
      await new Promise(r => setTimeout(r, 200));
      const latency = await measureLatency(loc.url);
      
      setPings(prev => ({ ...prev, [loc.id]: latency }));
      results[loc.id] = latency;
    }

    let lowestPing = Infinity;
    let winnerId = null;

    Object.entries(results).forEach(([id, ping]) => {
      if (ping < lowestPing) {
        lowestPing = ping;
        winnerId = id;
      }
    });

    setBestLocation(winnerId);
    setIsPinging(false);
  };

  const getPingColor = (ms: number) => {
    if (ms < 100) return "text-green-400 bg-green-400/10 border-green-400/20";
    if (ms < 200) return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
    return "text-red-400 bg-red-400/10 border-red-400/20";
  };

  return (
    <section className="relative w-full py-24 bg-gray-950 px-8 border-t border-gray-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Globe2 className="w-3 h-3" />
            <span>Global Infrastructure</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Jaringan <span className="text-purple-500">Low Latency</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cek koneksi Anda ke data center kami secara realtime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030712_100%)] z-10 pointer-events-none" />
            <DottedMap 
                markers={mapMarkers}
                className="w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-500 text-gray-600"
            />
          </motion.div>

          <div className="lg:col-span-1 h-full">
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6 h-full flex flex-col backdrop-blur-sm">
                
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-purple-500" /> Realtime Ping
                    </h3>
                    {bestLocation && (
                        <motion.span 
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full font-bold uppercase"
                        >
                            Best Choice
                        </motion.span>
                    )}
                </div>

                <div className="space-y-3 flex-1">
                    {locations.map((loc) => {
                        const ping = pings[loc.id];
                        const colorClass = ping ? getPingColor(ping) : "bg-gray-800 border-gray-700 text-gray-500";
                        const isBest = bestLocation === loc.id;

                        return (
                            <div 
                                key={loc.id} 
                                className={cn(
                                    "relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                                    colorClass,
                                    isBest ? "ring-2 ring-green-500/50 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.2)]" : ""
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${ping ? 'bg-black/20' : 'bg-gray-700/30'}`}>
                                        {isBest ? <Trophy className="w-4 h-4 text-green-400" /> : <MapPin className="w-4 h-4" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-bold text-white">{loc.name}</p>
                                        <div className="flex items-center gap-1.5">
                                          <Server className="w-3 h-3 opacity-50" />
                                          <p className="text-[10px] opacity-70 uppercase tracking-wide">{loc.id.toUpperCase()}-NODE</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right min-w-[70px]">
                                    {ping ? (
                                        <motion.div 
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex flex-col items-end"
                                        >
                                            <span className="text-lg font-mono font-bold leading-none">
                                                {ping}<span className="text-xs font-sans font-normal ml-0.5 opacity-70">ms</span>
                                            </span>
                                        </motion.div>
                                    ) : (
                                        <span className="text-xs opacity-50">Waiting...</span>
                                    )}
                                </div>

                                {isPinging && !ping && (
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>

                <AnimatePresence>
                    {bestLocation && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 p-4 bg-gray-950/50 border border-gray-800 rounded-xl flex items-start gap-3"
                        >
                            <div className="mt-1">
                              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-200">
                                  Terbaik: <span className="text-green-400">{locations.find(l => l.id === bestLocation)?.name}</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Latency terendah terdeteksi. Disarankan memilih lokasi ini untuk pengalaman bermain terbaik.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-6">
                    <button 
                      className="w-full px-6 py-3.5 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white font-bold uppercase tracking-wide rounded-full transition-colors duration-200 shadow-lg"
                      disabled={isPinging}
                      onClick={handlePingTest}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isPinging ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Pinging...
                          </>
                        ) : (
                          <>
                            <Wifi className="w-4 h-4" />
                            Test Koneksi Saya
                          </>
                        )}
                      </div>
                    </button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}