import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.HETRIX_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ 
      error: "API Key tidak ditemukan di .env.local",
      tip: "Pastikan file .env.local ada di root folder dan isinya HETRIX_API_KEY=xxx"
    }, { status: 500 });
  }

  const ENDPOINT = `https://api.hetrixtools.com/v1/${apiKey}/uptime/monitors/0/20/`;

  try {
    const response = await fetch(ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-store'
    });

    const data = await response.json();

    if (data.status === "error") {
      return NextResponse.json({ 
        error: "HetrixTools Error", 
        message: data.message,
        debug_url_sent: `https://api.hetrixtools.com/v2/HIDDEN_KEY/uptime-monitors/0/20/`
      }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ 
      error: "Connection Failed", 
      message: error.message 
    }, { status: 500 });
  }
}