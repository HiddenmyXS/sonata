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
      
      if (Array.isArray(data)) {
        setMonitors(data.slice(0, 4)); // Limit to 4 monitors
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

  // Calculate overall status
  const getOverallStatus = () => {
    if (monitors.length === 0) return { status: "checking", label: "Checking...", color: "gray", icon: Clock };
    
    const hasCritical = monitors.some(m => m.Status === 'failure' || m.Status === 'down');
    const hasMaintenance = monitors.some(m => m.Status === 'maintenance');
    
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
    <main className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto pt-16">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div>
            <h1 className="text-5xl font-black flex items-center gap-3 mb-3">
              <ShieldCheck className="text-sky-400 w-12 h-12" /> 
              System Status
            </h1>
            <p className="text-gray-400 flex items-center gap-2 text-sm">
              <Clock size={16} /> Last updated: {lastUpdated || "Checking..."}
            </p>
          </div>

          <button 
            type="button"
            onClick={() => {
              setLoading(true);
              getStatus();
            }}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 px-6 py-3 rounded-xl transition-all text-sm font-bold shadow-lg hover:shadow-sky-500/30"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh Now
          </button>
        </div>

        {/* Overall Status Section */}
        <div className={`mb-12 p-8 flex flex-col items-center justify-center text-center`}>
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
          <p className="text-gray-400 text-sm">{monitors.length} services monitored</p>
        </div>

        {/* Monitors List */}
        <div className="grid gap-5">
          <h3 className="text-xl font-bold text-gray-300 mb-2">Service Status</h3>
          {loading && monitors.length === 0 ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-900/50 border border-gray-800 rounded-2xl animate-pulse" />
            ))
          ) : (
            monitors.map((m) => (
              <div 
                key={m.ID} 
                className="group p-6 bg-gray-900/40 border border-gray-800 rounded-2xl flex justify-between items-center hover:border-sky-500/50 hover:bg-gray-900/60 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    m.Status === 'success' 
                      ? 'bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]' 
                      : m.Status === 'maintenance'
                      ? 'bg-orange-500/10 text-orange-400 shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]'
                      : 'bg-red-500/10 text-red-400 shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)]'
                  }`}>
                    {m.Type === 'service' ? <Activity size={24} /> : <Server size={24} />}
                  </div>
                  <div>
                    <span className="font-bold text-xl block group-hover:text-sky-300 transition-colors">{m.Name}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{m.Type || "Monitor"}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
                    m.Status === 'success' ? 'bg-emerald-500/20 text-emerald-400' 
                    : m.Status === 'maintenance' ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-red-500/20 text-red-400'
                  }`}>
                    {m.Status === 'success' ? 'Operational' : m.Status === 'maintenance' ? 'Maintenance' : 'Down'}
                  </div>
                  <span className="text-xs font-mono text-gray-500">{m.Uptime_Stats?.Total_Uptime || "100"}% Uptime</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
