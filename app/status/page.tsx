"use client";

import { useState, useEffect, useCallback } from "react";
import { Server, Activity, ShieldCheck, RefreshCw, Clock, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

export default function StatusPage() {
  const [monitors, setMonitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const getStatus = useCallback(async () => {
    try {
      const response = await fetch("/api/uptime");
      const data = await response.json();
      
      // LOGIKA PERBAIKAN: 
      // API HetrixTools terkadang membungkus array dalam property 'monitors' 
      // atau mengembalikan langsung sebagai array.
      const monitorData = Array.isArray(data) ? data : (data.monitors || []);
      
      if (monitorData.length > 0) {
        // Kita set semua data yang masuk (atau batasi sesuai keinginan, misal 10)
        setMonitors(monitorData); 
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getStatus();
    const interval = setInterval(() => getStatus(), 60000);
    return () => clearInterval(interval);
  }, [getStatus]);

  const getOverallStatus = () => {
    if (loading && monitors.length === 0) return { status: "checking", label: "Checking...", color: "gray", icon: Clock };
    if (monitors.length === 0) return { status: "no_data", label: "No Services Found", color: "gray", icon: AlertCircle };
    
    // Mencari apakah ada yang 'down' atau 'failure'
    const hasCritical = monitors.some(m => 
      m.Status?.toLowerCase() === 'failure' || 
      m.Status?.toLowerCase() === 'down' ||
      m.Status === '2' // Kode Hetrix untuk down biasanya angka atau string
    );
    
    const hasMaintenance = monitors.some(m => m.Status?.toLowerCase() === 'maintenance');
    
    if (hasCritical) return { status: "critical", label: "System Down", color: "red", icon: AlertTriangle };
    if (hasMaintenance) return { status: "maintenance", label: "Under Maintenance", color: "orange", icon: AlertCircle };
    return { status: "operational", label: "All Operational", color: "emerald", icon: CheckCircle };
  };

  const overallStatus = getOverallStatus();
  const StatusIcon = overallStatus.icon;

  const colorMap = {
    emerald: "bg-emerald-500/10 text-emerald-400",
    orange: "bg-orange-500/10 text-orange-400",
    red: "bg-red-500/10 text-red-400",
    gray: "bg-gray-500/10 text-gray-400"
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto pt-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div>
            <h1 className="text-5xl font-black flex items-center gap-3 mb-3">
              <ShieldCheck className="text-sky-400 w-12 h-12" /> 
              System Status
            </h1>
            <p className="text-gray-400 flex items-center gap-2 text-sm">
              <Clock size={16} /> Last updated: {lastUpdated || "Checking..." }
            </p>
          </div>

          <button 
            type="button"
            onClick={() => {
              setLoading(true);
              getStatus();
            }}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 px-6 py-3 rounded-xl transition-all text-sm font-bold shadow-lg"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh Now
          </button>
        </div>

        {/* Overall Status Banner */}
        <div className="mb-12 p-8 flex flex-col items-center justify-center text-center border border-gray-800 rounded-3xl bg-gray-900/20">
          <div className={`p-5 rounded-2xl mb-4 ${colorMap[overallStatus.color as keyof typeof colorMap]}`}>
            <StatusIcon size={48} className="drop-shadow-lg" />
          </div>
          <h2 className={`text-3xl font-black mb-2 ${
            overallStatus.color === 'emerald' ? 'text-emerald-400' :
            overallStatus.color === 'orange' ? 'text-orange-400' :
            overallStatus.color === 'red' ? 'text-red-400' : 'text-gray-400'
          }`}>
            {overallStatus.label}
          </h2>
          <p className="text-gray-400 text-sm">Monitoring {monitors.length} services in real-time</p>
        </div>

        {/* List of Monitors */}
        <div className="grid gap-4">
          <h3 className="text-xl font-bold text-gray-300 mb-2">Individual Services</h3>
          {loading && monitors.length === 0 ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-900/50 border border-gray-800 rounded-2xl animate-pulse" />
            ))
          ) : (
            monitors.map((m) => {
              // Menormalisasi status agar tidak sensitif huruf besar/kecil
              const s = m.Status?.toLowerCase();
              const isUp = s === 'success' || s === 'operational' || s === '1' || m.Status === 'success';
              const isMaint = s === 'maintenance';

              return (
                <div 
                  key={m.ID} 
                  className="group p-6 bg-gray-900/40 border border-gray-800 rounded-2xl flex justify-between items-center hover:border-sky-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      isUp ? 'bg-emerald-500/10 text-emerald-400' 
                      : isMaint ? 'bg-orange-500/10 text-orange-400'
                      : 'bg-red-500/10 text-red-400'
                    }`}>
                      {m.Type === 'service' ? <Activity size={24} /> : <Server size={24} />}
                    </div>
                    <div>
                      <span className="font-bold text-lg block">{m.Name}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">{m.Type || "Endpoint"}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      isUp ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' 
                      : isMaint ? 'border-orange-500/20 bg-orange-500/10 text-orange-400'
                      : 'border-red-500/20 bg-red-500/10 text-red-400'
                    }`}>
                      {isUp ? 'Operational' : isMaint ? 'Maintenance' : 'Down'}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">
                      Uptime: {m.Uptime_Stats?.Total_Uptime || "100"}%
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}