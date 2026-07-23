import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ZONES } from "@/lib/event-data"

export function ZonesGrid({ withImages = true }: { withImages?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ZONES.map((zone) => (
        <Link
          key={zone.slug}
          href={`/exhibit#zone-${zone.slug}`}
          id={`zone-${zone.slug}`}
          className="group glass-card scroll-mt-28 overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
        >
          {withImages && (
            <div className="relative h-40 overflow-hidden">
              <img
                src={zone.image || "/placeholder.svg"}
                alt={`${zone.name} at ${"Automation Expo 2026"}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                {zone.hall}
              </span>
            </div>
          )}
          <div className="p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <zone.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-1 font-heading text-lg font-bold text-foreground">{zone.name}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{zone.short}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
              Explore
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
