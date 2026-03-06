"use client"
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
    target: number
    suffix?: string
    prefix?: string
    duration?: number
}

export default function AnimatedCounter({
    target,
    suffix = '',
    prefix = '',
    duration = 2000
}: Props) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!isInView) return

        let startTime: number
        const startValue = 0

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easedProgress = easeOut(progress)
            const current = Math.floor(
                startValue + (target - startValue) * easedProgress
            )
            setCount(current)
            if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, [isInView, target, duration])

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    )
}
