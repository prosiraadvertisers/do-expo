import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the DoExim Global Trade Expo team. Office address, East & West zone contacts, and inquiry form.",
}

const ZONE_CONTACTS = [
  {
    zone: "East Zone",
    phone: "+91 90288 15714",
    href: "tel:+919028815714",
    gradient: "from-sky-500 to-blue-700",
    ring: "ring-sky-400/30",
  },
  {
    zone: "West Zone",
    phone: "+91 97652 59272",
    href: "tel:+919765259272",
    gradient: "from-orange-400 to-orange-600",
    ring: "ring-orange-400/30",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Have a question about exhibiting, visiting, or partnerships? Our team is ready to help you."
      />

      {/* Contact Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Office Address Card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="size-7" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Office Address
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  3rd Floor, Patil Plaza,
                  <br />
                  Swargate, Pune – 411037
                  <br />
                  Maharashtra, India
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2.5 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0 text-primary" />
                Mon – Sat, 10:00 AM – 6:00 PM
              </div>
            </div>

            {/* Zone Contact Cards */}
            {ZONE_CONTACTS.map((contact) => (
              <div
                key={contact.zone}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${contact.gradient} p-8 text-white shadow-lg`}
              >
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-black/10" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md">
                    <Phone className="size-7" />
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {contact.zone}
                    </span>
                    <a
                      href={contact.href}
                      className="mt-4 block font-heading text-2xl font-bold tracking-tight transition-colors hover:text-white/90"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <a
                    href={contact.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
                  >
                    Call Now <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Row */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-6 flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">
                  Email Us
                </h4>
                <a
                  href="mailto:connect@prosira.in"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  connect@prosira.in
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Globe className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">
                  Website
                </h4>
                <a
                  href="https://doeximexpo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  www.doeximexpo.com
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  Visit our website for latest updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Find Us
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
            Visit our office at Swargate, Pune. We&apos;re easily accessible by road and public transport.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="DoExim Expo Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.7!2d73.8567!3d18.5018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f00000001%3A0x1!2sSwargate%2C%20Pune%2C%20Maharashtra%20411037!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
