"use client"

import { useEffect, useRef, useState } from "react"

export function OverviewSection() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">An Extraordinary Experience</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AfroTech 2025 was an extraordinary experience—an intersection of innovation, culture, and connection. It
              offered valuable insights into how the AI economy is evolving, how professionals across industries are
              preparing for the future of work, and how platforms like{" "}
              <span className="text-primary font-semibold">Workerbee</span> can uniquely contribute to this movement.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through direct engagement and hands-on conversations, we deepened our understanding of both the
              opportunities and challenges surrounding AI adoption and representation—especially within diverse
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
