import Image from "next/image";

export default function LayoutPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 bg-[linear-gradient(135deg,#40126d_0%,#26145d_45%,#1d46a8_100%)]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_60%)]" />

      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-yellow-400/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-md">
            Exhibition Layout
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Exhibition Hall Layout
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/70">
            Explore the complete exhibition floor plan. Click anywhere on the
            layout to zoom in and view booth locations, entry gates, facilities,
            and visitor pathways.
          </p>
        </div>

        {/* Layout Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <Image
            src="/layout/hall-layout.svg"
            alt="Exhibition Hall Layout"
            width={3000}
            height={2000}
            priority
            className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

          
      </div>
    </section>
  );
}