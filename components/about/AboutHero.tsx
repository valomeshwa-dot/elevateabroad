"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Target, Heart, Globe2 } from 'lucide-react'
import { fadeUp, scaleUp, staggerContainer, staggerGrid } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function AboutHero() {
  const milestones = [
    { year: "2015", title: "Founded", desc: "Started with 3 counselors in Mumbai" },
    { year: "2018", title: "Expanded", desc: "Grew to 50+ counselors, 10 countries" },
    { year: "2021", title: "Milestone", desc: "Crossed 2,500 successful placements" },
    { year: "2024", title: "Today", desc: "5,000+ students placed across 15 countries" }
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
        className="w-[500px] h-[500px] bg-[#2F6BFF]/15 blur-[130px] absolute -top-20 left-1/4 rounded-full pointer-events-none z-[2]"
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
        className="w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[100px] absolute bottom-0 right-10 rounded-full pointer-events-none z-[2]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0 }}
              layout={false}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8"
            >
              <Link href="/" className="text-white/40 text-sm hover:text-white transition-all">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/50 text-xs">About Us</span>
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
                OUR STORY
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-px bg-[#D4AF37] block lg:hidden"
              />
            </motion.div>

            <h1 className="font-heading text-[2.5rem] lg:text-7xl font-bold text-white tracking-tight leading-tight lg:leading-[1.05] mb-6">
              <motion.span variants={fadeUp} transition={{ delay: 0.15 }} layout={false} className="block">Helping Students</motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.22 }} layout={false} className="block">Reach Their</motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.3 }} layout={false} className="text-[#D4AF37] block">Full Potential</motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              layout={false}
              className="text-white/60 text-base lg:text-lg max-w-xl leading-relaxed mb-10"
            >
              Founded in 2015 by passionate education experts, ElevateAbroad has grown into one of the most trusted study abroad consultancies, helping over 5,000 students achieve their international university dreams.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              layout={false}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
            >
              <Link href="/contact" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2F6BFF]/30 transition-all cursor-pointer text-center text-sm lg:text-base"
                >
                  Book Free Consultation
                </motion.a>
              </Link>
              <motion.a
                href="#about-team"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto border-2 border-[#D4AF37]/50 text-[#D4AF37] px-8 py-4 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition-all cursor-pointer text-center text-sm lg:text-base"
              >
                Meet Our Team ↓
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              layout={false}
              className="bg-white/8 border border-white/15 rounded-3xl p-6 lg:p-8 backdrop-blur card-hover shadow-xl"
            >

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                layout={false}
                className="hidden lg:flex items-center gap-4 mb-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F6BFF] to-[#5B8CFF] flex items-center justify-center">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white font-heading font-bold text-xl">ElevateAbroad</div>
                  <div className="text-white/50 text-sm mt-1">Est. 2015 · Mumbai, India</div>
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-2 lg:space-y-4 mb-4 lg:mb-8"
              >
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.6 + idx * 0.12,
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    layout={false}
                    className="flex items-start gap-2 lg:gap-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.65 + idx * 0.12,
                        type: 'spring',
                        stiffness: 500
                      }}
                      layout={false}
                      className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] lg:text-xs font-bold px-2 py-0.5 lg:px-3 lg:py-1.5 rounded-lg w-14 lg:w-16 text-center flex-shrink-0"
                    >
                      {milestone.year}
                    </motion.div>
                    <div>
                      <div className="text-white font-semibold text-xs lg:text-sm">{milestone.title}</div>
                      <div className="text-white/50 text-[10px] lg:text-xs mt-0.5">{milestone.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={staggerGrid}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 gap-0 border-t border-white/10 pt-4 mt-4 lg:pt-8 lg:mt-12"
              >
                {[
                  { target: 50, suffix: "+", label: "Counselors" },
                  { target: 15, suffix: "+", label: "Countries" },
                  { target: 9, suffix: "", label: "Years Exp." }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.9 + idx * 0.1,
                      duration: 0.4
                    }}
                    layout={false}
                    className="text-center"
                  >
                    <div className="font-heading font-bold text-[#D4AF37] text-2xl lg:text-4xl">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/40 text-[10px] lg:text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
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
