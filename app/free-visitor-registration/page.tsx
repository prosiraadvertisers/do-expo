import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { VisitorForm } from "@/components/forms/visitor-form"
import { CtaLink } from "@/components/ui/cta"
import { Ticket, MapPin, Users, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Visitor Registration",
  description:
    "Get your free visitor pass to Automation Expo 2026. Personalized recommendations, priority entry and access to all five technology zones.",
}

export default function FreeVisitorRegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Visitor Registration"
        title="Your Free Pass to the Future of Automation"
        subtitle="Get personalized recommendations, priority entry and access to every zone — completely free. Register now and explore India's biggest automation showcase."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Main form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <VisitorForm />
              </div>
            </div>

            {/* Benefits sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-cta/15 px-3.5 py-1.5 text-xs font-bold text-cta">
                  <Ticket className="size-4" /> 100% FREE
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    What&apos;s Included?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your free pass gives you full access to all the action happening across three days.
                  </p>
                </div>

                {[
                  {
                    icon: MapPin,
                    title: "Access All 6 Trade Zones",
                    desc: "Explore Agriculture, Consumer Goods, Manufacturing, Textiles, Healthcare & Export Services.",
                  },
                  {
                    icon: Users,
                    title: "Meet Exhibitors",
                    desc: "Connect with 500+ technology leaders and innovation disruptors.",
                  },
                  {
                    icon: Award,
                    title: "Attend Sessions",
                    desc: "80+ keynotes, panels, live demos and technical masterclasses.",
                  },
                  {
                    icon: Zap,
                    title: "Networking Events",
                    desc: "Cocktails, breakfasts and informal meetups with peers and experts.",
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
                    <span className="font-semibold text-foreground">📅 Event Dates:</span> 18-20 March 2026 • {new Date().getFullYear() > 2025 ? 'Past edition' : 'In a few months'}
                  </p>
                </div>

                <CtaLink href="/event" variant="outline" className="w-full justify-center">
                  View Agenda
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why register */}
      <section className="bg-muted/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground">
            Why Register Your Free Pass?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Personalized Recommendations",
                desc: "Based on your industry interest, get custom suggestions for zones and sessions you shouldn't miss.",
              },
              {
                title: "Priority Entry",
                desc: "Skip queues at registration and get fast-track access on all three days.",
              },
              {
                title: "Advanced Schedule",
                desc: "See the full agenda and pre-plan which sessions and zones to visit.",
              },
              {
                title: "Exclusive Emails",
                desc: "Get pre-event tips, speaker bios, exhibitor spotlights and last-minute announcements.",
              },
              {
                title: "Networking Insights",
                desc: "View exhibitor profiles and plan which companies to visit before you arrive.",
              },
              {
                title: "Event Pass",
                desc: "Receive your e-pass by email — show at registration and you're in immediately.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-lg p-5">
                <h3 className="font-heading font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center font-heading text-2xl font-bold text-foreground">
            Three Easy Steps
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                step: "1",
                title: "Select Your Interest",
                desc: "Tell us which zone excites you most — Agriculture, Consumer Goods, Manufacturing, Textiles, Healthcare, or Export Services.",
              },
              {
                step: "2",
                title: "Share Your Details",
                desc: "Provide your name, email, mobile and company. We'll send your personalized pass immediately.",
              },
              {
                step: "3",
                title: "Download & Arrive",
                desc: "Get your e-pass PDF, add the event to your calendar, and show up on March 18. That's it!",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-white font-heading font-bold">
                    {item.step}
                  </div>
                  {i < 2 && (
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
      <section className="bg-muted/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-heading text-2xl font-bold text-foreground">
            Visitor FAQs
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                q: "Is the visitor pass really free?",
                a: "Yes, 100% free. You pay nothing. No registration fees, no hidden charges. Just register and get your pass.",
              },
              {
                q: "What does the visitor pass include?",
                a: "Full access to all six trade zones, all keynotes and sessions, networking events, exhibition floor, and the deal room (if invited).",
              },
              {
                q: "Can I bring a colleague?",
                a: "Yes! Each colleague should register separately to get their own personalized recommendations and e-pass.",
              },
              {
                q: "Do I need to print my pass?",
                a: "No. Your digital e-pass is enough. Just show your email on your phone at registration. We'll issue your physical badge on the day.",
              },
              {
                q: "Can I change my zone interest after registering?",
                a: "Absolutely. Just update your profile on our app or website anytime before the event.",
              },
              {
                q: "What if I can't attend?",
                a: "You can transfer your pass to a colleague. Just let us know their name and email, and they'll get a new pass.",
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
