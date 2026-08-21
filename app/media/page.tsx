"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero";

import {
  Newspaper,
  Calendar,
  ArrowRight,
  FileText,
  Download,
  ImageIcon,
  Play,
  Clock,
  FileImage,
  BookOpen,
  Briefcase,
  Palette,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react"
import { useState } from "react"
import type { SVGProps } from "react"

/**
 * Self-contained brand icons — plain inline SVG, no external icon-pack
 * dependency. Safe regardless of which lucide-react version is installed.
 */
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 7.02C6.35 7.02 7.25 6.12 7.25 5.02C7.25 3.91 6.35 3.02 5.25 3.02C4.14 3.02 3.25 3.91 3.25 5.02C3.25 6.12 4.14 7.02 5.25 7.02Z" />
      <path d="M20.5 20.5H17.13V14.64C17.13 13.24 17.1 11.44 15.18 11.44C13.23 11.44 12.93 12.96 12.93 14.54V20.5H9.56V8.5H12.8V10.01H12.84C13.29 9.16 14.39 8.26 16.03 8.26C19.44 8.26 20.5 10.49 20.5 13.71V20.5Z" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 8.5H16.5V5.5H14.5C12.57 5.5 11 7.07 11 9V11H9V14H11V20.5H14V14H16L16.5 11H14V9C14 8.72 14.22 8.5 14.5 8.5Z" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  )
}

/**
 * TODO: every array below is placeholder/sample data — titles, dates,
 * summaries, follower counts and file sizes are all illustrative. Swap
 * them for real content and real asset URLs before launch. Nothing else
 * needs to change; every section renders straight off these arrays.
 */

const NEWS_ITEMS = [
  {
    category: "Announcement",
    date: "21 Apr 2027",
    title: "doexim Expo 2027 registrations are now open",
    desc: "Visitor registrations and exhibitor bookings are now available for the upcoming international trade exhibition.",
  },
  {
    category: "International Trade",
    date: "28 Jan 2027",
    title: "10+ countries confirm participation",
    desc: "Global buyers, exporters and trade organizations are preparing to showcase opportunities from around the world.",
  },
  {
    category: "Business",
    date: "05 Feb 2027",
    title: "Dedicated B2B Matchmaking Program announced",
    desc: "Pre-scheduled business meetings will help importers, exporters and manufacturers build valuable partnerships.",
  },
  {
    category: "Seminar",
    date: "14 Mar 2027",
    title: "Global trade leaders confirmed for keynote sessions",
    desc: "Industry veterans and policymakers join the two-day seminar track covering exports, logistics and compliance.",
  },
  {
    category: "Venue",
    date: "02 Apr 2027",
    title: "Expo expands to Hall 6 at Bombay Exhibition Centre",
    desc: "Growing exhibitor demand has added a fourth hall, increasing total floor space by 30%.",
  },
  {
    category: "Partnership",
    date: "18 Apr 2027",
    title: "FIEO comes on board as a knowledge partner",
    desc: "The Federation of Indian Export Organisations joins to support exporter-focused programming.",
  },
]

const PRESS_RELEASES = [
  {
    title: "doexim Expo 2027 Media Fact Sheet Released",
    date: "10 Apr 2027",
    summary:
      "Official fact sheet covering exhibitor numbers, hall layout, visitor projections and international delegations.",
  },
  {
    title: "Trade Delegations from 10+ Countries Confirmed",
    date: "28 Jan 2027",
    summary:
      "A detailed breakdown of confirmed international buyer delegations and their sectors of interest.",
  },
  {
    title: "doexim Expo Announces Sponsorship Tiers for 2027",
    date: "15 Dec 2027",
    summary:
      "Title, Powered By, Co-Powered By and Associate sponsorship packages now open for the 2027 edition.",
  },
  {
    title: "Bombay Exhibition Centre Confirmed as Official Venue",
    date: "20 Nov 2027",
    summary:
      "The 2027 edition returns to BEC, Goregaon with expanded hall space across Halls 2, 3, 4 and 6.",
  },
]

const GALLERY_CATEGORIES = [
  "All",
  "Expo Highlights",
  "B2B Meetings",
  "Trade Zones",
  "Networking",
  "Product Showcase",
  "Conference Sessions",
] as const

const GALLERY_ITEMS: {
  category: (typeof GALLERY_CATEGORIES)[number]
  title: string
  tone: string
}[] = [
  { category: "Expo Highlights", title: "Opening Ceremony 2027", tone: "from-[#061AC9] to-[#3B82F6]" },
  { category: "B2B Meetings", title: "Buyer-Seller Meet Hall 6", tone: "from-blue-500 to-cyan-500" },
  { category: "Trade Zones", title: "Manufacturing Zone Walkthrough", tone: "from-slate-700 to-slate-900" },
  { category: "Networking", title: "Evening Networking Dinner", tone: "from-indigo-500 to-blue-700" },
  { category: "Product Showcase", title: "Live Product Demo — Hall 6", tone: "from-sky-500 to-blue-600" },
  { category: "Conference Sessions", title: "Keynote: Global Export Trends", tone: "from-blue-700 to-indigo-900" },
  { category: "Expo Highlights", title: "Exhibitor Floor, Day 2", tone: "from-blue-600 to-sky-400" },
  { category: "B2B Meetings", title: "One-on-One Buyer Sessions", tone: "from-cyan-600 to-blue-800" },
  { category: "Networking", title: "Delegate Lounge", tone: "from-blue-500 to-indigo-600" },
  { category: "Trade Zones", title: "Logistics & Freight Pavilion", tone: "from-slate-600 to-blue-900" },
  { category: "Conference Sessions", title: "Panel: Trade Finance", tone: "from-indigo-600 to-blue-500" },
  { category: "Product Showcase", title: "Innovation Corner", tone: "from-blue-800 to-sky-500" },
]

const VIDEOS = [
  { title: "doexim Expo 2027 — Highlights Reel", duration: "3:24", category: "Recap" },
  { title: "Why Exhibit at doexim Expo?", duration: "1:58", category: "Promo" },
  { title: "Buyer Testimonials — 2027 Edition", duration: "4:12", category: "Testimonials" },
  { title: "Walking the Show Floor", duration: "2:47", category: "Recap" },
  { title: "Keynote: The Future of Indian Exports", duration: "18:36", category: "Seminar" },
  { title: "Behind the Scenes — Setup Week", duration: "2:05", category: "Behind the Scenes" },
]

const MEDIA_KIT = [
  { icon: FileImage, label: "Official Logo", format: "PNG", size: "2.4 MB" },
  { icon: ImageIcon, label: "Official Logo", format: "SVG", size: "180 KB" },
  { icon: Palette, label: "Brand Guidelines", format: "PDF", size: "8.1 MB" },
  { icon: BookOpen, label: "Event Brochure", format: "PDF", size: "12.6 MB" },
  { icon: Briefcase, label: "Press Kit", format: "ZIP", size: "34 MB" },
  { icon: Sparkles, label: "Marketing Assets", format: "ZIP", size: "56 MB" },
]

const SOCIALS = [
  { platform: "Instagram", handle: "@doeximexpo", followers: "18.2K", icon: InstagramIcon, tone: "from-pink-500 via-red-500 to-yellow-500" },
  { platform: "LinkedIn", handle: "doexim Trade Expo", followers: "24.5K", icon: LinkedinIcon, tone: "from-sky-600 to-blue-700" },
  { platform: "Facebook", handle: "doexim Expo", followers: "31.7K", icon: FacebookIcon, tone: "from-blue-500 to-blue-700" },
  { platform: "YouTube", handle: "doexim Expo", followers: "9.4K", icon: YoutubeIcon, tone: "from-red-500 to-red-700" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center rounded-full bg-[#061AC9]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#061AC9]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-600">{description}</p>
      )}
    </motion.div>
  )
}

export default function MediaCenterPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof GALLERY_CATEGORIES)[number]>("All")

  const filteredGallery =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="pt-14">
              <PageHero title=" Media, Photos & News Resources">
                
              </PageHero>
            </div>

      {/* ================= LATEST NEWS ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="News"
            title="Latest News &amp; Announcements"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item, i) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#061AC9]/30 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-[#061AC9]/10 px-3 py-1 text-xs font-bold text-[#061AC9]">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="size-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#061AC9] transition-colors group-hover:text-[#1326CB]">
                  Read More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRESS RELEASES ================= */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Press" title="Press Releases" />

          <div className="relative mt-14">
            <div className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 sm:block" />

            <div className="space-y-6">
              {PRESS_RELEASES.map((release, i) => (
                <motion.div
                  key={release.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-start"
                >
                  <span className="relative z-10 mt-1 hidden size-8 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-[#061AC9] sm:flex">
                    <FileText className="size-3.5 text-white" />
                  </span>

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-lg font-bold text-slate-900">
                        {release.title}
                      </h3>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                        <Calendar className="size-3.5" />
                        {release.date}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {release.summary}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-[#061AC9]/40 hover:bg-[#061AC9]/5 hover:text-[#061AC9]">
                      <Download className="size-3.5" />
                      Download PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Gallery" title="Photo Gallery" />

          {/* Category filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:text-sm ${
                  activeCategory === cat
                    ? "bg-[#061AC9] text-white shadow-md shadow-[#061AC9]/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${item.tone}`}
                >
                  <ImageIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-white/25 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#061AC9]">
                    {item.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Watch" title="Video Gallery" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video, i) => (
              <motion.div
                key={video.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0B1330] to-[#061AC9]">
                  <button
                    aria-label={`Play ${video.title}`}
                    className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play className="size-5 fill-[#061AC9] text-[#061AC9]" />
                  </button>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white">
                    <Clock className="size-3" />
                    {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#061AC9]">
                    {video.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-base font-bold text-slate-900">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEDIA KIT ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Downloads"
            title="Media Kit"
            description="Official logos, brand guidelines and press-ready assets for media and partners."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_KIT.map((asset, i) => (
              <motion.div
                key={`${asset.label}-${asset.format}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#061AC9]/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#061AC9]/10 text-[#061AC9]">
                    <asset.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{asset.label}</h3>
                    <p className="text-xs text-slate-400">
                      {asset.format} &middot; {asset.size}
                    </p>
                  </div>
                </div>
                <button
                  aria-label={`Download ${asset.label}`}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-[#061AC9] group-hover:text-white"
                >
                  <Download className="size-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Follow Us" title="Social Media" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.platform}
                href="#"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span
                  className={`mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${social.tone}`}
                >
                  <social.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-bold text-slate-900">
                  {social.platform}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{social.handle}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#061AC9]">
                  {social.followers} Followers
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRESS CONTACT ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#061AC9] via-[#0B1330] to-[#061AC9] p-10 text-white sm:p-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur">
              Press Contact
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
              Media Relations
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              For interview requests, press accreditation or media
              partnerships, reach out to our media relations team.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-white/70" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Email
                  </p>
                  <a
                    href="mailto:media@doeximexpo.com"
                    className="text-sm font-semibold hover:underline"
                  >
                    media@doeximexpo.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-white/70" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Phone
                  </p>
                  <a
                    href="tel:+919028815714"
                    className="text-sm font-semibold hover:underline"
                  >
                    +91 90288 15714
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-white/70" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Office
                  </p>
                  <p className="text-sm font-semibold">
                    Patil Plaza, Swargate, Pune
                  </p>
                </div>
              </div>
            </div>

            <a
              href="mailto:media@doeximexpo.com"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#061AC9] transition hover:scale-105"
            >
              Contact Media Team <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}