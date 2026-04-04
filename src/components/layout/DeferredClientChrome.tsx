"use client"

import dynamic from "next/dynamic"

const AnimatedBackground = dynamic(() => import("@/components/ui/AnimatedBackground").then((mod) => mod.AnimatedBackground), {
  ssr: false,
})

const StickyFeatures = dynamic(() => import("@/components/layout/StickyFeatures").then((mod) => mod.StickyFeatures), {
  ssr: false,
})

export function DeferredClientChrome() {
  return (
    <>
      <AnimatedBackground />
      <StickyFeatures />
    </>
  )
}
