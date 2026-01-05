"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Lightbulb, Users, BookOpen } from "lucide-react"

const ideas = [
  {
    icon: Lightbulb,
    title: "Gamify Our Presentations",
    description:
      "Transforming demos and presentations into interactive, gamified experiences can make our storytelling more memorable and engaging. This approach not only captivates audiences but also reinforces retention and excitement about our products.",
  },
  {
    icon: Users,
    title: "Leverage Social Media & Influencer Partnerships",
    description:
      "Building partnerships with influencers and thought leaders can amplify Workerbee's voice, extending our reach and credibility across digital communities. Sharing AfroTech highlights—especially through a post tagging Morgan DeBaun—can further cement our connection to AfroTech's network and values.",
  },
  {
    icon: BookOpen,
    title: "Educate Through Our Channels",
    description:
      "Using Workerbee's social platforms to share AI insights in our distinctive, relatable style can establish us as a trusted voice in the responsible AI conversation. Educational storytelling will help demystify AI while positioning Workerbee as both innovative and community-driven.",
  },
]

export function IdeasSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ideas.forEach((_, index) => {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Moving Forward</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ideas We Can Apply Going Forward</h2>
            <p className="text-lg text-muted-foreground">Strategic initiatives to amplify Workerbee's impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ideas.map((idea, index) => {
              const Icon = idea.icon
              return (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-xl transition-all duration-700 ${
                    visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{idea.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{idea.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
