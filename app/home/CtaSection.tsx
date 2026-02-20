"use client";

import Link from "next/link";
import { Zap, MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-32 px-8 relative overflow-hidden bg-gray-950">
            
      <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 via-gray-950/80 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" /> 
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Siap mabar tanpa <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-600">Lag?</span>
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bergabunglah dengan ribuan developer dan gamer yang mempercayakan infrastrukturnya pada kami. Deploy server pertamamu dalam hitungan detik.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link 
            href="/game-host"
            className="px-8 py-4 rounded-full bg-purple-500 text-white font-bold text-lg hover:bg-purple-400 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-xl shadow-purple-500/20 active:scale-95"
          >
            <Zap className="w-5 h-5 fill-white"/> 
            Gas Deploy Sekarang
          </Link>
          
          <Link 
            href="/contact"
            className="px-8 py-4 rounded-full bg-gray-900 border border-gray-800 text-gray-300 font-medium text-lg hover:bg-gray-800 hover:text-white hover:border-gray-700 transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi Sales
          </Link>
        </div>
      </div>
    </section>
  );
}