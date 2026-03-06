import type { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import ServicesCTA from '@/components/services/ServicesCTA'

export const metadata: Metadata = {
  title: 'Our Services | ElevateAbroad',
  description: 'Comprehensive study abroad services including career counseling, university selection, visa support, scholarship guidance and SOP writing.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  )
}
