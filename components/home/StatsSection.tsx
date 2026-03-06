"use client"
import { motion } from 'framer-motion'
import { staggerContainer, scaleUp } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsSection() {
  const stats = [
    { target: 5000, suffix: "+", label: "Students Placed" },
    { target: 250, suffix: "+", label: "Partner Universities" },
    { target: 15, suffix: "+", label: "Countries" },
    { target: 98, suffix: "%", label: "Visa Success Rate" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
      layout={false}
      className="bg-white py-8 lg:py-16 border-t-4 border-t-gold"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              layout={false}
              whileTap={{ scale: 0.93 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 15
              }}
              className="bg-bg rounded-2xl p-4 lg:p-6 text-center border border-gray-100 group cursor-pointer active:brightness-95 card-hover-stat"
            >
              <div className="text-2xl lg:text-4xl font-bold text-royal font-heading tracking-tight card-icon">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <motion.div
                className="w-6 lg:w-10 h-1 bg-gold mx-auto mt-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                layout={false}
              />
              <div className="text-textSecondary text-xs lg:text-sm uppercase tracking-[0.15em] mt-3 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
