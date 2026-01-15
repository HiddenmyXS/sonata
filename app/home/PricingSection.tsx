"use client";

import { Check, Zap, Server, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

// --- DATA DENGAN CLASS TAILWIND EKSPLISIT ---
// Kita mendefinisikan style di sini agar Tailwind tidak menghapusnya (Purging issue fix)
const pricingPlans = [
  {
    name: "CORE",
    tagline: "Stabil & Ekonomis",
    price: "Rp 50rb",
    period: "/bulan",
    description: "Ideal untuk website, bot discord, dan database ringan.",
    recommendation: "Best for Web & Bots",
    icon: <Server className="w-6 h-6 text-green-400" />,
    features: [
      "from 2 vCPU Cores",
      "from 4GB RAM",
      "from 50GB NVMe SSD",
      "1Gbps Network",
      "Standard DDoS Protection",
      "24/7 Support"
    ],
    highlight: false,
    styles: {
        iconBg: "bg-green-500/10",
        iconBorder: "border-green-500/20",
        tagBg: "bg-green-500/10",
        tagText: "text-green-400",
        tagBorder: "border-green-500/20",
        taglineColor: "text-green-400",
        checkColor: "group-hover:text-green-400",
        buttonHover: "hover:border-green-500/30"
    }
  },
  {
    name: "FLUX",
    tagline: "High Performance Gaming",
    price: "Rp 150rb",
    period: "/bulan",
    description: "Performa tinggi dengan clock speed kencang untuk game servermu.",
    recommendation: "Best for Game Server",
    icon: <Zap className="w-6 h-6 text-sky-400" />,
    features: [
      "from 4 vCPU High-Freq (Ryzen 9)",
      "from 8GB DDR4 RAM",
      "from 120GB NVMe Gen 4",
      "10Gbps Network",
      "Advanced Game DDoS",
      "Priority Support"
    ],
    highlight: true,
    styles: {
        iconBg: "bg-sky-500/10",
        iconBorder: "border-sky-500/20",
        tagBg: "bg-sky-500/10",
        tagText: "text-sky-400",
        tagBorder: "border-sky-500/20",
        taglineColor: "text-sky-400",
        checkColor: "group-hover:text-sky-400",
        buttonHover: "hover:border-sky-500/30"
    }
  },
  {
    name: "ATLAS",
    tagline: "Extreme Compute",
    price: "Rp 500rb",
    period: "/bulan",
    description: "Kekuatan penuh untuk enterprise, , mega SMP, dan heavy workload.",
    recommendation: "Best for Enterprise/Big SMP",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    features: [
      "from 8 vCPU Dedicated",
      "up to 32GB DDR5 RAM",
      "from 500GB NVMe Enterprise",
      "Unmetered Bandwidth",
      "L7 Custom Mitigation",
      "Dedicated Account Manager"
    ],
    highlight: false,
    styles: {
        iconBg: "bg-purple-500/10",
        iconBorder: "border-purple-500/20",
        tagBg: "bg-purple-500/10",
        tagText: "text-purple-400",
        tagBorder: "border-purple-500/20",
        taglineColor: "text-purple-400",
        checkColor: "group-hover:text-purple-400",
        buttonHover: "hover:border-purple-500/30"
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 100, 
      damping: 15 
    } 
  }
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-16 md:py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden">
      
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] bg-sky-900/10 blur-[120px] rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <DollarSign className="w-3 h-3" />
            <span>Biaya? Gampang!</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-5"
          >
            Pilih <span className="text-sky-500">Kekuatanmu!</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2"
          >
            Infrastruktur fleksibel untuk setiap kebutuhan. Dari hosting bot sederhana hingga cluster game raksasa.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={cn(
                "relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-colors duration-300 group h-full",
                plan.highlight 
                  ? "bg-gray-900/80 border-sky-500/30 shadow-2xl shadow-sky-500/10 scale-100 md:scale-105 z-10" 
                  : "bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
              )}
            >
              {plan.highlight && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 w-full text-center"
                >
                  <div className="relative inline-block">
                    <span className="absolute inset-0 rounded-full bg-sky-500 blur opacity-50 animate-pulse"></span>
                    <div className="relative bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-sky-400/20 whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mb-6">
                 <div className="flex justify-between items-start mb-4">
                    <div className={cn(
                        "p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        plan.styles.iconBg, 
                        plan.styles.iconBorder,
                        "border"
                    )}>
                       {plan.icon}
                    </div>
                    <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border",
                        plan.styles.tagBg,
                        plan.styles.tagText,
                        plan.styles.tagBorder
                    )}>
                       {plan.recommendation}
                    </span>
                 </div>
                 
                 <h3 className="text-2xl font-black text-white tracking-tight">{plan.name}</h3>
                 <p className={cn("text-sm font-medium mb-4", plan.styles.taglineColor)}>
                    {plan.tagline}
                 </p>
                 <p className="text-sm text-gray-400 leading-relaxed min-h-[60px] md:min-h-[80px]">
                    {plan.description}
                 </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className={cn(
                        "p-0.5 rounded-full transition-colors",
                        plan.highlight 
                            ? "bg-sky-500/20 text-sky-400" 
                            : "bg-gray-800 text-gray-400",
                        plan.styles.checkColor
                    )}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg mt-auto",
                  plan.highlight 
                    ? "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-sky-500/25 hover:shadow-sky-500/40" 
                    : `bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 ${plan.styles.buttonHover}`
                )}
              >
                Deploy {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}