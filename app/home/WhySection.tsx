"use client";

import { 
  Activity, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Zap, 
  Headset, 
  Clock 
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Performa Kilat",
    desc: "Server ditenagai NVMe SSD & prosesor high-clock terbaru untuk gaming tanpa lag.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    detail: "NVMe Gen 4 & Ryzen 9",
    color: "from-yellow-500/20 to-orange-500/5",
    border: "group-hover:border-yellow-500/30"
  },
  {
    title: "ZeroShield Sentinel",
    desc: "Malware & DDoS Protection bawaan untuk keamanan maksimal server Anda.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    detail: "Mitigasi hingga 10Tbps",
    color: "from-green-500/20 to-emerald-500/5",
    border: "group-hover:border-green-500/30"
  },
  {
    title: "Jaringan Global Low Latency",
    desc: "Lokasi server strategis di Jakarta, Singapore, & US untuk ping terendah.",
    icon: <Globe className="w-6 h-6 text-sky-400" />,
    detail: "3 Region Premium",
    color: "from-sky-500/20 to-blue-500/5",
    border: "group-hover:border-sky-500/30"
  },
  {
    title: "Hardware Terdedikasi",
    desc: "Resource CPU & RAM terisolasi 100%. Tidak ada 'noisy neighbors' yang mengganggu performa.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    detail: "Guaranteed Resources",
    color: "from-purple-500/20 to-pink-500/5",
    border: "group-hover:border-purple-500/30"
  },
  {
    title: "Support Responsif 24/7",
    desc: "Tim teknis kami selalu siap membantu masalah server Anda kapan saja, pagi atau malam.",
    icon: <Headset className="w-6 h-6 text-red-400" />,
    detail: "< 15 Menit Respon",
    color: "from-red-500/20 to-rose-500/5",
    border: "group-hover:border-red-500/30"
  },
  {
    title: "Setup Instan Otomatis",
    desc: "Server langsung aktif dalam hitungan detik setelah pembayaran terkonfirmasi.",
    icon: <Clock className="w-6 h-6 text-teal-400" />,
    detail: "Deploy < 60 Detik",
    color: "from-teal-500/20 to-cyan-500/5",
    border: "group-hover:border-teal-500/30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 15 }
  }
};

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative w-full py-20 bg-gray-950 px-8 border-t border-gray-900 overflow-hidden">
      
      <motion.div 
        style={{ y }}
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-900/10 blur-[100px] rounded-full pointer-events-none" 
      />

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto relative z-10"
      >
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Activity className="w-3 h-3" />
            <span>Kualitas Tanpa Kompromi</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-5"
          >
            Mengapa Memilih <span className="text-sky-500">ZeroCloud?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            Kami menggabungkan hardware kelas enterprise dengan software manajemen modern untuk memberikan pengalaman hosting terbaik bagi komunitas Anda.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-colors duration-300 hover:bg-gray-900/60 ${feature.border}`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-gray-950/50 rounded-xl border border-white/5 backdrop-blur-sm shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                   </div>
                   <span className="text-[10px] font-mono text-gray-500 bg-gray-950/30 px-2 py-1 rounded border border-white/5">
                      {feature.detail}
                   </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border border-gray-800 bg-gray-900/20 rounded-3xl backdrop-blur-sm"
        >
           <div className="text-center border-r border-gray-800 last:border-0">
              <p className="text-3xl font-bold text-white flex justify-center items-center gap-1">
                 <NumberTicker value={99.9} decimalPlaces={1} />%
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Uptime SLA</p>
           </div>
           <div className="text-center border-r border-gray-800 last:border-0">
              <p className="text-3xl font-bold text-white flex justify-center items-center gap-1">
                 <NumberTicker value={10} />Gbps
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Network Speed</p>
           </div>
           <div className="text-center border-r border-gray-800 last:border-0">
              <p className="text-3xl font-bold text-white flex justify-center items-center gap-1">
                 <NumberTicker value={5000} />+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Happy Clients</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-bold text-white flex justify-center items-center gap-1">
                 24/7
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Live Support</p>
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
}