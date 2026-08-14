'use client'

import { useState, useEffect } from 'react'
import { EVENT } from '@/lib/event-data'

function diff(target: number) {
  const now = Date.now()
  const d = Math.max(0, target - now)
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  }
}

export function Countdown({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const target = new Date(EVENT.startISO).getTime()
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    setT(diff(target))
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: t?.days },
    { label: 'Hours', value: t?.hours },
    { label: 'Minutes', value: t?.minutes },
    { label: 'Seconds', value: t?.seconds },
  ]

  const cardClass =
    variant === 'dark'
      ? 'glass text-white'
      : 'bg-card text-foreground ring-1 ring-border shadow-sm'

  return (
  // Sizing uses clamp(min, Ndvh, max) instead of fixed/breakpoint sizes so
  // the digits shrink automatically on short viewports (short tablets,
  // landscape phones) instead of only responding to width.
  <div
    className="grid w-full grid-cols-4 gap-[clamp(0.25rem,1dvh,0.5rem)]"
    role="timer"
    aria-label="Countdown to event"
  >
    {units.map((u) => (
      <div
        key={u.label}
        className={`flex w-full flex-col items-center justify-center rounded-lg px-[clamp(0.2rem,0.8dvh,0.5rem)] py-[clamp(0.25rem,1dvh,0.625rem)] ${cardClass}`}
      >
        <span className="font-heading text-[clamp(1rem,3.2dvh,1.5rem)] font-bold tabular-nums leading-none">
          {t === null ? "--" : String(u.value).padStart(2, "0")}
        </span>

        <span
          className={`mt-0.5 text-[clamp(0.5rem,1.2dvh,0.625rem)] font-semibold uppercase tracking-[0.12em] ${
            variant === "dark"
              ? "text-white/70"
              : "text-muted-foreground"
          }`}
        >
          {u.label}
        </span>
      </div>
    ))}
  </div>
)
}