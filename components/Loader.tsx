"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
      style={{ background: "#08080a" }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(109,40,217,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          className="relative w-12 h-12"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(6px)",
            transition: { duration: 0.4 },
          }}
        >
          <Image
            src="/aset/sonata.png"
            alt="Sonata"
            fill
            priority
            sizes="48px"
            className="object-contain"
          />
        </motion.div>

        {/* Progress line */}
        <motion.div
          className="w-20 h-px rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3 } }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full w-full rounded-full"
            style={{
              background:
                "linear-gradient(to right, #6d28d9, #a855f7, #6d28d9)",
            }}
            initial={{ x: "-100%" }}
            animate={{
              x: "0%",
              transition: {
                duration: 1.25,
                delay: 0.35,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
