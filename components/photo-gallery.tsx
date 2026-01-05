"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20at%201.22.54%E2%80%AFPM-sdJt6fRCYnOlO3NryVO5PliY7tPQuj.png",
    alt: "Jackie at AfroTech Conference sign",
    caption: "Ready to represent Workerbee",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20at%201.23.09%E2%80%AFPM.png-n6CXWWpV3GPRUZbNOXq1sjfTU4LQlh.jpeg",
    alt: "AfroTech signage at night",
    caption: "The energy of AfroTech",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20at%201.22.11%E2%80%AFPM.png-3nNmjamK3TtK4Cy1vq4fJskvIdivs1.jpeg",
    alt: "AfroTech conference floor",
    caption: "Thousands of innovators gathering",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-06%20at%201.21.50%E2%80%AFPM.png-9yS9MuayKYeAotA1V5ZmqRr5nBzpO1.jpeg",
    alt: "Nelson Mandela quote on conference screen",
    caption: "Inspiration from Nelson Mandela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2013%2C%202025%2C%2010_41_07%20AM-r9kDQIu0g588i1Nuolre6snOzxPCvy.png",
    alt: "Workerbee branded sneakers",
    caption: "Stepping into AfroTech with style",
  },
]

export function PhotoGallery() {
  const [visiblePhotos, setVisiblePhotos] = useState<boolean[]>([])

  useEffect(() => {
    const timers = photos.map((_, index) =>
      setTimeout(() => {
        setVisiblePhotos((prev) => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, index * 200),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Experience in Pictures</h2>
          <p className="text-muted-foreground text-lg">Capturing the moments that defined AfroTech 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-700 ${
                visiblePhotos[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
