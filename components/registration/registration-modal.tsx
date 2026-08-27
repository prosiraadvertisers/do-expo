'use client'

import { Store, Handshake, Ticket, GraduationCap } from 'lucide-react'
import { Modal } from '@/components/ui/modal'
import { useRegistration, type RegistrationType } from './registration-context'
import { ExhibitorForm } from '@/components/forms/exhibitor-form'
import { BuyerSellerForm } from '@/components/forms/buyer-seller-form'
import { VisitorForm } from '@/components/forms/visitor-form'
import { SeminarForm } from '@/components/forms/seminar-form'

const CONFIG: Record<
  RegistrationType,
  { icon: typeof Store; eyebrow: string; title: string; blurb: string }
> = {
  exhibitor: {
    icon: Store,
    eyebrow: 'Exhibitor Registration',
    title: 'Showcase your brand to 20,000+ buyers',
    blurb: 'Secure your booth in India\u2019s biggest B2B global trade showcase and generate qualified leads across 3 high-energy days.',
  },
  'buyer-seller': {
    icon: Handshake,
    eyebrow: 'Buyer Seller Meet',
    title: 'Enter the B2B global trade Deal Room',
    blurb: 'Get matched with the right suppliers through curated 1:1 meetings tailored to your procurement needs.',
  },
  visitor: {
    icon: Ticket,
    eyebrow: 'Visitor Registration',
    title: 'Your pass to the future of B2B global trade',
    blurb: 'Personalised recommendations, priority entry and access to every zone \u2014 completely free.',
  },
  seminar: {
    icon: GraduationCap,
    eyebrow: 'Seminar & Knowledge Summit Pass',
    title: 'Learn, Connect & Master Global Trade',
    blurb: 'Gain priority access to keynote sessions, export masterclasses, industry panels, and certified policy workshops.',
  },
}

export function RegistrationModal() {
  const { active, close } = useRegistration()

  return (
    <Modal open={active !== null} onClose={close} labelledBy="reg-modal-title">
      {active && <ModalBody type={active} />}
    </Modal>
  )
}

function ModalBody({ type }: { type: RegistrationType }) {
  const cfg = CONFIG[type]
  const Icon = cfg.icon
  return (
    <>
      <div className="relative overflow-hidden rounded-t-none brand-gradient-radial px-6 py-7 text-white sm:rounded-t-2xl sm:px-8">
        
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
            <Icon className="size-6" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{cfg.eyebrow}</span>
        </div>
        <h2 id="reg-modal-title" className="mt-3 max-w-lg font-heading text-2xl font-bold leading-tight text-balance sm:text-3xl">
          {cfg.title}
        </h2>
        <p className="mt-2 max-w-lg text-sm text-white/75 text-pretty">{cfg.blurb}</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {type === 'exhibitor' && <ExhibitorForm />}
        {type === 'buyer-seller' && <BuyerSellerForm compact />}
        {type === 'visitor' && <VisitorForm />}
        {type === 'seminar' && <SeminarForm />}
      </div>
    </>
  )
}
