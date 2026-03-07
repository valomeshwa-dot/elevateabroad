"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import { fadeUp, staggerGrid, scaleUp } from "@/lib/animations";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: "PS",
      name: "Priya Sharma",
      university: "University of Oxford",
      course: "MSc Data Science",
      quote: "ElevateAbroad made my dream of studying at Oxford a reality. Their application support was exceptional.",
    },
    {
      initials: "RM",
      name: "Rahul Mehta",
      university: "University of Toronto",
      course: "MBA Finance",
      quote: "From university selection to visa approval, they guided me through every step professionally.",
    },
    {
      initials: "AM",
      name: "Aisha Malik",
      university: "TU Munich",
      course: "MS Mechanical Engineering",
      quote: "Got a full scholarship with their scholarship guidance program. Couldn't have done it without them!",
    },
  ];

  return (
    <motion.section
      className="bg-bg py-8 lg:py-24 overflow-hidden"
      layout={false}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-5 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          layout={false}
        >
          <div className="flex items-center gap-3 justify-center text-royal text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-8 h-px bg-gold"></span>
            SUCCESS STORIES
            <span className="w-8 h-px bg-gold"></span>
          </div>
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-textPrimary tracking-tight">
            Hear From Our Students
          </h2>
          <p className="hidden lg:block text-textSecondary mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Join thousands of successful students who have achieved their dreams with ElevateAbroad.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerGrid}
          layout={false}
        >
          {testimonials.map((testimonial, index) => (
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
              className={`bg-white rounded-2xl p-5 lg:p-8 border border-gray-100 flex flex-col group cursor-pointer active:brightness-95 card-hover card-hover-soft relative overflow-hidden ${index > 0 ? 'hidden lg:block' : ''}`}
            >
              <Link href="/success-stories" className="absolute inset-0 z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                layout={false}
                className="text-gold/20 text-6xl lg:text-8xl font-serif leading-none mb-1 lg:mb-2 select-none card-icon relative z-20"
              >
                &quot;
              </motion.div>

              <p className="text-textPrimary text-sm lg:text-base leading-relaxed italic font-medium flex-grow relative z-20 line-clamp-4 lg:line-clamp-none">
                {testimonial.quote}
              </p>

              <div className="w-12 h-px bg-gold/40 my-4 lg:my-6 relative z-20"></div>

              <div className="flex items-center gap-4 relative z-20 mt-3 lg:mt-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-royal to-royalLight flex items-center justify-center text-white font-bold text-sm shrink-0 group-hover:scale-105 transition-transform duration-300 card-icon">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary text-xs lg:text-sm">{testimonial.name}</h3>
                  <p className="text-royal text-[10px] lg:text-xs mt-0.5">{testimonial.university}</p>
                </div>
              </div>

              <div className="text-gold text-xs lg:text-sm mt-3 lg:mt-4 tracking-widest flex gap-1 relative z-20">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    layout={false}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Link */}
        <div className="lg:hidden text-center mt-3">
          <Link href="/success-stories"
            className="text-[#2F6BFF] text-sm font-semibold">
            Read all stories →
          </Link>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12 lg:mt-16"
        >
          <Link
            href="/success-stories"
            className="hidden sm:block border-2 border-royal text-royal px-8 py-4 rounded-xl font-semibold hover:border-royalLight hover:text-royalLight active:scale-95 hover:scale-[1.02] transition-all text-center"
          >
            Read More Stories
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gradient-to-r from-royal to-royalLight text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-royal/30 active:scale-95 hover:scale-[1.02] transition-all text-center"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
