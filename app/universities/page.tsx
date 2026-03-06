import type { Metadata } from 'next'
import UniversitiesHero from '@/components/universities/UniversitiesHero'
import UniversitiesGrid from '@/components/universities/UniversitiesGrid'

export const metadata: Metadata = {
  title: 'Partner Universities | ElevateAbroad',
  description: 'Explore 250+ partner universities across USA, UK, Canada, Australia, Germany and Ireland. Find your perfect university match.',
}

export default function UniversitiesPage() {
  return (
    <main>
      <UniversitiesHero />
      <UniversitiesGrid />
    </main>
  )
}
