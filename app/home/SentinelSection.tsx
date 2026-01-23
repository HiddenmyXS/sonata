"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { 
  Crown,
  Terminal as TerminalIcon,
  Activity,
  Cpu,
  Shield
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const LazyEye = () => {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 40, damping: 25 });
  const springY = useSpring(y, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeContainerRef.current) return;
      const rect = eyeContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rawX = e.clientX - centerX;
      const rawY = e.clientY - centerY;
      const maxRadius = 12;
      const angle = Math.atan2(rawY, rawX);
      const distance = Math.min(Math.sqrt(rawX ** 2 + rawY ** 2), 200); 
      const moveX = Math.cos(angle) * Math.min(distance / 6, maxRadius);
      const moveY = Math.sin(angle) * Math.min(distance / 6, maxRadius);
      x.set(moveX);
      y.set(moveY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div ref={eyeContainerRef} className="relative flex items-center justify-center mb-10">
      <div className="absolute w-20 h-20 md:w-28 md:h-28 border border-orange-500/30 rounded-full animate-[spin_10s_linear_infinite]" 
           style={{ borderStyle: 'dashed' }} />
      <div className="absolute w-24 h-24 md:w-32 md:h-32 border border-red-900/50 rounded-full" />
      
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border-2 border-orange-900/30 shadow-[inset_0_0_30px_rgba(220,38,38,0.2)] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <motion.div 
          style={{ x: springX, y: springY }}
          className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-600 shadow-[0_0_25px_#ea580c] flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full opacity-80" />
        </motion.div>
      </div>
    </div>
  );
};

const TerminalLine = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.2 }}
    className={cn("font-mono text-[10px] md:text-sm flex items-start wrap-break-word", className)}
  >
    {children}
  </motion.div>
);

const BoxBadge = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
  <div className={cn("flex flex-col items-start p-3 border rounded-lg bg-gray-950/50 backdrop-blur-sm min-w-20 md:min-w-[100px] flex-1 md:flex-none", color)}>
    <Icon className="w-4 h-4 md:w-5 md:h-5 mb-2 opacity-80" />
    <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider font-bold">{label}</span>
  </div>
);

export default function SentinelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 px-8 border-t border-gray-900 overflow-hidden bg-gray-950">

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      
      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">

          <LazyEye />

          <motion.div 
             initial={{ y: -20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(234,88,12,0.2)]">
                <Shield className="w-3 h-3 fill-orange-400" />
                <span>SECURITY? REDESIGNED.</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
            The<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-600 drop-shadow-sm">
              WATCHDOG.
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-4">
            Sistem keamanan otonom yang berjalan di background. Mendeteksi anomali resource, memblokir miner, dan menghentikan serangan sebelum server down.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          
          <div className="relative group p-4 md:p-8 border-b lg:border-b-0 lg:border-r bg-gray-900/80 backdrop-blur-2xl border-gray-800 min-h-[400px] md:min-h-[500px] flex flex-col">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800/50">
               <div className="flex gap-2">
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-red-800" />
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-yellow-800" />
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-green-800" />
               </div>
               <div className="text-[10px] text-gray-600 flex items-center gap-2">
                 <TerminalIcon className="w-3 h-3" />
                 <span>sentinel@system:~</span>
               </div>
            </div>

            <div className="flex-1 space-y-3 md:space-y-4 font-mono text-sm overflow-hidden relative">
               
               <motion.div 
                 animate={{ opacity: [0.05, 0.1, 0.05] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 bg-red-500/10 blur-3xl pointer-events-none"
               />

               <TerminalLine delay={0} className="text-gray-400 mb-6">
                 <span className="text-orange-500 mr-2">➜</span> sudo sentinel start --daemon
               </TerminalLine>

               <TerminalLine delay={0.5} className="text-emerald-500">
                 [OK] Sentinel Watchdog v2.5 loaded.
               </TerminalLine>

               <TerminalLine delay={1.0} className="text-gray-500">
                 [INFO] Monitoring 142 containers...
               </TerminalLine>

               <div className="h-2 md:h-4" />

               <TerminalLine delay={2.0} className="text-amber-300 font-bold bg-amber-300/5 p-1 -mx-1 border-l-2 border-amber-300">
                 [WARN] Anomaly detected: Container #8f2a
               </TerminalLine>

               <TerminalLine delay={2.2} className="text-gray-400 pl-4">
                 ├─ CPU Load: <span className="text-red-400 font-bold">99.8%</span> (Miner Signature)
               </TerminalLine>
               <TerminalLine delay={2.4} className="text-gray-400 pl-4">
                 └─ RAM Usage: <span className="text-red-400 font-bold">150MB</span> (Low Footprint)
               </TerminalLine>

               <TerminalLine delay={3.5} className="text-orange-400 mt-2">
                 ➜ [ACTION] Applying CPU Limit (50%)...
               </TerminalLine>

               <div className="h-2 md:h-4" />

               <TerminalLine delay={4.5} className="text-red-500 font-bold bg-red-500/10 p-1 -mx-1 border-l-2 border-red-500">
                 [CRITICAL] Outbound Flood Detected!
               </TerminalLine>

               <TerminalLine delay={5.0} className="text-red-400 pl-4">
                 ➜ <span className="underline decoration-dashed">SUSPENDING SERVER.</span> Violation logged.
               </TerminalLine>

               <div className="mt-4">
                 <span className="text-orange-500 mr-2">➜</span>
                 <motion.span 
                   animate={{ opacity: [0, 1, 0] }} 
                   transition={{ duration: 0.8, repeat: Infinity }}
                   className="inline-block w-2 h-4 md:w-2.5 md:h-5 bg-orange-500 align-middle"
                 />
               </div>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center bg-gray-900/80 backdrop-blur-2xl">
            
            <div className="flex flex-wrap gap-3 mb-8">
              <BoxBadge icon={Cpu} label="Anti-Miner" color="border-amber-500/20 text-amber-500" />
              <BoxBadge icon={Crown} label="Whitelist" color="border-orange-500/20 text-orange-500" />
              <BoxBadge icon={TerminalIcon} label="Auto-Throttle" color="border-yellow-500/20 text-yellow-500" />
              <BoxBadge icon={Shield} label="Real-Time Monitoring" color="border-sky-500/20 text-sky-500" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              GAK ADA ISTILAH &quot;TETANGGA BERISIK&ldquo;.
            </h3>
            
            <div className="space-y-4 text-gray-400 font-sans text-sm md:text-base leading-relaxed">
              <p>
                Server lag padahal player sepi? Itu biasanya karena ada user lain di node yang sama lagi <span className="text-gray-200 font-semibold">mining crypto</span> atau kena serangan.
              </p>
              <p>
                Di ZeroCloud, Sentinel bekerja 24 jam menjaga resource kamu. Sistem ini memisahkan traffic jahat dari traffic player asli.
              </p>
            </div>

            <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
               <div className="flex items-center gap-2 mb-4">
                 <Activity className="w-4 h-4 text-orange-500" />
                 <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase">System Logic</span>
               </div>
               
               <div className="space-y-3 font-mono text-[10px] md:text-xs">
                 <div className="flex items-center justify-between p-2 border border-gray-800 bg-gray-950 rounded">
                    <span className="text-gray-400">CPU {'>'} 90% + RAM Low</span>
                    <span className="text-amber-500 font-bold">THROTTLE</span>
                 </div>
                 <div className="flex items-center justify-between p-2 border border-gray-800 bg-gray-950 rounded">
                    <span className="text-gray-400">Network Flood / Bot</span>
                    <span className="text-red-500 font-bold">SUSPEND</span>
                 </div>
                 <div className="flex items-center justify-between p-2 border border-gray-800 bg-gray-950 rounded">
                    <span className="text-gray-400">Normal Usage</span>
                    <span className="text-emerald-500 font-bold">PASS</span>
                 </div>
               </div>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}