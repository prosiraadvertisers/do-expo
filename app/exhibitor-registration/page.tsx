import { ExhibitorForm } from '@/components/forms/exhibitor-form'

export default function ExhibitorRegistrationPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl font-bold md:text-4xl">
            Exhibitor Registration
          </h1>

          <p className="mt-3 text-muted-foreground">
            Book your exhibition space at DOEXIM Global Trade Expo 2027.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
          <ExhibitorForm />
        </div>

      </div>
    </main>
  )
}