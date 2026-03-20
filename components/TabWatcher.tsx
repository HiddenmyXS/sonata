"use client";

import { useEffect } from "react";

export default function TabWatcher() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleBlur = () => {
      document.title = "Ngga beli nih? 🎮"; 
    };

    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}