"use client"
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let rafId: number
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    const scrollTop = window.scrollY
                    const docHeight =
                        document.documentElement.scrollHeight
                        - window.innerHeight
                    const scrollPercent = docHeight > 0
                        ? (scrollTop / docHeight) * 100
                        : 0
                    setProgress(scrollPercent)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll,
            { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <div
            className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none"
            style={{ backgroundColor: 'transparent' }}
        >
            <div
                className="h-full origin-left"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #2F6BFF, #D4AF37, #2F6BFF)',
                    transition: 'width 0.1s linear',
                    willChange: 'width',
                }}
            />
        </div>
    )
}
