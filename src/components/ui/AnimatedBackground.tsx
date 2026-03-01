"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const bubbles: HTMLDivElement[] = []
    const count = 12

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement("div")
      bubble.className = "absolute rounded-full pointer-events-none blur-[100px]"

      const size = Math.random() * 400 + 200
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`

      // Dessert palette colors
      const colors = ["#ff136e", "#704396", "#fcf84e", "#ff8eba"]
      bubble.style.background = colors[i % colors.length]
      bubble.style.opacity = "0.08"

      container.appendChild(bubble)
      bubbles.push(bubble)

      gsap.set(bubble, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })

      animateBubble(bubble)
    }

    function animateBubble(el: HTMLDivElement) {
      gsap.to(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 20 + 20,
        ease: "sine.inOut",
        onComplete: () => animateBubble(el)
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      bubbles.forEach((bubble, i) => {
        gsap.to(bubble, {
          x: `+=${(e.clientX - window.innerWidth / 2) * 0.01 * (i + 1) / count}`,
          y: `+=${(e.clientY - window.innerHeight / 2) * 0.01 * (i + 1) / count}`,
          duration: 2,
          ease: "power2.out"
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (container) container.innerHTML = ""
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-white/50"
    />
  )
}
