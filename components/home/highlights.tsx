"use client";

import { useState } from "react";
import {
  Handshake,
  Package,
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * CONCEPT 5 — "Pass deck"
 * The six highlights sit stacked like a fanned deck of trade passes/boarding
 * passes. Clicking a numbered tab brings that pass to the front with a
 * satisfying rotate/settle motion. Very different rhythm from a static grid
 * — one focal object instead of six simultaneous ones.
 */

const expoHighlights = [
  {
    title: "B2B Meetings",
    subtitle: "Connect with quality buyers & sellers.",
    stat: "1,200+ meetings",
    icon: Handshake,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Product Sourcing",
    subtitle: "Discover new products & innovations.",
    stat: "500+ new products",
    icon: Package,
    gradient: "from-cyan-500 to-teal-700",
  },
  {
    title: "Knowledge Sessions",
    subtitle: "Expert talks on global trade & policies.",
    stat: "40+ expert sessions",
    icon: GraduationCap,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Business Networking",
    subtitle: "Build valuable business connections.",
    stat: "5,000+ connections",
    icon: Users,
    gradient: "from-violet-600 to-purple-800",
  },
  {
    title: "Live Business",
    subtitle: "Deals & collaborations on the spot.",
    stat: "150+ live deals",
    icon: Briefcase,
    gradient: "from-emerald-500 to-green-700",
  },
  {
    title: "Multiple Sectors",
    subtitle: "Explore diverse industry opportunities.",
    stat: "12 industries",
    icon: Building2,
    gradient: "from-amber-500 to-orange-700",
  },
];

export function Highlights() {
  const [active, setActive] = useState(0);
  const n = expoHighlights.length;
  const goPrev = () => setActive((a) => (a - 1 + n) % n);
  const goNext = () => setActive((a) => (a + 1) % n);

  return (
    <section
      id="expo-highlights"
      className="relative overflow-hidden bg-white py-12 sm:py-12"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
            Expo Highlights
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-black tracking-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Everything That Makes{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              doexim Expo
            </span>{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
              Exceptional
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-lg items-center gap-3 sm:mt-16 sm:gap-4 lg:gap-6">
          <button
            onClick={goPrev}
            aria-label="Previous highlight"
            className="flex size-8 shrink-0 -translate-x-3 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:border-slate-300 hover:text-slate-800 hover:shadow-md active:scale-95 sm:size-10"
          >
            <ChevronLeft className="size-4 sm:size-5" strokeWidth={2} />
          </button>

          <div className="relative h-[300px] min-w-0 flex-1 sm:h-[260px]">
            {expoHighlights.map((item, i) => {
              const Icon = item.icon;
              const offset = (i - active + n) % n;
              const isFront = offset === 0;
              const depth = offset <= n / 2 ? offset : offset - n;

              return (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${item.title}`}
                  className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-left shadow-lg transition-all duration-500 ease-out sm:rounded-3xl sm:p-7 ${item.gradient}`}
                  style={{
                    transform: `translateX(${depth * 10}px) translateY(${Math.abs(depth) * 5}px) rotate(${depth * 3}deg) scale(${isFront ? 1 : 0.94})`,
                    zIndex: 10 - Math.abs(depth),
                    opacity: Math.abs(depth) > 2 ? 0 : 1,
                    pointerEvents: isFront ? "none" : "auto",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white sm:size-11">
                      <Icon className="size-4 sm:size-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-[11px] font-bold text-white/70 sm:text-xs">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(n).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-white/85 sm:text-sm">
                      {item.subtitle}
                    </p>
                    <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900">
                      {item.stat}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={goNext}
            aria-label="Next highlight"
            className="flex size-8 shrink-0 translate-x-3 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:border-slate-300 hover:text-slate-800 hover:shadow-md active:scale-95 sm:size-10"
          >
            <ChevronRight className="size-4 sm:size-5" strokeWidth={2} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2 sm:mt-8">
          {expoHighlights.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              aria-label={`Go to ${item.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-slate-800"
                  : "w-1.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
