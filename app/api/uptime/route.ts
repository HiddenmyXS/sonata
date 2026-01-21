// app/api/uptime/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.HETRIX_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  // Gunakan endpoint v2 jika memungkinkan, atau pastikan v1 mengembalikan list
  const ENDPOINT = `https://api.hetrixtools.com/v1/${apiKey}/uptime/monitors/0/50/`;

  try {
    const response = await fetch(ENDPOINT, {
      method: "GET",
      cache: 'no-store'
    });

    const data = await response.json();

    // HetrixTools API v2 mengembalikan data langsung dalam bentuk Array monitor
    // Jika v1, biasanya data monitor ada di dalam properti tertentu.
    // Kita pastikan yang dikirim ke frontend adalah array.
    const monitorArray = Array.isArray(data) ? data : (data.monitors || []);

    return NextResponse.json(monitorArray);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}