"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function B2BEconomy() {
  const [dailySales, setDailySales] = useState(20)
  const [salePrice, setSalePrice] = useState(450)

  const purchasePrice = 275 // average wholesale price
  const dailyProfit = (salePrice - purchasePrice) * dailySales
  const monthlyProfit = dailyProfit * 30
  const yearlyProfit = monthlyProfit * 12

  return (
    <section className="py-12 md:py-24 bg-slate-50" id="economy-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Сколько вы заработаете на десертах?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Реальная экономика вашего заведения: рассчитайте прибыль и сравните выгоду
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Part 1: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading">Калькулятор маржи</h3>
            </div>
            
            <div className="space-y-10 mb-12">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label htmlFor="daily-sales" className="text-slate-700 font-bold">Продажи в день:</label>
                  <span className="text-2xl font-black text-primary bg-primary/5 px-4 py-1 rounded-xl">{dailySales} порций</span>
                </div>
                <input
                  id="daily-sales"
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={dailySales}
                  onChange={(e) => setDailySales(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  aria-label="Порций в день"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <label htmlFor="sale-price" className="text-slate-700 font-bold">Цена продажи в меню:</label>
                  <span className="text-2xl font-black text-primary bg-primary/5 px-4 py-1 rounded-xl">{salePrice} ₽</span>
                </div>
                <input
                  id="sale-price"
                  type="range"
                  min="300"
                  max="600"
                  step="10"
                  value={salePrice}
                  onChange={(e) => setSalePrice(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  aria-label="Цена продажи"
                />
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[32px] text-white">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-slate-400">
                    <span>Закупка (опт):</span>
                    <span>{dailySales} × {purchasePrice}₽ = {(dailySales * purchasePrice).toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                    <span>Выручка:</span>
                    <span>{dailySales} × {salePrice}₽ = {(dailySales * salePrice).toLocaleString()} ₽</span>
                </div>
                <div className="h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Прибыль в месяц:</div>
                    <div className="text-4xl font-black">{monthlyProfit.toLocaleString()} ₽</div>
                </div>
                <div>
                    <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Годовая выгода:</div>
                    <div className="text-4xl font-black text-primary">{(yearlyProfit / 1000000).toFixed(1)} млн ₽</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part 2: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex-grow">
                <h3 className="text-2xl font-bold mb-8 font-heading">Зачем делать десерты самим?</h3>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Параметр</th>
                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Собственное пр-во</th>
                                <th className="pb-4 text-[10px] font-black text-primary uppercase tracking-widest">Наши десерты</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[
                                { label: "Стартовые вложения", self: "500 000₽+", we: "0₽ (работаем на отсрочку)" },
                                { label: "Зарплата кондитера", self: "60 000₽/мес", we: "0₽" },
                                { label: "Списания (брак)", self: "15-25%", we: "0% (хранение 180 дней)" },
                                { label: "Время на пр-во", self: "4-6 часов/день", we: "0 часов (разморозка)" },
                                { label: "Стабильность", self: "Зависит от повара", we: "100% всегда одинаково" },
                                { label: "Сертификаты", self: "Нужны свои", we: "Уже есть у нас" },
                            ].map((row, i) => (
                                <tr key={i} className="text-sm">
                                    <td className="py-4 font-bold text-slate-900">{row.label}</td>
                                    <td className="py-4 text-slate-400">{row.self}</td>
                                    <td className="py-4 text-primary font-bold">
                                        <div className="flex items-center gap-1">
                                            <Check className="w-4 h-4" /> {row.we}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 p-6 bg-accent/20 rounded-2xl border border-accent/30 text-slate-900">
                    <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm leading-relaxed">
                            <span className="font-bold">ИТОГО:</span> Вы экономите 60 000₽ зарплаты + 0 брак + 4 часа времени в день. <span className="font-bold">Чистая выгода: +45 000₽/мес</span> + освобождённое время на развитие бизнеса.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center px-4">
            <Button
                onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="h-auto min-h-[64px] py-4 px-6 md:px-12 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-base md:text-xl shadow-xl shadow-primary/20 whitespace-normal leading-tight max-w-full"
            >
                Начать зарабатывать — запросить прайс
            </Button>
        </div>
      </div>
    </section>
  )
}
