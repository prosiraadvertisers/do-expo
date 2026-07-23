'use client'

import { CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'

export function FormSuccess({
  title,
  message,
  children,
}: {
  title: string
  message: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-12 text-center sm:py-16">
      <span className="flex size-16 items-center justify-center rounded-full bg-cta/15 text-cta animate-fade-in-up">
        <CheckCircle2 className="size-9" />
      </span>
      <h3 className="font-heading text-2xl font-bold text-foreground text-balance">{title}</h3>
      <p className="max-w-md text-pretty text-muted-foreground">{message}</p>
      {children && <div className="mt-2 flex flex-wrap items-center justify-center gap-3">{children}</div>}
    </div>
  )
}
