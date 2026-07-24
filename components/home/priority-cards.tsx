'use client'

import { Store, Handshake, Ticket, ArrowRight } from 'lucide-react'
import { useRegistration, type RegistrationType } from '@/components/registration/registration-context'

const CARDS: {
  type: RegistrationType
  icon: typeof Store
  title: string
  desc: string
  badge: string
  accent: string
}[] = [
  {
    type: 'exhibitor',
    icon: Store,
    title: 'Exhibitor Registration',
    desc: 'Showcase your products and services to global importers, exporters, distributors and buyers.',
      badge: 'BExhibition Open',
    accent: 'bg-cta text-cta-foreground',
  },
  {
    type: 'buyer-seller',
    icon: Handshake,
    title: 'Buyer Seller Meet',
    desc:'Connect with verified international buyers and suppliers through scheduled B2B meetings.',
    badge: 'Global Networking',
    accent: 'bg-primary text-primary-foreground',
  },
  {
    type: 'visitor',
    icon: Ticket,
    title: 'Free Visitor Registration',
    desc:'Register free and meet international exhibitors, buyers and exporters under one roof.',    badge: '100% Free',
    accent: 'bg-gold text-gold-foreground',
  },
]

export function PriorityCards() {
  const { open } = useRegistration()

  return (
    <section className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((c) => {
          const Icon = c.icon
          return (
            <button
              key={c.type}
              onClick={() => open(c.type)}
              className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${c.accent}`}>
                {c.badge}
              </span>
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{c.desc}</p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Register now <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
