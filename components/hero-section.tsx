"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#fbbf24_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div
          className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Conference Report 2025</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            <span className="text-secondary-foreground">Jackie Representing</span>
            <br />
            <span className="text-primary animate-pulse">Workerbee</span>
            <br />
            <span className="text-secondary-foreground">at AfroTech</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            An extraordinary intersection of innovation, culture, and connection
          </p>

          <div className="pt-8">
            <div className="inline-flex flex-col items-center gap-2">
              <p className="text-sm text-muted-foreground">Prepared by</p>
              <p className="text-lg font-semibold text-foreground">Jackline Namanda Kaweesi</p>
              <p className="text-sm text-muted-foreground">QA Lead, Workerbee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
