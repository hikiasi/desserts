"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const bubbles: HTMLDivElement[] = []
    const count = 16

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement("div")
      bubble.className = "absolute rounded-full pointer-events-none blur-[150px]"

      const size = Math.random() * 600 + 300
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`

      // Expanded dessert palette colors
      const colors = ["#ff136e", "#704396", "#fcf84e", "#ff8eba", "#ffecf3", "#f3e8ff"]
      bubble.style.background = colors[i % colors.length]
      bubble.style.opacity = (Math.random() * 0.03 + 0.02).toString() // Very subtle: 0.02 - 0.05

      container.appendChild(bubble)
      bubbles.push(bubble)

      gsap.set(bubble, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.75,
      })

      animateBubble(bubble)
      pulseBubble(bubble)
    }

    function animateBubble(el: HTMLDivElement) {
      gsap.to(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 30 + 30, // Slower movement
        ease: "sine.inOut",
        onComplete: () => animateBubble(el)
      })
    }

    function pulseBubble(el: HTMLDivElement) {
      gsap.to(el, {
        scale: Math.random() * 0.4 + 1.1,
        duration: Math.random() * 5 + 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
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
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white"
    />
  )
}
