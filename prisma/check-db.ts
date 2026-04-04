
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const productCount = await prisma.product.count();
  if (productCount > 0) {
    console.log('Database is already seeded.');
    process.exit(0);
  } else {
    console.log('Database is empty, seeding is required.');
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
