import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaButton } from "@/components/ui/cta";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  Ship,
  Handshake,
  Building2,
  Factory,
  Boxes,
  Truck,
  Wrench,
  Rocket,
  Stamp,
  PackageCheck,
  Package,
  Anchor,
  Warehouse,
  Landmark,
  ShieldCheck,
  Wallet,
  Compass,
  Building,
  Megaphone,
  Users2,
  Network,
  Sprout,
  PiggyBank,
  Share2,
  Laptop,
  FileText,
  Eye,
  BookOpen, 
  ArrowRight
  
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DoExim Expo",
  description:
    "Learn about DoExim Expo – Connecting global import & export professionals since 2020. Discover international trade opportunities, business networking and global partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DoExim Expo"
        title="Connecting Global Import & Export Professionals"
        subtitle="Building international trade relationships by bringing together exhibitors, buyers and industry professionals from over 50 countries."
      />

      
      {/* Vision & Mission */}
     {/* ================= VISION ================= */}

<div className="mt-16 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">

  <div className="grid lg:grid-cols-[120px_1fr]">

    {/* Left Icon */}

    <div className="relative flex items-center justify-center bg-[#173FD6]">

      <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

      <div className="relative z-10">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <Eye className="h-8 w-8 text-white" />

        </div>

      </div>

    </div>

    {/* Right Content */}

    <div className="p-7 lg:p-8">

      <div className="flex items-center gap-4">

        <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
          OUR VISION
        </span>

        <div className="h-[3px] flex-1 bg-[#173FD6]" />

      </div>

      <h2 className="mt-8 max-w-4xl font-heading text-3xl lg:text-[34px] font-bold leading-tight text-slate-900">

        To build India’s most trusted global trade ecosystem.

      </h2>

      <p className="mt-8 max-w-3xl text-base leading-7 text-slate-600">

        Connecting Indian businesses with the right buyers,
        partners, services, knowledge and opportunities
        to grow beyond borders.

      </p>

      <p className="mt-6 max-w-3xl leading-8 text-slate-500">

        DoExim Trade Expo envisions a future where every
        Indian exporter, manufacturer, merchant exporter,
        service provider and trade professional can access
        global markets, build meaningful business
        relationships and discover new opportunities
        through one integrated platform.

      </p>

    </div>

  </div>

</div>
{/* ================= MISSION ================= */}

<div className="mt-12 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">

  <div className="grid lg:grid-cols-[120px_1fr]">

    {/* Left Icon */}

    <div className="relative flex items-center justify-center bg-[#173FD6]">

      <div className="absolute inset-0 bg-gradient-to-b from-[#214fff] to-[#0d2ea5]" />

      <div className="relative z-10">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <Target className="h-12 w-12 text-white" />

        </div>

      </div>

    </div>

    {/* Right */}

    <div className="p-10 lg:p-14">

      <div className="flex items-center gap-4">

        <span className="font-bold uppercase tracking-[0.25em] text-[#173FD6]">
          OUR MISSION
        </span>

        <div className="h-[3px] flex-1 bg-[#173FD6]" />

      </div>

      <h3 className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-slate-900">

        To create a powerful B2B trade platform that brings
        the entire EXIM ecosystem together under one roof.

      </h3>

      <p className="mt-4 max-w-3xl leading-8 text-slate-500">

        Enabling businesses to connect, learn,
        collaborate and grow globally.

      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            icon: Handshake,
            title: "Connect",
            desc: "Exporters, manufacturers, importers, buyers and trade professionals."
          },
          {
            icon: Users,
            title: "Business Opportunities",
            desc: "Curated B2B meetings and strategic networking."
          },
          {
            icon: Globe,
            title: "Market Access",
            desc: "Discover domestic and international markets."
          },
          {
            icon: BookOpen,
            title: "Trade Knowledge",
            desc: "Conferences, government sessions and EXIM learning."
          },
          {
            icon: Network,
            title: "EXIM Ecosystem",
            desc: "Logistics, customs, finance and certification partners."
          },
          {
            icon: Rocket,
            title: "Global Growth",
            desc: "Support MSMEs and promote Indian products worldwide."
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#173FD6] hover:bg-white hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

                <Icon className="h-6 w-6 text-[#173FD6]" />

              </div>

              <div>

                <h4 className="font-semibold text-slate-900">

                  {item.title}

                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  {item.desc}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  </div>

</div>


      {/* Visitor Profile */}
      ```tsx
{/* Visitor Profile */}
<section className="px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
        One Platform. Every Trade Connection.
      </p>
      <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Visitor Profile
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        A premium trade-floor destination for manufacturers, buyers, logistics experts, financiers, advisors, technology providers, and enablers looking to create meaningful global business connections.
      </p>
    </div>

    <div className="mt-14 space-y-6">
      {[
        {
          zone: "A",
          title: "Core Trade Profiles",
          description:
            "The primary businesses that drive sourcing, buying, and selling across global trade channels.",
          items: [
            {
              icon: Factory,
              title: "Manufacturers",
              desc: "Showcase products, capabilities and connect with international buyers.",
            },
            {
              icon: Building2,
              title: "MSMEs",
              desc: "Explore export opportunities, government schemes and global markets.",
            },
            {
              icon: Ship,
              title: "Merchant Exporters",
              desc: "Discover products, suppliers and new international markets.",
            },
            {
              icon: Boxes,
              title: "Importers",
              desc: "Source products and connect with Indian manufacturers and suppliers.",
            },
            {
              icon: Handshake,
              title: "International Buyers",
              desc: "Discover export-ready products and connect directly with Indian suppliers.",
            },
            {
              icon: Rocket,
              title: "Merchant Importers",
              desc: "Learn how to start exporting and secure your first international order.",
            },
          ],
        },
        {
          zone: "B",
          title: "Logistics, Packaging & Compliance",
          description:
            "The support network that moves, protects, clears, and certifies trade across borders.",
          items: [
            {
              icon: Truck,
              title: "Freight Forwarders",
              desc: "Connect with exporters requiring international freight and shipping solutions.",
            },
            {
              icon: Stamp,
              title: "Custom House Agents",
              desc: "Support exporters with customs clearance, documentation and compliance.",
            },
            {
              icon: PackageCheck,
              title: "Logistics Providers",
              desc: "Provide shipping, warehousing and supply chain solutions to exporters.",
            },
            {
              icon: Package,
              title: "Packaging Companies",
              desc: "Connect with exporters looking for international-standard packaging solutions.",
            },
            {
              icon: Anchor,
              title: "Shipping Lines",
              desc: "Connect with exporters requiring ocean, air and multimodal transportation.",
            },
            {
              icon: Warehouse,
              title: "Warehousing",
              desc: "Provide storage, consolidation and supply chain services for international trade.",
            },
            {
              icon: FileText,
              title: "Documentation Professionals",
              desc: "Assist businesses with shipping documents, certificates and export compliance.",
            },
            {
              icon: Award,
              title: "Certification Agencies",
              desc: "Support exporters with product standards, certification and quality requirements.",
            },
          ],
        },
        {
          zone: "C",
          title: "Finance & Insurance",
          description:
            "Financial partners who enable secure, scalable, and cross-border business growth.",
          items: [
            {
              icon: Landmark,
              title: "Banks",
              desc: "Provide export finance, international payments and trade banking solutions.",
            },
            {
              icon: ShieldCheck,
              title: "Export Credit",
              desc: "Support exporters with credit protection, insurance and risk management.",
            },
            {
              icon: Wallet,
              title: "Trade Finance",
              desc: "Help businesses access packing credit, buyer credit and export financing.",
            },
          ],
        },
        {
          zone: "D",
          title: "Government & Trade Bodies",
          description:
            "Institutions, advisors, and networks that strengthen policy, access, and market readiness.",
          items: [
            {
              icon: Compass,
              title: "Export Consultants",
              desc: "Guide businesses on export documentation, compliance and global trade.",
            },
            {
              icon: Building,
              title: "Government Agencies",
              desc: "Support exporters through schemes, registrations and trade facilitation.",
            },
            {
              icon: Megaphone,
              title: "Export Promotion Organisations",
              desc: "Connect with exporters through training, market intelligence and global trade initiatives.",
            },
            {
              icon: Globe,
              title: "Embassies",
              desc: "Build international trade connections and facilitate cross-border opportunities.",
            },
            {
              icon: Users2,
              title: "Chambers of Commerce",
              desc: "Connect businesses with international trade networks and market opportunities.",
            },
            {
              icon: Network,
              title: "Industry Associations",
              desc: "Connect members with export opportunities, training and international business networks.",
            },
            {
              icon: Sprout,
              title: "Government Incubators",
              desc: "Support export-focused startups with mentorship, funding and growth opportunities.",
            },
            {
              icon: PiggyBank,
              title: "Investors",
              desc: "Discover promising export startups and scalable international businesses.",
            },
          ],
        },
        {
          zone: "E",
          title: "Technology & Marketing",
          description:
            "Digital partners who help companies automate outreach, visibility, and sales growth.",
          items: [
            {
              icon: Share2,
              title: "Digital Marketing Agencies",
              desc: "Help exporters generate international leads and build their global presence.",
            },
            {
              icon: Laptop,
              title: "Export Technology",
              desc: "Showcase digital tools for lead generation, CRM, documentation and trade automation.",
            },
          ],
        },
        {
          zone: "F",
          title: "General Trade Enablers",
          description:
            "Specialist partners offering the extra support needed to keep trade moving smoothly.",
          items: [
            {
              icon: Wrench,
              title: "Trade Service Providers",
              desc: "Connect with businesses requiring logistics, finance, compliance and EXIM support.",
            },
          ],
        },
      ].map((group) => (
        <div
          key={group.zone}
          className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="relative flex w-full shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary px-6 py-7 text-white sm:px-7 lg:w-[240px] lg:min-h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_28%)]" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                    <span className="text-2xl font-bold tracking-tight">{group.zone}</span>
                  </div>
                  <div>
                    
                    <h3 className="mt-1 text-xl font-semibold leading-tight">{group.title}</h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/78">{group.description}</p>
              </div>

              <div className="relative mt-8 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {String(group.items.length).padStart(2, "0")} Profiles
              </div>
            </div>

            <div className="relative flex-1 bg-gradient-to-b from-white to-slate-50/50 px-5 py-6 sm:px-6 lg:px-8">
              <div className="absolute right-5 top-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                {String(group.items.length).padStart(2, "0")} Profiles
              </div>

<div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 xl:grid-cols-3">                {group.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
  <div
    key={item.title}
    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <Icon className="h-5 w-5" />
    </div>

    <div className="flex-1">
      <h3 className="text-[15px] font-semibold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-600">
        {item.desc}
      </p>
    </div>

    <ArrowRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-primary" />
  </div>
);
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 flex justify-center">
      <Link href="/exhibit">
        <CtaButton variant="cta">Explore Exhibiting Opportunities</CtaButton>
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Global Business?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Whether you're an exporter, importer, manufacturer or international
            buyer, DoExim Expo is your gateway to global trade opportunities and
            meaningful business partnerships.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/exhibit">
              <CtaButton variant="gold" size="lg">
                Explore Opportunities
              </CtaButton>
            </Link>
            <Link href="/">
              <CtaButton variant="glass" size="lg">
                Back to Home
              </CtaButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}