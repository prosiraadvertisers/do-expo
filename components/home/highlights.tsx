"use client"

import { BookOpen, Plane, Lightbulb, Users } from "lucide-react"

const items = [
  {
    icon: BookOpen,
    title: "Importer & Exporter Guide",
    desc: "Everything you need to plan successful meetings and discover global trade opportunities.",
  },
  {
    icon: Plane,
    title: "International Delegates",
    desc: "Travel assistance, hotel partners and visa support for overseas visitors.",
  },
  {
    icon: Lightbulb,
    title: "Trade Opportunities",
    desc: "Explore innovative products, sourcing solutions and emerging international markets.",
  },
  {
    icon: Users,
    title: "B2B Matchmaking",
    desc: "Pre-scheduled meetings connecting manufacturers, exporters, importers and global buyers.",
  },
]

export function Highlights() {
  return (
    <section className="relative z-10 -mt-12 px-4 sm:-mt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card group rounded-3xl p-6 transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 group-hover:scale-110">
              <item.icon
                className="h-7 w-7 opacity-100"
                strokeWidth={2.5}
              />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-3xl font-bold text-slate-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-base leading-8 text-slate-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
