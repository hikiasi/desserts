"use client"

import { motion } from "framer-motion"
import { MessageSquare, PackageOpen, Truck, Repeat, ShieldCheck } from "lucide-react"

const B2B_STEPS = [
  {
    icon: MessageSquare,
    title: "Шаг 1: День 1 — Знакомство",
    time: "15 минут",
    details: [
      "Заявка и консультация за 10 минут",
      "Подбор ассортимента под ваш тип заведения",
      "Отправка прайса и условий"
    ],
    benefit: "Полный прайс и рекомендации"
  },
  {
    icon: PackageOpen,
    title: "Шаг 2: День 2 — Пробная партия",
    time: "1 день",
    details: [
      "Заказ от 2000₽ с автоскидкой 20%",
      "Оценка качества на ваших гостях",
      "Сбор обратной связи и выбор хитов"
    ],
    benefit: "Реакция гостей без рисков"
  },
  {
    icon: Truck,
    title: "Шаг 3: День 3 — Первая поставка",
    time: "1 день",
    details: [
      "Полноценный заказ нужных позиций",
      "Доставка в термосумках -18°C",
      "Все документы (декларации, накладные)"
    ],
    benefit: "Готовый товар на продаже"
  },
  {
    icon: Repeat,
    title: "Регулярные поставки",
    time: "2 раза в неделю",
    details: [
      "Фиксированный график (Вт, Пт)",
      "Заказ за 1 день до доставки",
      "Отсрочка 7 дней (после 3-х заказов)"
    ],
    benefit: "Стабильность и предсказуемость"
  }
]

export function B2BProcess() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            От заявки до первой продажи — 3 дня
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Никаких сложных контрактов и предоплат. Простой и быстрый запуск десертов в вашем меню.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {B2B_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                {step.time}
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-heading leading-tight">{step.title}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {step.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">Что получаете:</div>
                <div className="text-sm font-bold text-slate-900">{step.benefit}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 bg-primary rounded-[32px] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-primary/20"
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2 font-heading">Наша гарантия</h4>
            <p className="text-white/80 leading-relaxed">
              Если десерты не понравятся вам или вашим гостям после пробной партии — <span className="font-bold text-white text-lg underline underline-offset-4 decoration-accent">заберём обратно и вернём деньги</span>. Без вопросов и штрафов. Работаем на доверии.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
