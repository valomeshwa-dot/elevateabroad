"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, MessageCircle, Clock, Phone } from 'lucide-react'
import { fadeUp, staggerContainer, staggerGrid } from '@/lib/animations'
import PixelGrid from '@/components/ui/PixelGrid'

export default function ContactHero() {
  const contactPills = [
    { icon: <Phone className="w-4 h-4" />, label: "+91 98765 43210" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "info@elevateabroad.com" },
    { icon: <Clock className="w-4 h-4" />, label: "Mon-Sat: 9AM - 7PM IST" }
  ];

  const reasonCards = [
    {
      num: "01",
      title: "Free 30-Min Consultation",
      desc: "No cost, no commitment. Just expert guidance to start your journey."
    },
    {
      num: "02",
      title: "Response Within 24 Hours",
      desc: "Our team gets back to every inquiry within one business day."
    },
    {
      num: "03",
      title: "Personalized Roadmap",
      desc: "Walk away with a clear action plan tailored to your profile and goals."
    }
  ];

  return (
    <section className="bg-[#0A1F44] min-h-[55vh] flex items-center relative overflow-hidden">
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
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 lg:pt-32 lg:pb-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0 }}
              layout={false}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8"
            >
              <Link href="/" className="text-white/40 text-sm hover:text-white transition-all font-medium">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/50 text-xs font-medium">Contact</span>
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
                GET IN TOUCH
              </span>
            </motion.div>

            <h1 className="font-heading text-[2rem] lg:text-7xl font-bold text-white tracking-tight leading-tight lg:leading-[1.05] mb-6">
              <motion.span variants={fadeUp} transition={{ delay: 0.15 }} layout={false} className="block">Let&apos;s Start Your</motion.span>
              <span className="text-[#D4AF37] block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  Journey
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="inline-block"
                >
                  Together
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              layout={false}
              className="text-white/60 text-sm lg:text-lg max-w-lg leading-relaxed mb-4 lg:mb-8 line-clamp-2 lg:line-clamp-none"
            >
              Book a free consultation or reach out to our team. We are here to answer every question about your study abroad journey.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-6 lg:mt-10"
            >
              {contactPills.map((pill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.45 + idx * 0.1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 17
                  }}
                  whileHover={{ scale: 1.04, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  layout={false}
                  className="bg-white/8 border border-white/15 rounded-xl lg:rounded-2xl px-3 py-2 lg:px-5 lg:py-3 flex items-center gap-3 transition-colors hover:bg-white/12 hover:border-white/20 cursor-pointer w-full lg:w-auto"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center card-icon">
                    <span className="text-[#D4AF37] scale-90 lg:scale-100">{pill.icon}</span>
                  </div>
                  <span className="text-white/70 text-sm lg:text-base font-medium">{pill.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hidden lg:block space-y-4"
          >
            {reasonCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.3 + idx * 0.15,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                layout={false}
                className="bg-white/8 border border-white/15 rounded-2xl p-6 flex items-start gap-4 card-hover shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.4 + idx * 0.15,
                    type: 'spring',
                    stiffness: 400,
                    damping: 15
                  }}
                  layout={false}
                  className="w-10 h-10 rounded-xl flex-shrink-0 bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-heading font-bold text-lg"
                >
                  {card.num}
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.45 + idx * 0.15,
                      duration: 0.4
                    }}
                    layout={false}
                    className="text-white font-semibold text-sm"
                  >
                    {card.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.5 + idx * 0.15,
                      duration: 0.4
                    }}
                    layout={false}
                    className="text-white/50 text-xs mt-1 leading-relaxed"
                  >
                    {card.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
