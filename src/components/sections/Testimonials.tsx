"use client"

import { motion } from "framer-motion"
import { Star, Quote, BadgeCheck } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const TESTIMONIALS = [
  {
    name: "Елена",
    role: "Управляющая кафе «Солнечное»",
    text: "Заказали на пробу 10 упаковок профитролей. Разлетелись за 2 дня! Теперь заказываем 2 раза в неделю по 30-40 упаковок. Гости в восторге, особенно от ванильных и карамельных. Средний чек +200₽ на каждого гостя.",
    rating: 5,
    date: "2 недели назад",
    verified: true
  },
  {
    name: "Дмитрий",
    role: "Владелец сети магазинов «Продукты 24»",
    text: "Работаем уже 4 месяца. Профитроли продаются лучше любых других десертов. Срок хранения 180 дней — это огромный плюс, ноль списаний. Менеджер всегда на связи, привозят точно по графику. Рекомендую!",
    rating: 5,
    date: "1 месяц назад",
    verified: true
  },
  {
    name: "Алина",
    role: "Шеф-кондитер ресторана «Прибой»",
    text: "Я кондитер с 15-летним стажем, и скажу честно: эти профитроли вкуснее, чем я делаю сама 😄 Натуральный состав, видно, что сливки настоящие. Экономлю 5 часов в день — теперь фокусируюсь на тортах на заказ.",
    rating: 5,
    date: "3 недели назад",
    verified: true
  },
  {
    name: "Игорь",
    role: "Владелец кофейни «Эспрессо»",
    text: "Качество супер, цены адекватные. Единственное — хотелось бы больше вкусов (особенно с ягодами). Но в целом очень доволен, будем работать дальше!",
    rating: 4,
    date: "1 неделю назад",
    verified: true
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Что говорят наши партнёры
          </h2>
          <p className="text-slate-500 text-lg">
            47 кафе и магазинов уже работают с нами
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-slate-50 p-8 rounded-[40px] border border-slate-100 flex flex-col relative group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, idx) => (
                            <Star
                                key={idx}
                                className={`w-4 h-4 ${idx < t.rating ? 'text-primary fill-primary' : 'text-slate-200 fill-slate-200'}`}
                            />
                        ))}
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                        "{t.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-black shadow-sm border border-slate-100">
                            {t.name[0]}
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-900">{t.name}</span>
                                {t.verified && <BadgeCheck className="w-4 h-4 text-primary" />}
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.role}</div>
                        </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 h-12 w-12 border-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="-right-12 h-12 w-12 border-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-all" />
          </Carousel>
        </div>

        <div className="mt-16 text-center">
            <button
                onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
                Присоединиться к 47 партнёрам
            </button>
        </div>
      </div>
    </section>
  )
}
