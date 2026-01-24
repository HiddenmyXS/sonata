"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader";

const LOADING_DELAY = 3000;

export default function ClientWrapping({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
   <div className="relative w-full h-full">
      {children}

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="absolute inset-0 z-50 flex items-center justify-center bg-gray-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}