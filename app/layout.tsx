import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zerocloud.id"), 
  
  title: {
    default: "ZeroCloud — #1 High Performance Game Hosting",
    template: "%s | ZeroCloud Indonesia",
  },
  description: "Hosting server game anti-lag, murah, dan stabil. Deploy Minecraft, FiveM, dan Node.js dalam hitungan detik. Garansi uptime 99.9% dengan proteksi DDoS bawaan.",
  
  keywords: ["Game Hosting", "Minecraft Server", "VPS Murah", "Hosting Indonesia", "FiveM Hosting", "ZeroCloud"],
  
  authors: [{ name: "ZeroCloud Team", url: "https://zerocloud.id" }],
  
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zerocloud.id",
    title: "ZeroCloud — Level Up Your Game Server",
    description: "Ping rendah, performa monster, harga pelajar. Gak percaya? Cek sendiri!",
    siteName: "ZeroCloud Indonesia",
    images: [
      {
        url: "/aset/metadata/banner.gif", 
        width: 1200,
        height: 630,
        alt: "ZeroCloud Banner",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "ZeroCloud — Game Hosting Terbaik",
    description: "Hosting server game anti-lag, murah, dan stabil.",
    images: ["/aset/metadata/banner.gif"],
    creator: "@zerocloud_id",
  },
  
  icons: {
    icon: "/aset/metadata/favicons/favicon.ico",
    shortcut: "/aset/metadata/favicons/favicon-16x16.png",
    apple: "/aset/metadata/favicons/apple-icon.png", 
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          plusJakartaSans.className,
          "bg-gray-950 text-white antialiased min-h-screen flex flex-col selection:bg-sky-500/30 selection:text-sky-200"
        )}
      >
        <Navbar />
        
        <main className="grow relative overflow-x-hidden">
          {children}
        </main>
        
        <Footer />
        
        <ScrollToTop />
      </body>
    </html>
  );
}