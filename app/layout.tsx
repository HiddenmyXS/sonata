import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./component/Head";
import Footer from "./component/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Sonata - Demo Site",
  description: "A Themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <html className="dark" lang="en">
          <body
            className={plusJakartaSans.className}
          >
            {children}
          </body>
      </html>
      <Footer />
    </div>
  );
}
