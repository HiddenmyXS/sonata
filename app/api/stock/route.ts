import { NextResponse } from "next/server";

// --- CONFIGURATION ---
const TIER_LOCATIONS: Record<string, number[]> = {
  core: [1, 2],
  flux: [3],
  atlas: [4]
};

let stockCache: Record<string, number[]> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "true";

  const now = Date.now();
  if (!forceRefresh && stockCache && (now - lastFetchTime < CACHE_DURATION)) {
    return NextResponse.json({ source: 'cache', data: stockCache });
  }

  console.log("⚡ [StockAPI] Starting Fresh Stock Check...");

  try {
    const headers = {
      "Authorization": `Bearer ${process.env.PTERODACTYL_APP_KEY}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const result: Record<string, number[]> = {}; 

    for (const [tier, locationIds] of Object.entries(TIER_LOCATIONS)) {
      const tierNodesFreeRam: number[] = [];

      for (const locId of locationIds) {
        const url = `${process.env.PTERODACTYL_PANEL_URL}/api/application/locations/${locId}?include=nodes`;
        
        try {
            const res = await fetch(url, { headers, cache: 'no-store' });

            if (!res.ok) {
                const errText = await res.text();
                console.error(`❌ [StockAPI] Error Fetch Location ${locId}: [${res.status}] ${errText}`);
                continue;
            }

            const json = await res.json();
            
            // Akses data nodes dari relationship
            const nodesData = json.attributes?.relationships?.nodes?.data;

            if (!nodesData || !Array.isArray(nodesData)) {
                console.warn(`⚠️ [StockAPI] Location ${locId} ditemukan tapi tidak ada node.`);
                continue;
            }

            nodesData.forEach((node: any) => {
                const attr = node.attributes;

                if (attr.maintenance_mode) {
                    console.log(`   ⏭️ Node ${attr.name} [MAINTENANCE] - Skipped`);
                    return;
                }

                // Kalkulasi RAM Real + Overallocate
                // Memory Overallocate di Ptero biasanya persen (misal 0 atau 200)
                const baseMemory = attr.memory;
                const overallocate = attr.memory_overallocate || 0; 
                
                const totalLimit = Math.floor(baseMemory * (1 + (overallocate / 100)));
                
                let usedMemory = 0;
                if (attr.allocated_resources && typeof attr.allocated_resources.memory === 'number') {
                    usedMemory = attr.allocated_resources.memory;
                } else {
                    console.warn(`⚠️ [StockAPI] Node ${attr.name} missing allocated_resources data. Assuming 0 usage.`);
                }

                const freeRam = totalLimit - usedMemory;
                console.log(`   ✅ Node: ${attr.name} | Limit: ${totalLimit}MB | Used: ${usedMemory}MB | Free: ${freeRam}MB`);

                if (freeRam > 0) tierNodesFreeRam.push(freeRam);
            });

        } catch (fetchErr) {
            console.error(`❌ [StockAPI] Network Error on Location ${locId}:`, fetchErr);
        }
      }
      
      result[tier] = tierNodesFreeRam;
    }

    stockCache = result;
    lastFetchTime = now;
    console.log("✅ [StockAPI] Stock Check Completed Successfully.");

    return NextResponse.json({ source: 'realtime', data: result });

  } catch (error) {
    console.error("🔥 [StockAPI] Critical Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}