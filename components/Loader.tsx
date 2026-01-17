"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Loader = () => {
    const [progressBar, setProgressBar] = useState(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const FADE_OUT_MS = 2000;

    const fadeOutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fadeOutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, FADE_OUT_MS);

        return () => {
            if (fadeOutRef.current) clearTimeout(fadeOutRef.current);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressBar((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                const increase = 1 + Math.floor((100 - prev) / 10)
                return Math.min(prev + increase, 100);
            });
        }, 30);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progressBar === 100) {
            const delay = setTimeout(() => {
                setIsVisible(false);
            }, 500);
            return () => clearTimeout(delay);
        }
    }, [progressBar]);

    return (
        <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-gray-950/80 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            pointerEvents={isVisible ? "auto" : "none"}
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 opacity-20 grayscale">
                <Image
                    src="/aset/logo/logo.png"
                    alt="ZeroCloud Logo"
                    width={120}
                    height={120}
                    priority
                    className={`transition-transform rounded-4xl duration-1000 animate-pulse ${
                    isVisible ? "scale-100" : "scale-95"
                    }`}
                />
                </div>

                <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }} 
                transition={{ 
                    duration: 2, 
                    ease: "linear",
                    repeat: 0,
                }}
                >
                <Image
                src="/aset/logo/logo.png"
                alt="ZeroCloud Logo"
                width={120}
                height={120}
                priority
                className={`transition-transform rounded-4xl duration-1000 animate-pulse ${
                isVisible ? "scale-100" : "scale-95"
                }`}
            />
            </motion.div>
        </div>
    </motion.div>
    )
}

export default Loader;