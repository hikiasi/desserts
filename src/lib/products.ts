import { unstable_cache } from "next/cache"
import prisma from "@/lib/prisma"

export const productCacheTags = {
  retail: "retail-products",
  b2b: "b2b-products",
} as const

type RetailWhere = {
  category?: string
  isHit?: boolean
  isNew?: boolean
}

function buildRetailWhere(category?: string | null): RetailWhere {
  if (!category || category === "Все") {
    return {}
  }

  if (category === "Хиты продаж") {
    return { isHit: true }
  }

  if (category === "Новинки") {
    return { isNew: true }
  }

  return { category }
}

export async function getRetailProducts(category?: string | null, limit?: number) {
  if (!process.env.DATABASE_URL) {
    return []
  }

  const where = buildRetailWhere(category)

  const getProducts = unstable_cache(
    async () =>
      prisma.product.findMany({
        where,
        take: limit,
        orderBy: { price: "asc" },
      }),
    ["retail-products", category ?? "all", String(limit ?? "all")],
    {
      revalidate: 300,
      tags: [productCacheTags.retail],
    }
  )

  return getProducts()
}

export async function getRetailProductsCount(category?: string | null) {
  if (!process.env.DATABASE_URL) {
    return 0
  }

  const where = buildRetailWhere(category)

  const getCount = unstable_cache(
    async () => prisma.product.count({ where }),
    ["retail-products-count", category ?? "all"],
    {
      revalidate: 300,
      tags: [productCacheTags.retail],
    }
  )

  return getCount()
}

export async function getB2BProducts(category?: string | null) {
  if (!process.env.DATABASE_URL) {
    return []
  }

  const getProducts = unstable_cache(
    async () =>
      prisma.b2BProduct.findMany({
        where: category && category !== "Все" ? { category } : {},
      }),
    ["b2b-products", category ?? "all"],
    {
      revalidate: 300,
      tags: [productCacheTags.b2b],
    }
  )

  return getProducts()
}
