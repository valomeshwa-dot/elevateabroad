"use client"
import { useEffect, useRef } from 'react'

interface PixelGridProps {
    dotColor?: string
    dotSize?: number
    gap?: number
    className?: string
}

export default function PixelGrid({
    dotColor = 'rgba(47, 107, 255, 0.1)',
    dotSize = 1.5,
    gap = 30,
    className = ''
}: PixelGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const stateRef = useRef({
        mouse: { x: -9999, y: -9999 },
        isScrolling: false,
        animId: 0,
        lastFrame: 0,
        dots: [] as { x: number; y: number }[],
        width: 0,
        height: 0,
    })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d', {
            alpha: true,
            desynchronized: true,
        })
        if (!ctx) return

        const state = stateRef.current

        const buildGrid = () => {
            state.dots = []
            const cols = Math.ceil(state.width / gap)
            const rows = Math.ceil(state.height / gap)
            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    state.dots.push({ x: i * gap, y: j * gap })
                }
            }
        }

        const resize = () => {
            state.width = canvas.offsetWidth
            state.height = canvas.offsetHeight
            canvas.width = state.width
            canvas.height = state.height
            buildGrid()
        }
        resize()

        let resizeTimer: ReturnType<typeof setTimeout>
        const onResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(resize, 300)
        }

        let lastMouseTime = 0
        const onMouseMove = (e: MouseEvent) => {
            if (state.isScrolling) return
            const now = performance.now()
            if (now - lastMouseTime < 32) return
            lastMouseTime = now
            const rect = canvas.getBoundingClientRect()
            state.mouse = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        let scrollTimer: ReturnType<typeof setTimeout>
        const onScroll = () => {
            state.isScrolling = true
            state.mouse = { x: -9999, y: -9999 }
            clearTimeout(scrollTimer)
            scrollTimer = setTimeout(() => {
                state.isScrolling = false
            }, 200)
        }

        const draw = (ts: number) => {
            state.animId = requestAnimationFrame(draw)
            if (state.isScrolling) return
            if (ts - state.lastFrame < 33) return
            state.lastFrame = ts

            const { width, height, dots, mouse } = state
            ctx.clearRect(0, 0, width, height)

            const maxDist = 80
            const maxDistSq = maxDist * maxDist

            for (const dot of dots) {
                const dx = mouse.x - dot.x
                const dy = mouse.y - dot.y
                const distSq = dx * dx + dy * dy

                ctx.beginPath()
                if (distSq < maxDistSq) {
                    const prox = 1 - Math.sqrt(distSq) / maxDist
                    ctx.arc(dot.x, dot.y, dotSize + prox * 1.5, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(212,175,55,${0.1 + prox * 0.7})`
                    if (prox > 0.6) {
                        ctx.shadowColor = 'rgba(212,175,55,0.4)'
                        ctx.shadowBlur = 5
                    }
                } else {
                    ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2)
                    ctx.fillStyle = dotColor
                }
                ctx.fill()
                ctx.shadowBlur = 0
            }
        }

        state.animId = requestAnimationFrame(draw)

        window.addEventListener('resize', onResize, { passive: true })
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        window.addEventListener('scroll', onScroll, { passive: true })

        const onVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(state.animId)
            } else {
                state.animId = requestAnimationFrame(draw)
            }
        }
        document.addEventListener('visibilitychange', onVisibility)

        return () => {
            cancelAnimationFrame(state.animId)
            clearTimeout(resizeTimer)
            clearTimeout(scrollTimer)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('scroll', onScroll)
            document.removeEventListener('visibilitychange', onVisibility)
        }
    }, [dotColor, dotSize, gap])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full ${className}`}
            style={{ pointerEvents: 'none' }}
        />
    )
}
