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
  {
    icon: "🎓",
    title: "Students",
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

          <div className="mt-16">
            {/* Two infinite marquee rows, scrolling opposite directions.
                Purely decorative/motion-driven — no cards, no boxes. */}
            <div className="-mx-4 space-y-4 overflow-hidden sm:-mx-6">
              <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
                {[...attendeeTypes, ...attendeeTypes].map((item, i) => (
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

              <div className="marquee-track-reverse flex w-max gap-10 whitespace-nowrap">
                {[...attendeeTypes, ...attendeeTypes]
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

            {/* Plain row-list with descriptions — dividers only, no card
                background, no border-radius boxes */}
            <div className="mx-auto mt-16 max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
              {attendeeTypes.map((item) => (
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

          <style>{`
            .marquee-track {
              animation: marquee-left 32s linear infinite;
            }
            .marquee-track-reverse {
              animation: marquee-right 32s linear infinite;
            }
            @keyframes marquee-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              from { transform: translateX(-50%); }
              to { transform: translateX(0); }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
