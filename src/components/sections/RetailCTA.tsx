"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Send, Mail, MapPin } from "lucide-react"

export function RetailCTA() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 overflow-hidden" id="contacts">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/3" />

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-heading leading-tight">
                Остались вопросы? <br /><span className="text-primary">Мы на связи!</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
                Напишите или позвоните нам — проконсультируем по ассортименту, доставке и подберем лучшие позиции для вашего заведения.
              </p>

              <div className="space-y-6">
                <a href="tel:+74012000000" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Позвонить нам:</div>
                      <div className="text-2xl font-black text-slate-900">+7 (4012) XX-XX-XX</div>
                   </div>
                </a>

                <a href="https://t.me/desserts_kaliningrad" target="_blank" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-[#0088cc] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-sky-200/50 group-hover:scale-110 transition-transform">
                      <Send className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Написать в Telegram:</div>
                      <div className="text-2xl font-black text-slate-900">@desserts_kaliningrad</div>
                   </div>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                    <Mail className="w-8 h-8 text-primary mb-4" />
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Наш Email:</div>
                    <div className="text-sm font-bold text-slate-900 break-all">info@desserts-kaliningrad.ru</div>
                </div>
                <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Адрес склада:</div>
                    <div className="text-sm font-bold text-slate-900">г. Калининград, ул. Производственная, 12</div>
                </div>
              </div>

              <div className="mt-6 p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                 <h4 className="text-lg font-bold mb-2 font-heading">Режим работы (прием заказов)</h4>
                 <p className="text-white/60 text-sm mb-4">Ежедневно: 8:00 – 20:00</p>
                 <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Сейчас работаем
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
