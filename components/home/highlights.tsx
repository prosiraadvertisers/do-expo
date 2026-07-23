"use client"

import { BookOpen, Plane, Lightbulb, Users } from "lucide-react"

const items = [
  {
    icon: BookOpen,
    title: "Visitor Guide",
    desc: "Everything you need to plan a productive day on the trade floor.",
  },
  {
    icon: Plane,
    title: "Travel & Stay",
    desc: "Curated hotel partners and transit info for out-of-town delegates.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Awards",
    desc: "Discover breakthrough automation products competing on stage.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Pre-scheduled B2B meetings connecting buyers and sellers.",
  },
]

export function Highlights() {
  return (
    <section className="relative z-10 -mt-10 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-1 font-heading text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
