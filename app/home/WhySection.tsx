"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  Zap,
  ShieldCheck,
  Globe,
  Headset,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Lightning-Fast Performance",
    subtitle: "Deploy at the Speed of Light",
    desc: "NVMe SSDs and latest high-clock processors mean your users never experience lag. No shared resources, no compromises.",
    icon: Zap,
    stat: "5ms",
    statLabel: "Average Latency",
    highlight: "Gen 4 NVMe",
    tag: "Performance",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.18)",
    textColor: "text-violet-400",
    accentColor: "#7c3aed",
  },
  {
    id: 2,
    title: "Enterprise Security",
    subtitle: "DDoS Protection Built-In",
    desc: "10Tbps DDoS mitigation at the network edge. Sleep peacefully knowing your community is protected from attacks.",
    icon: ShieldCheck,
    stat: "10Tbps",
    statLabel: "Mitigation Capacity",
    highlight: "Always-On Protection",
    tag: "Security",
    color: "from-fuchsia-500 to-pink-600",
    glowColor: "rgba(217,70,239,0.15)",
    textColor: "text-fuchsia-400",
    accentColor: "#a21caf",
  },
  {
    id: 3,
    title: "Global Infrastructure",
    subtitle: "Low Latency Everywhere",
    desc: "Premium routing across Jakarta, Singapore, and US. Your players connect from anywhere with minimal ping.",
    icon: Globe,
    stat: "3",
    statLabel: "Premium Regions",
    highlight: "Strategic Locations",
    tag: "Network",
    color: "from-indigo-500 to-blue-600",
    glowColor: "rgba(99,102,241,0.15)",
    textColor: "text-indigo-400",
    accentColor: "#4f46e5",
  },
  {
    id: 4,
    title: "Expert Support",
    subtitle: "Help When You Need It",
    desc: "Our engineering team responds in minutes, not hours. 24/7 support that actually knows how to solve problems.",
    icon: Headset,
    stat: "< 15min",
    statLabel: "Response Time",
    highlight: "Real Experts",
    tag: "Support",
    color: "from-purple-500 to-violet-600",
    glowColor: "rgba(168,85,247,0.15)",
    textColor: "text-purple-400",
    accentColor: "#7c3aed",
  },
];

const MockupCard = ({ id }: { id: number }) => {
  const cards: Record<number, JSX.Element> = {
    1: (
      <div className="bg-[#0f0f13] rounded-2xl p-6 border border-violet-500/20 shadow-2xl shadow-violet-900/20">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 mb-4">
            {["bg-red-500/70","bg-yellow-500/70","bg-green-500/70"].map((c,i)=>(
              <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`}/>
            ))}
            <div className="flex-1 h-5 bg-white/5 rounded ml-2"/>
          </div>
          <div className="h-2 bg-violet-500/40 rounded-full w-3/4"/>
          <div className="h-2 bg-white/8 rounded-full w-full"/>
          <div className="h-2 bg-white/5 rounded-full w-5/6"/>
          <div className="flex gap-3 mt-5">
            <div className="h-10 w-10 bg-violet-500/20 rounded-lg shrink-0 border border-violet-500/20"/>
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-2 bg-violet-500/30 rounded w-3/4"/>
              <div className="h-2 bg-white/10 rounded w-1/2"/>
            </div>
          </div>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-violet-400/70 font-mono">latency: 5ms</span>
            <div className="flex gap-1 items-end">
              {[8,12,16,20,24].map((h,i)=>(
                <div key={i} className="w-1 bg-violet-500/60 rounded-sm" style={{height:`${h}px`}}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="bg-[#0f0f13] rounded-2xl p-6 border border-fuchsia-500/20 shadow-2xl shadow-fuchsia-900/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400 font-mono">shield.status</span>
            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">● Active</span>
          </div>
          {["DDoS Layer","Firewall","Rate Limit"].map((label,i)=>(
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">{label}</span>
                <span className="text-fuchsia-400">100%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{width:0}} animate={{width:"100%"}}
                  transition={{duration:0.8,delay:i*0.2}}
                  className="h-full bg-linear-to-r from-fuchsia-500 to-pink-500"
                />
              </div>
            </div>
          ))}
          <div className="text-xs text-slate-500 font-mono pt-1">10Tbps mitigation capacity</div>
        </div>
      </div>
    ),
    3: (
      <div className="bg-[#0f0f13] rounded-2xl p-6 border border-indigo-500/20 shadow-2xl shadow-indigo-900/20">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"/>
            <span className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">Global Sync</span>
          </div>
          {[{city:"Jakarta",ping:"1ms",bar:99},{city:"Singapore",ping:"8ms",bar:85},{city:"US East",ping:"120ms",bar:40}].map((n,i)=>(
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-slate-400 w-20">{n.city}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{width:0}} animate={{width:`${n.bar}%`}}
                  transition={{duration:0.6,delay:i*0.15}}
                  className="h-full bg-linear-to-r from-indigo-500 to-blue-400"
                />
              </div>
              <span className="text-xs text-indigo-400 font-mono w-12 text-right">{n.ping}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    4: (
      <div className="bg-[#0f0f13] rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/20">
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <span className="text-xs text-purple-400 font-bold">S</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Support Team</p>
              <p className="text-xs text-green-400">● Online now</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-xl rounded-tl-none p-2.5 max-w-[85%]">
              <p className="text-xs text-slate-300">We're here to help 👋</p>
            </div>
            <div className="bg-purple-500/10 rounded-xl rounded-tr-none p-2.5 max-w-[85%] ml-auto border border-purple-500/20">
              <p className="text-xs text-purple-300">Can I get started quickly?</p>
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-none p-2.5 max-w-[85%]">
              <p className="text-xs text-slate-300">Absolutely! Avg response &lt;15 min.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  };
  return cards[id] ?? null;
};

const VerticalTimeline = ({
  activeIndex,
  subProgress,
}: {
  activeIndex: number;
  subProgress: number;
}) => (
  <div className="relative flex flex-col w-full">
    {features.map((f, i) => {
      const Icon = f.icon;
      const isPast = i < activeIndex;
      const isActive = i === activeIndex;
      const isUpcoming = i > activeIndex;

      return (
        <div key={f.id} className="relative flex gap-4">
          <div className="flex flex-col items-center shrink-0 w-10">
            <div className="relative shrink-0">
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full bg-linear-to-br ${f.color} blur-md pointer-events-none`}
                />
              )}
              <div
                className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  isActive
                    ? `bg-linear-to-br ${f.color} border-white/30 shadow-lg`
                    : isPast
                    ? `bg-linear-to-br ${f.color} opacity-70 border-white/10`
                    : "bg-[#0f0f13] border-white/10"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors duration-300 ${
                    isActive || isPast ? "text-white" : "text-slate-600"
                  }`}
                />
                <div
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? "bg-white text-purple-700 border-white"
                      : isPast
                      ? "bg-slate-700 text-slate-300 border-slate-600"
                      : "bg-[#0f0f13] text-slate-600 border-white/10"
                  }`}
                >
                  {f.id}
                </div>
              </div>
            </div>
            {i < features.length - 1 && (
              <div className="relative w-px flex-1 mt-1" style={{ minHeight: "3.5rem" }}>
                <div className="absolute inset-0 bg-white/8" />
                {isPast && (
                  <div className={`absolute inset-0 bg-linear-to-b ${f.color} opacity-60`} />
                )}
                {isActive && (
                  <div
                    className={`absolute top-0 left-0 right-0 bg-linear-to-b ${f.color}`}
                    style={{
                      height: `${subProgress * 100}%`,
                      transition: "height 0.05s linear",
                    }}
                  />
                )}
                {isActive && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-purple-500/80 z-10"
                    style={{
                      top: `calc(${subProgress * 100}% - 4px)`,
                      transition: "top 0.05s linear",
                    }}
                  />
                )}
              </div>
            )}
          </div>
          <div className={`pb-10 ${i === features.length - 1 ? "pb-0" : ""} flex-1 min-w-0`}>
            <div className="flex items-center gap-2 mt-1.5 mb-1">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? f.textColor : isPast ? "text-slate-500" : "text-slate-700"
                }`}
              >
                {f.tag}
              </span>
              {isPast && (
                <span className="text-[9px] text-slate-600 font-mono">✓ done</span>
              )}
            </div>
            {isPast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-1"
              >
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{f.desc}</p>
                <div className="flex items-baseline gap-1.5 mt-1.5">
                  <span className={`text-sm font-bold text-transparent bg-clip-text bg-linear-to-r ${f.color} opacity-70`}>
                    {f.stat}
                  </span>
                  <span className="text-[10px] text-slate-700">{f.statLabel}</span>
                </div>
              </motion.div>
            )}
            {isActive && (
              <p className={`text-xs font-semibold ${f.textColor} mt-0.5`}>{f.title}</p>
            )}
          </div>
        </div>
      );
    })}
  </div>
);
export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const isLockedRef = useRef(false);
  const cooldownRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [subProgress, setSubProgress] = useState(0);

  const TOTAL = features.length;

  const applyProgress = useCallback((p: number) => {
    const clamped = Math.max(0, Math.min(TOTAL, p));
    progressRef.current = clamped;
    const idx = Math.min(Math.floor(clamped), TOTAL - 1);
    const sub = clamped - Math.floor(clamped);
    setActiveIndex(idx);
    setSubProgress(idx === TOTAL - 1 ? 1 : sub);
  }, [TOTAL]);

  const lock = useCallback(() => {
    if (isLockedRef.current || cooldownRef.current) return;
    isLockedRef.current = true;
    document.body.style.overflow = "hidden";
  }, []);

  const unlock = useCallback((goDown: boolean) => {
    if (!isLockedRef.current) return;
    cooldownRef.current = true;
    const section = sectionRef.current;
    if (!section) return;
    if (goDown) {
      setTimeout(() => {
        isLockedRef.current = false;
        document.body.style.overflow = "";
        const target = section.offsetTop + section.offsetHeight;
        window.scrollTo({ top: target, behavior: "smooth" });
        setTimeout(() => { cooldownRef.current = false; }, 1000);
      }, 120);
    } else {
      isLockedRef.current = false;
      document.body.style.overflow = "";
      const target = section.offsetTop - 1;
      window.scrollTo({ top: target, behavior: "smooth" });
      setTimeout(() => { cooldownRef.current = false; }, 800);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (isLockedRef.current || cooldownRef.current) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 2 && rect.top >= -2) {
        window.scrollTo({ top: section.offsetTop, behavior: "instant" });
        lock();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current && !cooldownRef.current) return;
      e.preventDefault();
      e.stopPropagation();
      if (!isLockedRef.current) return;
      const rawDelta = e.deltaY;
      const normalized = Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), 80);
      const step = normalized / 80 / features.length;
      const next = progressRef.current + step;
      if (next <= 0 && rawDelta < 0) { applyProgress(0); unlock(false); return; }
      if (next >= TOTAL && rawDelta > 0) { applyProgress(TOTAL); unlock(true); return; }
      applyProgress(Math.max(0, Math.min(TOTAL, next)));
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      e.preventDefault();
      const dy = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      const step = dy / window.innerHeight / 1.5;
      const next = progressRef.current + step;
      if (next <= 0 && dy < 0) { applyProgress(0); unlock(false); return; }
      if (next >= TOTAL && dy > 0) { applyProgress(TOTAL); unlock(true); return; }
      applyProgress(Math.max(0, Math.min(TOTAL, next)));
    };

    document.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false, capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel, { capture: true } as EventListenerOptions);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove, { capture: true } as EventListenerOptions);
      document.body.style.overflow = "";
    };
  }, [lock, unlock, applyProgress, TOTAL]);

  const active = features[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="why-section"
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "#08080a" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none z-0"
        
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 75% 60%, ${active.glowColor}, transparent 70%),
              radial-gradient(ellipse 30% 40% at 85% 30%, ${active.glowColor.replace("0.18","0.08").replace("0.15","0.06")}, transparent 60%)
            `,
          }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      <div className="relative z-10 h-full max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col">
        <div className="pt-16 pb-10 shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-purple-500" />
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">
              Why Choose Us
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for Performance,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-400">
              Designed for You
            </span>
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-lg">
            Enterprise-grade hosting without the enterprise pricing.
          </p>
        </div>
        <div className="flex-1 flex gap-10 lg:gap-16 min-h-0 pb-10">
          <div className="shrink-0 p-8 w-48 lg:w-56 overflow-y-auto scrollbar-none">
            <VerticalTimeline activeIndex={activeIndex} subProgress={subProgress} />
          </div>
          <div className="shrink-0 w-px bg-white/5 self-stretch" />
          <div className="flex-1 flex items-center min-h-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full"
              >
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <div className={`w-2 h-2 rounded-full bg-linear-to-br ${active.color}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${active.textColor}`}>
                      {active.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 uppercase tracking-wider mb-2 font-mono">
                    <span
                      className={`text-transparent bg-clip-text bg-linear-to-r ${active.color} text-xl font-bold mr-2`}
                    >
                      0{active.id}
                    </span>
                    {active.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                    {active.desc}
                  </p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span
                      className={`text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r ${active.color}`}
                    >
                      {active.stat}
                    </span>
                    <span className="text-slate-500 text-sm">{active.statLabel}</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span
                      className={`px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs font-semibold ${active.textColor}`}
                    >
                      {active.highlight}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group text-sm"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-end">
                  <div className="w-full max-w-sm">
                    <MockupCard id={active.id} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {activeIndex === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 right-8 flex items-center gap-2 text-slate-600 text-xs z-20"
        >
          <span>Scroll to explore</span>
          <div className="flex flex-col gap-0.5">
            <div className="w-0.5 h-3 bg-slate-700 rounded-full mx-auto" />
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-purple-500/60 mx-auto"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}