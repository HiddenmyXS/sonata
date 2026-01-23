"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Braces, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  { 
    id: "01",
    icon: MessageSquare, 
    title: "Discovery", 
    desc: "Kami menggali visi, target market, dan tujuan bisnis Anda untuk menyusun strategi digital yang tepat sasaran." 
  },
  { 
    id: "02",
    icon: PenTool, 
    title: "UI/UX Design", 
    desc: "Perancangan prototipe visual yang estetik, modern, dan berfokus pada pengalaman pengguna (User Experience)." 
  },
  { 
    id: "03",
    icon: Braces, 
    title: "Development", 
    desc: "Proses coding menggunakan teknologi mutakhir (Next.js/React) yang bersih, aman, dan scalable." 
  },
  { 
    id: "04",
    icon: Rocket, 
    title: "Launch & Scale", 
    desc: "Deployment ke server production, konfigurasi domain, dan optimasi performa untuk siap go-public." 
  },
];

export default function Workflow() {
  return (
    <section className="relative w-full py-32 bg-zinc-900 border-t border-gray-950 overflow-hidden px-4">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>Our Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">Reality</span>
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800/50">
            <motion.div 
              className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-50"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-500 group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <step.icon className="w-10 h-10 text-gray-500 group-hover:text-amber-400 transition-colors duration-300 relative z-10" />
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-20 group-hover:border-amber-500/50 transition-colors">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-amber-500">{idx + 1}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 px-2">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-gray-800/20 opacity-0 group-hover:opacity-100 transition-all duration-500 select-none pointer-events-none z-0 scale-50 group-hover:scale-100">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}