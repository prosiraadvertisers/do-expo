"use client";

import Image from "next/image";
import { MapPin, CalendarDays, Ticket, ArrowRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { Countdown } from "@/components/countdown";
import { CtaButton } from "@/components/ui/cta";
import { useRegistration } from "@/components/registration/registration-context";

export function Hero() {
  const { open } = useRegistration();

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden brand-gradient-radial pt-20 text-white">
      <Image
        src="/images/hero-expo.png"
        alt="Visitors networking at DoExim Expo"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.09_270)] via-transparent to-[oklch(0.2_0.09_270_/_0.6)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold ring-1 ring-white/20 backdrop-blur">
            <span className="size-2 rounded-full bg-cta animate-pulse" />{" "}
            {EVENT.tagline}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient-gold">DoExim Expo 2027</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80 text-pretty sm:text-xl">
            Connecting global import & export professionals since 2020. Discover
            new markets, build international partnerships, and explore business
            opportunities with exhibitors and buyers from over 50
            countries.{" "}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-5 text-gold" /> {EVENT.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-5 text-gold" /> {EVENT.venue}
            </span>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Doors open in
            </p>
            <Countdown variant="dark" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton variant="gold" size="lg" onClick={() => open("visitor")}>
              <Ticket className="size-5" /> Get Free Visitor Pass
            </CtaButton>
            <CtaButton
              variant="glass"
              size="lg"
              onClick={() => open("exhibitor")}
            >
              Become an Exhibitor <ArrowRight className="size-4" />
            </CtaButton>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "50+", v: "Countries" },
              { k: "1000+", v: "Exhibitors" },
              { k: "25K+", v: "Trade Visitors" },
              { k: "5000+", v: "Business Meetings" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-5">
                <p className="font-heading text-3xl font-bold text-gold">
                  {s.k}
                </p>
                <p className="mt-1 text-sm text-white/75">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
