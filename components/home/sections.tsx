"use client";

import {
  Building2,
  TrendingUp,
  Handshake,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react";
import { ZonesGrid } from "@/components/zones-grid";
import { CtaButton, CtaLink } from "@/components/ui/cta";
import { useRegistration } from "@/components/registration/registration-context";

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}

const stats = [
  { icon: Building2, value: "1000+", label: "Exhibitors" },
  { icon: Globe2, value: "50+", label: "Countries" },
  { icon: TrendingUp, value: "25,000+", label: "Trade Visitors" },
  { icon: Handshake, value: "5000+", label: "Business Meetings" },
];

const testimonials = [
  {
    quote:
      "The Deal Room alone paid back our stand cost within the first morning. The quality of buyers was exceptional.",
    name: "Vikram Shah",
    role: "Head of B2B global trade, AxisRobo",
  },
  {
    quote:
      "As a startup, the Innovation Zone gave us a stage in front of investors we could never have reached otherwise.",
    name: "Nisha Kapoor",
    role: "CEO, ForgeAI",
  },
  {
    quote:
      "Best-organised industrial expo in the region. We closed three distribution deals across the three days.",
    name: "Meera Iyer",
    role: "VP Engineering, NovaVision",
  },
];

const partners = [
  "AxisRobo",
  "NovaVision",
  "ForgeAI",
  "AssembleX",
  "PrecisionMetric",
  "SenseGrid",
  "CoboWorks",
  "OptiScan",
];

const news = [
  {
    tag: "Announcement",
    title: "doexim Expo 2027 registrations are now open",
    date: "21 April 2027",
    desc: "Visitor registrations and exhibitor bookings are now available for the upcoming international trade exhibition.",
  },
  {
    tag: "International Trade",
    title: "50+ countries confirm participation",
    date: "28 Jan 2027",
    desc: "Global buyers, exporters and trade organizations are preparing to showcase opportunities from around the world.",
  },
  {
    tag: "Business",
    title: "Dedicated B2B Matchmaking Program announced",
    date: "05 Feb 2027",
    desc: "Pre-scheduled business meetings will help importers, exporters and manufacturers build valuable partnerships.",
  },
];

const attendeeTypes = [
  {
    icon: "🏭",
    title: "Manufacturers",
    color: "bg-blue-100",
    desc: "Showcase your production capabilities and connect with global buyers.",
  },
  {
    icon: "🚢",
    title: "Exporters",
    color: "bg-emerald-100",
    desc: "Expand your reach and find new international markets for your products.",
  },
  {
    icon: "📦",
    title: "Importers",
    color: "bg-orange-100",
    desc: "Source quality products directly from verified manufacturers and suppliers.",
  },
  {
    icon: "🏢",
    title: "MSMEs",
    color: "bg-purple-100",
    desc: "Grow your business with tailored support and networking opportunities.",
  },
  {
    icon: "🚀",
    title: "Startups",
    color: "bg-pink-100",
    desc: "Gain visibility, attract investors, and scale your innovative solutions.",
  },
  {
    icon: "🏬",
    title: "Wholesalers",
    color: "bg-cyan-100",
    desc: "Discover bulk sourcing options and build long-term supplier relationships.",
  },
  {
    icon: "🛍️",
    title: "Retail Chains",
    color: "bg-indigo-100",
    desc: "Find trending products and negotiate directly with manufacturers.",
  },
  {
    icon: "🚚",
    title: "Distributors",
    color: "bg-lime-100",
    desc: "Partner with brands and expand your distribution network across regions.",
  },
  {
    icon: "🤝",
    title: "Trade Associations",
    color: "bg-red-100",
    desc: "Collaborate with industry bodies and promote sector-wide growth.",
  },
  {
    icon: "🏛️",
    title: "Government Bodies",
    color: "bg-yellow-100",
    desc: "Support trade initiatives and connect with businesses for policy implementation.",
  },
  {
    icon: "💰",
    title: "Investors",
    color: "bg-green-100",
    desc: "Explore high-potential businesses and investment opportunities in global trade.",
  },
  {
    icon: "🎓",
    title: "Students",
    color: "bg-sky-100",
    desc: "Learn about international trade, network with professionals, and explore careers.",
  },
];

export function HomeSections() {
  const { open } = useRegistration();
  return (
    <>
      {/* About snapshot */}

      {/* Why Attend */}
      <section
        id="why-attend"
        className="scroll-mt-24 bg-gradient-to-b from-white via-blue-50 to-white pt-10 pb-24"
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

          <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {attendeeTypes.map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-2xl sm:p-8"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-3xl text-3xl ${item.color} sm:h-20 sm:w-20 sm:text-4xl`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-center text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
                  {item.title}
                </h3>

                <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary transition-all duration-500 group-hover:w-24 sm:mt-4" />

                <p className="mt-4 text-center text-sm leading-7 text-slate-600 sm:mt-5">
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
