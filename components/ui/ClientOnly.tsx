"use client"

import dynamic from 'next/dynamic'
import SmoothScroll from './SmoothScroll'

const ScrollProgress = dynamic(
    () => import('./ScrollProgress'),
    {
        ssr: false,
        loading: () => null
    }
)

const CustomCursor = dynamic(
    () => import('./CustomCursor'),
    {
        ssr: false,
        loading: () => null
    }
)

const FloatingCTA = dynamic(
    () => import('./FloatingCTA'),
    {
        ssr: false,
        loading: () => null
    }
)

interface ClientOnlyProps {
    children: React.ReactNode
}

export default function ClientOnly({
    children
}: ClientOnlyProps) {
    return (
        <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            {children}
            <FloatingCTA />
        </SmoothScroll>
    )
}
