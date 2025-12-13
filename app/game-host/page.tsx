"use client";

import Header from "../component/Head";
import Footer from "../component/Footer";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";
import { 
  Gamepad2, 
  MessageCircle, 
  FileText, 
  HelpCircle, 
  CreditCard, 
  ScrollText, 
  Sparkles, 
  MoveRight, 
  Search, 
  FileTextIcon, 
  CalendarIcon,
  GlobeIcon,
  FormInputIcon,
  Code,
  Server,
  Container,
  X,
  BellIcon,
  Gamepad2Icon
} from "lucide-react";
import Link from "next/link";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

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
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  const cards = [
    {
      title: "Documentation",
      icon: <FileText className="w-8 h-8 text-white" />,
      desc: "Panduan lengkap penggunaan sistem dan fitur.",
    },
    {
      title: "QnA Answer",
      icon: <HelpCircle className="w-8 h-8 text-white" />,
      desc: "Jawaban cepat untuk pertanyaan umum.",
    },
    {
      title: "Payment",
      icon: <CreditCard className="w-8 h-8 text-white" />,
      desc: "Informasi pembayaran, tagihan, dan metode transaksi.",
    },
    {
      title: "Syarat Ketentuan",
      icon: <ScrollText className="w-8 h-8 text-white" />,
      desc: "Ketentuan layanan dan kebijakan penggunaan.",
    },
  ];

  const filteredCardx = cards.filter((card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  const features = [
  {
    Icon: FileTextIcon,
    name: "Maintenance Server",
    description: "Learn how to perform server maintenance tasks.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FormInputIcon,
    name: "Introduction",
    description: "Learn the basics of setting up your server.",
    href: "/",
    cta: "Learn more",
    background: <img src="../aset/page-1.jpeg" className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Select Your Package",
    description: "Choose the hosting package that fits your needs.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Configure Your Server",
    description: "Learn how to set up your server properly.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Configure Security Rules",
    description:
      "Setup security measures to protect your server.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

 const searchData = [
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Game Host",
      desc: "Jalankan sesi game performa tinggi. Full managed.",
      keywords: ["game", "gaming", "host", "server"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "App Host",
      desc: "Hosting aplikasi dengan environment khusus.",
      keywords: ["app", "application", "host", "web"]
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Private Node",
      desc: "Node khusus untuk kontrol penuh privat.",
      keywords: ["private", "node", "dedicated", "server"]
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: "VPS",
      desc: "Virtual server fleksibel dan scalable.",
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
      className={`flex flex-col items-center w-full min-h-screen bg-zinc-950 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full flex flex-col items-center pt-30 pb-40 overflow-hidden">
        <Header />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-950 z-0" />
          <Particles className="absolute inset-0 z-0 animate-fade-in" quantity={100} ease={80} color="#ffffff" refresh />
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mt-40">
            <div className="w-full flex flex-col mt-8 mb-8">
                <div className="relative z-10 h-3 inline-flex items-center font-bold justify-left text-sm md:text-base transition ease-out text-neutral-300 hover:text-white">
                  <Gamepad2Icon className="mr-2 size-12 text-zinc-400" />
                    <AnimatedGradientText className="text-4xl m-2" colorFrom="#ffffff" colorTo="#a1a1aa">
                      Game Hosting 
                    </AnimatedGradientText>
                </div>
                <p className="mt-5">Choose your best package option for your hosting</p>
              {/* Input Field */}
              <div className="w-full max-w-4xl mt-15">
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Search className="w-5 h-5 text-zinc-400" />
                      <div className="w-px h-5 bg-zinc-700" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      className="w-full pl-16 pr-4 py-4 rounded-xl bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-all duration-200"
                    />
                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  {/* Search Results */}
                  {showResults && (
                    <div className="relative mt-4 w-full z-50">
                      <div className="bg-zinc-900/80 backdrop-blur-2xl shadow-2xl shadow-black/50 border border-white/10 rounded-xl overflow-hidden z-50 ring-1 ring-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Top highlight line */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="flex flex-col p-2">
                          {filteredResults.length > 0 ? (
                            <>
                              <div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                Results ({filteredResults.length})
                              </div>
                              {filteredResults.map((item, index) => (
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
                              ))}
                            </>
                          ) : (
                            <div className="px-3 py-8 text-center text-zinc-500">
                              No results found for "{query}"
                            </div>
                          )}
                        </div>
                        {/* Bottom subtle gradient */}
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
              {/* Card Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 w-full max-w-8xl">
                {filteredCardx.map((card, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
                    style={{ rotateX, scale, opacity }}
                  >
                    {card.icon}
                    <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-zinc-400 text-center">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
              {/* Getting Start Section */}
              <div className="w-full max-w-8xl mt-8">
                <div className="relative z-10 inline-flex items-center font-bold justify-center text-sm md:text-base transition ease-out text-neutral-300 hover:text-white">
                  <Sparkles className="mr-2 size-8 text-zinc-400" />
                    <AnimatedGradientText className="text-2xl" colorFrom="#ffffff" colorTo="#a1a1aa">
                      Getting Start
                    </AnimatedGradientText>
                  <MoveRight className="ml-3 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </div>
                <p className="text-base text-left text-zinc-400 max-w-2xl">
                Learn the basics of setup your server and manage your server quickly
                </p>
                <BentoGrid className="lg:grid-rows-3 h-150 mt-10">
                    {features.map((feature) => (
                      <BentoCard key={feature.name} {...feature} />
                    ))}
                  </BentoGrid>
              </div>
            </div>
          </div>     
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
