"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Waktu tampil loader sebelum animasi usap dimulai (2.5 detik)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 overflow-hidden touch-none"
          initial={{ opacity: 1 }}
          /* Efek Tirai Diperhalus: Durasi lebih lama (1.2s) & kurva sinematik */
          exit={{ 
            clipPath: "inset(0 0 0 100%)",
            transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] } 
          }}
        >
          {/* Logo Container - Tanpa elemen loading bar di bawahnya */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: { duration: 1, ease: "easeOut" }
              }}
              /* Efek tambahan: logo ikut memudar & tergeser sedikit saat disapu */
              exit={{
                opacity: 0,
                x: 20, 
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              className="relative w-24 h-24 md:w-32 md:h-32"
            >
              <Image
                src="/aset/sonata.png" 
                alt="Sonata"
                fill
                priority
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain brightness-110"
              />
              
              {/* Subtle Pulse Effect (Cahaya di belakang logo) */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl z-[-1]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>

          {/* Efek Kilatan Cahaya (Light Sweep) yang mengikuti sapuan tirai */}
          <motion.div 
            className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            exit={{ 
              x: "100%",
              transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;