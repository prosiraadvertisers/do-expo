import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaButton } from "@/components/ui/cta";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  TrendingUp,
  Ship,
  Handshake,
  ClipboardCheck,
  MapPinned,
  Building2,
  Factory,
  Boxes,
  Truck,
  Wrench,
  Rocket,
  Stamp,
  PackageCheck,
  Package,
  PackageOpen,
  Anchor,
  Warehouse,
  BadgeCheck,
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
  Cpu,
  Share2,
  Laptop,
  FileText,
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

      {/* Why DoExim Expo — copy on the left, a stamped "expo manifest" on the right */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why DoExim Expo?
              </p>
              <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
                A trading floor built for real deals, not just booths
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                DoExim Expo is dedicated to fostering international trade and
                commerce by creating a premier platform where businesses can
                connect, learn and grow together. Since 2020, we have been
                bringing together exhibitors, buyers and trade professionals
                from around the world to explore new markets and build lasting
                business relationships.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every edition is built around one goal: fewer brochures,
                more signed leads. That means curated buyer-seller meetings,
                trade zones grouped by industry, and sessions run by people
                who move cargo for a living — not just talk about it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/exhibit">
                  <CtaButton variant="cta">Become an Exhibitor</CtaButton>
                </Link>
                <Link href="#journey">
                  <CtaButton variant="outline">See How It Works</CtaButton>
                </Link>
              </div>
            </div>

            {/* Signature element: stamped manifest panel */}
            <div
              id="statistics"
              className="glass-card overflow-hidden rounded-2xl border border-border/60"
            >
              <div className="flex items-center justify-between border-b border-dashed border-border/60 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Expo Manifest
                </p>
                <span className="rounded-full border border-primary/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  Est. 2020
                </span>
              </div>
              <div className="divide-y divide-dashed divide-border/60">
                {[
                  { icon: Users, label: "Trade Visitors", value: "15,000+" },
                  { icon: Globe, label: "Global Visitors", value: "5000+" },
                  { icon: Target, label: "Trade Zones", value: "6" },
      
                  { icon: Award, label: "Speakers & Experts", value: "80+" },
                  {
                    icon: Lightbulb,
                    label: "Startup Pavilion",
                    value: "Pitch Battle",
                  },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <span className="font-mono text-xs tabular-nums text-muted-foreground/60">
                        {String(i + 1).padStart(3, "0")}
                      </span>
                      <Icon className="size-4 shrink-0 text-primary" />
                      <span className="flex-1 text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="font-heading text-lg font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Visitor Profile — a categorized directory, not a card grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              One Platform, Every Link In The Chain
            </p>
            <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Visitor Profile
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              If your business touches a shipment at any point between
              factory and final customer — sourcing it, shipping it,
              financing it, clearing it or funding it — there is a reason
              for you to be on the floor.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {[
              {
                zone: "A",
                title: "Core Trade Profiles",
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
                    title: "Merchant Importers ",
                    desc: "Learn how to start exporting and secure your first international order.",
                  },
                ],
              },
              {
                zone: "B",
                title: "Logistics, Packaging & Compliance",
                items: [
                  {
                    icon: Truck,
                    title: "Freight Forwarders",
                    desc: "Connect with exporters requiring international freight and shipping solutions.",
                  },
                  {
                    icon: Stamp,
                    title: "Custom House Agents (CHAs)",
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
                    title: "Shipping Lines & Transport Companies",
                    desc: "Connect with exporters requiring ocean, air and multimodal transportation.",
                  },
                  {
                    icon: Warehouse,
                    title: "Warehousing & Supply Chain Companies",
                    desc: "Provide storage, consolidation and supply chain services for international trade.",
                  },
                  
                  {
                    icon: FileText,
                    title: "Export Documentation Professionals",
                    desc: "Assist businesses with shipping documents, certificates and export compliance.",
                  },
                  {
                    icon: Award,
                    title: "Product Certification & Quality Agencies",
                    desc: "Support exporters with product standards, certification and quality requirements.",
                  },
                ],
              },
              {
                zone: "C",
                title: "Finance & Insurance",
                items: [
                  {
                    icon: Landmark,
                    title: "Banks & Financial Institutions",
                    desc: "Provide export finance, international payments and trade banking solutions.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Export Credit & Insurance Providers",
                    desc: "Support exporters with credit protection, insurance and risk management.",
                  },
                  {
                    icon: Wallet,
                    title: "Export Finance Professionals",
                    desc: "Help businesses access packing credit, buyer credit and export financing.",
                  },
                ],
              },
              {
                zone: "D",
                title: "Government, Trade Bodies & Advisory",
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
                    title: "Export Promotion Organizations",
                    desc: "Connect with exporters through training, market intelligence and global trade initiatives.",
                  },
                  {
                    icon: Globe,
                    title: "Embassies & Trade Missions",
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
                    title: "Investors & Venture Capital Firms",
                    desc: "Discover promising export startups and scalable international businesses.",
                  },
                ],
              },
              {
                zone: "E",
                title: "Technology & Marketing",
                items: [
                 
                  {
                    icon: Share2,
                    title: "Digital Marketing & B2B Agencies",
                    desc: "Help exporters generate international leads and build their global presence.",
                  },
                  {
                    icon: Laptop,
                    title: "Export Technology & SaaS Providers",
                    desc: "Showcase digital tools for lead generation, CRM, documentation and trade automation.",
                  },
                ],
              },
              {
                zone: "F",
                title: "General Trade Enablers",
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
                className="glass-card overflow-hidden rounded-2xl border border-border/60"
              >
                <div className="flex items-center gap-3 border-b border-dashed border-border/60 px-5 py-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 font-mono text-xs font-bold text-primary">
                    {group.zone}
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {group.title}
                  </p>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground/50">
                    {group.items.length.toString().padStart(2, "0")} listed
                  </span>
                </div>
                <div
                  className={`grid grid-cols-1 ${
                    group.items.length > 1 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {group.items.map((item, i) => {
                    const Icon = item.icon;
                    const isRightCol =
                      group.items.length > 1 && i % 2 === 1;
                    const isLastItem = i === group.items.length - 1;
                    return (
                      <div
                        key={item.title}
                        className={`flex items-start gap-3 border-dashed border-border/60 px-5 py-4 ${
                          isLastItem ? "" : "border-b"
                        } ${isRightCol ? "sm:border-l" : ""}`}
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-sm font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/exhibit">
              <CtaButton variant="cta">
                Explore Exhibiting Opportunities
              </CtaButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-gradient-radial px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Global Business?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Whether you're an exporter, importer, manufacturer or
            international buyer, DoExim Expo is your gateway to global trade
            opportunities and meaningful business partnerships.
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