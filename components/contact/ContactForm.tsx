"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, User, Mail, Phone, Globe2, BookOpen, MessageSquare, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerGrid, scaleUp, viewport } from '@/lib/animations'

export default function ContactForm() {
  return (
    <section className="bg-white py-6 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

        <div className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-8 border border-gray-100 shadow-sm">
          {/* Header */}
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-[#0F172A] mb-1.5">
            Book Your Free Consultation
          </h2>

          {/* Gold bar */}
          <div className="h-0.5 w-10 bg-[#D4AF37] rounded-full mb-3" />

          {/* Subtitle */}
          <p className="text-[#64748B] text-xs lg:text-sm mb-4">
            Fill in your details and our expert counsellors will get back to you within 24 hours.
          </p>

          {/* Direct Tally Iframe */}
          <iframe
            src="https://tally.so/embed/D41K0q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="550"
            frameBorder={0}
            style={{
              border: 'none',
              minHeight: '500px',
              width: '100%',
              display: 'block',
            }}
            title="Consultation Booking Form"
          />

          {/* Privacy note */}
          <p className="text-[#94A3B8] text-[10px] lg:text-xs mt-2 flex items-center gap-1">
            🔒 Your information is 100% secure.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          layout={false}
          className="hidden lg:block space-y-6"
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
