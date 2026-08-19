"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowRight, Check } from "lucide-react";
import { EVENT, ZONES } from "@/lib/event-data";
import { useRegistration } from "@/components/registration/registration-context";

export function Footer() {
  const { open } = useRegistration();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true);
  };

  return (
    <footer className="w-full overflow-x-hidden brand-gradient-radial text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-4 shrink-0 max-w-[180px] lg:max-w-[220px]"
            >
              <Image
                src="/logo-white.png"
                alt="doexim Expo"
                width={150}
                height={32}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70 text-pretty">
              India&apos;s premier B2B international trade expo, connecting
              exporters, importers, manufacturers, MSMEs, startups, and global
              buyers to unlock new business opportunities and international
              partnerships.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />{" "}
                {EVENT.venue}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-gold" />{" "}
                connect@prosira.in
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold" /> +91 97652 59272
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/event">Event &amp; Agenda</FooterLink>
              <FooterLink href="/seminar">Seminar</FooterLink>
              <FooterLink href="/layout">Layout</FooterLink>
              <FooterLink
                href="https://www.prosira.in/work"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Portfolio
              </FooterLink>
              <FooterLink href="/">Career</FooterLink>
              <FooterLink href="/">Volunteer's</FooterLink>
              <FooterLink href="/">Become Media Partner</FooterLink>
              <FooterLink href="/">Join doexim Network</FooterLink>
              <FooterLink href="/">International Delegates</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Zones</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ZONES.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/exhibit#zone-${z.slug}`}
                    className="text-white/70 transition hover:text-white"
                  >
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>Stay in the loop</FooterHeading>
            <p className="mt-4 text-sm text-white/70">
              Get speaker announcements, agenda updates and exhibitor news.
            </p>
            {subscribed ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cta/20 px-4 py-3 text-sm font-medium text-white">
                <Check className="size-4 text-cta" /> You&apos;re subscribed.
                Watch your inbox!
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4 flex min-w-0 gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/50 focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground transition hover:brightness-105"
                >
                  <ArrowRight className="size-5" />
                </button>
              </form>
            )}
            {/* <div className="mt-6">
              <FooterHeading>Our partners</FooterHeading>
              <div className="mt-3 flex flex-wrap gap-2">
                {['ACMA', 'CII', 'IESA', 'MAIT', 'NASSCOM'].map((p) => (
                  <span key={p} className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                    {p}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} prosira advertisers. All rights
            reserved. prosira.in
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: "LinkedIn", short: "in" },
              { label: "X", short: "X" },
              { label: "Facebook", short: "f" },
              { label: "Instagram", short: "IG" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/80 transition hover:bg-gold hover:text-gold-foreground"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="text-white/70 transition hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
