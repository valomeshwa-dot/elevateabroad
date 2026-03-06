"use client"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleUp } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import PixelGrid from '@/components/ui/PixelGrid'

export default function ServicesHero() {
  return (
    <section className="bg-navy min-h-[65vh] pt-32 pb-20 flex items-center relative overflow-hidden">
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

      {/* Glow orbs with infinite animation */}
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
        className="absolute top-0 left-1/3 w-96 h-96 bg-royal/15 rounded-full blur-[120px] pointer-events-none z-[2]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
        className="absolute bottom-0 right-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none z-[2]"
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb Pill */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          layout={false}
          className="flex items-center justify-center mb-8"
        >
          <div className="bg-white/8 border border-white/15 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <Link href="/" className="text-white/40 text-sm hover:text-gold transition">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-white/60 text-sm">Services</span>
          </div>
        </motion.div>

        {/* Label Row */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          layout={false}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            layout={false}
            className="h-px bg-gold block"
          />
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">OUR SERVICES</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            layout={false}
            className="h-px bg-gold block"
          />
        </motion.div>

        {/* Header Lines */}
        <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mt-4">
          <motion.span
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            layout={false}
            className="block"
          >
            Comprehensive Support
          </motion.span>
          <motion.span
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            layout={false}
            className="text-gold block"
          >
            at Every Step
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          layout={false}
          className="text-white/60 text-lg mt-6 max-w-xl mx-auto leading-relaxed"
        >
          From choosing the right university to landing your dream job abroad, we provide complete end-to-end guidance for your entire study abroad journey.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.45 }}
          layout={false}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
        >
          <Link
            href="/contact"
            className="bg-white text-navy px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-white/20 active:scale-95 hover:scale-[1.03] transition-all"
          >
            Book Free Consultation
          </Link>
          <a
            href="#services-list"
            className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 active:scale-95 hover:scale-[1.03] transition-all flex items-center gap-2 justify-center"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mt-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {/* Stat 1 */}
          <motion.div
            variants={scaleUp}
            layout={false}
            className="bg-white/8 border border-white/15 rounded-2xl px-8 py-5 text-center min-w-[160px]"
          >
            <div className="text-gold font-heading font-bold text-3xl">
              <AnimatedCounter target={5000} suffix="+" />
            </div>
            <div className="w-6 h-px bg-gold/40 mx-auto mt-2"></div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-2">Students Helped</div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            layout={false}
            className="hidden md:block w-px bg-white/10"
          />

          {/* Stat 2 */}
          <motion.div
            variants={scaleUp}
            layout={false}
            className="bg-white/8 border border-white/15 rounded-2xl px-8 py-5 text-center min-w-[160px]"
          >
            <div className="text-gold font-heading font-bold text-3xl">
              <AnimatedCounter target={98} suffix="%" />
            </div>
            <div className="w-6 h-px bg-gold/40 mx-auto mt-2"></div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-2">Visa Success Rate</div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            layout={false}
            className="hidden md:block w-px bg-white/10"
          />

          {/* Stat 3 */}
          <motion.div
            variants={scaleUp}
            layout={false}
            className="bg-white/8 border border-white/15 rounded-2xl px-8 py-5 text-center min-w-[160px]"
          >
            <div className="text-gold font-heading font-bold text-3xl">
              <AnimatedCounter target={250} suffix="+" />
            </div>
            <div className="w-6 h-px bg-gold/40 mx-auto mt-2"></div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-2">Partner Universities</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
