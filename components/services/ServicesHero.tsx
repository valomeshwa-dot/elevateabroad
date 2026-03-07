"use client"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'

export default function ServicesHero() {
  return (
    <section className="bg-[#0A1F44] relative overflow-hidden min-h-screen flex items-center">
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {/* Breadcrumb Pill */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex items-center mb-6 lg:mb-8"
            >
              <div className="bg-white/8 border border-white/15 rounded-full px-4 py-2 inline-flex items-center gap-2">
                <Link href="/" className="text-white/40 text-xs lg:text-sm hover:text-[#D4AF37] transition">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/30" />
                <span className="text-white/60 text-xs lg:text-sm">Services</span>
              </div>
            </motion.div>

            {/* Label Row */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Our Services</span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              layout={false}
              className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-5"
            >
              Comprehensive Support
              <span className="text-[#D4AF37] block">at Every Step</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              layout={false}
              className="text-white/70 text-base lg:text-lg max-w-lg leading-relaxed mb-8"
            >
              From choosing the right university to landing your dream job abroad, we provide complete end-to-end guidance for your entire study abroad journey.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex items-center gap-4 flex-col sm:flex-row mb-10"
            >
              <Link
                href="/contact"
                className="bg-[#2F6BFF] text-white font-semibold px-8 py-4 rounded-2xl w-full sm:w-auto text-center hover:bg-[#5B8CFF] transition-all duration-200 shadow-lg shadow-[#2F6BFF]/25"
              >
                Book Free Consultation
              </Link>
              <Link
                href="#services-list"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl w-full sm:w-auto hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Explore Services ↓
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex items-center gap-8 lg:gap-12 pt-8 border-t border-white/10 flex-wrap"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37]">5,000+</div>
                <div className="text-xs text-white/60 tracking-wider uppercase whitespace-nowrap">Students Helped</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37]">98%</div>
                <div className="text-xs text-white/60 tracking-wider uppercase whitespace-nowrap">Visa Success</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37]">250+</div>
                <div className="text-xs text-white/60 tracking-wider uppercase whitespace-nowrap">Partner Unis</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            layout={false}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-4 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-white font-bold text-lg">Our Services</div>
                  <div className="text-white/50 text-sm">End-to-end support for you</div>
                </div>
                <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-xl px-3 py-1.5">
                  <span className="text-[#D4AF37] text-xs font-bold">6 Services</span>
                </div>
              </div>

              {/* Service List Items */}
              {[
                { icon: "🎯", name: "Career Counseling", desc: "Find your perfect path", color: "bg-blue-500/20", students: "1,200+ students" },
                { icon: "🎓", name: "University Selection", desc: "250+ partner universities", color: "bg-purple-500/20", students: "2,500+ students" },
                { icon: "📋", name: "Application Assistance", desc: "100% error-free submissions", color: "bg-green-500/20", students: "3,000+ students" },
                { icon: "🛂", name: "Visa Support", desc: "98% approval rate", color: "bg-orange-500/20", students: "4,000+ students" },
                { icon: "🏆", name: "Scholarship Guidance", desc: "₹50Cr+ scholarships secured", color: "bg-yellow-500/20", students: "800+ students" },
                { icon: "✍️", name: "SOP & Essay Writing", desc: "Personalised for each uni", color: "bg-pink-500/20", students: "1,500+ students" },
              ].map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  layout={false}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-200 cursor-pointer group"
                >
                  {/* Icon Box */}
                  <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0 text-lg`}>
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </div>
                    <div className="text-white/50 text-xs truncate">
                      {service.desc}
                    </div>
                  </div>

                  {/* Student Volume Badge */}
                  <div className="text-white/40 text-xs whitespace-nowrap">
                    {service.students}
                  </div>
                </motion.div>
              ))}

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full bg-[#D4AF37] text-[#0A1F44] font-bold py-3.5 rounded-2xl text-center text-sm hover:bg-[#F0C842] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Your Journey Today →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
