"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DynamicChart() {
  const [paths, setPaths] = useState({ price: "", vol: "" });

  useEffect(() => {
    // 1. Generate Realistic Market Data
    const N = 100; // Number of data points per loop
    let p = 100;
    let v = 10;
    const prices = [p];
    const vols = [v];

    for (let i = 1; i <= N; i++) {
      // Mean-reverting volatility (similar to Heston model)
      v = v + 0.1 * (10 - v) + (Math.random() - 0.5) * 5;
      v = Math.max(2, Math.min(v, 25)); // Cap and collar
      vols.push(v);

      // Price step scaled by current volatility
      p = p + (Math.random() - 0.5) * (v / 2);
      prices.push(p);
    }

    // 2. The Brownian Bridge (Force the end to match the start for a seamless loop)
    const priceTilt = (prices[N] - prices[0]) / N;
    const volTilt = (vols[N] - vols[0]) / N;

    const bridgedPrices = prices.map((price, i) => price - priceTilt * i);
    const bridgedVols = vols.map((vol, i) => vol - volTilt * i);

    // 3. Convert Data to SVG Paths
    const createPath = (data: number[], topOffset: number, heightRange: number) => {
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;
      
      let d = "";
      // Duplicate the array to make the path twice as long (for the continuous sliding loop)
      const loopedData = [...data, ...data.slice(1)];
      
      loopedData.forEach((val, i) => {
        const x = (i / N) * 1000;
        // Normalize and invert Y (since SVG 0 is at the top)
        const normalizedY = (val - min) / range;
        const y = topOffset + (1 - normalizedY) * heightRange;
        
        if (i === 0) d += `M ${x} ${y} `;
        else d += `L ${x} ${y} `;
      });
      return d;
    };

    // Price sits in the top 120px, Volatility sits in the bottom 40px
    setPaths({
      price: createPath(bridgedPrices, 20, 100),
      vol: createPath(bridgedVols, 140, 40),
    });
  }, []);

  return (
    <div className="w-full h-64 border border-white/10 bg-black/60 rounded-2xl relative overflow-hidden flex items-end p-4 backdrop-blur-sm shadow-2xl">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:10%_25%]"></div>
      
      {/* Chart Canvas */}
      {paths.price && (
        <svg viewBox="0 0 1000 200" className="absolute bottom-0 left-0 w-full h-full preserve-3d" preserveAspectRatio="none">
          
          {/* Volatility Line (Faded Gray, Dashed, Spiky) */}
          <motion.path
            d={paths.vol}
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-30"
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          {/* Price Line (Solid Lime Green, Jagged) */}
          <motion.path
            d={paths.price}
            fill="transparent"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </svg>
      )}
      
      {/* Dynamic Data Overlays */}
      <div className="absolute top-4 left-6 flex flex-col gap-1">
        <span className="text-[10px] text-lime-400 font-mono tracking-widest uppercase flex items-center gap-2">
          <div className="w-2 h-2 bg-lime-400 rounded-sm"></div>
          PRICE ACTION
        </span>
        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center gap-2 mt-1">
          <div className="w-2 h-2 bg-gray-500 rounded-sm"></div>
          IMPLIED VOLATILITY
        </span>
      </div>

      <div className="absolute bottom-4 right-6 flex gap-6 text-[10px] font-mono tracking-widest uppercase">
        <span className="text-gray-500">LATENCY: 12ms</span>
        <span className="flex items-center gap-2 text-lime-400">
          <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div> 
          SIGNAL ONLINE
        </span>
      </div>
    </div>
  );
}