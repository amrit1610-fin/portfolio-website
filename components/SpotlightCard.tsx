"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SpotlightCard({ project }: { project: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        // The pendulum swing keyframes
        whileHover={{ y: -8, rotate: [0, -1.5, 1.5, 0] }} 
        transition={{
          // Use a bouncy spring for the upward float
          y: { type: "spring", stiffness: 300, damping: 15 },
          // Use a smooth tween for the multi-frame pendulum swing (Fixes the crash!)
          rotate: { type: "tween", duration: 0.6, ease: "easeInOut" } 
        }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className="relative flex flex-col justify-between h-full p-8 overflow-hidden rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 transition-all hover:border-lime-400/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] group cursor-pointer z-20"
      >
        {/* The Spotlight Gradient */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(163,230,53,0.15), transparent 40%)` }}
        />
        
        {/* Card Content */}
        <div className="z-10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white drop-shadow-md group-hover:text-lime-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="text-gray-500 group-hover:text-lime-400 transition-colors" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        </div>
        
        {/* Tech Stack Tags */}
        <div className="z-10 flex flex-wrap gap-2 mt-8">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs font-mono text-lime-400 bg-black border border-lime-400/30 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.1)]">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}