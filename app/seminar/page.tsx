"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  MapPin,
  CalendarDays,
  Users,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Ticket,
} from "lucide-react";
import { useRegistration } from "@/components/registration/registration-context";
import { SeminarForm } from "@/components/forms/seminar-form";
import { CtaButton } from "@/components/ui/cta";

/**
 * TODO: swap for real sessions once confirmed. The whole schedule below is
 * driven off this array — add, remove, or reorder sessions/days here and
 * the timeline updates automatically. Nothing else needs to change.
 */
type Category = "Keynote" | "Panel" | "Workshop" | "Networking";

type Session = {
  time: string;
  title: string;
  speaker: string;
  speakerRole: string;
  venue: string;
  category: Category;
};

type Day = {
  id: string;
  label: string;
  date: string;
  sessions: Session[];
};

const SCHEDULE: Day[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "15 Dec 2027",
    sessions: [
      {
        time: "10:30 AM",
        title: "Navigating Global Export Opportunities in 2027",
        speaker: "Rajeev Malhotra",
        speakerRole: "Director General, FIEO",
        venue: "Main Hall",
        category: "Keynote",
      },
      {
        time: "11:30 AM",
        title: "De-risking Cross-Border Payments & Trade Finance",
        speaker: "Ananya Kapoor",
        speakerRole: "VP Trade Finance, HDFC Bank",
        venue: "Hall A",
        category: "Panel",
      },
      {
        time: "1:00 PM",
        title: "Hands-On: Structuring an LC-Backed Export Deal",
        speaker: "Priya Nair",
        speakerRole: "Trade Compliance Consultant",
        venue: "Workshop Room 1",
        category: "Workshop",
      },
      {
        time: "3:00 PM",
        title: "Exporter Meet & Greet",
        speaker: "All Speakers",
        speakerRole: "Open Networking",
        venue: "Expo Lounge",
        category: "Networking",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "16 Dec 2027",
    sessions: [
      {
        time: "10:30 AM",
        title: "AI & B2B global trade in Modern Supply Chains",
        speaker: "Dr. Meera Iyer",
        speakerRole: "Head of Supply Chain Tech, Reliance Logistics",
        venue: "Main Hall",
        category: "Keynote",
      },
      {
        time: "11:30 AM",
        title: "Last-Mile Freight: Ports, Rail & New Corridors",
        speaker: "Karan Bhatia",
        speakerRole: "COO, Bombay Exhibition Freight",
        venue: "Hall A",
        category: "Panel",
      },
      {
        time: "1:00 PM",
        title: "Getting Export-Ready: Certifications & Compliance",
        speaker: "Farah Sheikh",
        speakerRole: "Compliance Lead, ITPO",
        venue: "Workshop Room 1",
        category: "Workshop",
      },
      {
        time: "3:00 PM",
        title: "Closing Address: Where Indian Trade Goes Next",
        speaker: "Rajeev Malhotra",
        speakerRole: "Director General, FIEO",
        venue: "Main Hall",
        category: "Keynote",
      },
    ],
  },
];

const CATEGORY_STYLES: Record<Category, string> = {
  Keynote: "bg-[#191456] text-white",
  Panel: "border border-[#191456]/30 bg-[#191456]/5 text-[#191456]",
  Workshop: "bg-slate-900 text-white",
  Networking: "border border-slate-300 bg-white text-slate-700",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function SeminarPage() {
  const { open } = useRegistration();
  const [activeDay, setActiveDay] = useState(SCHEDULE[0].id);
  const day = SCHEDULE.find((d) => d.id === activeDay) ?? SCHEDULE[0];

  return (
    <>
      {/* ================= HERO (compact) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] pt-24 pb-14 text-white sm:pt-28 sm:pb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
            <GraduationCap className="size-4" /> DO EXIM Knowledge Summit
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            Learn. Connect. Grow Globally.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/85">
            Join industry experts, exporters, government officials and
            international trade leaders for insightful seminar sessions,
            networking and business opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => open("seminar")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#191456] shadow-lg transition hover:scale-105 hover:bg-slate-100"
            >
              <GraduationCap className="size-5" /> Get Seminar Pass
            </button>
            <Link
              href="#schedule"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/20"
            >
              View Schedule
            </Link>
            <Link
              href="/seminar-registration"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Dedicated Registration Page
            </Link>
          </div>

          <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm font-medium text-white/80">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4 text-white/60" />
              15 &amp; 16 Dec 2027
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-white/60" />
              Bombay Exhibition Centre, Mumbai
            </span>
            <span className="flex items-center gap-2">
              <Users className="size-4 text-white/60" />
              12+ Global Speakers
            </span>
          </div>
        </div>
      </section>

      {/* ================= SCHEDULE / TIMELINE ================= */}
      <section id="schedule" className="scroll-mt-24 bg-slate-50  pt-14 pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">
              Two Days of{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Sessions, Speakers &amp; Networking
              </span>
            </h2>
          </div>

          {/* Day tabs */}
          <div className="mt-12 flex justify-center gap-3">
            {SCHEDULE.map((d) => {
              const active = d.id === activeDay;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDay(d.id)}
                  className={`flex items-center gap-3 rounded-2xl border px-6 py-3.5 text-left transition-all duration-300 ${
                    active
                      ? "border-[#191456] bg-[#3021d4] text-white shadow-[0_10px_30px_rgba(25,20,86,0.25)]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#191456]/40"
                  }`}
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${
                      active ? "bg-white/15" : "bg-slate-100"
                    }`}
                  >
                    <CalendarDays
                      className={`size-4 ${active ? "text-white" : "text-[#191456]"}`}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{d.label}</span>
                    <span
                      className={`block text-xs ${active ? "text-white/70" : "text-slate-500"}`}
                    >
                      {d.date}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-slate-200 sm:block" />

            <div className="space-y-6">
              {day.sessions.map((session, i) => (
                <div
                  key={`${day.id}-${i}`}
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-start"
                >
                  <div className="relative z-10 hidden shrink-0 sm:block">
                    <span className="flex size-14 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-[0_4px_15px_rgba(15,23,42,0.08)]">
                      <span className="size-2.5 rounded-full bg-[#3024af]" />
                    </span>
                  </div>

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_15px_45px_rgba(15,23,42,0.12)] sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                        <Clock className="size-4 text-[#3126ad]" />
                        {session.time}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${CATEGORY_STYLES[session.category]}`}
                      >
                        {session.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <MapPin className="size-3.5 text-slate-400" />
                        {session.venue}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {session.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2b1ccb] to-[#3B4AC7] text-xs font-bold text-white">
                        {initials(session.speaker)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-slate-900">
                          {session.speaker}
                        </span>
                        <span className="block truncate text-xs text-slate-500">
                          {session.speakerRole}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INLINE REGISTRATION SECTION ================= */}
      <section
        id="registration"
        className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-3.5 py-1 text-xs font-bold text-purple-700 dark:text-purple-400">
              <GraduationCap className="size-4" /> Priority Knowledge Summit
              Access
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Register for Your Seminar Pass
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Complete your registration below to reserve your delegate seat for
              keynote addresses, export policy panels, and practical trade
              workshops.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 shadow-sm">
            <SeminarForm />
          </div>
        </div>
      </section>
    </>
  );
}
