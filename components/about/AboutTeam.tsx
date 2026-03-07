"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Linkedin } from 'lucide-react'
import { fadeUp, scaleUp, staggerContainer, staggerGrid, viewport } from '@/lib/animations'

interface TeamMember {
  initials: string
  name: string
  gradient: string
  role: string
  university: string
  expertise: string[]
  years: number
}

const team: TeamMember[] = [
  {
    initials: 'AS',
    name: 'Amit Sharma',
    gradient: 'from-blue-700 to-blue-900',
    role: 'Head of Counseling & Founder',
    university: 'University of Oxford',
    expertise: ['UK Admissions', 'Career Strategy', 'SOP Writing'],
    years: 10
  },
  {
    initials: 'PM',
    name: 'Priya Menon',
    gradient: 'from-purple-600 to-pink-600',
    role: 'Senior University Counselor',
    university: 'University of Toronto',
    expertise: ['Canada', 'USA', 'Scholarships'],
    years: 7
  },
  {
    initials: 'RK',
    name: 'Ravi Kumar',
    gradient: 'from-green-600 to-teal-700',
    role: 'Visa & Immigration Specialist',
    university: 'TU Munich',
    expertise: ['Germany', 'Europe Visa', 'Blocked Account'],
    years: 6
  },
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    gradient: 'from-orange-500 to-red-600',
    role: 'Australia & UK Counselor',
    university: 'University of Melbourne',
    expertise: ['Australia', 'UK Student Visa', 'GTE Letter'],
    years: 8
  },
  {
    initials: 'ZA',
    name: 'Zoya Ahmed',
    gradient: 'from-indigo-600 to-purple-700',
    role: 'Scholarship Coordinator',
    university: 'University College London',
    expertise: ['Scholarships', 'Financial Aid', 'LOR Strategy'],
    years: 5
  },
  {
    initials: 'DP',
    name: 'Dev Patel',
    gradient: 'from-teal-600 to-cyan-700',
    role: 'Application Documentation Expert',
    university: 'McGill University',
    expertise: ['SOP Writing', 'Documentation', 'Canada PR'],
    years: 6
  }
]

export default function AboutTeam() {
  return (
    <section id="about-team" className="bg-[#F6F8FC] py-10 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          layout={false}
          className="text-center mb-6 lg:mb-16"
        >
          <motion.div variants={fadeUp} layout={false} className="flex items-center justify-center gap-3 mb-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-[#D4AF37] block"
            />
            <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">
              OUR TEAM
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-[#D4AF37] block"
            />
          </motion.div>
          <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-2xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mt-3">
            Meet Our Expert Counselors
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ delay: 0.2 }} layout={false} className="text-[#64748B] mt-4 max-w-xl mx-auto text-sm lg:text-base">
            Our counselors have personally studied abroad and bring real firsthand experience to guide every student on their journey.
          </motion.p>
        </motion.div>

        {/* TEAM CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerGrid}
          layout={false}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              layout={false}
              className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 card-hover flex flex-col"
            >

              {/* CARD TOP BANNER */}
              <div className={`h-20 lg:h-32 relative bg-gradient-to-br ${member.gradient} rounded-t-2xl lg:rounded-t-3xl`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  layout={false}
                  className="absolute right-4 bottom-0 lg:bottom-1 font-heading font-bold text-5xl lg:text-[100px] text-white/8 leading-none select-none"
                >
                  {member.initials}
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 p-4 h-12 lg:h-16"></div>
              </div>

              {/* Avatar wrapper */}
              <div className="px-6 lg:px-8 -mt-7 lg:-mt-10 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                  layout={false}
                  className={`w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl border-4 border-white bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-base lg:text-2xl font-heading shadow-xl`}
                >
                  {member.initials}
                </motion.div>
              </div>

              {/* CARD BODY */}
              <div className="pt-4 px-6 lg:px-8 pb-6 lg:pb-8 flex flex-col flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  layout={false}
                >
                  <h3 className="font-heading font-bold text-[#0F172A] text-base lg:text-xl">{member.name}</h3>
                  <div className="text-[#2F6BFF] text-xs lg:text-sm font-medium mt-0.5">{member.role}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.3,
                    type: 'spring',
                    stiffness: 400
                  }}
                  layout={false}
                  className="inline-flex items-center gap-1.5 lg:gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] lg:text-xs font-semibold px-2 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl mt-2 lg:mt-3 mb-3 lg:mb-5 self-start"
                >
                  <GraduationCap className="w-3 lg:w-3.5 h-3 lg:h-3.5" />
                  Studied at {member.university}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  layout={false}
                  className="flex flex-wrap gap-1 lg:gap-2 mb-3 lg:mb-5"
                >
                  {member.expertise.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={{
                        delay: 0.35 + i * 0.07,
                        type: 'spring',
                        stiffness: 400
                      }}
                      layout={false}
                      className={`${i >= 2 ? 'hidden lg:inline-flex' : ''} bg-[#F6F8FC] text-[#64748B] border border-gray-200 text-[10px] lg:text-xs px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-md lg:rounded-lg font-medium`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  layout={false}
                  className="flex items-center justify-between pt-4 lg:pt-5 border-t border-gray-100 mt-auto"
                >
                  <div className="text-[#64748B] text-[10px] lg:text-xs">
                    {member.years} years experience
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-[#2F6BFF]/10 flex items-center justify-center cursor-pointer group card-icon"
                    >
                      <Linkedin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#2F6BFF] group-hover:text-white transition-all" />
                    </motion.div>
                  </a>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
