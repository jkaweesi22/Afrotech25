import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { KeyTrendsSection } from "@/components/key-trends-section"
import { ActionHighlightsSection } from "@/components/action-highlights-section"
import { IdeasSection } from "@/components/ideas-section"
import { ReflectionsSection } from "@/components/reflections-section"
import { PhotoGallery } from "@/components/photo-gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhotoGallery />
      <OverviewSection />
      <KeyTrendsSection />
      <ActionHighlightsSection />
      <IdeasSection />
      <ReflectionsSection />
    </main>
  )
}
