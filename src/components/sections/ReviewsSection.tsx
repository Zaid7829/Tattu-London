"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviewsData";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-jade/20 to-tattu-black" />

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="Guest Impressions"
          subtitle="What People Say"
          className="mb-16"
        />

        {/* Review Themes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            "Beautiful Interior",
            "Great for Special Occasions",
            "Stylish Presentation",
            "Modern Asian Flavors",
            "Attentive Service",
            "Premium Atmosphere",
          ].map((theme) => (
            <span
              key={theme}
              className="px-4 py-2 border border-tattu-gold/20 text-tattu-gold/70 text-xs tracking-widest uppercase rounded-full"
            >
              {theme}
            </span>
          ))}
        </motion.div>

        {/* Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative glass-light rounded-lg p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center text-center">
            {/* Quote marks */}
            <div className="text-tattu-gold/20 text-6xl font-serif absolute top-4 left-6">
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-tattu-gold fill-tattu-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 font-light italic"
              >
                {reviews[activeIndex].quote}
              </motion.p>

              {/* Author */}
              <div className="text-white/40 text-sm">
                <span className="font-medium">{reviews[activeIndex].author}</span>
                <span className="mx-2">|</span>
                <span>{reviews[activeIndex].source}</span>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-tattu-gold w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Source */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/30 text-xs mt-8 tracking-wider"
        >
          Based on public guest feedback from Google and travel platforms.
        </motion.p>
      </div>
    </section>
  );
}
