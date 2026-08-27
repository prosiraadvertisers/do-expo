import type { Metadata } from "next";
import { ZonesGrid } from "@/components/zones-grid";
import { PageHero } from "@/components/page-hero";

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
  title: "Visitors | doexim Expo",
  description:
    "Visit doexim Expo to connect with exhibitors, discover innovations, attend knowledge sessions and grow your business network.",
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
    title: "Product Sourcing",
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

      <div className="pt-14">
        <PageHero title="Visit doexim Expo">
          <a
            href="#visitor-registration"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-[#191456] transition hover:scale-105"
          >
            Register Now
          </a>

          <a
            href="#why-visit"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
          >
            Explore More
          </a>
        </PageHero>
      </div>
      {/* ================= WHY VISIT ================= */}

      <section id="why-visit" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Why Visit
            </span>

            <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-slate-900 lg:text-5xl lg:whitespace-nowrap">
              Everything You Need{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h2>
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

      {/* ================= WHO SHOULD ATTEND ================= */}

      <section
        id="why-attend"
        className="scroll-mt-24 bg-gradient-to-b from-white via-blue-50 to-white pt-10 pb-4"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Who Should Attend
            </span>

            <h2 className="mt-5 w-full text-center text-3xl font-black tracking-tight text-slate-900 lg:text-5xl lg:whitespace-nowrap lg:-ml-22">
              Meet the Right People.
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Grow Your Business
              </span>
            </h2>
          </div>

          <div className="mt-16">
            {/* Two infinite marquee rows */}
            <div className="-mx-4 space-y-4 overflow-hidden sm:-mx-6">
              {/* Row 1 */}
              <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
                {[
                  {
                    icon: "🚢",
                    title: "Exporters",
                  },
                  {
                    icon: "📦",
                    title: "Importers",
                  },
                  {
                    icon: "🌍",
                    title: "Merchant Exporters",
                  },
                  {
                    icon: "🏭",
                    title: "Manufacturers",
                  },
                  {
                    icon: "🏢",
                    title: "MSMEs",
                  },
                  {
                    icon: "🚀",
                    title: "Startups",
                  },
                  {
                    icon: "🏬",
                    title: "Wholesalers",
                  },
                  {
                    icon: "🛍️",
                    title: "Retail Chains",
                  },
                  {
                    icon: "🚚",
                    title: "Distributors",
                  },
                  {
                    icon: "🤝",
                    title: "Trade Associations",
                  },
                  {
                    icon: "🏛️",
                    title: "Government Bodies",
                  },
                  {
                    icon: "💰",
                    title: "Investors",
                  },
                ]
                  .concat([
                    {
                      icon: "🚢",
                      title: "Exporters",
                    },
                    {
                      icon: "📦",
                      title: "Importers",
                    },
                    {
                      icon: "🌍",
                      title: "Merchant Exporters",
                    },
                    {
                      icon: "🏭",
                      title: "Manufacturers",
                    },
                    {
                      icon: "🏢",
                      title: "MSMEs",
                    },
                    {
                      icon: "🚀",
                      title: "Startups",
                    },
                    {
                      icon: "🏬",
                      title: "Wholesalers",
                    },
                    {
                      icon: "🛍️",
                      title: "Retail Chains",
                    },
                    {
                      icon: "🚚",
                      title: "Distributors",
                    },
                    {
                      icon: "🤝",
                      title: "Trade Associations",
                    },
                    {
                      icon: "🏛️",
                      title: "Government Bodies",
                    },
                    {
                      icon: "💰",
                      title: "Investors",
                    },
                  ])
                  .map((item, i) => (
                    <span
                      key={`row1-${i}`}
                      className="flex items-center gap-3 text-2xl font-bold text-slate-800 sm:text-3xl"
                    >
                      <span className="text-xl sm:text-2xl">{item.icon}</span>

                      {item.title}

                      <span className="text-slate-300">•</span>
                    </span>
                  ))}
              </div>

              {/* Row 2 */}
              <div className="marquee-track-reverse flex w-max gap-10 whitespace-nowrap">
                {[
                  {
                    icon: "🚢",
                    title: "Exporters",
                  },
                  {
                    icon: "📦",
                    title: "Importers",
                  },
                  {
                    icon: "🌍",
                    title: "Merchant Exporters",
                  },
                  {
                    icon: "🏭",
                    title: "Manufacturers",
                  },
                  {
                    icon: "🏢",
                    title: "MSMEs",
                  },
                  {
                    icon: "🚀",
                    title: "Startups",
                  },
                  {
                    icon: "🏬",
                    title: "Wholesalers",
                  },
                  {
                    icon: "🛍️",
                    title: "Retail Chains",
                  },
                  {
                    icon: "🚚",
                    title: "Distributors",
                  },
                  {
                    icon: "🤝",
                    title: "Trade Associations",
                  },
                  {
                    icon: "🏛️",
                    title: "Government Bodies",
                  },
                  {
                    icon: "💰",
                    title: "Investors",
                  },
                ]
                  .concat([
                    {
                      icon: "🚢",
                      title: "Exporters",
                    },
                    {
                      icon: "📦",
                      title: "Importers",
                    },
                    {
                      icon: "🌍",
                      title: "Merchant Exporters",
                    },
                    {
                      icon: "🏭",
                      title: "Manufacturers",
                    },
                    {
                      icon: "🏢",
                      title: "MSMEs",
                    },
                    {
                      icon: "🚀",
                      title: "Startups",
                    },
                    {
                      icon: "🏬",
                      title: "Wholesalers",
                    },
                    {
                      icon: "🛍️",
                      title: "Retail Chains",
                    },
                    {
                      icon: "🚚",
                      title: "Distributors",
                    },
                    {
                      icon: "🤝",
                      title: "Trade Associations",
                    },
                    {
                      icon: "🏛️",
                      title: "Government Bodies",
                    },
                    {
                      icon: "💰",
                      title: "Investors",
                    },
                  ])
                  .reverse()
                  .map((item, i) => (
                    <span
                      key={`row2-${i}`}
                      className="flex items-center gap-3 text-2xl font-bold text-primary/40 sm:text-3xl"
                    >
                      <span className="text-xl sm:text-2xl">{item.icon}</span>

                      {item.title}

                      <span className="text-slate-200">•</span>
                    </span>
                  ))}
              </div>
            </div>

            {/* Plain list with descriptions */}
            <div className="mx-auto mt-16 max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
              {[
                {
                  icon: "🚢",
                  title: "Exporters",
                  desc: "Expand your reach and find new international markets for your products.",
                },
                {
                  icon: "📦",
                  title: "Importers",
                  desc: "Source quality products directly from verified manufacturers and suppliers.",
                },
                {
                  icon: "🌍",
                  title: "Merchant Exporters",
                  desc: "Expand exports through trusted global partnerships.",
                },
                {
                  icon: "🏭",
                  title: "Manufacturers",
                  desc: "Showcase your production capabilities and connect with global buyers.",
                },
                {
                  icon: "🏢",
                  title: "MSMEs",
                  desc: "Grow your business with tailored support and networking opportunities.",
                },
                {
                  icon: "🚀",
                  title: "Startups",
                  desc: "Gain visibility, attract investors, and scale your innovative solutions.",
                },
                {
                  icon: "🏬",
                  title: "Wholesalers",
                  desc: "Discover bulk sourcing options and build long-term supplier relationships.",
                },
                {
                  icon: "🛍️",
                  title: "Retail Chains",
                  desc: "Find trending products and negotiate directly with manufacturers.",
                },
                {
                  icon: "🚚",
                  title: "Distributors",
                  desc: "Partner with brands and expand your distribution network across regions.",
                },
                {
                  icon: "🤝",
                  title: "Trade Associations",
                  desc: "Collaborate with industry bodies and promote sector-wide growth.",
                },
                {
                  icon: "🏛️",
                  title: "Government Bodies",
                  desc: "Support trade initiatives and connect with businesses for policy implementation.",
                },
                {
                  icon: "💰",
                  title: "Investors",
                  desc: "Explore high-potential businesses and investment opportunities in global trade.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-6"
                >
                  <span className="flex shrink-0 items-center gap-2 text-base font-bold text-slate-900 sm:w-56">
                    <span className="text-lg">{item.icon}</span>
                    {item.title}
                  </span>

                  <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Animation */}
          <style>{`
      .marquee-track {
        animation: marquee-left 32s linear infinite;
      }

      .marquee-track-reverse {
        animation: marquee-right 32s linear infinite;
      }

      @keyframes marquee-left {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      @keyframes marquee-right {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0);
        }
      }
    `}</style>
        </div>
      </section>

      <section id="visitor-registration" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] px-10 py-16 text-center text-white shadow-2xl">
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Visitor Registration
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Ready to Visit doexim Expo?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Register now to meet exhibitors, attend conferences, explore
              innovations and build valuable business connections.
            </p>

            <div className="mt-10">
              <Link
                href="/visitor-registration"
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

      <section
        id="zones"
        className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Exhibition Zones
            </span>

            <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-slate-900 lg:text-5xl lg:whitespace-nowrap">
              Six Dedicated{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Trade Zones
              </span>
            </h2>
          </div>

          <ZonesGrid withImages />
        </div>
      </section>

      <section id="visitor-faq" className="scroll-mt-24" />
    </>
  );
}
