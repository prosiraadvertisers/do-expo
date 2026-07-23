import { Hero } from "@/components/home/hero"
import { Highlights } from "@/components/home/highlights"
import { PriorityCards } from "@/components/home/priority-cards"
import { HomeSections } from "@/components/home/sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PriorityCards />
      <div className="pt-14">
        <Highlights />
      </div>
      <HomeSections />
    </>
  )
}
