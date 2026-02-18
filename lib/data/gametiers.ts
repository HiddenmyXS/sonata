import { Zap, Trophy, Rocket, Cpu } from "lucide-react";

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
  icon: any;
  color: string;
  cpuDetail: string;
  ghz: string;
  badge?: string;
  games: GameProduct[];
};

export const tiers: Record<string, TierData> = {
  core: {
    label: "Core",
    desc: "Ekonomis & Stabil (Start Rp 15rb/GB)",
    icon: Zap,
    color: "from-emerald-400 to-green-600",
    cpuDetail: "Intel® Xeon® E-2136",
    ghz: "3.30 GHz / 4.50 GHz Turbo",
    games: [
      { id: "c1", title: "Core Entry", price: "Rp 15.000", ram: "1GB", cpu: "1 vCPU", storage: "5GB NVMe", slots: "Unltd", recommended: "Proxy / Bungeecord", billingUrl: "https://my.zerocloud.id/products/core/core-1" },
      { id: "c2", title: "Core Basic", price: "Rp 30.000", ram: "2GB", cpu: "2 vCPU", storage: "10GB NVMe", slots: "Unltd", recommended: "Vanilla Survival (2-5 Org)", billingUrl: "https://my.zerocloud.id/products/core/core-2" },
      { id: "c3", title: "Core Standart", price: "Rp 60.000", ram: "4GB", cpu: "3 vCPU", storage: "15GB NVMe", slots: "Unltd", recommended: "Minecraft SMP", billingUrl: "https://my.zerocloud.id/products/core/core-3" },
      { id: "c4", title: "Core Advanced", price: "Rp 90.000", ram: "6GB", cpu: "3 vCPU", storage: "20GB NVMe", slots: "Unltd", recommended: "Modpack Ringan / Plugin", billingUrl: "https://my.zerocloud.id/products/core/core-4" },
      { id: "c5", title: "Core Pro", price: "Rp 120.000", ram: "8GB", cpu: "4 vCPU", storage: "30GB NVMe", slots: "Unltd", recommended: "Server Komunitas", billingUrl: "https://my.zerocloud.id/products/core/core-5" },
      { id: "c6", title: "Core Plus", price: "Rp 180.000", ram: "12GB", cpu: "4 vCPU", storage: "40GB NVMe", slots: "Unltd", recommended: "Server Bebas", billingUrl: "https://my.zerocloud.id/products/core/core-6" },
    ]
  },
  flux: {
    label: "Flux",
    desc: "High Performance (Start Rp 20rb/GB)",
    icon: Trophy,
    color: "from-purple-400 to-indigo-600",
    cpuDetail: "AMD Ryzen™ 5 4500",
    ghz: "3.60 GHz / 4.10 GHz Turbo",
    badge: "SOON",
    games: [
      { id: "f1", title: "Flux Entry", price: "Rp 40.000", ram: "2GB", cpu: "2 vCPU High-Freq", storage: "15GB NVMe", slots: "Unltd", recommended: "Proxy / Bungeecord", billingUrl: "https://my.zerocloud.id/products/flux/flux-1" },
      { id: "f2", title: "Flux Basic", price: "Rp 80.000", ram: "4GB", cpu: "3 vCPU High-Freq", storage: "25GB NVMe", slots: "Unltd", recommended: "Vanilla Survival", billingUrl: "https://my.zerocloud.id/products/flux/flux-2" },
      { id: "f3", title: "Flux Standart", price: "Rp 120.000", ram: "6GB", cpu: "4 vCPU High-Freq", storage: "35GB NVMe", slots: "Unltd", recommended: "Modded SMP / RPG", billingUrl: "https://my.zerocloud.id/products/flux/flux-3" },
      { id: "f4", title: "Flux Advanced", price: "Rp 160.000", ram: "8GB", cpu: "4 vCPU High-Freq", storage: "50GB NVMe", slots: "Unltd", recommended: "Genshin MC / RPG", billingUrl: "https://my.zerocloud.id/products/flux/flux-4" },
      { id: "f5", title: "Flux Pro", price: "Rp 240.000", ram: "12GB", cpu: "6 vCPU High-Freq", storage: "70GB NVMe", slots: "Unltd", recommended: "Public SMP Ramai", billingUrl: "https://my.zerocloud.id/products/flux/flux-5" },
      { id: "f6", title: "Flux Plus", price: "Rp 320.000", ram: "16GB", cpu: "8 vCPU High-Freq", storage: "100GB NVMe", slots: "Unltd", recommended: "Event Server", billingUrl: "https://my.zerocloud.id/products/flux/flux-6" },
    ]
  },
  atlas: {
    label: "Atlas",
    desc: "Extreme Dedicated (Start Rp 30rb/GB)",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    cpuDetail: "Intel® Core™ i7-13700F",
    ghz: "Up to 5.20 GHz Turbo",
    badge: "SOON",
    games: [
      { id: "a1", title: "Atlas Entry", price: "Rp 120.000", ram: "4GB", cpu: "2 Core Dedicated", storage: "40GB NVMe", slots: "Unltd", recommended: "Vanilla Survival", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-1" },
      { id: "a2", title: "Atlas Basic", price: "Rp 180.000", ram: "6GB", cpu: "3 Core Dedicated", storage: "60GB NVMe", slots: "Unltd", recommended: "Modpack + Shaders", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-2" },
      { id: "a3", title: "Atlas Standart", price: "Rp 240.000", ram: "8GB", cpu: "4 Core Dedicated", storage: "80GB NVMe", slots: "Unltd", recommended: "Modded SMP", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-3" },
      { id: "a4", title: "Atlas Plus", price: "Rp 360.000", ram: "12GB", cpu: "6 Core Dedicated", storage: "120GB NVMe", slots: "Unltd", recommended: "Large Roleplay Server", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-4" },
      { id: "a5", title: "Atlas Pro", price: "Rp 480.000", ram: "16GB", cpu: "8 Core Dedicated", storage: "160GB NVMe", slots: "Unltd", recommended: "", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-5" },
      { id: "a6", title: "Atlas Advanced", price: "Rp 960.000", ram: "32GB", cpu: "8 Core Dedicated", storage: "250GB NVMe", slots: "Unltd", recommended: "Megaserver", billingUrl: "https://my.zerocloud.id/products/atlas/atlas-6" },
    ]
  }
};