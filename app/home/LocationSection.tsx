"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, 
  RefreshCw,
  MapPin,
  Activity,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedMap } from "@/components/ui/dotted-map";
import Flag from "react-flagkit";

// ====================================================================
// SERVER COORDINATES - ADJUST THESE TO POSITION MARKERS ON THE MAP
// x: 0-100 (left to right) | y: 0-100 (top to bottom)
// ====================================================================
const SERVER_COORDINATES = {
  jakarta:     { x: 82, y: 60 },
  singapore:   { x: 75, y: 55 },
  kualalumpur: { x: 78, y: 59 },
  losangeles:  { x: 18, y: 35 },
};

const locations = [
  {
    id: "id",
    name: "Jakarta",
    region: "Indonesia",
    url: "https://panel.lokanode.com",
    countryCode: "ID",
    coordinates: SERVER_COORDINATES.jakarta,
    fullName: "Jakarta, Indonesia",
  },
  {
    id: "sg",
    name: "Singapore",
    region: "Singapore",
    url: "https://bill.zerocloud.id",
    countryCode: "SG",
    coordinates: SERVER_COORDINATES.singapore,
    fullName: "Singapore, SG",
  },
  {
    id: "my",
    name: "Kuala Lumpur",
    region: "Malaysia",
    url: "https://my.zerocloud.id",
    countryCode: "MY",
    coordinates: SERVER_COORDINATES.kualalumpur,
    fullName: "Kuala Lumpur, Malaysia",
  },
  {
    id: "us",
    name: "Los Angeles",
    region: "USA",
    url: "https://google.com",
    countryCode: "US",
    coordinates: SERVER_COORDINATES.losangeles,
    fullName: "Los Angeles, USA",
  },
];

// ─── Ping colour helpers ───
const getPingColor    = (p: number) => p < 50 ? "from-emerald-400 to-emerald-500" : p < 150 ? "from-amber-400 to-amber-500" : "from-rose-400 to-rose-500";
const getPingTextColor = (p: number) => p < 50 ? "text-emerald-400" : p < 150 ? "text-amber-400" : "text-rose-400";
const getPingStatus   = (p: number) => p < 50 ? "Excellent" : p < 150 ? "Good" : "Fair";
const getPingBg       = (p: number) => p < 50 ? "bg-emerald-500/10 border-emerald-500/20" : p < 150 ? "bg-amber-500/10 border-amber-500/20" : "bg-rose-500/10 border-rose-500/20";

// ─── Map Marker ───
const MapMarker = ({
  location,
  ping,
  isHovered,
  onHover,
}: {
  location: typeof locations[0];
  ping?: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) => (
  <div
    className="absolute"
    style={{
      left: `${location.coordinates.x}%`,
      top: `${location.coordinates.y}%`,
      transform: "translate(-50%, -50%)",
      zIndex: isHovered ? 50 : 10,
    }}
    onMouseEnter={() => onHover(location.id)}
    onMouseLeave={() => onHover(null)}
  >
    {/* Pulsing ring */}
    <motion.div
      animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      className="absolute inset-0 w-8 h-8 rounded-full bg-purple-500/30"
      style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
    />

    {/* Dot */}
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="relative w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/50 cursor-pointer flex items-center justify-center border border-white/20"
    >
      <div className="w-2 h-2 rounded-full bg-white" />
    </motion.div>

    {/* Hover popup */}
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap"
        >
          <div className="bg-[#0f0f14]/95 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl shadow-purple-900/30 border border-white/8 space-y-3 min-w-[220px]">
            {/* Arrow */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5">
              <div className="w-2 h-2 bg-[#0f0f14]/95 rotate-45 border-l border-t border-white/8" />
            </div>

            <div className="flex items-center gap-2.5">
              <Flag country={location.countryCode} size={20} />
              <div>
                <p className="text-sm font-semibold text-white leading-none">{location.fullName}</p>
                <p className="text-xs text-slate-500 mt-0.5">Server Location</p>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {ping !== undefined ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg bg-gradient-to-br", getPingColor(ping))}>
                    <Activity className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Latency</p>
                    <p className={cn("text-sm font-bold font-mono", getPingTextColor(ping))}>{ping}ms</p>
                  </div>
                </div>
                <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-lg border", getPingBg(ping), getPingTextColor(ping))}>
                  {getPingStatus(ping)}
                </span>
              </div>
            ) : (
              <p className="text-xs text-slate-600 text-center">Run ping test to see latency</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Connection Line ───
const ConnectionLine = ({
  from,
  to,
  isPinging,
}: {
  from: typeof locations[0];
  to: typeof locations[0];
  isPinging: boolean;
}) => (
  <motion.line
    x1={`${from.coordinates.x}%`}
    y1={`${from.coordinates.y}%`}
    x2={`${to.coordinates.x}%`}
    y2={`${to.coordinates.y}%`}
    stroke="rgba(139, 92, 246, 0.35)"
    strokeWidth="1.5"
    strokeDasharray={isPinging ? "8,5" : "0,0"}
    initial={{ strokeDashoffset: 0 }}
    animate={isPinging ? { strokeDashoffset: -13 } : { strokeDashoffset: 0 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    style={{ pointerEvents: "none" }}
  />
);

// ─── Main Component ───
export default function LocationSection() {
  const [pingResults, setPingResults] = useState<Record<string, number>>({});
  const [isPinging, setIsPinging]     = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const measurePing = async (url: string) => {
    const start = performance.now();
    try { await fetch(url, { mode: "no-cors", cache: "no-store" }); } catch (_) {}
    return Math.floor(performance.now() - start);
  };

  const handlePingTest = async () => {
    setIsPinging(true);
    setPingResults({});
    const results: Record<string, number> = {};
    await Promise.all(locations.map(async (loc) => {
      results[loc.id] = await measurePing(loc.url);
    }));
    setPingResults(results);
    setIsPinging(false);
  };

  const getBestLocation = () => {
    if (Object.keys(pingResults).length === 0) return null;
    let best = locations[0];
    let minPing = Infinity;
    locations.forEach((loc) => {
      if (pingResults[loc.id] && pingResults[loc.id] < minPing) {
        minPing = pingResults[loc.id];
        best = loc;
      }
    });
    return best;
  };

  const bestLocation = getBestLocation();

  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{ background: "#08080a" }}
    >
      {/* ── Seamless top blend from WhySection ── */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none z-0" 
      />

      {/* ── Ambient glow — right side ── */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[140px] z-0"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.14) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full pointer-events-none blur-[120px] z-0"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)" }}
      />

      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">
              Global Infrastructure
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Servers Around the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
              World
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl">
            Connect to the nearest server for optimal performance, wherever your players are located.
          </p>
        </motion.div>

        {/* ── Grid: Map 2/3 + List 1/3 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Map */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/6 shadow-2xl shadow-purple-950/40"
              style={{ background: "#0d0d12" }}
            >
              {/* DottedMap */}
              <div className="absolute inset-0 opacity-50">
                <DottedMap mapColor="#1e1e2e" dotColor="#7c3aed" />
              </div>

              {/* Vignette overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, #0d0d12 100%)`,
                }}
              />

              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                {isPinging && (
                  <>
                    <ConnectionLine from={locations[0]} to={locations[1]} isPinging={isPinging} />
                    <ConnectionLine from={locations[1]} to={locations[2]} isPinging={isPinging} />
                    <ConnectionLine from={locations[0]} to={locations[3]} isPinging={isPinging} />
                    <ConnectionLine from={locations[3]} to={locations[1]} isPinging={isPinging} />
                  </>
                )}
              </svg>

              {/* Markers */}
              {locations.map((loc) => (
                <MapMarker
                  key={loc.id}
                  location={loc}
                  ping={pingResults[loc.id]}
                  isHovered={hoveredLocation === loc.id}
                  onHover={setHoveredLocation}
                />
              ))}

              {/* Live badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 backdrop-blur-md"
                style={{ background: "rgba(13,13,18,0.7)" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-purple-400"
                />
                <span className="text-xs font-medium text-slate-400">Live Network</span>
              </div>

              {/* Node count badge */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 backdrop-blur-md"
                style={{ background: "rgba(13,13,18,0.7)" }}
              >
                <span className="text-xs font-medium text-slate-400">{locations.length} Active Nodes</span>
              </div>
            </div>
          </motion.div>

          {/* Location List */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 flex flex-col gap-2.5"
          >
            {locations.map((loc, i) => {
              const ping    = pingResults[loc.id];
              const isBest  = bestLocation?.id === loc.id;
              const isHov   = hoveredLocation === loc.id;

              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={cn(
                    "relative p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden",
                    isHov
                      ? "border-purple-500/30 bg-purple-500/5"
                      : "border-white/6 bg-white/3 hover:border-white/10 hover:bg-white/5"
                  )}
                >
                  {/* Best location glow */}
                  {isBest && (
                    <div className="absolute inset-0 pointer-events-none rounded-xl border border-emerald-500/30 bg-emerald-500/5" />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Flag country={loc.countryCode} size={20} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-white truncate">{loc.name}</p>
                          {isBest && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-slate-600 truncate">{loc.region}</p>
                      </div>
                    </div>

                    {ping !== undefined ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-right flex-shrink-0 ml-3"
                      >
                        <p className={cn("text-sm font-mono font-bold", getPingTextColor(ping))}>
                          {ping}ms
                        </p>
                        <p className="text-[10px] text-slate-600">{getPingStatus(ping)}</p>
                      </motion.div>
                    ) : (
                      <Wifi className={cn(
                        "w-4 h-4 flex-shrink-0 ml-3 transition-colors",
                        isHov ? "text-purple-400/60" : "text-slate-700"
                      )} />
                    )}
                  </div>

                  {/* Ping bar */}
                  {ping !== undefined && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mt-3 h-px rounded-full origin-left"
                      style={{
                        background: `linear-gradient(to right, ${
                          ping < 50 ? "rgba(52,211,153,0.5)" : ping < 150 ? "rgba(251,191,36,0.5)" : "rgba(248,113,113,0.5)"
                        }, transparent)`,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Test button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={handlePingTest}
              disabled={isPinging}
              className={cn(
                "w-full mt-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border",
                isPinging
                  ? "text-slate-500 border-white/6 bg-white/3 cursor-not-allowed"
                  : "text-white border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/15 hover:border-purple-500/40"
              )}
            >
              {isPinging ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Testing connections…
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  Test Connection
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* ── Results banner ── */}
        <AnimatePresence>
          {!isPinging && Object.keys(pingResults).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
            >
              <p className="text-slate-600 text-sm">Results updated · Hover markers for details</p>
              {bestLocation && (
                <>
                  <span className="hidden sm:block text-slate-700">·</span>
                  <p className="text-sm text-white">
                    Best for you:{" "}
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                      {bestLocation.fullName}
                    </span>
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}