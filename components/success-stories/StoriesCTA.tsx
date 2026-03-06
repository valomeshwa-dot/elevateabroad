import Link from 'next/link'
import { CheckCircle2, ArrowRight, Users, Star, Award, Trophy } from 'lucide-react'

export default function StoriesCTA() {
  return (
    <section>
      {/* SECTION A */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left col */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
              Your Success Story Starts Here
            </h2>
            <p className="text-[#64748B] text-base mt-4 leading-relaxed">
              Join thousands of students who trusted ElevateAbroad with their study abroad journey and achieved their university dreams.
            </p>
            <Link 
              href="/contact"
              className="mt-8 bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:shadow-[#2F6BFF]/30 transition-all"
            >
              Start My Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right cols */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#F6F8FC] rounded-2xl p-6 border border-gray-100 hover:border-[#2F6BFF]/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-4 text-[#D4AF37]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-3xl">$2M+</div>
                <div className="text-[#0F172A] font-semibold text-sm mt-1">Total Scholarships Won</div>
                <div className="text-[#64748B] text-xs mt-1">by our students worldwide</div>
              </div>

              <div className="bg-[#F6F8FC] rounded-2xl p-6 border border-gray-100 hover:border-[#2F6BFF]/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-4 text-[#2F6BFF]">
                  <Users className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-3xl">5,000+</div>
                <div className="text-[#0F172A] font-semibold text-sm mt-1">Students Successfully Placed</div>
                <div className="text-[#64748B] text-xs mt-1">across 15+ countries</div>
              </div>

              <div className="bg-[#F6F8FC] rounded-2xl p-6 border border-gray-100 hover:border-[#2F6BFF]/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-4 text-[#D4AF37]">
                  <Star className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-3xl">4.9/5</div>
                <div className="text-[#0F172A] font-semibold text-sm mt-1">Average Student Rating</div>
                <div className="text-[#64748B] text-xs mt-1">based on 2,000+ reviews</div>
              </div>

              <div className="bg-[#F6F8FC] rounded-2xl p-6 border border-gray-100 hover:border-[#2F6BFF]/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-4 text-[#2F6BFF]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-3xl">98%</div>
                <div className="text-[#0F172A] font-semibold text-sm mt-1">Visa Approval Rate</div>
                <div className="text-[#64748B] text-xs mt-1">across all destinations</div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* SECTION B — Dark CTA */}
      <div className="bg-gradient-to-br from-[#0A1F44] via-[#0d2a5e] to-[#0A1F44] py-24 relative overflow-hidden">
        
        {/* Glow orbs + dot grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#2F6BFF]/20 blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37] block" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              BEGIN YOUR JOURNEY
            </span>
            <span className="w-8 h-px bg-[#D4AF37] block" />
          </div>

          <h2 className="font-heading text-5xl font-bold tracking-tight mt-4">
            <span className="text-white">Become Our Next</span>
            <br />
            <span className="text-[#D4AF37]">Success Story</span>
          </h2>

          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Book a free consultation and let our experts guide you to your dream university abroad.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2F6BFF]/30 transition-all"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/universities"
              className="border-2 border-[#D4AF37]/60 text-[#D4AF37] px-8 py-4 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition-all"
            >
              View Universities
            </Link>
          </div>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 text-sm">Expert Counselors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 text-sm">Proven Results</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
