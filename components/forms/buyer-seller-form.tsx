'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Handshake, Check } from 'lucide-react'
import { Field, TextInput, PhoneInput, Select, TextArea, RadioCards, MultiChips } from './fields'
import { FormSuccess } from './form-success'
import { CtaButton, CtaLink } from '@/components/ui/cta'
import { COUNTRIES } from '@/lib/event-data'

const COMPANY_TYPES = ['OEM / Manufacturer', 'System Integrator', 'End User / Factory', 'Distributor / Reseller', 'Consultant', 'Government / PSU']
const ROLES = ['Decision Maker / Approver', 'Influencer / Recommender', 'Technical Evaluator', 'Procurement / Purchase', 'Researcher']
const CATEGORIES = [
  'Fresh Produce & Processed Foods',
  'Home Décor & Handicrafts',
  'Engineering Products & Machinery',
  'Auto Components',
  'Garments & Sustainable Fabrics',
  'Pharmaceuticals & Medical Devices',
  'Chemicals & Packaging',
  'Freight Forwarders & Logistics',
  'Banks & EXIM Finance',
  'AI & SaaS Export Tech',
]
const INDUSTRIES = ['Automotive', 'Electronics', 'Pharma', 'FMCG', 'Aerospace', 'Metal & Machining', 'Food & Beverage', 'Textiles', 'Logistics', 'Energy']
const OBJECTIVES = ['Evaluate new suppliers', 'Compare products & pricing', 'Plan an upcoming project', 'Partnership / distribution', 'Investment / funding', 'General networking']
const SOURCES = ['LinkedIn', 'Email invitation', 'Industry association', 'Colleague / referral', 'Search engine', 'Print / trade media', 'Previous edition']

type Personal = {
  name: string
  designation: string
  company: string
  mobile: string
  email: string
  address: string
  country: string
  city: string
  state: string
}

export function BuyerSellerForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [personal, setPersonal] = useState<Personal>({
    name: '', designation: '', company: '', mobile: '', email: '',
    address: '', country: 'India', city: '', state: '',
  })
  const [companyType, setCompanyType] = useState('')
  const [role, setRole] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [industries, setIndustries] = useState<string[]>([])
  const [purchaseValue, setPurchaseValue] = useState('')
  const [timeline, setTimeline] = useState('')
  const [objective, setObjective] = useState('')
  const [sources, setSources] = useState<string[]>([])

  const setP = (k: keyof Personal, v: string) => setPersonal((p) => ({ ...p, [k]: v }))

  const validateStep1 = () => {
    const e: Record<string, string> = {}
    if (!personal.name.trim()) e.name = 'Please enter your name.'
    if (!personal.company.trim()) e.company = 'Company is required.'
    if (!/^\d{10}$/.test(personal.mobile.replace(/\s/g, ''))) e.mobile = 'Enter a valid 10-digit number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personal.email)) e.email = 'Enter a valid email.'
    if (!personal.city.trim()) e.city = 'City is required.'
    if (!personal.state.trim()) e.state = 'State is required.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e: Record<string, string> = {}
    if (!companyType) e.companyType = 'Select a company type.'
    if (!role) e.role = 'Select your role.'
    if (categories.length === 0) e.categories = 'Select at least one category.'
    if (industries.length === 0) e.industries = 'Select at least one industry.'
    if (!purchaseValue) e.purchaseValue = 'Please choose an option.'
    if (!timeline) e.timeline = 'Please choose an option.'
    if (!objective) e.objective = 'Select a meeting objective.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (validateStep1()) {
      setStep(2)
      setErrors({})
    }
  }

  const submit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validateStep2()) return;

  try {
    const response = await fetch("/api/buyer-seller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: personal.name,
        designation: personal.designation,
        company: personal.company,
        mobile: personal.mobile,
        email: personal.email,
        address: personal.address,
        country: personal.country,
        city: personal.city,
        state: personal.state,
        companyType,
        role,
        categories,
        industries,
        purchaseValue,
        timeline,
        objective,
        sources,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
    } else {
      alert(result.message || "Submission failed.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  if (submitted) {
    return (
      <FormSuccess
        title="Welcome to the B2B global trade Deal Room"
        message={`Thank you, ${personal.name.split(' ')[0] || 'delegate'}! Your application is received. Our team will curate high-value meetings based on your profile and email your personalised schedule.`}
      >
        <CtaLink href="/event" variant="primary">View the agenda</CtaLink>
        <CtaLink href="/exhibitor" variant="outline">Browse exhibitors</CtaLink>
      </FormSuccess>
    )
  }

  return (
    <div className={compact ? '' : 'mx-auto max-w-3xl'}>
      <div className="px-4 pt-6 sm:px-8">
        <Stepper step={step} />
      </div>

      <form onSubmit={submit} className="px-4 pb-6 pt-2 sm:px-8">
        {step === 1 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <SectionTitle>Personal Details</SectionTitle>
            </div>

            <Field label="Full Name" htmlFor="bs-name" required error={errors.name}>
              <TextInput id="bs-name" value={personal.name} error={!!errors.name} onChange={(e) => setP('name', e.target.value)} placeholder="e.g. Priya Sharma" autoComplete="name" />
            </Field>
            <Field label="Designation" htmlFor="bs-desig">
              <TextInput id="bs-desig" value={personal.designation} onChange={(e) => setP('designation', e.target.value)} placeholder="e.g. Head of Procurement" />
            </Field>

            <Field label="Company" htmlFor="bs-company" required error={errors.company}>
              <TextInput id="bs-company" value={personal.company} error={!!errors.company} onChange={(e) => setP('company', e.target.value)} placeholder="Company name" autoComplete="organization" />
            </Field>
            <Field label="Mobile" htmlFor="bs-mobile" required error={errors.mobile}>
              <PhoneInput id="bs-mobile" value={personal.mobile} error={!!errors.mobile} onChange={(e) => setP('mobile', e.target.value)} placeholder="98765 43210" />
            </Field>

            <Field label="Email" htmlFor="bs-email" required error={errors.email}>
              <TextInput id="bs-email" type="email" value={personal.email} error={!!errors.email} onChange={(e) => setP('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
            </Field>
            <Field label="Country" htmlFor="bs-country" required>
              <Select id="bs-country" value={personal.country} onChange={(e) => setP('country', e.target.value)}>
                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </Select>
            </Field>

            <div className="md:col-span-2">
              <Field label="Address" htmlFor="bs-address">
                <TextInput id="bs-address" value={personal.address} onChange={(e) => setP('address', e.target.value)} placeholder="Street, area" autoComplete="street-address" />
              </Field>
            </div>

            <Field label="City" htmlFor="bs-city" required error={errors.city}>
              <TextInput id="bs-city" value={personal.city} error={!!errors.city} onChange={(e) => setP('city', e.target.value)} placeholder="City" />
            </Field>
            <Field label="State" htmlFor="bs-state" required error={errors.state}>
              <TextInput id="bs-state" value={personal.state} error={!!errors.state} onChange={(e) => setP('state', e.target.value)} placeholder="State" />
            </Field>

            <div className="mt-2 flex justify-end md:col-span-2">
              <CtaButton type="button" variant="primary" onClick={next}>
                Next: Trade Profile <ArrowRight className="size-4" />
              </CtaButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <SectionTitle>Trade Profile</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Company Type" htmlFor="bs-ctype" required error={errors.companyType}>
                <Select id="bs-ctype" value={companyType} error={!!errors.companyType} onChange={(e) => setCompanyType(e.target.value)}>
                  <option value="">Select company type</option>
                  {COMPANY_TYPES.map((c) => <option key={c} value={c}>{c}</option>)}
                </Select>
              </Field>
              <Field label="Primary role in product / systems acquisition" htmlFor="bs-role" required error={errors.role}>
                <Select id="bs-role" value={role} error={!!errors.role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select your role</option>
                  {ROLES.map((c) => <option key={c} value={c}>{c}</option>)}
                </Select>
              </Field>
            </div>

            <Field label="Product / Solution categories of interest" required error={errors.categories} hint="Select all that apply">
              <MultiChips options={CATEGORIES} values={categories} onChange={setCategories} />
            </Field>

            <Field label="Industries" required error={errors.industries} hint={`Select up to 4 \u00b7 ${industries.length}/4 selected`}>
              <MultiChips options={INDUSTRIES} values={industries} onChange={setIndustries} max={4} />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Annual B2B global trade purchase value" required error={errors.purchaseValue}>
                <RadioCards
                  name="purchase"
                  value={purchaseValue}
                  onChange={setPurchaseValue}
                  options={[
                    { value: 'below-50', label: 'Below \u20B950 lakh' },
                    { value: 'over-50', label: 'Over \u20B950 lakh' },
                  ]}
                />
              </Field>
              <Field label="Buying timeline" required error={errors.timeline}>
                <RadioCards
                  name="timeline"
                  value={timeline}
                  onChange={setTimeline}
                  options={[
                    { value: '0-6', label: '0\u20136 months' },
                    { value: '6-plus', label: '6+ months' },
                  ]}
                />
              </Field>
            </div>

            <Field label="Meeting Objective" htmlFor="bs-obj" required error={errors.objective}>
              <Select id="bs-obj" value={objective} error={!!errors.objective} onChange={(e) => setObjective(e.target.value)}>
                <option value="">Select an objective</option>
                {OBJECTIVES.map((c) => <option key={c} value={c}>{c}</option>)}
              </Select>
            </Field>

            <Field label="How did you hear about B2B global trade Expo 2026?" hint="Select all that apply">
              <MultiChips options={SOURCES} values={sources} onChange={setSources} />
            </Field>

            <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <CtaButton type="button" variant="outline" onClick={() => { setStep(1); setErrors({}) }}>
                <ArrowLeft className="size-4" /> Previous
              </CtaButton>
              <CtaButton type="submit" variant="cta" size="lg">
                <Handshake className="size-5" /> Apply for B2B global trade Deal Room
              </CtaButton>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-heading text-lg font-bold text-foreground">{children}</h3>
}

function Stepper({ step }: { step: number }) {
  const steps = [
    { n: 1, label: 'Personal Details' },
    { n: 2, label: 'Trade Profile' },
  ]
  return (
    <div className="flex items-center gap-3">
      {steps.map((s, i) => {
        const done = step > s.n
        const active = step === s.n
        return (
          <div key={s.n} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                  active ? 'bg-primary text-primary-foreground' : done ? 'bg-cta text-cta-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {done ? <Check className="size-4" /> : s.n}
              </span>
              <span className={`text-sm font-semibold ${active || done ? 'text-foreground' : 'text-muted-foreground'}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className={`h-0.5 flex-1 rounded-full ${step > 1 ? 'bg-cta' : 'bg-border'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}