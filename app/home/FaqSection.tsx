"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageSquareText,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA FAQ ---
interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
    {
        question: "How long is the server setup process after payment?",
        answer: "Instant! Our system automatically detects payment. Your server will be active and ready to use within less than 60 seconds after the invoice is paid (except Dedicated Server which requires 1-24 hours manual setup).",
        category: "General"
    },
    {
        question: "Can I upgrade my package mid-way?",
        answer: "Absolutely. You can upgrade resources (RAM/CPU) anytime through the Client Area. The system will calculate the price difference prorata (you only pay the difference), and no data will be lost.",
        category: "Billing, Upgrade"
    },
    {
        question: "Which server location is best for me?",
        answer: "Use the 'Ping Tester' feature on our homepage. Generally: Choose Jakarta for majority Indonesia players, Singapore for Southeast Asia, and US for global communities.",
        category: "Technical"
    },
    {
        question: "Is there Anti-DDoS protection?",
        answer: "Yes, all packages (even the cheapest) include standard Layer 4 & 7 DDoS protection. For Flux and Atlas packages, we use specialized game mitigation (Game Firewall) that more aggressively filters attacks.",
        category: "Security"
    },
    {
        question: "What payment methods are available?",
        answer: "We accept almost all local payment methods: QRIS (GoPay, OVO, Dana), Bank Virtual Accounts (BCA, Mandiri, BRI, BNI), and Alfamart/Indomaret.",
        category: "Billing"
    },
    {
        question: "Can I install mods or plugins myself?",
        answer: "Absolutely! You have full access to the File Manager (SFTP). You are free to upload any jar file, modpack, or plugin as long as it doesn't violate ToS (such as crypto mining or malicious scripts).",
        category: "Technical"
    },
];

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default buka no 1

  // Filter Logic
  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-gray-950 px-8 border-t border-gray-900 overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Helpcenter</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative max-w-md mx-auto group"
          >
            <input 
                type="text" 
                placeholder="Search Questions... Try 'upgrade', 'payment', or 'mods'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl py-4 pl-4 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all backdrop-blur-sm shadow-xl"
            />
          </motion.div>
        </div>

        <div className="space-y-4">
            <AnimatePresence mode="wait">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                            index={index}
                        />
                    ))
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-center py-10"
                    >
                        <p className="text-gray-500">No matching Answers found.</p>
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="mt-2 text-purple-500 hover:underline text-sm"
                        >
                            Reset Search
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
        >
            <p className="text-gray-400 mb-4">Still have questions? Our support team is here to help.</p>
            <a href="/chat" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 text-white font-medium hover:bg-gray-800 hover:border-gray-700 transition-all group">
                <MessageSquareText className="w-4 h-4 text-purple-500 group-hover:rotate-12 transition-transform" />
                Chat Support
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>

      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick, index }: { faq: FAQ, isOpen: boolean, onClick: () => void, index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                isOpen 
                    ? "bg-gray-900/40 border-purple-500/30 shadow-[0_0_30px_-10px_rgba(14,165,233,0.1)]" 
                    : "bg-gray-900/20 border-gray-800 hover:border-gray-700"
            )}
        >
            <button 
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <div className="flex flex-col gap-1">
                    <span className={cn(
                        "text-lg font-bold transition-colors",
                        isOpen ? "text-purple-100" : "text-gray-300 group-hover:text-white"
                    )}>
                        {faq.question}
                    </span>
                    {isOpen && (
                        <motion.span 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-[10px] text-purple-500 uppercase tracking-wider font-bold"
                        >
                            {faq.category}
                        </motion.span>
                    )}
                </div>
                
                <div className={cn(
                    "p-2 rounded-full border transition-all duration-300 shrink-0 ml-4",
                    isOpen 
                        ? "bg-purple-500 text-white border-purple-500 rotate-90" 
                        : "bg-gray-950 border-gray-800 text-gray-500"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="h-px w-full bg-gray-800/50 mb-4" />
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}