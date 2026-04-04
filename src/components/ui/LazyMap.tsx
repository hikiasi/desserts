"use client"

import { useEffect, useState, useRef } from "react"

interface LazyMapProps {
  src: string
  title: string
}

export function LazyMap({ src, title }: LazyMapProps) {
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it comes into view
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-100 flex items-center justify-center">
      {isInView ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative' }}
          loading="lazy"
        />
      ) : (
        <div className="text-slate-400 text-sm animate-pulse">Загрузка карты...</div>
      )}
    </div>
  )
}