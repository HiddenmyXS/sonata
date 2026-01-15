"use client";

import { Zap } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-32 px-4 relative overflow-hidden border-t border-gray-900 bg-gray-950">
      <div className="absolute inset-0 bg-sky-950/10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />     
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap mabar tanpa lag?</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan developer dan gamer yang mempercayakan infrastrukturnya pada kami. Deploy server pertamamu dalam hitungan detik.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="px-8 py-4 rounded-full bg-white text-gray-950 font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-white/10 hover:shadow-white/20">
            <Zap className="w-5 h-5 fill-gray-950"/> Gas Deploy Sekarang
          </button>
          <button className="px-8 py-4 rounded-full bg-gray-900 border border-gray-800 text-gray-300 font-medium text-lg hover:bg-gray-800 hover:text-white transition-colors">
            Hubungi Sales
          </button>
        </div>
      </div>
    </section>
  );
}