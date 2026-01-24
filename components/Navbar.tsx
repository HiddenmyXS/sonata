"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Gamepad, 
  Home, 
  List, 
  Headset, 
  Pyramid, 
  Server, 
  Code, 
  Container, 
  Gamepad2,
  ChevronDown,
  Menu,
  X,
  Palette,
  Briefcase,
  Book,
  Activity,
  Scale,
  Newspaper,
  Library
} from "lucide-react";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownProps = {
    label: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

const DropdownMenu: React.FC<DropdownProps> = ({ label, icon, children, footer }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

    useEffect(() => {
        const handleDocClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handleClose();
            }
        };
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };

        document.addEventListener("mousedown", handleDocClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleDocClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleClose]);

    return (
        <div 
            className="relative" 
            ref={ref}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                onClick={handleToggle}
                className={`group flex items-center text-sm font-medium gap-1.5 px-3 py-2 rounded-full transition-all duration-200 ${
                    open ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
                {icon}
                <span>{label}</span>
                <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-300 text-gray-500 group-hover:text-gray-300 ${open ? "rotate-180" : ""}`} 
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 
                                   bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/50
                                   border border-gray-800 rounded-2xl overflow-hidden z-50 p-1.5"
                    >
                        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                        <div className="flex flex-col gap-1">
                            {children}
                        </div>
                        {footer && (
                            <div className="mt-2 pt-2 border-t border-gray-800/50">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

type DropdownItemProps = {
    href: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    colorClass?: string;
    onClick?: () => void;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ href, icon, title, desc, colorClass = "text-sky-500 group-hover:bg-sky-500/10 border-gray-800 group-hover:border-sky-500/20", onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="group relative flex items-start gap-3 p-3 rounded-xl hover:bg-gray-900 transition-all duration-200"
    >
        <span className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 border transition-all ${colorClass}`}>
            {icon}
        </span>
        <div className="flex-1 min-w-0 pt-0.5">
            <span className="block text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                {title}
            </span>
            <p className="text-xs text-gray-500 group-hover:text-gray-400 mt-0.5 line-clamp-1">
                {desc}
            </p>
        </div>
    </Link>
);

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }, [mobileMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4">
                <div className="flex items-center justify-between w-full max-w-6xl h-14 px-4 
                              bg-gray-950/60 backdrop-blur-md shadow-lg shadow-black/20 
                              border border-white/10 rounded-full transition-all duration-300 relative z-50">
                    
                    <div className="flex items-center gap-6">
                        <Link href="/home" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                className="object-contain"
                                src="/aset/logo/logo.png"
                                alt="ZeroCloud"
                                width={32}
                                height={32}
                                priority
                            />
                            <h1 className="text-base font-extrabold text-white tracking-wide group-hover:text-sky-200 transition-colors">
                                ZeroCloud.id
                            </h1>
                        </Link>

                        <div className="hidden md:block w-px h-5 bg-white/10" />
                        
                        <nav className="hidden md:flex items-center gap-1">
                            <Link href="/home" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </Link>
                            
                            <DropdownMenu label="Products" icon={<List className="w-4 h-4" />}>
                                <DropdownItem href="/game-host" icon={<Gamepad2 className="w-5 h-5" />} title="Game Host" desc="High performance game servers." />
                                <DropdownItem href="/app-host" icon={<Code className="w-5 h-5" />} title="App Host" desc="Deploy apps in seconds." />
                                <DropdownItem href="/private-node" icon={<Server className="w-5 h-5" />} title="Private Node" desc="Full dedicated control." />
                                <DropdownItem href="/vps" icon={<Container className="w-5 h-5" />} title="VPS" desc="Scalable virtual servers." />
                            </DropdownMenu>

                            <DropdownMenu 
                                label="Services" 
                                icon={<Briefcase className="w-4 h-4" />}
                                footer={
                                    <div className="flex items-center justify-center gap-1.5 px-2 py-1">
                                        <span className="text-[10px] text-gray-500 font-medium">Powered by</span>
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400">
                                            ZAQUA STUDIO
                                        </div>
                                    </div>
                                }
                            >
                                <DropdownItem href="/services/web-dev" icon={<Code className="w-5 h-5" />} title="Web Development" desc="Custom websites & web apps." colorClass="text-amber-400 group-hover:bg-amber-500/10 border-gray-800 group-hover:border-amber-500/20"/>
                                <DropdownItem href="/services/web-design" icon={<Palette className="w-5 h-5" />} title="Web Design" desc="UI/UX & Graphic Design." colorClass="text-amber-400 group-hover:bg-amber-500/10 border-gray-800 group-hover:border-amber-500/20"/>
                            </DropdownMenu>

                            <DropdownMenu label="Resources" icon={<Library className="w-4 h-4" />}>
                                <DropdownItem 
                                    href="/support/legal" 
                                    icon={<Scale className="w-5 h-5" />} 
                                    title="Legal Center" 
                                    desc="ToS, Privacy, SLA & Policies." 
                                />
                                <DropdownItem 
                                    href="/docs" 
                                    icon={<Book className="w-5 h-5" />} 
                                    title="Documentation" 
                                    desc="Guides & Tutorials." 
                                />
                                <DropdownItem 
                                    href="/status" 
                                    icon={<Activity className="w-5 h-5" />} 
                                    title="Status Page" 
                                    desc="Real-time uptime monitor." 
                                />
                                <DropdownItem 
                                    href="/blog" 
                                    icon={<Newspaper className="w-5 h-5" />} 
                                    title="Blog" 
                                    desc="Latest news & updates." 
                                />
                            </DropdownMenu>

                            <Link href="/support" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                                <Headset className="w-4 h-4" />
                                <span>Support</span>
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="https://ctrl.zerocloud.id"
                            target="_blank"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:text-white hover:bg-gray-800 transition-all"
                        >
                            <Gamepad className="w-3.5 h-3.5" />
                            <span>Panel</span>
                        </Link>

                        <Link
                            href="https://my.zerocloud.id"
                            target="_blank"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 border border-sky-500/50 shadow-lg shadow-sky-900/20 transition-all"
                        >
                            <Pyramid className="w-3.5 h-3.5" />
                            <span>Client Area</span>
                        </Link>

                        <button 
                            className="md:hidden p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-2">
                            <Link href="/home" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-4 text-lg font-medium text-gray-200 bg-gray-900/50 border border-gray-800 rounded-2xl active:bg-gray-800">
                                <Home className="w-5 h-5 text-sky-500" /> Home
                            </Link>

                            <div className="flex flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                                <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-200 active:bg-gray-800">
                                    <div className="flex items-center gap-3"><List className="w-5 h-5 text-sky-500" /> Products</div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileProductsOpen && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-gray-950/30 border-t border-gray-800">
                                            <div className="flex flex-col p-2 gap-1">
                                                <DropdownItem href="/game-host" icon={<Gamepad2 className="w-5 h-5" />} title="Game Host" desc="High performance game servers." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/app-host" icon={<Code className="w-5 h-5" />} title="App Host" desc="Deploy apps in seconds." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/private-node" icon={<Server className="w-5 h-5" />} title="Private Node" desc="Full dedicated control." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/vps" icon={<Container className="w-5 h-5" />} title="VPS" desc="Scalable virtual servers." onClick={() => setMobileMenuOpen(false)} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-200 active:bg-gray-800">
                                    <div className="flex items-center gap-3"><Briefcase className="w-5 h-5 text-amber-400" /> Services</div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileServicesOpen && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-gray-950/30 border-t border-gray-800">
                                            <div className="flex flex-col p-2 gap-1">
                                                <DropdownItem href="/services/web-dev" icon={<Code className="w-5 h-5" />} title="Web Development" desc="Custom websites & web apps." colorClass="text-amber-400 border-gray-800" onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/services/web-design" icon={<Palette className="w-5 h-5" />} title="Web Design" desc="UI/UX & Graphic Design." colorClass="text-amber-400 border-gray-800" onClick={() => setMobileMenuOpen(false)} />
                                                <div className="px-4 py-2 text-[10px] text-gray-500 font-medium text-center">Powered by ZAQUA STUDIO</div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                                <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-200 active:bg-gray-800">
                                    <div className="flex items-center gap-3"><Library className="w-5 h-5 text-sky-500" /> Resources</div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileResourcesOpen && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-gray-950/30 border-t border-gray-800">
                                            <div className="flex flex-col p-2 gap-1">
                                                <DropdownItem href="/support/legal" icon={<Scale className="w-5 h-5" />} title="Legal Center" desc="ToS, Privacy, SLA & Policies." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/docs" icon={<Book className="w-5 h-5" />} title="Documentation" desc="Guides & Tutorials." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/status" icon={<Activity className="w-5 h-5" />} title="Status Page" desc="Real-time uptime monitor." onClick={() => setMobileMenuOpen(false)} />
                                                <DropdownItem href="/blog" icon={<Newspaper className="w-5 h-5" />} title="Blog" desc="Latest news & updates." onClick={() => setMobileMenuOpen(false)} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-4 text-lg font-medium text-gray-200 bg-gray-900/50 border border-gray-800 rounded-2xl active:bg-gray-800">
                                <Headset className="w-5 h-5 text-sky-500" /> Support
                            </Link>

                            <div className="w-full h-px bg-gray-800 my-4" />
                            <div className="grid grid-cols-2 gap-3">
                                <Link href="https://ctrl.zerocloud.id" className="flex items-center justify-center gap-2 p-3 rounded-xl font-semibold text-gray-300 bg-gray-900 border border-gray-800">Panel</Link>
                                <Link href="https://my.zerocloud.id" className="flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-white bg-sky-600 border border-sky-500/50">Client Area</Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}