import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Admin user
  const hashedPassword = await bcrypt.hash("admin123", 10)
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
    },
  })

  // Clear existing products
  await prisma.product.deleteMany({})
  await prisma.b2BProduct.deleteMany({})

  const productData = [
    // Профитроли
    {
      name: "Профитроли классические с заварным кремом",
      price: 290,
      weight: "250 г (12-14 шт)",
      category: "Профитроли",
      description: "Наш хит! Натуральные сливки, масло 82,5%. Вкус нежный, как мороженое изнутри.",
      image: "/uploads/profitrole_classic.webp",
      isHit: true,
      priceWholesale: 275,
    },
    {
      name: "Профитроли с шоколадным кремом",
      price: 290,
      weight: "250 г (12-14 шт)",
      category: "Профитроли",
      description: "Бельгийский шоколад, натуральные сливки, масло 82,5%.",
      image: "/uploads/profitrole_choco.webp",
      isNew: false,
      priceWholesale: 275,
    },
    {
      name: "Профитроли с соленой карамелью",
      price: 290,
      weight: "250 г (12-14 шт)",
      category: "Профитроли",
      description: "Домашняя карамель, морская соль, сливки.",
      image: "/uploads/profitrole_caramel.webp",
      isNew: true,
      priceWholesale: 275,
    },
    {
      name: "Профитроли с клубничным кремом",
      price: 300,
      weight: "250 г (12-14 шт)",
      category: "Профитроли",
      description: "Натуральное клубничное пюре, сливки, ваниль.",
      image: "/uploads/profitrole_strawberry.webp",
      isNew: false,
      priceWholesale: 285,
    },

    // ЗОЖ-линейка
    {
      name: "Профитроли без сахара (ваниль)",
      price: 175,
      weight: "250 г",
      category: "ЗОЖ-линейка",
      description: "Эритрит, натуральные сливки, ванильный экстракт. На 40% меньше калорий.",
      image: "/uploads/profitrole_no_sugar.webp",
      isNew: true,
      priceWholesale: 160,
    },
    {
      name: "Торт без глютена шоколадный",
      price: 175,
      weight: "150 г",
      category: "ЗОЖ-линейка",
      description: "Премиальный шоколадный торт без содержания глютена.",
      image: "/uploads/cake_no_gluten.webp",
      priceWholesale: 160,
    },

    // Торты
    {
      name: "Медовик порционный",
      price: 165,
      weight: "120 г",
      category: "Торты",
      description: "Классический медовик по домашнему рецепту.",
      image: "/uploads/cake_medovik.webp",
      priceWholesale: 150,
    },
    {
      name: "Наполеон порционный",
      price: 165,
      weight: "120 г",
      category: "Торты",
      description: "Хрустящее слоеное тесто и нежный заварной крем.",
      image: "/uploads/cake_napoleon.webp",
      priceWholesale: 150,
    }
  ]

  for (const product of productData) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        oldPrice: Math.round(product.price * 1.15),
        weight: product.weight,
        category: product.category,
        description: product.description,
        image: product.image,
        isHit: product.isHit || false,
        isNew: product.isNew || false,
      }
    })

    await prisma.b2BProduct.create({
      data: {
        name: product.name,
        price: product.priceWholesale,
        price200: Math.round(product.priceWholesale * 0.9), // deeper discount for 200kg if applicable, though here it might be volume
        oldPrice: product.price,
        weight: product.weight,
        category: product.category,
        description: product.description,
        image: product.image,
        isHit: product.isHit || false,
        isNew: product.isNew || false,
      }
    })
  }

  console.log("Seed completed successfully with dessert products")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
