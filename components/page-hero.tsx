import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
<section className="brand-gradient-radial h-[180px] px-4 text-white sm:h-[200px] lg:h-[220px]">      <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center text-center">
        {eyebrow && (
          <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur">
            {eyebrow}
          </span>
        )}

       <h1 className="mx-auto max-w-4xl text-center font-heading text-2xl font-bold leading-tight sm:text-3xl lg:text-3xl">
  {title}
</h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}