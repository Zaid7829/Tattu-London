"use client";

import Link from "next/link";
import { siteData } from "@/data/siteData";

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 8.5V7.1c0-.66.44-1.1 1.1-1.1H16V3h-1.9C11.93 3 10.5 4.43 10.5 6.6v1.9H8v3h2.5V21h3v-9.5H16l.5-3h-3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-tattu-black border-t border-white/5">
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-display font-bold tracking-wider text-tattu-gold mb-4 inline-block"
            >
              TATTU
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mt-4">
              An elevated dining experience in the heart of London. Contemporary
              Chinese and modern Asian cuisine served on the rooftop of The Now
              Building.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-tattu-gold hover:border-tattu-gold/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-tattu-gold hover:border-tattu-gold/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#venue", label: "Venue" },
                { href: "#menus", label: "Menus" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reviews", label: "Reviews" },
                { href: "#private-hire", label: "Private Hire" },
                { href: "#location", label: "Location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-tattu-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-white/40 text-sm">
              <li>{siteData.location.fullAddress}</li>
              <li>
                <a
                  href={siteData.contact.phoneHref}
                  className="hover:text-tattu-gold transition-colors"
                >
                  {siteData.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteData.contact.emailHref}
                  className="hover:text-tattu-gold transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-white/20 block">
                  {siteData.hours.days}
                </span>
                <span className="text-white/20">{siteData.hours.time}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            Tattu &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex gap-6">
            <a
              href="https://tattu.co.uk/policies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-tattu-gold transition-colors text-xs tracking-wider"
            >
              Privacy Policy
            </a>
            <a
              href={siteData.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tattu-gold/60 hover:text-tattu-gold transition-colors text-xs tracking-wider uppercase"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
