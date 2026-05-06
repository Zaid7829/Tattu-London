"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteData } from "@/data/siteData";

export default function PrivateHireSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="private-hire" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/tattu-private-dining.svg"
          alt="Private dining room at Tattu London"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-tattu-black/80" />
      </div>

      <div ref={ref} className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Private Hire & Special Occasions"
            subtitle="Exclusive Events"
            className="mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Opulent surroundings suitable for a range of events and exclusive
            private hires. From intimate celebrations to grand corporate
            gatherings, our stunning spaces provide the perfect backdrop for your
            special occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`mailto:${siteData.contact.email}`}
              className="px-8 py-3.5 bg-tattu-gold text-tattu-black font-medium tracking-widest uppercase text-sm hover:bg-tattu-gold-light transition-all duration-300"
            >
              Enquire Now
            </a>
            <a
              href="https://tattu.co.uk/wp-content/uploads/2024/04/ONLINE-LONDON_generic_brocure_march-24.-indd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
            >
              View Brochure
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
