"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Zap,
  DollarSign,
  Puzzle,
  BookOpen,
  Newspaper,
  Map,
  Users,
  HelpCircle,
  Mail,
  Activity,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

// Enhanced Dropdown Menu Component with Icons & Descriptions
const DropdownMenu = ({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
    description: string;
  }[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop Dropdown - Enhanced Card Style */}
      <div
        className={`absolute left-0 mt-2 w-80 bg-[#0a0a0b] backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4 space-y-2`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group/item flex gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover:translate-x-1"
          >
            {/* Icon Container */}
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 group-hover/item:bg-purple-500/30 flex items-center justify-center transition-colors duration-200">
              <div className="text-purple-450 group-hover/item:text-purple-500 transition-colors duration-200">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white group-hover/item:text-purple-300 transition-colors duration-200">
                {item.label}
              </p>
              <p className="text-xs text-gray-400 group-hover/item:text-gray-300 transition-colors duration-200 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Arrow Indicator */}
            <div className="flex-shrink-0 text-gray-600 group-hover/item:text-purple-500 transition-colors duration-200 opacity-0 group-hover/item:opacity-100">
              <ChevronDown size={16} className="rotate-[-90deg]" />
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl md:hidden z-50 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <div className="text-blue-400">{item.icon}</div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">
                  {item.label}
                </p>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productItems = [
    {
      label: "Features",
      href: "/features",
      icon: <Zap size={18} />,
      description: "Explore powerful features designed for your success",
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <DollarSign size={18} />,
      description: "Transparent pricing that scales with your needs",
    },
    {
      label: "Integrations",
      href: "/integrations",
      icon: <Puzzle size={18} />,
      description: "Connect with 100+ tools and services",
    },
  ];

  const resourceItems = [
    {
      label: "Documentation",
      href: "/docs",
      icon: <BookOpen size={18} />,
      description: "Complete guides and API documentation",
    },
    {
      label: "Blog",
      href: "/blog",
      icon: <Newspaper size={18} />,
      description: "Latest updates, tips, and best practices",
    },
    {
      label: "Guides",
      href: "/guides",
      icon: <Map size={18} />,
      description: "Step-by-step tutorials and how-tos",
    },
    {
      label: "Community",
      href: "/community",
      icon: <Users size={18} />,
      description: "Connect with thousands of users",
    },
  ];

  const supportItems = [
    {
      label: "Help Center",
      href: "/help",
      icon: <HelpCircle size={18} />,
      description: "Find answers to common questions",
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail size={18} />,
      description: "Get in touch with our support team",
    },
    {
      label: "Status",
      href: "/status",
      icon: <Activity size={18} />,
      description: "Check system health and uptime",
    },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
              <Image
                src="/aset/sonata.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-white hidden sm:inline-block group-hover:text-blue-300 transition-colors duration-200">
              Sonata
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
            >
              Home
            </Link>

            <DropdownMenu
              label="Products"
              items={productItems}
              isOpen={false}
              onToggle={() => {}}
            />

            <DropdownMenu
              label="Resources"
              items={resourceItems}
              isOpen={false}
              onToggle={() => {}}
            />

            <DropdownMenu
              label="Support"
              items={supportItems}
              isOpen={false}
              onToggle={() => {}}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-300/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800/50 bg-gray-950/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-4 space-y-1 max-w-7xl mx-auto">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
            >
              Home
            </Link>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "products" ? null : "products"
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <div className="pl-4 mt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex gap-3 p-3 rounded-lg text-gray-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 text-blue-400">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "resources" ? null : "resources"
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="pl-4 mt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex gap-3 p-3 rounded-lg text-gray-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 text-blue-400">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Support Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "support" ? null : "support"
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
              >
                Support
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDropdown === "support" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "support" && (
                <div className="pl-4 mt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {supportItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex gap-3 p-3 rounded-lg text-gray-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <div className="shrink-0 text-blue-400">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}