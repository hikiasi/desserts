"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Truck, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"

const B2BHeroForm = dynamic(() => import("./B2BHeroForm").then(mod => mod.B2BHeroForm), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-white/40 backdrop-blur-md rounded-[40px] animate-pulse" />
})

export function B2BHero() {
  return (
    <section id="b2b-hero" className="relative pt-24 pb-12 md:pt-40 md:pb-24 bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Официальный дистрибьютор
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] font-heading">
                Увеличьте средний чек на 40% с премиальными десертами
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
                Прямые поставки от производителя • 180 дней хранения • Шоковая заморозка -18°C
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: TrendingUp, title: "Маржа до 100%", desc: "Закупка от 165₽, быстрая окупаемость" },
                  { icon: Clock, title: "180 дней хранения", desc: "Минимум списаний" },
                  { icon: Truck, title: "Доставка 2 раза в неделю", desc: "Бесплатно от 2000₽" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                 <Button
                   size="lg"
                   className="h-auto min-h-[56px] py-4 px-8 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 whitespace-normal"
                   onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Получить прайс и условия
                 </Button>
                 <Button
                   variant="outline"
                   size="lg"
                   className="h-14 px-8 rounded-2xl font-bold text-lg border-2"
                   onClick={() => document.getElementById('retail-catalog')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Посмотреть каталог
                 </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Image & Form */}
          <div className="lg:w-1/2 w-full flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/uploads/profitrole_classic.webp"
                alt="Профитроли премиум качества"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-sm font-bold uppercase tracking-widest mb-2">Наши десерты</div>
                <div className="text-2xl font-black">Профитроли в разрезе</div>
              </div>
            </motion.div>

            <B2BHeroForm />
          </div>
        </div>
      </div>
    </section>
  )
}
