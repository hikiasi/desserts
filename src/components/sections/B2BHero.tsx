"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Truck, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { PatternFormat } from "react-number-format"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const b2bHeroSchema = z.object({
  company: z.string().min(2, "Введите название заведения"),
  name: z.string().min(2, "Введите имя"),
  phone: z.string().refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 11;
  }, "Введите полный номер телефона"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  businessType: z.string().min(1, "Выберите тип бизнеса"),
  comment: z.string().optional(),
  sampleRequested: z.boolean().default(false),
  agree: z.boolean().refine(val => val === true, "Необходимо согласие")
})

type B2BHeroValues = z.infer<typeof b2bHeroSchema>

export function B2BHero() {
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting }, reset } = useForm<B2BHeroValues>({
    resolver: zodResolver(b2bHeroSchema),
    defaultValues: { agree: true, sampleRequested: false, businessType: "" }
  })

  const agree = watch("agree")

  const onSubmit = async (data: B2BHeroValues) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "B2B",
          comment: `[${data.businessType}] ${data.comment || ""}. Пробная партия: ${data.sampleRequested ? "Да" : "Нет"}`
        })
      })
      if (res.ok) {
        alert("Запрос отправлен! Мы свяжемся с вами в течение 10 минут.")
        reset()
      }
    } catch (err) {
      alert("Ошибка при отправке")
    }
  }

  return (
    <section id="b2b-hero" className="relative py-12 md:py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Официальный дистрибьютор
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] font-heading">
                Увеличьте средний чек на 40% с премиальными десертами
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
                Прямые поставки от производителя • 180 дней хранения • Шоковая заморозка -18°C
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: TrendingUp, title: "Маржа до 200%", desc: "Закупка от 165₽, продажа от 350₽" },
                  { icon: Clock, title: "180 дней хранения", desc: "Минимум списаний" },
                  { icon: Truck, title: "Доставка 2 раза в неделю", desc: "Бесплатно от 2000₽" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 <Button
                   size="lg"
                   className="h-auto min-h-[56px] py-4 px-8 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 whitespace-normal"
                   onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Получить прайс и условия
                 </Button>
                 <Button
                   variant="outline"
                   size="lg"
                   className="h-14 px-8 rounded-2xl font-bold text-lg border-2"
                   onClick={() => document.getElementById('retail-catalog')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Посмотреть каталог
                 </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div id="b2b-form" className="lg:w-1/2 w-full max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Получите прайс и условия</h3>
              <p className="text-slate-500 mb-8">Отправим за 10 минут + пробная партия со скидкой 20%</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Input placeholder="Название заведения (напр. Кафе «Сладкая жизнь»)" {...register("company")} className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                    {errors.company && <p className="text-red-500 text-xs mt-1 px-2">{errors.company.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Как к вам обращаться?" {...register("name")} className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                      {errors.name && <p className="text-red-500 text-xs mt-1 px-2">{errors.name.message}</p>}
                    </div>
                    <div>
                      <PatternFormat
                        format="+7 (###) ###-##-##"
                        mask="_"
                        customInput={Input}
                        onValueChange={(values) => setValue("phone", values.formattedValue)}
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 px-2">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Email (опционально)" {...register("email")} className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                      {errors.email && <p className="text-red-500 text-xs mt-1 px-2">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Select onValueChange={(val) => setValue("businessType", val)}>
                        <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all">
                          <SelectValue placeholder="Тип бизнеса" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Кафе/кофейня">Кафе/кофейня</SelectItem>
                          <SelectItem value="Ресторан">Ресторан</SelectItem>
                          <SelectItem value="Магазин/супермаркет">Магазин/супермаркет</SelectItem>
                          <SelectItem value="Кейтеринг/доставка">Кейтеринг/доставка</SelectItem>
                          <SelectItem value="Торговая точка">Торговая точка</SelectItem>
                          <SelectItem value="Другое">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.businessType && <p className="text-red-500 text-xs mt-1 px-2">{errors.businessType.message}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <Checkbox
                    id="sample-request"
                    checked={watch("sampleRequested")}
                    onCheckedChange={(checked) => setValue("sampleRequested", !!checked)}
                  />
                  <label htmlFor="sample-request" className="text-sm font-bold text-slate-700 cursor-pointer">
                    Хочу получить пробную партию со скидкой 20%
                  </label>
                </div>

                <div className="flex items-start gap-2 py-2">
                  <Checkbox
                    id="b2b-hero-agree"
                    checked={agree}
                    onCheckedChange={(checked) => setValue("agree", !!checked)}
                    className="mt-1"
                  />
                  <label htmlFor="b2b-hero-agree" className="text-[10px] text-slate-400 leading-tight">
                    Никакого спама. Свяжемся один раз, обсудим условия. Согласен с <a href="/legal/privacy" className="underline">политикой конфиденциальности</a>.
                  </label>
                </div>
                {errors.agree && <p className="text-red-500 text-[10px]">{errors.agree.message}</p>}

                <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Получить прайс"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
