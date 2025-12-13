"use client";

import Link from "next/link";

const FooterCompoenent = () => {
  return (
    <footer className="w-full py-12 px-4 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
                <h4 className="text-xl font-bold text-white mb-4">Sonata</h4>
                <p className="text-zinc-500 text-sm">Premium hosting solutions for next-generation applications and games.</p>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Game Host</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">VPS</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">DDoS Protection</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
            <p>&copy; 2024 Sonata Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                {/* Social icons placeholder */}
                <span>Twitter</span>
                <span>GitHub</span>
                <span>Discord</span>
            </div>
        </div>
      </footer>
    );
};

export default FooterCompoenent;
        
