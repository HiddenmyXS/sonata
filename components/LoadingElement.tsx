"use client";

import Image from "next/image";
import { useEffect, useState, useRef, memo } from "react";
import { useRouter } from "next/navigation";

const DOT_COUNT = 6; // Increased number of dots
const DOT_INTERVAL_MS = 150; // Faster dot animation
const FADE_OUT_MS = 2500;
const REDIRECT_MS = 2900;

function LoadingPage(): React.ReactElement {
  const [dots, setDots] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const router = useRouter();

  const dotIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutRef = useRef<NodeJS.Timeout | null>(null);
  const redirectRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    dotIntervalRef.current = setInterval(() => {
      setDots((prev) => (prev + 1) % (DOT_COUNT + 1));
    }, DOT_INTERVAL_MS);

    fadeOutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, FADE_OUT_MS);

    redirectRef.current = setTimeout(() => {
      router.push("/home");
    }, REDIRECT_MS);

    return () => {
      if (dotIntervalRef.current) clearInterval(dotIntervalRef.current);
      if (fadeOutRef.current) clearTimeout(fadeOutRef.current);
      if (redirectRef.current) clearTimeout(redirectRef.current);
    };
  }, [router]);

  return (
    <div
      className={`fixed inset-0 from-slate-900/60 bg-linear-to-r flex flex-col items-center justify-center min-h-screen transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <Image
        src="/aset/logo/logo.png"
        alt="ZeroCloud Logo"
        width={120}
        height={120}
        priority
        className={`transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      />

      <div
        className={`flex gap-2 items-center mt-8 transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {Array.from({ length: DOT_COUNT }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index <= dots ? "bg-gray-200 scale-100" : "bg-gray-100 scale-75"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

export default memo(LoadingPage);