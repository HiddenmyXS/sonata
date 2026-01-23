"use client";

import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";

export default function CtaSection() {
  return (
    <section className="relative w-full py-32 px-4 border-t border-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={80}
          staticity={50}
          color="#f59e0b"
          ease={50}
          refresh
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/80 border border-white/5 backdrop-blur-2xl rounded-3xl p-12 md:p-24 text-center overflow-hidden shadow-2xl"
        >
          <BorderBeam 
            size={350} 
            duration={8} 
            delay={0} 
            borderWidth={1.5}
            colorFrom="#fbbf24" 
            colorTo="#d97706" 
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Let&apos;s collaborate</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-xl">
              Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-400 to-amber-500">Scale Up?</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ubah visi bisnis Anda menjadi produk digital kelas dunia. 
              Tim kami siap mengeksekusi ide Anda dengan presisi.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
              <Link 
                href="https://wa.me/6281234567890" 
                className="group relative px-8 py-4 rounded-xl bg-amber-500 text-zinc-900 font-bold text-sm overflow-hidden transition-all hover:bg-amber-400 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95"
              >
                <div className="relative flex items-center justify-center gap-2 z-10">
                  <span>Mulai Konsultasi</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              
              <Link 
                href="mailto:hello@zaqua.studio" 
                className="group px-8 py-4 rounded-xl text-sm font-bold text-gray-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-amber-500/30 transition-all backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-amber-400 transition-colors" />
                <span>Kirim Email</span>
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}