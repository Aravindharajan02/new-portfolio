import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <Skills />
        </div>
      </section>
    </div>
  )
}

