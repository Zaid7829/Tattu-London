"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuTabs } from "@/data/menuData";
import { siteData } from "@/data/siteData";

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const activeMenu = menuTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="menus" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tattu-black via-tattu-charcoal to-tattu-black" />
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="relative z-10 container-custom">
        <SectionHeading
          title="Our Menus"
          subtitle="Culinary Excellence"
          className="mb-12"
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 md:px-6 py-2.5 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? "border-tattu-gold text-tattu-gold bg-tattu-gold/5"
                  : "border-white/10 text-white/50 hover:text-white/70 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {activeMenu?.categories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="glass-light rounded-lg p-6 md:p-8"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold text-tattu-gold mb-6 pb-4 border-b border-tattu-gold/20">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 + 0.2 }}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="text-white font-medium text-base md:text-lg mb-1">
                              {item.name}
                            </h4>
                            <p className="text-white/50 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {item.price && (
                            <span className="text-tattu-gold text-sm font-medium whitespace-nowrap">
                              {item.price}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href={siteData.menus.alaCarte}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-tattu-gold text-tattu-black font-medium tracking-widest uppercase text-sm hover:bg-tattu-gold-light transition-all duration-300"
          >
            View Full Menu
          </a>
          <a
            href={siteData.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:border-tattu-gold hover:text-tattu-gold transition-all duration-300"
          >
            Book Now
          </a>
        </motion.div>

        {/* Menu PDF links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-4">
            Download Full Menu PDFs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "All Day Set", href: siteData.menus.allDaySet },
              { label: "Evening Set", href: siteData.menus.eveningSet },
              { label: "Sushi", href: siteData.menus.sushi },
              { label: "Desserts", href: siteData.menus.desserts },
              { label: "Large Party", href: siteData.menus.largeParty },
              { label: "Vegetarian", href: siteData.menus.vegetarian },
              { label: "Brunch", href: siteData.menus.brunch },
              { label: "Sunday Roast", href: siteData.menus.sundayRoast },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tattu-gold/60 hover:text-tattu-gold text-xs tracking-wider transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
