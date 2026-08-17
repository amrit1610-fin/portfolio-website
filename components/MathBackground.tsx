"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const symbols = [
  "Σ", "α", "β", "Δ", "μ", "σ", "λ", "θ", "π", "γ", "ρ", "Φ", "Ω", "τ"
];

export default function MathBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none selection:bg-none">
      
      {/* Floating Abstract Symbols with Glow */}
      {symbols.map((sym, i) => (
        <motion.div
          key={i}
          className="absolute text-white/30 font-sans font-bold text-3xl md:text-5xl select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          style={{
            top: `${(i * 17) % 90 + 5}%`,
            left: `${(i * 31) % 90 + 5}%`,
          }}
          animate={{
            x: mousePosition.x * -0.02 * ((i % 4) + 1),
            y: mousePosition.y * -0.02 * ((i % 4) + 1),
            rotate: mousePosition.x * 0.02 * (i % 2 === 0 ? 1 : -1),
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
          {sym}
        </motion.div>
      ))}

      {/* Modern Dot-Matrix Particle Field */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff30_1.5px,transparent_1.5px)] bg-[size:2.5rem_2.5rem]"></div>
    </div>
  );
}