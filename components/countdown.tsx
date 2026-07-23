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
    <div className="flex gap-2.5 sm:gap-3" role="timer" aria-label="Countdown to event">
      {units.map((u) => (
        <div key={u.label} className={`flex min-w-16 flex-col items-center rounded-xl px-3 py-2.5 sm:min-w-20 sm:py-3 ${cardClass}`}>
          <span className="font-heading text-2xl font-bold tabular-nums sm:text-4xl">
            {t === null ? '--' : String(u.value).padStart(2, '0')}
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs ${variant === 'dark' ? 'text-white/70' : 'text-muted-foreground'}`}>
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
