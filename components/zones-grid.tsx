"use client";

import { Tag } from "lucide-react";
import { useState } from "react";
import { ZONES } from "@/lib/event-data";


export function ZonesGrid({ withImages }: { withImages?: boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const palettes = [
    "from-emerald-500 to-green-700",
    "from-sky-500 to-blue-700",
    "from-orange-400 to-orange-600",
    "from-violet-500 to-purple-700",
    "from-teal-400 to-teal-700",
    "from-amber-400 to-orange-500",
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {ZONES.map((zone, idx) => {
        const grad = palettes[idx % palettes.length];
        const isExpanded = expanded === zone.slug;

        return (
          <div
            key={zone.slug}
            id={`zone-${zone.slug}`}
            onClick={() => setExpanded(isExpanded ? null : zone.slug)}
            aria-expanded={isExpanded}
            className={`
              group relative h-[280px] cursor-pointer overflow-hidden
              rounded-3xl
              bg-gradient-to-br ${grad}
              p-7
              shadow-xl shadow-primary/10
              transition-all duration-500 ease-out
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:shadow-2xl
              ${isExpanded ? "-translate-y-3 scale-[1.02] shadow-2xl" : ""}
            `}
          >
            {/* Decorative top circle */}
            <div
              className="
                pointer-events-none
                absolute -right-20 -top-20
                h-56 w-56
                rounded-full
                bg-white/15
              "
            />

            {/* Decorative bottom circle */}
            <div
              className="
                pointer-events-none
                absolute -bottom-24 -left-20
                h-56 w-56
                rounded-full
                bg-black/10
              "
            />

            {/* =========================
                NORMAL CARD CONTENT
            ========================== */}

            {/* Zone label */}
            <span
              className={`
                absolute left-5 top-5 z-10
                inline-flex items-center gap-1.5
                rounded-full
                border border-white/25
                bg-white/20
                px-3 py-1
                text-[11px] font-bold
                uppercase tracking-wider
                text-white
                backdrop-blur-md
                transition-all duration-300
                ${
                  isExpanded
                    ? "-translate-y-3 opacity-0"
                    : "translate-y-0 opacity-100 group-hover:-translate-y-3 group-hover:opacity-0"
                }
              `}
            >
              Zone {idx + 1}
            </span>

            {/* Icon */}
            <div
              className={`
    absolute left-1/2 top-7 z-10
    flex h-14 w-14
    -translate-x-1/2
    items-center justify-center
    rounded-2xl
    border border-white/20
    bg-white/20
    text-white
    shadow-md
    backdrop-blur-md
    transition-all duration-300
    ${
      isExpanded
        ? "-translate-x-1/2 -translate-y-3 opacity-0"
        : "-translate-x-1/2 translate-y-0 opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-3 group-hover:opacity-0"
    }
  `}
            >
              <zone.icon className="h-7 w-7" />
            </div>

            {/* Zone Title */}
            <div
              className={`
    absolute left-7 right-7 top-[120px] z-10
    transition-all duration-300 ease-out
    ${
      isExpanded
        ? "-translate-y-5 opacity-0"
        : "translate-y-0 opacity-100 group-hover:-translate-y-5 group-hover:opacity-0"
    }
  `}
            >
              <h3 className="text-center text-2xl font-bold leading-snug text-white">
                {zone.name}
              </h3>
            </div>

            {/* =========================
                CATEGORIES HOVER CONTENT
            ========================== */}

            <div
              className={`
                absolute
                left-7 right-7
                top-7 bottom-6
                z-20
                flex flex-col
                transition-all duration-300 ease-out

                ${
                  isExpanded
                    ? "translate-y-0 opacity-100"
                    : `
                      pointer-events-none
                      translate-y-5
                      opacity-0
                      group-hover:pointer-events-auto
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    `
                }
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Categories Heading */}
              <div className="mb-4 flex shrink-0 items-center gap-2">
                <Tag className="h-4 w-4 shrink-0 text-white" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  "
                >
                  Categories
                </span>
              </div>

              {/* Categories List */}
              <div
                className="
                  flex
                  min-h-0
                  flex-1
                  flex-wrap
                  content-start
                  gap-2
                  overflow-y-auto
                  pr-1
                "
              >
                {zone.categories.map((cat) => (
                  <span
                    key={cat}
                    className="
                      inline-flex
                      h-fit
                      items-center
                      whitespace-nowrap
                      rounded-full
                      border border-white/30
                      bg-white/15
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-sm
                      transition-colors
                      duration-200
                      hover:bg-white/25
                    "
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
