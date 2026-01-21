import { Zap, Trophy, Rocket } from "lucide-react";

export type GameProduct = {
  id: string;
  title: string;
  price: string;
  ram: string;
  cpu: string;
  storage: string;
  slots: string;
  recommended: string;
  billingUrl: string;
};

export type TierData = {
  label: string;
  desc: string;
  icon: any; // React Node
  color: string;
  games: GameProduct[];
};

export const tiers: Record<string, TierData> = {
  core: {
    label: "Core",
    desc: "Ekonomis & Stabil (Start Rp 15rb/GB)",
    icon: Zap,
    color: "from-emerald-400 to-green-600",
    games: [
      { id: "c1", title: "Core Iron", price: "Rp 15.000", ram: "1GB", cpu: "100% vCPU", storage: "5GB NVMe", slots: "Unltd", recommended: "Proxy / Bungeecord", billingUrl: "#" },
      { id: "c2", title: "Core Bronze", price: "Rp 30.000", ram: "2GB", cpu: "150% vCPU", storage: "10GB NVMe", slots: "Unltd", recommended: "Survival Mabar (2-3 Org)", billingUrl: "#" },
      { id: "c3", title: "Core Silver", price: "Rp 60.000", ram: "4GB", cpu: "200% vCPU", storage: "20GB NVMe", slots: "Unltd", recommended: "PaperMC / Vanilla SMP", billingUrl: "#" },
      { id: "c4", title: "Core Gold", price: "Rp 90.000", ram: "6GB", cpu: "250% vCPU", storage: "30GB NVMe", slots: "Unltd", recommended: "Modpack Ringan / Plugin", billingUrl: "#" },
      { id: "c5", title: "Core Platinum", price: "Rp 120.000", ram: "8GB", cpu: "300% vCPU", storage: "40GB NVMe", slots: "Unltd", recommended: "Server Komunitas", billingUrl: "#" },
      { id: "c6", title: "Core Diamond", price: "Rp 180.000", ram: "12GB", cpu: "350% vCPU", storage: "60GB NVMe", slots: "Unltd", recommended: "Network Hub Kecil", billingUrl: "#" },
      { id: "c7", title: "Core Bedrock", price: "Rp 240.000", ram: "16GB", cpu: "400% vCPU", storage: "80GB NVMe", slots: "Unltd", recommended: "Heavy Storage Server", billingUrl: "#" },
    ]
  },
  flux: {
    label: "Flux",
    desc: "High Performance (Start Rp 20rb/GB)",
    icon: Trophy,
    color: "from-sky-400 to-blue-600",
    games: [
      { id: "f1", title: "Flux Spark", price: "Rp 40.000", ram: "2GB", cpu: "2 vCPU High-Freq", storage: "15GB NVMe", slots: "Unltd", recommended: "Private SMP Lancar", billingUrl: "#" },
      { id: "f2", title: "Flux Volt", price: "Rp 80.000", ram: "4GB", cpu: "3 vCPU High-Freq", storage: "25GB NVMe", slots: "Unltd", recommended: "Bedwars / Skywars", billingUrl: "#" },
      { id: "f3", title: "Flux Ampere", price: "Rp 120.000", ram: "6GB", cpu: "4 vCPU High-Freq", storage: "35GB NVMe", slots: "Unltd", recommended: "Pixelmon / Mod Berat", billingUrl: "#" },
      { id: "f4", title: "Flux Watt", price: "Rp 160.000", ram: "8GB", cpu: "4 vCPU High-Freq", storage: "50GB NVMe", slots: "Unltd", recommended: "Genshin MC / RPG", billingUrl: "#" },
      { id: "f5", title: "Flux Surge", price: "Rp 240.000", ram: "12GB", cpu: "6 vCPU High-Freq", storage: "70GB NVMe", slots: "Unltd", recommended: "Public SMP Ramai", billingUrl: "#" },
      { id: "f6", title: "Flux Fusion", price: "Rp 320.000", ram: "16GB", cpu: "8 vCPU High-Freq", storage: "100GB NVMe", slots: "Unltd", recommended: "Tournament Event", billingUrl: "#" },
    ]
  },
  atlas: {
    label: "Atlas",
    desc: "Extreme Dedicated (Start Rp 30rb/GB)",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    games: [
      { id: "a1", title: "Atlas Titan", price: "Rp 120.000", ram: "4GB", cpu: "2 Core Dedicated", storage: "40GB NVMe", slots: "Unltd", recommended: "Esport / Competitive", billingUrl: "#" },
      { id: "a2", title: "Atlas Helios", price: "Rp 180.000", ram: "6GB", cpu: "3 Core Dedicated", storage: "60GB NVMe", slots: "Unltd", recommended: "Heavy Modpack + Shaders", billingUrl: "#" },
      { id: "a3", title: "Atlas Kronos", price: "Rp 240.000", ram: "8GB", cpu: "4 Core Dedicated", storage: "80GB NVMe", slots: "Unltd", recommended: "FiveM Starter / GTA", billingUrl: "#" },
      { id: "a4", title: "Atlas Olympus", price: "Rp 360.000", ram: "12GB", cpu: "6 Core Dedicated", storage: "120GB NVMe", slots: "Unltd", recommended: "Large Roleplay Server", billingUrl: "#" },
      { id: "a5", title: "Atlas Zenith", price: "Rp 480.000", ram: "16GB", cpu: "8 Core Dedicated", storage: "160GB NVMe", slots: "Unltd", recommended: "Enterprise / Network", billingUrl: "#" },
    ]
  }
};