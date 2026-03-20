"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Felix",
    name: "xX_DarkLord_Xx",
    role: "Minecraft Server Owner",
    tag: "@darklord",
    message: "Server gue ga pernah lag sejak pindah sini. 200 player, TPS tetap 20. Worth banget!",
    game: "Minecraft",
    stars: 5,
  },
  {
    id: 2,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka",
    name: "NightOwlGamer",
    role: "ARK Tribe Leader",
    tag: "@nightowl",
    message: "Setup 5 menit langsung jalan. Support fast response, masalah langsung solved.",
    game: "ARK: Survival",
    stars: 5,
  },
  {
    id: 3,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Zara",
    name: "ZephyrStrike",
    role: "CS2 Community Admin",
    tag: "@zephyr",
    message: "Anti-DDoS mereka real deal. Dulu sering kena serangan, sekarang? Nothing gets through.",
    game: "Counter-Strike 2",
    stars: 5,
  },
  {
    id: 4,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Ryuu",
    name: "RyuuHoshi",
    role: "Valheim Viking Chief",
    tag: "@ryuuhoshi",
    message: "Harga paling masuk akal dibanding kompetitor. Uptime 99.9% ga bohong.",
    game: "Valheim",
    stars: 5,
  },
  {
    id: 5,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Mochi",
    name: "MochiQueen",
    role: "Rust Clan Leader",
    tag: "@mochiqueen",
    message: "Migrasi dari host lain super gampang. Zero downtime, zero drama. Recommended!",
    game: "Rust",
    stars: 5,
  },
  {
    id: 6,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Blaze",
    name: "BlazeRunner99",
    role: "FiveM Server Dev",
    tag: "@blazerunner",
    message: "Control panel mereka clean. Restart, backup, update — semua satu klik. Mantap!",
    game: "FiveM / GTA V",
    stars: 5,
  },
  {
    id: 7,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Nova",
    name: "NovaStrike_ID",
    role: "Terraria Veteran",
    tag: "@novastrike",
    message: "Ping dari Asia Tenggara turun dari 180ms ke 12ms. Literally game changer!",
    game: "Terraria",
    stars: 5,
  },
  {
    id: 8,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Luna",
    name: "LunaCraft",
    role: "Modded MC Creator",
    tag: "@lunacraft",
    message: "100+ mods jalan mulus. RAM flexible, bisa upgrade kapan aja tanpa ribet.",
    game: "Modded MC",
    stars: 5,
  },
  {
    id: 9,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Storm",
    name: "StormBreaker_",
    role: "7 Days to Die Admin",
    tag: "@stormbreaker",
    message: "Backup otomatis setiap hari, pernah crash langsung restore dalam 2 menit. Gila.",
    game: "7 Days to Die",
    stars: 5,
  },
  {
    id: 10,
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Pixel",
    name: "PixelNomad",
    role: "Satisfactory Engineer",
    tag: "@pixelnomad",
    message: "24/7 online tanpa pernah restart paksa. Ini yang gue cari dari dulu.",
    game: "Satisfactory",
    stars: 5,
  },
];

const gameBadgeColors: Record<string, string> = {
  "Minecraft":        "bg-green-500/10 text-green-400 border-green-500/20",
  "ARK: Survival":    "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Counter-Strike 2": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Valheim":          "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Rust":             "bg-red-500/10 text-red-400 border-red-500/20",
  "FiveM / GTA V":    "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Terraria":         "bg-lime-500/10 text-lime-400 border-lime-500/20",
  "Modded MC":        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "7 Days to Die":    "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Satisfactory":     "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-2.5 h-2.5 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  delay = 0,
  style,
}: {
  t: (typeof testimonials)[0];
  delay?: number;
  style?: React.CSSProperties;
}) {
  const badge = gameBadgeColors[t.game] ?? "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      style={style}
      className="group relative flex flex-col gap-2.5 rounded-2xl border border-white/[0.07] bg-zinc-900/75 backdrop-blur-md p-4 shadow-2xl shadow-black/50 hover:border-white/13 transition-colors duration-300 h-full"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/2.5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-2.5">
        <div className="relative shrink-0">
          <img
            src={t.avatar}
            alt={t.name}
            width={32}
            height={32}
            className="rounded-full border border-white/10 bg-zinc-800 w-8 h-8"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-[1.5px] border-zinc-900" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12.5px] font-bold text-white truncate leading-snug">{t.name}</p>
          <p className="text-[10px] text-zinc-500 truncate">{t.role}</p>
        </div>
        <StarRating count={t.stars} />
      </div>
      <p className="text-[12px] text-zinc-300 leading-relaxed flex-1">"{t.message}"</p>
      <div className="flex items-center justify-between mt-auto">
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${badge}`}>
          {t.game}
        </span>
        <span className="text-[10px] text-zinc-600">{t.tag}</span>
      </div>
    </motion.div>
  );
}

function GridPatternBg() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="tgrid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.045" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tgrid)" />
    </svg>
  );
}

function CenterPiece() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center text-center gap-4"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-zinc-400 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Dipercaya 10,000+ Gamer
      </div>

      <h2 className="text-4xl md:text-[2.75rem] font-black tracking-tight text-white leading-[1.06]">
        Komunitas yang
        <br />
        <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
          bicara sendiri.
        </span>
      </h2>

      <p className="text-[13px] text-zinc-400 max-w-60 leading-relaxed">
        Ribuan server owner percayakan hosting mereka kepada kami. Ini cerita mereka.
      </p>

      <div className="flex items-center gap-6 pt-1">
        {[
          { value: "99.9%", label: "Uptime" },
          { value: "12ms",  label: "SEA Ping" },
          { value: "10K+",  label: "Servers" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5">
            <span className="text-xl font-black text-white tabular-nums">{s.value}</span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ScatteredColumn({
  cards,
  side,
}: {
  cards: { t: (typeof testimonials)[0]; delay: number; offsetTop: number }[];
  side: "left" | "right";
}) {
  const colA = cards.filter((_, i) => i % 2 === 0);
  const colB = cards.filter((_, i) => i % 2 === 1);

  return (
    <div className={`flex gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}>
      <div className="flex flex-col gap-3 flex-1" style={{ marginTop: side === "left" ? "0px" : "32px" }}>
        {colA.map(({ t, delay, offsetTop }, i) => (
          <div key={t.id} style={{ marginTop: i === 0 ? offsetTop : 0 }}>
            <TestimonialCard t={t} delay={delay} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 flex-1" style={{ marginTop: side === "left" ? "40px" : "0px" }}>
        {colB.map(({ t, delay, offsetTop }, i) => (
          <div key={t.id} style={{ marginTop: i === 0 ? offsetTop : 0 }}>
            <TestimonialCard t={t} delay={delay} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const leftCards = [
    { t: testimonials[0], delay: 0.05, offsetTop: 0 },
    { t: testimonials[1], delay: 0.10, offsetTop: 0 },
    { t: testimonials[4], delay: 0.14, offsetTop: 0 },
    { t: testimonials[5], delay: 0.16, offsetTop: 0 },
    { t: testimonials[8], delay: 0.18, offsetTop: 0 },
  ];

  const rightCards = [
    { t: testimonials[2], delay: 0.08, offsetTop: 0 },
    { t: testimonials[3], delay: 0.12, offsetTop: 0 },
    { t: testimonials[6], delay: 0.15, offsetTop: 0 },
    { t: testimonials[7], delay: 0.17, offsetTop: 0 },
    { t: testimonials[9], delay: 0.20, offsetTop: 0 },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 md:py-28">
      <GridPatternBg />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[640px] w-[640px] rounded-full bg-emerald-600/5 blur-[140px]" />
      </div>

      <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-linear-to-b from-zinc-950 to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-zinc-950 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-zinc-950 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-zinc-950 to-transparent z-20" />
      <div className="relative z-10 hidden lg:flex items-center gap-6 mx-auto px-8" style={{ maxWidth: "1400px" }}>
        <div className="flex-1 min-w-0">
          <ScatteredColumn cards={leftCards} side="left" />
        </div>
        <div className="shrink-0 flex items-center justify-center" style={{ width: "360px" }}>
          <CenterPiece />
        </div>
        <div className="flex-1 min-w-0">
          <ScatteredColumn cards={rightCards} side="right" />
        </div>
      </div>
      <div className="relative z-10 lg:hidden px-4 flex flex-col gap-8">
        <CenterPiece />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}