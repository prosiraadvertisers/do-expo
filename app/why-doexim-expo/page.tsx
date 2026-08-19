import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaButton, CtaLink } from "@/components/ui/cta"
import { ZonesGrid } from "@/components/zones-grid"
import {
  TrendingUp,
  Award,
  Users,
  Building2,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Whydoexim Expo",
  description:
    "Discover whydoexim Expo 2027 is India's premier platform for exhibitors. Reach 40,000+ qualified buyers, generate high-quality leads, and establish industry credibility.",
}

export default function WhydoeximExpoPage() {
  return (
    <>
  <div className="pt-14">
    <PageHero
      
      title="Why doexim Expo 2027?"
    >
      <CtaButton variant="cta" size="lg">
        Book Your Booth
      </CtaButton>
    </PageHero>
  </div>

      {/* Why Exhibit Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Reach Qualified Buyers",
                desc: "40,000+ trade visitors from manufacturing, OEMs, system integrators and end-user facilities across India and abroad.",
              },
              {
                icon: TrendingUp,
                title: "Generate High-Quality Leads",
                desc: "AI-powered deal room matching connects you with pre-qualified prospects genuinely interested in your solutions.",
              },
              {
                icon: Zap,
                title: "Industry Credibility",
                desc: "Showcase your brand among 500+ global B2B global trade leaders. Strengthen market positioning and industry recognition.",
              },
              {
                icon: Award,
                title: "Visibility & Networking",
                desc: "Live product demos, panel discussions, and keynotes generate buzz. Meet peers, partners and investors.",
              },
              {
                icon: Building2,
                title: "Sector-Specific Zones",
                desc: "Choose your zone — Agriculture, Consumer Goods, Manufacturing, Textiles, Healthcare, or Export Services — reaching your target audience.",
              },
              {
                icon: Star,
                title: "Unmatched ROI",
                desc: "Previous exhibitors report 3x pipeline growth, 20+ qualified meetings and 2-3 deal conversions per expo.",
              },
            ].map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="glass-card rounded-2xl p-6">
                  <Icon className="mb-4 size-8 text-primary" />
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Six Dedicated Export &amp; Trade Zones
          </h2>
          <br/>
          <ZonesGrid />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Showcase Your Brand?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Join 500+ global exhibitors at India's premier trade platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton variant="gold" size="lg">
              Book Your Booth Now
            </CtaButton>
            <CtaLink href="/book-space" variant="glass" size="lg">
              Explore Booth Packages <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
