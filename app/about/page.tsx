import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaButton } from "@/components/ui/cta"
import { Users, Target, Award, Lightbulb, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About DOeximexpo",
  description:
    "Learn about DOeximexpo — India's premier B2B automation trade show connecting global technology leaders, buyers and innovators.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DOeximexpo"
        title="India's Automation Excellence Platform"
        subtitle="Connecting global technology leaders, qualified buyers and disruptive innovators in automation and smart manufacturing."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Why DOeximexpo?
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                DOeximexpo presents India&apos;s largest and most focused B2B trade show for industrial automation. Since inception, we&apos;ve brought together manufacturers, system integrators, technology providers and innovation leaders to showcase cutting-edge automation solutions and drive meaningful business partnerships.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is simple: accelerate India&apos;s journey toward smart, connected and sustainable manufacturing by creating the platform where tomorrow&apos;s automation breakthroughs are discovered and adopted today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/exhibit">
                  <CtaButton variant="cta">Become an Exhibitor</CtaButton>
                </Link>
                <Link href="#statistics">
                  <CtaButton variant="outline">See Statistics</CtaButton>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Trade Visitors", value: "40,000+" },
                { icon: Globe, label: "Global Exhibitors", value: "500+" },
                { icon: Target, label: "Tech Zones", value: "5" },
                { icon: TrendingUp, label: "Countries Represented", value: "25+" },
                { icon: Award, label: "Speakers & Experts", value: "80+" },
                { icon: Lightbulb, label: "Startup Pavilion", value: "Pitch Battle" },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                    <Icon className="mx-auto mb-3 size-8 text-primary" />
                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="statistics" className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What Our Exhibitors Say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              Discover why industry leaders choose DOeximexpo to connect with qualified buyers and showcase innovation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "DOeximexpo gave us direct access to 40,000+ qualified buyers. Our pipeline for Q2 is already 3x what we expected.",
                author: "Vikram Shah",
                role: "Head of Sales, AxisRobo",
              },
              {
                quote: "The Deal Room matching algorithm is phenomenal. We met 25 serious prospects in just 2 days — a deal-maker for us.",
                author: "Meera Iyer",
                role: "Business Development, NovaVision",
              },
              {
                quote: "As a startup, being featured in the Innovation Zone elevated our visibility. Three investors approached us directly.",
                author: "Arjun Nair",
                role: "Founder, DeepMotion",
              },
              {
                quote: "The networking energy here is unmatched. By day two, we&apos;d already locked two major system integration projects.",
                author: "Sara Fernandes",
                role: "Product Lead, CoboWorks",
              },
              {
                quote: "The international buyer representation gave us a global perspective on our market positioning. Invaluable for strategy.",
                author: "Dr. Karan Bhatt",
                role: "Chief Metrologist, PrecisionMetric",
              },
              {
                quote: "This expo showcases India&apos;s automation maturity to the world. We&apos;re incredibly proud to be part of it.",
                author: "Nisha Kapoor",
                role: "CEO, ForgeAI",
              },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 backdrop-blur">
                <p className="text-sm text-foreground/80 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-heading font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Five Dedicated Zones
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Explore industry-leading solutions across five specialized technology zones designed to accelerate automation adoption.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {[
              {
                title: "Robotics Zone",
                desc: "Industrial robots, cobots and autonomous mobile systems powering the factory floor.",
                highlights: ["6-axis & SCARA robots", "Collaborative cobots", "AMRs & AGVs"],
              },
              {
                title: "Machine Vision Zone",
                desc: "AI-powered smart cameras and 3D sensors for precision defect detection and traceability.",
                highlights: ["AI defect detection", "3D vision systems", "Vision-guided robotics"],
              },
              {
                title: "Quality Inspection Zone",
                desc: "Metrology, testing and in-line QA technologies ensuring zero-defect manufacturing.",
                highlights: ["CMM & metrology", "Non-destructive testing", "In-line quality assurance"],
              },
              {
                title: "Assembly Automation Zone",
                desc: "Pick-and-place, conveyors, fastening and end-of-line systems maximizing throughput.",
                highlights: ["Pick & place systems", "Conveyor automation", "End-of-line packaging"],
              },
              {
                title: "Innovation & Startup Zone",
                desc: "Deep-tech startups and university spin-offs showcasing tomorrow's automation breakthroughs.",
                highlights: ["Startup pavilion", "Live pitch stage", "Investor connect"],
              },
            ].map((zone, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{zone.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{zone.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {zone.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {h}
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Join India&apos;s Automation Revolution?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Whether you&apos;re an exhibitor, buyer or innovation leader, DOeximexpo is your platform to connect, collaborate and drive growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/exhibit">
              <CtaButton variant="gold" size="lg">
                Explore Opportunities
              </CtaButton>
            </Link>
            <Link href="/">
              <CtaButton variant="glass" size="lg">
                Back to Home
              </CtaButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
