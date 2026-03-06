"use client"
import { useState, useEffect } from 'react'
import { MessageCircle, X, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll,
            { passive: true })
        return () =>
            window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                pointerEvents: visible ? 'auto' : 'none',
            }}
        >
            {/* Expanded card */}
            <div
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-72"
                style={{
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                    transition: 'all 0.2s ease',
                    pointerEvents: expanded ? 'auto' : 'none',
                    marginBottom: expanded ? '0' : '-10px',
                }}
            >
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <p className="font-heading font-bold text-[#0F172A] text-sm">
                            Book Free Consultation
                        </p>
                        <p className="text-[#64748B] text-xs mt-1">
                            Get expert guidance in 24 hours
                        </p>
                    </div>
                    <button
                        onClick={() => setExpanded(false)}
                        className="text-[#64748B] hover:text-[#0F172A] transition-colors ml-2 flex-shrink-0"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] text-white py-3 rounded-xl font-semibold text-sm text-center block hover:shadow-lg hover:shadow-[#2F6BFF]/30 transition-all duration-200"
                >
                    Book Now — Its Free
                </Link>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span className="text-[#64748B] text-xs">
                        No cost · No commitment
                    </span>
                </div>
            </div>

            {/* Floating button */}
            <div className="relative">
                {/* Pulse ring */}
                <div
                    className="absolute inset-0 rounded-full border-2 border-[#2F6BFF]"
                    style={{
                        animation: visible ? 'pulse-ring 2s ease-out infinite' : 'none',
                    }}
                />
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#2F6BFF] to-[#5B8CFF] shadow-2xl shadow-[#2F6BFF]/40 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                    {expanded
                        ? <X className="w-6 h-6 text-white" />
                        : <MessageCircle className="w-6 h-6 text-white" />
                    }
                </button>
            </div>
            <style jsx global>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.33); opacity: 0.8; }
          80%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
        </div>
    )
}
