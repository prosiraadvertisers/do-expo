import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaButton } from "@/components/ui/cta"
import { EXHIBITORS, EXHIBITOR_CATEGORIES } from "@/lib/event-data"
import { ExhibitorGrid } from "@/components/exhibitor-grid"

export const metadata: Metadata = {
  title: "Exhibitors",
  description:
    "Meet the 500+ exhibitors showcasing automation solutions at doeximexpo 2026. Browse by category, search, and discover your next technology partner.",
}

export default function ExhibitorPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Exhibitors"
        title="Meet Our Exhibitors"
      >
        <CtaButton variant="cta" size="lg">
          Become an Exhibitor
        </CtaButton>
      </PageHero>

      <section className="w-full overflow-x-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-balance font-heading text-2xl font-bold text-foreground">
                Browse by Category
              </h2>
              <p className="text-sm text-muted-foreground">
                Click a category to explore companies in that domain.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                All ({EXHIBITORS.length})
              </span>
              {EXHIBITOR_CATEGORIES.map((cat) => {
                const count = EXHIBITORS.filter((e) => e.category === cat).length
                return (
                  <span key={cat} className="rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground/70">
                    {cat} ({count})
                  </span>
                )
              })}
            </div>
          </div>

          <ExhibitorGrid exhibitors={EXHIBITORS} />
        </div>
      </section>

      <section className="w-full overflow-x-hidden brand-gradient-radial px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Your Brand Belongs Here
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Reach 25,000+ qualified buyers and connect with industry leaders across India and the globe. Secure your booth today.
          </p>
          <div className="mt-8">
            <CtaButton variant="gold" size="lg">
              Exhibit at Automation Expo 2026
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
