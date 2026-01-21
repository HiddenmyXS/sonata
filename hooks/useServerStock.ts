"use client";

import useSWR from "swr"; 

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useServerStock() {
  const { data, error, isLoading, mutate } = useSWR("/api/stock", fetcher, {
    refreshInterval: 60000, // Refresh setiap 60 detik
    revalidateOnFocus: false, // Hemat resource
    shouldRetryOnError: false, // Jangan retry agresif kalau backend mati
  });

  const refreshStock = async () => {
    // Paksa refresh cache backend
    await mutate(async () => {
        const res = await fetch("/api/stock?refresh=true");
        return res.json();
    });
  };

  /**
   * Menghitung ketersediaan stok untuk paket tertentu
   * @param tier Kategori paket ('core', 'flux', 'atlas')
   * @param ramNeededGB Jumlah RAM yang dibutuhkan dalam GB
   */
  const getStockCount = (tier: string, ramNeededGB: number) => {
    // 1. Loading State
    if (isLoading) return { status: "loading", count: null };
    
    // 2. Error State / Data Kosong
    if (error || !data?.data) return { status: "error", count: 0 };
    
    const tierKey = tier.toLowerCase();
    const nodesRam = data.data[tierKey] as number[] | undefined;

    // 3. Tier tidak ditemukan di API response
    if (!nodesRam) return { status: "unknown", count: 0 };

    const ramNeededMB = ramNeededGB * 1024;
    let totalSlots = 0;

    // 4. Logic Kalkulasi Distributed
    // Cek setiap node, berapa server yang muat di sana?
    nodesRam.forEach((freeMB) => {
        const slotsInThisNode = Math.floor(freeMB / ramNeededMB);
        if (slotsInThisNode > 0) {
            totalSlots += slotsInThisNode;
        }
    });

    return { 
        status: totalSlots > 0 ? "available" : "out_of_stock", 
        count: totalSlots 
    };
  };

  return {
    isLoading,
    isError: error,
    refreshStock,
    getStockCount,
    lastUpdate: data?.source // 'cache' atau 'realtime'
  };
}