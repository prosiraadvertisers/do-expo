'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type RegistrationType = 'exhibitor' | 'buyer-seller' | 'visitor'

type RegistrationContextValue = {
  active: RegistrationType | null
  open: (type: RegistrationType) => void
  close: () => void
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null)

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<RegistrationType | null>(null)

  const open = useCallback((type: RegistrationType) => setActive(type), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <RegistrationContext.Provider value={{ active, open, close }}>
      {children}
    </RegistrationContext.Provider>
  )
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext)
  if (!ctx) throw new Error('useRegistration must be used within RegistrationProvider')
  return ctx
}
