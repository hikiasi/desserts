"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { PatternFormat } from "react-number-format"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
  agree: z.boolean().refine(val => val === true, "Необходимо согласие")
})

type B2BHeroValues = z.infer<typeof b2bHeroSchema>

export function B2BHeroForm() {
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting }, reset } = useForm<B2BHeroValues>({
    resolver: zodResolver(b2bHeroSchema),
    defaultValues: { agree: true, businessType: "" }
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
          comment: `[${data.businessType}] ${data.comment || ""}`
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
    <div id="b2b-form" className="w-full max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/40 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Получите прайс и условия</h3>
        <p className="text-slate-500 mb-8">Отправим за 10 минут наш актуальный каталог и условия сотрудничества</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <div>
              <Input placeholder="Название заведения (напр. Кафе «Сладкая жизнь»)" {...register("company")} className="h-14 rounded-2xl border-slate-100 bg-white/40 backdrop-blur-sm focus:bg-white transition-all" />
              {errors.company && <p className="text-red-500 text-xs mt-1 px-2">{errors.company.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Как к вам обращаться?" {...register("name")} className="h-14 rounded-2xl border-slate-100 bg-white/40 backdrop-blur-sm focus:bg-white transition-all" />
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
                  className="h-14 rounded-2xl border-slate-100 bg-white/40 backdrop-blur-sm focus:bg-white transition-all"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 px-2">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Email (опционально)" {...register("email")} className="h-14 rounded-2xl border-slate-100 bg-white/40 backdrop-blur-sm focus:bg-white transition-all" />
                {errors.email && <p className="text-red-500 text-xs mt-1 px-2">{errors.email.message}</p>}
              </div>
              <div>
                <Select onValueChange={(val) => setValue("businessType", val)}>
                  <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-white/40 backdrop-blur-sm focus:bg-white transition-all">
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
  )
}
