import Link from "next/link";
import { Check, Minus, Crown, ArrowRight, Sparkles } from "lucide-react";

/**
 * TODO: replace with the real sponsorship benefits table. Each row is one
 * benefit; each tier holds either:
 *   - true        → included (green check)
 *   - false        → not included (dash)
 *   - a string      → included with a note (e.g. "2 Passes", "Logo Only")
 * `exclusive: true` marks a benefit that only the Title Sponsor gets —
 * it renders with a gold "Exclusive" badge instead of a plain check.
 */
type Tier = "title" | "powered" | "coPowered" | "associate";
type Cell = boolean | string;

type Benefit = {
  label: string;
  exclusive?: boolean;
  tiers: Record<Tier, Cell>;
};

const TIERS: { id: Tier; name: string; blurb: string }[] = [
  {
    id: "title",
    name: "Title Sponsor",
    blurb: "Top billing across every touchpoint",
  },
  {
    id: "powered",
    name: "Powered By",
    blurb: "Prime visibility across the expo",
  },
  {
    id: "coPowered",
    name: "Co-Powered By",
    blurb: "Strong brand presence",
  },
  {
    id: "associate",
    name: "Associate Sponsor",
    blurb: "Focused, cost-effective reach",
  },
];

const BENEFITS: Benefit[] = [
  {
    label: "Event Naming Rights",
    exclusive: true,
    tiers: { title: "Exclusive", powered: false, coPowered: false, associate: false },
  },
  {
    label: "Logo on Event Identity",
    tiers: { title: "Largest", powered: "Large", coPowered: "Medium", associate: "Standard" },
  },
  {
    label: "Main Stage Branding",
    tiers: { title: "Exclusive", powered: "Prominent", coPowered: "Shared", associate: "Limited" },
  },
  {
    label: "Inauguration Recognition",
    tiers: { title: "Chief Guest Level", powered: "VIP", coPowered: "VIP", associate: "Invitation" },
  },
  {
    label: "Speaking Opportunity",
    tiers: {
      title: "Opening Keynote",
      powered: "Premium Session",
      coPowered: "Panel Discussion",
      associate: "Workshop",
    },
  },
  {
    label: "Exhibition Space",
    tiers: {
      title: "Largest Island Pavilion",
      powered: "Largest Island Pavilion",
      coPowered: "Premium Booth",
      associate: "Premium Booth",
    },
  },
  {
    label: "Product Launch",
    tiers: { title: "Exclusive", powered: "Shared", coPowered: "Shared", associate: "Shared" },
  },
  {
    label: "Buyer Meetings",
    tiers: {
      title: "Highest Priority",
      powered: "High Priority",
      coPowered: "Priority",
      associate: "Standard",
    },
  },
  {
    label: "Delegate Database*",
    tiers: {
      title: "Premium Access",
      powered: "Limited Access",
      coPowered: "Post Event",
      associate: "Summary",
    },
  },
  {
    label: "Mobile App Branding",
    tiers: { title: "Exclusive", powered: "Shared", coPowered: "Logo", associate: "Mention" },
  },
  {
    label: "Website Branding",
    tiers: { title: "Homepage", powered: "Premium", coPowered: "Standard", associate: "Logo" },
  },
  {
    label: "Email Campaigns",
    tiers: { title: "Dedicated", powered: "Co-branded", coPowered: "Mention", associate: "Logo" },
  },
  {
    label: "Social Media Campaign",
    tiers: {
      title: "Dedicated Campaign",
      powered: "Multiple Posts",
      coPowered: "Few Posts",
      associate: "Mention",
    },
  },
  {
    label: "Press Conference",
    tiers: { title: "Lead Brand", powered: "Co-host", coPowered: "Mention", associate: "Mention" },
  },
  {
    label: "Media Interviews",
    tiers: { title: "Exclusive", powered: "Priority", coPowered: "Limited", associate: false },
  },
  {
    label: "Award Ceremony",
    tiers: {
      title: "Present Awards",
      powered: "Award Sponsor",
      coPowered: "Presenter",
      associate: "Recognition",
    },
  },
  {
    label: "VIP Lounge Access",
    tiers: {
      title: "Private Lounge",
      powered: "VIP Access",
      coPowered: "VIP Access",
      associate: "General",
    },
  },
  {
    label: "Networking Dinner",
    tiers: { title: "Host", powered: "VIP", coPowered: "VIP", associate: "VIP" },
  },
  {
    label: "Digital Screens",
    tiers: { title: "Maximum", powered: "High", coPowered: "Medium", associate: "Limited" },
  },
  {
    label: "Printed Collateral",
    tiers: { title: "Front Cover", powered: "Premium", coPowered: "Standard", associate: "Standard" },
  },
  {
    label: "Brand Film",
    tiers: {
      title: "Opening Film",
      powered: "During Break",
      coPowered: "During Break",
      associate: "During Break",
    },
  },
  {
    label: "Year-round DoExim Digital Platform",
    tiers: {
      title: "Premium Visibility",
      powered: "Featured Listing",
      coPowered: "Enhanced Listing",
      associate: "Enhanced Listing",
    },
  },
];

const TIER_HEADER_STYLES: Record<Tier, string> = {
  title:
    "border-transparent bg-gradient-to-b from-[#191456] via-[#191B65] to-[#172977] text-white",
  powered: "border-slate-200 bg-[#191B65]/[0.06] text-[#191456]",
  coPowered: "border-slate-200 bg-[#172977]/[0.05] text-[#172977]",
  associate: "border-slate-200 bg-slate-100/70 text-slate-700",
};

const TIER_ACCENT_BAR: Record<Tier, string> = {
  title: "",
  powered: "bg-[#191B65]",
  coPowered: "bg-[#172977]/80",
  associate: "bg-slate-400",
};

const TIER_BODY_STYLES: Record<Tier, string> = {
  title: "bg-gradient-to-b from-[#191456]/[0.04] to-[#F0B429]/[0.05] group-hover:from-[#191456]/[0.08] group-hover:to-[#F0B429]/[0.1]",
  powered: "bg-[#191B65]/[0.025] group-hover:bg-[#191B65]/[0.06]",
  coPowered: "bg-[#172977]/[0.02] group-hover:bg-[#172977]/[0.05]",
  associate: "bg-slate-50/60 group-hover:bg-slate-100",
};

const TIER_BLURB_STYLES: Record<Tier, string> = {
  title: "text-white/70",
  powered: "text-[#191456]/60",
  coPowered: "text-[#172977]/55",
  associate: "text-slate-500",
};

function TierCell({ value, featured }: { value: Cell; featured?: boolean }) {
  if (value === false) {
    return (
      <span className="flex items-center justify-center">
        <Minus className="size-4 text-slate-300" />
      </span>
    );
  }

  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <span
          className={`flex size-7 items-center justify-center rounded-full ${
            featured ? "bg-emerald-500/15" : "bg-emerald-50"
          }`}
        >
          <Check className="size-4 text-emerald-600" strokeWidth={3} />
        </span>
      </span>
    );
  }

  // string value — included, with a note
  return (
    <span className="flex flex-col items-center gap-1 text-center">
      <span
        className={`flex size-7 items-center justify-center rounded-full ${
          featured ? "bg-emerald-500/15" : "bg-emerald-50"
        }`}
      >
        <Check className="size-4 text-emerald-600" strokeWidth={3} />
      </span>
      <span
        className={`text-[11px] font-semibold leading-none ${
          featured ? "text-[#191456]" : "text-slate-500"
        }`}
      >
        {value}
      </span>
    </span>
  );
}

export default function PartnerPage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#191456]/10 px-4 py-2 text-sm font-semibold text-[#191456]">
            <Sparkles className="size-4" />
            Sponsorship
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Partner With doexim Trade Expo 2027
          </h2>
          <p className="mt-5 text-lg leading-7 text-slate-600">
            Compare sponsorship tiers and the exact benefits each one
            unlocks — from headline branding to booth space, speaking
            slots and media reach.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-x-auto rounded-[28px] border border-slate-200 pt-1 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="min-w-[860px]">
            {/* Header row */}
            <div className="sticky top-0 z-20 grid grid-cols-[240px_repeat(4,1fr)] bg-white">
              <div className="flex items-end border-b border-slate-200 bg-white px-6 py-6">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Benefits
                </span>
              </div>

              {TIERS.map((tier) => {
                const featured = tier.id === "title";
                return (
                  <div
                    key={tier.id}
                    className={`relative overflow-hidden border-b px-5 pb-6 pt-7 text-center ${TIER_HEADER_STYLES[tier.id]}`}
                  >
                    {!featured && (
                      <span
                        className={`absolute inset-x-0 top-0 h-1 ${TIER_ACCENT_BAR[tier.id]}`}
                      />
                    )}
                    {featured && (
                      <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#F0B429] to-[#F7D774] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#191456] shadow-md">
                        <Crown className="size-3.5" />
                        Premium
                      </span>
                    )}
                    <p className="font-heading text-lg font-bold">
                      {tier.name}
                    </p>
                    <p
                      className={`mt-1 text-xs ${TIER_BLURB_STYLES[tier.id]}`}
                    >
                      {tier.blurb}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Benefit rows */}
            <div>
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.label}
                  className={`group grid grid-cols-[240px_repeat(4,1fr)] ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                    <span className="text-sm font-medium text-slate-700">
                      {benefit.label}
                    </span>
                    {benefit.exclusive && (
                      <span className="inline-flex items-center rounded-full bg-[#F0B429]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#a9791a]">
                        Exclusive
                      </span>
                    )}
                  </div>

                  {TIERS.map((tier) => {
                    const featured = tier.id === "title";
                    return (
                      <div
                        key={tier.id}
                        className={`flex items-center justify-center border-b border-slate-100 px-4 py-4 transition-colors duration-200 ${TIER_BODY_STYLES[tier.id]}`}
                      >
                        <TierCell
                          value={benefit.tiers[tier.id]}
                          featured={featured}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 rounded-[28px] bg-gradient-to-r from-[#191456] via-[#191B65] to-[#172977] px-8 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Ready to put your brand in front of global buyers?
            </h3>
            <p className="mt-2 max-w-xl text-white/75">
              Limited sponsorship slots available for DO EXIM Trade Expo
              2027. Lock in your tier before booths sell out.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#191456] transition hover:scale-105"
          >
            Become a Sponsor <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}