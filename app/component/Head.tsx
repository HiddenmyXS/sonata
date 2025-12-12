import Image from "next/image";
import Link from "next/link";
import { Gamepad, Home, List, Headset, Pyramid, Server, Code, Container, Gamepad2 } from "lucide-react";
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
            if (e.key === "Escape") {
                handleClose();
            }
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
                className={`flex items-center text-sm font-medium gap-2 transition-colors ${
                    open ? "text-white" : "text-gray-300 hover:text-gray-50"
                }`}
            >
                <List className="w-4 h-4" aria-hidden="true" />
                Host Products
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, backdropFilter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-14 w-104
                                   bg-zinc-900/80 backdrop-blur-2xl shadow-2xl shadow-black/50
                                   border border-white/10 rounded-xl overflow-hidden z-50 ring-1 ring-white/5"
                    >
                        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                        <div className="flex flex-col p-2">
                            <DropdownItem 
                                href="/game-host" 
                                icon={<Gamepad2 className="w-5 h-5" />} 
                                title="Game Host" 
                                desc="Jalankan sesi game performa tinggi. Full managed."
                            />
                            <DropdownItem 
                                href="/app-host" 
                                icon={<Code className="w-5 h-5" />} 
                                title="App Host" 
                                desc="Hosting aplikasi dengan environment khusus."
                            />
                            <DropdownItem 
                                href="/private-node" 
                                icon={<Server className="w-5 h-5" />} 
                                title="Private Node" 
                                desc="Node khusus untuk kontrol penuh privat."
                            />
                            <DropdownItem 
                                href="/vps" 
                                icon={<Container className="w-5 h-5" />} 
                                title="VPS" 
                                desc="Virtual server fleksibel dan scalable."
                            />
                        </div>
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
    desc?: string;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ href, icon, title, desc, onClick }) => (
    <Link
        href={href}
        role="menuitem"
        onClick={onClick}
        className="group relative flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-200"
    >
        <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/50 text-gray-400 group-hover:text-white group-hover:bg-blue-500/20 ring-1 ring-white/5 transition-colors">
            {icon}
        </span>
        <div className="min-w-0">
            <span className="block text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {title}
            </span>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 mt-0.5 leading-relaxed">
                {desc}
            </p>
        </div>
    </Link>
);

export default function Header(): React.ReactElement {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
            <div className="flex items-center justify-between w-full max-w-7xl h-16 px-4 
                          bg-zinc-900/60 backdrop-blur-xl shadow-lg shadow-black/20 
                          border border-white/10 rounded-2xl transition-all duration-300">
                
                <div className="flex items-center gap-4">
                    <Link href="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Image
                            className="object-contain"
                            src="/aset/sonata.png"
                            alt="Sonata"
                            width={32}
                            height={32}
                            priority
                        />
                        <h1 className="text-lg font-bold text-white tracking-wide">
                            Sonata
                        </h1>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center justify-center flex-1 gap-8" aria-label="Main navigation">
                    <Link 
                        href="/home" 
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>

                    <HostProductsDropdown />

                    <Link 
                        href="/support" 
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        <Headset className="w-4 h-4" />
                        <span>Support</span>
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden md:block w-px h-6 bg-white/10" aria-hidden="true" />
                    
                    <Link
                        href="/game-panel"
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                    >
                        <Gamepad className="w-4 h-4" />
                        <span>Panel</span>
                    </Link>

                    <Link
                        href="/client-area"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-zinc-900 bg-white hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
                    >
                        <Pyramid className="w-4 h-4" />
                        <span className="hidden sm:inline">Client Area</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}