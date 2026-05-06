"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="location" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-charcoal to-tattu-black" />

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="Find Us"
          subtitle="Location"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-light rounded-lg p-8 md:p-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-tattu-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {siteData.location.addressLine1}<br />
                    {siteData.location.addressLine2}<br />
                    {siteData.location.city} {siteData.location.postcode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-tattu-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <a
                    href={siteData.contact.phoneHref}
                    className="text-white/50 hover:text-tattu-gold transition-colors text-sm"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-tattu-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <a
                    href={siteData.contact.emailHref}
                    className="text-white/50 hover:text-tattu-gold transition-colors text-sm"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-tattu-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Opening Hours</h3>
                  <p className="text-white/50 text-sm">
                    {siteData.hours.days}<br />
                    {siteData.hours.time}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://maps.google.com/?q=Tattu+London+The+Now+Building+Denmark+Street+London"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-tattu-gold/40 text-tattu-gold text-sm tracking-widest uppercase hover:bg-tattu-gold hover:text-tattu-black transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={siteData.contact.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href={siteData.contact.emailHref}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
              >
                Email
              </a>
              <a
                href={siteData.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
              >
                Book a Table
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden glass-light"
          >
            <iframe
              src={siteData.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tattu London Location Map"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
