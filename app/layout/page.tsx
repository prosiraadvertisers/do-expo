import Image from "next/image";

export default function LayoutPage() {
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Exhibition Hall Layout
          </h1>

          <p className="mt-3 text-muted-foreground">
            Click anywhere on the layout to zoom.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

          <Image
            src="/layout/hall-layout.svg"
            alt="Hall Layout"
            width={3000}
            height={2000}
            className="w-full h-auto"
            priority
          />

        </div>

      </div>
    </section>
  );
}