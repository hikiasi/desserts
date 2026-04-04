"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const COLORS = ["#ff136e", "#704396", "#fcf84e", "#ff8eba", "#ffecf3", "#f3e8ff"]
const BUBBLE_COUNT = 3

export function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Use springs for smooth mouse-reactive movement
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -0.5 to 0.5
      mouseX.set((e.clientX / window.innerWidth) - 0.5)
      mouseY.set((e.clientY / window.innerHeight) - 0.5)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Memoize bubbles to prevent regeneration on every render
  const bubbles = useMemo(() => {
    return Array.from({ length: BUBBLE_COUNT }).map((_, i) => ({
      id: i,
      size: [300, 400, 350][i],
      color: COLORS[i % COLORS.length],
      initialX: [10, 80, 20][i], // percentage
      initialY: [10, 20, 70][i], // percentage
      duration: 30,
      delay: i * -5,
      scaleDuration: [5, 6, 7][i],
      // Reactivity multiplier: bubbles move differently based on their index
      multiplier: (i + 1) * 15
    }))
  }, [])

  if (windowSize.width === 0 || windowSize.width < 768) return <div className="fixed inset-0 z-[-1] bg-white" />

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          {...bubble}
          springX={springX}
          springY={springY}
        />
      ))}
    </div>
  )
}

function Bubble({ size, color, initialX, initialY, duration, delay, scaleDuration, multiplier, springX, springY }: any) {
  // Transform mouse spring values to pixel offsets for this specific bubble
  const moveX = useTransform(springX, (v: number) => v * multiplier)
  const moveY = useTransform(springY, (v: number) => v * multiplier)

  return (
    <motion.div
      className="absolute rounded-full blur-[40px] will-change-transform"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${initialX}%`,
        top: `${initialY}%`,
        x: moveX,
        y: moveY,
        opacity: 0.03,
      }}
    />
  )
}
