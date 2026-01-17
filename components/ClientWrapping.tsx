"use client";

import { ReactNode, useEffect, useState} from "react";
import Loader from "./Loader";

export default function ClientWrapping({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return <>{children}</>;
}
