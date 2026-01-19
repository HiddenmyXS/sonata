"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FADE_OUT_MS = 2000;
const PROGRESS_INTERVAL = 30;
const ANIMATION_DURATION = 0.5;

const Loader = () => {
    const [progressBar, setProgressBar] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, FADE_OUT_MS);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgressBar((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current!);
                    return 100;
                }
                const increase = 1 + Math.floor((100 - prev) / 10);
                return Math.min(prev + increase, 100);
            });
        }, PROGRESS_INTERVAL);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const logoImage = (
        <Image
            src="/aset/logo/logo.png"
            alt="ZeroCloud Logo"
            width={120}
            height={120}
            priority
            className={`rounded-4xl transition-transform duration-400 ${
                isVisible ? "scale-100" : "scale-95"
            } ${progressBar === 100 ? "animate-pulse" : ""}`}
        />
    );

    return (
        <motion.div
            className={`fixed inset-0 flex items-center justify-center bg-gray-950 z-50 overflow-hidden ${
                isVisible ? "pointer-events-auto" : "pointer-events-none"
            }`}
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: ANIMATION_DURATION }}
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 opacity-20 grayscale">
                    {logoImage}
                </div>
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    {logoImage}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
