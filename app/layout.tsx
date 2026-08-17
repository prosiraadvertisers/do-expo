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
    default: 'doeximexpo | Global B2B Trade & Export Show 2027',
    template: '%s | doeximexpo',
  },
  description:
    'doeximexpo presents Global Trade Expo — India’s premier B2B export exhibition across 6 zones: Agriculture, FMCG, Consumer Goods, Manufacturing, Textiles, Healthcare & Export Services. Register free pass.',
  keywords: [
    'doeximexpo',
    'B2B trade show',
    'export exhibition',
    'Agriculture Food FMCG',
    'Consumer Goods Lifestyle',
    'Manufacturing Industrial',
    'Textile Fashion',
    'Healthcare Chemicals',
    'Export Services Startup Pavilion',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'doeximexpo | Automation Expo 2026',
    description:
      'India\u2019s premier B2B automation trade show. Exhibit, network in the Deal Room, and get your free visitor pass.',
    siteName: 'doeximexpo',
    images: [{ url: '/images/hero-expo.png', width: 1200, height: 630, alt: 'Automation Expo 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'doeximexpo | Automation Expo 2026',
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
