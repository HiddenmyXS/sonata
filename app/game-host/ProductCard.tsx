import { motion } from "framer-motion";
import { MemoryStick, Cpu, Database, HardDrive } from "lucide-react";
import { cn } from "@/lib/utils";
import { StockBadge } from "./StockBadge";
import type { GameProduct } from "@/lib/data/tiers";

interface ProductCardProps {
  game: GameProduct;
  tierColor: string;
  stockStatus: { status: string; count: number | null };
  isLoadingStock: boolean;
  index: number;
}

export function ProductCard({ game, tierColor, stockStatus, isLoadingStock, index }: ProductCardProps) {
  const isSoldOut = stockStatus.status === "out_of_stock" && !isLoadingStock;
  const isLowStock = stockStatus.count !== null && stockStatus.count > 0 && stockStatus.count <= 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative flex flex-col bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300",
        isSoldOut ? "opacity-80" : "hover:border-gray-700 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-900/60"
      )}
    >
      {/* Top Gradient Line */}
      <div className={`absolute top-0 inset-x-0 h-1 bg-linear-to-r ${tierColor} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Stock Badge (Floating) */}
      <StockBadge 
        isLoading={isLoadingStock} 
        isSoldOut={isSoldOut} 
        isLowStock={isLowStock} 
        count={stockStatus.count} 
      />

      <div className="flex-1 flex flex-col p-6 pt-8">
        
        {/* Header Title & Price */}
        <div className="mb-6">
          <h3 className={cn(
            "text-xl font-bold mb-1 transition-colors",
            isSoldOut ? "text-gray-400" : "text-white group-hover:text-sky-400"
          )}>
            {game.title}
          </h3>
          <div className="flex items-baseline gap-1">
             <span className="text-sm text-gray-500">Mulai</span>
             <span className="text-lg font-bold text-white">{game.price}</span>
          </div>
        </div>

        {/* Recommended Tag */}
        <div className="mb-6 pb-4 border-b border-gray-800">
           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Best For:</p>
           <p className="text-sm text-gray-300 line-clamp-2 min-h-10 leading-relaxed">
             {game.recommended}
           </p>
        </div>

        {/* Specs Grid (Lebih Rapi) */}
        <div className="space-y-3 mb-8">
           <SpecRow icon={MemoryStick} label="RAM" value={game.ram} />
           <SpecRow icon={Cpu} label="CPU" value={game.cpu} />
           <SpecRow icon={Database} label="Storage" value={game.storage} />
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <a
            href={isSoldOut ? "#" : game.billingUrl}
            target={isSoldOut ? "_self" : "_blank"}
            className={cn(
              "w-full block text-center py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border border-transparent",
              isSoldOut 
                ? "bg-slate-900/50 border-slate-800 text-slate-500 cursor-not-allowed" 
                : `bg-linear-to-r ${tierColor} text-white shadow-lg opacity-90 hover:opacity-100 hover:scale-[1.02] hover:shadow-sky-500/20`
            )}
            onClick={(e) => isSoldOut && e.preventDefault()}
          >
            {isSoldOut ? "STOK HABIS" : "ORDER SEKARANG"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Helper kecil untuk baris spesifikasi
function SpecRow({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex justify-between items-center text-sm group/row">
      <div className="flex items-center gap-2 text-gray-500 group-hover/row:text-gray-400 transition-colors">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </div>
      <span className="font-semibold text-gray-200">{value}</span>
    </div>
  );
}