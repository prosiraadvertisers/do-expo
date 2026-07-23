import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="brand-gradient-radial px-4 pb-14 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold ring-1 ring-white/20 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-white/75">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  )
}
