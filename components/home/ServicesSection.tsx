"use client"
import { Target, Building2, FileText, Shield, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { fadeUp, staggerGrid, scaleUp } from "@/lib/animations";

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Career Counseling",
      desc: "Personalized guidance to align your academic goals with the right career path and university programs.",
    },
    {
      icon: Building2,
      title: "University Selection",
      desc: "Data-driven shortlisting of universities based on your profile, budget, and aspirations.",
    },
    {
      icon: FileText,
      title: "Application Assistance",
      desc: "End-to-end support for applications including SOP, LOR, essays, and document preparation.",
    },
    {
      icon: Shield,
      title: "Visa Support",
      desc: "Expert visa counseling with a 98% success rate across UK, USA, Canada, Australia, and Europe.",
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      desc: "Identify and apply for scholarships worth thousands of dollars to fund your education.",
    },
  ];

  return (
    <motion.section
      style={{ willChange: 'transform' }}
      className="bg-bg py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          layout={false}
        >
          <div className="flex items-center gap-3 justify-center text-royal text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              layout={false}
              className="h-px bg-gold"
            ></motion.span>
            WHAT WE OFFER
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              layout={false}
              className="h-px bg-gold"
            ></motion.span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textPrimary tracking-tight">
            Comprehensive Support at Every Step
          </h2>
          <p className="text-textSecondary mt-4 max-w-lg mx-auto text-base leading-relaxed">
            From choosing the right course to landing in your dream country, we provide end-to-end assistance for your study abroad journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerGrid}
          layout={false}
        >
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              layout={false}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17
              }}
              className="bg-white rounded-3xl p-10 border border-gray-100 group cursor-pointer active:brightness-95 card-hover card-hover-royal relative overflow-hidden"
            >
              <Link href="/services" className="absolute inset-0 z-10" />
              <div className="w-8 h-0.5 bg-gold rounded mb-4"></div>
              <motion.div
                layout={false}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/10 to-royal/5 flex items-center justify-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 card-icon"
              >
                <service.icon className="text-royal w-7 h-7" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-textPrimary mt-4">
                {service.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed mt-3">
                {service.desc}
              </p>
              <div
                className="inline-flex items-center gap-1 text-royal text-sm font-semibold mt-6 hover:gap-2 transition-all group-hover:text-royalLight relative z-20"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}

          <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index + 3}
                variants={scaleUp}
                layout={false}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 17
                }}
                className="w-full max-w-sm bg-white rounded-3xl p-10 border border-gray-100 group cursor-pointer active:brightness-95 card-hover card-hover-royal relative overflow-hidden"
              >
                <Link href="/services" className="absolute inset-0 z-10" />
                <div className="w-8 h-0.5 bg-gold rounded mb-4"></div>
                <motion.div
                  layout={false}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/10 to-royal/5 flex items-center justify-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 card-icon"
                >
                  <service.icon className="text-royal w-7 h-7" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold text-textPrimary mt-4">
                  {service.title}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed mt-3">
                  {service.desc}
                </p>
                <div
                  className="inline-flex items-center gap-1 text-royal text-sm font-semibold mt-6 hover:gap-2 transition-all group-hover:text-royalLight relative z-20"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
