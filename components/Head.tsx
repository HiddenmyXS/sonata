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
  X
} from "lucide-react";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HostProductsDropdown: React.FC = () => {
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
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={handleToggle}
                className={`group flex items-center text-sm font-medium gap-1.5 px-3 py-2 rounded-full transition-all duration-200 ${
                    open ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
                <List className="w-4 h-4" />
                <span>Products</span>
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
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 
                                   bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-sky-900/10
                                   border border-gray-800 rounded-2xl overflow-hidden z-50 p-1.5"
                    >
                        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-sky-500/20 to-transparent" />
                        <div className="flex flex-col gap-1">
                            <DropdownItems />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const DropdownItems = () => (
    <>
        <DropdownItem 
            href="/game-host" 
            icon={<Gamepad2 className="w-5 h-5" />} 
            title="Game Host" 
            desc="High performance game servers."
        />
        <DropdownItem 
            href="/app-host" 
            icon={<Code className="w-5 h-5" />} 
            title="App Host" 
            desc="Deploy apps in seconds."
        />
        <DropdownItem 
            href="/private-node" 
            icon={<Server className="w-5 h-5" />} 
            title="Private Node" 
            desc="Full dedicated control."
        />
        <DropdownItem 
            href="/vps" 
            icon={<Container className="w-5 h-5" />} 
            title="VPS" 
            desc="Scalable virtual servers."
        />
    </>
);

type DropdownItemProps = {
    href: string;
    icon: React.ReactNode;
    title: string;
    desc?: string;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ href, icon, title, desc, onClick }) => (
    <Link
        href={href}
        role="menuitem"
        onClick={onClick}
        className="group relative flex items-start gap-3 p-3 rounded-xl hover:bg-gray-900 transition-all duration-200"
    >
        <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-400 border border-gray-800 group-hover:border-sky-500/20 transition-all">
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

export default function Header(): React.ReactElement {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
                <div className="flex items-center justify-between w-full max-w-6xl h-14 px-4 
                              bg-gray-950/50 backdrop-blur-md shadow-lg shadow-black/40 
                              border border-white/10 rounded-full transition-all duration-300 relative z-50">
                    
                    <div className="flex items-center gap-6">
                        <Link href="/home" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-sky-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Image
                                    className="object-contain relative z-10"
                                    src="/aset/logo/logo.png"
                                    alt="ZeroCloud"
                                    width={33}
                                    height={33}
                                    priority
                                />
                            </div>
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
                            <HostProductsDropdown />
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
                            href="https://bill.zerocloud.id"
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-2">
                            <Link 
                                href="/home" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-4 text-lg font-medium text-gray-200 bg-gray-900/50 border border-gray-800 rounded-2xl active:bg-gray-800"
                            >
                                <Home className="w-5 h-5 text-sky-500" />
                                Home
                            </Link>

                            {/* Mobile Products Accordion */}
                            <div className="flex flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                                <button 
                                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                    className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-200 active:bg-gray-800"
                                >
                                    <div className="flex items-center gap-3">
                                        <List className="w-5 h-5 text-sky-500" />
                                        Products
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <AnimatePresence>
                                    {mobileProductsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-gray-950/50 border-t border-gray-800"
                                        >
                                            <div className="flex flex-col p-2 gap-1">
                                                <DropdownItem 
                                                    href="/game-host" 
                                                    icon={<Gamepad2 className="w-5 h-5" />} 
                                                    title="Game Host" 
                                                    desc="High performance servers"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                />
                                                <DropdownItem 
                                                    href="/app-host" 
                                                    icon={<Code className="w-5 h-5" />} 
                                                    title="App Host" 
                                                    desc="Deploy apps instantly"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                />
                                                <DropdownItem 
                                                    href="/private-node" 
                                                    icon={<Server className="w-5 h-5" />} 
                                                    title="Private Node" 
                                                    desc="Full control access"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                />
                                                <DropdownItem 
                                                    href="/vps" 
                                                    icon={<Container className="w-5 h-5" />} 
                                                    title="VPS" 
                                                    desc="Virtual servers"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link 
                                href="/support" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-4 text-lg font-medium text-gray-200 bg-gray-900/50 border border-gray-800 rounded-2xl active:bg-gray-800"
                            >
                                <Headset className="w-5 h-5 text-sky-500" />
                                Support
                            </Link>

                            <div className="w-full h-px bg-gray-800 my-4" />

                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    href="https://ctrl.zerocloud.id"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 p-3 rounded-xl font-semibold text-gray-300 bg-gray-900 border border-gray-800 active:bg-gray-800"
                                >
                                    <Gamepad className="w-4 h-4" />
                                    Panel
                                </Link>
                                <Link
                                    href="https://bill.zerocloud.id"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-white bg-sky-600 active:bg-sky-500 border border-sky-500/50"
                                >
                                    <Pyramid className="w-4 h-4" />
                                    Client Area
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}