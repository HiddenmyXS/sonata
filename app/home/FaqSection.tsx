"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageSquareText,
  ChevronRight,
  Search,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  {
    question: "How long is the server setup process after payment?",
    answer: "Instant! Our system automatically detects your payment. Your server will be active and ready to use within less than 60 seconds after the invoice is paid (except Dedicated Servers, which require 1-24 hours for manual setup).",
    category: "General",
  },
  {
    question: "Can I upgrade my package mid-way?",
    answer: "Absolutely. You can upgrade your resources (RAM/CPU) at any time through the Client Area. The system will calculate the price difference prorata (you only pay the difference), and no data will be lost during the transition.",
    category: "Billing & Upgrade",
  },
  {
    question: "Which server location is best for me?",
    answer: "Use the 'Ping Tester' feature on our homepage. Generally: Choose Jakarta for majority Indonesian players, Singapore for Southeast Asia, and the US for global communities.",
    category: "Technical",
  },
  {
    question: "Is there Anti-DDoS protection?",
    answer: "Yes, all packages (even the entry-level ones) include standard Layer 4 & 7 DDoS protection. For our Flux and Atlas packages, we deploy specialized game mitigation (Game Firewall) that aggressively filters targeted attacks.",
    category: "Security",
  },
  {
    question: "What payment methods are available?",
    answer: "We accept almost all local payment methods: QRIS (GoPay, OVO, Dana), Bank Virtual Accounts (BCA, Mandiri, BRI, BNI), and retail outlets like Alfamart/Indomaret.",
    category: "Billing",
  },
  {
    question: "Can I install mods or plugins myself?",
    answer: "Absolutely! You have full access to the File Manager and SFTP. You are completely free to upload any custom .jar file, modpack, or plugin, provided it doesn't violate our ToS (such as crypto mining or malicious scripts).",
    category: "Technical",
  },
];

// Category colour map
const categoryStyle: Record<string, string> = {
  "General":         "text-slate-400  bg-slate-500/8  border-slate-500/20",
  "Billing & Upgrade":"text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
  "Technical":       "text-sky-400    bg-sky-500/8    border-sky-500/20",
  "Security":        "text-violet-400 bg-violet-500/8 border-violet-500/20",
  "Billing":         "text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
};

// ─── FAQ Item ───
function FAQItem({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "rounded-2xl overflow-hidden border transition-all duration-300",
        isOpen
          ? "border-purple-500/25 bg-purple-500/4"
          : "border-white/6 bg-white/2 hover:border-white/10 hover:bg-white/3"
      )}
      style={{
        boxShadow: isOpen
          ? "0 0 24px rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Question row */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer group gap-4"
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* Category pill */}
          <span className={cn(
            "inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest w-fit px-2.5 py-1 rounded-full border transition-opacity duration-300",
            categoryStyle[faq.category] ?? "text-slate-400 bg-white/5 border-white/10",
            isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden py-0 mb-0"
          )}>
            <span className="w-1 h-1 rounded-full bg-current" />
            {faq.category}
          </span>

          <span className={cn(
            "text-base font-medium transition-colors duration-300 leading-snug",
            isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
          )}>
            {faq.question}
          </span>
        </div>

        {/* Toggle icon */}
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300",
          isOpen
            ? "bg-purple-500/10 border-purple-500/25 text-purple-400"
            : "bg-white/3 border-white/8 text-slate-500 group-hover:text-slate-300 group-hover:border-white/14"
        )}>
          {isOpen
            ? <Minus className="w-3.5 h-3.5" />
            : <Plus className="w-3.5 h-3.5" />
          }
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-gradient-to-r from-purple-500/15 via-white/5 to-transparent mb-5" />
              <p className="text-slate-400 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Section ───
export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex]     = useState<number | null>(0);

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full py-24 md:py-32 px-6 lg:px-8 overflow-hidden font-sans"
      style={{ background: "#08080a" }}
    >

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">

        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/4 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Help Center</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Questions
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="relative max-w-xl mx-auto group"
          >
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-600 group-focus-within:text-purple-400 transition-colors duration-200" />
            </div>
            <input
              type="text"
              placeholder="Search questions…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl py-3.5 pl-12 pr-5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </motion.div>
        </div>

        <div className="space-y-2.5">
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 px-6 rounded-2xl border border-white/6 bg-white/2"
              >
                <Sparkles className="w-7 h-7 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-500 text-sm mb-3">No results for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-purple-400 hover:text-purple-300 font-medium text-xs transition-colors"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center text-center p-8 rounded-2xl border border-white/6 bg-white/2"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <p className="text-slate-400 text-base mb-6 leading-relaxed">
            Still have questions?{" "}
            <span className="text-white font-medium">Our engineering team is here to help.</span>
          </p>
          <a
            href="/chat"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/8 bg-white/4 text-slate-200 font-semibold text-sm transition-all duration-200 group hover:border-purple-500/30 hover:bg-purple-500/6 hover:text-white"
          >
            <MessageSquareText className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
            Open Live Chat
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 group-hover:text-purple-400 transition-all duration-200" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}