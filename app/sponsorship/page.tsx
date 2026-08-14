import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaButton, CtaLink } from "@/components/ui/cta"
import { ArrowRight, CheckCircle2, Sparkles, Megaphone, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sponsorship -doexim Expo",
  description:
    "Amplify your brand atdoexim Expo 2026. Explore Gold, Silver, and Bronze sponsorship tiers with speaking slots, VIP access, and premium visibility.",
}

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Visibility"
        title="Sponsorship & Brand Amplification"
        subtitle="Go beyond the booth. Amplify your brand through sponsorships, speaking slots, awards, and exclusive networking experiences."
      >
        <CtaButton variant="cta" size="lg">
          Explore Opportunities
        </CtaButton>
      </PageHero>

      {/* Why Sponsor */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why Sponsordoexim Expo?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Massive Reach",
                desc: "40,000+ qualified professionals from manufacturing, automation, and export sectors.",
              },
              {
                icon: Users,
                title: "Premium Positioning",
                desc: "Position your brand alongside 500+ global leaders and establish thought leadership.",
              },
              {
                icon: Sparkles,
                title: "Lasting Impact",
                desc: "Multi-channel promotion across event marketing, media, and professional networks.",
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

      {/* Sponsorship Packages */}
      <section id="sponsorship" className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Sponsorship Tiers
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            Choose the sponsorship level that aligns with your marketing objectives and brand visibility goals.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Gold Sponsorship",
                price: "₹20L",
                icon: "🥇",
                benefits: [
                  "Prime booth placement",
                  "2 speaking slots",
                  "VIP lounge access",
                  "Lunch sponsorship option",
                  "Media coverage & press releases",
                  "Exclusive networking dinner",
                ],
              },
              {
                name: "Silver Sponsorship",
                price: "₹12L",
                icon: "🥈",
                benefits: [
                  "Prominent booth placement",
                  "1 speaking slot",
                  "Lounge access",
                  "Breakfast sponsorship",
                  "Press releases & coverage",
                  "Networking event features",
                ],
              },
              {
                name: "Bronze Sponsorship",
                price: "₹6L",
                icon: "🥉",
                benefits: [
                  "Standard booth placement",
                  "Cocktail reception option",
                  "Branding on signage",
                  "LinkedIn promotion",
                  "Event materials inclusion",
                  "Exhibitor listing",
                ],
              },
            ].map((sponsor) => (
              <div key={sponsor.name} className="glass-card rounded-2xl p-6">
                <div className="mb-3 text-3xl">{sponsor.icon}</div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {sponsor.name}
                </h3>
                <p className="mt-2 font-heading text-2xl font-bold text-primary">
                  {sponsor.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {sponsor.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
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

      {/* Additional Benefits */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            All Sponsorships Include
          </h2>
          <div className="mt-12 space-y-3">
            {[
              "Prominent logo placement on event signage and materials",
              "Listing in event program guide and website",
              "Social media promotion across all channels",
              "Pre-event promotional support and co-marketing",
              "Access to attendee database and analytics",
              "Complimentary event passes and VIP access",
              "Post-event recognition and case study opportunity",
              "Exclusive partnership opportunities for future events",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Amplify Your Brand atdoexim Expo
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Limited sponsorship slots available. Contact us today to discuss your brand goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton variant="gold" size="lg">
              Become a Sponsor
            </CtaButton>
            <CtaLink href="/book-space" variant="glass" size="lg">
              View Booth Packages <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
