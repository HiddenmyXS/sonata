"use client";

import Link from "next/link";
import Image from "next/image";
import {  
  Github, 
  Youtube, 
  Linkedin,
  ArrowRight,
  Instagram
} from "lucide-react";

// --- CONFIG LINKS ---
const productLinks = [
  { name: "Game Hosting", href: "/game-host" },
  { name: "App Hosting", href: "/app-host" },
  { name: "VPS Hosting", href: "/vps" },
  { name: "Private Node", href: "/private-node" }
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Status Page", href: "/status" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Support", href: "/support" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/support/legal" },
  { name: "Terms of Service", href: "/support/legal" },
  { name: "Cookie Policy", href: "/support/legal" },
  { name: "Service Level Agreement (SLA)", href: "/support/legal" },
];

const paymentMethods = [
    { name: "QRIS", src: "/aset/images/icons/methods/qris.svg" },
    { name: "Visa", src: "/aset/images/icons/methods/visa.svg" },
    { name: "Mastercard", src: "/aset/images/icons/methods/mastercard.svg" },
    { name: "Dana", src: "/aset/images/icons/methods/dana.svg" },
    { name: "OVO", src: "/aset/images/icons/methods/ovo.svg" },
    { name: "BCA", src: "/aset/images/icons/methods/bca.svg" },
    { name: "GoPay", src: "/aset/images/icons/methods/gopay.svg" },
    { name: "ShopeePay", src: "/aset/images/icons/methods/spay.svg" },
    { name: "Indomaret", src: "/aset/images/icons/methods/indomaret.svg" },
    { name: "Alfamart", src: "/aset/images/icons/methods/alfamart.svg" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 pt-20 pb-10 px-8 relative overflow-hidden border-t border-gray-900 font-sans">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
        
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 w-fit group">
               <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                  <Image src="/aset/logo/logo.png" alt="ZeroCloud Logo" fill className="object-contain" />
               </div>
               <h4 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-sky-400 transition-colors">ZeroCloud.id</h4>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium hosting solutions for next-generation applications and games. Built for speed, security, and stability in Indonesia.
            </p>
            
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 w-fit backdrop-blur-sm">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-xs font-bold text-gray-300">All Systems Operational</span>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-2 hover:text-sky-400 transition-all duration-200 w-fit">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-sky-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-2 hover:text-sky-400 transition-all duration-200 w-fit">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-sky-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-gray-200 hover:underline decoration-gray-700 underline-offset-4 transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900/50 flex flex-col gap-8">
            
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 pb-8 border-b border-gray-900/50">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden lg:block">Accepted Payments</span>
                <div className="flex flex-wrap justify-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {paymentMethods.map((method) => (
                        <div key={method.name} className="relative h-6 w-10 md:h-8 md:w-14" title={method.name}>
                            <Image 
                                src={method.src} 
                                alt={method.name} 
                                fill 
                                className="object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} ZeroCloud Indonesia. All rights reserved.</p>
                
                <div className="flex gap-4">
                    <SocialLink href="https://github.com/zerocloud" icon={<Github className="w-4 h-4" />} label="Github" />
                    <SocialLink href="https://youtube.com/@zerocloud" icon={<Youtube className="w-4 h-4" />} label="Youtube" />
                    <SocialLink href="https://linkedin.com/company/zerocloud" icon={<Linkedin className="w-4 h-4" />} label="Linkedin" />
                    <SocialLink href="https://instagram.com/zerocloud" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <Link 
    href={href} 
    target="_blank"
    aria-label={label}
    className="p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-700 transition-all duration-300"
  >
    {icon}
  </Link>
);

export default Footer;