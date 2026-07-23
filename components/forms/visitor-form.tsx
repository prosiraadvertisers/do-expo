'use client'

import { useState } from 'react'
import { Sparkles, Ticket, CalendarPlus, Download, ArrowRight } from 'lucide-react'
import { Field, TextInput, PhoneInput, Select } from './fields'
import { CtaButton } from '@/components/ui/cta'
import { ZONES, EVENT } from '@/lib/event-data'

const RECS: Record<string, { zone: string; hall: string; sessions: string; day: string }> = {
  robotics: { zone: 'Robotics Zone', hall: 'Hall 1', sessions: 'the live robotics shop-floor demo & the Cobots session', day: 'Day 1 & Day 2' },
  'machine-vision': { zone: 'Machine Vision Zone', hall: 'Hall 2', sessions: 'AI at the Edge & Zero-Defect Manufacturing talks', day: 'Day 1 & Day 2' },
  'quality-inspection': { zone: 'Quality Inspection Zone', hall: 'Hall 2', sessions: 'the Metrology Masterclass', day: 'Day 2' },
  'assembly-automation': { zone: 'Assembly Automation Zone', hall: 'Hall 3', sessions: 'High-Mix Assembly Automation', day: 'Day 3' },
  'innovation-startup': { zone: 'Innovation & Startup Zone', hall: 'Hall 4', sessions: 'the Startup Pitch Battle finals', day: 'Day 2' },
}

function icsDownload(name: string) {
  const dt = '20260318T093000'
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//DOeximexpo//EN', 'BEGIN:VEVENT',
    `SUMMARY:${EVENT.name}`, `DTSTART:${dt}`, 'DTEND:20260320T170000',
    `LOCATION:${EVENT.venue}`, `DESCRIPTION:Your free visitor pass for ${EVENT.name}. Attendee: ${name}`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'automation-expo-2026.ics'
  a.click()
  URL.revokeObjectURL(url)
}

function epassDownload(name: string, id: string) {
  const text = `AUTOMATION EXPO 2026 — FREE VISITOR E-PASS
-------------------------------------------
Attendee : ${name}
Pass ID  : ${id}
Dates    : ${EVENT.dateLabel}
Venue    : ${EVENT.venue}
Present this pass at the registration desk for fast-track entry.`
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'automation-expo-2026-epass.txt'
  a.click()
  URL.revokeObjectURL(url)
}

export function VisitorForm() {
  const [interest, setInterest] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ name: '', email: '', mobile: '', company: '', designation: '' })
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))
  const passId = 'AE26-' + Math.random().toString(36).slice(2, 7).toUpperCase()

  const rec = interest ? RECS[interest] : null

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}
    if (!form.name.trim()) err.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ''))) err.mobile = 'Enter a valid 10-digit number.'
    setErrors(err)
    if (Object.keys(err).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:py-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-cta/15 px-4 py-1.5 text-sm font-bold text-cta">
          <Ticket className="size-4" /> FREE PASS CONFIRMED
        </span>
        <h3 className="font-heading text-2xl font-bold text-balance">You&apos;re in, {form.name.split(' ')[0]}!</h3>
        <p className="max-w-md text-pretty text-muted-foreground">
          Your free visitor pass <span className="font-semibold text-foreground">{passId}</span> has been emailed to {form.email}. See you at {EVENT.venueShort}!
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <CtaButton type="button" variant="primary" onClick={() => icsDownload(form.name)}>
            <CalendarPlus className="size-4" /> Add to calendar
          </CtaButton>
          <CtaButton type="button" variant="outline" onClick={() => epassDownload(form.name, passId)}>
            <Download className="size-4" /> Download e-pass
          </CtaButton>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="px-5 py-6 sm:px-8">
      <div className="mb-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</span>
          <h3 className="font-heading text-lg font-bold">What are you most interested in?</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {ZONES.map((z) => {
            const active = interest === z.slug
            const Icon = z.icon
            return (
              <button
                type="button"
                key={z.slug}
                onClick={() => setInterest(z.slug)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                  active ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-input hover:border-primary/40'
                }`}
              >
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${active ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary'}`}>
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold">{z.name.replace(' Zone', '')}</span>
              </button>
            )
          })}
        </div>
      </div>

      {rec && (
        <div className="mb-5 flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 animate-fade-in-up">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-gold-foreground" />
          <p className="text-sm text-foreground">
            Because you&apos;re interested in <strong>{rec.zone.replace(' Zone', '')}</strong>, don&apos;t miss the{' '}
            <strong>{rec.zone}</strong> in {rec.hall} and {rec.sessions} on <strong>{rec.day}</strong>.
          </p>
        </div>
      )}

      <div className="mb-3 flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</span>
        <h3 className="font-heading text-lg font-bold">Your details</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="v-name" required error={errors.name}>
          <TextInput id="v-name" value={form.name} error={!!errors.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="v-email" required error={errors.email}>
          <TextInput id="v-email" type="email" value={form.email} error={!!errors.email} onChange={(e) => set('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Mobile" htmlFor="v-mobile" required error={errors.mobile}>
          <PhoneInput id="v-mobile" value={form.mobile} error={!!errors.mobile} onChange={(e) => set('mobile', e.target.value)} placeholder="98765 43210" />
        </Field>
        <Field label="Company" htmlFor="v-company">
          <TextInput id="v-company" value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Company" autoComplete="organization" />
        </Field>
        <Field label="Designation" htmlFor="v-desig">
          <TextInput id="v-desig" value={form.designation} onChange={(e) => set('designation', e.target.value)} placeholder="Your role" />
        </Field>
        <Field label="Primary Interest" htmlFor="v-int">
          <Select id="v-int" value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Select an interest</option>
            {ZONES.map((z) => <option key={z.slug} value={z.slug}>{z.name}</option>)}
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <CtaButton type="submit" variant="cta" size="lg" className="w-full">
          <Ticket className="size-5" /> Claim my FREE visitor pass <ArrowRight className="size-4" />
        </CtaButton>
      </div>
    </form>
  )
}
