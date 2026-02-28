"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Clock, Coffee, Store, Truck } from "lucide-react"
import Image from "next/image"

const CASES = [
  {
    title: "Кофейня «Утро», Ленинский проспект",
    type: "Кофейня, 40 посадочных мест",
    icon: Coffee,
    problem: "Десерты от локального кондитера стоили дорого (300₽ себестоимость), часто заканчивались к вечеру. Гости уходили без десерта — теряли 20% выручки.",
    solution: "Перешли на наши профитроли. Заказываем 2 раза в неделю по 50 порций. Хранятся 180 дней — ноль списаний.",
    results: [
      { label: "Средний чек", value: "+47%", desc: "с 380₽ до 560₽" },
      { label: "Заказы десертов", value: "62%", desc: "против 28% раньше" },
      { label: "Прибыль", value: "85к/мес", desc: "чистыми на десертах" }
    ],
    quote: "Профитроли стали визитной карточкой. Гости приходят специально за ними, а кофе — заодно.",
    author: "Анна, владелица",
    image: "/uploads/case-tokyo.webp"
  },
  {
    title: "Магазин «У дома», Сельма",
    type: "Продуктовый магазин",
    icon: Store,
    problem: "Не было импульсных покупок в десертном отделе. Пирожные из гипермаркетов брали плохо — невкусные, однообразные.",
    solution: "Поставили холодильник с нашими профитролями. Разместили ценники с описанием. Поставки 1 раз в неделю.",
    results: [
      { label: "Продажи", value: "+458%", desc: "с 12к до 67к/мес" },
      { label: "Повторные", value: "40%", desc: "клиенты возвращаются" },
      { label: "Рейтинг 2ГИС", value: "4.6", desc: "вырос с 3.8" }
    ],
    quote: "Люди заходят за хлебом, видят профитроли — берут «на пробу». Потом приходят целенаправленно.",
    author: "Игорь, владелец",
    image: "/uploads/case-semya.webp"
  },
  {
    title: "Доставка «ЕдаДома», сеть по городу",
    type: "Кейтеринг/доставка",
    icon: Truck,
    problem: "Клиенты часто забывали заказать десерт. Средний чек был низкий. Собственные десерты делать невыгодно (маленькие объёмы).",
    solution: "Добавили десерты в меню приложения. Менеджеры предлагают десерт к каждому заказу («Добавить профитроли за +290₽?»).",
    results: [
      { label: "Средний чек", value: "+31%", desc: "до 890₽ в среднем" },
      { label: "Доп. продажи", value: "45%", desc: "добавляют десерт" },
      { label: "Прибыль", value: "120к/мес", desc: "маржа на десертах" }
    ],
    quote: "Десерты стали допродажей номер 1. Себестоимость низкая, маржа высокая, клиенты довольны.",
    author: "Мария, менеджер",
    image: "/uploads/case-tokyo.webp" // Reusing image since only two exist
  }
]

export function B2BCases() {
  return (
    <section id="cases-section" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Наши клиенты зарабатывают больше
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Реальные истории кафе, магазинов и служб доставки Калининграда
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {CASES.map((caseItem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <caseItem.icon className="w-5 h-5 text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest">{caseItem.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading leading-tight">{caseItem.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">Проблема:</div>
                        <p className="text-slate-600 text-sm italic">"{caseItem.problem}"</p>
                    </div>
                    <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                        <div className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2">Решение:</div>
                        <p className="text-slate-700 text-sm font-medium">"{caseItem.solution}"</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {caseItem.results.map((res, j) => (
                    <div key={j} className="text-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="text-2xl font-black text-primary mb-1">{res.value}</div>
                      <div className="text-[10px] font-black text-slate-900 uppercase tracking-tight mb-1">{res.label}</div>
                      <div className="text-[9px] text-slate-400 leading-tight uppercase">{res.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="relative p-8 rounded-3xl bg-slate-50 italic text-slate-600 leading-relaxed border-l-4 border-primary">
                    "{caseItem.quote}"
                    <div className="mt-4 not-italic font-bold text-slate-900 text-sm">— {caseItem.author}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-8 font-heading">Хотите таких же результатов?</h3>
            <button
              onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-16 px-12 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 transition-all"
            >
              Заказать пробную партию
            </button>
        </div>
      </div>
    </section>
  )
}
