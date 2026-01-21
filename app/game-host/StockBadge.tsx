import { Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockBadgeProps {
  isLoading: boolean;
  isSoldOut: boolean;
  isLowStock: boolean;
  count: number | null;
}

export function StockBadge({ isLoading, isSoldOut, isLowStock, count }: StockBadgeProps) {
  let label = "Checking...";
  if (!isLoading) {
    if (isSoldOut) label = "SOLD OUT";
    else if (isLowStock) label = `SISA ${count}`;
    else label = "READY STOCK";
  }

  return (
    <div className={cn(
      "absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md shadow-lg z-10",
      isLoading ? "bg-gray-800/80 text-gray-400 border-gray-700" :
      isSoldOut ? "bg-red-950/80 text-red-500 border-red-900/50" :
      isLowStock ? "bg-yellow-950/80 text-yellow-500 border-yellow-900/50 animate-pulse" :
      "bg-emerald-950/80 text-emerald-400 border-emerald-900/50"
    )}>
      {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : 
       isSoldOut ? <AlertTriangle className="w-3 h-3" /> : 
       <CheckCircle2 className="w-3 h-3" />
      }
      {label}
    </div>
  );
}