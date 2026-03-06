"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeUp, staggerGrid, scaleUp } from "@/lib/animations";

export default function DestinationsSection() {
  const destinations = [
    {
      country: "USA",
      code: "us",
      universities: ["MIT", "Harvard", "Stanford"],
    },
    {
      country: "UK",
      code: "gb",
      universities: ["Oxford", "Cambridge", "Imperial"],
    },
    {
      country: "Canada",
      code: "ca",
      universities: ["Toronto", "UBC", "McGill"],
    },
    {
      country: "Australia",
      code: "au",
      universities: ["Melbourne", "ANU", "UNSW"],
    },
    {
      country: "Germany",
      code: "de",
      universities: ["TU Munich", "Heidelberg", "LMU"],
    },
    {
      country: "Ireland",
      code: "ie",
      universities: ["Trinity College", "UCD", "GMIT"],
    },
  ];

  return (
    <motion.section
      className="relative bg-navy py-10 lg:py-24 overflow-hidden"
      layout={false}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a3a6e_0%,_#0A1F44_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-6 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          layout={false}
        >
          <div className="flex items-center gap-3 justify-center text-gold text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-8 h-px bg-gold/50"></span>
            WHERE TO STUDY
            <span className="w-8 h-px bg-gold/50"></span>
          </div>
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white tracking-tight">
            Top Study Destinations
          </h2>
          <p className="text-white/70 mt-4 max-w-lg mx-auto text-sm lg:text-base leading-relaxed">
            Explore world-class education opportunities in the most sought-after countries for international students.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerGrid}
          layout={false}
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              layout={false}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17
              }}
              className={`bg-white/6 border border-white/10 rounded-2xl p-4 lg:p-8 cursor-pointer active:brightness-95 group flex flex-col h-full card-hover card-hover-navy relative overflow-hidden ${index >= 3 ? 'hidden sm:block' : ''}`}
            >
              <Link href="/destinations" className="absolute inset-0 z-10" />
              <div
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 country-badge"
              >
                <Image
                  src={`https://flagcdn.com/w80/${dest.code}.png`}
                  alt={`${dest.country} flag`}
                  width={80}
                  height={60}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-white font-heading font-bold text-base lg:text-xl text-center group-hover:text-gold transition-colors relative z-20">
                {dest.country}
              </h3>
              <div className="w-8 h-px bg-gold/40 mx-auto my-4 relative z-20"></div>
              <div className="hidden lg:block flex-grow relative z-20">
                {dest.universities.map((uni, i) => (
                  <p key={i} className="text-white/50 text-xs text-center leading-loose">
                    {uni}
                  </p>
                ))}
              </div>
              <div
                className="mt-6 w-full border border-white/20 text-white/70 text-xs py-2 rounded-xl group-hover:bg-gold group-hover:text-navy transition-all duration-300 text-center flex items-center justify-center relative z-20 font-medium"
              >
                View Programs
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All on Mobile */}
        <div className="sm:hidden text-center mt-3">
          <Link href="/destinations"
            className="text-[#2F6BFF] text-sm font-semibold">
            View all destinations →
          </Link>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden sm:flex justify-center mt-12"
        >
          <Link
            href="/destinations"
            className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-all"
          >
            View All Destinations
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
