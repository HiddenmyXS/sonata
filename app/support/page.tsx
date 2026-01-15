"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Gamepad2, 
  Code, 
  Server, 
  Container, 
  Search, 
  X, 
  FileText, 
  HelpCircle, 
  CreditCard, 
  ScrollText, 
  Sparkles, 
  MoveRight,
  FileTextIcon,
  CalendarIcon,
  GlobeIcon,
  FormInputIcon,
  BellIcon,
  ChevronRight
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { LightRays } from "@/components/ui/light-rays";

const SearchResultItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; onClick: () => void }> = ({ icon, title, desc, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-start gap-4 px-4 py-3.5 rounded-xl
               hover:bg-sky-500/10 transition-all duration-200
               group cursor-pointer text-left border border-transparent hover:border-sky-500/20"
  >
    <div className="mt-0.5 p-2 rounded-lg bg-gray-900 text-sky-500 border border-gray-800 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-gray-200 font-medium group-hover:text-sky-100 transition-colors flex items-center justify-between">
        {title}
        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
      </div>
      <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-1 mt-0.5">
        {desc}
      </div>
    </div>
  </button>
);

export default function SupportComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  // --- DATA ---
  const quickAccessCards = [
    {
      title: "Documentation",
      icon: <FileText className="w-6 h-6" />,
      desc: "Panduan lengkap penggunaan sistem.",
    },
    {
      title: "QnA Center",
      icon: <HelpCircle className="w-6 h-6" />,
      desc: "Jawaban cepat untuk pertanyaan umum.",
    },
    {
      title: "Billing & Payment",
      icon: <CreditCard className="w-6 h-6" />,
      desc: "Info tagihan dan metode transaksi.",
    },
    {
      title: "Terms of Service",
      icon: <ScrollText className="w-6 h-6" />,
      desc: "Ketentuan layanan dan kebijakan.",
    },
  ];

  const features = [
    {
      Icon: FileTextIcon,
      name: "Maintenance Server",
      description: "Cara melakukan maintenance rutin agar server tetap prima.",
      href: "/docs/maintenance",
      cta: "Baca Panduan",
      background: <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-transparent opacity-50" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: FormInputIcon,
      name: "Introduction",
      description: "Pelajari dasar-dasar setup server pertama Anda.",
      href: "/docs/intro",
      cta: "Mulai Belajar",
      background: <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent opacity-50" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Select Package",
      description: "Bingung pilih paket? Cek panduan ini.",
      href: "/docs/packages",
      cta: "Lihat Detail",
      background: <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent opacity-50" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Server Config",
      description: "Optimasi konfigurasi server untuk gaming.",
      href: "/docs/config",
      cta: "Konfigurasi",
      background: <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-50" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Security Rules",
      description: "Amankan server dari serangan DDoS dan Intrusi.",
      href: "/docs/security",
      cta: "Amankan",
      background: <div className="absolute inset-0 bg-gradient-to-tl from-sky-500/10 via-red-500/5 to-transparent opacity-50" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  const searchData = [
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Game Host",
      desc: "Jalankan sesi game performa tinggi.",
      keywords: ["game", "gaming", "host", "server"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "App Host",
      desc: "Hosting aplikasi environment khusus.",
      keywords: ["app", "application", "host", "web"]
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Private Node",
      desc: "Kontrol penuh privat node.",
      keywords: ["private", "node", "dedicated", "server"]
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: "VPS",
      desc: "Virtual server fleksibel & scalable.",
      keywords: ["vps", "virtual", "server", "cloud"]
    }
  ];

  const filteredResults = searchData.filter(item => {
    if (!query.trim()) return true;
    const searchTerm = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.desc.toLowerCase().includes(searchTerm) ||
      item.keywords.some(keyword => keyword.includes(searchTerm))
    );
  });

  const showResults = isFocused && query.length > 0;

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-gray-950 text-white transition-opacity duration-1000 ease-in-out font-sans selection:bg-sky-500/30 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      
      <div className="fixed inset-0 z-0 pointer-events-none">
         <LightRays />
         <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-950/80 to-gray-950" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-600/10 blur-[150px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 pt-32 pb-32">
        
        <div className="w-full flex flex-col items-center mb-16 relative">
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center"
          >
             <h1 className="text-4xl md:text-6xl font-black text-center tracking-tight max-w-4xl z-10 mb-6 drop-shadow-2xl">
               How can we <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                 help you today?
               </span>
             </h1>
          </motion.div>
          
          <div className="w-full max-w-2xl mt-8 relative z-50">
            <div className={`relative group transition-all duration-300 ${isFocused ? 'scale-[1.01]' : ''}`}>
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl opacity-30 blur transition duration-500 ${isFocused ? 'opacity-70' : 'group-hover:opacity-60'}`} />
              
              <div className="relative flex items-center bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
                <div className="pl-6 flex items-center pointer-events-none">
                  <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-sky-400' : 'text-gray-500'}`} />
                  <div className="w-px h-5 bg-gray-800 ml-4" />
                </div>
                
                <input
                  type="text"
                  placeholder="Cari panduan, tutorial, atau layanan..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none rounded-2xl font-medium"
                />
                
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 p-1 hover:bg-gray-800 rounded-full text-gray-500 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {showResults && (
                <div className="absolute top-full left-0 right-0 mt-3 p-2 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-sky-900/20 overflow-hidden z-50">
                   <div className="px-4 py-2 text-[10px] font-bold text-sky-500 uppercase tracking-widest flex justify-between items-center">
                      <span>Suggestions</span>
                      <span className="bg-sky-900/30 px-2 py-0.5 rounded text-sky-400">{filteredResults.length} found</span>
                   </div>
                   <div className="flex flex-col gap-1 mt-1">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((item, index) => (
                          <SearchResultItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            onClick={() => {
                              console.log(`Selected: ${item.title}`);
                              setQuery('');
                              setIsFocused(false);
                            }}
                          />
                        ))
                      ) : (
                        <div className="py-8 text-center text-gray-500">
                          <p>Tidak ada hasil untuk &quot;{query}&quot;.</p>
                        </div>
                      )}
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
            <motion.div 
               style={{ rotateX, scale }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 perspective-container"
            >
              {quickAccessCards.map((card, idx) => (
                <Link href="#" key={idx} className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:bg-gray-900/80 transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10">
                   <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-gray-950 rounded-xl text-gray-400 border border-gray-800 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-all duration-300">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">{card.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                   </div>
                </Link>
              ))}
            </motion.div>
        </div>

        <div className="w-full mt-32">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-3">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Knowledge Base</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white">Getting Started</h2>
                 <p className="text-gray-400 max-w-lg">
                    Pelajari dasar-dasar setup server dan manajemen layanan Anda dengan panduan interaktif kami.
                 </p>
              </div>
              
              <Link href="/docs" className="group inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors">
                 <span>Lihat Semua Panduan</span>
                 <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
           </div>

           <BentoGrid className="grid-rows-1 md:grid-rows-3 h-auto lg:h-[600px] gap-4">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
           </BentoGrid>
        </div>

      </div>
    </main>
  );
}