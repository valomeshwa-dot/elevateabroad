"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, fadeUp } from "@/lib/animations";
import { useRouter } from "next/navigation";

export default function LeadCaptureSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const checkpoints = [
    "Free 30-minute consultation",
    "Personalized university recommendations",
    "Complete application roadmap",
    "Visa & scholarship guidance",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    router.push('/contact');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };


  return (
    <motion.section
      className="relative bg-gradient-to-br from-navy via-[#1a3a6e] to-navy py-8 lg:py-24 overflow-hidden"
      layout={false}
    >
      {/* Glow orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
        className="absolute top-0 left-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            layout={false}
            className="mb-6 lg:mb-0"
          >
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" layout={false}>
              <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                <motion.span variants={fadeUp} className="block" transition={{ delay: 0.1 }} layout={false}>Start Your Study Abroad</motion.span>
                <motion.span variants={fadeUp} className="text-gold block" transition={{ delay: 0.2 }} layout={false}>Journey Today</motion.span>
              </h2>
            </motion.div>
            <p className="text-white/60 text-sm lg:text-base mt-4 leading-relaxed">
              Take the first step towards your international education. Our experts are ready to guide you.
            </p>

            <div className="mt-8 space-y-4">
              {checkpoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.1 }}
                  layout={false}
                  className={`items-center gap-3 ${index >= 3 ? 'hidden lg:flex' : 'flex'}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white/80 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            layout={false}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-5 lg:p-8 shadow-2xl border border-white/20 overflow-hidden">
              <h3 className="text-lg lg:text-2xl font-bold text-textPrimary font-heading mb-4 lg:mb-6">
                Book Your Free Consultation
              </h3>
              <div className="w-12 h-1 bg-gold rounded-full mb-6 lg:mb-8"></div>

              {/* Tally Iframe optimized for mobile */}
              <iframe
                src="https://tally.so/embed/D41K0q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="500"
                frameBorder={0}
                style={{
                  border: 'none',
                  minHeight: '460px',
                  width: '100%',
                  display: 'block',
                }}
                title="Book Free Consultation"
              />

              <p className="text-gray-400 text-[10px] lg:text-xs text-center mt-4">
                🔒 Your information is secure and never shared.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
