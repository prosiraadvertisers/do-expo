"use client"

import Link from "next/link"
import { Building2, TrendingUp, Handshake, Globe2, CheckCircle2, ArrowRight, Quote } from "lucide-react"
import { ZonesGrid } from "@/components/zones-grid"
import { CtaButton, CtaLink } from "@/components/ui/cta"
import { useRegistration } from "@/components/registration/registration-context"

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc?: string
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  )
}

const stats = [
  { icon: Building2, value: "600+", label: "Exhibitors" },
  { icon: Globe2, value: "40+", label: "Countries" },
  { icon: TrendingUp, value: "45,000+", label: "Trade Visitors" },
  { icon: Handshake, value: "5,000+", label: "B2B Meetings" },
]

const whyExhibit = [
  "Meet 45,000+ qualified industrial buyers under one roof",
  "Launch products in front of decision-makers and media",
  "Generate high-intent leads through the Buyer-Seller Deal Room",
  "Position your brand alongside global automation leaders",
  "Access curated matchmaking and pre-scheduled meetings",
  "Gain visibility across zones, stages and digital channels",
]

const testimonials = [
  {
    quote:
      "The Deal Room alone paid back our stand cost within the first morning. The quality of buyers was exceptional.",
    name: "Vikram Shah",
    role: "Head of Automation, AxisRobo",
  },
  {
    quote:
      "As a startup, the Innovation Zone gave us a stage in front of investors we could never have reached otherwise.",
    name: "Nisha Kapoor",
    role: "CEO, ForgeAI",
  },
  {
    quote: "Best-organised industrial expo in the region. We closed three distribution deals across the three days.",
    name: "Meera Iyer",
    role: "VP Engineering, NovaVision",
  },
]

const partners = ["AxisRobo", "NovaVision", "ForgeAI", "AssembleX", "PrecisionMetric", "SenseGrid", "CoboWorks", "OptiScan"]

const news = [
  {
    tag: "Announcement",
    title: "Registrations open for Automation Expo 2026",
    date: "12 Jan 2026",
    desc: "Free visitor passes and exhibitor bookings are now live for the flagship edition in Mumbai.",
  },
  {
    tag: "Speakers",
    title: "First wave of keynote speakers revealed",
    date: "28 Jan 2026",
    desc: "Industry CTOs and startup founders join the Main Stage line-up across three power-packed days.",
  },
  {
    tag: "Zones",
    title: "New Innovation & Startup Zone confirmed",
    date: "05 Feb 2026",
    desc: "A dedicated pavilion and live pitch stage for deep-tech startups and university spin-offs.",
  },
]

export function HomeSections() {
  const { open } = useRegistration()
  return (
    <>
      {/* About snapshot */}
      <section className="w-full overflow-x-hidden px-4 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                About the Expo
              </span>
              <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                India&apos;s flagship platform for industrial automation
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Presented by DOeximexpo, Automation Expo 2026 brings together the entire automation value chain —
                robotics, machine vision, quality inspection, assembly systems and breakthrough startups — for three
                days of business, learning and networking.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink href="/about" variant="outline">
                  Learn more about us
                </CtaLink>
                <CtaButton onClick={() => open("exhibitor")}>Become an exhibitor</CtaButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-6 text-center">
                  <s.icon className="mx-auto mb-2 h-7 w-7 text-accent" />
                  <div className="font-heading text-3xl font-extrabold text-foreground">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones overview */}
      <section className="w-full overflow-x-hidden bg-secondary/40 px-4 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Explore the Floor"
            title="Five focused technology zones"
            desc="Each zone curates the leading exhibitors, live demos and sessions in its field — so you spend time where it matters most."
          />
          <ZonesGrid />
        </div>
      </section>

      {/* Why exhibit */}
      <section className="w-full overflow-x-hidden px-4 py-16 sm:py-20">
        <div className="mx-auto w-full grid max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-8">
              <ul className="space-y-4">
                {whyExhibit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Why Exhibit
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Turn three days into a year of pipeline
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Exhibiting at Automation Expo 2026 puts your brand in front of the buyers, integrators and partners
              driving India&apos;s next industrial decade.
            </p>
            <div className="mt-6">
              <CtaButton onClick={() => open("exhibitor")}>Reserve your stand</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full overflow-x-hidden bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              What Partners Say
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl">
              Trusted by leaders across the value chain
            </h2>
          </div>
          <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
                <Quote className="mb-3 h-7 w-7 text-accent" />
                <p className="leading-relaxed text-primary-foreground/90">{t.quote}</p>
                <div className="mt-5">
                  <div className="font-heading font-bold">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Featured partners &amp; exhibitors
            </p>
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              {partners.map((p) => (
                <div
                  key={p}
                  className="flex min-h-16 items-center justify-center rounded-xl bg-primary-foreground/5 font-heading text-base sm:text-lg font-bold text-primary-foreground/80 ring-1 ring-primary-foreground/10"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="w-full overflow-x-hidden px-4 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Latest Updates
              </span>
              <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                News &amp; announcements
              </h2>
            </div>
            <Link href="/event" className="inline-flex items-center gap-1 font-semibold text-accent">
              View full agenda
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{n.tag}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-foreground">{n.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{n.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
