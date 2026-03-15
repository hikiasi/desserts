"use client"

import { Cake, Send, ExternalLink, MapPin, Mail, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-white pt-12 md:pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Cake className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-900 font-heading">Десерты</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Официальный дистрибьютор премиальных замороженных десертов в Калининграде. Прямые поставки от производителя.
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com/market-129683673" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" aria-label="ВКонтакте">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M15.073 2H8.937C3.338 2 2 3.338 2 8.937V15.063C2 20.662 3.338 22 8.937 22H15.063C20.662 22 22 20.662 22 15.063V8.937C22 3.338 20.662 2 15.073 2ZM17.373 16.327C17.373 16.327 17.135 16.635 16.592 16.684C16.052 16.732 15.656 16.486 15.656 16.486C15.656 16.486 15.063 16.063 14.57 15.545C13.83 14.772 13.336 14.796 13.065 14.895C12.793 14.994 12.793 15.364 12.793 15.932C12.793 16.5 12.621 16.635 12.275 16.684C11.93 16.732 10.966 16.732 9.535 15.424C7.781 13.82 6.646 11.2 6.646 11.2C6.646 11.2 6.547 10.93 6.695 10.781C6.844 10.633 7.239 10.633 7.239 10.633L8.597 10.645C8.597 10.645 8.868 10.645 9.041 10.781C9.214 10.917 9.313 11.164 9.313 11.164C9.313 11.164 9.683 12.003 10.227 12.744C11.016 13.818 11.411 14.04 11.757 13.892C12.103 13.744 12.004 12.459 12.004 12.003C12.004 11.411 11.832 11.09 11.511 10.967C11.239 10.868 10.893 10.844 10.647 10.868C10.597 10.77 10.844 10.633 11.19 10.485C11.561 10.337 12.079 10.313 12.597 10.313C13.239 10.313 13.437 10.411 13.634 10.658C13.906 11.004 13.832 11.769 13.832 12.559C13.832 12.929 13.832 13.349 14.03 13.522C14.227 13.694 14.548 13.571 15.288 12.744C15.831 12.003 16.202 11.139 16.202 11.139C16.202 11.139 16.276 10.991 16.4 10.917C16.523 10.843 16.721 10.843 16.721 10.843L18.153 10.856C18.153 10.856 18.572 10.843 18.72 11.028C18.868 11.214 18.696 11.609 18.696 11.609C18.696 11.609 17.585 13.115 16.894 14.077C16.597 14.497 16.647 14.744 16.894 15.015C17.14 15.286 18.153 16.126 18.153 16.126C18.153 16.126 18.721 16.657 18.425 16.953C18.128 17.25 17.373 16.327 17.373 16.327Z"/>
                </svg>
              </a>
              <a href="https://t.me/desserts_kaliningrad" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0088cc] hover:text-white transition-all" aria-label="Telegram">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Навигация</h4>
            <ul className="space-y-4">
              {[
                { name: "Каталог десертов", href: "/#retail-catalog" },
                { name: "Для бизнеса", href: "/#b2b-hero" },
                { name: "Доставка и оплата", href: "/#delivery" },
                { name: "Кейсы клиентов", href: "/#cases-section" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-sm text-slate-500 hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div>
                  <a href="tel:+79114864797" className="text-sm font-bold text-slate-900 hover:text-primary">+7 (911) 486-47-97</a>
                  <div className="text-[10px] text-slate-400 uppercase">Ежедневно 8:00 - 20:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div className="text-sm text-slate-500">
                  г. Калининград, ул.Профессора Севастьянова, 3 — Маслобаза
                  <div className="text-[10px] text-primary font-bold mt-1">Звонить за час для самовывоза</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <a href="mailto:info@desserts-kaliningrad.ru" className="text-sm text-slate-500 hover:text-primary transition-colors">info@desserts-kaliningrad.ru</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Информация</h4>
            <div className="text-[10px] text-slate-400 space-y-2 mb-6 uppercase tracking-tighter">
              <div>ИП Иргашева М.Н.</div>
              <div>ИНН: 390400499460</div>
              <div>ОГРНИП: 324390000018143</div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="/legal/privacy" className="text-[10px] text-slate-400 hover:text-primary transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="/legal/offer" className="text-[10px] text-slate-400 hover:text-primary transition-colors">Публичная оферта</a>
              </li>
              <li>
                <a href="/legal/consent" className="text-[10px] text-slate-400 hover:text-primary transition-colors">Согласие на обработку данных</a>
              </li>
              <li>
                <a href="/legal/cookies" className="text-[10px] text-slate-400 hover:text-primary transition-colors">Использование файлов cookie</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Замороженные десерты в Калининграде. Все права защищены.
          </div>
          <div className="flex items-center gap-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
            47 ПАРТНЁРОВ В ГОРОДЕ И ОБЛАСТИ
          </div>
        </div>
      </div>
    </footer>
  )
}
