"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Percent, 
  Clock, 
  ServerCrash, 
  Coins, 
  FileCheck, 
  AlertOctagon, 
  Download,
  Loader2,
  ChevronRight,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const slaData = [
  {
    id: "definitions",
    title: "1. Definitions",
    icon: <FileCheck className="w-5 h-5" />,
    content: "Untuk kejelasan dokumen ini, istilah berikut didefinisikan sebagai:",
    points: [
      "Layanan: Produk hosting, VPS, atau Dedicated Server yang disewa.",
      "Downtime: Periode di mana layanan tidak dapat diakses melalui jaringan publik (Public Network) akibat kegagalan infrastruktur Sonata.",
      "Uptime Bulanan: Persentase waktu layanan tersedia dalam satu bulan kalender.",
      "Maintenance Terjadwal: Pemeliharaan yang diberitahukan minimal 24 jam sebelumnya."
    ]
  },
  {
    id: "guarantee",
    title: "2. Uptime Guarantee",
    icon: <Activity className="w-5 h-5" />,
    content: "Sonata menjamin tingkat ketersediaan (Uptime) jaringan dan daya infrastruktur sebesar 99.9% setiap bulan kalender.",
    points: [
      "Target Uptime: 99.9% per bulan.",
      "Maksimal Downtime yang ditoleransi: ~43 menit per bulan.",
      "Pemantauan dilakukan oleh sistem monitoring internal dan pihak ketiga (Status Page)."
    ]
  },
  {
    id: "credits",
    title: "3. SLA Credits",
    icon: <Coins className="w-5 h-5" />,
    content: "Jika kami gagal memenuhi jaminan uptime di atas, Anda berhak meminta Kredit Layanan (Service Credit) sebagai kompensasi dengan skema berikut:",
    points: [
      "99.5% - 99.9%: Kredit 5% dari biaya bulanan.",
      "99.0% - 99.5%: Kredit 10% dari biaya bulanan.",
      "98.0% - 99.0%: Kredit 25% dari biaya bulanan.",
      "Di bawah 98.0%: Kredit 50% dari biaya bulanan (Maksimal)."
    ]
  },
  {
    id: "claims",
    title: "4. Claim Procedure",
    icon: <FileCheck className="w-5 h-5" />,
    content: "Untuk mengajukan klaim SLA, pelanggan harus memenuhi syarat berikut:",
    points: [
      "Membuka tiket support di Client Area dalam waktu 7 hari setelah insiden.",
      "Menyertakan bukti downtime (Trace route, Log error, atau Screenshot).",
      "Akun tidak sedang dalam status tunggakan (Unpaid) atau Suspended.",
      "Kredit akan ditambahkan ke saldo akun (Credit Balance) untuk tagihan berikutnya."
    ]
  },
  {
    id: "exclusions",
    title: "5. Exclusions",
    icon: <AlertOctagon className="w-5 h-5" />,
    content: "Jaminan SLA tidak berlaku untuk downtime yang disebabkan oleh:",
    points: [
      "Maintenance Terjadwal (Scheduled Maintenance).",
      "Kesalahan konfigurasi pengguna (Script error, Plugin crash, Full disk).",
      "Force Majeure (Bencana alam, Perang, Gangguan ISP hulu/Tier-1 global).",
      "Serangan DDoS yang melebihi kapasitas mitigasi standar paket (kecuali paket dengan Dedicated Protection).",
      "Suspensi layanan akibat pelanggaran ToS/AUP."
    ]
  },
  {
    id: "hardware",
    title: "6. Hardware SLA",
    icon: <ServerCrash className="w-5 h-5" />,
    content: "Khusus untuk layanan Dedicated Node/VPS, kami menjamin penggantian hardware yang rusak.",
    points: [
      "Respon Awal: Maksimal 1 jam setelah diagnosa kerusakan hardware.",
      "Waktu Penggantian: Maksimal 4 jam untuk penggantian komponen (RAM/Disk/PSU).",
      "Kompensasi: Kredit 5% untuk setiap jam keterlambatan penggantian."
    ]
  }
];

export default function SlaSection() {
  const [activeTab, setActiveTab] = useState(slaData[0].id);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const link = document.createElement('a');
      link.href = '/documents/Sonata_SLA.pdf'; 
      link.download = `Sonata_SLA_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="relative w-full px-4 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider"
            >
                <Percent className="w-3 h-3" />
                <span>Performance Guarantee</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Service Level <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">Agreement</span>
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
              <Clock className="w-4 h-4" />
              Effective Date: January 1, 2026
            </div>
          </div>

          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-sm font-bold hover:text-white hover:border-indigo-500/50 hover:bg-gray-800 transition-all group disabled:opacity-50"
          >
            {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            )}
            {isDownloading ? "Generating SLA..." : "Download SLA PDF"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Agreement Clauses</p>
              {slaData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left border group",
                    activeTab === item.id 
                      ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 shadow-lg shadow-indigo-900/10" 
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                  )}
                >
                  <span className={cn(
                    "shrink-0 transition-colors duration-200",
                    activeTab === item.id ? "text-indigo-400" : "text-zinc-600 group-hover:text-zinc-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm flex-1">{item.title}</span>
                  
                  {activeTab === item.id && (
                      <ChevronRight className="w-4 h-4 text-indigo-500" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm min-h-[500px] relative overflow-hidden">
                
                <div className="absolute -top-10 -right-10 p-10 opacity-5 pointer-events-none">
                    <Activity className="w-64 h-64 text-indigo-400 blur-md" />
                </div>

                <AnimatePresence mode="wait">
                    {slaData.map((item) => item.id === activeTab && (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative z-10 space-y-8"
                        >
                            <div className="space-y-4 border-b border-gray-800 pb-8">
                                <div className="inline-flex items-center gap-2 text-indigo-500 font-bold text-xs tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    Clause: {item.id}
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {item.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    {item.content}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                                    <FileCheck className="w-4 h-4 text-indigo-500" /> Details & Conditions
                                </h4>
                                
                                {item.id === "credits" ? (
                                    <div className="grid gap-3">
                                        {item.points.map((point, idx) => {
                                            const [range, credit] = point.split(":");
                                            return (
                                                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-gray-950/50 border border-gray-800 hover:border-indigo-500/30 transition-colors">
                                                    <span className="font-mono text-indigo-300 font-bold">{range}</span>
                                                    <span className="text-sm text-gray-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{credit}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className="grid gap-3">
                                        {item.points.map((point, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-gray-950/50 border border-gray-800 hover:border-gray-700 transition-colors group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-indigo-500 transition-colors mt-2 shrink-0" />
                                            <span className="text-sm text-gray-300 leading-relaxed font-medium">{point}</span>
                                        </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {item.id === "exclusions" && (
                                <div className="p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex gap-4 mt-6">
                                    <AlertOctagon className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <h5 className="text-sm font-bold text-indigo-400">Penting</h5>
                                        <p className="text-xs text-indigo-300/80 leading-relaxed">
                                            Klaim SLA yang ditolak akibat Force Majeure tidak dapat diganggu gugat. Kami menyarankan pengguna memiliki backup off-site untuk mitigasi bencana.
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
            Sonata berkomitmen menjaga standar kualitas layanan tertinggi. Dokumen SLA ini adalah jaminan tertulis kami untuk Anda.
          </p>
          <div className="flex gap-4 shrink-0">
            <button className="px-8 py-3 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 transform active:scale-95 duration-150">
              Lihat Status Server
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}