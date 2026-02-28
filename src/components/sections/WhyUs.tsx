"use client"

import { motion } from "framer-motion"
import { Handshake, Snowflake, ShieldCheck, Award, Headset, RotateCcw, TrendingUp, X } from "lucide-react"

const REASONS = [
  {
    icon: Handshake,
    title: "Прямые поставки",
    text: "Работаем напрямую с фабрикой-производителем. Минус посредники между заводом и вами.",
    benefit: "Цены на 20-30% ниже рынка"
  },
  {
    icon: Snowflake,
    title: "Шоковая заморозка",
    text: "Заморозка сразу после изготовления при -18°C. Сохраняется вкус, текстура и свежесть.",
    benefit: "180 дней без потери качества"
  },
  {
    icon: ShieldCheck,
    title: "Натуральный состав",
    text: "Без консервантов и растительных жиров. Сливки, масло 82,5%, бельгийский шоколад.",
    benefit: "Гости доверяют и возвращаются"
  },
  {
    icon: Award,
    title: "Все сертификаты",
    text: "Полный пакет документов: декларации ТР ТС, накладные. Готовы к любым проверкам.",
    benefit: "Никаких штрафов и рисков"
  },
  {
    icon: Headset,
    title: "Личный менеджер",
    text: "Один контакт для всех вопросов: заказы, замены, жалобы. Отвечаем за 10 минут.",
    benefit: "Экономите время и нервы"
  }
]

const GUARANTEES = [
  {
    icon: RotateCcw,
    title: "Замена брака за 2 часа",
    text: "Если что-то не так с товаром — привезём замену мгновенно или вернём деньги. Без вопросов."
  },
  {
    icon: TrendingUp,
    title: "Гибкие условия",
    text: "Отсрочка 7 дней после 3-го заказа. Продали — заплатили. Скидка 20% на первый заказ."
  },
  {
    icon: X,
    title: "Без скрытых платежей",
    text: "Цена в прайсе = цена при доставке. Без наценок за срочность или маленькие заказы."
  }
]

export function WhyUs() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Что делает нас лучшими на рынке?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            5 причин работать с официальным дистрибьютором
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col group hover:bg-primary transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-white transition-all duration-500">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-4 font-heading leading-tight group-hover:text-white">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-white/80 flex-grow">{reason.text}</p>
              <div className="pt-4 border-t border-slate-50 group-hover:border-white/10">
                <div className="text-[10px] font-black text-primary uppercase tracking-widest group-hover:text-accent">{reason.benefit}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GUARANTEES.map((guarantee, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[32px] bg-primary text-white shadow-2xl shadow-primary/20 flex gap-6 items-start"
                >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <guarantee.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2 font-heading">{guarantee.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{guarantee.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
