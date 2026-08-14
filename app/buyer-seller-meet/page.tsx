import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { BuyerSellerForm } from "@/components/forms/buyer-seller-form"
import { CtaLink } from "@/components/ui/cta"
import {
  Send,
  Plug,
  CircleDollarSign,
  MessageCircle,
  CheckCircle2,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Buyer Seller Meet |doexim Expo",
  description:
    "Join thedoexim Buyer Seller Meet and connect with exporters, importers, manufacturers and buyers through curated B2B meetings and sourcing opportunities.",
}

export default function BuyerSellerMeetPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyer Seller Meet"
        title="Connect. Source. Trade. Grow."
        subtitle="Meet exporters, importers, manufacturers and buyers through curated B2B meetings designed to create meaningful trade opportunities."
      />

      {/* Buyer Seller Meet Process */}
      <section className="w-full bg-[#f4f6f8] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </p>

            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              From Sourcing Requirement to Business Connection
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Share your business requirements and connect with relevant exporters,
              importers, manufacturers and buyers atdoexim Expo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">

            {/* Step 1 */}
            <div
              className="
                group relative flex min-h-[145px] items-center
                rounded-xl border border-border bg-white
                px-6 py-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                xl:rounded-r-none
              "
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Send className="size-7 text-primary" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 01
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-foreground">
                    Buyers Share Requirements
                  </h3>

                  
                </div>
              </div>

              <div
                className="
                  absolute -right-[15px] top-1/2 z-10 hidden
                  size-8 -translate-y-1/2 rotate-45
                  border-r border-t border-border bg-white
                  xl:block
                "
              />
            </div>

            {/* Step 2 */}
            <div
              className="
                group relative flex min-h-[145px] items-center
                rounded-xl border border-border bg-white
                px-6 py-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                xl:rounded-none
              "
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Plug className="size-7 text-primary" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 02
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-foreground">
                   doexim Matches Suppliers
                  </h3>

                  
                </div>
              </div>

              <div
                className="
                  absolute -right-[15px] top-1/2 z-10 hidden
                  size-8 -translate-y-1/2 rotate-45
                  border-r border-t border-border bg-white
                  xl:block
                "
              />
            </div>

            {/* Step 3 */}
            <div
              className="
                group relative flex min-h-[145px] items-center
                rounded-xl border border-border bg-white
                px-6 py-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                xl:rounded-none
              "
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CircleDollarSign className="size-7 text-primary" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 03
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-foreground">
                    Suppliers Present Offers
                  </h3>

                  
                </div>
              </div>

              <div
                className="
                  absolute -right-[15px] top-1/2 z-10 hidden
                  size-8 -translate-y-1/2 rotate-45
                  border-r border-t border-border bg-white
                  xl:block
                "
              />
            </div>

            {/* Step 4 */}
            <div
              className="
                group relative flex min-h-[145px] items-center
                rounded-xl border border-border bg-white
                px-6 py-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                xl:rounded-l-none
              "
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="size-7 text-primary" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 04
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-foreground">
                    Buyers & Sellers Connect
                  </h3>

                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Buyer Seller Form */}
      <section className="w-full overflow-x-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid w-full grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3 lg:gap-8">

            {/* Main form */}
            <div className="w-full min-w-0 lg:col-span-2">
              <BuyerSellerForm />
            </div>

            {/* Benefits sidebar */}
            <div className="w-full min-w-0">
              <div className="sticky top-24 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Why Join the Buyer Seller Meet?
                  </h3>

                  
                </div>

                {[
                  {
                    icon: Zap,
                    title: "Curated Business Matching",
                    desc: "Connect with buyers and sellers matched to your products and business requirements.",
                  },
                  {
                    icon: Users,
                    title: "Pre-Scheduled B2B Meetings",
                    desc: "Meet relevant exporters, importers, manufacturers and buyers through focused 1:1 meetings.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Relevant Trade Connections",
                    desc: "Spend your time with businesses aligned with your sourcing and market interests.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Explore New Markets",
                    desc: "Discover new buyers, suppliers and opportunities to expand your domestic and international trade.",
                  },
                ].map((benefit) => {
                  const Icon = benefit.icon

                  return (
                    <div
                      key={benefit.title}
                      className="glass-card rounded-lg p-4"
                    >
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
                    <span className="font-semibold text-foreground">
                      🤝 B2B Meetings:
                    </span>{" "}
                    Register your business profile to connect with relevant buyers,
                    sellers, exporters and importers atdoexim Expo.
                  </p>
                </div>

                <CtaLink
                  href="/event"
                  variant="outline"
                  className="w-full justify-center"
                >
                  View Full Agenda
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* FAQs */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-heading text-2xl font-bold text-foreground">
            Buyer Seller Meet FAQs
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "Who can participate in the Buyer Seller Meet?",
                a: "Exporters, importers, manufacturers, buyers, distributors, traders and businesses looking for sourcing or trade partnerships can participate.",
              },
              {
                q: "How are buyers and sellers matched?",
                a: "Participants are matched based on their business profile, product categories, sourcing requirements and target markets.",
              },
              {
                q: "Can I request specific businesses to meet?",
                a: "Yes. You can share your preferred business categories and requirements during registration to help us identify relevant connections.",
              },
              {
                q: "What happens after I register?",
                a: "Our team reviews your business profile and identifies relevant buyers or sellers for focused B2B meetings atdoexim Expo.",
              },
              {
                q: "What should I bring to the meeting?",
                a: "Bring your company profile, product catalogue, pricing information and other business details that can help potential trade partners understand your offering.",
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