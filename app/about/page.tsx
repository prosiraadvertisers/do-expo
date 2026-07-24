import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaButton } from "@/components/ui/cta";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DoExim Expo",

  description:
    "Learn about DoExim Expo – Connecting global import & export professionals since 2020. Discover international trade opportunities, business networking and global partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DoExim Expo"
        title="Connecting Global Import & Export Professionals"
        subtitle="Building international trade relationships by bringing together exhibitors, buyers and industry professionals from over 50 countries."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Why DoExim Expo?
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                DoExim Expo is dedicated to fostering international trade and
                commerce by creating a premier platform where businesses can
                connect, learn and grow together. Since 2020, we have been
                bringing together exhibitors, buyers and trade professionals
                from around the world to explore new markets and build lasting
                business relationships.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is to facilitate meaningful business connections,
                showcase innovative products and services, foster knowledge
                sharing and support the growth of global trade through
                world-class exhibitions and networking opportunities.
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
                {
                  icon: TrendingUp,
                  label: "Countries Represented",
                  value: "25+",
                },
                { icon: Award, label: "Speakers & Experts", value: "80+" },
                {
                  icon: Lightbulb,
                  label: "Startup Pavilion",
                  value: "Pitch Battle",
                },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <Icon className="mx-auto mb-3 size-8 text-primary" />
                    <p className="font-heading text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="statistics"
        className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What Our Participants Say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              Discover why exporters, importers, manufacturers and international
              buyers choose DoExim Expo to expand their global business network.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "We connected with international buyers from multiple countries and secured valuable export opportunities.",
                author: "Rahul Sharma",
                role: "Export Manager",
              },
              {
                quote:
                  "The B2B matchmaking sessions helped us find trusted suppliers and long-term business partners.",
                author: "Priya Mehta",
                role: "Import Consultant",
              },
              {
                quote:
                  "DoExim Expo opened new markets for our products and expanded our global business network.",
                author: "Ahmed Khan",
                role: "Manufacturer",
              },
              {
                quote:
                  "An excellent platform to meet exporters, distributors and trade professionals under one roof.",
                author: "Neha Joshi",
                role: "Business Owner",
              },
              {
                quote:
                  "The networking opportunities and knowledge sessions were extremely valuable for our international expansion.",
                author: "David Wilson",
                role: "International Buyer",
              },
              {
                quote:
                  "One of the best trade expos for connecting businesses across borders.",
                author: "Amit Patel",
                role: "Exporter",
              },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 backdrop-blur">
                <p className="text-sm text-foreground/80 italic">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 font-heading font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
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
              Explore products, services and trade opportunities across multiple
              international business sectors.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {[
              {
                title: "Import & Export Pavilion",
                desc: "Meet exporters, importers and sourcing companies from around the world.",
                highlights: ["Global Buyers", "Exporters", "Importers"],
              },
              {
                title: "Manufacturing Zone",
                desc: "Manufacturers showcasing products for international markets.",
                highlights: ["OEM Products", "Factories", "Private Label"],
              },
              {
                title: "International Country Pavilions",
                desc: "Explore products and investment opportunities from participating countries.",
                highlights: [
                  "Country Booths",
                  "Trade Delegations",
                  "Investment",
                ],
              },
              {
                title: "Logistics & Supply Chain",
                desc: "Shipping, freight forwarding, warehousing and customs solutions.",
                highlights: ["Freight", "Customs", "Warehousing"],
              },
              {
                title: "Business Networking",
                desc: "B2B matchmaking, seminars and networking sessions.",
                highlights: ["Meetings", "Networking", "Knowledge Sessions"],
              },
            ].map((zone, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {zone.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {zone.desc}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {zone.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
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
            Ready to Grow Your Global Business?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Whether you're an exporter, importer, manufacturer or international buyer, DoExim Expo is your gateway to global trade opportunities and meaningful business partnerships.
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
  );
}
