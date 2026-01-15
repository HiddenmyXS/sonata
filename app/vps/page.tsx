"use client";

import { useState, useEffect, useRef } from "react";
import { Particles } from "@/components/ui/particles";
import { 
  Gamepad2, 
  Search,
  SortAscIcon,
  SortDescIcon,
  X,
  Package2,
  Container
} from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function VPSHostComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <main
      ref={containerRef}
      className={`flex flex-col items-center w-full min-h-screen bg-zinc-950 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full flex flex-col items-center pt-10 pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-950 z-0" />
          <Particles className="absolute inset-0 z-0 animate-fade-in" quantity={100} ease={80} color="#ffffff" refresh />       
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mt-40">
            <div className="w-full flex flex-col mb-8">
                <div className="relative z-10 h-2 inline-flex items-center font-bold justify-left text-sm md:text-base transition ease-out text-neutral-300 hover:text-white">
                  <Container className="mr-2 size-12 text-zinc-400" />
                    <AnimatedGradientText className="text-4xl h-11" colorFrom="#ffffff" colorTo="#a1a1aa">
                        VPS Hosting 
                    </AnimatedGradientText>
                </div>
                <p className="mt-5">Choose your best package option for your hosting</p>
              {/* Input Field */}
              <div className="w-full mt-5 inline-flex items-center">
                <div className="space-y-2 w-full">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Search className="w-5 h-5 text-zinc-400" />
                      <div className="w-px h-5 bg-zinc-700" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      className="w-full pl-16 pr-4 py-4 rounded-xl bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-all duration-200"
                    />
                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                </div>
              </div>
              {/* Filter Dropdown */}
              <div className="flex items-center ml-3 gap-2">
                    <Button                      
                        className="hidden md:inline-flex items-center gap-2 w-16 py-7 rounded-xl text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                    >
                      <SortAscIcon className="w-15 h-15" />
                    </Button>

                    <Button
                        className="inline-flex items-center gap-2 w-16 py-7 rounded-xl text-sm font-medium text-zinc-900 bg-white hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
                    >
                        <Package2 className="w-15 h-15" />
                    </Button>
                </div>
              </div>
              {/*Products*/}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full">

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="./aset/GTAV.png"
                      alt="Product Image"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white">Product Title</h2>
                      <div className="mt-3 space-y-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-5 h-5 text-zinc-500" />
                          <span>Specification: High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package2 className="w-5 h-5 text-zinc-500" />
                          <span>Stock: 20 left</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SortAscIcon className="w-5 h-5 text-zinc-500" />
                          <span>Price: $299</span>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                          Buy Now
                        </Button>
                        <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>     
    </main>
  );
}
