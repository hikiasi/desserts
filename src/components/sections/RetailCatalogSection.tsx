import { RetailCatalog } from "@/components/sections/RetailCatalog"
import { getRetailProducts, getRetailProductsCount } from "@/lib/products"

export async function RetailCatalogSection() {
  const initialLimit = 9
  const initialCategory = "Все"

  if (!process.env.DATABASE_URL) {
    return (
      <RetailCatalog
        initialCategory={initialCategory}
        initialProducts={[]}
        initialTotal={0}
        initialLimit={initialLimit}
      />
    )
  }

  const [products, totalProducts] = await Promise.all([
    getRetailProducts(initialCategory, initialLimit),
    getRetailProductsCount(initialCategory),
  ])

  return (
    <RetailCatalog
      initialCategory={initialCategory}
      initialProducts={products}
      initialTotal={totalProducts}
      initialLimit={initialLimit}
    />
  )
}
