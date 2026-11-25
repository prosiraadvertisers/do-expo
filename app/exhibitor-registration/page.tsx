import { ExhibitorForm } from '@/components/forms/exhibitor-form'

export default function ExhibitorRegistrationPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background px-4 pb-16 pt-32 sm:px-6 md:pt-40 lg:px-8">

      <div className="mx-auto w-full max-w-3xl">

        {/* Page Heading */}
        <div className="mb-8 text-center">

          <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Exhibitor Registration
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Book your exhibition space at DOEXIM Global Trade Expo 2027.
          </p>

        </div>

        {/* Registration Form */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <ExhibitorForm />
        </div>

      </div>

    </main>
  )
}