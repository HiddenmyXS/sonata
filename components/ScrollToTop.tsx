"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className={cn(
                  "fixed bottom-8 right-8 z-50",
                  "p-3 rounded-full",
                  "bg-gray-900/80 backdrop-blur-md border border-gray-800",
                  "text-sky-500 shadow-lg shadow-sky-500/20",
                  "hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:shadow-sky-500/50",
                  "transition-colors duration-300",
                  "group flex items-center justify-center"
                )}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6 stroke-[3px]" />
                
                <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </TooltipTrigger>
            
            <TooltipContent 
              side="left" 
              className="bg-gray-900/90 backdrop-blur border-gray-700 text-sky-400 font-bold text-xs px-3 py-1.5 rounded-lg shadow-xl"
            >
              <p>Kembali ke Atas ↑</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </AnimatePresence>
  );
}