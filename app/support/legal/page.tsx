"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Scale, Lock, Activity, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import TosSection from "./TosSection";
import PrivacySection from "./PrivacySection";
import SlaSection from "./SlaSection";

const legalTabs = [
  {
    id: "tos",
    label: "Terms of Service",
    shortLabel: "Terms",
    icon: Scale,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-500/10",
    component: <TosSection />
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    shortLabel: "Privacy",
    icon: Lock,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    component: <PrivacySection />
  },
  {
    id: "sla",
    label: "Service Level Agreement",
    shortLabel: "SLA",
    icon: Activity,
    color: "from-indigo-500 to-purple-600",
    bg: "bg-indigo-500/10",
    component: <SlaSection />
  }
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState(legalTabs[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end start"] 
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const activeTabData = legalTabs.find(t => t.id === activeTab);

  return (
    <main 
      ref={containerRef}
      className={cn(
        "px-8 flex flex-col items-center w-full min-h-screen bg-gray-950 text-white font-sans selection:bg-sky-500/30 overflow-x-hidden transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000">
        <motion.div 
          animate={{ 
            background: activeTab === 'tos' ? 'radial-gradient(circle at 50% -20%, rgba(14, 165, 233, 0.12) 0%, transparent 60%)' :
                        activeTab === 'privacy' ? 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)' :
                        'radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)'
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 pt-32 pb-8">
        <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="flex flex-col items-center text-center space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Transparency & Trust</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
                Legal <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Center</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Kami berkomitmen untuk transparansi penuh. Pelajari bagaimana kami melindungi hak Anda, menjaga privasi data, dan menjamin kualitas layanan ZeroCloud.
            </p>
        </motion.div>
      </div>

      <div className="sticky top-6 w-full flex justify-center px-4 pointer-events-none mb-12">
        <div className="bg-gray-950/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-xl shadow-2xl pointer-events-auto flex items-center gap-1 ring-1 ring-white/5">
          {legalTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeLegalTab"
                    className={cn("absolute inset-0 rounded-xl shadow-lg border border-white/10", tab.bg)}
                    style={{ backdropFilter: "blur(4px)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                     <div className={`absolute inset-0 rounded-xl opacity-20 bg-linear-to-r ${tab.color}`} />
                  </motion.div>
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-white" : "text-gray-500")} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full relative z-0 min-h-[800px] max-w-5xl mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            {activeTabData?.component}
          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  );
}