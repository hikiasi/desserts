"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Snowflake, Timer, ChevronDown, Frown, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart, Product } from "@/context/CartContext"
import { cn } from "@/lib/utils"
import { FastOrderModal } from "./FastOrderModal"
import Image from "next/image"

const CATEGORIES = [
  "Все",
  "Профитроли",
  "ЗОЖ-линейка",
  "Торты",
  "Хиты продаж",
  "Новинки",
]

function ExpandableDescription({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > 80;

  return (
    <div className="text-sm text-slate-500 mb-4">
      <div className={cn(!isExpanded && isLong && "line-clamp-2")}>
        {text}
      </div>
      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-primary text-xs font-bold hover:underline mt-1"
        >
          {isExpanded ? "Свернуть" : "Читать далее"}
        </button>
      )}
    </div>
  );
}

export function RetailCatalog() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [limit, setLimit] = useState(9)
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { addToCart, showFastOrderOnce } = useCart()

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/products?type=retail&category=${activeCategory}&limit=${limit}`)
      const data = await res.json()
      setProducts(data.products || [])
      setTotalProducts(data.total || 0)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [activeCategory, limit])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    if (showFastOrderOnce()) {
      setSelectedProduct(product)
      setIsModalOpen(true)
    }
  }

  return (
    <section id="retail-catalog" className="py-12 md:py-24 bg-white min-h-[600px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Наш ассортимент
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Цены указаны розничные. При заказе от 20 шт. любой позиции автоматически применяется оптовая цена (скидка ~15%).
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setLimit(9)
                }}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                )}
                aria-label={`Выбрать категорию ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {loading && products.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[500px] bg-slate-50 rounded-[40px]" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 md:py-20 text-slate-400"
          >
            <Frown className="w-16 h-16 mb-4" />
            <p className="text-xl font-medium">К сожалению, товаров в этой категории пока нет</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col rounded-[40px] bg-white group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 3}
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isHit && (
                          <Badge className="bg-[#ff136e] hover:bg-[#ff136e] text-white font-bold px-3 py-1 rounded-lg">ХИТ ПРОДАЖ</Badge>
                        )}
                        {product.isNew && (
                          <Badge className="bg-[#704396] hover:bg-[#704396] text-white font-bold px-3 py-1 rounded-lg">НОВИНКА</Badge>
                        )}
                        {product.category === 'ЗОЖ-линейка' && (
                           <Badge className="bg-green-500 hover:bg-green-500 text-white font-bold px-3 py-1 rounded-lg">БЕЗ САХАРА</Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="p-6 md:p-8 flex-grow">
                      <div className="text-[10px] text-primary mb-2 uppercase tracking-widest font-black">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight font-heading">
                        {product.name}
                      </h3>

                      <ExpandableDescription text={product.description} />

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                          <Snowflake className="w-4 h-4 text-primary" /> 180 дней при -18°C
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                          <Timer className="w-4 h-4 text-primary" /> Разморозка 2-3 ч
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                          <CheckCircle2 className="w-4 h-4 text-primary" /> Натуральный состав
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                          <TrendingUp className="w-4 h-4 text-primary" /> Маржа до 150%
                        </div>
                      </div>

                      <div className="flex items-end justify-between border-t border-slate-50 pt-6">
                        <div>
                          <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Вес: {product.weight}</div>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-black text-slate-900">{product.price} ₽</span>
                            <span className="text-xs text-primary font-bold bg-primary/5 px-2 py-1 rounded-lg">Опт: {Math.round(product.price * 0.85)}₽</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-[10px] text-slate-400 italic">
                        💰 <b>Ваша выгода:</b> Закупка {Math.round(product.price * 0.85)}₽ → Продажа 450-500₽ → Маржа от 175₽
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 md:p-8 pt-0">
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full h-14 bg-slate-900 hover:bg-primary text-white transition-all duration-300 rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 group-hover:shadow-primary/20"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        В корзину
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {totalProducts > products.length && (
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl px-12 h-14 font-bold border-2"
              onClick={() => setLimit(prev => prev + 12)}
              disabled={loading}
            >
              {loading ? "Загрузка..." : `Показать ещё ${Math.min(12, totalProducts - products.length)} десертов`}
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </div>

      <FastOrderModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
