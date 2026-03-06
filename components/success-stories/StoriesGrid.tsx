"use client"

import { useState } from 'react'
import { Star, MapPin, GraduationCap, Trophy, CheckCircle2, Quote } from 'lucide-react'

interface Story {
  id: string
  name: string
  initials: string
  gradient: string
  country: string
  countryFlag: string
  university: string
  course: string
  year: string
  quote: string
  result: string
  resultType: 'scholarship' | 'admission' | 'visa' | 'pr'
  rating: number
  filter: string
}

const stories: Story[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    initials: 'PS',
    gradient: 'from-purple-500 to-pink-500',
    country: 'UK',
    countryFlag: 'GB',
    university: 'University of Oxford',
    course: 'MSc Data Science',
    year: '2024',
    quote: 'ElevateAbroad made my dream of studying at Oxford a reality. Their SOP guidance was exceptional and the visa support was absolutely flawless.',
    result: 'Scholarship: £12,000',
    resultType: 'scholarship',
    rating: 5,
    filter: 'UK'
  },
  {
    id: '2',
    name: 'Rahul Mehta',
    initials: 'RM',
    gradient: 'from-blue-500 to-cyan-500',
    country: 'Canada',
    countryFlag: 'CA',
    university: 'University of Toronto',
    course: 'MBA Finance',
    year: '2024',
    quote: 'From shortlisting universities to visa approval, every step was handled with complete professionalism. Got into my first-choice university.',
    result: 'Admitted + $8,000 Award',
    resultType: 'admission',
    rating: 5,
    filter: 'Canada'
  },
  {
    id: '3',
    name: 'Aisha Malik',
    initials: 'AM',
    gradient: 'from-orange-500 to-red-500',
    country: 'Germany',
    countryFlag: 'DE',
    university: 'TU Munich',
    course: 'MS Mechanical Engineering',
    year: '2023',
    quote: 'I had no idea how to apply to German universities. ElevateAbroad guided me through everything including the blocked account and APS certificate.',
    result: 'Tuition-Free Admission',
    resultType: 'admission',
    rating: 5,
    filter: 'Germany'
  },
  {
    id: '4',
    name: 'Karan Patel',
    initials: 'KP',
    gradient: 'from-green-500 to-teal-500',
    country: 'USA',
    countryFlag: 'US',
    university: 'Stanford University',
    course: 'MS Computer Science',
    year: '2024',
    quote: 'My profile was not perfect but their team helped me present it in the best possible way. Stanford was my dream and they made it happen.',
    result: 'Admitted to Top 5 University',
    resultType: 'admission',
    rating: 5,
    filter: 'USA'
  },
  {
    id: '5',
    name: 'Fatima Zahra',
    initials: 'FZ',
    gradient: 'from-pink-500 to-rose-600',
    country: 'UK',
    countryFlag: 'GB',
    university: 'Imperial College London',
    course: 'MSc Biomedical Engineering',
    year: '2023',
    quote: 'The SOP writing service transformed my application from average to outstanding. Imperial was beyond my expectations.',
    result: 'Merit Scholarship Awarded',
    resultType: 'scholarship',
    rating: 5,
    filter: 'UK'
  },
  {
    id: '6',
    name: 'Arjun Nair',
    initials: 'AN',
    gradient: 'from-indigo-500 to-blue-600',
    country: 'Australia',
    countryFlag: 'AU',
    university: 'University of Melbourne',
    course: 'Master of Engineering',
    year: '2024',
    quote: 'The visa process seemed overwhelming but ElevateAbroad handled everything seamlessly. My visa was approved in just 3 weeks.',
    result: 'Visa Approved in 3 Weeks',
    resultType: 'visa',
    rating: 5,
    filter: 'Australia'
  },
  {
    id: '7',
    name: 'Zara Ahmed',
    initials: 'ZA',
    gradient: 'from-violet-500 to-purple-600',
    country: 'Canada',
    countryFlag: 'CA',
    university: 'UBC Vancouver',
    course: 'MSc Environmental Science',
    year: '2023',
    quote: 'They helped me find scholarships I did not even know existed. I ended up getting two scholarship offers and chose UBC.',
    result: '2 Scholarship Offers Received',
    resultType: 'scholarship',
    rating: 5,
    filter: 'Canada'
  },
  {
    id: '8',
    name: 'Dev Sharma',
    initials: 'DS',
    gradient: 'from-amber-500 to-orange-600',
    country: 'USA',
    countryFlag: 'US',
    university: 'Carnegie Mellon University',
    course: 'MS Artificial Intelligence',
    year: '2024',
    quote: 'The career counseling session completely changed my perspective. CMU was not even on my radar until they suggested it based on my profile.',
    result: 'Admitted to Dream Program',
    resultType: 'admission',
    rating: 5,
    filter: 'USA'
  },
  {
    id: '9',
    name: 'Nadia Khan',
    initials: 'NK',
    gradient: 'from-teal-500 to-green-600',
    country: 'Ireland',
    countryFlag: 'IE',
    university: 'Trinity College Dublin',
    course: 'MSc Business Analytics',
    year: '2023',
    quote: 'As a non-EU student I was worried about costs. ElevateAbroad found me a partial scholarship and guided me through the Irish student visa perfectly.',
    result: 'Scholarship + Visa Approved',
    resultType: 'scholarship',
    rating: 5,
    filter: 'Ireland'
  }
]

export default function StoriesGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'UK', 'USA', 'Canada', 'Australia', 'Germany', 'Ireland']

  const filteredStories = activeFilter === 'All'
    ? stories
    : stories.filter(s => s.filter === activeFilter)

  return (
    <section className="bg-[#F6F8FC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37] block" />
            <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">
              SUCCESS STORIES
            </span>
            <span className="w-8 h-px bg-[#D4AF37] block" />
          </div>
          <h2 className="font-heading text-5xl font-bold text-[#0F172A] tracking-tight mt-3">
            Hear From Our
            <span className="text-[#2F6BFF]"> Students</span>
          </h2>
          <p className="text-[#64748B] mt-4 max-w-xl mx-auto">
            Discover how we have helped students achieve their international education dreams across the globe.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 border border-gray-200 inline-flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-[#2F6BFF] text-white shadow-lg shadow-[#2F6BFF]/25'
                    : 'bg-transparent text-[#64748B] hover:bg-[#F6F8FC] hover:text-[#0F172A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map(story => (
            <div 
              key={story.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex-shrink-0 bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-bold text-lg font-heading`}>
                    {story.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0F172A] text-base">{story.name}</div>
                    <div className="text-[#64748B] text-sm mt-0.5">{story.course}</div>
                    <div className="bg-[#F6F8FC] text-[#64748B] text-xs px-2 py-0.5 rounded-md mt-1 inline-block">
                      Class of {story.year}
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F6F8FC] border border-gray-200 text-[#64748B] text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {story.countryFlag} {story.country}
                </div>
              </div>

              {/* University pill */}
              <div className="bg-[#2F6BFF]/8 border border-[#2F6BFF]/15 text-[#2F6BFF] text-xs font-semibold px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-5 self-start">
                <GraduationCap className="w-3.5 h-3.5" />
                {story.university}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Quote section */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute -top-1 -left-1" />
                <p className="text-[#0F172A] text-sm leading-relaxed pl-6 italic">
                  &quot;{story.quote}&quot;
                </p>
              </div>

              {/* Result badge */}
              <div className="mt-auto pt-5 border-t border-gray-100">
                <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wide ${
                  story.resultType === 'scholarship'
                    ? 'bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]'
                    : story.resultType === 'admission'
                    ? 'bg-[#2F6BFF]/10 border-[#2F6BFF]/20 text-[#2F6BFF]'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                }`}>
                  {story.resultType === 'scholarship' && <Trophy className="w-4 h-4" />}
                  {story.resultType === 'admission' && <CheckCircle2 className="w-4 h-4" />}
                  {story.resultType === 'visa' && <CheckCircle2 className="w-4 h-4" />}
                  {story.result}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
