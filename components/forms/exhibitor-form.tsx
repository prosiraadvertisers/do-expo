'use client'

import { useState } from 'react'
import { Store } from 'lucide-react'
import { Field, TextInput, PhoneInput, Select, TextArea } from './fields'
import { FormSuccess } from './form-success'
import { CtaButton, CtaLink } from '@/components/ui/cta'
import { ZONES } from '@/lib/event-data'

const BOOTH_SIZES = ['Shell scheme (9 sqm)', 'Shell scheme (18 sqm)', 'Raw space (36 sqm)', 'Raw space (54+ sqm)', 'Premium / island (100+ sqm)']

export function ExhibitorForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    company: '', name: '', email: '', mobile: '', zone: '', booth: '', message: '',
  })
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const err: Record<string, string> = {}
    if (!form.company.trim()) err.company = 'Company is required.'
    if (!form.name.trim()) err.name = 'Contact name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ''))) err.mobile = 'Enter a valid 10-digit number.'
    if (!form.zone) err.zone = 'Select a zone.'
    setErrors(err)
    if (Object.keys(err).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Booth enquiry received!"
        message={`Thanks, ${form.name.split(' ')[0] || 'there'}. Our exhibition team will reach out within 24 hours with floor plans, pricing and a tailored proposal for ${form.company || 'your company'}.`}
      >
        <CtaLink href="/exhibit#plan" variant="primary">Plan your expo</CtaLink>
        <CtaLink href="/exhibit#sponsorship" variant="outline">See sponsorships</CtaLink>
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-4 px-5 py-6 sm:grid-cols-2 sm:px-8">
      <div className="sm:col-span-2">
        <Field label="Company / Brand" htmlFor="ex-company" required error={errors.company}>
          <TextInput id="ex-company" value={form.company} error={!!errors.company} onChange={(e) => set('company', e.target.value)} placeholder="Your company name" />
        </Field>
      </div>
      <Field label="Contact Name" htmlFor="ex-name" required error={errors.name}>
        <TextInput id="ex-name" value={form.name} error={!!errors.name} onChange={(e) => set('name', e.target.value)} placeholder="Full name" autoComplete="name" />
      </Field>
      <Field label="Email" htmlFor="ex-email" required error={errors.email}>
        <TextInput id="ex-email" type="email" value={form.email} error={!!errors.email} onChange={(e) => set('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
      </Field>
      <Field label="Mobile" htmlFor="ex-mobile" required error={errors.mobile}>
        <PhoneInput id="ex-mobile" value={form.mobile} error={!!errors.mobile} onChange={(e) => set('mobile', e.target.value)} placeholder="98765 43210" />
      </Field>
      <Field label="Zone of interest" htmlFor="ex-zone" required error={errors.zone}>
        <Select id="ex-zone" value={form.zone} error={!!errors.zone} onChange={(e) => set('zone', e.target.value)}>
          <option value="">Select a zone</option>
          {ZONES.map((z) => <option key={z.slug} value={z.name}>{z.name}</option>)}
        </Select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Preferred booth size" htmlFor="ex-booth">
          <Select id="ex-booth" value={form.booth} onChange={(e) => set('booth', e.target.value)}>
            <option value="">No preference yet</option>
            {BOOTH_SIZES.map((b) => <option key={b} value={b}>{b}</option>)}
          </Select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field label="Message" htmlFor="ex-msg">
          <TextArea id="ex-msg" value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us about your products and space requirements..." />
        </Field>
      </div>
      <div className="mt-2 sm:col-span-2">
        <CtaButton type="submit" variant="cta" size="lg" className="w-full">
          <Store className="size-5" /> Request booth &amp; pricing
        </CtaButton>
      </div>
    </form>
  )
}
