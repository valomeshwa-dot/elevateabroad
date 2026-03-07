"use client"
import { motion } from 'framer-motion'
import { Target, Shield, Award, Users } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, scaleUp, viewport } from '@/lib/animations'

export default function AboutStory() {
  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Student First",
      desc: "Every decision we make puts student success at the absolute center.",
      colorClass: "bg-[#2F6BFF]/10 text-[#2F6BFF]"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Transparency",
      desc: "No hidden fees, no false promises — only honest and ethical guidance.",
      colorClass: "bg-emerald-500/10 text-emerald-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence Always",
      desc: "We maintain the highest standards in every service we deliver.",
      colorClass: "bg-[#D4AF37]/10 text-[#D4AF37]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lifelong Community",
      desc: "Join a global alumni network of 5,000+ ElevateAbroad success stories.",
      colorClass: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <section className="bg-white py-10 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">

        {/* LEFT COLUMN */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          layout={false}
        >
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} layout={false}>
            <motion.div variants={fadeUp} layout={false} className="flex items-center gap-3 mb-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">
                MISSION & VISION
              </span>
            </motion.div>

            <h2 className="font-heading text-2xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mt-3 mb-3 lg:mb-6">
              <motion.span variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="block">Democratizing Access to</motion.span>
              <motion.span variants={fadeUp} transition={{ delay: 0.18 }} layout={false} className="text-[#2F6BFF] block">World-Class Education</motion.span>
            </h2>

            <motion.p variants={fadeUp} transition={{ delay: 0.25 }} layout={false} className="text-[#64748B] text-sm lg:text-base leading-relaxed mb-5">
              ElevateAbroad was founded with a single mission — to make quality international education accessible to every deserving student regardless of their background or location.
            </motion.p>

            <motion.p variants={fadeUp} transition={{ delay: 0.3 }} layout={false} className="hidden lg:block text-[#64748B] text-base leading-relaxed mb-8">
              We believe that the right guidance at the right time can completely transform a student&apos;s life. Our team of 50+ expert counselors have themselves studied abroad and understand your journey firsthand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ delay: 0.35, duration: 0.6 }}
              layout={false}
              className="bg-[#0A1F44] rounded-2xl p-5 lg:p-8 mb-4 lg:mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F6BFF]/20 rounded-full blur-[60px] pointer-events-none"></div>

              <motion.span
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 300
                }}
                layout={false}
                className="text-[#D4AF37] text-2xl lg:text-5xl font-serif leading-none mb-4 block relative z-10"
              >
                &quot;
              </motion.span>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewport}
                transition={{ delay: 0.6, duration: 0.6 }}
                layout={false}
                className="text-white/80 text-sm lg:text-base italic leading-relaxed line-clamp-3 lg:line-clamp-none relative z-10"
              >
                Our mission is to be the bridge between ambitious students and world-class universities, making the dream of studying abroad a reality for every deserving student.
              </motion.p>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ delay: 0.75, duration: 0.4 }}
                layout={false}
                className="text-[#D4AF37] text-sm font-semibold mt-5 block relative z-10"
              >
                — Amit Sharma, Founder & CEO
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          layout={false}
        >
          <motion.h3 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-lg lg:text-2xl font-bold text-[#0F172A] mt-4 lg:mt-0 mb-3 lg:mb-6">
            Our Core Values
          </motion.h3>

          <motion.div variants={staggerContainer} transition={{ delay: 0.2 }} initial="hidden" whileInView="visible" viewport={viewport} layout={false} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                variants={scaleUp}
                layout={false}
                className="bg-[#F6F8FC] rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-gray-100 transition-all duration-300 flex items-start gap-3 lg:gap-5 card-hover"
              >
                <div className={`w-8 h-8 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex-shrink-0 flex items-center justify-center card-icon ${value.colorClass}`}>
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0F172A] text-sm lg:text-base">{value.title}</h4>
                  <p className="text-[#64748B] text-xs lg:text-sm mt-1 lg:mt-1.5 leading-relaxed line-clamp-2 lg:line-clamp-none">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
