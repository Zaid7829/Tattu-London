"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VenueStorySection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="venue" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-charcoal to-tattu-black" />

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="The Venue"
          subtitle="Discover Tattu London"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-tattu-charcoal">
              <img
                src="/assets/tattu-interior-1.png"
                alt="Tattu London interior inspired by Traditional Chinese Courtyard House"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tattu-black/60 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:right-8 w-40 h-52 md:w-48 md:h-64 rounded-lg overflow-hidden border border-tattu-gold/20 shadow-2xl"
            >
              <img
                src="/assets/tattu-cocktail-1.png"
                alt="Signature cocktail at Tattu Phoenix Bar"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border border-tattu-gold/20 rounded-full" />
            <div className="absolute top-1/2 -right-6 w-3 h-3 bg-tattu-gold/30 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Located in Central London. Inspired by the Traditional Chinese
              <span className="text-tattu-gold">Courtyard House</span>.
            </h3>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Tattu London has been designed with the utmost respect for superb
                craftsmanship and in pursuit of providing the finest experiential
                dining. Classic artistry is reunited with cutting edge techniques,
                giving way to a venue that is equally as elegant as it is elevated.
              </p>
              <p>
                Situated on the rooftop of The Now Building on Denmark Street, our
                restaurant offers breathtaking views of the London skyline, creating
                an atmosphere that is both intimate and grand. Every corner tells
                a story, from the intricate cherry blossom installations to the
                dramatic lighting that transforms as the evening unfolds.
              </p>
              <p className="text-tattu-gold/80 italic">
                An elevated dining experience in the heart of the city.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://tattu.co.uk/3d-walkthrough-london/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-tattu-gold/40 text-tattu-gold text-sm tracking-widest uppercase hover:bg-tattu-gold hover:text-tattu-black transition-all duration-300"
              >
                View 3D Walkthrough
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
              >
                Explore Gallery
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-white/5"
        >
          {[
            { number: "15", label: " floors above London" },
            { number: "360deg", label: "panoramic rooftop views" },
            { number: "5", label: "star experiential dining" },
            { number: "Infinity", label: "Instagrammable moments" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-tattu-gold mb-2">
                {stat.number}
              </p>
              <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
