import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutTeam from '@/components/about/AboutTeam'
import AboutStats from '@/components/about/AboutStats'

export const metadata: Metadata = {
  title: 'About Us | ElevateAbroad',
  description: 'Learn about ElevateAbroad — founded in 2015, we have helped 5000+ students achieve their international education dreams.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutStats />
    </main>
  )
}
