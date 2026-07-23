'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import type { Exhibitor } from '@/lib/event-data'

type ExhibitorGridProps = {
  exhibitors: Exhibitor[]
}

export function ExhibitorGrid({ exhibitors }: ExhibitorGridProps) {
  const [selected, setSelected] = useState<Exhibitor | null>(null)

  return (
    <>
      {/* Logo Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {exhibitors.map((exhibitor) => (
          <button
            key={exhibitor.id}
            onClick={() => setSelected(exhibitor)}
            className="group relative flex min-h-28 items-center justify-center rounded-2xl border border-border bg-white/50 backdrop-blur transition-all duration-300 hover:border-primary hover:shadow-lg p-3"
            style={{
              backgroundColor: `color-mix(in oklab, ${exhibitor.color} 8%, rgb(255 255 255) 92%)`,
              borderColor: exhibitor.color,
            }}
          >
            {/* Logo text - grayscale by default, color on hover */}
            <div
              className="relative text-center transition-all duration-300 group-hover:scale-110"
              style={{
                opacity: 0.9,
              }}
            >
              <p className="text-lg font-heading font-bold leading-tight transition-all duration-300" style={{ color: exhibitor.color }}>
                {exhibitor.name.split(' ').map((word, i) => (
                  <div key={i} className="inline-block">
                    {word}
                  </div>
                ))}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                Booth {exhibitor.booth}
              </p>
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundColor: exhibitor.color + '08' }} />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelected(null)}>
          <div
            className="fixed inset-0 bg-[oklch(0.15_0.05_270_/_0.7)] backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div
            className="relative max-w-sm w-full rounded-2xl bg-card p-6 shadow-2xl sm:p-8 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full bg-muted text-foreground transition hover:bg-muted/80"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div
              className="mb-4 inline-flex size-14 items-center justify-center rounded-xl"
              style={{ backgroundColor: selected.color + '20', color: selected.color }}
            >
              <span className="text-2xl font-heading font-bold">
                {selected.name.charAt(0)}
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground">
              {selected.name}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Category:</span> {selected.category}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Booth:</span> {selected.booth}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {selected.description}
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelected(null)}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Email sent to ${selected.name} exhibitor team!`)
                  setSelected(null)
                }}
                className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
