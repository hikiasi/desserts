"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const COLORS = ["#ff136e", "#704396", "#fcf84e", "#ff8eba", "#ffecf3", "#f3e8ff"]
const BUBBLE_COUNT = 12

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
      size: Math.random() * 500 + 300,
      color: COLORS[i % COLORS.length],
      initialX: Math.random() * 100, // percentage
      initialY: Math.random() * 100, // percentage
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      scaleDuration: Math.random() * 5 + 5,
      // Reactivity multiplier: bubbles move differently based on their index
      multiplier: (i + 1) * 20
    }))
  }, [])

  if (windowSize.width === 0) return <div className="fixed inset-0 z-[-1] bg-white" />

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
      className="absolute rounded-full blur-[120px]"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${initialX}%`,
        top: `${initialY}%`,
        x: moveX,
        y: moveY,
        opacity: 0.04,
      }}
      animate={{
        // Slow floating movement
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        // Pulsing scale
        scale: [1, 1.2, 1],
      }}
      transition={{
        x: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: duration + 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: scaleDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  )
}
