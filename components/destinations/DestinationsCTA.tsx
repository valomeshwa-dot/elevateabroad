"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  Globe2,
  Users,
  Award,
  DollarSign,
  GraduationCap,
  TrendingUp
} from 'lucide-react'
import {
  fadeUp,
  scaleUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerGrid,
  viewport
} from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function DestinationsCTA() {
  return (
    <div className="overflow-hidden">
      {/* SECTION A — Comparison teaser */}
      <section className="bg-[#F6F8FC] py-10 lg:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              layout={false}
            >
              <motion.div variants={fadeUp} layout={false} className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#D4AF37] block" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">NOT SURE WHERE TO STUDY</span>
              </motion.div>

              <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-2xl lg:text-4xl font-bold text-[#0F172A]">
                Let Us Help You Choose
                <span className="text-[#2F6BFF]"> the Right Country</span>
              </motion.h2>

              <motion.p variants={fadeUp} transition={{ delay: 0.2 }} layout={false} className="hidden lg:block text-[#64748B] text-base leading-relaxed mt-4">
                Every student is unique. Our counselors consider your budget, course, career goals, and lifestyle to recommend the perfect study destination just for you.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ delay: 0.3 }} layout={false}>
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-sm lg:text-base font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:shadow-[#2F6BFF]/30 transition-all cursor-pointer w-full sm:w-auto justify-center"
                  >
                    Get Free Guidance
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              layout={false}
              className="space-y-4"
            >
              <div className="relative">
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                  {/* Card 1 */}
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      variants={scaleUp}
                      layout={false}
                      className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4 lg:gap-5 cursor-pointer"
                    >
                      <div className="card-icon w-8 h-8 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#2F6BFF]/10 text-[#2F6BFF] transition-colors duration-300">
                        <DollarSign className="w-4 h-4 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#0F172A] text-sm lg:text-base">Budget Planning</h3>
                        <p className="hidden lg:block text-[#64748B] text-sm mt-1.5 leading-relaxed">
                          We find countries and universities that fit your exact budget.
                        </p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          layout={false}
                          className="hidden lg:inline-flex mt-3 items-center gap-1.5 bg-[#F6F8FC] border border-gray-200 text-[#64748B] text-xs px-3 py-1.5 rounded-lg"
                        >
                          Avg. savings: 30-40%
                        </motion.div>
                      </div>
                    </motion.a>
                  </Link>

                  {/* Card 2 */}
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      variants={scaleUp}
                      layout={false}
                      className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4 lg:gap-5 cursor-pointer"
                    >
                      <div className="card-icon w-8 h-8 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] transition-colors duration-300">
                        <GraduationCap className="w-4 h-4 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#0F172A] text-sm lg:text-base">Course Availability</h3>
                        <p className="hidden lg:block text-[#64748B] text-sm mt-1.5 leading-relaxed">
                          Match your preferred course with the best countries offering it.
                        </p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                          layout={false}
                          className="hidden lg:inline-flex mt-3 items-center gap-1.5 bg-[#F6F8FC] border border-gray-200 text-[#64748B] text-xs px-3 py-1.5 rounded-lg"
                        >
                          500+ courses mapped
                        </motion.div>
                      </div>
                    </motion.a>
                  </Link>

                  {/* Card 3 */}
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      variants={scaleUp}
                      layout={false}
                      className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4 lg:gap-5 cursor-pointer"
                    >
                      <div className="card-icon w-8 h-8 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex-shrink-0 flex items-center justify-center bg-emerald-500/10 text-emerald-600 transition-colors duration-300">
                        <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#0F172A] text-sm lg:text-base">Career Outcomes</h3>
                        <p className="hidden lg:block text-[#64748B] text-sm mt-1.5 leading-relaxed">
                          We consider post-study work rights and PR pathways for each country.
                        </p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          layout={false}
                          className="hidden lg:inline-flex mt-3 items-center gap-1.5 bg-[#F6F8FC] border border-gray-200 text-[#64748B] text-xs px-3 py-1.5 rounded-lg"
                        >
                          PR pathways in 8 countries
                        </motion.div>
                      </div>
                    </motion.a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION B — Final CTA banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="bg-gradient-to-br from-[#0A1F44] via-[#0d2a5e] to-[#0A1F44] py-10 lg:py-20 relative overflow-hidden"
      >
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
          className="w-96 h-96 bg-[#2F6BFF]/20 blur-[120px] absolute top-0 left-1/3 rounded-full pointer-events-none"
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
          className="w-64 h-64 bg-[#D4AF37]/10 blur-[100px] absolute bottom-0 right-20 rounded-full pointer-events-none"
        />

        {/* Dot grid overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">

          {/* 3 stat cards */}
          <motion.div variants={staggerGrid} className="flex justify-center gap-2 lg:gap-5 mb-8 lg:mb-14 flex-wrap">
            <motion.div variants={scaleUp} layout={false} className="bg-white/8 border border-white/15 rounded-2xl p-3 lg:p-6 min-w-[100px] lg:min-w-[160px] text-center card-hover group">
              <motion.div
                whileInView={{ rotate: [0, -10, 10, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                layout={false}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center mx-auto"
              >
                <Globe2 className="text-[#D4AF37] w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
              <div className="font-heading font-bold text-white text-xl lg:text-3xl mt-3">
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-3 transition-all group-hover:w-12"></div>
              <div className="text-white/50 text-[10px] lg:text-xs uppercase tracking-widest mt-2">Countries</div>
            </motion.div>

            <motion.div variants={scaleUp} layout={false} className="bg-white/8 border border-white/15 rounded-2xl p-3 lg:p-6 min-w-[100px] lg:min-w-[160px] text-center card-hover group">
              <motion.div
                whileInView={{ rotate: [0, -10, 10, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                layout={false}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center mx-auto"
              >
                <Users className="text-[#D4AF37] w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
              <div className="font-heading font-bold text-white text-xl lg:text-3xl mt-3">
                <AnimatedCounter target={5000} suffix="+" />
              </div>
              <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-3 transition-all group-hover:w-12"></div>
              <div className="text-white/50 text-[10px] lg:text-xs uppercase tracking-widest mt-2">Students Placed</div>
            </motion.div>

            <motion.div variants={scaleUp} layout={false} className="bg-white/8 border border-white/15 rounded-2xl p-3 lg:p-6 min-w-[100px] lg:min-w-[160px] text-center card-hover group">
              <motion.div
                whileInView={{ rotate: [0, -10, 10, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                layout={false}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center mx-auto"
              >
                <Award className="text-[#D4AF37] w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
              <div className="font-heading font-bold text-white text-xl lg:text-3xl mt-3">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-3 transition-all group-hover:w-12"></div>
              <div className="text-white/50 text-[10px] lg:text-xs uppercase tracking-widest mt-2">Visa Success</div>
            </motion.div>
          </motion.div>

          <h2 className="font-heading text-2xl lg:text-5xl font-bold tracking-tight">
            <motion.span variants={fadeUp} layout={false} className="text-white block">Ready to Begin Your</motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              layout={false}
              className="text-[#D4AF37] block mt-2"
            >
              Study Abroad Journey?
            </motion.span>
          </h2>

          <motion.p variants={fadeUp} transition={{ delay: 0.25 }} layout={false} className="text-white/60 text-sm lg:text-lg mt-5 max-w-2xl mx-auto">
            Book a free consultation today and get a personalized destination recommendation from our expert counselors.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ delay: 0.35 }} layout={false} className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4 mt-8 lg:mt-10">
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-6 py-3 lg:px-10 lg:py-4 rounded-xl text-sm lg:text-base font-semibold hover:shadow-2xl hover:shadow-[#2F6BFF]/40 transition-all inline-block relative overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                Book Free Consultation
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut'
                  }}
                />
              </motion.a>
            </Link>
            <Link href="/universities" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="border-2 border-[#D4AF37]/60 text-[#D4AF37] px-6 py-3 lg:px-10 lg:py-4 rounded-xl text-sm lg:text-base font-semibold hover:bg-[#D4AF37]/10 transition-all inline-block cursor-pointer w-full sm:w-auto"
              >
                Explore Universities
              </motion.a>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            transition={{ delayChildren: 0.4 }}
            className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-4 mt-8 lg:mt-10"
          >
            {[
              { text: "Free Consultation", icon: CheckCircle2 },
              { text: "Expert Counselors", icon: CheckCircle2 },
              { text: "No Hidden Fees", icon: CheckCircle2 }
            ].map((trust, idx) => (
              <motion.div
                key={trust.text}
                variants={scaleUp}
                layout={false}
                className="flex items-center gap-3 p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 lg:bg-white/8 lg:border-white/15 card-hover"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 rounded-lg bg-[#2F6BFF]/20 lg:bg-[#D4AF37]/15 flex items-center justify-center">
                  <trust.icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#2F6BFF] lg:text-[#D4AF37]" />
                </div>
                <p className="text-white text-sm lg:text-base font-medium lg:text-white/70">
                  {trust.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </div>
  )
}
