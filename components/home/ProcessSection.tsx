"use client"
import { MessageCircle, Search, FileCheck, Stamp, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { fadeUp } from "@/lib/animations";

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      desc: "Discuss your goals and profile.",
    },
    {
      icon: Search,
      title: "University Shortlisting",
      desc: "Find the best fit for you.",
    },
    {
      icon: FileCheck,
      title: "Application Support",
      prepare: "Prepare and submit documents.",
    },
    {
      icon: Stamp,
      title: "Visa Process",
      desc: "Secure your student visa.",
    },
    {
      icon: GraduationCap,
      title: "Admission Success",
      desc: "Fly to your dream university.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 lg:py-24 overflow-hidden"
      layout={false}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          layout={false}
        >
          <div className="flex items-center gap-3 justify-center text-royal text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-8 h-px bg-gold"></span>
            HOW IT WORKS
            <span className="w-8 h-px bg-gold"></span>
          </div>
          <h2 className="font-heading text-2xl lg:text-5xl font-bold text-textPrimary tracking-tight">
            Your Journey With Us
          </h2>
          <p className="text-textSecondary mt-4 max-w-lg mx-auto text-sm lg:text-base leading-relaxed">
            A streamlined, transparent process designed to maximize your chances of success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line BEHIND the steps */}
          <motion.div
            className="absolute top-[2rem] left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold/30 hidden lg:block"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            layout={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileTap={{ scale: 0.93 }}
                layout={false}
                transition={{
                  scale: { type: 'spring', stiffness: 500, damping: 15 },
                  opacity: { duration: 0.6, delay: 0.1 + index * 0.2 },
                  y: { duration: 0.6, delay: 0.1 + index * 0.2 },
                }}
                className="text-center relative z-10 group cursor-pointer active:brightness-95 card-hover-step"
              >
                <Link href="/contact" className="absolute inset-0 z-10" />
                <div
                  className="w-16 h-16 rounded-full border-2 border-gold bg-white mx-auto flex items-center justify-center shadow-lg shadow-gold/20 step-number relative z-20"
                >
                  <span className="text-gold font-bold text-xl font-heading">{index + 1}</span>
                </div>
                <step.icon className="w-5 h-5 text-textSecondary mx-auto mt-4 card-icon relative z-20" />
                <h3 className="font-heading font-bold text-textPrimary mt-3 text-sm lg:text-base group-hover:text-royal transition-colors duration-300 relative z-20">
                  {step.title}
                </h3>
                <p className="text-textSecondary text-xs lg:text-sm mt-2 max-w-[120px] lg:max-w-none mx-auto leading-relaxed relative z-20">
                  {step.desc || ('prepare' in step ? (step as { prepare: string }).prepare : '')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-royal to-royalLight text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-royal/30 active:scale-95 hover:scale-[1.02] transition-all"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
