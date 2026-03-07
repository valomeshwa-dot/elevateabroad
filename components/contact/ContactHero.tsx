"use client"
import { motion } from 'framer-motion'
import { Mail, Clock, Phone } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'

export default function ContactHero() {
  return (
    <section className="bg-[#0A1F44] relative overflow-hidden min-h-screen flex items-start lg:items-center">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/50 to-transparent hidden lg:block" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-full lg:max-w-lg overflow-hidden lg:overflow-visible"
          >
            {/* Label */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              layout={false}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]"
            >
              Let's Start Your{' '}
              <span className="text-[#D4AF37]">
                Journey Together
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              layout={false}
              className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-lg"
            >
              Book a free consultation or reach out to our team. We are here to answer every question about your study abroad journey.
            </motion.p>

            {/* Contact Pills */}
            <motion.div
              variants={fadeUp}
              layout={false}
              className="flex flex-row flex-wrap gap-3 mt-8"
            >
              {/* Phone */}
              <a href="tel:+919876543210"
                className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  +91 98765 43210
                </span>
              </a>

              {/* Email */}
              <a href="mailto:info@elevateabroad.com"
                className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  info@elevateabroad.com
                </span>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  Mon-Sat: 9AM - 7PM IST
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:flex flex-col gap-4 w-full">
            {/* Card 01 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 8 }}
              layout={false}
              className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-all duration-300">
                <span className="text-[#D4AF37] group-hover:text-[#0A1F44] font-bold text-sm transition-colors duration-300">
                  01
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Free 30-Min Consultation
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  No cost, no commitment. Just expert guidance to start your journey.
                </p>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ x: 8 }}
              layout={false}
              className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-all duration-300">
                <span className="text-[#D4AF37] group-hover:text-[#0A1F44] font-bold text-sm transition-colors duration-300">
                  02
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Response Within 24 Hours
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our team gets back to every inquiry within one business day.
                </p>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 8 }}
              layout={false}
              className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-all duration-300">
                <span className="text-[#D4AF37] group-hover:text-[#0A1F44] font-bold text-sm transition-colors duration-300">
                  03
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Personalized Roadmap
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Walk away with a clear action plan tailored to your profile and goals.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
