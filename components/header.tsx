"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Ticket,
  Handshake,
  LayoutGrid,
  MessageCircle,
} from "lucide-react";
import { useRegistration } from "@/components/registration/registration-context";
import { CtaButton } from "@/components/ui/cta";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [exhibitOpen, setExhibitOpen] = useState(false);
  const [visitorOpen, setVisitorOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { open } = useRegistration();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEventOpen(false);
    setExhibitOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onDark = false;
  const linkColor = onDark
    ? "text-white/85 hover:text-white"
    : "text-foreground/75 hover:text-primary";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        <Logo onDark={onDark} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setEventOpen(true)}
            onMouseLeave={() => setEventOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${linkColor} ${
                eventOpen ? "text-primary" : ""
              }`}
            >
              About
              <ChevronDown
                className={`size-4 transition-transform ${
                  eventOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {eventOpen && <AboutDropdown />}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setExhibitOpen(true)}
            onMouseLeave={() => setExhibitOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${linkColor} ${
                exhibitOpen ? (onDark ? "text-white" : "text-primary") : ""
              }`}
              aria-expanded={exhibitOpen}
            >
              Exhibitors
              <ChevronDown
                className={`size-4 transition-transform ${exhibitOpen ? "rotate-180" : ""}`}
              />
            </button>
            {exhibitOpen && <ExhibitDropdown />}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setVisitorOpen(true)}
            onMouseLeave={() => setVisitorOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${linkColor} ${
                visitorOpen ? "text-primary" : ""
              }`}
            >
              Visitors
              <ChevronDown
                className={`size-4 transition-transform ${
                  visitorOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {visitorOpen && <VisitorsDropdown />}
          </div>
          <NavLink href="/partners" color={linkColor}>
            Partners
          </NavLink>

          <NavLink href="/seminar" color={linkColor}>
            Seminar
          </NavLink>

          
          <NavLink href="/layout" color={linkColor}>
            <span className="flex items-center gap-2">Layout</span>
          </NavLink>

          <NavLink href="/media" color={linkColor}>
            Media
          </NavLink>
          <NavLink href="/contact" color={linkColor}>
            <span className="flex items-center gap-2">Contact Us</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={`inline-flex size-10 items-center justify-center rounded-lg lg:hidden ${
              onDark ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function VisitorsDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-72 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl">
        <ul className="space-y-1">
          <li>
            <Link
              href="/visitors"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              Why Visit doexim Expo
            </Link>
          </li>

          <li>
            <Link
              href="/visitors#why-attend"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              Who Should Attend
            </Link>
          </li>

          <li>
            <Link
              href="/visitors#visitor-registration"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              Visitor Registration
            </Link>
          </li>
<li>
            <Link
              href="/visitors#zones"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              Category Wise Zones
              
            </Link>
          </li>
          <li>
            <Link
              href="/exhibitor"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Exhibitors List
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

function Logo({ onDark }: { onDark: boolean }) {
  return (
    <Link
      href="/"
      aria-label="doexim Expo"
      className="flex items-center shrink-0 max-w-[180px] lg:max-w-[220px]"
    >
      <Image
        src={onDark ? "/logo-white.png" : "/logo-dark.png"}
        alt="doexim Expo"
        width={180}
        height={38}
        priority
className="h-8 sm:h-10 lg:h-10 w-auto object-contain transition-all duration-300"      />
    </Link>
  );
}

function NavLink({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${color}`}
    >
      {children}
    </Link>
  );
}

function AboutDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-72 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl animate-fade-in-up">
        <ul className="space-y-1">
          <li>
            <Link
              href="/about"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              About doexim Expo
            </Link>
          </li>

          

          <li>
            <Link
              href="/about#expo-highlights"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              Expo Highlights
            </Link>
          </li>

          <li>
            <Link
              href="/event"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Event Flow
            </Link>
          </li>

            <li>
          <Link
              href=""
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              doexim Excellence Awards
            </Link>
          </li>
          <li>
            <Link
              href="/about#board-advisory"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
               Board of Commitee
            </Link>
          </li>

          <li>
            <Link
              href="/about#faq"
              className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function EventDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-64 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl animate-fade-in-up">
        <ul className="space-y-1">
          <li>
            <Link
              href="/pre-event"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Pre-Event Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/event"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Event Flow
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ExhibitDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-64 overflow-hidden rounded-2xl border border-border bg-popover p-4 shadow-2xl animate-fade-in-up">
        <ul className="space-y-1">
          <li>
            <Link
              href="/why-doexim-expo"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Why doexim expo
            </Link>
          </li>

          <li>
            <Link
                  href="/exhibitors#visitor-profile"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Visitor Profile
            </Link>
          </li>

          <li>
            <Link
              href="/book-space"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Book Your Space
            </Link>
          </li>
          <li></li>
          <li>
            <Link
              href="/pre-event"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Pre-Event Schedule
            </Link>
          </li>

          
          
          <li>
            <Link
              href="/exhibitor-manual"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Exhibitor Manual & Rules
            </Link>
          </li>
          <li>
            <Link
              href="/exhibitors"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
            >
              Exhibitors brochure
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { open } = useRegistration();
  const [eventOpen, setEventOpen] = useState(false);
  const [exhibitOpen, setExhibitOpen] = useState(false);
  const [visitorOpen, setVisitorOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-2">
        {/* About Dropdown */}
        <div className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold"
            onClick={() => setEventOpen((v) => !v)}
            aria-expanded={eventOpen}
          >
            About
            <ChevronDown
              className={`size-5 transition-transform ${eventOpen ? "rotate-180" : ""}`}
            />
          </button>
          {eventOpen && (
            <div className="pb-3">
              <Link
                href="/about"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                About doexim Expo
              </Link>
              <Link
                href="/about#expo-highlights"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Expo Highlights
              </Link>
              <Link
                href="/event"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Event Flow
              </Link>
              <Link
                href=""
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                doexim Excellence Awards
              </Link>
              <Link
                href="/about#board-advisory"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Board of Commitee
              </Link>
              <Link
                href="/about#faq"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                FAQ
              </Link>
            </div>
          )}
        </div>

        {/* Exhibitors Dropdown */}
        <div className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold"
            onClick={() => setExhibitOpen((v) => !v)}
            aria-expanded={exhibitOpen}
          >
            Exhibitors
            <ChevronDown
              className={`size-5 transition-transform ${exhibitOpen ? "rotate-180" : ""}`}
            />
          </button>
          {exhibitOpen && (
            <div className="pb-3">
              <Link
                href="/why-doexim-expo"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Why doexim expo
              </Link>
              <Link
                href="/exhibitors#visitor-profile"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Visitor Profile
              </Link>
              <Link
                href="/book-space"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Book Your Space
              </Link>
              <Link
                href="/pre-event"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Pre-Event Schedule
              </Link>
              <Link
                href="/exhibitor-manual"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Exhibitor Manual & Rules
              </Link>
              <Link
                href="/exhibitors"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Exhibitors brochure
              </Link>
            </div>
          )}
        </div>

        {/* Visitors Dropdown */}
        <div className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold"
            onClick={() => setVisitorOpen((v) => !v)}
            aria-expanded={visitorOpen}
          >
            Visitors
            <ChevronDown
              className={`size-5 transition-transform ${visitorOpen ? "rotate-180" : ""}`}
            />
          </button>
          {visitorOpen && (
            <div className="pb-3">
              <Link
                href="/visitors"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Why Visit doexim Expo
              </Link>
              <Link
                href="/visitors#why-attend"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Who Should Attend
              </Link>
              <Link
                href="/visitors#visitor-registration"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Visitor Registration
              </Link>
              <Link
                href="/visitors#zones"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Category Wise Zones
              </Link>
              <Link
                href="/exhibitor"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                Exhibitors List
              </Link>
              <Link
                href="/visitors#visitor-faq"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                FAQ
              </Link>
            </div>
          )}
        </div>

        {/* Regular Links */}
        <MobileLink href="/partners" onClose={onClose}>
          Partners
        </MobileLink>
        <MobileLink href="/seminar" onClose={onClose}>
          Seminar
        </MobileLink>
        <MobileLink href="/layout" onClose={onClose}>
          Layout
        </MobileLink>
        <MobileLink href="/media" onClose={onClose}>
          Media
        </MobileLink>
        <MobileLink href="/contact" onClose={onClose}>
          Contact Us
        </MobileLink>

        <div className="mt-5 flex flex-col gap-3"></div>
      </nav>
    </div>
  );
}

function MobileLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="block border-b border-border py-3.5 text-base font-semibold"
    >
      {children}
    </Link>
  );
}