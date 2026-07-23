'use client'

import type { ReactNode } from 'react'
import { RegistrationProvider } from '@/components/registration/registration-context'
import { RegistrationModal } from '@/components/registration/registration-modal'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <RegistrationProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingCTA />
      <RegistrationModal />
    </RegistrationProvider>
  )
}
