"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cake, CheckCircle2 } from "lucide-react"

export function B2BCTA() {
  const scrollToForm = () => {
    document.getElementById('b2b-hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCatalog = () => {
    document.getElementById('retail-catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-24 bg-white px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[48px] bg-gradient-to-r from-primary via-[#704396] to-accent p-1 md:p-1.5 shadow-2xl shadow-primary/20 overflow-hidden"
        >
          <div className="bg-white rounded-[44px] p-8 md:p-20 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto lg:ml-0">
                  <Cake className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 font-heading leading-tight">
                  Начните зарабатывать на десертах <span className="text-primary underline decoration-accent underline-offset-8">уже завтра</span>
                </h2>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
                  Пробная партия со скидкой 20% + консультация по запуску десертов в вашем меню. Риск равен нулю — результат виден сразу.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    onClick={scrollToCatalog}
                    size="lg"
                    className="h-16 px-10 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  >
                    Оформить заказ
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={scrollToForm}
                    variant="outline"
                    size="lg"
                    className="h-16 px-10 rounded-2xl font-black text-lg border-2 transition-all hover:bg-slate-50"
                  >
                    Заказать со скидкой
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Бесплатная доставка", desc: "От 2000₽ по городу", icon: CheckCircle2 },
                      { title: "Оплата при получении", desc: "Первые 3 заказа", icon: CheckCircle2 },
                      { title: "Отсрочка 7 дней", desc: "После 3-го заказа", icon: CheckCircle2 },
                      { title: "Замена брака за 2 ч.", desc: "Без лишних вопросов", icon: CheckCircle2 },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-primary transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-8 p-6 bg-accent rounded-3xl text-slate-900 text-center relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Акция до конца недели
                    </div>
                    <div className="font-bold text-lg mb-1">Первый заказ от 5000₽</div>
                    <div className="text-2xl font-black uppercase tracking-widest">Бонус 500₽</div>
                    <div className="text-[10px] opacity-60 mt-2 uppercase tracking-tighter">на ваш второй заказ в нашей компании</div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
