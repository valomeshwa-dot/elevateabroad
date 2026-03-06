import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | ElevateAbroad',
  description: 'Get in touch with ElevateAbroad. Book a free consultation or visit our office. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </main>
  )
}
