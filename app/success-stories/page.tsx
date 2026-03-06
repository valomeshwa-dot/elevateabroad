import type { Metadata } from 'next'
import StoriesHero from '@/components/success-stories/StoriesHero'
import StoriesGrid from '@/components/success-stories/StoriesGrid'
import StoriesCTA from '@/components/success-stories/StoriesCTA'

export const metadata: Metadata = {
  title: 'Student Success Stories | ElevateAbroad',
  description: 'Read real success stories from 5000+ students who secured admissions at top universities worldwide with ElevateAbroad guidance.',
}

export default function StoriesPage() {
  return (
    <main>
      <StoriesHero />
      <StoriesGrid />
      <StoriesCTA />
    </main>
  )
}
