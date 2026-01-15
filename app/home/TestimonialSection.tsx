"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { motion } from "framer-motion";
import { Star, MessageCircle, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { StripedPattern } from "@/components/magicui/striped-pattern"

const reviews = [
  {
    name: "Rian Gaming",
    username: "@rian_id",
    body: "Ping stabil banget buat main Valorant. Gapernah ngerasain packet loss lagi sejak pindah ke ZeroCloud.",
    img: "https://avatar.vercel.sh/rian",
    platform: "discord",
  },
  {
    name: "Sarah Vlog",
    username: "@sarah.daily",
    body: "Setup server Minecraft cuma 2 menit. Panelnya gampang banget dipake bahkan buat pemula kayak aku.",
    img: "https://avatar.vercel.sh/sarah",
    platform: "tiktok",
  },
  {
    name: "TechnoLogic",
    username: "@techno_log",
    body: "Supportnya juara! Tiket dibales kurang dari 5 menit jam 2 pagi. Best value for money.",
    img: "https://avatar.vercel.sh/techno",
    platform: "trustpilot",
  },
  {
    name: "IndoFiveM",
    username: "@indofivem",
    body: "Server FiveM kami nampung 200+ player lancar jaya pake paket Nova. Rekomen keras!",
    img: "https://avatar.vercel.sh/indo",
    platform: "discord",
  },
  {
    name: "Budi Santoso",
    username: "@budisan",
    body: "Udah coba banyak provider lokal, cuma ZeroCloud yang berani kasih garansi uptime beneran.",
    img: "https://avatar.vercel.sh/budi",
    platform: "trustpilot",
  },
  {
    name: "Gamer Ganteng",
    username: "@gamerganteng",
    body: "Anti DDoS-nya bukan gimmick. Server tetep on meski ada yang iseng nyerang.",
    img: "https://avatar.vercel.sh/gamer",
    platform: "tiktok",
  },
];

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "discord":
      return <MessageCircle className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />;
    case "tiktok":
      return (
        <svg className="w-4 h-4 text-pink-500 fill-pink-500" viewBox="0 0 24 24" fill="currentColor">
           <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      );
    case "trustpilot":
      return <Star className="w-4 h-4 text-green-500 fill-green-500" />;
    default:
      return <Star className="w-4 h-4 text-yellow-500" />;
  }
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
  platform,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  platform: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-3",
        "border-gray-800 bg-gray-900/40 hover:bg-gray-900/80 transition-all duration-300 hover:border-sky-500/30 backdrop-blur-sm",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image 
            className="rounded-full border border-gray-700" 
            width={40} 
            height={40} 
            alt={name} 
            src={img} 
        />
        <div className="flex flex-col flex-1">
          <figcaption className="text-sm font-bold text-white flex items-center gap-1">
            {name}
            {platform === 'trustpilot' && <ShieldCheck className="w-3 h-3 text-sky-500 ml-1" />}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
        <div className="p-2 bg-gray-800/50 rounded-full border border-gray-700/50">
            <PlatformIcon platform={platform} />
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 bg-gray-950 overflow-hidden border-t border-gray-900">
      <StripedPattern 
        className="absolute inset-0 opacity-10 pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Heart className="w-3 h-3 fill-sky-400" />
                <span>Community Love</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Dipercaya oleh <span className="text-transparent bg-clip-text bg-sky-500">Gamers</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-white font-bold">4.4/5</span> on Trustpilot
                </div>
                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                    <MessageCircle className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                    <span className="text-white font-bold">10k+</span> di Discord
                </div>
            </div>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
                {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            
            <Marquee reverse pauseOnHover className="[--duration:35s] mt-6">
                {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-950 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-950 dark:from-background"></div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 flex flex-col md:flex-row items-center gap-6 bg-gray-900/30 border border-gray-800 p-6 rounded-3xl backdrop-blur-md"
        >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-lg font-bold text-white">Gabung Komunitas Kami</p>
                <p className="text-sm text-gray-400">Diskusi, share config, dan mabar bareng.</p>
            </div>
            
            <div className="h-8 w-px bg-gray-800 hidden md:block" />

            <div className="flex items-center gap-4">
                <AvatarCircles numPeople={1200} avatarUrls={avatarUrls} />
                <a 
                    href="https://discord.gg/zerocloud" 
                    target="_blank"
                    className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-colors shadow-lg shadow-indigo-500/20"
                >
                    Join Discord
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}