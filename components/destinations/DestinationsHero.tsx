"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import PixelGrid from '@/components/ui/PixelGrid'

export default function DestinationsHero() {
  return (
    <section className="bg-[#0A1F44] min-h-screen flex items-center relative overflow-hidden">
      {/* Pixel Grid Background */}
      <PixelGrid
        dotColor="rgba(47, 107, 255, 0.1)"
        dotSize={1.5}
        gap={30}
        className="z-0"
      />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {/* Desktop: gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/50 to-transparent hidden lg:block" />
        {/* Mobile: full overlay */}
        <div className="absolute inset-0 bg-[#0A1F44]/75 lg:hidden" />
      </div>

      {/* Background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
        className="w-[500px] h-[500px] bg-[#2F6BFF]/15 rounded-full blur-[130px] absolute -top-20 left-1/4 pointer-events-none z-[2]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        layout={false}
        className="w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] absolute bottom-0 right-10 pointer-events-none z-[2]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            layout={false}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm text-white/50">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#D4AF37]">Destinations</span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
                Study Abroad
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
              Explore the World&apos;s Best Study <span className="text-[#D4AF37]">Destinations</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
              Discover world-class education opportunities in the most sought-after destinations for international students. Find your perfect destination and take the first step.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-[#2F6BFF] text-white font-semibold px-8 py-4 rounded-2xl hover:bg-[#5B8CFF] transition-all duration-200 text-center shadow-lg shadow-[#2F6BFF]/20"
              >
                Get Free Counseling
              </Link>
              <Link
                href="/universities"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 text-center flex items-center gap-2 justify-center"
              >
                View All Countries
                <span>↓</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="text-[#D4AF37]">✓</span>
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="text-[#D4AF37]">✓</span>
                <span>250+ Universities</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="text-[#D4AF37]">✓</span>
                <span>Free Guidance</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            layout={false}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {/* USA */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/us.png"
                    alt="USA"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">United States</div>
                  <div className="text-white/50 text-xs">4,000+ Universities</div>
                </div>
              </motion.a>
            </Link>

            {/* UK */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/gb.png"
                    alt="UK"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">United Kingdom</div>
                  <div className="text-white/50 text-xs">160+ Universities</div>
                </div>
              </motion.a>
            </Link>

            {/* Canada */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/ca.png"
                    alt="Canada"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Canada</div>
                  <div className="text-white/50 text-xs">100+ Universities</div>
                </div>
              </motion.a>
            </Link>

            {/* Australia */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/au.png"
                    alt="Australia"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Australia</div>
                  <div className="text-white/50 text-xs">43+ Universities</div>
                </div>
              </motion.a>
            </Link>

            {/* Germany */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/de.png"
                    alt="Germany"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Germany</div>
                  <div className="text-white/50 text-xs">Free Tuition Available</div>
                </div>
              </motion.a>
            </Link>

            {/* Ireland */}
            <Link href="/destinations" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                layout={false}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                  <img
                    src="https://flagcdn.com/w80/ie.png"
                    alt="Ireland"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Ireland</div>
                  <div className="text-white/50 text-xs">EU Gateway</div>
                </div>
              </motion.a>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
