"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

const experiences = [
  {
    title: "Rooftop Dining",
    description:
      "Dine amongst the clouds with panoramic views of London's skyline. Our rooftop terrace offers an unparalleled atmosphere where city lights meet culinary artistry.",
    image: "/assets/tattu-hero.png",
    icon: "◆",
  },
  {
    title: "Modern Asian Cuisine",
    description:
      "Contemporary Chinese and modern Asian dishes crafted with precision and passion. Each plate tells a story of tradition reimagined through a lens of innovation.",
    image: "/assets/tattu-food-1.png",
    icon: "◇",
  },
  {
    title: "Signature Cocktails",
    description:
      "Expertly crafted cocktails at the Phoenix Bar, where mixology meets artistry. Each drink is a sensory experience designed to complement your evening.",
    image: "/assets/tattu-cocktail-1.png",
    icon: "◆",
  },
  {
    title: "Private Hire",
    description:
      "Opulent surroundings suitable for a range of events and exclusive private hires. Create unforgettable moments in our stunning private spaces.",
    image: "/assets/tattu-private-dining.png",
    icon: "◇",
  },
];

export default function ExperienceCards() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-plum/30 to-tattu-black" />

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="Signature Experiences"
          subtitle="What Awaits You"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlowCard className="h-full">
                <div className="relative h-full min-h-[400px] md:min-h-[480px]">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tattu-black via-tattu-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                    <div className="mb-3">
                      <span className="text-tattu-gold text-2xl">{exp.icon}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
