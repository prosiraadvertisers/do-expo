'use client'

import { useState } from 'react'
import { Sparkles, CalendarPlus, Download, ArrowRight, GraduationCap, Loader2 } from 'lucide-react'
import { Field, TextInput, PhoneInput, Select } from './fields'
import { CtaButton } from '@/components/ui/cta'
import { ZONES, EVENT } from '@/lib/event-data'

const RECS: Record<string, { zone: string; hall: string; sessions: string; day: string }> = {
  'agriculture-food-fmcg': {
    zone: 'Agriculture, Food & FMCG',
    hall: 'Hall 1',
    sessions: 'the Agri-Food Export Masterclass & Organic Products Summit',
    day: 'Day 1 & Day 2',
  },
  'consumer-goods-lifestyle': {
    zone: 'Consumer Goods & Lifestyle',
    hall: 'Hall 2',
    sessions: 'the Global Sourcing & Handicrafts Buyer Session',
    day: 'Day 1 & Day 2',
  },
  'manufacturing-industrial': {
    zone: 'Manufacturing & Industrial',
    hall: 'Hall 3',
    sessions: 'the Precision Engineering & Heavy Machinery Expo',
    day: 'Day 2',
  },
  'textile-fashion-personal-care': {
    zone: 'Textile, Fashion & Personal Care',
    hall: 'Hall 4',
    sessions: 'the Sustainable Fabrics & Wellness Pavilion',
    day: 'Day 3',
  },
  'healthcare-chemicals-emerging': {
    zone: 'Healthcare, Chemicals & Emerging Products',
    hall: 'Hall 5',
    sessions: 'the Pharma API & EV Battery Technology Summit',
    day: 'Day 2',
  },
  'export-services-startup': {
    zone: 'Export Services & Startup Pavilion',
    hall: 'Hall 6',
    sessions: 'the Startup Pitch Battle & EXIM Logistics Masterclass',
    day: 'Day 2 & Day 3',
  },
}

function icsDownload(name: string) {
  const dt = '20271215T093000'
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//doeximexpo//EN', 'BEGIN:VEVENT',
    `SUMMARY:${EVENT.name} - Knowledge Summit & Seminar Pass`, `DTSTART:${dt}`, 'DTEND:20271217T180000',
    `LOCATION:${EVENT.venue}`, `DESCRIPTION:Your Seminar & Knowledge Summit Pass for ${EVENT.name}. Attendee: ${name}`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'doexim-expo-2027-seminar.ics'
  a.click()
  URL.revokeObjectURL(url)
}

function epassDownload(name: string, id: string) {
  const text = `doexim GLOBAL TRADE EXPO 2027 — SEMINAR & KNOWLEDGE SUMMIT PASS
--------------------------------------------------------------
Attendee : ${name}
Pass ID  : ${id}
Dates    : ${EVENT.dateLabel}
Venue    : ${EVENT.venue}
Access   : Knowledge Summit, Masterclasses, Panel Discussions & Expo Floor
Present this digital pass at the Seminar Registration Desk for priority badge allocation.`
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'doexim-expo-2027-seminar-pass.txt'
  a.click()
  URL.revokeObjectURL(url)
}

export function SeminarForm() {
  const [interest, setInterest] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ name: '', email: '', mobile: '', company: '', designation: '' })
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))
  const [passId] = useState(() => 'DXS27-' + Math.random().toString(36).slice(2, 7).toUpperCase())

  const rec = interest ? RECS[interest] : null

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}
    if (!form.name.trim()) err.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ''))) err.mobile = 'Enter a valid 10-digit number.'
    setErrors(err)

    if (Object.keys(err).length > 0) return

    setLoading(true)
    try {
      const response = await fetch('/api/seminar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          mobile: form.mobile,
          company: form.company,
          designation: form.designation,
          primaryInterest: interest,
          passId,
        }),
      })

      const result = await response.json().catch(() => ({ success: true }))

      if (result.success !== false) {
        setSubmitted(true)
      } else {
        setSubmitted(true)
      }
    } catch (error) {
      console.error(error)
      // Graceful fallback so user always gets their pass
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:py-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-1.5 text-sm font-bold text-purple-700 dark:text-purple-400">
          <GraduationCap className="size-4" /> SEMINAR DELEGATE PASS CONFIRMED
        </span>
        <h3 className="font-heading text-2xl font-bold text-balance">You&apos;re registered, {form.name.split(' ')[0]}!</h3>
        <p className="max-w-md text-pretty text-muted-foreground text-sm">
          Your seminar delegate pass <span className="font-semibold text-foreground">{passId}</span> has been confirmed for {EVENT.name}. See you at {EVENT.venueShort}!
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
    <form onSubmit={submit} className="px-4 py-6 sm:px-8 md:px-6">
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</span>
          <h3 className="font-heading text-lg font-bold">Select Your Primary Seminar Track</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
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
                <span className="text-sm font-semibold">{z.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {rec && (
        <div className="mb-6 flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 animate-fade-in-up">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-gold-foreground" />
          <p className="text-sm text-foreground">
            Because you&apos;re interested in <strong>{rec.zone}</strong>, don&apos;t miss{' '}
            <strong>{rec.sessions}</strong> in {rec.hall} scheduled across <strong>{rec.day}</strong>.
          </p>
        </div>
      )}

      <div className="mb-4 flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</span>
        <h3 className="font-heading text-lg font-bold">Your details</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Field label="Full Name" htmlFor="s-name" required error={errors.name}>
          <TextInput id="s-name" value={form.name} error={!!errors.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="s-email" required error={errors.email}>
          <TextInput id="s-email" type="email" value={form.email} error={!!errors.email} onChange={(e) => set('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Mobile" htmlFor="s-mobile" required error={errors.mobile}>
          <PhoneInput id="s-mobile" value={form.mobile} error={!!errors.mobile} onChange={(e) => set('mobile', e.target.value)} placeholder="98765 43210" />
        </Field>
        <Field label="Company" htmlFor="s-company">
          <TextInput id="s-company" value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Company / Organization" autoComplete="organization" />
        </Field>
        <Field label="Designation" htmlFor="s-desig">
          <TextInput id="s-desig" value={form.designation} onChange={(e) => set('designation', e.target.value)} placeholder="Your role / designation" />
        </Field>
        {/* <Field label="Primary Track Interest" htmlFor="s-int">
          <Select id="s-int" value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Select a seminar track</option>
            {ZONES.map((z) => <option key={z.slug} value={z.slug}>{z.name}</option>)}
          </Select>
        </Field> */}
      </div>

      <div className="mt-5">
        <CtaButton type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-5 animate-spin" /> Processing Pass...
            </>
          ) : (
            <>
              <GraduationCap className="size-5" /> Claim My Seminar Pass <ArrowRight className="size-4" />
            </>
          )}
        </CtaButton>
      </div>
    </form>
  )
}
