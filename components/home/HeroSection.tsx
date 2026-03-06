"use client"
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { fadeUp, fadeUpSubtle, slideInRight, staggerContainer, scaleUp } from "@/lib/animations";
import PixelGrid from '@/components/ui/PixelGrid'

export default function HeroSection() {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const h1Lines = [
    "Your Pathway to",
    "Top Universities",
    "Abroad"
  ];

  const countries = [
    {
      code: 'us',
      name: 'United States',
      count: '4,000+ Universities',
    },
    {
      code: 'gb',
      name: 'United Kingdom',
      count: '150+ Universities',
    },
    {
      code: 'ca',
      name: 'Canada',
      count: '100+ Universities',
    },
    {
      code: 'au',
      name: 'Australia',
      count: '43+ Universities',
    },
    {
      code: 'de',
      name: 'Germany',
      count: '400+ Universities',
    },
    {
      code: 'ie',
      name: 'Ireland',
      count: '30+ Universities',
    },
  ];

  return (
    <motion.section
      className="relative min-h-[auto] lg:min-h-screen bg-navy pt-20 pb-8 lg:pt-32 lg:pb-20 flex items-center overflow-hidden hero-section"
      layout={false}
    >
      {/* NEW — Pixel Grid Background */}
      <PixelGrid
        dotColor="rgba(47, 107, 255, 0.12)"
        dotSize={1.5}
        gap={28}
        className="z-0"
      />

      {/* Subtle dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0A1F44]/80 via-[#0A1F44]/40 to-transparent pointer-events-none" />

      {/* Stronger overlay for mobile readability */}
      <div className="absolute inset-0 z-[2] bg-[#0A1F44]/60 lg:hidden pointer-events-none" />

      {/* Background layered pseudo-elements */}
      <motion.div
        className="absolute w-96 h-96 bg-royal/20 rounded-full blur-3xl top-20 left-1/3 pointer-events-none z-[1]"
        animate={prefersReduced ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
      />
      <motion.div
        className="absolute w-64 h-64 bg-gold/10 rounded-full blur-3xl bottom-20 right-20 pointer-events-none z-[1]"
        animate={prefersReduced ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        layout={false}
      />

      <div className="relative max-w-7xl mx-auto px-4 w-full z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          layout={false}
        >
          {/* LEFT COLUMN */}
          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              layout={false}
              className="bg-gold/15 border border-gold/40 text-gold/90 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide inline-block mb-6 relative z-10"
            >
              ✦ TRUSTED BY 5,000+ STUDENTS WORLDWIDE
            </motion.div>

            <h1 className="font-heading text-[2rem] lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              {h1Lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    variants={fadeUp}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    layout={false}
                    className={`block ${i === 2 ? "text-gold drop-shadow-md" : ""}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              layout={false}
              className="text-white/60 text-sm lg:text-xl leading-relaxed mt-5 max-w-md line-clamp-2 lg:line-clamp-none"
            >
              We help students secure admissions at leading universities across the UK, USA, Canada, Australia, and Europe.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              layout={false}
              className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-10"
            >
              <Link
                href="/contact"
                className="w-full lg:w-auto bg-gradient-to-br from-[#2F6BFF] to-[#5B8CFF] text-white px-5 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm lg:text-base hover:shadow-xl hover:shadow-[#2F6BFF]/40 active:scale-95 hover:scale-[1.03] transition-all text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/universities"
                className="w-full lg:w-auto border-2 border-gold/60 text-gold px-5 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm lg:text-base hover:bg-gold/10 active:scale-95 hover:scale-[1.03] transition-all text-center"
              >
                Explore Universities
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpSubtle}
              transition={{ delay: 0.55 }}
              layout={false}
              className="mt-8 flex flex-wrap gap-2 lg:gap-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-gold w-4 h-4" />
                <span className="text-white/50 text-xs lg:text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-gold w-4 h-4" />
                <span className="text-white/50 text-xs lg:text-sm">No Hidden Fees</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="text-gold w-4 h-4" />
                <span className="text-white/50 text-xs lg:text-sm">Expert Guidance</span>
              </div>
            </motion.div>

            {/* Mobile-only CTA Box */}
            <div className="lg:hidden mt-4 flex items-center justify-between bg-white/10 rounded-2xl p-3 border border-white/20">
              <div>
                <p className="text-white text-xs font-semibold">
                  Free Consultation
                </p>
                <p className="text-white/60 text-[10px]">
                  Expert guidance today
                </p>
              </div>
              <Link href="/contact"
                className="bg-[#2F6BFF] text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap">
                Book Now →
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:block relative z-10">
            {/* Glow behind container */}
            <div className="absolute inset-0 bg-royal/10 blur-3xl rounded-full -z-10"></div>

            <div className="grid grid-cols-2 gap-3 w-full">
              {countries.map((country, index) => (
                <Link
                  href="/destinations"
                  key={country.code}
                >
                  <motion.div
                    variants={scaleUp}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    layout={false}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 cursor-pointer hover:-translate-y-1 hover:bg-white/15 hover:border-white/30 transition-all duration-250"
                  >
                    {/* Flag */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                      <Image
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={`${country.name} flag`}
                        width={80}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm leading-tight">
                        {country.name}
                      </p>
                      <p className="text-white/60 text-xs mt-0.5">
                        {country.count}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className="w-4 h-4 text-white/50 flex-shrink-0"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Hint */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.8 }}
              layout={false}
              className="text-white/40 text-xs text-center mt-4"
            >
              Click any destination to learn more
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
