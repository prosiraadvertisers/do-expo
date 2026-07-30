import { Tag } from "lucide-react"
import { ZONES } from "@/lib/event-data"

export function ZonesGrid({ withImages }: { withImages?: boolean }) {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ZONES.map((zone) => (
        <div
          key={zone.slug}
          id={`zone-${zone.slug}`}
          className="glass-card flex flex-col justify-between scroll-mt-28 min-w-0 overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 shadow-xs"
        >
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <zone.icon className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {zone.hall}
              </span>
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
              {zone.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {zone.short}
            </p>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-primary/80">
              Categories
            </p>
            <div className="flex flex-wrap gap-1.5">
              {zone.categories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-semibold text-foreground/85"
                >
                  <Tag className="size-3 text-primary/70 shrink-0" />
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
