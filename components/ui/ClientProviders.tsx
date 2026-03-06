"use client"

import dynamic from 'next/dynamic'

const ScrollProgress = dynamic(
    () => import('@/components/ui/ScrollProgress'),
    { ssr: false, loading: () => null }
)

const FloatingCTA = dynamic(
    () => import('@/components/ui/FloatingCTA'),
    { ssr: false, loading: () => null }
)

const CustomCursor = dynamic(
    () => import('@/components/ui/CustomCursor'),
    { ssr: false, loading: () => null }
)

export default function ClientProviders() {
    return (
        <>
            <ScrollProgress />
            <FloatingCTA />
            <CustomCursor />
        </>
    )
}
