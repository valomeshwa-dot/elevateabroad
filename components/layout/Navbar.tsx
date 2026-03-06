"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Destinations", href: "/destinations" },
    { label: "Universities", href: "/universities" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50 py-4
        transition-all duration-300
        ${isHomePage && !isScrolled
          ? 'bg-transparent'
          : 'bg-[#0A1F44] border-b border-white/10'
        }
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ willChange: 'transform' }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            layout={false}
          >
            <Globe2 className="w-6 h-6 text-[#D4AF37]" />
            <span className="font-heading font-bold text-xl">
              <span className="text-white">Elevate</span>
              <span className="text-[#D4AF37]">Abroad</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.07) }}
                layout={false}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-all group py-1 ${pathname === link.href ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-[#D4AF37]"
                    initial={{ width: pathname === link.href ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                    layout={false}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            layout={false}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17
              }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#2F6BFF]/30 transition-all font-body inline-block"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A1F44] border-t border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-all ${pathname === link.href
                      ? "text-[#D4AF37] pb-0.5 inline-block w-fit"
                      : "text-white/70 hover:text-white"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#2F6BFF]/30 transition-all w-full mt-2 font-body block text-center"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
