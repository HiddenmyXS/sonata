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
                className="flex items-center font-semibold gap-2 text-gray-300 hover:text-gray-50 transition-colors"
            >
                <List className="w-4 h-4" aria-hidden="true" />
                Host Products
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
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
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-12 w-96 bg-gray-900/95 backdrop-blur-sm shadow-xl border border-white/10 rounded-lg overflow-hidden z-50"
                    >
                        <div className="flex flex-col py-2">
                            <Link
                                href="/game-host"
                                role="menuitem"
                                onClick={handleClose}
                                className="px-4 py-3 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                        <Gamepad2 className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                    <div className="min-w-0">
                                        <span className="text-sm font-medium text-white">Game Host</span>
                                        <p className="text-sm text-white/60 mt-1">
                                            Jalankan sesi game dengan performa tinggi pada host kami. Dikelola penuh dan siap pakai.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="/app-host"
                                role="menuitem"
                                onClick={handleClose}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Code className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">App Host</span>
                                    <p className="text-sm text-white/60 mt-1">Hosting aplikasi dengan environment khusus.</p>
                                </div>
                            </Link>

                            <Link
                                href="/private-node"
                                role="menuitem"
                                onClick={handleClose}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Server className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">Private Node</span>
                                    <p className="text-sm text-white/60 mt-1">Node khusus untuk kebutuhan privat dan kontrol penuh.</p>
                                </div>
                            </Link>

                            <Link
                                href="/vps"
                                role="menuitem"
                                onClick={handleClose}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Container className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">VPS</span>
                                    <p className="text-sm text-white/60 mt-1">Virtual private server untuk fleksibilitas dan skalabilitas.</p>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Main Header Component
export default function Header(): React.ReactElement {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-3">
            <div className="flex items-center justify-between w-full max-w-7xl gap-6 p-3 bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200/10 rounded-2xl">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <Link href="/home" className="flex items-center gap-3">
                        <Image
                            className="dark:white"
                            src="/aset/sonata.png"
                            alt="Sonata"
                            width={40}
                            height={40}
                            priority
                        />
                        <h1 className="text-lg font-bold text-white whitespace-nowrap">
                            Sonata
                        </h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex items-center justify-end flex-1 gap-6" aria-label="Main navigation">
                    <div className="flex items-center gap-6">
                        <Link 
                            href="/home" 
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <Home className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Home</span>
                        </Link>

                        <HostProductsDropdown />

                        <Link 
                            href="/support" 
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <Headset className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Support</span>
                        </Link>
                    </div>
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <div className="w-px h-8 bg-white/30" aria-hidden="true" />
                    
                    <Link
                        href="/game-panel"
                        className="hidden md:inline-flex relative group items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors overflow-hidden"
                        aria-label="Open Game Panel"
                    >
                        <span className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 rounded-lg" />
                        <span className="relative z-10 flex items-center gap-2">
                            <Gamepad className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Game Panel</span>
                        </span>
                    </Link>

                    <Link
                        href="/client-area"
                        className="hidden md:inline-flex relative group items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors overflow-hidden"
                        aria-label="Open Client Area"
                    >
                        <span className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 rounded-lg" />
                        <span className="relative z-10 flex items-center gap-2">
                            <Pyramid className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Client Area</span>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}