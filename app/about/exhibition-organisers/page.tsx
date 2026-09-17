import type { Metadata } from "next";
import { ArrowRight, Globe2, Handshake, Lightbulb } from "lucide-react";
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
    description:
      "Creating practical opportunities for businesses to meet, collaborate and build lasting partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge and leads",
    description:
      "Bringing together ideas, expertise and business leads that help the export-import ecosystem grow.",
  },
  {
    icon: Globe2,
    title: "International access",
    description:
      "Making global markets and trade stakeholders more accessible to Indian businesses and MSMEs.",
  },
];

export default function ExhibitionOrganisersPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-14">
        <PageHero title="Exhibition Organisers" />
      </div>

      {/* Main Section */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left - Organiser Card */}
          <div className="animate-fade-in-up lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary sm:text-sm">
              The organiser
            </span>

            <div className="mt-5 overflow-hidden rounded-[24px] brand-gradient-radial p-6 text-white shadow-2xl sm:rounded-[30px] sm:p-8 lg:p-10">
              {/* Logo */}
              {/* Prosira Logo */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 p-3 sm:h-24 sm:w-24 sm:p-4">
                <img
                  src="/prosiralogo/prosiralogo.png"
                  alt="Prosira Adtech Pvt. Ltd. Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Company Name */}
              <h2 className="mt-6 whitespace-nowrap font-heading text-[20px] font-bold leading-tight sm:mt-8 sm:text-3xl lg:text-4xl">
  Prosira Adtech Pvt. Ltd.
</h2>

              <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Organiser of doexim expo, a focused B2B international trade
                exhibition.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up space-y-6 [animation-delay:120ms]">
            <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Prosira Adtech Pvt. Ltd. is the organiser of doexim expo, a
                focused B2B international trade exhibition designed to connect
                Indian exporters, importers, manufacturers, buyers, service
                providers and global trade stakeholders on a single platform.
              </p>

              <p>
                With expertise in exhibitions, media planning, business
                networking, digital marketing and trade promotion, Prosira
                Adtech Pvt. Ltd. is building doexim.com as a phygital trade
                ecosystem, integrating the physical exhibition with digital
                platforms and business networking opportunities.
              </p>

              <p>
                The company aims to create meaningful B2B connections, business
                leads, knowledge-sharing opportunities and international market
                access for MSMEs, IEC holders, merchant exporters and businesses
                involved in the export-import ecosystem.
              </p>

              <p>
                doexim expo is organised by Prosira Adtech Pvt. Ltd. with the
                objective of making international trade more accessible,
                connected and opportunity-driven for Indian businesses.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
                >
                  <Icon className="size-6 text-primary" />

                  <h3 className="mt-4 font-heading text-base font-bold leading-snug text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <CtaLink href="/">
                Explore doexim Expo
                <ArrowRight className="size-4" />
              </CtaLink>

              <a
                href="https://www.prosira.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold text-primary transition hover:text-brand-2"
              >
                Connect with Prosira
                <ArrowRight className="ml-1 size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
