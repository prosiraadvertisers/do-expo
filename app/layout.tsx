import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SiteChrome } from '@/components/site-chrome'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const SITE_URL = 'https://doeximexpo.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DOeximexpo | Automation Expo 2026 — Global B2B Trade Show',
    template: '%s | DOeximexpo',
  },
  description:
    'DOeximexpo presents Automation Expo 2026 — India\u2019s premier B2B trade show for robotics, machine vision, quality inspection, assembly automation and innovation. Exhibit, meet buyers, and register free.',
  keywords: [
    'Automation Expo 2026',
    'DOeximexpo',
    'B2B trade show',
    'robotics expo',
    'machine vision',
    'industrial automation',
    'exhibition',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'DOeximexpo | Automation Expo 2026',
    description:
      'India\u2019s premier B2B automation trade show. Exhibit, network in the Deal Room, and get your free visitor pass.',
    siteName: 'DOeximexpo',
    images: [{ url: '/images/hero-expo.png', width: 1200, height: 630, alt: 'Automation Expo 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOeximexpo | Automation Expo 2026',
    description: 'India\u2019s premier B2B automation trade show.',
    images: ['/images/hero-expo.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#241a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="w-full overflow-x-hidden font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
