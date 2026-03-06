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
      className="relative bg-gradient-to-br from-navy via-[#1a3a6e] to-navy py-12 lg:py-24 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            layout={false}
          >
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" layout={false}>
              <h2 className="font-heading text-2xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
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
                  className={`flex items-center gap-3 ${index >= 3 ? 'hidden lg:flex' : 'flex'}`}
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
            <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-2xl border border-white/20">
              <h3 className="text-xl lg:text-2xl font-bold text-textPrimary font-heading mb-4 lg:mb-6">
                Book Your Free Consultation
              </h3>
              <div className="w-12 h-1 bg-gold rounded-full mb-6 lg:mb-8"></div>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Request Received!</h4>
                  <p className="text-green-600 text-sm">
                    Thank you for reaching out. One of our expert counselors will contact you shortly.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  {[
                    { label: "Full Name", type: "text", placeholder: "Your full name" },
                    { label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { label: "Preferred Country", type: "select" },
                    { label: "Preferred Course", type: "text", placeholder: "e.g. Computer Science, MBA" }
                  ].map((field, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: index * 0.08 }}
                      layout={false}
                    >
                      <label className="block text-xs font-semibold text-textSecondary uppercase tracking-wide mb-1.5">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition-all bg-white text-gray-700"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select a country</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="canada">Canada</option>
                          <option value="australia">Australia</option>
                          <option value="germany">Germany</option>
                          <option value="ireland">Ireland</option>
                          <option value="other">Other</option>
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition-all"
                          required
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    layout={false}
                    className="relative overflow-hidden w-full py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-royal to-royalLight transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(47,107,255,0.4)] transition-all duration-300 group"
                  >
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
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Book Free Consultation →"
                      )}
                    </span>
                  </motion.button>

                  <p className="text-gray-400 text-xs text-center mt-4">
                    🔒 Your information is secure and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
