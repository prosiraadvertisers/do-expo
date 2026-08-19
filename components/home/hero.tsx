"use client";

import Image from "next/image";
import {
  MapPin,
  CalendarDays,
  Clock,
  ArrowRight,
  Store,
  Globe,
  Users,
} from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { Countdown } from "@/components/countdown";
import { CtaButton } from "@/components/ui/cta";
import { useRegistration } from "@/components/registration/registration-context";

const TIME_LABEL = "10:00 AM – 6:00 PM";

export function Hero() {
  const { open } = useRegistration();

  return (
    <section
      className="relative flex w-full items-center overflow-hidden brand-gradient-radial pt-[var(--nav-h,5rem)] text-white lg:h-[100dvh]"
      style={{ minHeight: "100dvh" }}
    >
      <Image
        src="/herobg/herobggg.jpeg"
        alt="Mumbai Skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />

<div className="absolute inset-0 bg-gradient-to-r from-[#07152c]/30 via-[#07152c]/10 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-12 lg:px-8">
        {/* LEFT — content */}
<div className="order-1 flex w-full items-center lg:order-1 lg:col-span-8">          {/* Mobile / tablet (< lg) — ONLY THIS PART CHANGED */}
          <div className="w-full lg:hidden">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/90">
                Source. Connect. Collaborate.
              </p>

              <p className="mt-3 text-5xl font-black leading-none ">
                  India’s Most Focused
                <br />
                  Export–Import Trade Expo
                </p>

             
            </div>

            {/* Stats strip - mobile */}
            <div className="mt-8 flex w-full items-center justify-center gap-4 sm:gap-6">
              {[
                { icon: Store, label: "Exhibitors", value: "360+" },
                { icon: Globe, label: "Countries", value: "10+" },
                { icon: Users, label: "Visitors", value: "25K+" },
              ].map(({ icon: Icon, label, value }) => (
                <span
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 sm:size-10">
                    <Icon className="size-3 text-blue-500 sm:size-4" />
                  </span>
                  <span className="mt-1.5 leading-tight">
                    <span className="block text-sm font-bold text-white sm:text-base">
                      {value}
                    </span>
                    <span className="block text-[10px] text-white/60 sm:text-xs">
                      {label}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Desktop (lg+) — EXACT SAME AS ORIGINAL, NO CHANGES */}
          <div className="hidden w-full flex-col items-start justify-center lg:flex">
            <div className="grid w-full grid-cols-[auto_1fr] items-start gap-x-10 pt-8">
              <div className="-mt-4 text-left">
                <p className="ml-[4px] text-sm font-semibold uppercase tracking-[0.45em] text-black/75">
                  Source. Connect. Collaborate.
                </p>

                <p className="mt-3 text-5xl font-black leading-none ">
                  India’s Most Focused
                  <br />
                  Export–Import Trade Expo
                </p>
               
              </div>
            </div>

            {/* Row 3 — full-width stats strip */}
            <div className="mt-16 flex w-full max-w-[400px] items-center gap-6 rounded-2xl border border-white/10 bg-[#07152c]/60 px-6 py-4 backdrop-blur-md">
              {[
                { icon: Store, label: "Exhibitors", value: "360+" },
                { icon: Globe, label: "Countries", value: "10+" },
                { icon: Users, label: "Visitors", value: "25K+" },
              ].map(({ icon: Icon, label, value }) => (
                <span key={label} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon className="size-4 text-blue-500" />
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
<div className="order-2 mx-auto mt-8 w-full max-w-md lg:sticky lg:top-0 lg:order-2 lg:mt-0 lg:col-span-4 lg:mx-0 lg:max-w-none">          <div className="rounded-3xl border border-white/40 bg-white/18 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-4 sm:space-y-4">
            <div className="min-w-0">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-black/90">
                Doors open in
              </p>
              <Countdown variant="dark" />
            </div>
            <div className="space-y-2 border-t border-white/10 pt-3 text-sm font-medium text-black/90">
              <span className="flex items-start gap-2.5">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-blue-500" />
                <span>{EVENT.dateLabel}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-500" />
                <span>{EVENT.venue}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-blue-500" />
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
