"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck,  
  Database, 
  Share2, 
  Cookie, 
  UserCog, 
  Archive, 
  Globe, 
  Lock,
  Download,
  Loader2,
  ChevronRight,
  Fingerprint,
  FileText,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const privacyData = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: <Database className="w-5 h-5" />,
    content: "Kami mengumpulkan informasi untuk menyediakan layanan hosting yang efektif dan aman. Data ini dikategorikan menjadi Informasi Pribadi dan Non-Pribadi.",
    points: [
      "Personal: Nama, Email, Nomor Telepon, Informasi Pembayaran.",
      "Non-Personal: Alamat IP, Tipe Browser, Sistem Operasi, Log Aktivitas.",
      "Tujuan: Identifikasi pelanggan, komunikasi layanan, dan verifikasi keamanan."
    ]
  },
  {
    id: "usage",
    title: "2. How We Use Data",
    icon: <FileText className="w-5 h-5" />,
    content: "Data Anda adalah aset vital untuk operasional kami. Kami tidak menggunakan data Anda untuk tujuan di luar penyediaan layanan Sonata.",
    points: [
      "Menyediakan, memelihara, dan meningkatkan layanan hosting.",
      "Komunikasi terkait pembaruan akun, sistem, dan promosi.",
      "Deteksi dini aktivitas penipuan (Fraud) dan keamanan sistem.",
      "Kepatuhan terhadap kewajiban hukum yang berlaku."
    ]
  },
  {
    id: "protection",
    title: "3. Data Protection",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: "Kami menerapkan standar keamanan industri tertinggi untuk melindungi data Anda dari akses tidak sah, pengubahan, atau kebocoran.",
    points: [
      "Enkripsi SSL/TLS untuk semua transmisi data sensitif.",
      "Penyimpanan aman untuk informasi pribadi dan pembayaran.",
      "Audit keamanan berkala dan pembaruan sistem rutin.",
      "Akses data dibatasi hanya untuk staf yang berkepentingan (Strict Access Control)."
    ]
  },
  {
    id: "sharing",
    title: "4. Sharing & Disclosure",
    icon: <Share2 className="w-5 h-5" />,
    content: "Sonata berprinsip untuk TIDAK menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak manapun.",
    points: [
      "Pihak Ketiga Tepercaya: Payment Gateway (Midtrans/Xendit) & Layanan Email.",
      "Kewajiban Hukum: Jika diminta oleh penegak hukum (Sesuai UU ITE/PDP).",
      "Transfer Bisnis: Dalam hal merger, akuisisi, atau penjualan aset perusahaan."
    ]
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    icon: <Cookie className="w-5 h-5" />,
    content: "Kami menggunakan cookies untuk meningkatkan pengalaman pengguna di website dan panel kami. Anda dapat mengelola preferensi ini melalui pengaturan browser.",
    points: [
      "Essential Cookies: Wajib agar website dapat berfungsi normal.",
      "Analytical Cookies: Memahami pola penggunaan untuk perbaikan layanan.",
      "Marketing Cookies: Menampilkan penawaran yang relevan (Opsional)."
    ]
  },
  {
    id: "rights",
    title: "6. Your Data Rights",
    icon: <UserCog className="w-5 h-5" />,
    content: "Sebagai pelanggan, Anda memiliki kendali penuh atas data Anda sesuai dengan UU Perlindungan Data Pribadi (PDP).",
    points: [
      "Hak Akses & Koreksi: Meminta salinan atau perbaikan data.",
      "Hak Penghapusan (Right to be Forgotten): Meminta hapus data (jika tidak ada kewajiban kontrak).",
      "Portabilitas Data: Menerima data dalam format terstruktur.",
      "Pembatasan Pemrosesan: Meminta pembatasan penggunaan data tertentu."
    ]
  },
  {
    id: "retention",
    title: "7. Data Retention",
    icon: <Archive className="w-5 h-5" />,
    content: "Kami hanya menyimpan data Anda selama diperlukan untuk penyediaan layanan dan kepatuhan hukum. Data akan dihapus secara aman setelah periode retensi berakhir.",
    points: [
      "Data akun aktif disimpan selama berlangganan.",
      "Log server disimpan maksimal 30-90 hari untuk audit keamanan.",
      "Data pembayaran disimpan sesuai ketentuan perpajakan Indonesia."
    ]
  },
  {
    id: "international",
    title: "8. International Users",
    icon: <Globe className="w-5 h-5" />,
    content: "Jika Anda mengakses layanan dari luar Indonesia, informasi Anda akan ditransfer dan diproses di Indonesia sesuai dengan hukum privasi lokal kami.",
    points: [
      "Data diproses di pusat data (Data Center) yang berlokasi di Indonesia.",
      "Tunduk pada yurisdiksi hukum Republik Indonesia.",
      "Kami menjamin standar perlindungan setara dengan standar internasional."
    ]
  }
];

export default function PrivacySection() {
  const [activeTab, setActiveTab] = useState(privacyData[0].id);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const link = document.createElement('a');
      link.href = '/documents/Sonata_Privacy_Policy.pdf'; 
      link.download = `Sonata_Privacy_Policy_${new Date().getFullYear()}.pdf`;
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider"
            >
                <Lock className="w-3 h-3" />
                <span>Data Protection</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-purple-500">Policy</span>
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
              <Fingerprint className="w-4 h-4" />
              Effective Date: February 26, 2026
            </div>
          </div>

          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-sm font-bold hover:text-white hover:border-gray-600 hover:bg-gray-800 transition-all group disabled:opacity-50"
          >
            {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            )}
            {isDownloading ? "Generating PDF..." : "Download Policy PDF"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Table of Contents</p>
              {privacyData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left border group",
                    activeTab === item.id 
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-900/10" 
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                  )}
                >
                  <span className={cn(
                    "shrink-0 transition-colors duration-200",
                    activeTab === item.id ? "text-emerald-400" : "text-zinc-600 group-hover:text-zinc-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm flex-1">{item.title}</span>
                  
                  {activeTab === item.id && (
                      <ChevronRight className="w-4 h-4 text-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm min-h-[600px] relative overflow-hidden">
                
                <div className="absolute -top-10 -right-10 p-10 opacity-5 pointer-events-none">
                    <ShieldCheck className="w-64 h-64 text-emerald-400 blur-md" />
                </div>

                <AnimatePresence mode="wait">
                    {privacyData.map((item) => item.id === activeTab && (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative z-10 space-y-8"
                        >
                            <div className="space-y-4 border-b border-gray-800 pb-8">
                                <div className="inline-flex items-center gap-2 text-emerald-500 font-bold text-xs tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Section: {item.id}
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
                                    <Info className="w-4 h-4 text-emerald-500" /> Key Details
                                </h4>
                                <div className="grid gap-3">
                                    {item.points.map((point, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-950/50 border border-gray-800 hover:border-gray-700 transition-colors group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-emerald-500 transition-colors mt-2 shrink-0" />
                                        <span className="text-sm text-gray-300 leading-relaxed font-medium">{point}</span>
                                    </motion.div>
                                    ))}
                                </div>
                            </div>

                            {item.id === "protection" && (
                                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex gap-4 mt-6">
                                    <Lock className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <h5 className="text-sm font-bold text-emerald-400">Komitmen Keamanan</h5>
                                        <p className="text-xs text-emerald-300/80 leading-relaxed">
                                            Kami rutin melakukan penetration testing dan audit keamanan untuk memastikan data Anda aman dari ancaman siber terbaru.
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
            Kebijakan ini berlaku untuk semua pengguna layanan Sonata. Pertanyaan lebih lanjut dapat diajukan melalui tim privasi kami.
          </p>
          <div className="flex gap-4 shrink-0">
            <button className="px-8 py-3 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 transform active:scale-95 duration-150">
              Hubungi Privacy Officer
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}