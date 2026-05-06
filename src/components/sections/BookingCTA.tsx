"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { siteData } from "@/data/siteData";

export default function BookingCTA() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/tattu-hero.svg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-tattu-black/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-tattu-gold/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-tattu-gold/30 to-transparent" />

      <div ref={ref} className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-tattu-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
          >
            Reservations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Step Into Tattu London
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Reserve your modern Asian dining experience at the rooftop of The Now
            Building, Denmark Street, London.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={siteData.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-tattu-gold text-tattu-black font-medium tracking-widest uppercase text-sm hover:bg-tattu-gold-light transition-all duration-300 shadow-lg shadow-tattu-gold/20"
            >
              Book a Table
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
