"use client"

import dynamic from 'next/dynamic'

const CustomCursor = dynamic(
    () => import('@/components/ui/CustomCursor'),
    { ssr: false }
)

const FloatingCTA = dynamic(
    () => import('@/components/ui/FloatingCTA'),
    { ssr: false }
)

const ScrollProgress = dynamic(
    () => import('@/components/ui/ScrollProgress'),
    { ssr: false }
)

export default function ClientComponents() {
    return (
        <>
            <CustomCursor />
            <ScrollProgress />
            <FloatingCTA />
        </>
    )
}
