import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaButton, CtaLink } from "@/components/ui/cta";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Space -doexim Expo",
  description:
    "Reserve your booth atdoexim Expo 2027. Choose from Standard, Premium, or Island booth packages with flexible pricing and complete support.",
};

export default function BookSpacePage() {
  return (
    <>
      <div className="pt-14">
        <PageHero title="Book Your Exhibition Space">
          <CtaButton variant="cta" size="lg">
            Inquire Now
          </CtaButton>
        </PageHero>
      </div>

      {/* Plan Your Expo */}
      <section id="plan" className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Booth Packages
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            All packages include prime floor placement, high-traffic visibility
            and full access to networking events.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Standard Booth",
                size: "3m × 3m (9 sqm)",
                price: "₹1.35L",
                highlights: [
                  "Shell scheme booth",
                  "Basic furnishing",
                  "2 visitor passes",
                  "Standard signage",
                  "Electricity (5 kW)",
                ],
              },
              {
                name: "Premium Booth",
                size: "6m × 3m (18 sqm)",
                price: "₹2.70L",
                highlights: [
                  "Shell scheme booth",
                  "Basic furnishing",
                  "4 visitor passes",
                  "Priority placement",
                  "Electricity (5 kW)",
                ],
                featured: true,
              },
              {
                name: "Island Booth",
                size: "6m × 6m (36 sqm)",
                price: "₹5.40L",
                highlights: [
                  "Bare space booth",
                  "Basic furnishing",
                  "6 visitor passes",
                  "Priority placement",
                  "Electricity (10kW)",
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
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pkg.size}
                  </p>
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

      {/* What's Included */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What's Included in Every Package
          </h2>
          <div className="mt-12 space-y-4">
            {[
              "Prime floor placement with high-traffic visibility",
              "Professional booth setup and teardown",
              "24/7 on-site support and coordination",
              "Access to all networking events and sessions",
              "Inclusion in event marketing and branding",
              "Listing in exhibitor directory and program guide",
              "Parking facilities for vehicles and equipment",
              "Complimentary pre-event promotional support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-muted/50 p-4"
              >
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
            Ready to Book Your Space?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Limited booths available. Secure your spot atdoexim Expo 2027 today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton variant="gold" size="lg">
              Reserve Your Booth
            </CtaButton>
            <CtaLink href="/sponsorship" variant="glass" size="lg">
              Explore Sponsorships <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
