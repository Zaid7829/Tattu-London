"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0 bg-tattu-charcoal/80 rounded-lg" />
      
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(201, 169, 110, 0.15) 0%, transparent 50%)`,
          }}
        />
      )}
      
      {/* Border glow */}
      <div
        className={`absolute inset-0 rounded-lg border transition-all duration-300 pointer-events-none ${
          isHovered
            ? "border-tattu-gold/30 shadow-[0_0_20px_rgba(201,169,110,0.1)]"
            : "border-white/5"
        }`}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
