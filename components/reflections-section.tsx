"use client"

import { useEffect, useRef, useState } from "react"

export function ReflectionsSection() {
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Final Thoughts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Reflections & Gratitude</h2>
          </div>

          <div className="prose prose-lg max-w-none mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This experience was truly outside my comfort zone, but it stretched my confidence, perspective, and sense
              of purpose. Every conversation, handshake, and exchange of ideas affirmed why we do what we do—to build
              tools and opportunities that make the world smarter, fairer, and more connected.
            </p>

            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary rounded-lg">
              <p className="text-xl font-semibold text-foreground italic">
                "Thank you for the support, encouragement, and shared belief in Workerbee's vision. This journey is just
                beginning—and AfroTech 2025 has set the tone for what's next."
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Report prepared by</p>
              <p className="text-lg font-bold text-foreground">Jackline Namanda Kaweesi</p>
              <p className="text-sm text-muted-foreground">QA Lead, Workerbee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
