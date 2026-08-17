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
      <PageHero
        eyebrow="About doexim Expo"
        title="Connecting Global Import & Export Professionals"
        subtitle="Building international trade relationships by bringing together exhibitors, buyers and industry professionals from over 50 countries."
      />
      <section
        id="about"
        className="bg-white px-4 py-20 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              About doexim Expo
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              India's Emerging Global Trade & Export Exhibition
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              doexim Expo is a premier B2B platform dedicated to connecting
              manufacturers, exporters, importers, buyers, logistics companies,
              financial institutions, government organizations and trade
              professionals under one roof.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our mission is to create meaningful business opportunities,
              strengthen international trade relationships, showcase innovative
              products and services, and help Indian businesses expand into
              global markets.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border p-6">
              <h3 className="text-4xl font-bold text-primary">360+</h3>
              <p className="mt-2 font-semibold">Exhibitors</p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-4xl font-bold text-primary">20,000+</h3>
              <p className="mt-2 font-semibold">Visitors</p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="mt-2 font-semibold">Countries</p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-4xl font-bold text-primary">300+</h3>
              <p className="mt-2 font-semibold">B2B Meetings</p>
            </div>
          </div>
        </div>
      </section>
      {/* why doexim */}
      <section
        id="why-doexim"
        className="relative overflow-hidden bg-[#f8fafc] py-28 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-sky-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              WHY doexim EXPO
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
              Your Gateway to
              <span className="block text-sky-600">
                Global Trade Opportunities
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              doexim Expo connects manufacturers, exporters, importers,
              investors, and international buyers through networking,
              conferences, and business matchmaking.
            </p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-sky-500 via-slate-200 to-transparent" />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Reach
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  360+ Exhibitors across 10+ Countries
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Impact
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  20,000+ Visitors, endless business possibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why should attend */}
      <section
        id="why-attend"
        className="scroll-mt-24 bg-gradient-to-b from-white via-blue-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              WHY SHOULD ATTEND
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Meet the Right People.
              <span className="block text-primary">Grow Your Business.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              doexim Expo connects businesses, buyers and innovators from across
              the world to create meaningful trade opportunities.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🏭",
                title: "Manufacturers",
                color: "bg-blue-100",
              },
              {
                icon: "🚢",
                title: "Exporters",
                color: "bg-emerald-100",
              },
              {
                icon: "📦",
                title: "Importers",
                color: "bg-orange-100",
              },
              {
                icon: "🏢",
                title: "MSMEs",
                color: "bg-purple-100",
              },
              {
                icon: "🚀",
                title: "Startups",
                color: "bg-pink-100",
              },
              {
                icon: "🚛",
                title: "Logistics",
                color: "bg-cyan-100",
              },
              {
                icon: "🏦",
                title: "Banks",
                color: "bg-yellow-100",
              },
              {
                icon: "🤝",
                title: "Consultants",
                color: "bg-red-100",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-2xl"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-4xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-center text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary transition-all duration-500 group-hover:w-24" />

                <p className="mt-5 text-center text-sm leading-7 text-slate-600">
                  Connect, collaborate and discover new business opportunities
                  with global trade professionals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* event highlights */}

      <section id="expo-highlights" className="relative overflow-hidden bg-white py-24 scroll-mt-24">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_30%)]" />

  <div className="relative mx-auto max-w-7xl px-4">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Expo Highlights
      </span>

      <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        Everything That Makes
        <span className="block bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
          doexim Expo Exceptional
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Experience global networking, international buyers, conferences, and
        thousands of business opportunities under one roof.
      </p>
    </div>

    {/* Stats */}
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "B2B Meetings",
          subtitle: "Connect with verified buyers.",
        },
        {
          title: "Product Showcase",
          subtitle: "Display your latest innovations.",
        },
        {
          title: "Knowledge Sessions",
          subtitle: "Learn from industry experts.",
        },
        {
          title: "Business Networking",
          subtitle: "Build valuable business connections.",
        },
        {
          title: "Live Business",
          subtitle: "Generate quality business leads.",
        },
        {
          title: "Multiple Sectors",
          subtitle: "Explore diverse industry opportunities.",
        },
      ].map((item, index) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary">
            0{index + 1}
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-600">
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom */}
    <div className="mt-16 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-2xl sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
              ✓
            </span>
            <span className="text-sm font-medium text-white/95">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Vision & Mission */}
      {/* ================= VISION ================= */}
      <div className="mt-16 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
        <div className="grid lg:grid-cols-[120px_1fr]">
          {/* Left Icon */}

          <div className="relative flex items-center justify-center bg-[#173FD6]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

            <div className="relative z-10">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Eye className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Right Content */}

          <div className="p-7 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
                OUR VISION
              </span>

              <div className="h-[3px] flex-1 bg-[#173FD6]" />
            </div>

            <h2 className="mt-8 max-w-4xl font-heading text-3xl lg:text-[34px] font-bold leading-tight text-slate-900">
              To build India’s most trusted global trade ecosystem.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-600">
              Connecting Indian businesses with the right buyers, partners,
              services, knowledge and opportunities to grow beyond borders.
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-slate-500">
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
      <div className="mt-12 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
        <div className="grid lg:grid-cols-[120px_1fr]">
          {/* Left Icon */}

          <div className="relative flex items-center justify-center bg-[#173FD6]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

            <div className="relative z-10">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="p-10 lg:p-14">
            <div className="flex items-center gap-4">
              <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
                OUR MISSION
              </span>

              <div className="h-[3px] flex-1 bg-[#173FD6]" />
            </div>

            <h3 className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-slate-900">
              To create a powerful B2B trade platform that brings the entire
              EXIM ecosystem together under one roof.
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-slate-500">
              Enabling businesses to connect, learn, collaborate and grow
              globally.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#173FD6] hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-6 w-6 text-[#173FD6]" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
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

      {/* ================= EXHIBITION ZONES ================= */}

      <section
        id="zones"
        className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Exhibition Zones
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Explore Every Business Zone
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover dedicated exhibition zones designed for manufacturers,
              exporters, importers, logistics providers, financial institutions,
              technology companies and international trade partners.
            </p>
          </div>

          <ZonesGrid withImages />
        </div>
      </section>

      

      {/* ================= FAQ ================= */}

      <section
        id="faq"
        className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Everything You Need to Know
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Common questions about doexim Expo.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Who can attend doexim Expo?",
                a: "Manufacturers, Exporters, Importers, MSMEs, Logistics Companies, Government Organizations, Buyers and Trade Professionals.",
              },
              {
                q: "Is visitor registration free?",
                a: "Yes. Visitor registration is completely free through our official website.",
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 flex items-center justify-between">
                  {item.q}

                  <ChevronDown className="transition duration-300 group-open:rotate-180" />
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Global Business?
          </h2>
          <p className="mt-4 text-lg text-white/75">
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
