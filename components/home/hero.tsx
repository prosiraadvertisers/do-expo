"use client";

import Image from "next/image";
import {
  MapPin,
  CalendarDays,
  Clock,
  Ticket,
  ArrowRight,
  Store,
  Globe,
  Users,
  Map as MapIcon,
} from "lucide-react";
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
        src="/herobg/hero.webp"
        alt="Mumbai Skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07152c]/80 via-[#07152c]/35 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-12 lg:px-8">
        {" "}
        {/* LEFT — sponsor tiers (headline text removed per request) */}
        <div className="order-2 flex items-center lg:order-1 lg:col-span-8">
          {" "}
          {/* Mobile / tablet (< lg): one combined row. Four separate
              stacked rows plus the countdown card below simply cannot fit
              on a short phone screen without scrolling, so everything is
              condensed into a single horizontally-scrollable strip. */}
          <div className="lg:hidden">
            {/* TEMP: replaces sponsor logo strip until real logos exist */}
            <div className="-mt-4 text-right ">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/75">
                Connect. Collaborate.
              </p>

              <h1 className="mt-2 text-6xl font-black leading-none">
                GROW <span className="text-[#ff8a1e]">GLOBAL</span>
              </h1>

              <p className="mt-6 max-w-none text-lg xl:text-xl leading-relaxed text-white/90 lg:whitespace-nowrap">
                India&apos;s Premier B2B International Trade Expo for Exporters,
                Importers, Manufacturers &amp; Global Trade Leaders
              </p>
            </div>
          </div>
          {/* Desktop (lg+): row-based layout matching the reference —
              nothing is stacked in one tall column. Row 1: small logo +
              "PRESENTS" inline. Row 2: big logo on the left, heading +
              description on the right, both at the same vertical level.
              Row 3: full-width stats strip. */}
          <div className="hidden w-full flex-col items-start justify-center lg:flex">
            {/* Row 1 — small logo + PRESENTS, inline */}
            {/* <div className="flex items-center gap-3">
              <LogoChip
                logo={ORGANISERS[0].logo}
                alt={ORGANISERS[0].alt}
                size="sm"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Presents
              </p>
            </div> */}

            {/* Row 2 — big logo (left) + heading/description (right) */}
<div className="grid w-full grid-cols-[auto_1fr] items-start gap-x-10 pt-8">              {" "}
              {/* <LogoChip
                logo={ORGANISERS[1].logo}
                alt={ORGANISERS[1].alt}
                size="lg"
              /> */}
              <div className="-mt-4 text-left">
                <p className="ml-[4px] text-sm font-semibold uppercase tracking-[0.45em] text-white/75">
                  Source. Connect. Collaborate.
                </p>

                <p className="mt-3 text-5xl font-black leading-none">
                  GROW <span className="text-[#3228ee]">GLOBAL</span>
                </p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/90">
                  India&apos;s Premier B2B International Trade Expo for
                  Exporters, Importers
                  <br />
                  Manufacturers &amp; Global Trade Leaders
                </p>
              </div>
            </div>

            {/* Row 3 — full-width stats strip, placeholder numbers */}
<div className="mt-16 flex w-full max-w-[400px] items-center gap-6 rounded-2xl border border-white/10 bg-[#07152c]/60 px-6 py-4 backdrop-blur-md">              {[
                { icon: Store, label: "Exhibitors", value: "360+" },
                { icon: Globe, label: "Countries", value: "10+" },
                { icon: Users, label: "Visitors", value: "25K+" },
              ].map(({ icon: Icon, label, value }) => (
                <span key={label} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon className="size-4 text-gold" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-base font-bold text-white">
                      {value}
                    </span>
                    <span className="block text-xs text-white/60">{label}</span>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT — countdown, key details, CTAs */}
        <div className="order-1 mx-auto w-full max-w-md lg:sticky lg:top-0 lg:order-2 lg:col-span-4 lg:mx-0 lg:max-w-none">
          <div className="rounded-3xl border border-white/40 bg-white/18 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-4 sm:space-y-4">
            {" "}
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
            <div className="flex flex-col gap-2 border-t border-white/10 pt-3 sm:flex-row">
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
