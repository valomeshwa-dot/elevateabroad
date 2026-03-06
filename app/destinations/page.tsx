import type { Metadata } from 'next'
import DestinationsHero from '@/components/destinations/DestinationsHero'
import DestinationsGrid from '@/components/destinations/DestinationsGrid'
import DestinationsCTA from '@/components/destinations/DestinationsCTA'

export const metadata: Metadata = {
  title: 'Study Destinations | ElevateAbroad',
  description: 'Explore top study destinations including USA, UK, Canada, Australia, Germany and Ireland. Find the perfect country for your international education.',
}

export default function DestinationsPage() {
  return (
    <main>
      <DestinationsHero />
      <DestinationsGrid />
      <DestinationsCTA />
    </main>
  )
}
