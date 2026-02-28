"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Package, Truck, Clock, CreditCard, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { B2BSamplesModal } from "./B2BSamplesModal"

export function B2BCatalog() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products?type=b2b")
      if (!res.ok) throw new Error("Failed to fetch")
      const data = await res.json()
      setProducts(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <section id="b2b-catalog" className="py-12 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <Star className="w-3 h-3 fill-primary" /> Оптовый ассортимент
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Цены от 20 шт. — Максимальная выгода
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Оптовая цена применяется автоматически при добавлении в корзину от 20 упаковок любой позиции
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          {products.length > 0 ? (
            <Accordion type="multiple" defaultValue={categories.slice(0, 1)} className="space-y-4">
              {categories.map((cat, i) => (
                <AccordionItem key={i} value={cat} className="bg-white border border-slate-100 rounded-[32px] px-8 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-300">
                  <AccordionTrigger className="hover:no-underline py-8">
                    <span className="text-2xl font-black text-slate-900 font-heading">{cat}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left min-w-[600px]">
                        <thead>
                          <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                            <th className="pb-4">Наименование</th>
                            <th className="pb-4">Вес/Упак.</th>
                            <th className="pb-4">Розница</th>
                            <th className="pb-4 text-primary">Опт (от 20 шт)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {products.filter(p => p.category === cat).map((item, j) => (
                            <tr key={j} className="text-sm group">
                              <td className="py-5 font-bold text-slate-800 group-hover:text-primary transition-colors">{item.name}</td>
                              <td className="py-5 text-slate-500">{item.weight}</td>
                              <td className="py-5 text-slate-400 font-medium">{item.oldPrice}₽</td>
                              <td className="py-5 text-primary font-black text-lg">{item.price}₽</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                            <b>Примечание:</b> {cat === 'Профитроли' ? 'Наш хит! Срок хранения 180 дней. Разморозка 2-3 часа.' : cat === 'ЗОЖ-линейка' ? 'Тренд 2024 года! Увеличивает охват аудитории на 30%.' : 'Классические вкусы, которые всегда в спросе.'}
                        </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : !loading && (
            <div className="text-center py-12 md:py-20 bg-white rounded-3xl border border-dashed border-slate-200 text-slate-400">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Ассортимент временно недоступен</p>
            </div>
          )}

          {loading && (
            <div className="text-center py-10 text-slate-400 animate-pulse">Загрузка ассортимента...</div>
          )}
        </div>

        {/* Special Conditions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            { icon: Package, title: "Минимальный заказ", sub: "От 2000₽ (любые позиции)" },
            { icon: Truck, title: "Бесплатная доставка", sub: "По Калининграду от 2000₽" },
            { icon: CreditCard, title: "Отсрочка платежа", sub: "7 дней после 3-го заказа" },
            { icon: Clock, title: "180 дней хранения", sub: "Шоковая заморозка -18°C" },
          ].map((cond, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-[24px] border border-slate-100 shadow-lg shadow-slate-200/30">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                <cond.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">{cond.title}</div>
                <div className="text-xs text-slate-500 leading-tight">{cond.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg" 
            className="bg-primary hover:bg-primary/90 h-16 px-12 text-lg font-black shadow-xl shadow-primary/20 rounded-2xl transition-all hover:scale-105"
          >
            Скачать полный прайс (PDF)
          </Button>
          <p className="mt-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ ДЛЯ СЕТЕВЫХ ЗАВЕДЕНИЙ
          </p>
        </div>
      </div>

      <B2BSamplesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
