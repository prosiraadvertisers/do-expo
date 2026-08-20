"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import {
  Calendar,
  Clock,
  ShieldAlert,
  HardHat,
  Zap,
  Flame,
  Trash2,
  FileCheck,
  AlertTriangle,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  ArrowRight,
  Info,
  CheckCircle2,
  Ban,
  Layers,
  Scale,
  ShieldCheck,
  DoorOpen,
  MapPin,
  IndianRupee,
  ChevronDown,
  ListFilter,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { EVENT } from "@/lib/event-data";

const SECTIONS = [
  { id: "overview", label: "Event Overview & Code of Conduct", short: "Overview", icon: Info },
  { id: "possession", label: "Stall Possession & Timelines", short: "Possession", icon: Clock },
  { id: "logistics", label: "Move-In & Move-Out Protocol", short: "Move-In / Out", icon: DoorOpen },
  { id: "badges", label: "Badges, Passes & Hall Access", short: "Badges & Passes", icon: FileCheck },
  { id: "construction", label: "Stall Construction Guidelines", short: "Construction", icon: HardHat },
  { id: "deposit", label: "Security Deposit Schedule", short: "Security Deposit", icon: IndianRupee },
  { id: "mezzanine", label: "Mezzanine & Structural Limits", short: "Mezzanine", icon: Layers },
  { id: "electrical", label: "Power & Electrical Regulations", short: "Power & Safety", icon: Zap },
  { id: "safety", label: "Fire Safety & Health Protocols", short: "Fire & Safety", icon: Flame },
  { id: "housekeeping", label: "Cleaning, Storage & Security", short: "Housekeeping", icon: Trash2 },
  { id: "policies", label: "Exhibition Policies & Terms", short: "Policies & Terms", icon: Scale },
  { id: "support", label: "Exhibitor Helpdesk & Contacts", short: "Support Desk", icon: HelpCircle },
];

export default function ExhibitorManualPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Top Page Hero */}
      <div className="pt-14">
        <PageHero
          title="Exhibitor Rules & Regulations Manual"
        />
      </div>

      {/* Quick Info & Highlights Strip */}
      <section className="border-b border-border/70 bg-card/80 backdrop-blur-md sticky top-16 z-30 transition-all">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-6">
            <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 sm:bg-transparent sm:p-0">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-xs">
                <Calendar className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Expo Dates</p>
                <p className="truncate text-xs font-bold sm:text-sm text-foreground">{EVENT.dateLabel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 sm:bg-transparent sm:p-0">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-xs">
                <MapPin className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                <p className="truncate text-xs font-bold sm:text-sm text-foreground">Hall 6, BEC Mumbai</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 sm:bg-transparent sm:p-0">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-xs">
                <Clock className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Possession</p>
                <p className="truncate text-xs font-bold sm:text-sm text-foreground">13 Dec 2027 (12 PM)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 sm:bg-transparent sm:p-0">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shadow-xs">
                <ShieldCheck className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Compliance</p>
                <p className="truncate text-xs font-bold sm:text-sm text-emerald-600 dark:text-emerald-400">Mandatory for All Stalls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Drawer / Collapsible Table of Contents Bar */}
      <div className="lg:hidden border-b border-border bg-card sticky top-28 z-20 px-4 py-2.5 shadow-xs">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-muted"
        >
          <span className="flex items-center gap-2">
            <ListFilter className="size-4 text-primary" />
            Quick Navigation / Table of Contents
          </span>
          <ChevronDown
            className={`size-4 text-muted-foreground transition-transform duration-200 ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileMenuOpen && (
          <div className="mt-2.5 max-h-[60vh] overflow-y-auto rounded-2xl border border-border bg-card p-3 shadow-xl divide-y divide-border/60">
            <div className="grid grid-cols-1 gap-1">
              {SECTIONS.map((sec, index) => {
                const Icon = sec.icon;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => {
                      setActiveSection(sec.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="size-4 shrink-0 text-primary" />
                      <span className="text-foreground">{sec.label}</span>
                    </span>
                    <ChevronRight className="size-3.5 text-muted-foreground/60" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Documentation Body (Centered Container + 12-Column Responsive Layout) */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          
          {/* Left: Sticky Documentation Sidebar on Desktop (3 Columns) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="lg:sticky lg:top-36 rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3.5">
                <div className="flex items-center gap-2">
                  <FileText className="size-4.5 text-primary" />
                  <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                    Documentation Index
                  </h3>
                </div>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  12 Sections
                </span>
              </div>

              <nav className="space-y-1">
                {SECTIONS.map((sec, index) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition-all ${
                        isActive
                          ? "bg-primary text-white font-semibold shadow-xs"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition-colors ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className={`size-4 shrink-0 transition-colors ${
                          isActive ? "text-white" : "text-primary/70 group-hover:text-primary"
                        }`}
                      />
                      <span className="truncate">{sec.short}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Sidebar Quick Action Box */}
              <div className="mt-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-4 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <HelpCircle className="size-4 text-primary" />
                  <span>Technical Support 24/7</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Need stall drawing reviews or extra power sanctions?
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href="mailto:connect@prosira.in"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline text-[11px]"
                  >
                    <Mail className="size-3" /> connect@prosira.in
                  </a>
                  <a
                    href="tel:+919765259272"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline text-[11px]"
                  >
                    <Phone className="size-3" /> +91 97652 59272
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Main Content (9 Columns on Desktop) */}
          <main className="space-y-16 lg:col-span-9">
            
            {/* Section 01: Event Overview & Code of Conduct */}
            <section id="overview" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Info className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 01</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Event Overview & Code of Conduct
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Official Standard
                </span>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  <strong className="text-foreground">doexim Global Trade Expo 2027</strong> is India&apos;s premier
                  international commerce, export-import, and manufacturing platform, uniting top exporters, MSMEs,
                  global procurement heads, trade financiers, logistics powerhouses, and government trade facilitation
                  councils under one roof.
                </p>
                <p>
                  To preserve operational discipline, assure occupational safety, ensure aesthetic excellence, and maintain
                  a frictionless environment for both exhibitors and global trade delegates, every participating entity and
                  their appointed contractors must scrupulously comply with the rules outlined in this manual.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-2">
                {[
                  { title: "Stall Possession", desc: "Structured handover schedules for bare space & shell scheme booths." },
                  { title: "Set-up Timelines", desc: "Rigorous milestones to guarantee 100% readiness before expo inauguration." },
                  { title: "Construction Norms", desc: "Height limits, structural standards, and brand display uniformity." },
                  { title: "Safety & Fire Compliance", desc: "FRLS copper electrical protocols, fire suppression, and zero hazards." },
                  { title: "Power & Utilities", desc: "Transparent load allocation, 3-phase balancing, and utility sanctions." },
                  { title: "Dismantling & Move-Out", desc: "Systematic clearance, debris disposal, and deposit refund cycles." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/80 bg-muted/30 p-5 transition hover:border-primary/40 hover:bg-card hover:shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        {idx + 1}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-foreground">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 02: Stall Possession & Set-Up Schedule */}
            <section id="possession" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Clock className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 02</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Stall Possession & Set-Up Schedule
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                  Strict Cut-Offs
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Bare Space Card */}
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">Bare Space Exhibitors</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Raw Space</span>
                  </div>
                  <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Handover Date:</strong> 13 December 2027 from 12:00 Noon onwards.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Construction Deadline:</strong> Must complete all fabrication by 14 December 2027 at 12:00 PM.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Strict Cut-off:</strong> No structural, heavy carpentry, or noisy work permitted after the deadline.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <AlertTriangle className="mt-0.5 size-4.5 shrink-0 text-amber-600" />
                      <span><strong>Late Working Surcharge:</strong> ₹10,000 per hour per booth (14 Dec, 5:00 PM – 12:00 Midnight upon special sanction).</span>
                    </li>
                  </ul>
                </div>

                {/* Shell Scheme Card */}
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">Shell Scheme Exhibitors</h3>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Built-Up Booths
                    </span>
                  </div>
                  <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Handover Date:</strong> 14 December 2027 from 4:00 PM onwards.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Included Amenities:</strong> Octanorm wall panels, fascia name board, standard lighting, carpet, and power socket.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Ready-to-Use:</strong> Exhibitors need only arrange display samples, branding banners, and marketing collaterals.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-emerald-600" />
                      <span><strong>Final Dressing:</strong> Must finish booth graphics and product placement by 14 Dec, 10:00 PM.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Logistics Alert */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <Info className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="text-xs leading-relaxed sm:text-sm">
                  <strong className="text-foreground">Logistics Access Gate Notice:</strong> Entry for all heavy machinery,
                  exhibit display consignments, cranes, and construction vehicles is permitted strictly through{" "}
                  <strong className="text-primary">Gate No. 2 (Nesco Complex, Goregaon East, Mumbai)</strong>. Please instruct your
                  transporters and logistics coordinators accordingly.
                </div>
              </div>
            </section>

            {/* Section 03: Move-In & Move-Out Guidelines */}
            <section id="logistics" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <DoorOpen className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 03</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Move-In & Move-Out Protocol
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-muted px-3.5 py-1 text-xs font-semibold text-muted-foreground">
                  3-Stage Workflow
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {/* Phase 1 */}
                <div className="relative rounded-2xl border border-border/90 bg-muted/20 p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white shadow-xs">
                      01
                    </span>
                    <span className="text-xs font-semibold text-primary">Pre-Event</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-foreground">Move-In (13 Dec 2027)</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Heavy freight, industrial equipment, and large crated consignments must be coordinated through
                    official DO EXIM cargo handlers. Advance slot booking is mandatory for cranes and forklifts.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="relative rounded-2xl border border-border/90 bg-muted/20 p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white shadow-xs">
                      02
                    </span>
                    <span className="text-xs font-semibold text-primary">Live Expo</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-foreground">Show Days (15–17 Dec)</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Zero vehicular or material movement allowed inside exhibition halls during active show hours
                    (9:30 AM – 6:30 PM). Stalls must remain fully staffed and operational at all times.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="relative rounded-2xl border border-border/90 bg-muted/20 p-6 space-y-3 md:col-span-2 xl:col-span-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white shadow-xs">
                      03
                    </span>
                    <span className="text-xs font-semibold text-primary">Post-Event</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-foreground">Move-Out (17 Dec 2027)</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <strong>Hand-Carry Items:</strong> Permitted from 6:30 PM to 8:00 PM only upon gate-pass verification.<br />
                    <strong>Heavy & Bare Booths:</strong> 9:00 PM onwards through midnight.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-xs leading-relaxed sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-700 dark:text-amber-400" />
                  <div>
                    <strong className="text-foreground">Security & Loss Prevention Advisory:</strong> Security coverage is
                    limited during pre-expo fabrication and post-expo dismantling hours. Exhibitors are strictly responsible
                    for securing their own tools, laptops, display units, and sample inventories during setup days.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 04: Badges, Passes & Hall Entry */}
            <section id="badges" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <FileCheck className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 04</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Badges, Passes & Hall Access
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Access Control
                </span>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                All personnel entering the exhibition halls must carry designated credentials issued by the DO EXIM Expo
                Organizing Secretariat:
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileCheck className="size-5" />
                  </div>
                  <h4 className="mt-3.5 font-heading text-base font-bold text-foreground">Clearance Certificate</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Issued once 100% space payment, security deposit, and electrical documentation are verified.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </div>
                  <h4 className="mt-3.5 font-heading text-base font-bold text-foreground">Exhibitor Badges</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Personal photo identity badges for registered stall staff, valid throughout all 3 event days.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs md:col-span-2 xl:col-span-1">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HardHat className="size-5" />
                  </div>
                  <h4 className="mt-3.5 font-heading text-base font-bold text-foreground">Contractor Wristbands</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Colour-coded time-limited wristbands for stall builders, electricians, and dismantling crews.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <h4 className="font-heading text-sm font-bold text-foreground">Mandatory Security Checkpoint Rules</h4>
                <ul className="mt-3.5 grid grid-cols-1 gap-2.5 text-xs sm:grid-cols-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Entry strictly denied without valid printed badge or wristband.
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Contractor wristbands invalid during active trade visitor hours.
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Wristbands must be visibly worn on wrist at all times during build-up.
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Only authorized technical teams allowed inside staging zones.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 05: Stall Construction Rules */}
            <section id="construction" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <HardHat className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 05</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Stall Construction Guidelines & Limits
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Engineering Rules
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Height Limit</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Back Wall: Max 3.0m</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Back and dividing partition walls must not exceed 3 metres from the floor to retain line-of-sight uniformity across halls.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Branding Height</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Logo / Tower: Max 4.0m</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Pylon branding permitted up to 4 metres, provided it is setback at least 1.0 metre inside the boundary from adjacent stalls.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Open Side Transparency</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Max 30% Solid Facade</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Open sides facing walkways cannot be blocked more than 30% with solid walls, ensuring high visibility and seamless aisle flow.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Electrical Cabling</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">PVC Sheathing Mandatory</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    No exposed or loose cables. All power runs must be enclosed in fire-retardant PVC conduits and secured under flooring ramps.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Civil Protection</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Zero Drilling / Grouting</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Drilling into the venue concrete floor, grouting, nailing into pillars, or hacking building structures will attract severe damage penalties.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Painting Restrictions</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">No Spray Painting</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Spray painting inside halls is strictly prohibited due to toxic fumes and ventilation safety. Use roller paints or pre-laminated panels.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 06: Security Deposit Schedule */}
            <section id="deposit" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <IndianRupee className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 06</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Performance & Security Deposit Schedule
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  100% Refundable
                </span>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                All bare space booth designers and fabricators must submit a refundable Security / Performance Deposit
                prior to hall possession to ensure adherence to safety, timelines, and venue damage restoration.
              </p>

              {/* Horizontally Scrollable Table for All Viewports */}
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-muted/70 text-xs font-bold uppercase text-foreground">
                    <tr>
                      <th className="px-6 py-4">Booth Size Category</th>
                      <th className="px-6 py-4">Area (sq. mtrs)</th>
                      <th className="px-6 py-4 text-right">Refundable Deposit Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium text-foreground">Small Bare Space</td>
                      <td className="px-6 py-4 text-muted-foreground">Up to 24 sq. m</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹20,000/-</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium text-foreground">Medium Booth</td>
                      <td className="px-6 py-4 text-muted-foreground">25 to 36 sq. m</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹30,000/-</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium text-foreground">Large Stand</td>
                      <td className="px-6 py-4 text-muted-foreground">37 to 50 sq. m</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹40,000/-</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium text-foreground">Island / Peninsula Stand</td>
                      <td className="px-6 py-4 text-muted-foreground">51 to 75 sq. m</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹50,000/-</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium text-foreground">Grand Anchor Pavilion</td>
                      <td className="px-6 py-4 text-muted-foreground">Above 75 sq. m</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹1,00,000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-5 text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                <p>
                  • <strong>Payment Mode:</strong> Fabricators/Contractors must submit payment via <strong>Demand Draft (DD)</strong> or <strong>Cheque</strong> drawn in favour of <strong className="text-foreground">&quot;DO EXIM EXPO PRIVATE LIMITED&quot;</strong>.
                </p>
                <p>
                  • <strong>Digital/Cash Policy:</strong> Direct Cash or UPI payments are strongly discouraged. Any unapproved cash handling requires a ₹5,000 processing surcharge.
                </p>
                <p>
                  • <strong>Refund Timeline:</strong> Deposit will be refunded within 15 working days post-event upon clearance certificate signed by the Venue Surveyor confirming no structural debris or floor damage.
                </p>
              </div>
            </section>

            {/* Section 07: Mezzanine & Structural Restrictions */}
            <section id="mezzanine" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Layers className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 07</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Mezzanine (Multi-Level) & Structural Limits
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Structural Safety
                </span>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Exhibitors designing double-decker (mezzanine) booths must adhere to stringent structural and municipal safety codes:
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary">Requirement 01</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Minimum Area Qualification</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Mezzanine structures are permitted only on bare space plots of <strong>100 sq. metres and above</strong>.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary">Requirement 02</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Upper Deck Coverage Limit</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    The upper mezzanine level can cover a maximum of <strong>20% of the total ground booth area</strong>.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary">Requirement 03</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Total Overall Height</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    The total finished height including railings and light fixtures must not exceed <strong>4.5 metres</strong>.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <div className="text-[11px] font-bold text-primary">Requirement 04</div>
                  <h4 className="mt-1 font-heading text-base font-bold text-foreground">Adjacent Stall Buffer</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Must maintain a minimum clearance distance of <strong>2.0 metres</strong> from the perimeter of any adjacent stall.
                  </p>
                </div>
              </div>

              {/* Hall Specific Low-Ceiling Rules */}
              <div className="rounded-2xl border border-border bg-muted/40 p-5.5">
                <h4 className="font-heading text-sm font-bold text-foreground">Special Hall Notice (Under-Mezzanine & Pillar Zones)</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  In Hall 3 under-mezzanine bays (Rows A, B, G, and H), the maximum permissible stall height is capped at{" "}
                  <strong className="text-foreground">3.0 metres</strong> due to HVAC ducts and lower truss clearance.
                  All structural pillars within booths must provide accessible flaps for venue cabling. Overhead truss hanging
                  from hall roof is strictly disallowed.
                </p>
              </div>

              {/* Mandatory Documents */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5.5">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  Mandatory Submissions for 2-Tier Stalls
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  1. Government-certified Structural Engineer Stability Certificate <br />
                  2. Fire Safety Officer NOC & suppression layout plan <br />
                  3. Notarized Exhibitor Indemnity Bond submitted 21 days prior to event.
                </p>
              </div>
            </section>

            {/* Section 08: Power & Electrical Regulations */}
            <section id="electrical" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Zap className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 08</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Power & Electrical Regulations
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  IS-732 Compliant
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-6 shadow-xs space-y-3">
                  <h3 className="font-heading text-base font-bold text-foreground">Standard Power Allocation</h3>
                  <ul className="space-y-2.5 text-xs leading-relaxed text-muted-foreground">
                    <li>• Standard Constructed (Shell) booths receive 1 free 5A single-phase plug point per 9 sq. m.</li>
                    <li>• Extra power for live machinery demos must be requisitioned via the Official Power Booking Form.</li>
                    <li>• Bare space exhibitors must book full power capacity before <strong>15 November 2027</strong>.</li>
                    <li>• Refundable testing socket deposit: <strong>₹1,000 per junction point</strong>.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-6 shadow-xs space-y-3">
                  <h3 className="font-heading text-base font-bold text-foreground">Electrical Safety Guidelines (IS-732)</h3>
                  <ul className="space-y-2.5 text-xs leading-relaxed text-muted-foreground">
                    <li>• <strong>Cables:</strong> Only BIS-certified FRLS copper cables allowed. <strong>Aluminium wire is banned.</strong></li>
                    <li>• <strong>Phases:</strong> ≤ 3 kW = Single Phase (230V); &gt; 3 kW = Three Phase (415V, balanced load ≤5%).</li>
                    <li>• <strong>Protection:</strong> Dedicated MCB/ELCB/RCCB (30mA) required in booth distribution board.</li>
                    <li>• <strong>Earthing:</strong> Dual earth continuity required. Neutral-earth voltage must be ≤ 10V.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <h4 className="font-heading text-sm font-bold text-foreground">Installation Best Practices</h4>
                <div className="mt-3.5 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs leading-relaxed text-muted-foreground">
                  <div className="rounded-xl bg-card p-3.5 border border-border">
                    <strong className="text-foreground">Wire Gauges:</strong> Lighting min 1.5–2.5 sq.mm; Power circuits min 4.0 sq.mm.
                  </div>
                  <div className="rounded-xl bg-card p-3.5 border border-border">
                    <strong className="text-foreground">Load per Circuit:</strong> Max 10 light points or 800W per circuit loop.
                  </div>
                  <div className="rounded-xl bg-card p-3.5 border border-border">
                    <strong className="text-foreground">Clearance:</strong> Maintain 1.0m unobstructed space around the main panel.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 09: Fire Safety, Health & Compliance */}
            <section id="safety" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Flame className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 09</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Fire Safety, Health & Compliance
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-destructive/20 bg-destructive/5 px-3.5 py-1 text-xs font-semibold text-destructive">
                  Zero Hazard Protocol
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-xs">
                  <Ban className="size-6 text-destructive" />
                  <h4 className="mt-2.5 font-heading text-base font-bold text-foreground">Zero Flammable Materials</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    LPG cylinders, welding gas, diesel, kerosene, naked flames, and chemical explosives are completely banned.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <Flame className="size-6 text-amber-500" />
                  <h4 className="mt-2.5 font-heading text-base font-bold text-foreground">Fire Extinguishers in Booths</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Each bare space booth must place at least one 4kg ABC powder extinguisher and one 2kg CO2 unit within reach.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs md:col-span-2 xl:col-span-1">
                  <Ban className="size-6 text-destructive" />
                  <h4 className="mt-2.5 font-heading text-base font-bold text-foreground">100% Smoke-Free Facility</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Smoking and vaping are strictly prohibited anywhere inside halls. Designated smoking zones are situated outside.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-5.5">
                <h4 className="font-heading text-sm font-bold text-foreground">Emergency & Medical Protocol</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  A fully equipped Ambulance, Medical First-Aid Center, and certified paramedics are stationed at Hall 1 Foyer
                  throughout the setup, expo, and teardown periods. Mini first-aid boxes are recommended for each stall.
                </p>
              </div>
            </section>

            {/* Section 10: Cleaning, Storage & Security */}
            <section id="housekeeping" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Trash2 className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 10</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Cleaning, Storage & Hall Housekeeping
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Aisle Management
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 text-xs leading-relaxed text-muted-foreground">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Daily Waste Removal</h4>
                  <p className="mt-1.5">
                    Contractors must remove sawdust, wooden debris, thermocol, and packing cartons by 9:00 PM every build-up evening.
                    Accumulated debris in gangways will be cleared by the organizer at the fabricator&apos;s expense.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Clear Aisles & Walkways Policy</h4>
                  <p className="mt-1.5">
                    Gangways must be 100% free of packing boxes, tools, or decorative spills during exhibition hours.
                    Surplus packing crates must not be stashed behind back walls; use official off-site bonded warehousing.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Complete Post-Expo Stall Restoration</h4>
                  <p className="mt-1.5">
                    At the end of move-out on 17 December 2027 midnight, booths must be completely dismantled and restored to
                    their raw original flooring state. All self-installed vinyl, double-tape, and structures must be scraped clean.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Exhibition Policies & Terms */}
            <section id="policies" className="scroll-mt-36 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Scale className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Section 11</span>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      Commercial Terms, Customs & Event Policies
                    </h2>
                  </div>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  Legal Terms
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5.5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Catering & Hospitality</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Outside commercial food catering is strictly prohibited inside the Bombay Exhibition Centre complex per Nesco
                    hygiene regulations. In-house food courts and official caterers must be engaged for booth banquets.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5.5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Customs Clearance & ATA Carnet</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    International exhibitors selling or re-exporting overseas merchandise must obtain customs approval through the
                    appointed official DO EXIM freight forwarder under standard trade protocols.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5.5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Cancellation & Space Alteration</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Booth space allocations are non-refundable. In the event of booth cancellation or scale-down, payments received
                    stand forfeited as liquidated operational damages.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/90 bg-muted/20 p-5.5 shadow-xs">
                  <h4 className="font-heading text-sm font-bold text-foreground">Force Majeure Clause</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Organizers reserve the right to reschedule or modify event arrangements due to civil emergencies, severe natural
                    acts, or circumstances beyond reasonable administrative control without liability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Exhibitor Support & Helpdesk */}
            <section id="support" className="scroll-mt-36 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Need Assistance?</span>
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  DO EXIM Exhibitor Operations Helpdesk
                </h2>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  For stall approvals, electrical drawings submission, extra utility orders, or logistics gate-passes,
                  please reach out to our dedicated operations desk.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-3">
                  <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs">
                    <p className="text-xs font-semibold text-muted-foreground">Email Support</p>
                    <a
                      href="mailto:connect@prosira.in"
                      className="mt-1.5 flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="size-4 text-primary shrink-0" /> connect@prosira.in
                    </a>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs">
                    <p className="text-xs font-semibold text-muted-foreground">Operations Helpline</p>
                    <a
                      href="tel:+919765259272"
                      className="mt-1.5 flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="size-4 text-primary shrink-0" /> +91 97652 59272
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/book-space"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
                  >
                    Book Exhibition Space <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    Contact Secretariat
                  </Link>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
