"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Mail, Clock, Send } from 'lucide-react'
import { fadeUp, scaleUp, slideInLeft, slideInRight, staggerContainer, staggerGrid, viewport } from '@/lib/animations'

export default function ContactInfo() {
  const offices = [
    {
      city: "Mumbai (Bandra)",
      address: "123 Education Hub, 4th Floor, Linking Road, Bandra West, Mumbai, Maharashtra 400050",
      phone: "+91 98765 43210",
      isHQ: true,
      color: "bg-[#2F6BFF]"
    },
    {
      city: "New Delhi (CP)",
      address: "45 Connaught Place, Block B, Near Rajiv Chowk Metro, New Delhi 110001",
      phone: "+91 98765 43211",
      isHQ: false,
      color: "bg-emerald-500"
    },
    {
      city: "Bangalore (Indiranagar)",
      address: "789 100ft Road, 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
      phone: "+91 98765 43212",
      isHQ: false,
      color: "bg-purple-500"
    }
  ];

  const details = [
    { icon: <MapPin className="w-5 h-5" />, label: "Main Campus", val: "123 Education Hub, Bandra West, Mumbai" },
    { icon: <Phone className="w-5 h-5" />, label: "Primary Phone", val: "+91 98765 43210" },
    { icon: <Mail className="w-5 h-5" />, label: "Support Email", val: "support@elevateabroad.com" },
    { icon: <Clock className="w-5 h-5" />, label: "Business Hours", val: "Mon - Sat: 9:00 AM - 7:00 PM" }
  ];

  return (
    <section className="bg-[#F6F8FC] py-6 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION A — Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          layout={false}
          className="mb-8 lg:mb-32"
        >
          {/* HEADER */}
          <div className="text-center mb-5 lg:mb-16">
            <motion.div variants={fadeUp} layout={false} className="flex items-center justify-center gap-3 mb-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
              <span className="text-[#2F6BFF] text-xs font-bold uppercase tracking-[0.2em]">
                OUR OFFICES
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#D4AF37] block"
              />
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-xl lg:text-4xl font-bold text-[#0F172A] tracking-tight mt-3">
              Visit Us In Person
            </motion.h2>
            <motion.p variants={fadeUp} transition={{ delay: 0.2 }} layout={false} className="hidden lg:block text-[#64748B] mt-4 max-w-xl mx-auto text-sm lg:text-base">
              We have multiple branches across India. Find the one closest to you and drop by for a chat.
            </motion.p>
          </div>

          {/* LOCATIONS GRID */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            layout={false}
            className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6"
          >
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                layout={false}
                className="bg-white rounded-xl lg:rounded-3xl p-5 lg:p-8 border border-gray-100 shadow-sm transition-all duration-300 card-hover relative overflow-hidden flex flex-col"
              >
                {office.isHQ && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{
                      delay: 0.45 + idx * 0.1,
                      type: 'spring',
                      stiffness: 400
                    }}
                    layout={false}
                    className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest px-2 lg:px-4 py-1 lg:py-1.5 rounded-bl-xl z-10"
                  >
                    Headquarters
                  </motion.div>
                )}

                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.2 + idx * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }}
                  layout={false}
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#2F6BFF]/10 flex items-center justify-center mb-2 lg:mb-4 card-icon"
                >
                  <MapPin className="text-[#2F6BFF] w-4 h-4 lg:w-6 lg:h-6" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    duration: 0.4
                  }}
                  layout={false}
                  className="font-heading font-bold text-[#0F172A] text-base lg:text-xl mb-1 lg:mb-2"
                >
                  {office.city}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{
                    delay: 0.35 + idx * 0.1,
                    duration: 0.4
                  }}
                  layout={false}
                  className="text-[#64748B] text-xs lg:text-sm leading-relaxed mb-2 lg:mb-4 line-clamp-2 lg:line-clamp-none flex-1"
                >
                  {office.address}
                </motion.p>

                <div className="space-y-2 lg:space-y-3 pt-4 lg:pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2 lg:mb-3">
                    <Phone className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-[#64748B]" />
                    <span className="text-[#0F172A] text-xs lg:text-sm font-semibold">{office.phone}</span>
                  </div>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full flex items-center justify-center gap-2 bg-[#F6F8FC] text-[#2F6BFF] py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold hover:bg-[#2F6BFF] hover:text-white transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* SECTION B — Map + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center mt-8 lg:mt-16">

          {/* LEFT — Map Placeholder */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            layout={false}
            className="bg-[#0A1F44] rounded-2xl lg:rounded-[40px] p-4 lg:p-8 relative overflow-hidden h-40 lg:h-80 flex flex-col items-center justify-center text-center group"
          >
            {/* Glow orb inside card */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#2F6BFF]/30 to-transparent blur-[100px] pointer-events-none"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              layout={false}
              className="w-10 h-10 lg:w-20 lg:h-20 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center mb-2 lg:mb-8 relative z-10"
            >
              <MapPin className="w-5 h-5 lg:w-10 lg:h-10 text-[#D4AF37]" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.2, duration: 0.4 }}
              layout={false}
              className="text-white font-heading font-bold text-base lg:text-2xl mb-1 lg:mb-2 relative z-10"
            >
              Our Office Location
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.4 }}
              layout={false}
              className="text-white/60 text-xs lg:text-sm max-w-sm mb-3 lg:mb-6 line-clamp-1 relative z-10"
            >
              123 Education Hub, Linking Road, Bandra West, Mumbai, India.
            </motion.p>

            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              layout={false}
              className="bg-[#D4AF37] text-[#0A1F44] px-6 lg:px-8 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold text-xs lg:text-sm hover:bg-[#D4AF37]/90 transition-all shadow-xl shadow-[#D4AF37]/20 relative z-10 block"
            >
              View on Google Maps
            </motion.a>
          </motion.div>

          {/* RIGHT — Office Details */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            layout={false}
            className="mt-4 lg:mt-0"
          >
            <motion.h3 variants={fadeUp} transition={{ delay: 0.1 }} layout={false} className="font-heading text-lg lg:text-2xl font-bold text-[#0F172A] mb-3 lg:mb-6">
              Visit Our Office
            </motion.h3>

            <div className="space-y-4 lg:space-y-6 mb-2 lg:mb-4">
              {details.map((item, idx) => {
                const isPhone = item.label === 'Primary Phone';
                const isEmail = item.label === 'Support Email';
                const isLink = isPhone || isEmail;

                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{
                      delay: 0.15 + idx * 0.1,
                      duration: 0.45,
                      ease: 'easeOut'
                    }}
                    layout={false}
                    className="flex items-start gap-2 lg:gap-4 group"
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl bg-white border border-gray-100 shadow-sm flex-shrink-0 flex items-center justify-center text-[#2F6BFF] transition-all card-icon group-hover:bg-[#2F6BFF] group-hover:text-white">
                      <div className="scale-75 lg:scale-100">{item.icon}</div>
                    </div>
                    <div>
                      <div className="text-[#64748B] text-[10px] lg:text-xs font-bold uppercase tracking-widest">{item.label}</div>
                      <div className="text-[#0F172A] text-sm lg:text-base font-semibold mt-0.5">{item.val}</div>
                    </div>
                  </motion.div>
                );

                if (isLink) {
                  return (
                    <a
                      key={idx}
                      href={isPhone ? `tel:${item.val.replace(/\s+/g, '')}` : `mailto:${item.val}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <div key={idx}>
                    {content}
                  </div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.5, duration: 0.5 }}
              layout={false}
              className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-gray-100 shadow-sm card-hover mt-4 lg:mt-8"
            >
              <h4 className="font-heading font-bold text-[#0F172A] text-base lg:text-xl mb-1 lg:mb-2">Subscribe to our newsletter</h4>
              <p className="hidden lg:block text-[#64748B] text-sm mb-6">Stay updated with latest student news and country guides.</p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#F6F8FC] border border-gray-100 rounded-xl px-4 py-2 lg:py-3 text-sm focus:outline-none focus:border-[#2F6BFF] transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17
                  }}
                  className="bg-[#2F6BFF] text-white p-2 lg:p-3 rounded-xl hover:bg-[#2F6BFF]/90 transition-all"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
