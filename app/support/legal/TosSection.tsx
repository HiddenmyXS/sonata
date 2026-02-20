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
    content: "By registering or using Sonata services, you agree to be legally bound by these terms and conditions. If you do not agree with any part of these terms, you are prohibited from using our services.",
    points: [
      "This agreement is legally valid and binding.",
      "Sonata reserves the right to update terms at any time.",
      "Continued use constitutes acceptance of any changes."
    ]
  },
  {
    id: "description",
    title: "Service Description",
    icon: <Server className="w-5 h-5" />,
    content: "Sonata provides cloud infrastructure, game hosting, and application hosting services. We guarantee resource allocation (CPU/RAM) as per your purchased plan on a dedicated basis (except shared plans).",
    points: [
      "Full access to control panel (Pterodactyl/CyberPanel).",
      "Tier-1 network connectivity with global reach.",
      "24/7 technical support (according to SLA)."
    ]
  },
  {
    id: "responsibilities",
    title: "Account Responsibilities",
    icon: <UserCheck className="w-5 h-5" />,
    content: "You are fully responsible for the security of your account and all activities under your credentials. You must use authentic identification data in compliance with KYC requirements and applicable regulations.",
    points: [
      "You must maintain password and 2FA confidentiality.",
      "One person may only have one account (no multi-accounting).",
      "Minimum age of 13 years (or parental consent required)."
    ]
  },
  {
    id: "payment",
    title: "Payment Terms",
    icon: <CreditCard className="w-5 h-5" />,
    content: "Services are prepaid. Invoices will be issued 7 days before the subscription expires. Failure to pay will result in automatic service suspension.",
    points: [
      "Payment methods: Credit Card, PayPal, Bank Transfer, and other digital wallets.",
      "Payment more than 3 days late: Service Suspension.",
      "Payment more than 7 days late: Account Termination & Permanent Data Deletion."
    ]
  },
  {
    id: "availability",
    title: "Service Availability",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: "We guarantee 99.9% network uptime monthly. If downtime occurs outside scheduled maintenance windows, you may request service credit compensation.",
    points: [
      "99.9% Uptime SLA Guarantee.",
      "Scheduled maintenance will be announced 24 hours in advance.",
      "Force Majeure events (natural disasters, civil unrest) are excluded from SLA."
    ]
  },
  {
    id: "termination",
    title: "Account Termination",
    icon: <Ban className="w-5 h-5" />,
    content: "Sonata reserves the right to suspend or terminate your account unilaterally if serious violations are detected. Termination is non-refundable.",
    points: [
      "Violation of Acceptable Use Policy (AUP).",
      "Abusive conduct toward our staff.",
      "Evidence of fraud or payment fraud."
    ]
  },
  {
    id: "general",
    title: "General Terms",
    icon: <BookOpen className="w-5 h-5" />,
    content: "These terms are governed by applicable US law and GDPR regulations. Any disputes will be resolved through mutual agreement or applicable legal jurisdiction.",
    points: [
      "Governed by US law and GDPR compliance standards.",
      "Privacy Policy is an integral part of these terms.",
      "Sonata is not liable for loss of user data under certain conditions."
    ]
  },
  {
    id: "refunds",
    title: "Refunds and Disputes",
    icon: <RefreshCcw className="w-5 h-5" />,
    content: "We offer a 30-day money-back guarantee for first-time orders with valid technical reasons. Refunds outside this period are subject to our discretion.",
    points: [
      "Refunds apply to Hosting and VPS services only.",
      "Domains, licenses, and add-ons are non-refundable.",
      "Unauthorized chargebacks result in permanent account suspension."
    ]
  },
  {
    id: "cancellations",
    title: "Cancellations",
    icon: <XCircle className="w-5 h-5" />,
    content: "You may request service cancellation at any time through your account. Cancellations can be immediate or at the end of your billing period.",
    points: [
      "Cancellation requests are final and irreversible.",
      "All data will be permanently deleted after service ends.",
      "Data backup is the user's responsibility before cancellation."
    ]
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: <Gavel className="w-5 h-5" />,
    content: "Sonata complies with US law and GDPR regulations. We do not tolerate any illegal activities on our network.",
    points: [
      "Prohibited: Online gambling, explicit content, hate speech.",
      "Prohibited: Phishing, scams, fraud, hacking tools.",
      "Prohibited: DDoS attacks, botnets, malware distribution.",
      "Violators will be reported to appropriate law enforcement authorities."
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

      // ingetin buat 'Sonata_Terms_of_Service.pdf' di 'public/documents/'
      const link = document.createElement('a');
      link.href = '/documents/Sonata_Terms_of_Service.pdf'; 
      link.download = `Sonata_ToS_${new Date().getFullYear()}.pdf`;
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider"
            >
                <ShieldAlert className="w-3 h-3" />
                <span>Legal & Compliance</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Terms of <span className="text-transparent bg-clip-text bg-purple-500">Service</span>
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
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400 shadow-lg shadow-purple-900/10" 
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                  )}
                >
                  <span className={cn(
                    "shrink-0 transition-colors duration-200",
                    activeTab === item.id ? "text-purple-400" : "text-zinc-600 group-hover:text-zinc-400"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm flex-1">{item.title}</span>
                  
                  {activeTab === item.id && (
                      <ChevronRight className="w-4 h-4 text-purple-500" />
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
                                <div className="inline-flex items-center gap-2 text-purple-500 font-bold text-xs tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
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
                                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> Key Points
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
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-500 transition-colors mt-2 shrink-0" />
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
                                            Sesuai UU No. 19 Tahun 2016, Sonata wajib bekerjasama dengan penegak hukum untuk menyerahkan data pengguna yang terindikasi melakukan tindak pidana siber.
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
            By registering and using Sonata services, you are deemed to have read, understood, and agreed to all the terms above without any coercion.
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