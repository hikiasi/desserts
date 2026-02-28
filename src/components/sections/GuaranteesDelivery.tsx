"use client"

import { motion } from "framer-motion"
import { Truck, MapPin, Package, CreditCard, Clock, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

const DELIVERY_ZONES = [
  {
    title: "Бесплатная доставка",
    price: "0 ₽",
    conditions: "При заказе от 2000 ₽",
    area: "Калининград",
    desc: "2 раза в неделю (Вт, Пт) или по согласованию"
  },
  {
    title: "Платная доставка",
    price: "200 ₽",
    conditions: "При заказе до 2000 ₽",
    area: "Калининград",
    desc: "В день заказа или на следующий день"
  },
  {
    title: "Область",
    price: "300 ₽",
    conditions: "Бесплатно от 3000 ₽",
    area: "Светлогорск, Зеленоградск, Гурьевск",
    desc: "По графику или индивидуально"
  }
]

export function GuaranteesDelivery() {
  return (
    <section id="delivery" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-8 font-heading">
                Условия сотрудничества и доставка
              </h2>

              <div className="space-y-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Package className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold font-heading uppercase text-xs tracking-widest">Цены и минималка</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex justify-between">
                                <span>Мин. заказ:</span>
                                <span className="font-bold text-slate-900">2000 ₽</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Оптовая цена:</span>
                                <span className="font-bold text-primary">от 20 шт.</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Первый заказ:</span>
                                <span className="font-bold text-green-600">-20%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold font-heading uppercase text-xs tracking-widest">Оплата</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li>✓ Карта / Наличные / СБП</li>
                            <li>✓ По счёту для ИП/ООО</li>
                            <li>✓ <span className="font-bold text-primary">Отсрочка 7 дней</span></li>
                        </ul>
                    </div>
                </div>

                <div className="p-8 bg-slate-900 rounded-[32px] text-white">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                            <Snowflake className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold font-heading">Особые условия перевозки</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                        Мы доставляем десерты исключительно в профессиональных <span className="text-primary font-bold">термосумках при температуре -18°C</span>. Это гарантирует, что вы получите продукт в идеальном состоянии, готовый к хранению в вашей морозильной камере.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-bold text-primary">
                        <Clock className="w-4 h-4" /> Доставка в согласованное окно до открытия заведения
                    </div>
                </div>
              </div>

              <div className="p-8 border-2 border-dashed border-slate-100 rounded-[32px] flex items-center gap-6">
                 <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Самовывоз (скидка 5%):</div>
                    <div className="text-sm font-bold text-slate-900">г. Калининград, ул. Производственная, 12</div>
                    <div className="text-xs text-slate-500 mt-1">Пн-Пт 9:00-18:00, Сб 10:00-15:00</div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Zones */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {DELIVERY_ZONES.map((zone, i) => (
                <div key={i} className="group relative p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary group-hover:scale-150 duration-700" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div>
                            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{zone.area}</div>
                            <h3 className="text-2xl font-black text-slate-900 font-heading leading-tight group-hover:text-primary transition-colors">{zone.title}</h3>
                        </div>
                        <div className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors">{zone.price}</div>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                            <CheckCircleIcon className="w-5 h-5 text-primary" /> {zone.conditions}
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">{zone.desc}</p>
                    </div>
                </div>
              ))}

              <div className="relative h-64 rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200">
                 {/* Placeholder for map */}
                 <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-sm italic font-medium p-8 text-center">
                    [Интерактивная карта с зонами доставки будет загружена здесь]
                 </div>
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
                    <Button className="w-full bg-slate-900 text-white font-bold h-12 rounded-xl shadow-xl">
                        Проверить мой адрес
                    </Button>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCircleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}
