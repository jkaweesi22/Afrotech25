"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const trends = [
  {
    number: "01",
    title: "Ownership, Equity & Representation in the AI Economy",
    description:
      "Conversations consistently highlighted the importance of ensuring underrepresented communities have a stake in the AI ecosystem—not just as users, but as builders, investors, and innovators. There is growing momentum toward creating inclusive AI infrastructures that reflect the diversity of the communities they aim to serve.",
  },
  {
    number: "02",
    title: "Skills Shift & Readiness for the Future of Work",
    description:
      "Many attendees expressed a mix of curiosity and urgency about upskilling for the AI-driven future. This reinforced the need for accessible education, micro-learning, and mentorship programs that demystify AI and empower professionals to adapt.",
  },
  {
    number: "03",
    title: "Cautious Exploration of AI",
    description:
      "While enthusiasm was high, there remains a sense of caution. Many professionals are still treading lightly, balancing excitement with questions about data privacy, ethics, and the long-term implications of automation. This signals a continued need for trusted, transparent AI tools—a space Workerbee is well-positioned to lead in.",
  },
]

export function KeyTrendsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trends.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Key Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Trends in AI & Work</h2>
            <p className="text-lg text-muted-foreground">Three major themes emerged from conversations at AfroTech</p>
          </div>

          <div className="space-y-6">
            {trends.map((trend, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 border-l-4 border-l-primary transition-all duration-700 hover:shadow-lg ${
                  visibleCards[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{trend.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{trend.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
