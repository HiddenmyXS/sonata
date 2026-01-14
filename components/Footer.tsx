"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Gamepad2, 
  Twitter, 
  Github, 
  Youtube, 
  Linkedin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 pt-16 pb-8 relative overflow-hidden border-t border-gray-900">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div>
                  <Image src="/aset/logo/logo.png" alt="ZeroCloud Logo" width={33} height={33} />
               </div>
               <h4 className="text-2xl font-extrabold text-white tracking-tight">ZeroCloud</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium hosting solutions for next-generation applications and games. Built for speed, security, and stability.
            </p>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 w-fit">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-xs font-medium text-gray-300">All Systems Operational</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Game Host', 'App Hosting', 'VPS Cloud', 'DDoS Protection', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center gap-2 hover:text-sky-400 transition-all duration-200">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center gap-2 hover:text-sky-400 transition-all duration-200">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'SLA'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ZeroCloud Indonesia. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;