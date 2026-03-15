"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Send, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function RetailCTA() {
  const [isWorking, setIsWorking] = useState(false)

  useEffect(() => {
    const checkWorkingStatus = () => {
      // Kaliningrad is UTC+2
      const now = new Date()
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000)
      const kaliningradTime = new Date(utcTime + (2 * 3600000))

      const hours = kaliningradTime.getHours()
      setIsWorking(hours >= 8 && hours < 20)
    }

    checkWorkingStatus()
    const interval = setInterval(checkWorkingStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-24 bg-transparent overflow-hidden" id="contacts">
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
                <a href="tel:+79114864797" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Позвонить нам:</div>
                      <div className="text-2xl font-black text-slate-900">+7 (911) 486-47-97</div>
                   </div>
                </a>

                <a href="https://vk.com/club233930785" target="_blank" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-[#0077ff] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M15.073 2H8.937C3.338 2 2 3.338 2 8.937V15.063C2 20.662 3.338 22 8.937 22H15.063C20.662 22 22 20.662 22 15.063V8.937C22 3.338 20.662 2 15.073 2ZM17.373 16.327C17.373 16.327 17.135 16.635 16.592 16.684C16.052 16.732 15.656 16.486 15.656 16.486C15.656 16.486 15.063 16.063 14.57 15.545C13.83 14.772 13.336 14.796 13.065 14.895C12.793 14.994 12.793 15.364 12.793 15.932C12.793 16.5 12.621 16.635 12.275 16.684C11.93 16.732 10.966 16.732 9.535 15.424C7.781 13.82 6.646 11.2 6.646 11.2C6.646 11.2 6.547 10.93 6.695 10.781C6.844 10.633 7.239 10.633 7.239 10.633L8.597 10.645C8.597 10.645 8.868 10.645 9.041 10.781C9.214 10.917 9.313 11.164 9.313 11.164C9.313 11.164 9.683 12.003 10.227 12.744C11.016 13.818 11.411 14.04 11.757 13.892C12.103 13.744 12.004 12.459 12.004 12.003C12.004 11.411 11.832 11.09 11.511 10.967C11.239 10.868 10.893 10.844 10.647 10.868C10.597 10.77 10.844 10.633 11.19 10.485C11.561 10.337 12.079 10.313 12.597 10.313C13.239 10.313 13.437 10.411 13.634 10.658C13.906 11.004 13.832 11.769 13.832 12.559C13.832 12.929 13.832 13.349 14.03 13.522C14.227 13.694 14.548 13.571 15.288 12.744C15.831 12.003 16.202 11.139 16.202 11.139C16.202 11.139 16.276 10.991 16.4 10.917C16.523 10.843 16.721 10.843 16.721 10.843L18.153 10.856C18.153 10.856 18.572 10.843 18.72 11.028C18.868 11.214 18.696 11.609 18.696 11.609C18.696 11.609 17.585 13.115 16.894 14.077C16.597 14.497 16.647 14.744 16.894 15.015C17.14 15.286 18.153 16.126 18.153 16.126C18.153 16.126 18.721 16.657 18.425 16.953C18.128 17.25 17.373 16.327 17.373 16.327Z"/>
                      </svg>
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Написать в ВКонтакте:</div>
                      <div className="text-2xl font-black text-slate-900">vk.com/club233930785</div>
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
                    <div className="text-sm font-bold text-slate-900 leading-tight mb-1">г. Калининград, ул.Профессора Севастьянова, 3 — Маслобаза</div>
                    <div className="text-[10px] text-primary font-bold">Звонить за час для самовывоза</div>
                </div>
              </div>

              <div className="mt-6 p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                 <h4 className="text-lg font-bold mb-2 font-heading">Режим работы (прием заказов)</h4>
                 <p className="text-white/60 text-sm mb-4">Ежедневно: 8:00 – 20:00</p>
                 <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${isWorking ? 'text-primary' : 'text-slate-500'}`}>
                    <div className={`w-2 h-2 rounded-full ${isWorking ? 'bg-primary animate-pulse' : 'bg-slate-500'}`} />
                    {isWorking ? 'Сейчас работаем' : 'Сейчас закрыто'}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
