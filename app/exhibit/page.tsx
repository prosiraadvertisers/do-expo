import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CtaButton, CtaLink } from "@/components/ui/cta"
import { ZonesGrid } from "@/components/zones-grid"
import { ZONES } from "@/lib/event-data"
import {
  Zap,
  TrendingUp,
  Award,
  Users,
  Building2,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Exhibit",
  description:
    "Showcase your automation solutions at Automation Expo 2026. Explore booth packages, sponsorship tiers, five tech zones, and our gallery from past editions.",
}

export default function ExhibitPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibit at Automation Expo 2026"
        title="Connect with 40,000+ Qualified Buyers"
        subtitle="Three days. Five tech zones. Unlimited business potential. Secure your booth and generate qualified leads in India's biggest automation showcase."
      >
        <CtaButton variant="cta" size="lg">
          Book Your Booth
        </CtaButton>
      </PageHero>

      {/* Why Exhibit Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why Exhibit at Automation Expo 2026?
          </h2>
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
                desc: "Showcase your brand among 500+ global automation leaders. Strengthen market positioning and industry recognition.",
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

      {/* Plan Your Expo */}
      <section id="plan" className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Plan Your Expo
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            Choose the booth size that fits your brand and budget. All packages include prime floor placement, high-traffic visibility and full access to networking events.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Standard Booth",
                size: "3m × 3m (9 sqm)",
                price: "₹4.5L",
                highlights: [
                  "One shell scheme booth",
                  "Basic furnishing",
                  "2 visitor passes",
                  "Standard signage",
                  "Electricity (5 kW)",
                ],
              },
              {
                name: "Premium Booth",
                size: "6m × 3m (18 sqm)",
                price: "₹8.5L",
                highlights: [
                  "Custom design ready",
                  "Premium furnishing",
                  "4 visitor passes",
                  "Enhanced signage",
                  "Priority placement",
                  "WiFi included",
                  "Electricity (10 kW)",
                ],
                featured: true,
              },
              {
                name: "Island Booth",
                size: "6m × 6m (36 sqm)",
                price: "₹16L",
                highlights: [
                  "360° visitor access",
                  "Luxury furnishing",
                  "6 visitor passes",
                  "Premium signage",
                  "Best placement",
                  "WiFi & parking",
                  "Electricity (15 kW)",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl transition-all duration-300 ${
                  pkg.featured
                    ? "glass-card border-2 border-primary/50 bg-primary/5 shadow-lg"
                    : "glass-card"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                )}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pkg.size}</p>
                  <p className="mt-3 font-heading text-2xl font-bold text-primary">
                    {pkg.price}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cta" />
                        <span className="text-sm text-foreground/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <CtaButton
                    variant={pkg.featured ? "cta" : "outline"}
                    className="mt-6 w-full"
                  >
                    Inquire Now
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Six Dedicated Export &amp; Trade Zones
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            Choose your zone based on your industry focus. Click on any zone to view its complete product and service categories.
          </p>
          <ZonesGrid />
        </div>
      </section>

      {/* Sponsorship */}
      <section id="sponsorship" className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Sponsorship & Premium Visibility
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            Go beyond the booth. Amplify your brand through sponsorships, speaking slots, awards and exclusive networking experiences.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Gold Sponsorship",
                price: "₹20L",
                benefits: [
                  "Prime booth placement",
                  "2 speaking slots",
                  "VIP lounge access",
                  "Lunch sponsorship option",
                  "Media coverage",
                ],
              },
              {
                name: "Silver Sponsorship",
                price: "₹12L",
                benefits: [
                  "Prominent booth placement",
                  "1 speaking slot",
                  "Lounge access",
                  "Breakfast sponsorship",
                  "Press releases",
                ],
              },
              {
                name: "Bronze Sponsorship",
                price: "₹6L",
                benefits: [
                  "Standard booth placement",
                  "Cocktail reception option",
                  "Branding on signage",
                  "LinkedIn promotion",
                  "Event materials",
                ],
              },
            ].map((sponsor) => (
              <div key={sponsor.name} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {sponsor.name}
                </h3>
                <p className="mt-2 font-heading text-2xl font-bold text-primary">
                  {sponsor.price}
                </p>
                <ul className="mt-6 space-y-2">
                  {sponsor.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cta" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <CtaButton variant="outline" className="mt-6 w-full">
                  Learn More
                </CtaButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Gallery — From Past Editions
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            See the energy, the crowds, the innovation. This is what awaits at Automation Expo 2026.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Exhibition Floor", src: "/images/gallery-floor.png" },
              { title: "Agriculture & Food Zone", src: "/images/gallery-robotics.png" },
              { title: "Networking", src: "/images/gallery-network.png" },
              { title: "Innovation Stage", src: "/images/gallery-stage.png" },
              { title: "Deal Room", src: "/images/gallery-dealroom.png" },
              { title: "Awards Ceremony", src: "/images/gallery-awards.png" },
            ].map((img) => (
              <div
                key={img.title}
                className="group relative h-48 overflow-hidden rounded-2xl bg-muted"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <div className="text-4xl font-heading font-bold text-muted-foreground/30">
                      📷
                    </div>
                    <p className="mt-2 text-xs font-medium text-muted-foreground/50">
                      {img.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              📸 Professional photography & video from past editions showcase the scale and energy of the event.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Exhibit?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Booth applications are open. Secure your spot in India's premier automation showcase.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton variant="gold" size="lg">
              Book Your Booth Today
            </CtaButton>
            <CtaLink href="/event" variant="glass" size="lg">
              View Agenda <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
