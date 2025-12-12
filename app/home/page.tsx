"use client";

import Header from "../component/Head";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";
import { Safari } from "@/components/ui/safari";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { 
  MoveRight, 
  Gamepad2, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu,
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HomeComponent() {
  const [isVisible, setIsVisible] = useState(false);
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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for hobbyists and small projects.",
      features: ["1 Game Server", "2GB RAM", "Shared CPU", "Standard Support"],
      highlight: false,
    },
    {
      name: "Pro Gamer",
      price: "$29",
      description: "For serious gamers and communities.",
      features: ["5 Game Servers", "8GB RAM", "Dedicated CPU Thread", "Priority Support", "DDoS Protection"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Scalable infrastructure for massive networks.",
      features: ["Unlimited Servers", "32GB RAM", "Dedicated Core", "24/7 Dedicated Support", "Custom SLA"],
      highlight: false,
    },
  ];

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-zinc-950 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full flex flex-col items-center pt-20 pb-40 overflow-hidden">
        <Header />        
          <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-950 z-0" />
          <Particles className="absolute inset-0 z-0 animate-fade-in" quantity={100} ease={80} color="#ffffff" refresh />
          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl mt-10"> 
            <div
              className={cn(
                "mt-12 group relative overflow-hidden rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-md text-base transition-all ease-in hover:cursor-pointer hover:bg-zinc-800"
              )}>
              <span
                className={cn(
                  "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#3b82f6]/50 via-[#2563eb]/50 to-[#60a5fa]/50 bg-size-[300%_100%] p-px pointer-events-none"
                )}
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              <div className="relative z-10 inline-flex items-center font-bold justify-center text-sm md:text-base px-4 py-1 transition ease-out text-neutral-300 hover:text-white">
                <Sparkles className="mr-2 size-4 text-blue-400" />
                <AnimatedGradientText colorFrom="#3b82f6" colorTo="#60a5fa">
                  Introducing Sonata Themes!
                </AnimatedGradientText>
                <MoveRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </div>

              <div className="w-full flex flex-col items-center mt-8 mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-400 drop-shadow-2xl leading-tight tracking-tight max-w-5xl">
                Maximum Speed Without Breaking Your Budget
                </h1>
                <p className="text-base md:text-lg text-center text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
                arcu eu massa hendrerit egestas vitae at turpis.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pointer-events-auto">
                <a
                  href="#list-game"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-zinc-950 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <Gamepad2 className="w-5 h-5" />
                  List Server Games
                </a>
                <a
                  href="/chat"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Question
                </a>
                </div>
              </div>

            <div className="w-full mt-10 perspective-container" style={{ perspective: "1200px" }}>
              <motion.div
                style={{
                  rotateX: rotateX,
                  scale: scale,
                  opacity: opacity,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-5xl mx-auto shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-xl"
              >
                <Safari
                  url="dashboard.sonata.com"
                  className="w-full shadow-2xl border border-white/10 rounded-xl bg-zinc-950 text-white"
                  imageSrc="https://builtbybit.com/attachments/frame-1-png.1113659/?preset=fullr1"
                />
              </motion.div>
            </div>
          </div>
        </div>
      {/* --- Why Choose Sonata Section --- */}
      <section className="relative w-full py-24 bg-zinc-950 z-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Sonata?</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Dibangun untuk performa maksimal dengan infrastruktur yang handal untuk kebutuhan gaming dan hosting Anda.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">               
                <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900/80 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex flex-col h-full justify-between">
                          <div className="mb-4 p-3 bg-blue-500/20 w-fit rounded-xl">
                              <Zap className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast Performance</h3>
                              <p className="text-zinc-400">Didukung oleh NVMe SSD dan prosesor terbaru untuk menjamin latency rendah dan loading time super cepat untuk server game Anda.</p>
                          </div>
                      </div>
                  </div>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900/80 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                         <div className="mb-4 p-3 bg-green-500/20 w-fit rounded-xl">
                            <ShieldCheck className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">DDoS Protection</h3>
                        <p className="text-zinc-400 text-sm">Perlindungan 24/7 terhadap serangan jaringan berbahaya.</p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900/80 transition-all duration-300">
                      <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="mb-4 p-3 bg-orange-500/20 w-fit rounded-xl">
                            <Globe className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
                        <p className="text-zinc-400 text-sm">Server tersedia di berbagai lokasi strategis di seluruh dunia.</p>
                    </div>
                </div>
                <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900/80 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-l from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <div className="mb-4 p-3 bg-purple-500/20 w-fit rounded-xl">
                                <Cpu className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Dedicated Hardware</h3>
                            <p className="text-zinc-400">Resource yang terisolasi sepenuhnya. Tidak ada &quot;noisy neighbors&quot;. CPU dan RAM yang Anda beli adalah milik Anda sepenuhnya.</p>
                        </div>
                        <div className="w-full md:w-1/3 h-24 md:h-32 rounded-xl bg-linear-to-tr from-zinc-800 to-zinc-700 border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            <span className="text-white/30 font-mono text-xs z-10">SYS_MONITOR_ACTIVE</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
      <section className="relative w-full py-24 bg-zinc-950 px-4  border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Pilih paket yang sesuai dengan kebutuhan server Anda. Upgrade kapan saja.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={cn(
                            "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                            plan.highlight 
                                ? "bg-zinc-900/80 border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                                : "bg-zinc-900/30 border-white/10 hover:border-white/20 hover:bg-zinc-900/50"
                        )}>
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            <span className="text-zinc-500">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-zinc-400">{plan.description}</p>         
                        <ul className="mt-8 space-y-4 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={cn(
                            "mt-8 w-full py-3 px-4 rounded-xl font-medium transition-colors",
                            plan.highlight 
                                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25" 
                                : "bg-white/10 hover:bg-white/20 text-white"
                        )}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="w-full py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />     
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to deploy your server?</h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan developer dan gamer yang mempercayakan infrastrukturnya pada Sonata.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                    Start for Free <ArrowRight className="w-5 h-5"/>
                </button>
                <button className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-lg hover:bg-zinc-800 transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full py-12 px-4 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
                <h4 className="text-xl font-bold text-white mb-4">Sonata</h4>
                <p className="text-zinc-500 text-sm">Premium hosting solutions for next-generation applications and games.</p>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Game Host</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">VPS</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">DDoS Protection</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
            <p>&copy; 2024 Sonata Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                {/* Social icons placeholder */}
                <span>Twitter</span>
                <span>GitHub</span>
                <span>Discord</span>
            </div>
        </div>
      </footer>
    </main>
  );
}