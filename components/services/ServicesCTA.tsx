"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { fadeUp, scaleUp, staggerContainer } from '@/lib/animations'

export default function ServicesCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="bg-gradient-to-br from-navy via-[#0d2a5e] to-navy py-24 relative overflow-hidden"
    >
      {/* Glow Orbs - Pulse animate infinitely */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
        className="absolute top-0 left-1/4 w-96 h-96 bg-royal/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Dot grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        layout={false}
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Label row */}
        <motion.div
          variants={fadeUp}
          layout={false}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            layout={false}
            className="h-px bg-gold block"
          />
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">READY TO START</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            layout={false}
            className="h-px bg-gold block"
          />
        </motion.div>

        {/* Header */}
        <h2 className="font-heading text-5xl lg:text-6xl font-bold tracking-tight mt-4">
          <motion.span
            variants={fadeUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            layout={false}
            className="text-white block"
          >
            Begin Your Journey
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            layout={false}
            className="text-gold block"
          >
            With Confidence
          </motion.span>
        </h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          layout={false}
          className="text-white/60 text-lg mt-5 max-w-xl mx-auto leading-relaxed"
        >
          Book a free consultation and let our experts build a personalized roadmap for your study abroad success.
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          layout={false}
          className="flex justify-center gap-4 mt-10 flex-wrap"
        >
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-gradient-to-r from-royal to-royalLight text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-royal/40 relative overflow-hidden transition-shadow inline-block cursor-pointer"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut'
                }}
                layout={false}
              />
              Book Free Consultation
            </motion.a>
          </Link>
          <Link href="/destinations" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-gold/60 text-gold px-10 py-4 rounded-xl font-semibold hover:bg-gold/10 transition-all inline-block cursor-pointer"
            >
              View Destinations
            </motion.a>
          </Link>
        </motion.div>

        <div className="w-24 h-px bg-white/20 mx-auto mt-10 mb-8"></div>

        {/* Trust Cards */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          variants={staggerContainer}
          transition={{ delay: 0.4 }}
        >
          {[
            "Free Consultation",
            "No Hidden Fees",
            "Expert Team"
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              layout={false}
              className="bg-white/8 border border-white/15 rounded-2xl px-6 py-4 flex items-center gap-2.5 card-hover"
            >
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span className="text-white/70 text-sm font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
