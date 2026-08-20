"use client";

import {
  BookOpen,
  Plane,
  Lightbulb,
  Users,
  Handshake,
  Package,
  GraduationCap,
  Briefcase,
  Building2,
} from "lucide-react";

const expoHighlights = [
  {
    title: "B2B Meetings",
    subtitle: "Connect with quality buyers & sellers.",
    icon: Handshake,
  },
  {
    title: "Product Sourcing",
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
];

const bottomFeatures = [
  "B2B Meetings",
  "Product Sourcing",
  "Knowledge Sessions",
  "Business Networking",
  "Live Business",
  "Multiple Sectors",
  "International Buyers",
  "Product Launches",
  "Startup Pavilion",
  "Government Participation",
  "Networking Lounge",
  "Export Workshops",
];

export function Highlights() {
  return (
    <>
      
      {/* New Expo Highlights Section */}
      <section
        id="expo-highlights"
        className="relative overflow-hidden bg-white pt-10 pb-10 scroll-mt-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
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

          {/* Bottom */}
          {/* Bottom */}
          <div className="mt-10 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-2xl sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bottomFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
