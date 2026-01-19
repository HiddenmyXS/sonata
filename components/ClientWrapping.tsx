"use client";

import { ReactNode, useEffect, useState } from "react";
import Loader from "./Loader";

const LOADING_DELAY = 3000;

export default function ClientWrapping({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), LOADING_DELAY);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : <>{children}</>;
}
