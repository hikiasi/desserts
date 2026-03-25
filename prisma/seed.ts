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

  const products = [
    // Мини торты (С сахаром) -> Торты
    {
      category: "Торты",
      name: "МОЛОЧНАЯ ДЕВОЧКА",
      composition: "Сгущенное молоко, молоко 2.5%, сыр творожный, яйцо куриное, сметана 15%, кукурузный крахмал, мука в/с, разрыхлитель, сливки с змж 33%, сахар, соль, сода.",
      weight: "130 г",
      proteins: "7,0 г",
      fats: "14,3 г",
      carbs: "38,1 г",
      kcal: "307 ккал",
      price: 165,
      image: "/uploads/cake_molochnaya_devochka.webp"
    },
    {
      category: "Торты",
      name: "СНИКЕРС",
      composition: "Сыр творожный, сметана 15%, молоко 2,5%, сахар-песок, сливки 33%, яйцо куриное, мука в/с, молоко 2,5%, арахис, какао, крахмал кукурузный, масло растительное, сливки с змж 33%.",
      weight: "140 г",
      proteins: "3,3 г",
      fats: "15,8 г",
      carbs: "38,4 г",
      kcal: "307 ккал",
      price: 165,
      image: "/uploads/cake_snickers.webp",
      isHit: true
    },
    {
      category: "Торты",
      name: "МЕДОВИК",
      composition: "Молоко 2,5%, мука в/с, яйцо куриное, молоко сгущенное вареное, крахмал кукурузный, маргарин, мед, сахар-песок, сливки с змж 33%, соль, сода.",
      weight: "125 г",
      proteins: "5,3 г",
      fats: "13,7 г",
      carbs: "42,9 г",
      kcal: "316 ккал",
      price: 165,
      image: "/uploads/cake_medovik.webp"
    },
    {
      category: "Торты",
      name: "НАПОЛЕОН КАРАМЕЛЬНЫЙ",
      composition: "Молоко 2,5%, мука пшеничная в/с, яйцо куриное, молоко сгущенное вареное, крахмал кукурузный, сахар-песок, уксус яблочный, сливки с змж 33%, маргарин, соль.",
      weight: "125 г",
      proteins: "5,2 г",
      fats: "10,8 г",
      carbs: "30,3 г",
      kcal: "248 ккал",
      price: 165,
      image: "/uploads/cake_napoleon_caramel.webp",
      isNew: true
    },

    // Мини торты (Без сахара) -> ЗОЖ-линейка
    {
      category: "ЗОЖ-линейка",
      name: "СНИКЕРС (Без сахара)",
      composition: "Молоко 2,5%, молоко сухое обезжиренное, яйцо куриное, сироп топинамбура, сметана 15%, отруби овсяные, мука пшеничная цельнозерновая, сахарозаменитель Fit Parad №10, масло растительное, арахис, крахмал кукурузный, какао-порошок, разрыхлитель.",
      weight: "130 г",
      proteins: "11,8 г",
      fats: "7,0 г",
      carbs: "20,1 г",
      kcal: "179 ккал",
      price: 175,
      image: "/uploads/cake_snickers_sugarfree.webp",
      isHit: true
    },
    {
      category: "ЗОЖ-линейка",
      name: "НАПОЛЕОН (Без сахара)",
      composition: "Молоко 2,5%, молоко сухое обезжиренное, мука пшеничная в/с, яйцо куриное, уксус яблочный, сахарозаменитель Fit Parad №10, маргарин, соль, ароматизатор «Ванилин».",
      weight: "125 г",
      proteins: "8,1 г",
      fats: "9,2 г",
      carbs: "21,4 г",
      kcal: "201 ккал",
      price: 175,
      image: "/uploads/cake_napoleon_sugarfree.webp"
    },
    {
      category: "ЗОЖ-линейка",
      name: "МЕДОВИК (Без сахара)",
      composition: "Молоко 2,5%, сметана 15%, молоко сухое обезжиренное, яйцо куриное, мед, отруби овсяные, крахмал кукурузный, мука пшеничная цельнозерновая, сахарозаменитель Fit Parad №10, разрыхлитель, сода.",
      weight: "125 г",
      proteins: "9,8 г",
      fats: "3,5 г",
      carbs: "20,5 г",
      kcal: "154 ккал",
      price: 175,
      image: "/uploads/cake_medovik_sugarfree.webp"
    },
    {
      category: "ЗОЖ-линейка",
      name: "БАНАН В ШОКОЛАДЕ (Без сахара)",
      composition: "Молоко 2,5%, молоко сухое обезжиренное, мука пшеничная цельнозерновая, сыр творожный, кукурузный крахмал, какао, пюре банана, желатин, яйцо куриное, сливки 22%, масло растительное, яблочный уксус, соль, сода, сахарозаменитель Fit Parad №10, ароматизатор «Ванилин$.",
      weight: "130 г",
      proteins: "11,8 г",
      fats: "9,7 г",
      carbs: "14,2 г",
      kcal: "191 ккал",
      price: 175,
      image: "/uploads/cake_banana_chocolate.webp",
      isNew: true
    },

    // Профитроли
    {
      category: "Профитроли",
      name: "Профитроли: СЛИВОЧНЫЙ МУСС / СЛИВОЧНЫЙ КРЕМ",
      composition: "Сливки 33%, молоко 2,5%, яйца куриные, масло сливочное 82,5%, мука пшеничная в/с, сахар-песок, шоколад молочный, крахмал кукурузный, желатин, соль пищевая, экстракт ванили.",
      weight: "250 г",
      proteins: "4,1 г",
      fats: "19,7 г",
      carbs: "16,8 г",
      kcal: "259 ккал",
      price: 290,
      image: "/uploads/profitrole_classic.webp",
      isHit: true
    },
    {
      category: "Профитроли",
      name: "Профитроли: ШОКОЛАДНЫЙ МУСС / СЛИВОЧНЫЙ КРЕМ",
      composition: "Сливки 33%, молоко 2,5%, яйца куриные, масло сливочное 82,5%, мука пшеничная в/с, сахар-песок, шоколад молочный, какао-порошок, крахмал кукурузный, желатин, соль пищевая, экстракт ванили.",
      weight: "250 г",
      proteins: "4,1 г",
      fats: "19,7 г",
      carbs: "16,8 г",
      kcal: "259 ккал",
      price: 290,
      image: "/uploads/profitrole_chocolate.webp"
    },
    {
      category: "Профитроли",
      name: "Профитроли: СЛИВОЧНЫЙ МУСС / КАРАМЕЛЬНЫЙ КРЕМ",
      composition: "Сливки 33%, молоко 2,5%, яйца куриные, масло сливочное 82,5%, молоко сгущенное вареное, мука пшеничная в/с, сахар-песок, арахис, крахмал кукурузный, желатин, соль пищевая, экстракт ванили.",
      weight: "250 г",
      proteins: "3,9 г",
      fats: "22,4 г",
      carbs: "12,5 г",
      kcal: "266 ккал",
      price: 290,
      image: "/uploads/profitrole_caramel.webp",
      isNew: true
    }
  ]

  for (const p of products) {
    const description = `Состав: ${p.composition}\n\nПищевая ценность на 100г:\nБелки: ${p.proteins}\nЖиры: ${p.fats}\nУглеводы: ${p.carbs}\nКалорийность: ${p.kcal}`;
    const priceWholesale = p.price - 15;

    await prisma.product.create({
      data: {
        name: p.name,
        price: p.price,
        oldPrice: Math.round(p.price * 1.15),
        weight: p.weight,
        category: p.category,
        description: description,
        image: p.image,
        isHit: p.isHit || false,
        isNew: p.isNew || false,
      }
    })

    await prisma.b2BProduct.create({
      data: {
        name: p.name,
        price: priceWholesale,
        price200: Math.round(priceWholesale * 0.9),
        oldPrice: p.price,
        weight: p.weight,
        category: p.category,
        description: description,
        image: p.image,
        isHit: p.isHit || false,
        isNew: p.isNew || false,
      }
    })
  }

  console.log("Seed completed successfully with new products")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
