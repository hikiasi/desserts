import { NextRequest, NextResponse } from "next/server"
import { revalidateTag } from "next/cache"
import prisma from "@/lib/prisma"
import { getB2BProducts, getRetailProducts, getRetailProductsCount, productCacheTags } from "@/lib/products"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get("type")
  const category = searchParams.get("category")
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined

  try {
    if (type === "b2b") {
      const products = await getB2BProducts(category)
      return NextResponse.json(products)
    }

    const [products, totalCount] = await Promise.all([
      getRetailProducts(category, limit),
      getRetailProductsCount(category),
    ])

    return NextResponse.json({
      products,
      total: totalCount,
    })
  } catch (error) {
    console.error("Products GET error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get("type")
  const ids = searchParams.get("ids")?.split(",")

  if (!ids || ids.length === 0) {
    return NextResponse.json({ error: "No IDs provided" }, { status: 400 })
  }

  try {
    if (type === "b2b") {
      await prisma.b2BProduct.deleteMany({
        where: { id: { in: ids } },
      })
      revalidateTag(productCacheTags.b2b, "max")
    } else {
      await prisma.product.deleteMany({
        where: { id: { in: ids } },
      })
      revalidateTag(productCacheTags.retail, "max")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Products bulk DELETE error:", error)
    return NextResponse.json({ error: "Failed to delete products" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, ...data } = body

    if (type === "b2b") {
      const product = await prisma.b2BProduct.create({
        data: {
          name: data.name,
          price: parseFloat(data.price),
          price200: data.price200 ? parseFloat(data.price200) : null,
          oldPrice: data.oldPrice ? parseFloat(data.oldPrice) : null,
          weight: data.weight,
          category: data.category,
          description: data.description,
          image: data.image,
          isHit: !!data.isHit,
          isNew: !!data.isNew,
        },
      })

      revalidateTag(productCacheTags.b2b, "max")
      return NextResponse.json(product)
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: parseFloat(data.price),
        oldPrice: data.oldPrice ? parseFloat(data.oldPrice) : null,
        weight: data.weight,
        category: data.category,
        description: data.description,
        image: data.image,
        isHit: !!data.isHit,
        isNew: !!data.isNew,
      },
    })

    revalidateTag(productCacheTags.retail, "max")
    return NextResponse.json(product)
  } catch (error) {
    console.error("Products POST error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
