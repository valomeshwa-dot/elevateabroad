"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star, BookOpen, Search, SlidersHorizontal, GraduationCap, ArrowRight, Globe2, Trophy, Users, Building2 } from 'lucide-react'
import { fadeUp, scaleUp, slideInLeft, slideInRight, staggerContainer, staggerGrid, viewport } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface University {
  id: string
  name: string
  country: string
  countryCode: string
  city: string
  ranking: string
  rankingNum: number
  type: string
  courses: string[]
  gradient: string
  initials: string
  students: string
  acceptance: string
  established: string
  featured: boolean
  tags: string[]
}

const universities: University[] = [
  // USA — 4 universities
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    country: 'USA',
    countryCode: 'US',
    city: 'Cambridge, MA',
    ranking: '#1 World',
    rankingNum: 1,
    type: 'Research University',
    courses: ['Computer Science', 'Engineering', 'Physics', 'Mathematics'],
    gradient: 'from-red-700 to-red-900',
    initials: 'MIT',
    students: '11,000+',
    acceptance: '4%',
    established: '1861',
    featured: true,
    tags: ['STEM', 'Research', 'Top Ranked']
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    country: 'USA',
    countryCode: 'US',
    city: 'Cambridge, MA',
    ranking: '#3 World',
    rankingNum: 3,
    type: 'Ivy League',
    courses: ['Law', 'MBA', 'Medicine', 'Public Policy'],
    gradient: 'from-red-800 to-red-600',
    initials: 'HU',
    students: '22,000+',
    acceptance: '3.2%',
    established: '1636',
    featured: true,
    tags: ['Ivy League', 'Law', 'Medicine']
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    country: 'USA',
    countryCode: 'US',
    city: 'Stanford, CA',
    ranking: '#5 World',
    rankingNum: 5,
    type: 'Research University',
    courses: ['AI & ML', 'Business', 'Engineering', 'Law'],
    gradient: 'from-red-600 to-orange-500',
    initials: 'SU',
    students: '17,000+',
    acceptance: '4.7%',
    established: '1885',
    featured: true,
    tags: ['AI', 'Silicon Valley', 'Innovation']
  },
  {
    id: 'ucla',
    name: 'University of California',
    country: 'USA',
    countryCode: 'US',
    city: 'Los Angeles, CA',
    ranking: '#20 World',
    rankingNum: 20,
    type: 'Public Research',
    courses: ['Film & Media', 'Engineering', 'Business', 'Sciences'],
    gradient: 'from-blue-700 to-yellow-600',
    initials: 'UCLA',
    students: '45,000+',
    acceptance: '14%',
    established: '1919',
    featured: false,
    tags: ['Public', 'Research', 'Diverse']
  },

  // UK — 4 universities
  {
    id: 'oxford',
    name: 'University of Oxford',
    country: 'UK',
    countryCode: 'UK',
    city: 'Oxford, England',
    ranking: '#2 World',
    rankingNum: 2,
    type: 'Research University',
    courses: ['Philosophy', 'Medicine', 'Law', 'Sciences'],
    gradient: 'from-blue-900 to-blue-700',
    initials: 'OX',
    students: '24,000+',
    acceptance: '17%',
    established: '1096',
    featured: true,
    tags: ['Historic', 'Research', 'Top 5']
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    country: 'UK',
    countryCode: 'UK',
    city: 'Cambridge, England',
    ranking: '#4 World',
    rankingNum: 4,
    type: 'Research University',
    courses: ['Mathematics', 'Sciences', 'Engineering', 'History'],
    gradient: 'from-blue-800 to-indigo-700',
    initials: 'CAM',
    students: '23,000+',
    acceptance: '21%',
    established: '1209',
    featured: true,
    tags: ['Historic', 'Sciences', 'Top 5']
  },
  {
    id: 'imperial',
    name: 'Imperial College London',
    country: 'UK',
    countryCode: 'UK',
    city: 'London, England',
    ranking: '#9 World',
    rankingNum: 9,
    type: 'Technical University',
    courses: ['Medicine', 'Engineering', 'Business', 'Computing'],
    gradient: 'from-blue-600 to-indigo-800',
    initials: 'IC',
    students: '19,000+',
    acceptance: '14%',
    established: '1907',
    featured: false,
    tags: ['STEM', 'London', 'Medicine']
  },
  {
    id: 'ucl',
    name: 'University College London',
    country: 'UK',
    countryCode: 'UK',
    city: 'London, England',
    ranking: '#8 World',
    rankingNum: 8,
    type: 'Research University',
    courses: ['Architecture', 'Law', 'Economics', 'Sciences'],
    gradient: 'from-purple-700 to-blue-700',
    initials: 'UCL',
    students: '42,000+',
    acceptance: '63%',
    established: '1826',
    featured: false,
    tags: ['London', 'Diverse', 'Research']
  },

  // Canada — 3 universities
  {
    id: 'toronto',
    name: 'University of Toronto',
    country: 'Canada',
    countryCode: 'CA',
    city: 'Toronto, Ontario',
    ranking: '#18 World',
    rankingNum: 18,
    type: 'Public Research',
    courses: ['Computer Science', 'MBA', 'Medicine', 'Engineering'],
    gradient: 'from-blue-800 to-red-700',
    initials: 'UofT',
    students: '97,000+',
    acceptance: '43%',
    established: '1827',
    featured: true,
    tags: ['PR Pathway', 'Research', 'Diverse']
  },
  {
    id: 'ubc',
    name: 'University of British Columbia',
    country: 'Canada',
    countryCode: 'CA',
    city: 'Vancouver, BC',
    ranking: '#34 World',
    rankingNum: 34,
    type: 'Public Research',
    courses: ['Forestry', 'Sciences', 'Engineering', 'Arts'],
    gradient: 'from-blue-700 to-teal-600',
    initials: 'UBC',
    students: '68,000+',
    acceptance: '52%',
    established: '1908',
    featured: false,
    tags: ['Vancouver', 'Nature', 'Research']
  },
  {
    id: 'mcgill',
    name: 'McGill University',
    country: 'Canada',
    countryCode: 'CA',
    city: 'Montreal, Quebec',
    ranking: '#30 World',
    rankingNum: 30,
    type: 'Research University',
    courses: ['Medicine', 'Law', 'Engineering', 'Sciences'],
    gradient: 'from-red-700 to-red-500',
    initials: 'McGill',
    students: '40,000+',
    acceptance: '46%',
    established: '1821',
    featured: false,
    tags: ['Bilingual', 'Medicine', 'Historic']
  },

  // Australia — 3 universities
  {
    id: 'melbourne',
    name: 'University of Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    city: 'Melbourne, VIC',
    ranking: '#13 World',
    rankingNum: 13,
    type: 'Group of Eight',
    courses: ['Law', 'Medicine', 'Engineering', 'Arts'],
    gradient: 'from-blue-800 to-blue-600',
    initials: 'UniMelb',
    students: '52,000+',
    acceptance: '70%',
    established: '1853',
    featured: true,
    tags: ['Group of 8', 'Research', 'Lifestyle']
  },
  {
    id: 'anu',
    name: 'Australian National University',
    country: 'Australia',
    countryCode: 'AU',
    city: 'Canberra, ACT',
    ranking: '#27 World',
    rankingNum: 27,
    type: 'Research University',
    courses: ['Politics', 'Sciences', 'Law', 'Engineering'],
    gradient: 'from-yellow-600 to-orange-600',
    initials: 'ANU',
    students: '25,000+',
    acceptance: '35%',
    established: '1946',
    featured: false,
    tags: ['Government', 'Research', 'Canberra']
  },
  {
    id: 'unsw',
    name: 'UNSW Sydney',
    country: 'Australia',
    countryCode: 'AU',
    city: 'Sydney, NSW',
    ranking: '#19 World',
    rankingNum: 19,
    type: 'Group of Eight',
    courses: ['Engineering', 'Business', 'Law', 'Medicine'],
    gradient: 'from-yellow-500 to-red-500',
    initials: 'UNSW',
    students: '65,000+',
    acceptance: '51%',
    established: '1949',
    featured: false,
    tags: ['Sydney', 'Engineering', 'Business']
  },

  // Germany — 2 universities
  {
    id: 'tum',
    name: 'TU Munich',
    country: 'Germany',
    countryCode: 'DE',
    city: 'Munich, Bavaria',
    ranking: '#28 World',
    rankingNum: 28,
    type: 'Technical University',
    courses: ['Engineering', 'Computer Science', 'Sciences', 'Architecture'],
    gradient: 'from-blue-800 to-gray-800',
    initials: 'TUM',
    students: '45,000+',
    acceptance: '8%',
    established: '1868',
    featured: true,
    tags: ['Free Tuition', 'Engineering', 'EU']
  },
  {
    id: 'heidelberg',
    name: 'Heidelberg University',
    country: 'Germany',
    countryCode: 'DE',
    city: 'Heidelberg',
    ranking: '#65 World',
    rankingNum: 65,
    type: 'Research University',
    courses: ['Medicine', 'Sciences', 'Law', 'Humanities'],
    gradient: 'from-gray-800 to-gray-600',
    initials: 'HD',
    students: '28,000+',
    acceptance: '20%',
    established: '1386',
    featured: false,
    tags: ['Oldest', 'Medicine', 'Research']
  },

  // Ireland — 1 university
  {
    id: 'trinity',
    name: 'Trinity College Dublin',
    country: 'Ireland',
    countryCode: 'IE',
    city: 'Dublin, Ireland',
    ranking: '#81 World',
    rankingNum: 81,
    type: 'Research University',
    courses: ['Law', 'Business', 'Sciences', 'Engineering'],
    gradient: 'from-green-700 to-emerald-600',
    initials: 'TCD',
    students: '20,000+',
    acceptance: '30%',
    established: '1592',
    featured: false,
    tags: ['Historic', 'EU Gateway', 'English']
  }
]

export default function UniversitiesGrid() {
  const [activeCountry, setActiveCountry] = useState('All')
  const [activeType, setActiveType] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('ranking')
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [top25Only, setTop25Only] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const filteredUniversities = universities
    .filter(uni => activeCountry === 'All' || uni.country === activeCountry)
    .filter(uni => activeType === 'All' || uni.type === activeType)
    .filter(uni => uni.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(uni => !featuredOnly || uni.featured)
    .filter(uni => !top25Only || uni.rankingNum <= 25)
    .sort((a, b) => {
      if (sortBy === 'ranking') return a.rankingNum - b.rankingNum
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'acceptance') return parseFloat(a.acceptance) - parseFloat(b.acceptance)
      return 0
    })

  const countries = ['All', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland']
  const types = ['All', 'Research University', 'Ivy League', 'Technical University', 'Group of Eight', 'Public Research']

  const getCountryGradient = (country: string) => {
    switch (country) {
      case 'USA': return 'bg-gradient-to-br from-blue-700 to-red-600'
      case 'UK': return 'bg-gradient-to-br from-blue-800 to-indigo-600'
      case 'Canada': return 'bg-gradient-to-br from-red-700 to-red-500'
      case 'Australia': return 'bg-gradient-to-br from-yellow-600 to-orange-500'
      case 'Germany': return 'bg-gradient-to-br from-gray-800 to-gray-600'
      case 'Ireland': return 'bg-gradient-to-br from-green-700 to-emerald-500'
      default: return 'bg-gray-500'
    }
  }

  const getCountryCode = (country: string) => {
    switch (country) {
      case 'USA': return 'US'
      case 'UK': return 'UK'
      case 'Canada': return 'CA'
      case 'Australia': return 'AU'
      case 'Germany': return 'DE'
      case 'Ireland': return 'IE'
      default: return ''
    }
  }

  const resetFilters = () => {
    setActiveCountry('All')
    setActiveType('All')
    setSearchQuery('')
    setFeaturedOnly(false)
    setTop25Only(false)
  }

  return (
    <section id="universities-grid" className="bg-[#F6F8FC] pt-4 pb-12 lg:py-24">

      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        layout={false}
        className="bg-white border-b border-gray-200 py-2 lg:py-4 relative lg:sticky lg:top-[72px] z-20"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col lg:flex-row gap-4 items-center justify-between">

          {/* Search */}
          <div className="relative flex-1 max-w-md w-full">
            <Search className="w-4 h-4 lg:w-5 lg:h-5 absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search universities by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 rounded-xl pl-10 lg:pl-12 pr-4 py-2 lg:py-3 text-sm lg:text-base focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition-all duration-200 focus:scale-[1.01]"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <SlidersHorizontal className="w-3 h-3 lg:w-4 lg:h-4 text-[#64748B]" />
            <span className="text-[#64748B] text-xs lg:text-sm whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 lg:px-4 py-2 lg:py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#2F6BFF] w-full lg:w-auto"
            >
              <option value="ranking">World Ranking</option>
              <option value="name">University Name</option>
              <option value="acceptance">Acceptance Rate</option>
            </select>
          </div>

        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between bg-[#0F2554] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-semibold mb-3 lg:hidden"
              >
                <span className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter Universities
                </span>
                <span className="text-white/50 text-xs">
                  {showFilters ? '▲' : '▼'}
                </span>
              </button>
            </div>

            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} sticky top-32`}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                layout={false}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm card-hover-soft"
              >

                <h3 className="font-heading font-bold text-[#0F172A] mb-6 text-lg">Filter Universities</h3>

                {/* Section 1 — By Country */}
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} layout={false}>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-3">Country</div>
                  {countries.map((country, buttonIndex) => {
                    const count = country === 'All'
                      ? universities.length
                      : universities.filter(u => u.country === country).length;

                    return (
                      <motion.div
                        key={country}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: buttonIndex * 0.05,
                          duration: 0.35
                        }}
                        layout={false}
                      >
                        <motion.button
                          onClick={() => setActiveCountry(country)}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.15 }}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm mb-1.5 flex items-center justify-between transition-all ${activeCountry === country
                            ? 'bg-[#2F6BFF]/10 text-[#2F6BFF] font-semibold border border-[#2F6BFF]/20'
                            : 'text-[#64748B] hover:bg-[#F6F8FC] hover:text-[#0F172A] border border-transparent'
                            }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {country === 'All' ? (
                              <Globe2 className="w-6 h-6 text-[#64748B]" />
                            ) : (
                              <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold ${getCountryGradient(country)}`}>
                                {getCountryCode(country)}
                              </div>
                            )}
                            <span>{country}</span>
                          </div>
                          <span className="bg-[#F6F8FC] text-[#64748B] text-xs px-2 py-0.5 rounded-md font-medium">
                            {count}
                          </span>
                        </motion.button>
                      </motion.div>
                    )
                  })}
                </motion.div>

                <div className="border-t border-gray-100 my-5"></div>

                {/* Section 2 — By Type */}
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} layout={false}>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-3">University Type</div>
                  {types.map((type, buttonIndex) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: buttonIndex * 0.05,
                        duration: 0.35
                      }}
                      layout={false}
                    >
                      <motion.button
                        onClick={() => setActiveType(type)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm mb-1.5 transition-all ${activeType === type
                          ? 'bg-[#2F6BFF]/10 text-[#2F6BFF] font-semibold border border-[#2F6BFF]/20'
                          : 'text-[#64748B] hover:bg-[#F6F8FC] hover:text-[#0F172A] border border-transparent'
                          }`}
                      >
                        {type}
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="border-t border-gray-100 my-5"></div>

                {/* Section 3 — Featured */}
                <div>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-3">Quick Filters</div>
                  <div className="flex flex-wrap">
                    <motion.button
                      onClick={() => setFeaturedOnly(!featuredOnly)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold mr-2 mb-2 transition-all ${featuredOnly
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'bg-[#F6F8FC] text-[#64748B] border border-gray-200 hover:border-[#D4AF37]/40'
                        }`}
                    >
                      Featured Only
                    </motion.button>
                    <motion.button
                      onClick={() => setTop25Only(!top25Only)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold mr-2 mb-2 transition-all ${top25Only
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'bg-[#F6F8FC] text-[#64748B] border border-gray-200 hover:border-[#D4AF37]/40'
                        }`}
                    >
                      Top 25 Global
                    </motion.button>
                  </div>
                </div>

                {/* Results count */}
                <motion.div
                  key={filteredUniversities.length}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  layout={false}
                  className="border-t border-gray-100 pt-4 mt-2 text-center text-[#64748B] text-xs"
                >
                  Showing {filteredUniversities.length} of {universities.length} universities
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* RIGHT — University cards grid */}
          <div className="flex-1">

            <motion.div
              key={filteredUniversities.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              layout={false}
              className="flex items-center justify-between mb-3 lg:mb-6"
            >
              <div className="text-[#0F172A] text-base lg:text-xl font-semibold">
                {filteredUniversities.length} Universities Found
              </div>
              <div className="text-[#64748B] text-xs lg:text-sm">
                Sorted by {sortBy === 'ranking' ? 'World Ranking' : sortBy === 'name' ? 'University Name' : 'Acceptance Rate'}
              </div>
            </motion.div>

            {filteredUniversities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredUniversities.map((university, index) => (
                    <motion.div
                      key={university.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -10, transition: { duration: 0.2 } }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                        ease: 'easeOut'
                      }}
                      className="bg-white rounded-2xl lg:rounded-3xl border border-gray-100 shadow-sm overflow-hidden card-hover flex flex-col"
                    >
                      {/* CARD TOP */}
                      <div className={`h-20 lg:h-32 relative bg-gradient-to-br ${university.gradient} overflow-hidden`}>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          layout={false}
                          className="absolute right-3 bottom-0 lg:bottom-1 font-heading font-bold text-5xl lg:text-[100px] text-white/8 leading-none select-none"
                        >
                          {university.initials}
                        </motion.span>

                        <div className="absolute inset-0 p-3 lg:p-5 flex items-start justify-between">
                          <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg lg:rounded-xl px-2 py-0.5 lg:px-3 lg:py-2 font-heading font-bold text-white text-xs lg:text-sm">
                            {university.initials}
                          </div>

                          <div className="flex flex-col items-end gap-1 lg:gap-2">
                            <div className="bg-white/20 backdrop-blur border border-white/30 text-white text-[10px] lg:text-xs font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full text-center min-w-[50px] lg:min-w-[60px]">
                              {university.ranking}
                            </div>
                            {university.featured && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, type: 'spring', stiffness: 500 }}
                                layout={false}
                                className="bg-[#D4AF37]/30 border border-[#D4AF37]/50 text-[#D4AF37] text-[8px] lg:text-[10px] font-bold px-1.5 py-0.5 lg:px-2.5 lg:py-1 rounded-full uppercase"
                              >
                                ⭐ Featured
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <div className="absolute bottom-2 lg:bottom-4 left-3 lg:left-5 font-heading font-bold text-white text-base lg:text-2xl leading-tight line-clamp-1 max-w-[85%]">
                          {university.name}
                        </div>
                      </div>

                      {/* CARD BODY */}
                      <div className="p-4 lg:p-6 flex flex-col flex-1">

                        <div className="flex items-center justify-between mb-3 lg:mb-5">
                          <div className="flex items-center gap-1 lg:gap-1.5">
                            <MapPin className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#64748B]" />
                            <span className="text-[#64748B] text-[10px] lg:text-xs">{university.city}</span>
                          </div>
                          <div className="bg-[#F6F8FC] border border-gray-200 text-[#64748B] text-[10px] lg:text-xs px-2 py-0.5 lg:px-3 lg:py-1 rounded-lg font-medium">
                            {university.type}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-3 lg:mb-4 pb-3 lg:pb-4 border-b border-gray-50 lg:border-none">
                          <div className="bg-[#F6F8FC] rounded-xl p-2 lg:p-3 text-center">
                            <div className="font-heading font-bold text-[#0F172A] text-xs lg:text-sm">
                              <AnimatedCounter target={parseInt(university.students.replace(/,/g, ''))} suffix="+" />
                            </div>
                            <div className="text-[#64748B] text-[8px] lg:text-[10px] mt-0.5 uppercase tracking-wide">Students</div>
                          </div>
                          <div className="bg-[#F6F8FC] rounded-xl p-2 lg:p-3 text-center">
                            <div className="font-heading font-bold text-[#0F172A] text-xs lg:text-sm">
                              <AnimatedCounter target={parseFloat(university.acceptance)} suffix="%" />
                            </div>
                            <div className="text-[#64748B] text-[8px] lg:text-[10px] mt-0.5 uppercase tracking-wide">Acceptance</div>
                          </div>
                          <div className="bg-[#F6F8FC] rounded-xl p-2 lg:p-3 text-center">
                            <div className="font-heading font-bold text-[#0F172A] text-xs lg:text-sm">{university.established}</div>
                            <div className="text-[#64748B] text-[8px] lg:text-[10px] mt-0.5 uppercase tracking-wide">Est.</div>
                          </div>
                        </div>

                        <div className="mb-3 lg:mb-5">
                          <div className="text-[10px] lg:text-[10px] font-bold text-[#64748B] uppercase tracking-wide mb-1.5 lg:mb-2">Popular Courses</div>
                          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} layout={false} className="flex flex-wrap gap-1 lg:gap-1.5">
                            {university.courses.map((course, tagIndex) => (
                              <motion.span
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: tagIndex * 0.06, type: 'spring', stiffness: 400 }}
                                layout={false}
                                className={`${tagIndex >= 3 ? 'hidden lg:inline-flex' : ''} bg-[#2F6BFF]/8 text-[#2F6BFF] border border-[#2F6BFF]/15 text-[10px] lg:text-[11px] px-2 py-0.5 lg:px-3 lg:py-1 rounded-lg font-medium`}
                              >
                                {course}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>

                        <div className="flex flex-wrap gap-1 lg:gap-1.5 mb-3 lg:mb-5 mt-auto">
                          {university.tags.map((tag, tagIndex) => (
                            <span key={tag} className={`${tagIndex >= 3 ? 'hidden lg:inline-flex' : ''} bg-[#D4AF37]/8 text-[#D4AF37]/80 border border-[#D4AF37]/15 text-[8px] lg:text-[10px] px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-md font-semibold uppercase tracking-wide`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link href="/contact" passHref legacyBehavior>
                          <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="w-full bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white py-2 lg:py-3 rounded-xl font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-[#2F6BFF]/30 transition-all flex items-center justify-center gap-1.5 lg:gap-2 cursor-pointer"
                          >
                            <GraduationCap className="w-4 h-4" />
                            Apply <span className="hidden sm:inline">to This University</span>
                          </motion.a>
                        </Link>

                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <Building2 className="w-20 h-20 text-[#64748B]/20 mx-auto mb-4" />
                <div className="font-heading font-bold text-[#0F172A] text-xl">No universities found</div>
                <div className="text-[#64748B] text-sm mt-2 max-w-sm mx-auto">
                  Try adjusting your search or filters to find your perfect university.
                </div>
                <button
                  onClick={resetFilters}
                  className="mt-6 bg-[#2F6BFF] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#2F6BFF]/90 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* BELOW GRID — CTA banner */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              layout={false}
              className="bg-[#0A1F44] rounded-2xl lg:rounded-3xl p-6 lg:p-12 mt-6 lg:mt-16 mb-0 lg:mb-16 relative overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-[#2F6BFF]/20 rounded-full blur-[80px] pointer-events-none"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center relative z-10">
                <motion.div variants={slideInLeft} layout={false}>
                  <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-4">Can&apos;t Find Your University?</motion.h2>
                  <motion.p variants={fadeUp} transition={{ delay: 0.2 }} layout={false} className="hidden lg:block text-white/60 text-base mt-3">
                    We work with 250+ universities worldwide. Contact our counselors and we will find the perfect match for your profile.
                  </motion.p>

                  <div className="flex gap-4 lg:gap-8 mt-6 mb-4 lg:mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      layout={false}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Building2 className="text-[#D4AF37] w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl lg:text-3xl">
                          <AnimatedCounter target={250} suffix="+" />
                        </div>
                        <div className="text-white/50 text-xs lg:text-sm">Partners</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      layout={false}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Globe2 className="text-[#D4AF37] w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl lg:text-3xl">
                          <AnimatedCounter target={15} suffix="+" />
                        </div>
                        <div className="text-white/50 text-xs lg:text-sm">Countries</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div variants={slideInRight} layout={false} className="flex flex-col gap-3 lg:flex-row lg:gap-4 justify-center lg:justify-end mt-4 lg:mt-0">
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-3 lg:py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2F6BFF]/40 transition-all inline-block text-center cursor-pointer w-full"
                    >
                      Talk to a Counselor
                    </motion.a>
                  </Link>
                  <Link href="/destinations" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="border-2 border-[#D4AF37]/50 text-[#D4AF37] px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition-all inline-block text-center cursor-pointer w-full"
                    >
                      View Destinations
                    </motion.a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
      <div className="pb-6 lg:pb-16"></div>
    </section>
  )
}
