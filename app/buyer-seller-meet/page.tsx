import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { BuyerSellerForm } from "@/components/forms/buyer-seller-form"
import { CtaLink } from "@/components/ui/cta"
import { Handshake, CheckCircle2, Users, Zap, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Buyer Seller Meet",
  description:
    "Apply for the Automation Deal Room — get AI-matched with qualified suppliers and buyers. Fill out your trade profile and enter the deal room matching system.",
}

export default function BuyerSellerMeetPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyer Seller Meet"
        title="Enter the Automation Deal Room"
        subtitle="Get matched with the right suppliers and buyers through curated 1:1 meetings tailored to your procurement needs and product focus."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Main form */}
            <div className="lg:col-span-2">
              <BuyerSellerForm />
            </div>

            {/* Benefits sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Why Join the Deal Room?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Get matched with 25-40 qualified prospects based on your specific needs and industry focus.
                  </p>
                </div>

                {[
                  {
                    icon: Zap,
                    title: "Smart Matching",
                    desc: "AI-powered algorithm connects you with relevant suppliers or buyers.",
                  },
                  {
                    icon: Users,
                    title: "Pre-Scheduled Meetings",
                    desc: "Receive your personalised meeting schedule 2 weeks before the expo.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "High-Quality Leads",
                    desc: "Every match is vetted for relevance to your sector and needs.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Real Business Outcomes",
                    desc: "Average delegate closes 2-3 deals within 3 months post-expo.",
                  },
                ].map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="glass-card rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {benefit.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                <div className="glass-card rounded-lg bg-primary/5 p-4 ring-1 ring-primary/20">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">📅 Timeline:</span> Meetings match on Mar 1. 2-week prep. Meetings on Mar 19-20.
                  </p>
                </div>

                <CtaLink href="/event" variant="outline" className="w-full justify-center">
                  View Full Agenda
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground">
            How the Deal Room Works
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                step: "1",
                title: "Complete Your Profile",
                desc: "Tell us about your company, procurement focus, product categories and buying timeline.",
              },
              {
                step: "2",
                title: "AI Matching Engine",
                desc: "Our algorithm analyzes your profile against 40,000+ visitors and 500+ exhibitors.",
              },
              {
                step: "3",
                title: "Personalised Schedule",
                desc: "Receive your curated 1:1 meeting schedule 2 weeks before the expo.",
              },
              {
                step: "4",
                title: "High-Energy Meetings",
                desc: "Meet qualified prospects in dedicated deal room booths with full A/V support.",
              },
              {
                step: "5",
                title: "Post-Expo Follow-Up",
                desc: "Access to all attendee contact info and deal room insights for 90 days.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-white font-heading font-bold">
                    {item.step}
                  </div>
                  {i < 4 && (
                    <div className="mt-2 h-12 w-1 bg-border" />
                  )}
                </div>
                <div className="pb-4 pt-1">
                  <h3 className="font-heading font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-heading text-2xl font-bold text-foreground">
            Deal Room FAQs
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                q: "Is there a fee to join the Deal Room?",
                a: "The Deal Room matching and scheduling are complimentary for qualified buyers and end-users. Exhibitors book booth packages.",
              },
              {
                q: "How are meetings matched?",
                a: "Our AI algorithm analyzes your company profile, product interests, industry, and buying timeline to match you with most relevant prospects.",
              },
              {
                q: "Can I request specific companies to meet?",
                a: "Yes! You can indicate preferred companies during registration. Our team works to accommodate as many requests as possible.",
              },
              {
                q: "How many meetings will I get?",
                a: "Typically 25-40 pre-scheduled 20-minute meetings depending on your profile and matching results.",
              },
              {
                q: "What if my schedule changes during the expo?",
                a: "Deal room coordinators on-site can help reschedule or add urgent meetings. Flexibility is built in.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-lg p-5">
                <h3 className="font-semibold text-foreground">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
