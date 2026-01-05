"use client"

import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    stat: "41",
    label: "Personal Conversations",
    description: "Engaged with AfroTech attendees and collected their contact details",
  },
  {
    stat: "100%",
    label: "Follow-up Rate",
    description: "Sent personalized follow-up emails featuring QR codes for CareerBee on iOS and Android",
  },
  {
    stat: "Multiple",
    label: "Community Connections",
    description: "Followed on the communities that I was invited to join",
  },
]

export function ActionHighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Action Highlights</h2>
            <p className="text-lg text-secondary-foreground/70">Making meaningful connections and driving engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-4 border-primary/30">
                    <span className="text-3xl font-bold text-primary">{highlight.stat}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.label}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
