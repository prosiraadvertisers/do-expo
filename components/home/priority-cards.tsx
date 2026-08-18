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
}[] = [
  {
    type: "exhibitor",
    icon: Store,
    title: "Exhibitor Registration",
    desc: "Showcase your products and services to global importers, exporters, distributors and buyers.",
    badge: "Exhibition Open",
    accent: "bg-cta text-cta-foreground",
  },
  {
    type: "buyer-seller",
    icon: Handshake,
    title: "Buyer Seller Meet",
    desc: "Connect with verified international buyers and suppliers through scheduled B2B meetings.",
    badge: "Global Networking",
    accent: "bg-primary text-primary-foreground",
  },
  {
    type: "visitor",
    icon: Ticket,
    title: "Visitor Registration",
    desc: "Register free and meet international exhibitors, buyers and exporters under one roof.",
    badge: "Pass",
    accent: "bg-gold text-gold-foreground",
  },
];

export function PriorityCards() {
  const { open } = useRegistration();

  return (
    <section className="relative bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {" "}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.type}
              onClick={() => open(c.type)}
              className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-7 text-left backdrop-blur-xl shadow-[0_10px_35px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#061AC9]/20 hover:bg-white hover:shadow-[0_20px_60px_rgba(6,26,201,0.18)]"
            >
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${c.accent}`}
              >
                {/* Glossy Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
                  <div className="absolute -left-40 top-0 h-full w-20 -skew-x-12 bg-white/60 blur-xl transition-all duration-1000 group-hover:left-[130%]" />
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/35 to-transparent" />
                {c.badge}
              </span>
<span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#061AC9] to-[#3B82F6] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">                <Icon className="size-6" />
              </span>
              <h3 className="relative z-10 font-heading text-2xl font-bold text-slate-900">
                {c.title}
              </h3>
              <p className="relative z-10 text-[15px] leading-7 text-slate-600">
                {c.desc}
              </p>
              <span className="relative z-10 mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#061AC9]">
                Register now{" "}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </button >
            
          );
        })}
      </div>
    </section>
  );
}
