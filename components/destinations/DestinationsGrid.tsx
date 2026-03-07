"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, GraduationCap, TrendingUp, DollarSign, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react'
import { fadeUp, staggerContainer, viewport } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const countries = [
  {
    id: 'usa',
    code: 'US',
    name: 'United States',
    region: 'Americas',
    gradient: 'from-blue-700 to-red-600',
    tags: ['Scholarship Available'],
    headerBg: 'bg-gradient-to-br from-blue-700 to-red-600',
    stats: {
      universities: '4,000+',
      ranking: 'World #1',
      visaRate: '85%',
      avgFee: '$25,000/yr'
    },
    universities: [
      'Massachusetts Institute of Technology',
      'Harvard University',
      'Stanford University',
      'University of California'
    ],
    highlights: [
      'OPT work authorization post-study',
      'Largest number of top-ranked universities',
      'Diverse campus culture and research funding',
      'STEM extension available for 3 years'
    ],
    tags2: ['STEM Hub', 'Research Leader', 'OPT Visa'],
    scholarships: 'Merit & Need-based available'
  },
  {
    id: 'uk',
    code: 'UK',
    name: 'United Kingdom',
    region: 'Europe',
    gradient: 'from-blue-800 to-indigo-600',
    tags: ['Scholarship Available'],
    headerBg: 'bg-gradient-to-br from-blue-800 to-indigo-600',
    stats: {
      universities: '150+',
      ranking: 'Top 5 Global',
      visaRate: '90%',
      avgFee: '£15,000/yr'
    },
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London'
    ],
    highlights: [
      '1-year Masters programs save time and money',
      'Graduate Route visa allows 2 years post-study',
      'Historic world-class institutions',
      'English-speaking with global recognition'
    ],
    tags2: ['1-Year Masters', 'Post-Study Visa', 'Top Ranked'],
    scholarships: 'Chevening & University scholarships'
  },
  {
    id: 'canada',
    code: 'CA',
    name: 'Canada',
    region: 'Americas',
    gradient: 'from-red-700 to-red-500',
    tags: ['Scholarship Available', 'Low Tuition'],
    headerBg: 'bg-gradient-to-br from-red-700 to-red-500',
    stats: {
      universities: '100+',
      ranking: 'Top 10 Global',
      visaRate: '95%',
      avgFee: 'CAD 20,000/yr'
    },
    universities: [
      'University of Toronto',
      'UBC Vancouver',
      'McGill University',
      'University of Waterloo'
    ],
    highlights: [
      'PGWP allows up to 3 years work after graduation',
      'Clear pathway to Permanent Residency',
      'Safe, multicultural and welcoming society',
      'High quality of life and affordable cities'
    ],
    tags2: ['PR Pathway', 'Work Rights', 'Safe Country'],
    scholarships: 'Vanier & University awards'
  },
  {
    id: 'australia',
    code: 'AU',
    name: 'Australia',
    region: 'Asia Pacific',
    gradient: 'from-yellow-600 to-orange-500',
    tags: ['Scholarship Available'],
    headerBg: 'bg-gradient-to-br from-yellow-600 to-orange-500',
    stats: {
      universities: '43+',
      ranking: 'Top 20 Global',
      visaRate: '92%',
      avgFee: 'AUD 28,000/yr'
    },
    universities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney',
      'UNSW Sydney'
    ],
    highlights: [
      '2-4 years post-study work rights',
      'High quality of life and outdoor lifestyle',
      'Strong economy with great job opportunities',
      'World-class research and innovation hubs'
    ],
    tags2: ['Work Rights', 'Quality Life', 'Group of Eight'],
    scholarships: 'Australia Awards available'
  },
  {
    id: 'germany',
    code: 'DE',
    name: 'Germany',
    region: 'Europe',
    gradient: 'from-gray-800 to-gray-600',
    tags: ['Low Tuition'],
    headerBg: 'bg-gradient-to-br from-gray-800 to-gray-600',
    stats: {
      universities: '400+',
      ranking: 'Top 15 Global',
      visaRate: '88%',
      avgFee: '€500/yr (Public)'
    },
    universities: [
      'TU Munich',
      'Heidelberg University',
      'LMU Munich',
      'KIT Karlsruhe'
    ],
    highlights: [
      'Tuition-free education at public universities',
      'Europe\'s strongest economy and job market',
      'Engineering and technology excellence',
      'EU Blue Card for skilled graduates'
    ],
    tags2: ['Free Tuition', 'Engineering Hub', 'EU Access'],
    scholarships: 'DAAD scholarships available'
  },
  {
    id: 'ireland',
    code: 'IE',
    name: 'Ireland',
    region: 'Europe',
    gradient: 'from-green-700 to-emerald-500',
    tags: ['Scholarship Available'],
    headerBg: 'bg-gradient-to-br from-green-700 to-emerald-500',
    stats: {
      universities: '30+',
      ranking: 'Top 25 Global',
      visaRate: '91%',
      avgFee: '€12,000/yr'
    },
    universities: [
      'Trinity College Dublin',
      'University College Dublin',
      'University of Galway',
      'Dublin City University'
    ],
    highlights: [
      'English-speaking EU country',
      'Home to Google, Meta, Apple European HQs',
      'Graduate visa allows 2 years post-study',
      'Gateway to European job market'
    ],
    tags2: ['Tech Hub', 'EU Gateway', 'English Speaking'],
    scholarships: 'Government & merit scholarships'
  }
];

export default function DestinationsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Europe', 'Americas', 'Asia Pacific', 'Scholarship Available', 'Low Tuition'];

  const filteredCountries = countries.filter(country => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Europe') return country.region === 'Europe';
    if (activeFilter === 'Americas') return country.region === 'Americas';
    if (activeFilter === 'Asia Pacific') return country.region === 'Asia Pacific';
    if (activeFilter === 'Scholarship Available') return country.tags.includes('Scholarship Available');
    if (activeFilter === 'Low Tuition') return country.tags.includes('Low Tuition');
    return true;
  });

  return (
    <section id="destinations-grid" className="bg-white py-8 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          layout={false}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} layout={false} className="flex items-center justify-center gap-3 mb-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-[#D4AF37] block"
            />
            <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">STUDY DESTINATIONS</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-[#D4AF37] block"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            layout={false}
            className="font-heading text-5xl font-bold text-[#0F172A] tracking-tight mt-3"
          >
            Find Your Perfect <span className="text-[#2F6BFF]">Study Country</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            layout={false}
            className="text-[#64748B] mt-4 max-w-xl mx-auto"
          >
            Explore the top international destinations and discover which country aligns best with your academic and career goals.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          layout={false}
          className="flex justify-center mb-6 lg:mb-16"
        >
          <div className="bg-[#F6F8FC] rounded-2xl p-2 inline-flex flex-wrap gap-2 border border-gray-200">
            {filters.map(filter => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`px-3 py-1.5 lg:px-6 lg:py-2.5 rounded-xl text-xs lg:text-sm transition-all ${activeFilter === filter
                  ? 'bg-[#2F6BFF] text-white shadow-lg shadow-[#2F6BFF]/25 font-semibold active'
                  : 'bg-transparent text-[#64748B] hover:bg-white hover:text-[#0F172A] hover:shadow-sm font-medium'
                  }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Country Cards Grid with AnimatePresence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country, index) => (
              <motion.div
                key={country.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: 'easeOut'
                }}
                className="bg-white rounded-2xl lg:rounded-3xl border border-gray-100 shadow-sm overflow-hidden card-hover mb-6 lg:mb-16"
              >
                {/* CARD TOP BANNER */}
                <div className={`h-28 lg:h-48 relative overflow-hidden ${country.headerBg}`}>
                  <div className="absolute right-4 bottom-2 font-heading font-bold text-[60px] lg:text-[120px] text-white/8 leading-none select-none">
                    {country.code}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>

                  <div className="absolute top-4 left-6 w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center font-heading font-bold text-white text-base lg:text-xl">
                    {country.code}
                  </div>

                  <div className="absolute bottom-4 left-6 font-heading text-xl lg:text-2xl font-bold text-white">
                    {country.name}
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {country.tags2.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + tagIndex * 0.1 }}
                        layout={false}
                        className="hidden lg:block bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-4 lg:p-8">

                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-3 lg:py-5 border-t-2 border-t-[#2F6BFF]/20 border-b border-gray-100 mb-4 lg:mb-6 font-heading">
                    <div className="text-center py-3 px-3 lg:py-5 lg:px-4 border-r border-b border-gray-100 md:border-b-0">
                      <div className="font-bold text-[#0F172A] text-lg lg:text-xl">
                        <AnimatedCounter
                          target={parseInt(country.stats.universities)}
                          suffix="+"
                          duration={1500}
                        />
                      </div>
                      <div className="text-[#64748B] text-[10px] lg:text-xs mt-1.5 uppercase tracking-wide">Universities</div>
                    </div>
                    <div className="text-center py-3 px-3 lg:py-5 lg:px-4 border-b border-gray-100 md:border-b-0 md:border-r">
                      <div className="font-bold text-[#0F172A] text-lg lg:text-xl">{country.stats.ranking}</div>
                      <div className="text-[#64748B] text-[10px] lg:text-xs mt-1.5 uppercase tracking-wide">Ranking</div>
                    </div>
                    <div className="text-center py-3 px-3 lg:py-5 lg:px-4 border-r border-gray-100">
                      <div className="font-bold text-[#0F172A] text-lg lg:text-xl">
                        <AnimatedCounter
                          target={parseInt(country.stats.visaRate)}
                          suffix="%"
                          duration={1500}
                        />
                      </div>
                      <div className="text-[#64748B] text-[10px] lg:text-xs mt-1.5 uppercase tracking-wide">Visa Rate</div>
                    </div>
                    <div className="text-center py-3 px-3 lg:py-5 lg:px-4">
                      <div className="font-bold text-[#0F172A] text-lg lg:text-xl">{country.stats.avgFee}</div>
                      <div className="text-[#64748B] text-[10px] lg:text-xs mt-1.5 uppercase tracking-wide">Avg. Fees</div>
                    </div>
                  </div>

                  {/* Two column body */}
                  <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT — Top Universities */}
                    <div>
                      <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-4">Top Universities</div>
                      {country.universities.map((uni, idx) => (
                        <div key={idx} className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                          <span className="text-[#0F172A] text-sm font-medium">{uni}</span>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT — Why Study Here */}
                    <div>
                      <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-4">Why Study Here?</div>
                      {country.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748B] text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Compact Universities */}
                  <div className="lg:hidden py-3 border-t border-white/10">
                    <p className="text-[#64748B] text-xs">
                      Top: {country.universities.slice(0, 3).join(' · ')}
                    </p>
                  </div>

                  {/* Scholarship banner */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    layout={false}
                    className="hidden lg:flex mt-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/25 rounded-xl px-5 py-4 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-[#0F172A] text-xs font-bold uppercase tracking-wide">Scholarship Available</div>
                      <div className="text-[#64748B] text-xs mt-0.5">{country.scholarships}</div>
                    </div>
                  </motion.div>

                  {/* CTA row */}
                  <div className="mt-4 lg:mt-6 pt-3 lg:pt-5 border-t border-gray-100 flex items-center justify-between px-0 lg:px-0">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#64748B]" />
                      <span className="text-[#64748B] text-xs lg:text-sm">{country.name}</span>
                    </div>
                    <Link href="/contact" passHref legacyBehavior>
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold hover:shadow-lg hover:shadow-[#2F6BFF]/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        Apply <span className="hidden sm:inline">for {country.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <Globe2 className="w-16 h-16 text-[#64748B]/20 mx-auto" />
            <div className="text-[#64748B] text-lg font-semibold mt-4">No destinations match this filter</div>
            <div className="text-[#64748B]/60 text-sm mt-2">Try selecting a different category</div>
          </div>
        )}
      </div>
    </section>
  )
}
