"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { 
  Server, 
  Globe2, 
  Cpu, 
  Code2, 
  Shield, 
  Users,
  Trophy,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { NumberTicker } from "@/components/ui/number-ticker"; 
import { OrbitingCircles } from "@/components/ui/orbiting-circles"; 
import { LightRays } from "@/components/ui/light-rays";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const teamMembers = [
  {
    name: "Darren Suharko",
    role: "Founder & CEO",
    bio: "Visioner dan pemimpin yang mengarahkan visi ZeroCloud menuju masa depan infrastruktur digital.",
    image: "https://avatar.vercel.sh/darren",
    gradient: "from-blue-500 to-sky-500"
  },
  {
    name: "Azka Attariq",
    role: "Head of Infrastructure",
    bio: "Arsitek di balik sistem Infrastruktur ZeroCloud yang scalable dan andal.",
    image: "https://avatar.vercel.sh/azka",
    gradient: "from-blue-500 to-sky-500"
  },
  {
    name: "Dhiya Altamis",
    role: "Lead Developer",
    bio: "Full-stack wizard yang membangun panel kontrol ZeroCloud agar intuitif namun powerful.",
    image: "https://avatar.vercel.sh/dhiya",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Derion",
    role: "Developer",
    bio: "Bot developer andal yang memastikan ekosistem ZeroCloud selalu terotomatisasi dan efisien.",
    image: "https://avatar.vercel.sh/derion",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="flex flex-col items-center w-full min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-sky-500/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
         <LightRays className="opacity-40 text-sky-500" />
         
         <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "mask-[radial-gradient(900px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
         />
         
         <div className="absolute inset-0 bg-linear-to-b from-gray-950/20 via-gray-950/80 to-gray-950" />
      </div>

      <section className="relative z-10 w-full max-w-7xl px-4 pt-32 pb-20 text-center">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.2)]">
            <Trophy className="w-4 h-4" />
            <span>Market Leader in Performance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gray-500 drop-shadow-2xl leading-[1.1] tracking-tight max-w-5xl">
            We Are <span className="text-sky-500">ZeroCloud</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            Membangun infrastruktur masa depan untuk gamers, developers, dan visioner. 
            Tanpa kompromi, tanpa batas.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-2xl">
            {[
              { label: "Active Servers", value: 150, suffix: "+" },
              { label: "Uptime SLA", value: 99, suffix: "%" },
              { label: "Community", value: 100, suffix: "+" },
              { label: "Support", value: 24, suffix: "/7" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white flex items-baseline">
                  <NumberTicker value={stat.value} className="text-white tracking-tighter" />
                  <span className="text-sky-500 ml-1 text-2xl">{stat.suffix}</span>
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-7xl px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Obsesi Kami Pada <br/>
              <span className="text-sky-500">Performa Absolut.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
                Di ZeroCloud, &quot;cukup bagus&ldquo; tidak pernah cukup. Kami menggabungkan hardware enterprise terbaru dengan software optimasi custom untuk memangkas setiap milidetik latensi.
            </p>

            <div className="grid grid-cols-1 gap-4">
               <div className="flex gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-sky-500/30 transition-colors">
                  <div className="p-3 bg-sky-500/10 rounded-xl h-fit">
                     <Target className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                     <h3 className="font-bold text-white mb-1">Precision Engineering</h3>
                     <p className="text-sm text-gray-400">Setiap node server dituning manual untuk beban kerja gaming spesifik.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-sky-500/30 transition-colors">
                  <div className="p-3 bg-purple-500/10 rounded-xl h-fit">
                     <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                     <h3 className="font-bold text-white mb-1">Ironclad Security</h3>
                     <p className="text-sm text-gray-400">Layer proteksi berlapis yang mendeteksi serangan sebelum mencapai server Anda.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-gray-950 border border-gray-800 backdrop-blur-sm shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />
            
            <div className="absolute size-40 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute size-[280px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute size-[420px] rounded-full border border-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
               <div className="size-24 rounded-full bg-gray-900 border border-sky-500/30 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(14,165,233,0.4)]">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">
                    <Image
                      src="/aset/logo/logo.png"
                      alt="ZeroCloud Logo"
                      width={80}
                      height={80}
                      priority
                      className="rounded-4xl"
                    >
                    </Image>
                  </span>
               </div>
            </div>
            
            <OrbitingCircles 
                className="size-10 border-none bg-transparent" 
                duration={20} 
                delay={0} 
                radius={80}
            >
                <div className="p-2 bg-gray-900/90 border border-sky-500/30 rounded-lg shadow-lg">
                    <Server className="text-sky-400 w-5 h-5" />
                </div>
            </OrbitingCircles>
            <OrbitingCircles 
                className="size-10 border-none bg-transparent" 
                duration={20} 
                delay={10} 
                radius={80}
            >
                <div className="p-2 bg-gray-900/90 border border-sky-500/30 rounded-lg shadow-lg">
                    <Cpu className="text-blue-400 w-5 h-5" />
                </div>
            </OrbitingCircles>

            <OrbitingCircles 
                className="size-[50px] border-none bg-transparent" 
                radius={140} 
                duration={30} 
                reverse
            >
                <div className="p-2.5 bg-gray-900/90 border border-purple-500/30 rounded-xl shadow-lg">
                    <Shield className="text-purple-400 w-6 h-6" />
                </div>
            </OrbitingCircles>
            <OrbitingCircles 
                className="size-[50px] border-none bg-transparent" 
                radius={140} 
                duration={30} 
                delay={15} 
                reverse
            >
                <div className="p-2.5 bg-gray-900/90 border border-purple-500/30 rounded-xl shadow-lg">
                    <Code2 className="text-pink-400 w-6 h-6" />
                </div>
            </OrbitingCircles>

            <OrbitingCircles 
                className="size-[60px] border-none bg-transparent" 
                radius={210} 
                duration={45} 
                delay={0}
                reverse
            >
                <div className="p-3 bg-gray-900/90 border border-green-500/30 rounded-2xl shadow-lg">
                    <Globe2 className="text-green-400 w-7 h-7" />
                </div>
            </OrbitingCircles>
             <OrbitingCircles 
                className="size-[60px] border-none bg-transparent" 
                radius={210} 
                duration={45} 
                delay={15}
            >
                <div className="p-3 bg-gray-900/90 border border-orange-500/30 rounded-2xl shadow-lg">
                    <Target className="text-orange-400 w-7 h-7" />
                </div>
            </OrbitingCircles>
             <OrbitingCircles 
                className="size-[60px] border-none bg-transparent" 
                radius={210} 
                duration={45} 
                delay={30}
            >
                <div className="p-3 bg-gray-900/90 border border-white/20 rounded-2xl shadow-lg">
                    <Trophy className="text-white w-7 h-7" />
                </div>
            </OrbitingCircles>

          </motion.div>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-7xl px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.2)] mb-2">
             <Users className="w-3 h-3" />
             <span>The Squad</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Brains Behind the Cloud</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tim kecil dengan mimpi besar. Kami adalah gabungan dari system administrators, developers, dan hardcore gamers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative rounded-3xl bg-gray-900/40 border border-gray-800 p-1 overflow-hidden transition-all hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2"
                >
                    <div className="relative bg-gray-950/50 rounded-[1.3rem] p-6 h-full flex flex-col items-center text-center backdrop-blur-sm overflow-hidden">
                        
                        <div className={`absolute top-0 inset-x-0 h-[150px] bg-linear-to-b ${member.gradient} opacity-20 blur-3xl rounded-full -translate-y-1/2 group-hover:opacity-30 transition-opacity`} />

                        <div className="relative mb-6">
                            <div className={`absolute inset-0 bg-linear-to-br ${member.gradient} rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity`} />
                            <div className="relative w-24 h-24 rounded-full border-2 border-gray-800 overflow-hidden bg-gray-900 group-hover:border-white/20 transition-colors">
                                <Image 
                                    src={member.image} 
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className={`text-sm font-medium bg-linear-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                            {member.role}
                        </p>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            &ldquo;{member.bio}&rdquo;
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    </main>
  );
}