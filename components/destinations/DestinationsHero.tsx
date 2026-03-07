"use client"
import Link from 'next/link'
import { ChevronRight, Globe2, MapPin, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, scaleUp, staggerContainer, staggerGrid } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'

export default function DestinationsHero() {
  const cards = [
    { code: "US", name: "United States", detail: "4,000+ Universities", gradient: "bg-gradient-to-br from-blue-700 to-red-600" },
    { code: "UK", name: "United Kingdom", detail: "150+ Universities", gradient: "bg-gradient-to-br from-blue-800 to-blue-600" },
    { code: "CA", name: "Canada", detail: "100+ Universities", gradient: "bg-gradient-to-br from-red-700 to-red-500" },
    { code: "AU", name: "Australia", detail: "43+ Universities", gradient: "bg-gradient-to-br from-yellow-600 to-orange-500" },
    { code: "DE", name: "Germany", detail: "400+ Universities", gradient: "bg-gradient-to-br from-gray-700 to-gray-500" },
    { code: "IE", name: "Ireland", detail: "30+ Universities", gradient: "bg-gradient-to-br from-green-700 to-green-500" }
  ];

  return (
    <section className="bg-[#0A1F44] min-h-[65vh] flex items-center relative overflow-hidden">
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
        className="w-[500px] h-[500px] bg-[#2F6BFF]/15 rounded-full blur-[130px] absolute -top-20 left-1/4 pointer-events-none z-[2]">
      </motion.div>
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
        className="w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] absolute bottom-0 right-10 pointer-events-none z-[2]">
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 lg:pt-32 lg:pb-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>
            <motion.div
              variants={fadeUp}
              layout={false}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8"
            >
              <Link href="/" className="text-white/40 text-sm hover:text-white transition-all">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/50 text-xs">Destinations</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              layout={false}
              className="flex items-center gap-3 mb-5"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
                WHERE TO STUDY
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-px bg-[#D4AF37] block"
              />
            </motion.div>

            <h1 className="font-heading text-[2rem] lg:text-7xl font-bold text-white tracking-tight leading-tight lg:leading-[1.05] mb-6">
              <motion.span variants={fadeUp} transition={{ delay: 0.15 }} layout={false} className="block">
                Explore the World&apos;s
              </motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.22 }} layout={false} className="block">
                Best Study
              </motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.3 }} layout={false} className="text-[#D4AF37] block">
                Destinations
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              layout={false}
              className="text-white/60 text-sm lg:text-lg leading-relaxed max-w-lg mb-4 lg:mb-10 line-clamp-3 lg:line-clamp-none"
            >
              Discover world-class education opportunities in the most sought-after countries for international students. Find your perfect destination and take the first step.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              layout={false}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link href="/contact" className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2F6BFF]/40 transition-all inline-block w-full text-center text-sm lg:text-base">
                  Get Free Counseling
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <a href="#destinations-grid" className="border-2 border-[#D4AF37]/50 text-[#D4AF37] px-8 py-4 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition-all inline-block w-full text-center text-sm lg:text-base">
                  View All Countries ↓
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerGrid}
            className="hidden lg:block"
            style={{ '--stagger-delay': '0.4s' } as any}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto">
              {cards.map((card, index) => (
                <Link href="/destinations" key={index} passHref legacyBehavior>
                  <motion.a
                    variants={scaleUp}
                    layout={false}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/8 border border-white/12 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-200 cursor-pointer group card-hover text-left"
                  >
                    <div className={`country-badge w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center font-heading font-bold text-white text-base ${card.gradient} transition-transform duration-300 group-hover:scale-110`}>
                      {card.code}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">{card.name}</h3>
                      <p className="text-white/50 text-xs mt-0.5">{card.detail}</p>
                    </div>
                    <ChevronRight className="ml-auto w-4 h-4 text-white/20" />
                  </motion.a>
                </Link>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.8 }}
              layout={false}
              className="text-white/30 text-xs text-center mt-6"
            >
              Click any destination to learn more
            </motion.p>
          </motion.div>

        </div>

        {/* HERO BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:flex border-t border-white/10 mt-16 pt-8 flex-wrap gap-8 justify-center"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center">
              <Globe2 className="text-[#D4AF37] w-4 h-4" />
            </div>
            <span className="text-white/60 text-sm">15+ Countries to choose from</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center">
              <GraduationCap className="text-[#D4AF37] w-4 h-4" />
            </div>
            <span className="text-white/60 text-sm">500+ University options</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center">
              <MapPin className="text-[#D4AF37] w-4 h-4" />
            </div>
            <span className="text-white/60 text-sm">Free expert guidance included</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
