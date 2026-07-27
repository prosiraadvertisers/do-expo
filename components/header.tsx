'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Ticket, Handshake, ArrowRight } from 'lucide-react'
import { EXHIBIT_MENU, ZONES } from '@/lib/event-data'
import { useRegistration } from '@/components/registration/registration-context'
import { CtaButton } from '@/components/ui/cta'
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [eventOpen, setEventOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { open } = useRegistration()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setEventOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const onDark = pathname === '/' && !scrolled
  const linkColor = onDark ? 'text-white/85 hover:text-white' : 'text-foreground/75 hover:text-primary'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-border bg-background/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        <Logo onDark={onDark} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavLink href="/about" color={linkColor}>About</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setEventOpen(true)}
            onMouseLeave={() => setEventOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${linkColor} ${
                eventOpen ? (onDark ? 'text-white' : 'text-primary') : ''
              }`}
              aria-expanded={eventOpen}
            >
              Event
              <ChevronDown className={`size-4 transition-transform ${eventOpen ? 'rotate-180' : ''}`} />
            </button>
            {eventOpen && <EventDropdown />}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/exhibit"
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${linkColor} ${
                megaOpen ? (onDark ? 'text-white' : 'text-primary') : ''
              }`}
              aria-expanded={megaOpen}
            >
              Exhibit
              <ChevronDown className={`size-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </Link>
            {megaOpen && <MegaMenu />}
          </div>

          <NavLink href="/exhibitor" color={linkColor}>Exhibitor</NavLink>

          
        </nav>

       <div className="flex items-center gap-3">
  <CtaButton
    variant="gold"
    className="hidden lg:inline-flex"
    onClick={() => open('buyer-seller')}
  >
    <Handshake className="size-4" />
    Buyer Seller Meet
  </CtaButton>

  <CtaButton
    variant="gold"
    className="hidden sm:inline-flex"
    onClick={() => open('visitor')}
  >
    <Ticket className="size-4" />
    Free Pass
  </CtaButton>

  <button
    className={`inline-flex size-10 items-center justify-center rounded-lg lg:hidden ${
      onDark ? 'text-white' : 'text-foreground'
    }`}
    onClick={() => setMobileOpen((v) => !v)}
    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={mobileOpen}
  >
    {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
  </button>
</div>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  )
}

function Logo({ onDark }: { onDark: boolean }) {
  return (
    <Link
      href="/"
      aria-label="DO Exim Expo"
      className="flex items-center shrink-0 max-w-[180px] lg:max-w-[220px]"
    >
      <Image
        src={onDark ? "/logo-white.png" : "/logo-dark.png"}
        alt="DO Exim Expo"
        width={180}
        height={38}
        priority
        className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
      />
    </Link>
  );
}

function NavLink({ href, color, children }: { href: string; color: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${color}`}>
      {children}
    </Link>
  )
}

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(56rem,92vw)] -translate-x-1/2 pt-3">
      <div className="grid grid-cols-12 gap-6 overflow-hidden rounded-2xl border border-border bg-popover p-6 shadow-2xl animate-fade-in-up">
        <div className="col-span-3">
          <MenuHeading>Exhibit</MenuHeading>
          <ul className="mt-3 space-y-1">
            {EXHIBIT_MENU.columns[0].links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 transition hover:bg-muted hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <MenuHeading>Gallery</MenuHeading>
            <ul className="mt-3 space-y-1">
              {EXHIBIT_MENU.columns[1].links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 transition hover:bg-muted hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-5">
          <MenuHeading>Zones</MenuHeading>
          <ul className="mt-3 grid grid-cols-1 gap-1">
            {ZONES.map((z) => {
              const Icon = z.icon
              return (
                <li key={z.slug}>
                  <Link
                    href={`/exhibit#zone-${z.slug}`}
                    className="group flex items-start gap-3 rounded-lg px-2 py-2 transition hover:bg-muted"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{z.name}</span>
                      <span className="block text-xs text-muted-foreground">{z.short}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="col-span-4">
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl brand-gradient-radial p-5 text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Booth booking open</span>
              <p className="mt-2 font-heading text-lg font-bold leading-tight">Exhibit at Automation Expo 2026</p>
              <p className="mt-1 text-sm text-white/70">Meet 40,000+ qualified buyers across 3 days.</p>
            </div>
            <Link href="/exhibit#plan" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">
              Plan your expo <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function EventDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-64 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl animate-fade-in-up">
        <ul className="space-y-1">
          <li>
            <Link href="/pre-event" className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary">
              Pre-Event Schedule
            </Link>
          </li>
          <li>
            <Link href="/event" className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary">
              Event
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function MenuHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { open } = useRegistration()
  const [exhibitOpen, setExhibitOpen] = useState(false)
  const [zonesOpen, setZonesOpen] = useState(false)
  const [eventOpen, setEventOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-2">
        <MobileLink href="/about" onClose={onClose}>About</MobileLink>

        <div className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold"
            onClick={() => setEventOpen((v) => !v)}
            aria-expanded={eventOpen}
          >
            Event
            <ChevronDown className={`size-5 transition-transform ${eventOpen ? 'rotate-180' : ''}`} />
          </button>
          {eventOpen && (
            <div className="pb-3 pl-3">
              <Link href="/pre-event" onClick={onClose} className="block py-2 text-sm text-foreground/80">Complete Event Schedule</Link>
              <Link href="/event" onClick={onClose} className="block py-2 text-sm text-foreground/80">Main Event</Link>
            </div>
          )}
        </div>

        <div className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold"
            onClick={() => setExhibitOpen((v) => !v)}
            aria-expanded={exhibitOpen}
          >
            Exhibit
            <ChevronDown className={`size-5 transition-transform ${exhibitOpen ? 'rotate-180' : ''}`} />
          </button>
          {exhibitOpen && (
            <div className="pb-3 pl-3">
              {EXHIBIT_MENU.columns[0].links.map((l) => (
                <Link key={l.label} href={l.href} onClick={onClose} className="block py-2 text-sm text-foreground/80">
                  {l.label}
                </Link>
              ))}
              <button
                className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-foreground"
                onClick={() => setZonesOpen((v) => !v)}
                aria-expanded={zonesOpen}
              >
                Zones
                <ChevronDown className={`size-4 transition-transform ${zonesOpen ? 'rotate-180' : ''}`} />
              </button>
              {zonesOpen && (
                <div className="pl-3">
                  {ZONES.map((z) => (
                    <Link key={z.slug} href={`/exhibit#zone-${z.slug}`} onClick={onClose} className="block py-1.5 text-sm text-muted-foreground">
                      {z.name}
                    </Link>
                  ))}
                </div>
              )}
              {EXHIBIT_MENU.columns[1].links.slice(0, 1).map((l) => (
                <Link key={l.label} href={l.href} onClick={onClose} className="block py-2 text-sm text-foreground/80">
                  Gallery
                </Link>
              ))}
            </div>
          )}
        </div>

        <MobileLink href="/exhibitor" onClose={onClose}>Exhibitor</MobileLink>

        <button
          onClick={() => { onClose(); open('buyer-seller') }}
          className="flex w-full items-center justify-between border-b border-border py-3.5 text-left text-base font-semibold"
        >
          Buyer Seller Meet <Handshake className="size-5 text-primary" />
        </button>

        <div className="mt-5 flex flex-col gap-3">
          <CtaButton variant="gold" size="lg" className="w-full" onClick={() => { onClose(); open('visitor') }}>
            <Ticket className="size-5" /> Free Visitor Pass
          </CtaButton>
          <CtaButton variant="cta" size="lg" className="w-full" onClick={() => { onClose(); open('exhibitor') }}>
            Become an Exhibitor
          </CtaButton>
        </div>
      </nav>
    </div>
  )
}

function MobileLink({ href, onClose, children }: { href: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClose} className="block border-b border-border py-3.5 text-base font-semibold">
      {children}
    </Link>
  )
}
