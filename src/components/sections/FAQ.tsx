"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Phone, Send } from "lucide-react"

const FAQS = [
  {
    question: "Какой минимальный заказ?",
    answer: "Минимальный заказ — 2000₽ (можно набирать любые позиции). Это примерно 7-10 упаковок десертов. Доставка бесплатно от 2000₽ по Калининграду."
  },
  {
    question: "Есть ли скидки при больших объёмах?",
    answer: "Да! При заказе от 20 шт любой позиции автоматически применяется оптовая цена (минус 15₽ на каждую упаковку). Чем больше заказ, тем выгоднее!"
  },
  {
    question: "Как долго десерты хранятся после разморозки?",
    answer: "После разморозки (2-3 часа при комнатной температуре) десерты хранятся 48 часов в холодильнике при +2...+6°C. Повторно замораживать нельзя! Рекомендуем размораживать ровно столько, сколько продадите за 2 дня."
  },
  {
    question: "Можно ли заказывать в замороженном виде и хранить в морозилке?",
    answer: "Да, именно так мы и рекомендуем! Десерты приезжают замороженными в термосумках -18°C. Храните в морозильной камере до 180 дней при -18°C. Размораживайте по мере необходимости."
  },
  {
    question: "Какие документы вы предоставляете?",
    answer: "К каждой поставке прикладываем: Декларацию соответствия ТР ТС, протоколы испытаний, товарную накладную ТОРГ-12 и счёт-фактуру. Все документы актуальные и заверенные."
  },
  {
    question: "Работаете ли вы на отсрочку?",
    answer: "Да! После первых 3 успешных заказов открываем отсрочку оплаты 7 дней. Первые 3 заказа — оплата при получении. Плюс скидка 20% на самый первый заказ от 2000₽."
  },
  {
    question: "Что делать, если товар пришёл повреждённым?",
    answer: "Сразу звоните менеджеру. Мы привезём замену в течение 2 часов или вернём деньги. Фото не требуем — верим на слово. Наша задача — чтобы вы были довольны."
  },
  {
    question: "Можно ли заказать упаковку с нашим логотипом?",
    answer: "Да, при регулярных заказах от 500 упаковок в месяц делаем брендированную упаковку. Стоимость упаковки +10₽ к цене."
  },
  {
    question: "Есть ли сезонные вкусы?",
    answer: "Да! Производитель регулярно выпускает сезонные лимитированные вкусы: клубника и манго летом, тыква-карамель осенью, мандарин зимой. Следите за новинками!"
  },
  {
    question: "Можно ли вернуть нераспроданный товар?",
    answer: "Первые 30 дней работы — да, можно вернуть нераспроданные замороженные десерты. После 30 дней — возврат только брака. Но по опыту: 99% партнёров продают всё за неделю."
  },
  {
    question: "Вы сами производите десерты?",
    answer: "Мы — официальный дистрибьютор премиального производителя. Работаем напрямую с фабрикой без посредников. Это гарантирует заводское качество по дистрибьюторской цене."
  }
]

export function FAQ() {
  return (
    <section id="faq-section" className="py-12 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Ответы на частые вопросы
          </h2>
          <p className="text-slate-500 text-lg">
            Всё, что нужно знать о работе с нами
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-100 rounded-[24px] px-8 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-8 font-heading">Не нашли ответ? Напишите или позвоните — ответим за 10 минут!</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="tel:+74012000000"
                    className="flex items-center gap-3 px-8 h-14 bg-white rounded-2xl border border-slate-100 font-bold text-slate-900 shadow-xl shadow-slate-200/50 hover:bg-slate-50 transition-all"
                >
                    <Phone className="w-5 h-5 text-primary" />
                    +7 (4012) XX-XX-XX
                </a>
                <a
                    href="https://t.me/desserts_kaliningrad"
                    target="_blank"
                    className="flex items-center gap-3 px-8 h-14 bg-[#0088cc] rounded-2xl font-bold text-white shadow-xl shadow-sky-200/50 hover:bg-[#007bb5] transition-all"
                >
                    <Send className="w-5 h-5" />
                    Написать в Telegram
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}
