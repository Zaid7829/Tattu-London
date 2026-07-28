"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TheatreDiningSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-plum/20 to-tattu-black" />

      <div ref={ref} className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Tattu x West End Experience"
              subtitle="Theatre Dining"
              align="left"
              className="mb-8"
            />

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                A dazzling collaboration between two West End icons, TATTU London
                and world-renowned theatre productions have united to offer a truly
                show-stopping experience. From sensational plates to signature
                cocktails, our exclusive pre or post-theatre menu is your front-row
                ticket to style, flavour, and flair.
              </p>
              <p>
                Situated in the heart of London&apos;s Theatreland, we offer the perfect
                setting for a memorable evening. Our dedicated theatre dining
                experience combines the best of modern Asian cuisine with the thrill
                of the West End, creating an unforgettable night out in the city.
              </p>
              <p className="text-tattu-gold/60 italic text-sm">
                West End dining experiences are subject to availability and seasonal
                offerings. Please contact us for current theatre dining packages.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.sevenrooms.com/explore/tattulondon/reservations/create/search?tracking=tattu-pop-up"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-tattu-gold text-tattu-black font-medium tracking-widest uppercase text-sm hover:bg-tattu-gold-light transition-all duration-300"
              >
                Discover Theatre Dining
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="/assets/tattu-food-1.png"
                alt="Tattu London theatre dining experience"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tattu-black/60 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-tattu-gold/20 rounded-full" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-tattu-gold/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
