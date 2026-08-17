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
  { icon: Building2, value: "1000+", label: "Exhibitors" },
  { icon: Globe2, value: "50+", label: "Countries" },
  { icon: TrendingUp, value: "25,000+", label: "Trade Visitors" },
  { icon: Handshake, value: "5000+", label: "Business Meetings" },
]

const whyExhibit = [
  "Connect with qualified importers and exporters from over 50 countries",
  "Launch your products in international markets",
  "Generate high-quality global trade leads",
  "Build partnerships with distributors and sourcing companies",
  "Participate in curated B2B matchmaking sessions",
  "Increase your brand visibility in the international trade community",
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
    title: "doexim Expo 2027 registrations are now open",
    date: "21 April 2027",
    desc: "Visitor registrations and exhibitor bookings are now available for the upcoming international trade exhibition.",
  },
  {
    tag: "International Trade",
    title: "50+ countries confirm participation",
    date: "28 Jan 2027",
    desc: "Global buyers, exporters and trade organizations are preparing to showcase opportunities from around the world.",
  },
  {
    tag: "Business",
    title: "Dedicated B2B Matchmaking Program announced",
    date: "05 Feb 2027",
    desc: "Pre-scheduled business meetings will help importers, exporters and manufacturers build valuable partnerships.",
  },
]

export function HomeSections() {
  const { open } = useRegistration()
  return (
    <>
      {/* About snapshot */}
      <section className="w-full overflow-x-hidden px-4 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                About the Expo
              </span>
              <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                Connecting Global Import & Export Professionals
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                doexim Expo is dedicated to fostering international trade and commerce by creating a premier platform where businesses can connect, learn and grow together. We bring together thousands of exhibitors, buyers and professionals from over 50 countries to explore new markets, establish partnerships and discover innovative import and export solutions.
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
                  <s.icon className="mx-auto mb-2 h-7 w-7 text-accent " />
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
            title="Explore Global Trade Opportunities"
            desc="Discover international exhibitors, sourcing partners, country pavilions, trade services and networking opportunities designed to help your business grow globally."
          />
          <ZonesGrid />
        </div>
      </section>

      {/* Why exhibit */}
      <section className="w-full overflow-x-hidden px-4 py-20 sm:py-24">
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
              Expand Your Business Beyond Borders
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Exhibiting at doexim Expo gives your business direct access to importers, exporters, wholesalers, manufacturers and international buyers looking for trusted trade partners.
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
              Trusted by Global Trade Professionals
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
      <section className="w-full overflow-x-hidden px-4 py-20 sm:py-24">
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
<Link
  href="/event"
  className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary/80"
>              View full agenda
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{n.tag}</span>
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
