"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Scale, 
  Clock, 
  UserCheck, 
  CreditCard, 
  Server, 
  Ban, 
  BookOpen, 
  RefreshCcw, 
  XCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Download,
  Loader2,
  Gavel
} from "lucide-react";
import { cn } from "@/lib/utils";

const tosData = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: <Scale className="w-5 h-5" />,
    content: "Dengan mendaftar atau menggunakan layanan ZeroCloud Indonesia, Anda menyetujui untuk terikat secara hukum oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun, Anda dilarang menggunakan layanan kami.",
    points: [
      "Perjanjian ini sah dan mengikat secara hukum.",
      "ZeroCloud berhak memperbarui syarat sewaktu-waktu.",
      "Penggunaan berkelanjutan dianggap sebagai persetujuan perubahan."
    ]
  },
  {
    id: "description",
    title: "Service Description",
    icon: <Server className="w-5 h-5" />,
    content: "ZeroCloud menyediakan layanan infrastruktur cloud, hosting game, dan aplikasi. Kami menjamin alokasi sumber daya (CPU/RAM) sesuai paket yang Anda beli secara terdedikasi (kecuali paket shared).",
    points: [
      "Akses penuh ke panel kontrol (Pterodactyl/CyberPanel).",
      "Konektivitas jaringan Tier-1 Indonesia & Global.",
      "Dukungan teknis 24/7 (Sesuai SLA)."
    ]
  },
  {
    id: "responsibilities",
    title: "Account Responsibilities",
    icon: <UserCheck className="w-5 h-5" />,
    content: "Anda bertanggung jawab penuh atas keamanan akun dan semua aktivitas yang terjadi di bawah kredensial Anda. Wajib menggunakan data identitas asli sesuai ketentuan KYC.",
    points: [
      "Wajib menjaga kerahasiaan password & 2FA.",
      "Satu orang hanya boleh memiliki satu akun (No Multi-account).",
      "Usia minimal 13 tahun (atau izin orang tua)."
    ]
  },
  {
    id: "payment",
    title: "Payment Terms",
    icon: <CreditCard className="w-5 h-5" />,
    content: "Layanan bersifat prabayar. Tagihan akan dibuat 7 hari sebelum masa aktif berakhir. Kegagalan pembayaran akan mengakibatkan suspensi layanan secara otomatis.",
    points: [
      "Metode pembayaran: QRIS, E-Wallet, Transfer Bank.",
      "Keterlambatan > 3 hari: Suspensi Layanan.",
      "Keterlambatan > 7 hari: Terminasi & Penghapusan Data Permanen."
    ]
  },
  {
    id: "availability",
    title: "Service Availability",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: "Kami menjamin Uptime Network 99.9% setiap bulannya. Jika terjadi downtime di luar jadwal maintenance, Anda berhak mengajukan kompensasi kredit.",
    points: [
      "Garansi Uptime 99.9% SLA.",
      "Maintenance terjadwal akan diinfokan H-24 jam.",
      "Force Majeure (Bencana alam, huru-hara) tidak termasuk SLA."
    ]
  },
  {
    id: "termination",
    title: "Account Termination",
    icon: <Ban className="w-5 h-5" />,
    content: "ZeroCloud berhak menangguhkan atau menghentikan akun Anda secara sepihak jika ditemukan pelanggaran serius tanpa pengembalian dana (Refund).",
    points: [
      "Pelanggaran AUP (Acceptable Use Policy).",
      "Tindakan abusive terhadap staff kami.",
      "Indikasi fraud/penipuan pembayaran."
    ]
  },
  {
    id: "general",
    title: "General Terms",
    icon: <BookOpen className="w-5 h-5" />,
    content: "Syarat ini diatur oleh hukum yang berlaku di Republik Indonesia. Segala sengketa akan diselesaikan melalui musyawarah atau yurisdiksi pengadilan terkait.",
    points: [
      "Tunduk pada hukum Republik Indonesia.",
      "Kebijakan Privasi merupakan bagian tak terpisahkan.",
      "ZeroCloud tidak bertanggung jawab atas kerugian data pengguna."
    ]
  },
  {
    id: "refunds",
    title: "Refunds and Disputes",
    icon: <RefreshCcw className="w-5 h-5" />,
    content: "Kami menyediakan garansi uang kembali 3 hari (72 jam) untuk pesanan pertama dengan alasan teknis yang valid. Diluar itu, dana tidak dapat dikembalikan.",
    points: [
      "Refund hanya berlaku untuk layanan Hosting/VPS.",
      "Tidak berlaku untuk Domain, Lisensi, atau Addons.",
      "Chargeback sepihak = Ban Permanen."
    ]
  },
  {
    id: "cancellations",
    title: "Cancellations",
    icon: <XCircle className="w-5 h-5" />,
    content: "Anda dapat mengajukan pembatalan layanan kapan saja melalui Client Area. Pembatalan dapat bersifat 'Immediate' (Segera) atau 'End of Billing' (Akhir periode).",
    points: [
      "Permintaan pembatalan bersifat final.",
      "Data akan dihapus permanen setelah layanan berakhir.",
      "Backup data adalah tanggung jawab pengguna sebelum cancel."
    ]
  },
  {
    id: "illegal",
    title: "Illegal Use (UU ITE)",
    icon: <Gavel className="w-5 h-5" />,
    content: "Kami mematuhi UU No. 19 Tahun 2016 (Perubahan UU ITE). ZeroCloud tidak menoleransi segala bentuk aktivitas ilegal di jaringan kami.",
    points: [
      "Dilarang: Judi Online (Judol), Pornografi, SARA.",
      "Dilarang: Phishing, Scam, Carding, Hacking Tools.",
      "Dilarang: DDoS Attack (Incoming/Outgoing), Botnet.",
      "Pelanggar akan dilaporkan ke pihak berwajib (Siber Polri)."
    ]
  }
];

export default function TosSection() {
  const [activeTab, setActiveTab] = useState(tosData[0].id);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // ingetin buat 'ZeroCloud_Terms_of_Service.pdf' di 'public/documents/'
      const link = document.createElement('a');
      link.href = '/documents/ZeroCloud_Terms_of_Service.pdf'; 
      link.download = `ZeroCloud_ToS_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Download failed:", error);
      alert("Gagal mengunduh dokumen. Silakan coba lagi nanti.");
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

          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-sm font-bold hover:text-white hover:border-gray-600 hover:bg-gray-800 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            )}
            {isDownloading ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Daftar Isi</p>
              {tosData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left border group",
                    activeTab === item.id 
                      ? "bg-sky-500/10 border-sky-500/20 text-sky-400 shadow-lg shadow-sky-900/10" 
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                  )}
                >
                  <span className={cn(
                    "shrink-0 transition-colors duration-200",
                    activeTab === item.id ? "text-sky-400" : "text-zinc-600 group-hover:text-zinc-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm flex-1">{item.title}</span>
                  
                  {activeTab === item.id && (
                      <ChevronRight className="w-4 h-4 text-sky-500" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm min-h-[600px] relative overflow-hidden">
                
                <div className="absolute -top-10 -right-10 p-10 opacity-5 pointer-events-none">
                    <ShieldAlert className="w-64 h-64 text-white blur-md" />
                </div>

                <AnimatePresence mode="wait">
                    {tosData.map((item) => item.id === activeTab && (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative z-10 space-y-8"
                        >
                            <div className="space-y-4 border-b border-gray-800 pb-8">
                                <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-xs tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
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
                                    <CheckCircle2 className="w-4 h-4 text-sky-500" /> Key Points
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
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-sky-500 transition-colors mt-2 shrink-0" />
                                        <span className="text-sm text-gray-300 leading-relaxed font-medium">{point}</span>
                                    </motion.div>
                                    ))}
                                </div>
                            </div>

                            {item.id === "illegal" && (
                                <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-4 mt-6">
                                    <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <h5 className="text-sm font-bold text-red-400">Pematuhan UU ITE</h5>
                                        <p className="text-xs text-red-300/80 leading-relaxed">
                                            Sesuai UU No. 19 Tahun 2016, ZeroCloud wajib bekerjasama dengan penegak hukum untuk menyerahkan data pengguna yang terindikasi melakukan tindak pidana siber.
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
            Dengan mendaftar dan menggunakan layanan ZeroCloud, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan di atas tanpa paksaan.
          </p>
          <div className="flex gap-4 shrink-0">
            <button className="px-8 py-3 rounded-xl bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 transform active:scale-95 duration-150">
              Saya Mengerti & Setuju
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}