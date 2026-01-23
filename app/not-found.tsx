"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  MoveLeft, 
  Terminal, 
  ServerCrash 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function NotFound() {
  const [excuse, setExcuse] = useState("Mencari kambing hitam...");

  const generateExcuse = () => {
    const excuses = [
      "Creeper meledakkan halaman ini... Sshhh!",
      "Halaman ini kena 'Thanos Snap'. Hilang setengah.",
      "Developer ketiduran pas coding bagian ini.",
      "Server hamsternya lagi mogok lari di roda.",
      "Halaman ini masuk ke Backrooms level 404.",
      "Kabel optiknya digigit kucing oren.",
      "404: Halaman tidak ditemukan, tapi jodoh pasti bertemu."
    ];
    const random = excuses[Math.floor(Math.random() * excuses.length)];
    setExcuse(random);
  };

  useEffect(() => {
  }, []);

  return (
    <main className="px-8 relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-950 overflow-hidden selection:bg-sky-500/30">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ type: "spring", stiffness: 200, damping: 15 }}
           className="relative"
        >
           <h1 className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 select-none">
             404
           </h1>
           
           <motion.div 
             animate={{ 
               x: [-2, 2, -2], 
               y: [1, -1, 0],
               opacity: [0.5, 0.8, 0.5]
             }}
             transition={{ 
               duration: 0.2, 
               repeat: Infinity, 
               repeatType: "mirror", 
               repeatDelay: 3 
             }}
             className="absolute inset-0 text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-sky-500/30 blur-[2px] select-none"
             aria-hidden="true"
           >
             404
           </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-sm mb-6"
        >
           <ServerCrash className="w-4 h-4" />
           <span>ERR_PAGE_NOT_FOUND</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Waduh, Nyasar Bos?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-lg mx-auto text-lg mb-8"
        >
          Halaman yang kamu cari sepertinya tidak ada di universe ini.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
           onClick={generateExcuse}
           className="group cursor-pointer relative overflow-hidden bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl p-4 mb-10 max-w-md w-full hover:border-sky-500/30 transition-colors"
        >
           <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
                 <Terminal className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-left">
                 <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">System Log (Click to refresh)</p>
                 <p className="text-sm text-gray-300 font-mono">
                   &gt; {excuse} <span className="animate-pulse">_</span>
                 </p>
              </div>
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/">
             <ShimmerButton 
                shimmerColor="#ffffff" 
                background="#0ea5e9"
                className="shadow-2xl shadow-sky-500/20"
             >
                <div className="flex items-center gap-2 px-6 py-1 font-bold text-white">
                   <Home className="w-4 h-4" />
                   Kembali ke Homepage
                </div>
             </ShimmerButton>
          </Link>

          <Button 
            variant="outline" 
            className="rounded-full px-6 py-6 border-gray-800 bg-gray-950/50 text-gray-300 hover:bg-gray-900 hover:text-white"
            onClick={() => window.history.back()}
          >
             <MoveLeft className="w-4 h-4 mr-2" />
             Kembali
          </Button>
        </motion.div>

      </div>

      <div className="absolute bottom-8 text-gray-600 text-xs font-mono">
         Error Code: 404 • ZeroCloud System
      </div>

    </main>
  );
}