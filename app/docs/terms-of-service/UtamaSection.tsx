"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Scale, 
  FileText, 
  UserX, 
  Clock, 
  DownloadIcon,
  AlertTriangle,
  Lock,
  FileWarning,
  ArrowRightIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const tosData = [
  {
    id: "penggunaan",
    title: "Acceptance of Terms and Conditions",
    icon: <Scale className="w-5 h-5" />,
    content: "By using the hosting services provided by ZeroCloud Indonesia, you agree to be bound by all terms and conditions outlined in this document. Using our services constitutes your acceptance of these terms.",
    points: ["Dilarang Mining Crypto", "Dilarang Bruteforce/DDoS", "Dilarang konten Dewasa/Ilegal"]
  },
  {
    id: "pembayaran",
    title: "User Eligibility",
    icon: <FileText className="w-5 h-5" />,
    content: "All information provided during registration must be accurate and complete",
    points: ["Our services are available to all users without age restrictions."]
  },
  {
    id: "keamanan",
    title: "Service Availability",
    icon: <Lock className="w-5 h-5" />,
    content: "ZeroCloud Indonesia will strive to ensure optimal service availability through:",
    points: ["Maximum efforts to keep services running smoothly.", "The right to conduct maintenance or temporarily suspend services.", "No guarantee of 100% service availability at all times"]
  },
  {
    id: "suspensi",
    title: "Information Security",
    icon: <UserX className="w-5 h-5" />,
    content: "Our security measures include:",
    points: ["Safeguarding your data against unauthorized access.", "Implementing security measures to prevent unauthorized use or alterations."]
  },
  {
    id: "usage",
    title: "Probility Usage",
    icon: <FileWarning className="w-5 h-5" />,
    content: "Users are strictly prohibited from:",
    points: ["Using services for illegal purposes.", "Distributing copyright-infringing content.", "Engaging in hacking activities.", "Sending spam.", "Conducting other illegal activities."]
  }
];


export default function ToSSection() {
  const [activeTab, setActiveTab] = useState(tosData[0].id);

  return (
    <section className="w-full py-24 bg-[#030303] text-zinc-300">
      <div className="max-w-6xl mx-auto px-6">
        
       {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Terms of<span className="text-sky-500"> Services</span>
              </h1>
            </div>
            <p className="text-zinc-500 max-w-2xl flex items-center gap-2">
              <Clock className="w-4 h-4" /> Terakhir diperbarui: 22 Januari 2026
            </p>
          </div>

          {/* Tombol di kanan */}
          <div
            className="px-6 py-2.5 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors"
          >
          <DownloadIcon className="w-6 h-6 text-white"> Download PDF </DownloadIcon>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-2">
            <div className="sticky top-24">
              <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4 px-4">Table of Content</p>
              {tosData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group text-left",
                    activeTab === item.id 
                      ? "bg-white/5 text-white border border-white/10 shadow-xl" 
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  <span className={cn(
                    "transition-colors",
                    activeTab === item.id ? "text-sky-500" : "text-zinc-600 group-hover:text-zinc-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {tosData.map((item) => item.id === activeTab && (
                <div key={item.id} className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-sky-500 rounded-full" />
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-400">
                      {item.content}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <h4 className="text-sm font-semibold text-white/50 uppercase tracking-tighter">Poin Penting:</h4>
                    {item.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                        <ArrowRightIcon className="w-5 h-5 text-white shrink-0" />
                        <span className="text-sm text-zinc-300 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-xs text-amber-200/60 leading-relaxed">
                      Violation of usage terms may result in service termination.
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </main>

        </div>

        {/* Action Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 border-t border-white/5">
          <p className="text-sm text-zinc-500">
            Dengan melanjutkan penggunaan layanan, Anda dianggap setuju dengan semua poin di atas.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
              Download PDF
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors">
              Saya Mengerti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}