import type { Metadata } from "next";

import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Building2,
  Ship,
  Boxes,
  Handshake,
  Rocket,
  Truck,
  Stamp,
  PackageCheck,
  Package,
  Anchor,
  Warehouse,
  FileText,
  Award,
  Landmark,
  ShieldCheck,
  Wallet,
  Compass,
  Building,
  Megaphone,
  Globe,
  Users2,
  Network,
  Sprout,
  PiggyBank,
  Share2,
  Laptop,
  Wrench,
} from "lucide-react";

import { CtaButton } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Visitors | DO EXIM Expo",
  description:
    "Visit DO EXIM Expo to connect with exhibitors, discover innovations, attend knowledge sessions and grow your business network.",
};

const whyVisit = [
  {
    icon: "🤝",
    title: "Meet Exhibitors",
    subtitle: "Connect with leading manufacturers and exporters.",
  },
  {
    icon: "🌍",
    title: "Global Opportunities",
    subtitle: "Explore international trade and sourcing.",
  },
  {
    icon: "📦",
    title: "Product Showcase",
    subtitle: "Discover the latest products and innovations.",
  },
  {
    icon: "🎤",
    title: "Knowledge Sessions",
    subtitle: "Learn from industry experts and speakers.",
  },
  {
    icon: "💼",
    title: "Business Networking",
    subtitle: "Build valuable business relationships.",
  },
  {
    icon: "🚀",
    title: "Growth Opportunities",
    subtitle: "Expand your business and market reach.",
  },
];

const attendees = [
  "Importers",
  "Exporters",
  "Manufacturers",
  "Wholesalers",
  "Retail Chains",
  "Distributors",
  "MSMEs",
  "Startups",
  "Trade Associations",
  "Government Bodies",
  "Investors",
  "Students",
];

export default function VisitorsPage() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] py-28 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            VISITOR INFORMATION
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-tight lg:text-6xl">
            Visit DO EXIM Expo
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/85">
            Meet exhibitors, discover innovations, attend expert sessions and
            build valuable business connections from across the globe.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#visitor-registration"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-[#191456] transition hover:scale-105"
            >
              Register Now
            </a>

            <a
              href="#why-visit"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY VISIT ================= */}

      <section id="why-visit" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Why Visit
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Everything You Need Under One Roof
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Discover products, connect with businesses and explore global
              opportunities through one powerful trade platform.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyVisit.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO SHOULD ATTEND ================= */}

      <section id="who-attend" className="scroll-mt-24 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Who Should Attend
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Designed for Every Trade Professional
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Whether you're growing your business or exploring new markets, DO
              EXIM Expo welcomes professionals from every sector.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {attendees.map((item) => (
              <div
                key={item}
                className="rounded-full border border-primary/15 bg-white px-6 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Part */}
      {/* Visitor Profile */}
      <section
        id="visitor-profile"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              One Platform. Every Trade Connection.
            </p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Visitor Profile
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A premium trade-floor destination for manufacturers, buyers,
              logistics experts, financiers, advisors, technology providers, and
              enablers looking to create meaningful global business connections.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {[
              {
                zone: "A",
                title: "Core Trade Profiles",
                description:
                  "The primary businesses that drive sourcing, buying, and selling across global trade channels.",
                items: [
                  {
                    icon: Factory,
                    title: "Manufacturers",
                    desc: "Showcase products, capabilities and connect with international buyers.",
                  },
                  {
                    icon: Building2,
                    title: "MSMEs",
                    desc: "Explore export opportunities, government schemes and global markets.",
                  },
                  {
                    icon: Ship,
                    title: "Merchant Exporters",
                    desc: "Discover products, suppliers and new international markets.",
                  },
                  {
                    icon: Boxes,
                    title: "Importers",
                    desc: "Source products and connect with Indian manufacturers and suppliers.",
                  },
                  {
                    icon: Handshake,
                    title: "International Buyers",
                    desc: "Discover export-ready products and connect directly with Indian suppliers.",
                  },
                  {
                    icon: Rocket,
                    title: "Merchant Importers",
                    desc: "Learn how to start exporting and secure your first international order.",
                  },
                ],
              },
              {
                zone: "B",
                title: "Logistics, Packaging & Compliance",
                description:
                  "The support network that moves, protects, clears, and certifies trade across borders.",
                items: [
                  {
                    icon: Truck,
                    title: "Freight Forwarders",
                    desc: "Connect with exporters requiring international freight and shipping solutions.",
                  },
                  {
                    icon: Stamp,
                    title: "Custom House Agents",
                    desc: "Support exporters with customs clearance, documentation and compliance.",
                  },
                  {
                    icon: PackageCheck,
                    title: "Logistics Providers",
                    desc: "Provide shipping, warehousing and supply chain solutions to exporters.",
                  },
                  {
                    icon: Package,
                    title: "Packaging Companies",
                    desc: "Connect with exporters looking for international-standard packaging solutions.",
                  },
                  {
                    icon: Anchor,
                    title: "Shipping Lines",
                    desc: "Connect with exporters requiring ocean, air and multimodal transportation.",
                  },
                  {
                    icon: Warehouse,
                    title: "Warehousing",
                    desc: "Provide storage, consolidation and supply chain services for international trade.",
                  },
                  {
                    icon: FileText,
                    title: "Documentation Professionals",
                    desc: "Assist businesses with shipping documents, certificates and export compliance.",
                  },
                  {
                    icon: Award,
                    title: "Certification Agencies",
                    desc: "Support exporters with product standards, certification and quality requirements.",
                  },
                ],
              },
              {
                zone: "C",
                title: "Finance & Insurance",
                description:
                  "Financial partners who enable secure, scalable, and cross-border business growth.",
                items: [
                  {
                    icon: Landmark,
                    title: "Banks",
                    desc: "Provide export finance, international payments and trade banking solutions.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Export Credit",
                    desc: "Support exporters with credit protection, insurance and risk management.",
                  },
                  {
                    icon: Wallet,
                    title: "Trade Finance",
                    desc: "Help businesses access packing credit, buyer credit and export financing.",
                  },
                ],
              },
              {
                zone: "D",
                title: "Government & Trade Bodies",
                description:
                  "Institutions, advisors, and networks that strengthen policy, access, and market readiness.",
                items: [
                  {
                    icon: Compass,
                    title: "Export Consultants",
                    desc: "Guide businesses on export documentation, compliance and global trade.",
                  },
                  {
                    icon: Building,
                    title: "Government Agencies",
                    desc: "Support exporters through schemes, registrations and trade facilitation.",
                  },
                  {
                    icon: Megaphone,
                    title: "Export Promotion Organisations",
                    desc: "Connect with exporters through training, market intelligence and global trade initiatives.",
                  },
                  {
                    icon: Globe,
                    title: "Embassies",
                    desc: "Build international trade connections and facilitate cross-border opportunities.",
                  },
                  {
                    icon: Users2,
                    title: "Chambers of Commerce",
                    desc: "Connect businesses with international trade networks and market opportunities.",
                  },
                  {
                    icon: Network,
                    title: "Industry Associations",
                    desc: "Connect members with export opportunities, training and international business networks.",
                  },
                  {
                    icon: Sprout,
                    title: "Government Incubators",
                    desc: "Support export-focused startups with mentorship, funding and growth opportunities.",
                  },
                  {
                    icon: PiggyBank,
                    title: "Investors",
                    desc: "Discover promising export startups and scalable international businesses.",
                  },
                ],
              },
              {
                zone: "E",
                title: "Technology & Marketing",
                description:
                  "Digital partners who help companies automate outreach, visibility, and sales growth.",
                items: [
                  {
                    icon: Share2,
                    title: "Digital Marketing Agencies",
                    desc: "Help exporters generate international leads and build their global presence.",
                  },
                  {
                    icon: Laptop,
                    title: "Export Technology",
                    desc: "Showcase digital tools for lead generation, CRM, documentation and trade automation.",
                  },
                ],
              },
              {
                zone: "F",
                title: "General Trade Enablers",
                description:
                  "Specialist partners offering the extra support needed to keep trade moving smoothly.",
                items: [
                  {
                    icon: Wrench,
                    title: "Trade Service Providers",
                    desc: "Connect with businesses requiring logistics, finance, compliance and EXIM support.",
                  },
                ],
              },
            ].map((group) => (
              <div
                key={group.zone}
                className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative flex w-full shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary px-6 py-7 text-white sm:px-7 lg:w-[240px] lg:min-h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_28%)]" />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                          <span className="text-2xl font-bold tracking-tight">
                            {group.zone}
                          </span>
                        </div>
                        <div>
                          <h3 className="mt-1 text-xl font-semibold leading-tight">
                            {group.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-white/78">
                        {group.description}
                      </p>
                    </div>

                    <div className="relative mt-8 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                      {String(group.items.length).padStart(2, "0")} Profiles
                    </div>
                  </div>

                  <div className="relative flex-1 bg-gradient-to-b from-white to-slate-50/50 px-5 py-6 sm:px-6 lg:px-8">
                    <div className="absolute right-5 top-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                      {String(group.items.length).padStart(2, "0")} Profiles
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 xl:grid-cols-3">
                      {" "}
                      {group.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                          >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="flex-1">
                              <h3 className="text-[15px] font-semibold text-slate-900">
                                {item.title}
                              </h3>

                              <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-600">
                                {item.desc}
                              </p>
                            </div>

                            <ArrowRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/exhibit">
              <CtaButton variant="cta">
                Explore Exhibiting Opportunities
              </CtaButton>
            </Link>
          </div>
        </div>
      </section>

      
<section
  id="visitor-registration"
  className="scroll-mt-24 py-24"
>
  <div className="mx-auto max-w-6xl px-4">

    <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] px-10 py-16 text-center text-white shadow-2xl">

      <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
        Visitor Registration
      </span>

      <h2 className="mt-6 text-4xl font-bold">
        Ready to Visit DO EXIM Expo?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
        Register now to meet exhibitors, attend conferences,
        explore innovations and build valuable business connections.
      </p>

      <div className="mt-10">

        <Link
          href="/free-visitor-registration"
          className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#191456] transition hover:scale-105"
        >
          Register Now →
        </Link>

      </div>

      <p className="mt-6 text-sm text-white/70">
        Already accepting visitor registrations.
      </p>

    </div>

  </div>
</section>

      <section id="visitor-faq" className="scroll-mt-24" />
    </>
  );
}
