"use client";

import Link from "next/link";
import { Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section
      className="w-full py-32 px-8 relative overflow-hidden"
      style={{ background: "#08080a" }}> 
      <div
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full pointer-events-none blur-[130px] z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.28) 0%, rgba(79,70,229,0.12) 50%, transparent 75%)",
          }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none blur-[80px] z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/4 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Server siap dalam 60 detik
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Siap mabar tanpa{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
            Lag?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-base md:text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Bergabunglah dengan ribuan developer dan gamer yang mempercayakan infrastrukturnya pada kami. Deploy server pertamamu dalam hitungan detik.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/game-host"
              className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60">
                <Zap className="w-4 h-4 fill-white" />
                Gas Deploy Sekarang
            </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-white/8 bg-white/4 text-slate-300 font-semibold text-sm hover:border-white/14 hover:bg-white/6 hover:text-white transition-all duration-200">
              <MessageCircle className="w-4 h-4" />
              Hubungi Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
}