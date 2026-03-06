"use client";

import Link from "next/link";
import { Globe2, Twitter, Linkedin, Instagram, Youtube, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribing(false);
    setIsSubscribed(true);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  const socialLinks = [
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Instagram, href: "https://instagram.com" },
    { Icon: Youtube, href: "https://youtube.com" }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      style={{ willChange: 'transform' }}
      className="bg-navy border-t-2 border-gold/40 pt-10 pb-8 lg:pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-8 lg:pb-12">
          {/* Col 1 - Brand */}
          <motion.div variants={fadeUp} layout={false} className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Globe2 className="w-8 h-8 text-gold" />
              <span className="font-heading font-bold text-xl">
                <span className="text-white">Elevate</span>
                <span className="text-gold">Abroad</span>
              </span>
            </Link>
            <p className="text-white/50 text-xs lg:text-sm mt-3 leading-relaxed max-w-[280px]">
              Helping students achieve their international education dreams since 2015.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, href }, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  layout={false}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/60 hover:text-gold transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 2 - Quick Links */}
          <motion.div variants={fadeUp} layout={false}>
            <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Destinations", href: "/destinations" },
                { label: "Universities", href: "/universities" },
                { label: "Stories", href: "/success-stories" },
              ].map((link, idx) => (
                <motion.div key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }} layout={false} className={idx >= 4 ? "hidden lg:block" : ""}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold text-xs lg:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 3 - Destinations */}
          <motion.div variants={fadeUp} layout={false} className="hidden lg:block">
            <h3 className="text-white font-semibold mb-4">Study Destinations</h3>
            <div className="flex flex-col gap-2">
              {["USA", "United Kingdom", "Canada", "Australia", "Germany", "Ireland"].map((link) => (
                <motion.div key={link} whileHover={{ x: 4 }} transition={{ duration: 0.2 }} layout={false}>
                  <Link
                    href="/destinations"
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 4 - Contact */}
          <motion.div variants={fadeUp} layout={false}>
            <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Contact Us</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex text-white/50 hover:text-gold text-sm gap-2 transition-colors"
              >
                <span>📍</span>
                <span>123 Education Hub, Mumbai, India 400001</span>
              </a>
              <a
                href="tel:+919876543210"
                className="text-white/50 hover:text-gold text-xs lg:text-sm flex gap-2 transition-colors font-medium lg:font-normal"
              >
                <span>📞</span>
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@elevateabroad.com"
                className="text-white/50 hover:text-gold text-xs lg:text-sm flex gap-2 transition-colors font-medium lg:font-normal"
              >
                <span>✉️</span>
                <span>info@elevateabroad.com</span>
              </a>
            </div>

            <div className="hidden lg:block mt-4">
              <label className="block text-white/70 text-sm mb-2">Get free resources</label>
              {isSubscribed ? (
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2 text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form className="flex" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white/10 border border-white/15 focus:border-gold/50 rounded-l-xl px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none w-full transition-colors font-body"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubscribing}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold hover:bg-yellow-500 text-navy font-bold px-4 py-2 rounded-r-xl text-sm transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[90px] font-body"
                  >
                    {isSubscribing ? (
                      <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
                    ) : (
                      "Subscribe"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] lg:text-xs">
          <p>© 2024 ElevateAbroad<span className="hidden sm:inline">. All rights reserved.</span></p>
          <div className="hidden sm:flex gap-4">
            <Link href="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white/60 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
