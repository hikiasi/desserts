#!/bin/sh
set -e

echo "Pushing schema to database..."
npx prisma db push

echo "Checking if database is seeded..."
# Используем стандартный вывод ошибок для совместимости с sh
if npx tsx prisma/check-db.ts > /dev/null 2>&1; then
  echo "Database is already seeded."
else
  echo "Seeding database..."
  npx tsx prisma/seed.ts
fi

echo "Starting application..."
exec npm start