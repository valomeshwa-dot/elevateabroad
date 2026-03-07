"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target, GraduationCap, FileText,
  Shield, Award, PenTool, Check
} from 'lucide-react'

const services = [
  {
    id: "01",
    category: "CAREER PLANNING",
    title: "Find Your Perfect Career Path",
    description: "We help you discover the right field of study by analysing your academic background, interests, and global career trends. Our expert counsellors guide you to make informed decisions.",
    benefits: [
      "1-on-1 counselling with certified advisors",
      "Career aptitude and interest mapping",
      "Global job market trend analysis",
      "Industry-specific university shortlisting"
    ],
    icon: Target,
    visual: "career"
  },
  {
    id: "02",
    category: "UNIVERSITY SELECTION",
    title: "The Right University for Your Profile",
    description: "We match you to the best universities based on your academic profile, budget, and goals. With insider knowledge of 250+ partner universities worldwide.",
    benefits: [
      "Access to 250+ partner universities",
      "Profile-based university matching",
      "Scholarship opportunity identification",
      "Acceptance rate analysis"
    ],
    icon: GraduationCap,
    visual: "university"
  },
  {
    id: "03",
    category: "APPLICATION ASSISTANCE",
    title: "Flawless Applications, Every Time",
    description: "Our team handles every aspect of your application — from documentation to submission — ensuring error-free, compelling applications that stand out.",
    benefits: [
      "Complete document review and editing",
      "Application form filling support",
      "Deadline tracking and reminders",
      "Multiple university applications"
    ],
    icon: FileText,
    visual: "application"
  },
  {
    id: "04",
    category: "VISA SUPPORT",
    title: "98% Visa Approval Rate",
    description: "Our visa specialists have helped students secure visas for UK, USA, Canada, Australia, Germany and more. We prepare you for every step of the process.",
    benefits: [
      "Mock visa interview preparation",
      "Document checklist and verification",
      "Application tracking support",
      "Post-visa arrival guidance"
    ],
    icon: Shield,
    visual: "visa"
  },
  {
    id: "05",
    category: "SCHOLARSHIP GUIDANCE",
    title: "Fund Your Education Abroad",
    description: "We identify scholarships you qualify for and help you craft winning applications. Our students have secured over ₹50 Crores in scholarships.",
    benefits: [
      "Personalised scholarship matching",
      "Merit and need-based options",
      "Application essay support",
      "Financial planning guidance"
    ],
    icon: Award,
    visual: "scholarship"
  },
  {
    id: "06",
    category: "SOP & ESSAY WRITING",
    title: "Your Story, Powerfully Told",
    description: "A compelling Statement of Purpose can be the difference between acceptance and rejection. Our expert writers craft SOPs that reflect your unique strengths and ambitions.",
    benefits: [
      "Custom SOP for each university",
      "Your unique story highlighted",
      "Multiple revision rounds included",
      "Proven to increase admit chances"
    ],
    icon: PenTool,
    visual: "sop"
  }
]

/* ── VISUAL CARDS ── */

function CareerVisual() {
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div>
          <div className="text-white font-bold text-sm">Career Assessment</div>
          <div className="text-white/50 text-xs">Personalised for you</div>
        </div>
      </div>
      {[
        { field: "Engineering & Tech", match: 94, color: "bg-blue-500" },
        { field: "Business & MBA", match: 87, color: "bg-purple-500" },
        { field: "Medicine & Health", match: 76, color: "bg-green-500" },
        { field: "Arts & Design", match: 65, color: "bg-orange-500" },
      ].map((item) => (
        <div key={item.field} className="mb-4">
          <div className="flex justify-between mb-1.5">
            <span className="text-white/80 text-sm">{item.field}</span>
            <span className="text-[#D4AF37] text-sm font-bold">{item.match}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full">
            <div
              className={`h-2 ${item.color} rounded-full`}
              style={{ width: `${item.match}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-6 flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl px-4 py-3">
        <Check className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-white/80 text-sm">Matched with 3 ideal career paths</span>
      </div>
    </div>
  )
}

function UniversityVisual() {
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="text-white/50 text-xs font-semibold mb-5 tracking-widest uppercase">
        Top Matches For You
      </div>
      {[
        { name: "University of Oxford", flag: "🇬🇧", country: "UK", rank: "#1 World", accept: "17%" },
        { name: "University of Toronto", flag: "🇨🇦", country: "Canada", rank: "#21 World", accept: "43%" },
        { name: "TU Munich", flag: "🇩🇪", country: "Germany", rank: "#37 World", accept: "8%" },
      ].map((uni) => (
        <div key={uni.name} className="flex items-center justify-between p-4 mb-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{uni.flag}</span>
            <div>
              <div className="text-white font-semibold text-sm">{uni.name}</div>
              <div className="text-white/50 text-xs">{uni.country}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#D4AF37] font-bold text-sm">{uni.rank}</div>
            <div className="text-white/50 text-xs">{uni.accept} accept</div>
          </div>
        </div>
      ))}
      <Link href="/contact" className="block w-full mt-4 bg-[#2F6BFF] text-white py-3 rounded-xl text-sm font-semibold text-center hover:bg-[#5B8CFF] transition-all duration-200">
        View All Matches →
      </Link>
    </div>
  )
}

function ApplicationVisual() {
  const items = [
    { task: "Personal Statement", status: "Complete", done: true },
    { task: "Recommendation Letters", status: "Complete", done: true },
    { task: "Transcripts Verified", status: "Complete", done: true },
    { task: "English Test Scores", status: "In Review", done: false },
    { task: "Financial Documents", status: "Pending", done: false },
  ]
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="text-white font-bold mb-6 text-base">Application Checklist</div>
      {items.map((item) => (
        <div key={item.task} className="flex items-center gap-3 mb-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-green-500' : 'bg-white/10'}`}>
            {item.done ? <Check className="w-3 h-3 text-white" /> : <span className="text-white/30 text-xs">○</span>}
          </div>
          <span className="flex-1 text-white/80 text-sm">{item.task}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-lg ${item.done ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
            {item.status}
          </span>
        </div>
      ))}
      <div className="mt-5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-center">
        <span className="text-[#D4AF37] font-semibold text-sm">3/5 Tasks Complete — On Track! 🎯</span>
      </div>
    </div>
  )
}

function VisaVisual() {
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#D4AF37] bg-[#D4AF37]/10 mb-3">
          <div>
            <div className="text-[#D4AF37] font-bold text-3xl">98%</div>
            <div className="text-white/60 text-xs">Success Rate</div>
          </div>
        </div>
      </div>
      {[
        { country: "🇺🇸 USA", rate: "97%" },
        { country: "🇬🇧 UK", rate: "99%" },
        { country: "🇨🇦 Canada", rate: "98%" },
        { country: "🇦🇺 Australia", rate: "96%" },
        { country: "🇩🇪 Germany", rate: "97%" },
      ].map((item) => (
        <div key={item.country} className="flex items-center justify-between mb-3 p-3 bg-white/5 rounded-xl">
          <span className="text-white/80 text-sm">{item.country}</span>
          <span className="text-green-400 font-bold text-sm">{item.rate}</span>
        </div>
      ))}
    </div>
  )
}

function ScholarshipVisual() {
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="text-white font-bold mb-1 text-base">Available Scholarships</div>
      <div className="text-white/50 text-xs mb-5">Matched to your profile</div>
      {[
        { name: "Commonwealth Scholarship", amount: "£25,000/yr", deadline: "Dec 2025", tag: "Full Funding" },
        { name: "Chevening Award", amount: "£18,000/yr", deadline: "Nov 2025", tag: "Merit Based" },
        { name: "DAAD Scholarship", amount: "€12,000/yr", deadline: "Jan 2026", tag: "Germany" },
      ].map((s) => (
        <div key={s.name} className="p-4 mb-3 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-start justify-between mb-2">
            <div className="text-white font-semibold text-sm pr-2">{s.name}</div>
            <div className="text-[#D4AF37] font-bold text-sm whitespace-nowrap">{s.amount}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40 text-xs">Deadline: {s.deadline}</span>
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] px-2 py-0.5 rounded-full">{s.tag}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function SOPVisual() {
  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] rounded-3xl p-8 h-full">
      <div className="text-white font-bold mb-6 text-base">Your Story, Powerfully Told</div>
      {[
        { label: "Clarity & Structure", score: 96 },
        { label: "Unique Voice", score: 91 },
        { label: "Admission Impact", score: 94 },
      ].map((item) => (
        <div key={item.label} className="mb-5">
          <div className="flex justify-between mb-2">
            <span className="text-white/80 text-sm">{item.label}</span>
            <span className="text-[#D4AF37] font-bold text-sm">{item.score}/100</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full">
            <div className="h-2 bg-[#D4AF37] rounded-full" style={{ width: `${item.score}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="text-white/50 text-xs mb-1">Student Feedback</div>
        <div className="text-white/80 text-sm italic leading-relaxed">
          &quot;My SOP got me into Oxford. The team helped me find my unique voice.&quot;
        </div>
        <div className="text-[#D4AF37] text-xs mt-2">— Priya M., Oxford 2024</div>
      </div>
    </div>
  )
}

/* ── VISUAL WRAPPERS ── */
function ServiceVisual({ type }: { type: string }) {
  if (type === 'career') return <CareerVisual />
  if (type === 'university') return <UniversityVisual />
  if (type === 'application') return <ApplicationVisual />
  if (type === 'visa') return <VisaVisual />
  if (type === 'scholarship') return <ScholarshipVisual />
  if (type === 'sop') return <SOPVisual />
  return null
}

export default function ServicesList() {
  return (
    <div className="bg-white">
      {services.map((service, index) => {
        const isEven = index % 2 === 0

        return (
          <motion.section
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`py-16 lg:py-24 border-b border-gray-100 last:border-0 ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {isEven ? (
                  <>
                    {/* Text LEFT, Visual RIGHT */}
                    <div>
                      <ServiceTextSection service={service} />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      layout={false}
                      className="hidden lg:block"
                    >
                      <ServiceVisual type={service.visual} />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Visual LEFT, Text RIGHT */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      layout={false}
                      className="hidden lg:block"
                    >
                      <ServiceVisual type={service.visual} />
                    </motion.div>

                    <div>
                      <ServiceTextSection service={service} />
                    </div>
                  </>
                )}

              </div>
            </div>
          </motion.section>
        )
      })}
    </div>
  )
}

function ServiceTextSection({ service }: { service: any }) {
  const Icon = service.icon
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#D4AF37] font-bold text-sm tracking-widest">{service.id}</span>
        <div className="h-px w-6 bg-[#D4AF37]" />
        <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">{service.category}</span>
      </div>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0A1F44] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl xl:text-4xl text-[#0F172A] leading-tight">
          {service.title}
        </h2>
      </div>

      <p className="text-[#64748B] text-base leading-relaxed mb-6 max-w-lg">
        {service.description}
      </p>

      <ul className="space-y-3 mb-8">
        {service.benefits.map((b: string) => (
          <li key={b} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#D4AF37]" />
            </div>
            <span className="text-[#475569] text-sm">{b}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2F6BFF] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#5B8CFF] transition-all duration-200 shadow-lg shadow-[#2F6BFF]/25 hover:scale-[1.02] active:scale-[0.98]">
        Get Started →
      </Link>
    </>
  )
}
