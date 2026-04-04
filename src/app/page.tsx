import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { DeferredClientChrome } from "@/components/layout/DeferredClientChrome"
import { RetailCatalogSection } from "@/components/sections/RetailCatalogSection"

const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ))
const B2BEconomy = dynamic(() => import("@/components/sections/B2BEconomy").then((mod) => mod.B2BEconomy))
const B2BCatalog = dynamic(() => import("@/components/sections/B2BCatalog").then((mod) => mod.B2BCatalog))
const B2BCases = dynamic(() => import("@/components/sections/B2BCases").then((mod) => mod.B2BCases))
const B2BHero = dynamic(() => import("@/components/sections/B2BHero").then((mod) => mod.B2BHero))
const GuaranteesDelivery = dynamic(() => import("@/components/sections/GuaranteesDelivery").then((mod) => mod.GuaranteesDelivery))
const RetailCTA = dynamic(() => import("@/components/sections/RetailCTA").then((mod) => mod.RetailCTA))
const B2BCTA = dynamic(() => import("@/components/sections/B2BCTA").then((mod) => mod.B2BCTA))

export default function Home() {
  return (
    <main className="min-h-screen">
      <DeferredClientChrome />
      <Header />

      <div id="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <B2BHero />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <RetailCatalogSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <B2BEconomy />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <B2BCatalog />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <B2BCases />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <GuaranteesDelivery />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <RetailCTA />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <B2BCTA />
        </Suspense>
      </div>

      <Footer />
    </main>
  )
}
