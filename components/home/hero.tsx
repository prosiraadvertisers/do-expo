"use client";

import Image from "next/image";
import { MapPin, CalendarDays, Clock, Ticket, ArrowRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { Countdown } from "@/components/countdown";
import { CtaButton } from "@/components/ui/cta";
import { useRegistration } from "@/components/registration/registration-context";

/**
 * TODO: move these into `EVENT` in `@/lib/event-data` once real logo assets
 * exist, e.g. EVENT.organisers, EVENT.poweredBy, EVENT.coPoweredBy,
 * EVENT.associatePartners, EVENT.timeLabel.
 *
 * `logo` = path to the actual logo file (e.g. "/logos/acme.svg").
 * `alt`  = accessible name only — never rendered as visible text, so no
 *          sponsor name shows on the page unless their logo image does.
 * Drop each real logo file in place and update the `logo` path below;
 * nothing else needs to change.
 */
// "Event Organised By" now supports multiple logos. Put the primary
// organiser first — it renders larger than the rest.
const ORGANISERS = [
  { logo: "/herologo/plogo.png", alt: "Event organiser", big: true },
  { logo: "/logo-white.png", alt: "Co-organiser", big: true },
];
const TIME_LABEL = "10:00 AM – 6:00 PM";

function LogoChip({
  logo,
  alt,
  size = "md",
}: {
  logo: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  const heightClass = size === "sm" ? "h-10" : size === "lg" ? "h-28" : "h-14";
  const dims =
    size === "sm"
      ? { width: 88, height: 32 }
      : size === "lg"
        ? { width: 260, height: 100 }
        : { width: 120, height: 40 };

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 backdrop-blur-sm sm:px-4 ${heightClass}`}
    >
      <Image
        src={logo}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function Hero() {
  const { open } = useRegistration();

  return (
    // --nav-h below MUST match your actual fixed navbar's height. If your
    // navbar isn't a fixed 5rem (80px) tall, change the fallback value (or
    // better, set --nav-h on the navbar/layout so it's always in sync).
    //
    // Height strategy:
    // - Mobile / tablet (< lg): NO fixed height. We use minHeight: 100dvh
    //   instead, so if the stacked content (logos strip + countdown card)
    //   is taller than one screen, the section simply grows and the page
    //   scrolls — nothing gets clipped by overflow-hidden anymore.
    // - Desktop (lg+): fixed to exactly 100dvh via the `lg:h-[100dvh]`
    //   class, since the tiered layout there is designed to fit in one
    //   screen without scrolling.
    <section
      className="relative flex w-full items-center overflow-hidden brand-gradient-radial pt-[var(--nav-h,5rem)] text-white lg:h-[100dvh]"
      style={{ minHeight: "100dvh" }}
    >
      <Image
        src="/images/hero-expo.png"
        alt="Visitors networking at doexim Expo"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.09_270)] via-transparent to-[oklch(0.2_0.09_270_/_0.6)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 pb-24 sm:gap-8 sm:px-6 sm:pb-24 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-10">
        {" "}
        {/* LEFT — sponsor tiers (headline text removed per request) */}
        <div className="order-2 lg:order-1 lg:col-span-8">
          {/* Mobile / tablet (< lg): one combined row. Four separate
              stacked rows plus the countdown card below simply cannot fit
              on a short phone screen without scrolling, so everything is
              condensed into a single horizontally-scrollable strip. */}
          <div className="lg:hidden">
            <div className="hide-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
              <div className="shrink-0">
                <LogoChip
                  logo={ORGANISERS[0].logo}
                  alt={ORGANISERS[0].alt}
                  size="sm"
                />
              </div>
            </div>

            {/* TEMP: replaces sponsor logo strip until real logos exist */}
            <div className="mt-4 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Connect. Collaborate.
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-tight">
                GROW <span className="text-[#ff8a1e]">GLOBAL</span>
              </p>
              <p className="mt-1.5 text-xs text-white/60">
                India&apos;s Premier B2B International Trade Expo for
                Importers, Exporters, Manufacturers &amp; Global Trade
                Leaders
              </p>
            </div>
          </div>

          {/* Desktop (lg+): full tiered layout, room to breathe. */}
          <div className="hidden space-y-2 lg:block">
            <div className="flex flex-col items-center">
            

              {/* Small Logo */}
              <LogoChip
                logo={ORGANISERS[0].logo}
                alt={ORGANISERS[0].alt}
                size="sm"
              />
              
<p className="mt-3 mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Presents
              </p>

              {/* Big Logo */}
              <div className="mt-2">
                <LogoChip
                  logo={ORGANISERS[1].logo}
                  alt={ORGANISERS[1].alt}
                  size="lg"
                />
              </div>
            </div>

            {/* TEMP: replaces sponsor tiers (Powered By / Co Powered By /
                Associate Partners) until real sponsor logos exist */}
            <div className="border-t border-white/10 pt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Connect. Collaborate.
              </p>
              <p className="mt-1 text-3xl font-extrabold leading-tight sm:text-4xl">
                GROW <span className="text-[#ff8a1e]">GLOBAL</span>
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
                India&apos;s Premier B2B International Trade Expo for
                Exporters, Importers Manufacturers &amp; Global Trade
                Leaders
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT — countdown, key details, CTAs */}
        <div className="order-1 mx-auto w-full max-w-md lg:sticky lg:top-24 lg:order-2 lg:col-span-4 lg:mx-0 lg:max-w-none">
          <div className="glass space-y-4 rounded-3xl p-4 sm:space-y-5 sm:p-5">
            <div className="min-w-0">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Doors open in
              </p>
              <Countdown variant="dark" />
            </div>

            <div className="space-y-2 border-t border-white/10 pt-3 text-sm font-medium text-white/90">
              <span className="flex items-start gap-2.5">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{EVENT.dateLabel}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{EVENT.venue}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{TIME_LABEL}</span>
              </span>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
              <CtaButton
                onClick={() => open("exhibitor")}
                className="w-full animate-bounce rounded-xl border border-[#3f6cff] bg-[#061AC9] !py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(6,26,201,0.55)] transition-all duration-300 hover:bg-[#1326CB] hover:shadow-[0_0_35px_rgba(6,26,201,0.85)] sm:!py-3 sm:text-base"
              >
                Book Your Space Now! <ArrowRight className="size-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
