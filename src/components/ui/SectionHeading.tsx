"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div ref={ref} className={`${alignClass} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-tattu-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-px bg-tattu-gold mt-6 mx-auto origin-left"
        style={{ marginLeft: align === "left" ? 0 : undefined, marginRight: align === "right" ? 0 : undefined }}
      />
    </div>
  );
}
