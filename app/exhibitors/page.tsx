"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { PageHero } from "@/components/page-hero"
import { CtaButton } from "@/components/ui/cta"
import { Search, Grid3x3, List, Filter } from "lucide-react"

export default function ExhibitorsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedZone, setSelectedZone] = useState("all")

  const zones = [
    { id: "all", name: "All Zones" },
    { id: "agriculture", name: "Agriculture & Food" },
    { id: "consumer", name: "Consumer Goods" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "textiles", name: "Textiles & Apparel" },
    { id: "healthcare", name: "Healthcare" },
    { id: "export", name: "Export Services" },
  ]

  const exhibitorCategories = [
    { id: "all", name: "All Categories" },
    { id: "equipment", name: "Equipment Manufacturers" },
    { id: "solution", name: "Solution Providers" },
    { id: "service", name: "Service Providers" },
    { id: "distributor", name: "Distributors" },
  ]

  // Placeholder exhibitors
  const placeholderExhibitors = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Exhibitor ${i + 1}`,
    zone: zones[Math.floor(Math.random() * (zones.length - 1)) + 1].id,
    category: exhibitorCategories[Math.floor(Math.random() * (exhibitorCategories.length - 1)) + 1].id,
    description: "Premium exhibitor specializing in automation solutions",
  }))

  return (
    <>
      <PageHero
        eyebrow="Exhibitor Directory"
        title="Discover 500+ Exhibitors"
        subtitle="Explore our comprehensive directory of automation, export, and manufacturing leaders. Search by zone, category, or company name."
      />

      {/* Search & Filter Section */}
      <section className="border-b border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search exhibitors by name, company, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Zone Filter */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Filter className="size-4" />
                Select Zone
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode & Category Filter */}
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label className="mb-3 block text-sm font-semibold text-foreground">
                  Category
                </label>
                <select className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  {exhibitorCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg border px-3 py-2 transition ${
                    viewMode === "grid"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="size-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg border px-3 py-2 transition ${
                    viewMode === "list"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                  aria-label="List view"
                >
                  <List className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{placeholderExhibitors.length}</span> exhibitors
            </p>
          </div>

          {viewMode === "grid" ? (
            // Grid View
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {placeholderExhibitors.map((exhibitor) => (
                <div key={exhibitor.id} className="glass-card rounded-xl p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {exhibitor.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {zones.find((z) => z.id === exhibitor.zone)?.name}
                      </p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-lg font-heading font-bold text-primary">
                        {exhibitor.id}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/75">{exhibitor.description}</p>
                  <CtaButton variant="outline" size="sm" className="mt-4 w-full">
                    View Details
                  </CtaButton>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-3">
              {placeholderExhibitors.map((exhibitor) => (
                <div key={exhibitor.id} className="glass-card flex items-center justify-between rounded-lg p-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground">{exhibitor.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {zones.find((z) => z.id === exhibitor.zone)?.name} • {exhibitor.description}
                    </p>
                  </div>
                  <CtaButton variant="outline" size="sm">
                    View
                  </CtaButton>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Placeholder Info */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-lg bg-primary/5 p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              📊 Exhibitor Directory Coming Soon
            </h3>
            <p className="mt-4 text-muted-foreground">
              The complete exhibitor directory with full company profiles, product catalogs, and direct contact information will be available once exhibitor registration closes.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              In the meantime, you can still explore our booth packages, sponsorship opportunities, and event agenda.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <CtaButton variant="cta">
                Book Your Booth
              </CtaButton>
              <CtaButton variant="outline">
                View Sponsorships
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
