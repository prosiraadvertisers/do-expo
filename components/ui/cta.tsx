import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 disabled:opacity-60 disabled:pointer-events-none active:translate-y-px'

const variants = {
  gold: 'bg-gold text-gold-foreground hover:brightness-105 shadow-lg shadow-[oklch(0.82_0.15_85_/_0.35)]',
  cta: 'bg-cta text-cta-foreground hover:brightness-110 shadow-lg shadow-[oklch(0.68_0.19_148_/_0.35)]',
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25',
  glass: 'glass text-white hover:bg-white/15',
  outline: 'border border-border bg-background text-foreground hover:bg-muted',
}

const sizes = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
}

type CtaProps = {
  children: ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}

export function CtaButton({
  children,
  variant = 'cta',
  size = 'md',
  className,
  ...props
}: CtaProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export function CtaLink({
  children,
  href,
  variant = 'cta',
  size = 'md',
  className,
  ...props
}: CtaProps & { href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  )
}
