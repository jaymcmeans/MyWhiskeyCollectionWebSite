import { HeroSection } from "@/components/home/HeroSection"
import { OverviewSection } from "@/components/home/OverviewSection"
import { CTASection } from "@/components/home/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <CTASection />
    </main>
  )
}
