"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Target, Building2, FileText, Shield, Award, PenLine, Briefcase, Star, Globe2, Trophy, MapPin, Users } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from '@/lib/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function ServicesList() {
  const services = [
    {
      number: "01",
      label: "CAREER COUNSELING",
      h2: "Find Your Perfect Career Path",
      desc: "Our expert counselors analyze your strengths, interests, and market demand to help you choose the right course and university that aligns with your long-term career vision and goals.",
      icon: Target,
      benefits: [
        "One-on-one personalized career assessment session",
        "Industry-aligned course and university matching",
        "Psychometric and aptitude testing included",
        "Career roadmap and 5-year goal planning",
        "Post-study employment and PR pathway guidance"
      ],
      topStat: { icon: Briefcase, target: 500, suffix: "+", label: "Careers Guided" },
      bottomStat: { icon: Star, target: 95, suffix: "%", label: "Satisfaction Rate" }
    },
    {
      number: "02",
      label: "UNIVERSITY SELECTION",
      h2: "The Right University for Your Profile",
      desc: "We shortlist the best universities based on your academic profile, budget, career goals, and location preferences — maximizing your chances of admission and long-term success.",
      icon: Building2,
      benefits: [
        "Complete academic profile evaluation and gap analysis",
        "Data-driven university shortlisting strategy",
        "Safety, target, and reach university planning",
        "World ranking and accreditation comparison",
        "Scholarship and financial aid opportunity matching"
      ],
      topStat: { icon: Building2, target: 250, suffix: "+", label: "Partner Universities" },
      bottomStat: { icon: Globe2, target: 15, suffix: "+", label: "Countries Covered" }
    },
    {
      number: "03",
      label: "APPLICATION ASSISTANCE",
      h2: "Flawless Applications, Every Time",
      desc: "Our team guides you through every element of the application process — from crafting a compelling personal statement to managing deadlines across multiple university portals.",
      icon: FileText,
      benefits: [
        "Statement of Purpose (SOP) writing and editing",
        "Letter of Recommendation (LOR) strategy and templates",
        "Personal statement and application essay coaching",
        "Complete document checklist and verification",
        "Multi-university deadline and portal management"
      ],
      topStat: { icon: FileText, target: 10000, suffix: "+", label: "Applications Filed" },
      bottomStat: { icon: Trophy, target: 92, suffix: "%", label: "Acceptance Rate" }
    },
    {
      number: "04",
      label: "VISA SUPPORT",
      h2: "98% Visa Approval Rate",
      desc: "Our visa specialists have an exceptional track record helping students secure student visas for the UK, USA, Canada, Australia, Germany and more with thorough documentation.",
      icon: Shield,
      benefits: [
        "Country-specific visa documentation checklist",
        "Financial proof and bank statement preparation",
        "Mock visa interview preparation and coaching",
        "Application tracking and real-time status updates",
        "Pre-departure orientation and arrival support"
      ],
      topStat: { icon: Shield, target: 98, suffix: "%", label: "Visa Approval Rate" },
      bottomStat: { icon: MapPin, target: 15, suffix: "+", label: "Countries Covered" }
    },
    {
      number: "05",
      label: "SCHOLARSHIP GUIDANCE",
      h2: "Fund Your Education Abroad",
      desc: "We identify scholarship opportunities worth thousands of dollars that match your profile and guide you through the complete application process to maximize your financial aid.",
      icon: Award,
      benefits: [
        "Scholarship eligibility assessment and profile matching",
        "Merit-based and need-based scholarship research",
        "Application essay and scholarship portfolio guidance",
        "Government grants and university bursary assistance",
        "Scholarship interview preparation and mock sessions"
      ],
      topStat: { icon: Award, target: 2, prefix: "$", suffix: "M+", label: "Scholarships Won" },
      bottomStat: { icon: Users, target: 300, suffix: "+", label: "Awards Secured" }
    },
    {
      number: "06",
      label: "SOP & LOR WRITING",
      h2: "Your Story, Powerfully Told",
      desc: "A compelling Statement of Purpose can be the difference between acceptance and rejection. Our expert writers craft personalized, university-specific SOPs that truly stand out.",
      icon: PenLine,
      benefits: [
        "Custom SOP written by experienced academic writers",
        "Tailored specifically for each university and course",
        "Unlimited revision rounds until you are satisfied",
        "LOR templates and detailed professor briefing guide",
        "Plagiarism check and final quality assurance review"
      ],
      topStat: { icon: PenLine, target: 5000, suffix: "+", label: "SOPs Written" },
      bottomStat: { icon: CheckCircle2, target: 100, suffix: "%", label: "Plagiarism Free" }
    }
  ];

  return (
    <div id="services-list" className="flex flex-col">
      {services.map((service, index) => {
        const isOdd = index % 2 !== 0;
        const Icon = service.icon;
        const TopStatIcon = service.topStat.icon;
        const BottomStatIcon = service.bottomStat.icon;

        const sectionBg = isOdd ? 'bg-softBg' : 'bg-white';
        const visualBg = isOdd ? 'bg-navy' : 'bg-softBg border border-gray-200';

        const statCardBg = isOdd ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200';
        const statNumberColor = isOdd ? 'text-gold' : 'text-royal';
        const statLabelColor = isOdd ? 'text-white/60' : 'text-textSecondary';
        const watermarkColor = isOdd ? 'text-white/5' : 'text-navy/5';

        const statIconBoxBg = isOdd ? 'bg-white/10' : 'bg-royal/10';
        const statIconColor = isOdd ? 'text-gold' : 'text-royal';

        return (
          <motion.section
            key={index}
            className={`${sectionBg} py-10 lg:py-24 relative overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            layout={false}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${isOdd ? 'lg:flex lg:flex-row-reverse' : ''}`}>

                {/* CONTENT SIDE */}
                <motion.div
                  className={isOdd ? 'lg:w-1/2' : ''}
                  variants={isOdd ? slideInRight : slideInLeft}
                  layout={false}
                >
                  <motion.div
                    variants={fadeUp}
                    layout={false}
                    className="w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-royal/15 to-royal/5 border-2 border-royal/30 flex items-center justify-center text-royal font-bold font-heading text-sm lg:text-2xl mb-4 lg:mb-8 card-hover-step"
                  >
                    {service.number}
                  </motion.div>

                  <motion.span
                    variants={fadeUp}
                    transition={{ delay: 0.05 }}
                    layout={false}
                    className="text-gold text-[10px] lg:text-sm font-bold uppercase tracking-[0.2em] mb-2 lg:mb-4 block flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold inline-block mr-2" />
                    {service.label}
                  </motion.span>

                  <motion.h2
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    layout={false}
                    className="font-heading text-2xl lg:text-4xl font-bold text-textPrimary tracking-tight mb-3 lg:mb-6"
                  >
                    {service.h2}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    transition={{ delay: 0.15 }}
                    layout={false}
                    className="text-textSecondary text-sm lg:text-lg leading-relaxed mb-4 lg:mb-8 max-w-lg line-clamp-3 lg:line-clamp-none"
                  >
                    {service.desc}
                  </motion.p>

                  {/* Staggered Benefits List */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                    layout={false}
                    className="mt-6 lg:mt-8 space-y-2 lg:space-y-4"
                  >
                    {service.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: -16 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.4,
                              ease: 'easeOut'
                            }
                          }
                        }}
                        layout={false}
                        className={`items-start gap-2 lg:gap-3 rounded-xl px-4 py-3 ${!isOdd ? 'bg-softBg' : ''} ${i >= 3 ? 'hidden lg:flex' : 'flex'}`}
                      >
                        <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-textPrimary text-sm lg:text-base leading-relaxed">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-6 lg:mt-10"
                    variants={fadeUp}
                    transition={{ delay: 0.5 }}
                    layout={false}
                  >
                    <Link href="/contact" passHref legacyBehavior>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal to-royalLight text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm lg:text-base hover:shadow-xl hover:shadow-royal/30 hover:gap-3 transition-all duration-200 cursor-pointer text-center"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* VISUAL SIDE */}
                <motion.div
                  variants={isOdd ? slideInLeft : slideInRight}
                  layout={false}
                  className={`${visualBg} hidden lg:flex rounded-3xl overflow-hidden relative min-h-[420px] flex-col justify-between p-8 ${isOdd ? 'lg:w-1/2' : ''} lg:sticky lg:top-24 card-hover shadow-sm`}
                >
                  {/* Floating background icon */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <Icon className={`w-48 h-48 ${watermarkColor}`} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20, y: -10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
                    layout={false}
                    className={`${statCardBg} rounded-2xl p-5 shadow-xl min-w-[160px] flex items-center gap-3 relative z-10 w-fit max-w-full card-hover-stat`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${statIconBoxBg} flex items-center justify-center ${statIconColor} shrink-0`}>
                      <TopStatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-heading font-bold text-xl ${statNumberColor}`}>
                        <AnimatedCounter
                          target={service.topStat.target}
                          suffix={service.topStat.suffix}
                          prefix={'prefix' in service.topStat ? (service.topStat as any).prefix : ''}
                        />
                      </div>
                      <div className={`text-xs mt-0.5 ${statLabelColor}`}>{service.topStat.label}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.5, ease: 'easeOut' }}
                    layout={false}
                    className={`${statCardBg} rounded-2xl p-5 shadow-xl min-w-[160px] flex items-center gap-3 relative z-10 self-end ml-auto w-fit max-w-full mt-auto card-hover-stat`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${statIconBoxBg} flex items-center justify-center ${statIconColor} shrink-0`}>
                      <BottomStatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-heading font-bold text-xl ${statNumberColor}`}>
                        <AnimatedCounter
                          target={service.bottomStat.target}
                          suffix={service.bottomStat.suffix}
                          prefix={'prefix' in service.bottomStat ? (service.bottomStat as any).prefix : ''}
                        />
                      </div>
                      <div className={`text-xs mt-0.5 ${statLabelColor}`}>{service.bottomStat.label}</div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* DIVIDER with scale animation */}
            {index < services.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                layout={false}
                className="absolute bottom-0 left-0 right-0 h-px bg-gray-100"
              />
            )}
          </motion.section>

        );
      })}
    </div>
  );
}
