'use client'

import { useState } from 'react'
import { Store, Handshake, Ticket, Plus, X } from 'lucide-react'
import { useRegistration, type RegistrationType } from '@/components/registration/registration-context'

const ACTIONS: { type: RegistrationType; label: string; icon: typeof Store; variant: string }[] = [
  { type: 'visitor', label: 'Free Visitor Pass', icon: Ticket, variant: 'bg-gold text-gold-foreground' },
  { type: 'buyer-seller', label: 'Buyer Seller Meet', icon: Handshake, variant: 'bg-primary text-primary-foreground' },
  { type: 'exhibitor', label: 'Become an Exhibitor', icon: Store, variant: 'bg-cta text-cta-foreground' },
]

export function FloatingCTA() {
  const [open, setOpen] = useState(false)
  const { open: openModal } = useRegistration()

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="flex flex-col items-end gap-2.5">
          {ACTIONS.map((a, i) => {
            const Icon = a.icon
            return (
              <button
                key={a.type}
                onClick={() => { setOpen(false); openModal(a.type) }}
                style={{ animationDelay: `${i * 50}ms` }}
                className={`flex items-center gap-2.5 rounded-full py-2.5 pl-4 pr-5 text-sm font-semibold shadow-xl ring-1 ring-black/5 transition hover:scale-[1.03] animate-fade-in-up ${a.variant}`}
              >
                <Icon className="size-4" /> {a.label}
              </button>
            )
          })}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close quick actions' : 'Open quick registration actions'}
        aria-expanded={open}
        className="flex h-14 items-center gap-2 rounded-full brand-gradient px-5 text-sm font-bold text-white shadow-2xl ring-1 ring-white/20 transition hover:brightness-110"
      >
        {open ? <X className="size-5" /> : <Plus className="size-5" />}
        <span className={open ? 'hidden' : 'hidden sm:inline'}>Register</span>
      </button>
    </div>
  )
}
