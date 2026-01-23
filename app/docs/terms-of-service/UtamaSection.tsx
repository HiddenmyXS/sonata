"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Scale, 
  FileText, 
  UserX, 
  Clock, 
  Download,
  AlertTriangle,
  Lock,
  FileWarning,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const tosData = [
  {
    id: "penggunaan",
    title: "Acceptance of Terms",
    icon: <Scale className="w-5 h-5" />,
    content: "By using the hosting services provided by ZeroCloud Indonesia, you agree to be bound by all terms and conditions outlined in this document. Using our services constitutes your acceptance of these terms.",
    points: ["Dilarang Mining Crypto", "Dilarang Bruteforce/DDoS", "Dilarang konten Dewasa/Ilegal", "Dilarang Spam", "Dilarang Hosting Malware/Virus"]
  },
  {
    id: "kelayakan",
    title: "User Eligibility",
    icon: <FileText className="w-5 h-5" />,
    content: "All information provided during registration must be accurate and complete. You must be at least 13 years old to use our services.",
    points: ["Account information must be valid.", "One person per account policy.", "Identity verification may be required."]
  },
  {
    id: "layanan",
    title: "Service Availability",
    icon: <Lock className="w-5 h-5" />,
    content: "ZeroCloud Indonesia will strive to ensure optimal service availability through our SLA guarantee, however:",
    points: ["Maximum efforts to keep services running 99.9%.", "The right to conduct scheduled maintenance.", "Force majeure events are excluded."]
  },
  {
    id: "keamanan",
    title: "Information Security",
    icon: <UserX className="w-5 h-5" />,
    content: "We take your data security seriously. Our security measures include comprehensive firewalling and encryption:",
    points: ["Safeguarding your data against unauthorized access.", "Implementing security measures to prevent unauthorized use.", "Daily off-site backups availability."]
  },
  {
    id: "larangan",
    title: "Prohibited Usage",
    icon: <FileWarning className="w-5 h-5" />,
    content: "Users are strictly prohibited from utilizing ZeroCloud resources for malicious intent, including but not limited to:",
    points: ["Using services for illegal purposes (Phishing/Scam).", "Distributing copyright-infringing content.", "Engaging in hacking/network scanning.", "Sending unsolicited spam emails."]
  }
];

export default function ToSSection() {
  const [activeTab, setActiveTab] = useState(tosData[0].id);

  return (
    <section className="relative w-full py-24 bg-gray-950 px-4 border-t border-gray-900 overflow-hidden font-sans">
      
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider"
            >
                <ShieldAlert className="w-3 h-3" />
                <span>Legal & Compliance</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Terms of <span className="text-transparent bg-clip-text bg-sky-500">Service</span>
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
              <Clock className="w-4 h-4" />
              Last updated: January 22, 2026
            </div>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-sm font-bold hover:text-white hover:border-gray-700 transition-all group">
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Table of Content</p>
              {tosData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 text-left border relative overflow-hidden group",
                    activeTab === item.id 
                      ? "bg-sky-500/10 border-sky-500/20 text-white shadow-lg shadow-sky-500/5" 
                      : "bg-gray-900/30 border-gray-800 text-gray-400 hover:bg-gray-900 hover:border-gray-700 hover:text-gray-200"
                  )}
                >
                  <span className={cn(
                    "relative z-10 transition-colors duration-300",
                    activeTab === item.id ? "text-sky-400" : "text-gray-500 group-hover:text-gray-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm relative z-10">{item.title}</span>
                  
                  {activeTab === item.id && (
                    <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-linear-to-r from-sky-500/10 to-transparent opacity-50" 
                    />
                  )}
                  {activeTab === item.id && (
                      <ChevronRight className="w-4 h-4 text-sky-500 absolute right-4 opacity-50" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm min-h-[500px] relative overflow-hidden">
                
                <div className="absolute -top-5 -right-5 p-10 opacity-5 pointer-events-none blur-sm">
                  <ShieldAlert className="w-64 h-64 text-white" />
                </div>

                <AnimatePresence mode="wait">
                    {tosData.map((item) => item.id === activeTab && (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 space-y-8"
                        >
                            <div className="space-y-4 border-b border-gray-800 pb-8">
                                <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm tracking-wide uppercase">
                                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                                    Section {item.id}
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {item.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    {item.content}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-sky-500" /> Key Points
                                </h4>
                                <div className="grid gap-3">
                                    {item.points.map((point, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-950/50 border border-gray-800 hover:border-gray-700 transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                                        <span className="text-sm text-gray-300 leading-relaxed font-medium">{point}</span>
                                    </motion.div>
                                    ))}
                                </div>
                            </div>

                            {item.id === "larangan" && (
                                <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 flex gap-4 mt-6">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <h5 className="text-sm font-bold text-red-400">Peringatan Keras</h5>
                                        <p className="text-xs text-red-400/70 leading-relaxed">
                                            Pelanggaran terhadap poin penggunaan terlarang akan mengakibatkan terminasi layanan sepihak tanpa pengembalian dana (Refund).
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
          </main>

        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gray-900/30 border border-gray-800">
          <p className="text-sm text-gray-500 text-center md:text-left">
            Dengan mendaftar dan menggunakan layanan ZeroCloud, Anda dianggap telah membaca dan menyetujui seluruh ketentuan di atas.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
              Saya Mengerti & Setuju
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}