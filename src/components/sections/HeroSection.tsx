"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import CherryBlossomScene from "@/components/three/CherryBlossomScene";
import { siteData } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/tattu-hero.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-tattu-black/80 via-tattu-black/60 to-tattu-black" />
      </div>

      {/* 3D Scene */}
      <CherryBlossomScene />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-tattu-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
          >
            Contemporary Chinese & Modern Asian Dining
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider mb-4"
          >
            TATTU
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-display text-white/80 tracking-[0.2em] mb-4"
          >
            LONDON
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 font-light tracking-wide mb-4 font-display italic"
          >
            An Elevated Dining Experience
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Contemporary Asian dining in the heart of London
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={siteData.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3.5 bg-tattu-gold text-tattu-black font-medium tracking-widest uppercase text-sm hover:bg-tattu-gold-light transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Book a Table</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#menus"
              className="px-8 py-3.5 border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
            >
              View Menus
            </a>
            <a
              href="#venue"
              className="px-8 py-3.5 border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
            >
              Explore Venue
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex items-center justify-center gap-2 text-white/40 text-xs tracking-widest"
          >
            <MapPin className="w-3 h-3" />
            <span>{siteData.location.fullAddress}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-tattu-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
