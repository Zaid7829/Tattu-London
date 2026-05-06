"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Navigation, PhoneCall, Send } from "lucide-react";

export default function LocationSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const mapIframe = `
    <iframe
      title="Tattu London Google Map"
      src="https://www.google.com/maps?q=51.515385,-0.1295445&t=k&z=18&output=embed"
      width="100%"
      height="100%"
      style="border:0;"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  `;

  return (
    <section id="location" className="relative py-24 md:py-32 overflow-hidden bg-tattu-black">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-tattu-gold/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-tattu-jade/40 blur-[120px] rounded-full" />
      </div>

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="Find Us"
          subtitle="Location"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="flex-1 glass-light rounded-3xl p-8 md:p-10 border border-tattu-gold/20 shadow-xl relative overflow-hidden group">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tattu-jade via-tattu-gold to-tattu-jade" />
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-tattu-gold font-display text-2xl mb-4">Tattu London</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-tattu-gold mt-1 flex-shrink-0" />
                    <p className="text-white/80 leading-relaxed">
                      The Now Building Rooftop<br />
                      Denmark Street<br />
                      London WC2H 0LA
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center group-hover/item:bg-tattu-gold/20 transition-colors">
                      <Phone className="w-4 h-4 text-tattu-gold" />
                    </div>
                    <a href={siteData.contact.phoneHref} className="text-white/70 hover:text-tattu-gold transition-colors">
                      {siteData.contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-tattu-gold/10 flex items-center justify-center group-hover/item:bg-tattu-gold/20 transition-colors">
                      <Mail className="w-4 h-4 text-tattu-gold" />
                    </div>
                    <a href={siteData.contact.emailHref} className="text-white/70 hover:text-tattu-gold transition-colors text-sm md:text-base break-all">
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=51.515385,-0.1295445"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-tattu-gold text-tattu-black font-medium rounded-xl hover:bg-tattu-gold-light transition-all duration-300 shadow-lg shadow-tattu-gold/20 uppercase tracking-wider text-xs"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={siteData.contact.phoneHref}
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-tattu-gold/50 transition-all duration-300 uppercase tracking-wider text-[10px]"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-tattu-gold" />
                      Call Now
                    </a>
                    <a
                      href={siteData.contact.emailHref}
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-tattu-gold/50 transition-all duration-300 uppercase tracking-wider text-[10px]"
                    >
                      <Send className="w-3.5 h-3.5 text-tattu-gold" />
                      Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-tattu-jade/20 rounded-full blur-2xl group-hover:bg-tattu-gold/10 transition-colors duration-700" />
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 relative group"
          >
            {/* Premium Glow Border */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-tattu-gold/40 via-tattu-jade/60 to-tattu-gold/40 rounded-[26px] blur-[1px] group-hover:blur-[2px] transition-all duration-500" />
            
            <div className="relative h-[320px] lg:h-[450px] w-full rounded-3xl overflow-hidden bg-tattu-charcoal shadow-2xl border border-white/5">
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: mapIframe }}
              />
              
              {/* Overlay gradient to blend map edges slightly if needed, but keeping colorful as requested */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-tattu-black/10 rounded-3xl" />
              
              {/* Premium Pin Label (Visual Only) */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-tattu-black/80 backdrop-blur-md border border-tattu-gold/30 rounded-full text-[10px] text-tattu-gold uppercase tracking-[0.2em] font-medium z-20 shadow-lg">
                Satellite View
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
