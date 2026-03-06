import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ClientProviders from '@/components/ui/ClientProviders'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ElevateAbroad | Study Abroad Consultancy',
  description: 'Premium international education consultancy helping students secure admissions at top universities across UK, USA, Canada, Australia and Europe.',
  keywords: 'study abroad, university admission, UK universities, USA universities, scholarship guidance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased bg-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <ClientProviders />
      </body>
    </html>
  )
}
