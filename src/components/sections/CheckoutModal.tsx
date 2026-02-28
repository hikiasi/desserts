"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/context/CartContext"
import { ShoppingCart, ShieldCheck, Clock, Phone, Cake } from "lucide-react"
import { PatternFormat } from "react-number-format"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const checkoutSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 11;
  }, "Введите полный номер телефона"),
  address: z.string().optional(),
  comment: z.string().optional(),
  businessType: z.string().optional(),
  agree: z.boolean().refine(val => val === true, "Необходимо согласие")
})

type CheckoutValues = z.infer<typeof checkoutSchema>

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  type: "CALLBACK" | "CART"
}

export function CheckoutModal({ isOpen, onClose, type }: CheckoutModalProps) {
  const { cart, totalPrice, clearCart, totalItems } = useCart()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { agree: true, businessType: "Частное лицо" }
  })

  const agree = watch("agree")

  const onSubmit = async (data: CheckoutValues) => {
    try {
      const orderData = {
        ...data,
        type: "B2B",
        comment: `[${data.businessType}] ` + (type === "CALLBACK" ? "ЗАКАЗ ЗВОНКА: " + (data.comment || "") : data.comment || ""),
        products: type === "CART" ? JSON.stringify(cart.map(i => ({ name: i.name, quantity: i.quantity }))) : undefined,
        total: type === "CART" ? totalPrice : undefined
      }

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      })

      if (res.ok) {
        alert(type === "CALLBACK" ? "Заявка принята! Мы перезвоним вам скоро." : "Заказ принят! Мы свяжемся с вами для подтверждения.")
        reset()
        if (type === "CART") clearCart()
        onClose()
      }
    } catch (err) {
      alert("Ошибка при отправке")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-3xl sm:rounded-3xl md:rounded-[40px] border-none [&>button]:text-white">
        <div className="bg-primary p-6 sm:p-8 text-white relative">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white font-heading">
              {type === "CALLBACK" ? <Phone className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
              {type === "CALLBACK" ? "Заказать звонок" : "Оформление заказа"}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-sm sm:text-base">
              {type === "CALLBACK"
                ? "Оставьте ваши контакты, и наш менеджер перезвонит вам в течение 10 минут."
                : "Проверьте данные и подтвердите заказ. Мы перезвоним для уточнения деталей."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-4 sm:space-y-6 bg-white">
          {type === "CART" && cart.length > 0 && (
            <div className="max-h-40 overflow-y-auto space-y-2 mb-4 pr-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {cart.map((item, idx) => {
                const isWholesale = totalItems >= 20
                const itemPrice = isWholesale ? (item.price - 15) : item.price
                return (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-slate-600 font-medium">{item.name} x {item.quantity}</span>
                    <span className="font-bold">{itemPrice * item.quantity} ₽</span>
                  </div>
                )
              })}
              <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-primary uppercase tracking-widest text-sm">
                <span>Итого:</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              {totalItems >= 20 && (
                <div className="text-[10px] text-green-600 font-bold uppercase tracking-tight text-right mt-1">
                   Применена оптовая скидка
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <Input placeholder="Ваше имя" {...register("name")} className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
               </div>
               <div>
                  <Select defaultValue="Частное лицо" onValueChange={(val) => setValue("businessType", val)}>
                    <SelectTrigger className="h-12 rounded-xl border-slate-100 bg-slate-50">
                      <SelectValue placeholder="Тип бизнеса" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Частное лицо">Частное лицо</SelectItem>
                      <SelectItem value="Кафе/кофейня">Кафе/кофейня</SelectItem>
                      <SelectItem value="Ресторан">Ресторан</SelectItem>
                      <SelectItem value="Магазин">Магазин</SelectItem>
                      <SelectItem value="Кейтеринг">Кейтеринг</SelectItem>
                    </SelectContent>
                  </Select>
               </div>
            </div>

            <PatternFormat
              format="+7 (###) ###-##-##"
              mask="_"
              customInput={Input}
              onValueChange={(values) => setValue("phone", values.formattedValue)}
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="h-12 rounded-xl border-slate-100 bg-slate-50"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}

            {type === "CART" && (
              <Input placeholder="Адрес доставки" {...register("address")} className="h-12 rounded-xl border-slate-100 bg-slate-50" />
            )}

            <Input placeholder={type === "CALLBACK" ? "Ваш вопрос" : "Комментарий к заказу"} {...register("comment")} className="h-12 rounded-xl border-slate-100 bg-slate-50" />
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-2 px-1">
              <Checkbox
                id="checkout-agree"
                checked={agree}
                onCheckedChange={(checked) => setValue("agree", !!checked)}
                className="mt-1"
              />
              <label htmlFor="checkout-agree" className="text-[10px] text-slate-400 leading-tight">
                Согласен с <a href="/legal/privacy" className="underline font-medium hover:text-primary">политикой конфиденциальности</a> и даю согласие на <a href="/legal/consent" className="underline font-medium hover:text-primary">обработку персональных данных</a>
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-[10px]">{errors.agree.message}</p>}

            <Button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-primary/90 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : (type === "CALLBACK" ? "Перезвоните мне" : "Подтвердить заказ")}
            </Button>

            <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Ваши данные защищены и не передаются третьим лицам
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
