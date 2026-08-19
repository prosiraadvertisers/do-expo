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
    <PageHero
      title="Visit DO EXIM Expo"
    >
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

      <section
        id="why-attend"
        className="scroll-mt-24 bg-gradient-to-b from-white via-blue-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Who Should Attend
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
                icon: "🏬",
                title: "Wholesalers",
                color: "bg-cyan-100",
              },
              {
                icon: "🛍️",
                title: "Retail Chains",
                color: "bg-indigo-100",
              },
              {
                icon: "🚚",
                title: "Distributors",
                color: "bg-lime-100",
              },
              {
                icon: "🤝",
                title: "Trade Associations",
                color: "bg-red-100",
              },
              {
                icon: "🏛️",
                title: "Government Bodies",
                color: "bg-yellow-100",
              },
              {
                icon: "💰",
                title: "Investors",
                color: "bg-green-100",
              },
              {
                icon: "🎓",
                title: "Students",
                color: "bg-sky-100",
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

      <section id="visitor-registration" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] px-10 py-16 text-center text-white shadow-2xl">
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Visitor Registration
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Ready to Visit DO EXIM Expo?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Register now to meet exhibitors, attend conferences, explore
              innovations and build valuable business connections.
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

      <section id="visitor-faq" className="scroll-mt-24" />
    </>
  );
}
