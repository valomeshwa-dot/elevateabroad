"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, User, Mail, Phone, Globe2, BookOpen, MessageSquare, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerGrid, scaleUp, viewport } from '@/lib/animations'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    message: '',
    source: ''
  })

  const formFields = [
    // index 0: Name row
    (
      <div key="row-0" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
            <User className="w-3.5 h-3.5" /> First Name
          </label>
          <input
            type="text"
            className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition"
          />
        </div>
        <div>
          <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
            <User className="w-3.5 h-3.5" /> Last Name
          </label>
          <input
            type="text"
            className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition"
          />
        </div>
      </div>
    ),
    // index 1: Email
    (
      <div key="row-1">
        <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
          <Mail className="w-3.5 h-3.5" /> Email Address
        </label>
        <input
          type="email"
          className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition"
        />
      </div>
    ),
    // index 2: Phone
    (
      <div key="row-2">
        <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
          <Phone className="w-3.5 h-3.5" /> Phone Number
        </label>
        <input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition"
        />
      </div>
    ),
    // index 3: Country + Course
    (
      <div key="row-3" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
            <Globe2 className="w-3.5 h-3.5" /> Preferred Country
          </label>
          <select className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Ireland">Ireland</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
            <BookOpen className="w-3.5 h-3.5" /> Preferred Course
          </label>
          <input
            type="text"
            placeholder="e.g. Computer Science, MBA"
            className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition"
          />
        </div>
      </div>
    ),
    // index 4: Message
    (
      <div key="row-4">
        <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
          <MessageSquare className="w-3.5 h-3.5" /> Message / Specific Query
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your academic background, goals, and any specific questions..."
          className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition resize-none"
        ></textarea>
      </div>
    ),
    // index 5: Source
    (
      <div key="row-5">
        <label className="flex items-center gap-1.5 mb-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
          How did you hear about us?
        </label>
        <select className="form-input w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/20 transition">
          <option value="">Select an option</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend Referral">Friend Referral</option>
          <option value="Education Fair">Education Fair</option>
          <option value="YouTube">YouTube</option>
          <option value="Other">Other</option>
        </select>
      </div>
    ),
    // index 6: Submit Button
    (
      <div key="row-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          layout={false}
          className="relative overflow-hidden group"
        >
          <button
            onClick={() => setSubmitted(true)}
            className="w-full mt-2 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] hover:shadow-xl hover:shadow-[#2F6BFF]/40 transition-all flex items-center justify-center gap-2 relative z-10"
          >
            <Send className="w-5 h-5" />
            Send Message & Book Consultation
          </button>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>
    )
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* LEFT COLUMN — Form */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          layout={false}
          className="lg:col-span-3"
        >
          <motion.div variants={fadeUp} transition={{ delay: 0.05 }} layout={false}>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
              Book Your Free Consultation
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.15 }}
            layout={false}
            className="h-1 bg-[#D4AF37] rounded-full mt-3 mb-3"
          />
          <motion.p variants={fadeUp} transition={{ delay: 0.15 }} layout={false} className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Fill in your details and our expert counselors will contact you within 24 hours to schedule your personalized consultation session.
          </motion.p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                layout={false}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 300
                  }}
                  layout={false}
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  layout={false}
                  className="font-heading font-bold text-3xl text-[#0F172A] mt-6"
                >Thank You!</motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  layout={false}
                  className="text-[#64748B] mt-3"
                >
                  We have received your request. Our team will contact you within 24 hours.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-[#F6F8FC] text-[#64748B] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all border border-gray-100"
                >
                  Book Another
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                layout={false}
                className="flex flex-col gap-5"
              >
                {formFields.map((field, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      delay: 0.1 + idx * 0.07,
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                    layout={false}
                  >
                    {field}
                  </motion.div>
                ))}

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  layout={false}
                  className="text-center text-[#64748B] text-xs mt-4"
                >
                  🔒 100% confidential. We never share your information with third parties.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          layout={false}
          className="lg:col-span-2"
        >
          {/* CARD 1 — Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.1, duration: 0.5 }}
            layout={false}
            className="bg-[#F6F8FC] rounded-3xl p-8 border border-gray-100 mb-6 card-hover"
          >
            <h3 className="font-heading font-bold text-[#0F172A] text-xl mb-6">Quick Contact</h3>

            <div className="space-y-5">
              {[
                { icon: <Phone className="w-5 h-5" />, title: "Call Us", val: "+91 98765 43210", sub: "Mon-Sat, 9AM-7PM", link: "tel:+919876543210" },
                { icon: <Mail className="w-5 h-5" />, title: "Email Us", val: "info@elevateabroad.com", sub: "Reply in 24hrs", link: "mailto:info@elevateabroad.com" },
                { icon: <Globe2 className="w-5 h-5" />, title: "Visit Us", val: "123 Education Hub, Bandra West", sub: "Mumbai, Maharashtra 400050", link: "https://maps.google.com" }
              ].map((item, idx) => {
                const content = (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{
                      delay: 0.2 + idx * 0.1,
                      duration: 0.4
                    }}
                    layout={false}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#2F6BFF]/10 flex-shrink-0 flex items-center justify-center card-icon group-hover:bg-[#2F6BFF] transition-all">
                      <span className="text-[#2F6BFF] group-hover:text-white transition-all">{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A] text-sm">{item.title}</div>
                      <div className="text-[#64748B] text-sm mt-0.5">{item.val}</div>
                      <div className="text-[#64748B] text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </motion.div>
                );

                return (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* CARD 2 — Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.2, duration: 0.5 }}
            layout={false}
            className="bg-[#F6F8FC] rounded-3xl p-8 border border-gray-100 mb-6 card-hover"
          >
            <h3 className="font-heading font-bold text-[#0F172A] text-xl mb-5">Office Hours</h3>

            <div className="space-y-3">
              {[
                { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                { day: "Saturday", time: "10:00 AM - 5:00 PM" },
                { day: "Sunday", time: "Closed", closed: true }
              ].map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.3 + idx * 0.08,
                    duration: 0.35
                  }}
                  layout={false}
                  className={`flex justify-between items-center py-2.5 ${idx !== 2 ? 'border-b border-gray-200' : ''}`}
                >
                  <span className="text-[#64748B] text-sm">{row.day}</span>
                  <span className={`${row.closed ? 'text-red-400' : 'text-[#0F172A]'} font-semibold text-sm`}>{row.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CARD 3 — Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.3, duration: 0.5 }}
            layout={false}
            className="bg-[#0A1F44] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2F6BFF]/10 rounded-full blur-3xl"></div>
            <h3 className="font-heading font-bold text-white text-lg mb-5 relative z-10">Follow Us</h3>
            <p className="text-white/50 text-sm mb-6 relative z-10">
              Stay updated with latest news, tips and student success stories.
            </p>

            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              layout={false}
              className="grid grid-cols-4 gap-3 relative z-10"
            >
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" }
              ].map((social, idx) => (
                <Link key={idx} href={social.href} passHref legacyBehavior>
                  <motion.a
                    variants={scaleUp}
                    layout={false}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: 'rgba(212,175,55,0.2)',
                      borderColor: 'rgba(212,175,55,0.4)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full aspect-square rounded-2xl bg-white/8 border border-white/15 flex items-center justify-center group transition-colors cursor-pointer"
                  >
                    <div className="text-white/60 group-hover:text-[#D4AF37] transition-colors">{social.icon}</div>
                  </motion.a>
                </Link>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
