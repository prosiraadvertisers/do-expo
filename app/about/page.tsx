import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaButton } from "@/components/ui/cta";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  Ship,
  Handshake,
  Building2,
  Factory,
  Boxes,
  Truck,
  Wrench,
  Rocket,
  Stamp,
  PackageCheck,
  Package,
  Anchor,
  Warehouse,
  Landmark,
  ShieldCheck,
  Wallet,
  Compass,
  Building,
  Megaphone,
  Users2,
  Network,
  Sprout,
  PiggyBank,
  Share2,
  Laptop,
  FileText,
  Eye,
  BookOpen,
  ArrowRight,
  Star,
  Presentation,
  UsersRound,
  Globe2,
  BriefcaseBusiness,
  Sparkles,
  ChevronDown,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { ZonesGrid } from "@/components/zones-grid";

export const metadata: Metadata = {
  title: "About doexim Expo",
  description:
    "Learn about doexim Expo – Connecting global import & export professionals since 2020. Discover international trade opportunities, business networking and global partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-14">
        <PageHero title="Connecting Global Export & Import Professionals" />
      </div>
      <section
        id="about"
        className="bg-white px-4 py-20 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              About doexim Expo
            </span>

            <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-slate-900 lg:text-left lg:text-5xl lg:whitespace-nowrap">
  Where Indian Business Meets{" "}
  <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
    Global Opportunity
  </span>
</h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              doexim expo is a next-generation B2B international trade platform
              created to connect Indian businesses with buyers, partners,
              service providers and opportunities across global markets.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              More than an exhibition, doexim expo brings the complete
              Export–Import ecosystem under one roof—from manufacturers,
              exporters and merchant exporters to international buyers,
              logistics companies, freight forwarders, Customs House Agents,
              banks, insurance companies, government bodies, trade associations
              and technology providers.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our objective is simple: turn business visibility into meaningful
              business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="px-4 sm:px-6 lg:px-8">
        <span className="relative left-6 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          Our Vision & Mission
        </span>

        {/* ================= VISION ================= */}
        <div className="mt-12 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[120px_1fr]">
            {/* Left Icon */}
            <div className="relative flex items-center justify-center bg-[#173FD6] p-8 lg:p-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

              <div className="relative z-10">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-4">
                <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
                  VISION
                </span>

                <div className="h-[3px] flex-1 bg-[#173FD6]" />
              </div>

              <h2 className="mt-6 max-w-4xl font-heading text-2xl lg:text-[34px] font-bold leading-tight text-slate-900">
                To build India's most trusted global trade ecosystem.
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 lg:text-base">
                Connecting Indian businesses with the right buyers, partners,
                services, knowledge and opportunities to grow beyond borders.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-500 lg:text-base lg:leading-8">
                doexim Trade Expo envisions a future where every Indian exporter,
                manufacturer, merchant exporter, service provider and trade
                professional can access global markets, build meaningful business
                relationships and discover new opportunities through one
                integrated platform.
              </p>
            </div>
          </div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[120px_1fr]">
            {/* Left Icon */}
            <div className="relative flex items-center justify-center bg-[#173FD6] p-8 lg:p-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

              <div className="relative z-10">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <Target className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-6 lg:p-14">
              <div className="flex items-center gap-4">
                <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
                  MISSION
                </span>

                <div className="h-[3px] flex-1 bg-[#173FD6]" />
              </div>

              <h3 className="mt-6 max-w-4xl text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
                To create a powerful B2B trade platform that brings the entire
                EXIM ecosystem together under one roof.
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Handshake,
                    title: "Connect",
                    desc: "Exporters, manufacturers, importers, buyers and trade professionals.",
                  },
                  {
                    icon: Users,
                    title: "Business Opportunities",
                    desc: "Curated B2B meetings and strategic networking.",
                  },
                  {
                    icon: Globe,
                    title: "Market Access",
                    desc: "Discover domestic and international markets.",
                  },
                  {
                    icon: BookOpen,
                    title: "Trade Knowledge",
                    desc: "Conferences, government sessions and EXIM learning.",
                  },
                  {
                    icon: Network,
                    title: "EXIM Ecosystem",
                    desc: "Logistics, customs, finance and certification partners.",
                  },
                  {
                    icon: Rocket,
                    title: "Global Growth",
                    desc: "Support MSMEs and promote Indian products worldwide.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#173FD6] hover:bg-white hover:shadow-lg sm:p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-[#173FD6] sm:h-6 sm:w-6" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="expo-highlights"
        className="relative overflow-hidden bg-white pt-16 pb-10 scroll-mt-24 sm:pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Expo Highlights
            </span>

            <div className="mx-auto w-full max-w-[1800px] px-4 text-center">
              <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-slate-900 lg:text-4xl xl:text-5xl">
                Everything That Makes{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  doexim Expo Exceptional
                </span>
              </h2>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "B2B Meetings",
                subtitle: "Connect with quality buyers & sellers.",
                icon: Handshake,
              },
              {
                title: "Product Showcase",
                subtitle: "Discover new products & innovations.",
                icon: Package,
              },
              {
                title: "Knowledge Sessions",
                subtitle:
                  "Expert talks on global trade & policies. Learn from industry experts.",
                icon: GraduationCap,
              },
              {
                title: "Business Networking",
                subtitle: "Build valuable business connections.",
                icon: Users,
              },
              {
                title: "Live Business",
                subtitle: "Deals & collaborations on the spot.",
                icon: Briefcase,
              },
              {
                title: "Multiple Sectors",
                subtitle: "Explore diverse industry opportunities.",
                icon: Building2,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:mt-4">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-10 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white shadow-2xl sm:p-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "International Buyers",
                "Product Launches",
                "Startup Pavilion",
                "Government Participation",
                "Networking Lounge",
                "Export Workshops",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm sm:py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                    ✓
                  </span>
                  <span className="text-xs font-medium text-white/95 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-24 bg-slate-50 px-4 pt-10 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Who can attend doexim Expo?",
                a: "Manufacturers, Exporters, Importers, MSMEs, Logistics Companies, Government Organizations, Buyers and Trade Professionals.",
              },
              {
                q: "Why is there a registration fee for visitors?",
                a: "The registration fee helps us maintain genuine participation and minimize non-business visitors.",
              },
              {
                q: "Can international buyers participate?",
                a: "Yes. International buyers and delegates are invited to participate.",
              },
              {
                q: "How can I book an exhibition stall?",
                a: "Visit the Book Your Space page and submit your enquiry.",
              },
              {
                q: "Will there be conferences and seminars?",
                a: "Yes. Industry experts and government officials will conduct multiple sessions.",
              },
              {
                q: "Are networking opportunities available?",
                a: "Yes. Dedicated B2B meetings and networking sessions will be organized.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-6"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 flex items-center justify-between sm:text-lg">
                  {item.q}

                  <ChevronDown className="h-5 w-5 transition duration-300 group-open:rotate-180" />
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
            Ready to Grow Your Global Business?
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Whether you're an exporter, importer, manufacturer or international
            buyer, doexim Expo is your gateway to global trade opportunities and
            meaningful business partnerships.
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