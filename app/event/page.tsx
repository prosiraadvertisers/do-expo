import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Agenda } from "@/components/event/agenda"
import { AgendaDownload } from "@/components/event/agenda-download"
import { EVENT, PARALLEL_ZONES, CONTINUOUS_FEATURES, EXPECTED_AUDIENCE } from "@/lib/event-data"
import { CalendarDays, MapPin, Ticket, Trophy, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Event & Agenda",
  description:
    "Explore the full three-day agenda for the doexim Global Trade Expo 2027 — keynotes, masterclasses, panels and the Business Matchmaking Lounge. Download the agenda.",
}

const keyDates = [
  { icon: Ticket, label: "Registration Opens", value: "15 Jun 2027" },
  { icon: Users, label: "Buyer-Seller Matching", value: "01 Mar 2027" },
  { icon: CalendarDays, label: "Expo Days", value: EVENT.dateLabel },
  { icon: Trophy, label: "Export Excellence Awards", value: "17 Dec 2027" },
]

export default function EventPage() {
  return (
    <>
  <div className="pt-14">
    <PageHero
      title={EVENT.tagline}
      subtitle={`${EVENT.dateLabel} · ${EVENT.venue}`}
    />
  </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {keyDates.map((k) => (
              <div key={k.label} className="glass-card rounded-2xl p-5 text-center">
                <k.icon className="mx-auto mb-2 size-6 text-accent" />
                <p className="font-heading text-lg font-bold text-foreground">{k.value}</p>
                <p className="text-xs text-muted-foreground">{k.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Full event schedule
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Browse the day-wise programme of keynotes, technical sessions, live demonstrations and networking. Times
              are shown in IST at {EVENT.venueShort}.
            </p>
            <AgendaDownload />
          </div>

          <Agenda />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Four parallel zones
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Every session runs alongside a dedicated business zone on the show floor.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARALLEL_ZONES.map((z) => (
              <div key={z.name} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{z.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{z.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Continuous features, all 3 days
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTINUOUS_FEATURES.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Who you'll meet
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {EXPECTED_AUDIENCE.map((a) => (
              <span
                key={a}
                className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground ring-1 ring-border"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}