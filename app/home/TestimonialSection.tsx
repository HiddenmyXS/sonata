"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { motion } from "framer-motion";
import { Star, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";

const generateRandomAvatar = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
};

const testimonials = [
  {
    name: "Alex Johnson",
    username: "@alexjohn",
    body: "The server performance is incredible. Setup was fast and the panel is super intuitive. Highly recommended!",
    platform: "discord",
    seed: "alex-johnson-1"
  },
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "Best hosting experience I've had. Support team responds in minutes, not hours. Worth every penny!",
    platform: "discord",
    seed: "sarah-chen-2"
  },
  {
    name: "Marcus Rodriguez",
    username: "@marcus_rod",
    body: "Running my gaming community on this for 6 months now. Zero downtime, amazing reliability.",
    platform: "trustpilot",
    seed: "marcus-rodriguez-3"
  },
  {
    name: "Emma Wilson",
    username: "@emmaw",
    body: "The DDoS protection actually works. Got attacked last week and servers stayed online. Impressive!",
    platform: "discord",
    seed: "emma-wilson-4"
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "Clean interface, fast deployment, and great documentation. Can't complain about anything here.",
    platform: "discord",
    seed: "david-kim-5"
  },
  {
    name: "Jessica Martinez",
    username: "@jessmartinez",
    body: "Migrated from another host. This is night and day difference in terms of speed and stability.",
    platform: "trustpilot",
    seed: "jessica-martinez-6"
  },
  {
    name: "Chris Anderson",
    username: "@chrisa",
    body: "Panel design is so clean and easy to use. My friends were surprised how simple it is to manage.",
    platform: "discord",
    seed: "chris-anderson-7"
  },
  {
    name: "Lisa Thompson",
    username: "@lisathompson",
    body: "Switched from shared hosting. The performance improvement is absolutely massive. Loving it!",
    platform: "discord",
    seed: "lisa-thompson-8"
  },
  {
    name: "Tom Harris",
    username: "@tomh",
    body: "Great uptime guarantee and they actually deliver on it. Never had any issues since I started using them.",
    platform: "trustpilot",
    seed: "tom-harris-9"
  },
  {
    name: "Rachel Green",
    username: "@rachelg",
    body: "The support team actually knows what they're talking about. Technical help that actually helps!",
    platform: "discord",
    seed: "rachel-green-10"
  },
  {
    name: "Michael Brown",
    username: "@mbrown",
    body: "Affordable pricing without compromising on quality. This is the sweet spot I was looking for.",
    platform: "discord",
    seed: "michael-brown-11"
  },
  {
    name: "Sophie Turner",
    username: "@sophiet",
    body: "Running multiple servers without any issues. The infrastructure is solid and reliable.",
    platform: "discord",
    seed: "sophie-turner-12"
  },
  {
    name: "James Wilson",
    username: "@jamesw",
    body: "Setup my first server ever and it was so straightforward. Definitely hosting all my projects here now.",
    platform: "trustpilot",
    seed: "james-wilson-13"
  },
  {
    name: "Olivia Davis",
    username: "@oliviad",
    body: "The control panel is intuitive and powerful. Everything I need in one place. Very impressed!",
    platform: "discord",
    seed: "olivia-davis-14"
  },
  {
    name: "Ryan Cooper",
    username: "@ryanc",
    body: "Been hosting with them for a year. Consistently excellent service and never a single complaint.",
    platform: "discord",
    seed: "ryan-cooper-15"
  },
  {
    name: "Anna Perez",
    username: "@annap",
    body: "The network infrastructure is top-notch. Got exactly what I was promised and more.",
    platform: "trustpilot",
    seed: "anna-perez-16"
  },
  {
    name: "Kevin Lee",
    username: "@kevlee",
    body: "Migrating was so easy. Their team guided me through the whole process. Outstanding support!",
    platform: "discord",
    seed: "kevin-lee-17"
  },
  {
    name: "Nina White",
    username: "@ninaw",
    body: "Gaming community grew 3x since we moved to better hosting. Performance matters and it shows.",
    platform: "discord",
    seed: "nina-white-18"
  },
  {
    name: "Lucas Santos",
    username: "@lucas_santos",
    body: "Finally found a host that takes security seriously. DDoS attacks? Not a problem anymore!",
    platform: "trustpilot",
    seed: "lucas-santos-19"
  },
  {
    name: "Victoria Blake",
    username: "@victoriab",
    body: "Best decision I made for my project. The speed and reliability are unmatched in this price range.",
    platform: "discord",
    seed: "victoria-blake-20"
  },
  {
    name: "Noah Palmer",
    username: "@noahp",
    body: "The dashboard is so well designed. Managing everything is a breeze. Absolutely love this platform.",
    platform: "discord",
    seed: "noah-palmer-21"
  },
  {
    name: "Zoe Harris",
    username: "@zoeharris",
    body: "Community is friendly and helpful. The whole experience has been amazing from day one.",
    platform: "trustpilot",
    seed: "zoe-harris-22"
  }
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "discord":
      return <MessageCircle className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />;
    case "trustpilot":
      return <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
    default:
      return <Heart className="w-4 h-4 text-purple-400" />;
  }
};

const ReviewCard = ({
  name,
  username,
  body,
  platform,
  seed,
}: {
  name: string;
  username: string;
  body: string;
  platform: string;
  seed: string;
}) => {
  const avatarUrl = generateRandomAvatar(seed);

  return (
    <figure
      className={cn(
        "relative w-80 cursor-default overflow-hidden rounded-xl border p-5 mx-3",
        "border-purple-500/10 bg-slate-800/30 hover:bg-slate-800/50",
        "transition-all duration-300 hover:border-purple-500/30 backdrop-blur-sm"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <Image 
          className="rounded-full border border-purple-500/20 object-cover" 
          width={40} 
          height={40} 
          alt={name} 
          src={avatarUrl}
          unoptimized
        />
        <div className="flex flex-col flex-1">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs text-slate-500">{username}</p>
        </div>
        <div className="p-2 bg-slate-700/50 rounded-full border border-purple-500/20">
          <PlatformIcon platform={platform} />
        </div>
      </div>
      <blockquote className="text-sm text-slate-300 leading-relaxed">
        "{body}"
      </blockquote>
    </figure>
  );
};

export default function TestimonialsSection() {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-purple-950/5 pointer-events-none" />
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Heart className="w-4 h-4 fill-purple-400" />
            <span>Community Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-400">
              Thousands
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join our growing community of satisfied users who trust us with their hosting needs.
          </p>
        </motion.div>

        <div className="relative w-full flex flex-col items-center justify-center gap-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <Marquee pauseOnHover className="[--duration:60s]">
              {firstRow.map((review, i) => (
                <ReviewCard key={`${review.seed}-${i}`} {...review} />
              ))}
            </Marquee>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Marquee reverse pauseOnHover className="[--duration:60s]">
              {secondRow.map((review, i) => (
                <ReviewCard key={`${review.seed}-rev-${i}`} {...review} />
              ))}
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-slate-950 to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-slate-950 to-transparent z-20"></div>
        </div>
      </div>
    </section>
  );
}