import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SeminarForm } from "@/components/forms/seminar-form";
import { CtaLink } from "@/components/ui/cta";
import { GraduationCap, MapPin, Users, Award, BookOpen, Clock, CalendarDays } from "lucide-react";
import { EVENT } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "Seminar & Knowledge Summit Registration - DO EXIM Expo 2027",
  description:
    "Register for the DO EXIM Expo 2027 Seminar & Knowledge Summit. Access keynotes, policy masterclasses, and international trade workshops at Bombay Exhibition Centre, Mumbai.",
};

export default function SeminarRegistrationPage() {
  return (
    <>
      <div className="pt-14">
        <PageHero
          eyebrow="Seminar Registration"
          title="Seminar & Knowledge Summit Pass"
          subtitle="Join industry leaders, policymakers, trade financiers, and global market analysts for 3 days of actionable masterclasses and strategic keynotes."
        />
      </div>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Main form */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <SeminarForm />
              </div>
            </div>

            {/* Benefits sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-3.5 py-1.5 text-xs font-bold text-purple-700 dark:text-purple-400">
                  <GraduationCap className="size-4" /> SEMINAR DELEGATE PASS
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    What&apos;s Included in Your Seminar Pass?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Direct access to the Knowledge Summit Stage, masterclasses, and deal-making panels.
                  </p>
                </div>

                {[
                  {
                    icon: BookOpen,
                    title: "Access All Keynotes & Panels",
                    desc: "Hear from DGFT, FIEO, APEDA, ECGC, EXIM Bank leaders and international trade strategists.",
                  },
                  {
                    icon: Users,
                    title: "Speaker Q&A & Meetups",
                    desc: "Direct interactions with domain experts on LC structuring, freight logistics, and global market entry.",
                  },
                  {
                    icon: Award,
                    title: "Delegate Certificate & Materials",
                    desc: "Access session slide decks, export compliance whitepapers, and verified delegate pass.",
                  },
                  {
                    icon: MapPin,
                    title: "Full Expo Floor Access",
                    desc: "Includes complimentary entry across all 6 specialized exhibition zones in Halls 1 to 6.",
                  },
                ].map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="rounded-2xl border border-border/80 bg-muted/30 p-4 transition hover:bg-card">
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
                  );
                })}

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">📅 Dates:</span> {EVENT.dateLabel} • {EVENT.venueShort}
                  </p>
                </div>

                <CtaLink href="/seminar" variant="outline" className="w-full justify-center">
                  View Full Seminar Schedule
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why attend seminars */}
      <section className="bg-muted/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground">
            Why Attend the DO EXIM Knowledge Summit?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Government Policy Masterclasses",
                desc: "Gain firsthand insights into RoDTEP, Duty Drawback, EPCG schemes, Advance Authorization, and bilateral trade agreements.",
              },
              {
                title: "Export Finance & Risk De-Risking",
                desc: "Learn from top trade finance bankers on Letters of Credit, currency hedging, and ECGC export credit risk coverage.",
              },
              {
                title: "Global Supply Chain & Logistics Tech",
                desc: "Explore AI in global shipping, port clearance optimizations, multi-modal transport corridors, and freight strategies.",
              },
              {
                title: "International Buyer Acquisition",
                desc: "Discover tested B2B market entry models, international trade portals, and digital export branding techniques.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
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
    </>
  );
}
