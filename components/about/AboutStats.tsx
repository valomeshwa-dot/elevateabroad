"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trophy, Star, Shield, Award, Users, Globe2 } from 'lucide-react'
import { fadeUp, scaleUp, slideInLeft, slideInRight, staggerContainer, staggerGrid, viewport } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function AboutStats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      target: 5000,
      suffix: "+",
      label: "Students Placed"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      target: 15,
      suffix: "+",
      label: "Countries"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      target: 98,
      suffix: "%",
      label: "Visa Success Rate"
    },
    {
      icon: <Award className="w-6 h-6" />,
      target: 2015,
      suffix: "",
      label: "Year Founded",
      duration: 1000
    }
  ];

  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      year: "2023",
      title: "Best Education Consultancy India"
    },
    {
      icon: <Star className="w-8 h-8" />,
      year: "2022",
      title: "Top 10 Study Abroad Consultants"
    },
    {
      icon: <Award className="w-8 h-8" />,
      year: "2021",
      title: "Excellence in Student Services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      year: "2020",
      title: "ISO 9001 Certified Consultancy"
    }
  ];

  return (
    <section>
      {/* SECTION A — Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="bg-[#0A1F44] py-24 relative overflow-hidden"
      >

        {/* Glow orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#2F6BFF]/20 blur-[120px]"
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
            className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/15 blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16 relative z-10">
            <motion.div variants={fadeUp} layout={false} className="flex items-center justify-center gap-3 mb-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
                BY THE NUMBERS
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-5xl font-bold text-white tracking-tight mt-3">
              Our Track Record
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-[#D4AF37]"
              > Speaks</motion.span>
            </motion.h2>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={staggerGrid}
            transition={{ delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            layout={false}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={scaleUp}
                layout={false}
                className="bg-white/6 border border-white/12 rounded-3xl p-10 text-center transition-all card-hover"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                  layout={false}
                  className="w-12 h-12 rounded-2xl mx-auto bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center card-icon"
                >
                  <div className="text-[#D4AF37]">{stat.icon}</div>
                </motion.div>
                <div className="font-heading font-bold text-white text-5xl mt-5">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={stat.duration} />
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.4 + idx * 0.1,
                    duration: 0.6,
                    ease: 'easeOut'
                  }}
                  layout={false}
                  className="h-1 bg-[#D4AF37] rounded-full mx-auto mt-4"
                />
                <div className="text-white/50 text-sm uppercase tracking-widest mt-3">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* SECTION B — Awards */}
      <div className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            layout={false}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} layout={false} className="flex items-center justify-center gap-3 mb-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">
                RECOGNITION
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-4xl font-bold text-[#0F172A] tracking-tight mt-3">
              Awards & Achievements
            </motion.h2>
          </motion.div>

          {/* Awards grid */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            layout={false}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {awards.map((award, idx) => (
              <motion.div
                key={award.title}
                variants={scaleUp}
                layout={false}
                className="bg-[#F6F8FC] rounded-3xl p-8 text-center border border-gray-100 transition-all duration-300 card-hover card-hover-gold"
              >
                <motion.div
                  initial={{ scale: 0, y: 10 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.2 + idx * 0.1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 15
                  }}
                  layout={false}
                  className="w-16 h-16 rounded-2xl mx-auto bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center card-icon"
                >
                  <div className="text-[#D4AF37]">{award.icon}</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.35 + idx * 0.1,
                    type: 'spring',
                    stiffness: 500
                  }}
                  layout={false}
                  className="bg-[#0A1F44] text-white text-xs font-bold px-3 py-1 rounded-full mx-auto mt-4 inline-block"
                >
                  {award.year}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.4 + idx * 0.1,
                    duration: 0.4
                  }}
                  layout={false}
                  className="font-heading font-bold text-[#0F172A] text-sm mt-4 leading-tight"
                >
                  {award.title}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Below awards — CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            layout={false}
            className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] rounded-3xl p-10 mt-16 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={slideInLeft} layout={false}>
              <motion.h3 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-2xl font-bold text-white">
                Ready to join our success story?
              </motion.h3>
              <motion.p variants={fadeUp} transition={{ delay: 0.2 }} layout={false} className="text-white/70 text-base mt-2">
                Book a free consultation with our experts today.
              </motion.p>
            </motion.div>
            <motion.div variants={slideInRight} layout={false}>
              <Link href="/contact" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="bg-white text-[#2F6BFF] px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:bg-[#F6F8FC] transition-all inline-block whitespace-nowrap cursor-pointer"
                >
                  Book Free Consultation →
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
