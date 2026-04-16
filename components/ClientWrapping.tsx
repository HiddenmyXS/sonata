"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

// Total time the loader stays visible before fading out
const LOADING_DURATION = 1700;

export default function ClientWrapping({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
    </>
  );
}
