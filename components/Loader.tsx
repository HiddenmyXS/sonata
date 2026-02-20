"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{ willChange: "opacity" }}
          className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[9999] overflow-hidden touch-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* 1. Background Logo (Grayscale/Ghost) */}
            <div className="absolute inset-0 opacity-20 grayscale">
              <Image
                src="/aset/logo/logo.png"
                alt="Logo BG"
                fill
                priority
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain"
              />
            </div>

            {/* 2. Main Logo Animation (Fill up) */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/aset/logo/logo.png"
                alt="ZeroCloud Logo"
                fill
                priority
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain"
              />

              {/* 3. LIGHT SWEEP EFFECT LAYER */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                  repeatDelay: 0.5, // Memberi jeda waktu antar kilauan
                  delay: 2, // Mulai setelah animasi logo mengisi selesai
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;