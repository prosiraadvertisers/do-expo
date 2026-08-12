import { PageHero } from "@/components/page-hero"
import {
  MapPin,
  Coffee,
  Users,
  Calendar,
  Building2,
  Globe,
  Handshake,
  ArrowRight,
  Plane,
  ClipboardCheck,
} from "lucide-react"

const ROUTE_STOPS = [
  {
    code: "NAG",
    city: "Nagpur",
    day: "Thursday",
    countdown: "1",
    activities: [
      { icon: Coffee, title: "VIP Networking Lunch", desc: "Exclusive networking opportunity" },
      { icon: Users, title: "Sponsors Meet", desc: "Connect with event sponsors" },
      { icon: ClipboardCheck, title: "Exhibitor Orientation", desc: "Prepare for the expo" },
    ],
  },
  {
    code: "PNQ",
    city: "Pune",
    day: "Friday",
    countdown: "2",
    activities: [
      { icon: Coffee, title: "VIP Networking Lunch", desc: "Exclusive networking opportunity" },
      { icon: Users, title: "Sponsors Meet", desc: "Connect with event sponsors" },
      { icon: ClipboardCheck, title: "Exhibitor Orientation", desc: "Prepare for the expo" },
    ],
  },
  {
    code: "BOM",
    city: "Mumbai",
    day: "Saturday",
    countdown: "3",
    activities: [
      { icon: Coffee, title: "VIP Networking Lunch", desc: "Exclusive networking opportunity" },
      { icon: Users, title: "Sponsors Meet", desc: "Connect with event sponsors" },
      { icon: ClipboardCheck, title: "Exhibitor Orientation", desc: "Prepare for the expo" },
    ],
  },
]

const METRICS = [
  { value: "500+", label: "Exhibitors", icon: Building2 },
  { value: "1000+", label: "B2B Meetings", icon: Handshake },
  { value: "3", label: "Event Days", icon: Calendar },
  { value: "50+", label: "Int'l Buyers", icon: Globe },
]

export default function PreEventPage() {
  return (
    <div className="min-h-screen bg-[#F4F2EC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <PageHero
        eyebrow="Complete Event Schedule"
        title="DoExim Expo 2024"
        subtitle="India's Gateway to Global Trade"
      >
        <p className="text-white/75 max-w-2xl mx-auto font-body">
          A comprehensive 3-day international trade exhibition featuring 500+ exhibitors,
          international buyers, and government participation
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <section className="mb-16">
          <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] text-[#E8912A] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#E8912A]/30 bg-[#E8912A]/5">
            Pre-Event Route
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-extrabold text-[#191244] tracking-tight leading-[1.05]">
            The Road to the Expo
          </h2>
          <p className="font-body text-lg text-[#5C6178] mt-4 max-w-2xl">
            Three cities, three days, one destination — a week of orientation and networking
            ahead of the main event floor.
          </p>
        </section>

        {/* Route */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
            {ROUTE_STOPS.map((stop, idx) => (
              <div key={stop.code} className="flex flex-col lg:flex-row lg:flex-1 lg:items-stretch">
                <div className="relative flex-1">
                  {/* countdown badge */}
                  <div className="absolute -top-6 -right-3 sm:right-6 w-14 h-14 rounded-full bg-linear-to-br from-[#F6C453] to-[#E8912A] shadow-lg shadow-[#E8912A]/30 flex items-center justify-center z-10">
                    <span className="font-display text-xs font-bold text-[#191244]">{stop.countdown}</span>
                  </div>

                  <div className="bg-white border border-[#191244]/8 rounded-3xl overflow-hidden shadow-sm h-full flex flex-col">
                    {/* card header */}
                    <div className="bg-linear-to-br from-[#2E1A6B] via-[#22338C] to-[#1B4FA0] px-6 py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-body text-white/50 text-xs font-medium tracking-[0.15em] uppercase mb-1">
                            Stop {String(idx + 1).padStart(2, "0")}
                          </p>
                          <p className="font-display text-3xl font-extrabold text-white tracking-tight">
                            {stop.code}
                          </p>
                        </div>
                        <MapPin className="w-5 h-5 text-white/40 mt-1" />
                      </div>
                      <div className="mt-4 flex items-baseline justify-between">
                        <h3 className="font-display text-white font-semibold text-lg">{stop.city}</h3>
                        <span className="font-body text-xs text-[#F6C453] font-medium uppercase tracking-wide">
                          {stop.day}
                        </span>
                      </div>
                    </div>

                    {/* activities */}
                    <div className="px-6 py-6 flex-1 flex flex-col gap-4">
                      {stop.activities.map((a, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#F4F2EC] flex items-center justify-center shrink-0 mt-0.5">
                            <a.icon className="w-4 h-4 text-[#1B4FA0]" />
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-[#191244]">{a.title}</p>
                            <p className="font-body text-xs text-[#5C6178] mt-0.5">{a.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* connector */}
                <div className="flex items-center justify-center py-3 lg:py-0 lg:px-4">
                  <ArrowRight className="w-5 h-5 text-[#191244]/20 rotate-90 lg:rotate-0" />
                </div>
              </div>
            ))}

            {/* Destination */}
            <div className="lg:w-52 shrink-0">
              <div className="bg-linear-to-br from-[#2E1A6B] via-[#22338C] to-[#1B4FA0] rounded-3xl p-6 h-full flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#F6C453] to-[#E8912A] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#191244] -rotate-45" />
                </div>
                <p className="font-body text-[#F6C453] text-xs font-semibold tracking-[0.15em] uppercase">
                  Destination
                </p>
                <p className="font-display text-2xl font-extrabold text-white leading-tight">
                  DoExim
                  <br />
                  Expo Floor
                </p>
                <p className="font-body text-xs text-white/60">3 Days · Main Venue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact stats */}
        <section>
          <div className="bg-linear-to-br from-[#2E1A6B] via-[#22338C] to-[#1B4FA0] rounded-3xl p-10 sm:p-14">
            <div className="flex items-baseline justify-between mb-10 flex-wrap gap-2">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Event Impact
              </h2>
              <span className="font-body text-xs font-semibold text-[#F6C453] tracking-[0.15em] uppercase">
                Expected Outcomes
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICS.map((metric, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#F6C453] to-[#E8912A] flex items-center justify-center mb-4">
                    <metric.icon className="w-5 h-5 text-[#191244]" />
                  </div>
                  <p className="font-display text-4xl font-extrabold text-white mb-1">{metric.value}</p>
                  <p className="font-body text-sm text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}