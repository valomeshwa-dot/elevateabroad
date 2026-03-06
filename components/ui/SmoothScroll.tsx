"use client"

export default function SmoothScroll({
    children
}: {
    children: React.ReactNode
}) {
    // Removed Lenis — was causing scroll lag
    // CSS scroll-behavior: smooth in globals.css
    // handles smooth scrolling natively
    // Native CSS smooth scroll = zero performance cost
    return <>{children}</>
}
