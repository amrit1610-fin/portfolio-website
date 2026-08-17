"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  id 
}: { 
  children: ReactNode, 
  className?: string, 
  delay?: number, 
  id?: string 
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}