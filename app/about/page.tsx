"use client";

import Header from "../component/Head"; // Pastikan path ini sesuai
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { NumberTicker } from "@/components/ui/number-ticker"; // Asumsi komponen MagicUI
import { TextAnimate } from "@/components/ui/text-animate"; // Asumsi komponen MagicUI
import { OrbitingCircles } from "@/components/ui/orbiting-circles"; // Asumsi komponen MagicUI
import { 
  Server, 
  Globe2, 
  Cpu, 
  Code2, 
  Shield, 
  Rocket,
  HeartHandshake
} from "lucide-react";

// Variabel animasi standar untuk konsistensi
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-950 z-0" />
      <Particles 
        className="absolute inset-0 z-0 animate-fade-in" 
        quantity={80} 
        ease={80} 
        color="#ffffff" 
        refresh 
      />

      {/* --- Header --- */}
      <div className="relative z-50 w-full flex justify-center pt-8">
        <Header />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 w-full max-w-7xl px-4 pt-20 pb-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400 backdrop-blur-md">
            <span>Tentang Sonata Inc.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-400 drop-shadow-2xl leading-tight tracking-tight max-w-5xl">
            <TextAnimate animation="slideUp" by="word">Kami Membawa</TextAnimate>
            <TextAnimate animation="slideUp" by="word"> ke Level Berikutnya</TextAnimate>
          </h1>
          <p className="max-w-2xl text-zinc-400">
            <TextAnimate animation="fadeIn" delay={0.3}>
              Di Sonata, kami percaya bahwa pengalaman gaming terbaik dimulai dari infrastruktur yang andal dan inovatif. 
              Pelajari bagaimana misi kami untuk menghilangkan lag dan downtime mengubah cara gamers di seluruh dunia bermain.
            </TextAnimate>
          </p>

        </motion.div>
      </section>

      {/* --- Stats Section (MagicUI Number Ticker) --- */}
      <section className="relative z-10 w-full border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Server Deployed", value: 15000, suffix: "+" },
              { label: "Uptime Guarantee", value: 99.9, suffix: "%" },
              { label: "Active Gamers", value: 50000, suffix: "+" },
              { label: "Support Response", value: 5, suffix: "m" }, // 5 menit
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white flex items-baseline">
                  <NumberTicker value={stat.value} className="text-white tracking-tighter" />
                  <span className="text-blue-500 ml-1">{stat.suffix}</span>
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Mission & Vision (Split Layout) --- */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Misi Kami: <span className="text-blue-500">Zero Lag.</span>
            </h2>
            <div className="space-y-6 text-zinc-400">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 h-fit">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Inovasi Tanpa Henti</h3>
                  <p>Kami terus memperbarui hardware kami ke generasi terbaru (Ryzen 9 & NVMe Gen 4) untuk memastikan performa maksimal.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 h-fit">
                  <HeartHandshake className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Komunitas Didahulukan</h3>
                  <p>Keuntungan kami diinvestasikan kembali untuk pengembangan fitur komunitas dan perlindungan DDoS yang lebih kuat.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Tech Stack (Orbiting Circles) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10"
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Tech
            </span>
            
            {/* Inner Circle */}
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={80}
            >
              <Server className="text-blue-400" />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={80}
            >
              <Cpu className="text-purple-400" />
            </OrbitingCircles>

            {/* Outer Circle */}
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              reverse
            >
              <Shield className="text-green-400" />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              delay={20}
              reverse
            >
              <Globe2 className="text-orange-400" />
            </OrbitingCircles>
             <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              delay={10}
              reverse
            >
              <Code2 className="text-white" />
            </OrbitingCircles>
          </motion.div>
        </div>
      </section>

      {/* --- Team/Culture Section --- */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tim di Balik Layar</h2>
          <p className="text-zinc-400">Dibangun oleh gamers, untuk gamers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-6 transition-all hover:bg-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600" />
                    <div>
                        <h3 className="text-lg font-bold text-white">Alex Sterling</h3>
                        <p className="text-blue-400 text-sm">Founder & CEO</p>
                    </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    &ldquo;Visi saya sederhana: Menciptakan lingkungan di mana latensi bukan lagi alasan kekalahan dalam kompetisi gaming.&rdquo;
                </p>
            </div>

             {/* Team Card 2 */}
             <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-6 transition-all hover:bg-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-teal-600" />
                    <div>
                        <h3 className="text-lg font-bold text-white">Sarah Jenkins</h3>
                        <p className="text-green-400 text-sm">Head of Infrastructure</p>
                    </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    &ldquo;Keamanan dan stabilitas adalah prioritas. Sistem anti-DDoS kami dirancang custom untuk menahan serangan layer 7.&rdquo;
                </p>
            </div>

             <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-6 transition-all hover:bg-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-orange-500 to-red-600" />
                    <div>
                        <h3 className="text-lg font-bold text-white">David Chen</h3>
                        <p className="text-orange-400 text-sm">Lead Developer</p>
                    </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    &ldquo;Panel kontrol Sonata dibuat agar semudah mungkin digunakan, namun tetap powerful untuk power users.&rdquo;
                </p>
            </div>
        </div>
      </section>

      {/* --- Simple CTA --- */}
      <section className="w-full py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-6">Siap bergabung dengan revolusi?</h2>
            <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                Lihat Paket Server
            </button>
          </div>
      </section>

      {/* Gunakan Footer yang sama dengan Home */}
      <footer className="w-full py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-zinc-950">
        <p>&copy; 2024 Sonata Inc.</p>
      </footer>
    </main>
  );
}