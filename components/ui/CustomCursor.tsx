"use client"
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [hovering, setHovering] = useState(false)

    const pos = useRef({ x: 0, y: 0 })
    const outerPos = useRef({ x: 0, y: 0 })
    const rafRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        // Desktop only
        if (window.innerWidth < 1024) return

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t

        const onMouseMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY }
            if (!visible) setVisible(true)
        }

        const animate = () => {
            outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.1)
            outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.1)

            if (innerRef.current) {
                innerRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
            }
            if (outerRef.current) {
                outerRef.current.style.transform = `translate(${outerPos.current.x - 16}px, ${outerPos.current.y - 16}px) scale(${hovering ? 1.8 : 1})`
            }
            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)

        const onEnter = () => setHovering(true)
        const onLeave = () => setHovering(false)

        window.addEventListener('mousemove', onMouseMove, { passive: true })

        const targets = document.querySelectorAll('a, button, [role="button"]')
        targets.forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            targets.forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }
    }, [hovering, visible])

    return (
        <>
            <div
                ref={outerRef}
                className="fixed top-0 left-0 z-[999] w-8 h-8 rounded-full border-2 border-[#D4AF37]/60 pointer-events-none hidden lg:block"
                style={{
                    opacity: visible ? 1 : 0,
                    willChange: 'transform',
                    transition: 'opacity 0.3s, border-color 0.2s',
                    borderColor: hovering ? 'rgba(212,175,55,0.9)' : 'rgba(212,175,55,0.5)',
                }}
            />
            <div
                ref={innerRef}
                className="fixed top-0 left-0 z-[999] w-2 h-2 rounded-full bg-[#D4AF37] pointer-events-none hidden lg:block"
                style={{
                    opacity: hovering ? 0 : visible ? 1 : 0,
                    willChange: 'transform',
                    transition: 'opacity 0.2s',
                }}
            />
        </>
    )
}
