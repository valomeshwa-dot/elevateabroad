import Link from 'next/link'
import { ChevronRight, Star, Quote, TrendingUp } from 'lucide-react'

export default function StoriesHero() {
  return (
    <section className="bg-[#0A1F44] min-h-[65vh] flex items-center relative overflow-hidden">
      {/* Glow orbs */}
      <div className="w-[500px] h-[500px] bg-[#2F6BFF]/15 blur-[130px] absolute -top-20 left-1/4 rounded-full pointer-events-none"></div>
      <div className="w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[100px] absolute bottom-0 right-10 rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8">
              <Link href="/" className="text-white/40 text-sm hover:text-white transition-all">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/50 text-xs">Success Stories</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4AF37] block" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
                SUCCESS STORIES
              </span>
            </div>

            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Real Students,
              <br />
              Real
              <span className="text-[#D4AF37]"> Results</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-10">
              Join thousands of successful students who have transformed their futures with ElevateAbroad. These are their stories.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="bg-white/8 border border-white/15 rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center">
                  <TrendingUp className="text-[#D4AF37] w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-xl">5,000+</div>
                  <div className="text-white/50 text-xs mt-0.5 uppercase tracking-wide">Students Placed</div>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Star className="text-[#D4AF37] w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-xl">4.9/5</div>
                  <div className="text-white/50 text-xs mt-0.5 uppercase tracking-wide">Average Rating</div>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Quote className="text-[#D4AF37] w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-xl">98%</div>
                  <div className="text-white/50 text-xs mt-0.5 uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white/8 border border-white/15 rounded-3xl p-8 backdrop-blur">
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
                    PS
                  </div>
                  <div className="ml-4 mt-1">
                    <div className="text-white font-heading font-bold text-lg">Priya Sharma</div>
                    <div className="text-white/50 text-sm mt-1">MSc Data Science</div>
                  </div>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  ✓ Admitted
                </div>
              </div>

              <div className="bg-[#2F6BFF]/20 border border-[#2F6BFF]/30 text-[#2F6BFF]/80 text-sm font-semibold px-4 py-2 rounded-xl inline-block mb-5">
                University of Oxford, UK 🇬🇧
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-white/80 text-base leading-relaxed italic">
                &quot;ElevateAbroad made my dream of studying at Oxford a reality. Their SOP guidance was exceptional and the visa support was flawless. I cannot thank them enough.&quot;
              </p>

              <div className="border-t border-white/10 mt-6 pt-5 flex items-center justify-between">
                <div className="text-white/40 text-xs">Scholarship Received</div>
                <div className="text-[#D4AF37] font-bold text-lg">£12,000</div>
              </div>

            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="flex">
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1F44] bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">RM</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1F44] bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold -ml-2">AM</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1F44] bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold -ml-2">KP</div>
              </div>
              <div className="text-white/50 text-sm ml-3">
                +4,997 more success stories
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
