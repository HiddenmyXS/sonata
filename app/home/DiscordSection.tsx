"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Loader2, Headset } from "lucide-react";
import { cn } from "@/lib/utils";

const DiscordLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className={className} fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.66-53.23-18.9-72.13ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

type DiscordMember = { id: string; username: string; avatar_url: string; status: "online" | "idle" | "dnd"; };
type DiscordWidget = { name: string; instant_invite: string; presence_count: number; members: DiscordMember[]; };

export default function DiscordSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DiscordWidget | null>(null);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    fetch("https://discord.com/api/guilds/1215569439529902110/widget.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const activeMembers = data?.members?.filter(m => m.status !== 'dnd') || []; 
  const displayMembers = activeMembers.slice(0, 14); 

  return (
    <section ref={containerRef} className="relative w-full py-16 px-4 bg-[#5865F2] overflow-hidden">
      
      <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none">
         <DiscordLogo className="absolute top-10 left-10 w-32 h-32 -rotate-12" />
         <DiscordLogo className="absolute bottom-10 right-10 w-40 h-40 rotate-12" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="flex-1 text-center lg:text-left text-white max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <DiscordLogo className="w-3 h-3" />
            <span>Official Community</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            Join the ZeroCloud Squad.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/80 leading-relaxed mb-6"
          >
            Dapatkan voucher eksklusif, info maintenance, giveaway, dan bantuan teknis langsung dari <strong className="text-white border-b border-white/40">{data?.presence_count || "..."} member online</strong> lainnya.
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={data?.instant_invite || "https://discord.gg/zerocloud"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#5865F2] font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-200"
          >
            Gabung Discord <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="shrink-0 w-full max-w-[360px]"
        >
            <div className="bg-[#232428] rounded-2xl p-5 shadow-2xl shadow-black/20 overflow-hidden border border-black/10">
                
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#323338]">
                    <div className="relative w-10 h-10 shrink-0">
                        <Image src="/aset/logo/logo_bg_white.png" alt="ZeroCloud Logo" fill className="object-contain rounded-xl" />
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#23a559] border-[3px] border-[#232428] rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-sm truncate">ZeroCloud.id | Your Server, Your Way!</h3>
                        <div className="text-[10px] text-gray-400 font-medium">
                            <span className="text-[#23a559] font-bold">{loading ? "..." : data?.presence_count}</span> Online Now
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Active Members</p>
                    {loading ? (
                        <div className="flex justify-center py-4"><Loader2 className="w-5 h-5 animate-spin text-[#5865F2]" /></div>
                    ) : (
                        <div className="grid grid-cols-5 gap-2.5">
                            {displayMembers.map((member) => (
                                <div key={member.id} className="relative group w-9 h-9">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-[#2b2d31]">
                                        <Image src={member.avatar_url} alt={member.username} fill className="object-cover transition-opacity rounded-full group-hover:opacity-80" unoptimized />
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-[#232428] rounded-full",
                                        member.status === "online" ? "bg-[#23a559]" : member.status === "idle" ? "bg-[#f0b232]" : "bg-[#f23f43]"
                                    )} />
                                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-bold">
                                        {member.username}
                                    </div>
                                </div>
                            ))}
                            {activeMembers.length > 14 && (
                                <div className="w-9 h-9 rounded-full bg-[#313338] flex items-center justify-center text-[9px] font-bold text-gray-400 border border-[#3f4147]">+{activeMembers.length - 14}</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="bg-[#2b2d31] rounded-lg p-2.5 flex items-center gap-2.5 border border-[#3f4147]">
                    <div className="w-7 h-7 rounded-full bg-[#313338] flex items-center justify-center shrink-0 text-gray-400">
                        <Headset className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight">
                        Butuh bantuan? <span className="text-gray-200 font-semibold cursor-pointer hover:underline">Buka ticket.</span>
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </section>
  );
}