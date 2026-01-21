// app/api/uptime/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.HETRIX_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  const ENDPOINT = `https://api.hetrixtools.com/v1/${apiKey}/uptime/monitors/0/100/`;

  try {
    const response = await fetch(ENDPOINT, {
      method: "GET",
      cache: 'no-store'
    });

    const data = await response.json();

    const monitorArray = Array.isArray(data) ? data : (data.monitors || []);

    return NextResponse.json(monitorArray);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}