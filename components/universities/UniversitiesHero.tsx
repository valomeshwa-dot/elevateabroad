"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Search, Building2, Globe2, Award } from 'lucide-react'
import { fadeUp, scaleUp, staggerContainer, staggerGrid } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function UniversitiesHero() {
  const regions = [
    { code: "UK", name: "UK", percent: "35%", gradient: "from-blue-800 to-blue-600" },
    { code: "US", name: "USA", percent: "28%", gradient: "from-blue-700 to-red-600" },
    { code: "CA", name: "Canada", percent: "18%", gradient: "from-red-700 to-red-500" },
    { code: "AU", name: "Australia", percent: "12%", gradient: "from-yellow-600 to-orange-500" },
    { code: "DE", name: "Germany", percent: "7%", gradient: "from-gray-700 to-gray-500" }
  ];

  return (
    <section className="bg-[#0A1F44] min-h-[auto] lg:min-h-screen flex items-center relative overflow-hidden">
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

      {/* Glow orbs */}
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
        className="w-[500px] h-[500px] bg-[#2F6BFF]/15 rounded-full blur-[130px] absolute -top-20 right-1/4 pointer-events-none z-[2]">
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
        className="w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] absolute bottom-0 left-10 pointer-events-none z-[2]">
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full mb-0 lg:mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="text-center flex flex-col items-center">
            <motion.div
              variants={fadeUp}
              layout={false}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8"
            >
              <Link href="/" className="text-white/40 text-sm hover:text-white transition-all">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/60 text-xs">Universities</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              layout={false}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
                OUR PARTNERS
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-px bg-[#D4AF37] block"
              />
            </motion.div>

            <h1 className="font-heading text-[2.5rem] lg:text-7xl font-bold text-white tracking-tight leading-tight lg:leading-[1.05] mb-6">
              <motion.span variants={fadeUp} transition={{ delay: 0.15 }} layout={false} className="block">
                250+ World-Class
              </motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.22 }} layout={false} className="block">
                Partner
              </motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.3 }} layout={false} className="text-[#D4AF37] block">
                Universities
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              layout={false}
              className="text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl mb-10"
            >
              We have partnerships with leading universities across 15 countries. Search, filter and find the perfect university that matches your academic profile and career ambitions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              layout={false}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Link href="/contact" className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2F6BFF]/40 transition-all text-sm lg:text-base text-center">
                Book Consultation
              </Link>
              <a href="#universities-grid" className="border-2 border-[#D4AF37]/50 text-[#D4AF37] px-8 py-4 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition-all text-sm lg:text-base text-center">
                Explore Universities ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              layout={false}
              className="flex flex-wrap justify-center gap-2 mt-10"
            >
              <span className="text-white/40 text-xs w-full mb-2 uppercase tracking-widest font-bold">Quick filter:</span>
              {['USA', 'UK', 'Canada', 'Australia', 'Germany'].map((country, idx) => {
                const flagCode = country === 'USA' ? 'us' : country === 'UK' ? 'gb' : country === 'Canada' ? 'ca' : country === 'Australia' ? 'au' : country === 'Germany' ? 'de' : 'us';
                return (
                  <Link href={`/universities?country=${country}`} key={country} passHref legacyBehavior>
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.55 + idx * 0.07,
                        type: 'spring',
                        stiffness: 400,
                        damping: 17
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      layout={false}
                      className="bg-white/5 border border-white/10 text-white/60 text-xs px-4 py-2 rounded-full hover:bg-white/10 hover:text-white hover:border-[#D4AF37]/40 transition-all cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <img
                        src={`https://flagcdn.com/w80/${flagCode}.png`}
                        alt={country}
                        className="w-5 h-4 object-cover rounded-sm flex-shrink-0"
                        loading="lazy"
                      />
                      <span>{country}</span>
                    </motion.a>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              layout={false}
              className="bg-white/8 border border-white/12 rounded-3xl p-8 card-hover shadow-xl"
            >

              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-heading font-bold text-lg">Our University Network</h3>
                <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold px-3 py-1.5 rounded-full">
                  250+ Partners
                </span>
              </div>

              <motion.div
                variants={staggerGrid}
                initial="hidden"
                animate="visible"
                layout={false}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { target: 98, suffix: "%", label: "Satisfaction" },
                  { target: 45, suffix: "+", label: "Counsellors" },
                  { target: 85, suffix: "+", label: "Partners" },
                  { target: 92, suffix: "%", label: "Success" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleUp}
                    layout={false}
                    className="bg-white/8 border border-white/10 rounded-2xl p-5 text-center card-hover-stat"
                  >
                    <div className="font-heading font-bold text-[#D4AF37] text-3xl">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="w-6 h-px bg-[#D4AF37]/40 mx-auto mt-2"></div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                layout={false}
                className="space-y-3"
              >
                <div className="text-white/40 text-xs uppercase tracking-wide mb-4 font-semibold">
                  Partner breakdown by region
                </div>

                {regions.map((region, idx) => (
                  <motion.div
                    key={region.code}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.7 + idx * 0.1,
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                    layout={false}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-5 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={`https://flagcdn.com/w80/${region.code === 'UK' ? 'gb' : region.code === 'US' ? 'us' : region.code.toLowerCase()}.png`}
                        alt={region.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-white/70 text-sm flex-1">{region.name}</div>
                    <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: region.percent }}
                        transition={{
                          delay: 0.9 + idx * 0.1,
                          duration: 0.8,
                          ease: 'easeOut'
                        }}
                        className="bg-[#D4AF37] rounded-full h-1.5"
                      />
                    </div>
                    <div className="text-white/40 text-xs">{region.percent}</div>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
