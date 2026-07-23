"use client"

import { useState } from "react"
import { MapPin, User } from "lucide-react"
import { AGENDA } from "@/lib/event-data"

const trackColors: Record<string, string> = {
  Keynote: "bg-gold/15 text-gold-foreground ring-gold/30",
  Robotics: "bg-primary/15 text-primary ring-primary/25",
  Vision: "bg-accent/15 text-accent ring-accent/25",
  Inspection: "bg-accent/15 text-accent ring-accent/25",
  Assembly: "bg-primary/15 text-primary ring-primary/25",
  Innovation: "bg-cta/15 text-cta ring-cta/25",
  Panel: "bg-secondary text-secondary-foreground ring-border",
  Networking: "bg-cta/15 text-cta ring-cta/25",
}

export function Agenda() {
  const [active, setActive] = useState(AGENDA[0].id)
  const day = AGENDA.find((d) => d.id === active) ?? AGENDA[0]

  return (
    <div>
      <div
        role="tablist"
        aria-label="Event days"
        className="mx-auto flex max-w-md gap-2 rounded-full bg-secondary p-1.5"
      >
        {AGENDA.map((d) => (
          <button
            key={d.id}
            role="tab"
            aria-selected={active === d.id}
            onClick={() => setActive(d.id)}
            className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              active === d.id
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <div className="mb-6 text-center">
          <p className="font-heading text-xl font-bold text-foreground">{day.date}</p>
          <p className="text-sm text-muted-foreground">
            Theme: <span className="font-medium text-accent">{day.theme}</span>
          </p>
        </div>

        <ol className="relative space-y-4 border-l-2 border-border pl-6">
          {day.sessions.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[31px] top-2 size-4 rounded-full border-2 border-background bg-primary" />
              <div className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-heading text-sm font-bold text-primary">{s.time}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${
                      trackColors[s.track] ?? "bg-secondary text-secondary-foreground ring-border"
                    }`}
                  >
                    {s.track}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold leading-snug text-foreground">{s.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="size-4" /> {s.speaker}
                    <span className="text-muted-foreground/70">— {s.role}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4" /> {s.hall}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
