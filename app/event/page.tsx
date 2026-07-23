import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Agenda } from "@/components/event/agenda"
import { AgendaDownload } from "@/components/event/agenda-download"
import { EVENT } from "@/lib/event-data"
import { CalendarDays, MapPin, Ticket, Trophy, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Event & Agenda",
  description:
    "Explore the full three-day agenda for Automation Expo 2026 — keynotes, live demos, panels and the Buyer-Seller Deal Room. Download the agenda PDF.",
}

const keyDates = [
  { icon: Ticket, label: "Registration Opens", value: "12 Jan 2026" },
  { icon: Users, label: "Deal Room Matching", value: "01 Mar 2026" },
  { icon: CalendarDays, label: "Expo Days", value: EVENT.dateLabel },
  { icon: Trophy, label: "Innovation Awards", value: "20 Mar 2026" },
]

export default function EventPage() {
  return (
    <>
      <PageHero
        eyebrow="Event & Agenda"
        title="Three days. One automation universe."
        subtitle={`${EVENT.dateLabel} · ${EVENT.venue}`}
      />

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
    </>
  )
}
