"use client";

import { Store, Handshake, Ticket, ArrowRight } from "lucide-react";
import {
  useRegistration,
  type RegistrationType,
} from "@/components/registration/registration-context";

const CARDS: {
  type: RegistrationType;
  icon: typeof Store;
  title: string;
  desc: string;
  badge: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
  iconBg: string;
  titleColor: string;
  hoverBorder: string;
  hoverShadow: string;
}[] = [
  {
    type: "exhibitor",
    icon: Store,
    title: "Exhibitor Registration",
    desc: "Showcase your products and services to global importers, exporters, distributors and buyers.",
    badge: "Exhibition Open",
    accent: "bg-orange-100 text-orange-700",
    cardBg: "bg-orange-100",
    cardBorder: "border-orange-300",
    iconBg: "from-orange-500 to-amber-500",
    titleColor: "text-orange-950",
    hoverBorder: "hover:border-orange-300",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]",
  },
  {
    type: "buyer-seller",
    icon: Handshake,
    title: "Buyer Seller Meet",
    desc: "Connect with verified international buyers and suppliers through scheduled B2B meetings.",
    badge: "Global Networking",
    accent: "bg-blue-100 text-blue-700",
    cardBg: "bg-blue-100",
    cardBorder: "border-blue-300",
    iconBg: "from-blue-600 to-cyan-500",
    titleColor: "text-blue-950",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]",
  },
  {
    type: "visitor",
    icon: Ticket,
    title: "Visitor Registration",
    desc: "Register free and meet international exhibitors, buyers and exporters under one roof.",
    badge: "Pass",
    accent: "bg-emerald-100 text-emerald-700",
    cardBg: "bg-emerald-100",
    cardBorder: "border-emerald-300",
    iconBg: "from-emerald-500 to-teal-500",
    titleColor: "text-emerald-950",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]",
  },
];

export function PriorityCards() {
  const { open } = useRegistration();

  return (
    <section className="relative z-20 mt-8 px-4 pb-16 sm:-mt-28 sm:px-6 sm:pb-20 lg:-mt-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => {
          const Icon = c.icon;

          return (
            <button
              key={c.type}
              onClick={() => open(c.type)}
              className={`group relative flex flex-col items-start gap-3 overflow-hidden rounded-[28px] border p-5 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white sm:p-6 sm:gap-4 ${c.cardBg} ${c.cardBorder} ${c.hoverBorder} ${c.hoverShadow}`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
                <div className="absolute -left-40 top-0 h-full w-20 -skew-x-12 bg-white/60 blur-xl transition-all duration-1000 group-hover:left-[130%]" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/35 to-transparent" />

              <span
                className={`relative z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold sm:px-3 sm:py-1.5 sm:text-xs ${c.accent}`}
              >
                {c.badge}
              </span>

              <span
                className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14 ${c.iconBg}`}
              >
                <Icon className="size-5 sm:size-6" />
              </span>

              <h3
                className={`relative z-10 font-heading text-xl font-bold sm:text-2xl ${c.titleColor}`}
              >
                {c.title}
              </h3>

              <p className="relative z-10 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                {c.desc}
              </p>

              <span className="relative z-10 mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#061AC9] sm:mt-3 sm:text-sm">
                Register now{" "}
                <ArrowRight className="size-3.5 transition group-hover:translate-x-1 sm:size-4" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}