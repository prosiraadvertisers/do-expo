import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Handshake, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaLink } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Exhibition Organisers",
  description:
    "Meet Prosira Adtech Pvt. Ltd., the organiser of doexim expo and its phygital B2B trade ecosystem.",
};

const focusAreas = [
  {
    icon: Handshake,
    title: "Meaningful connections",
    description: "Creating practical opportunities for businesses to meet, collaborate and build lasting partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge and leads",
    description: "Bringing together ideas, expertise and business leads that help the export-import ecosystem grow.",
  },
  {
    icon: Globe2,
    title: "International access",
    description: "Making global markets and trade stakeholders more accessible to Indian businesses and MSMEs.",
  },
];

export default function ExhibitionOrganisersPage() {
  return (
    <>
      <div className="pt-14">
        <PageHero
          
          title="Exhibition Organisers"
        />
      </div>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="animate-fade-in-up lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              The organiser
            </span>
            <div className="mt-6 overflow-hidden rounded-[30px] brand-gradient-radial p-8 text-white shadow-2xl sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <Building2 className="size-7 text-gold" />
              </div>
              <h2 className="mt-8 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Prosira Adtech Pvt. Ltd.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Organiser of doexim expo, a focused B2B international trade exhibition.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up space-y-6 [animation-delay:120ms]">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Prosira Adtech Pvt. Ltd. is the organiser of doexim expo, a focused B2B international trade exhibition designed to connect Indian exporters, importers, manufacturers, buyers, service providers and global trade stakeholders on a single platform.
              </p>
              <p>
                With expertise in exhibitions, media planning, business networking, digital marketing and trade promotion, Prosira Adtech Pvt. Ltd. is building doexim.com as a phygital trade ecosystem, integrating the physical exhibition with digital platforms and business networking opportunities.
              </p>
              <p>
                The company aims to create meaningful B2B connections, business leads, knowledge-sharing opportunities and international market access for MSMEs, IEC holders, merchant exporters and businesses involved in the export-import ecosystem.
              </p>
              <p>
                doexim expo is organised by Prosira Adtech Pvt. Ltd. with the objective of making international trade more accessible, connected and opportunity-driven for Indian businesses.
              </p>
            </div>

            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <CtaLink href="/about">
                Explore doexim Expo <ArrowRight className="size-4" />
              </CtaLink>
              <Link href="/contact" className="text-sm font-semibold text-primary transition hover:text-brand-2">
                Connect with Prosira <ArrowRight className="ml-1 inline size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}