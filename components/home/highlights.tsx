"use client"

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
} from "lucide-react"

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
]

const bottomFeatures = [
  "International Buyers",
  "Product Launches",
  "Startup Pavilion",
  "Government Participation",
  "Networking Lounge",
  "Export Workshops",
]

export function Highlights() {
  return (
    <>
      {/* New Expo Highlights Section */}
      <section
        id="expo-highlights"
      className="relative overflow-hidden bg-white pt-10 pb-10 scroll-mt-24"      >
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
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expoHighlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.subtitle}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom */}
          <div className="mt-10 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-2xl sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bottomFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-white/95">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}