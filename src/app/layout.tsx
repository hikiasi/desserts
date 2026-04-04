import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { YandexMetrica } from "@/components/layout/YandexMetrica";

export const metadata: Metadata = {
  title: "Замороженные десерты в Калининграде — Ледяной десерт",
  description: "Премиальные замороженные десерты для кафе, ресторанов и магазинов в Калининграде. В ассортименте: профитроли, мини торты, ЗОЖ-линейка без сахара. Прямые поставки, срок хранения 180 дней. Доставка от 2000₽ бесплатно.",
  keywords: [
    "замороженные десерты",
    "десерты для кафе и ресторанов",
    "профитроли оптом",
    "мини торты калининград",
    "десерты без сахара",
    "поставщик десертов HoReCa",
    "кондитерские изделия заморозка",
    "купить десерты оптом калининград",
    "веганские десерты калининград",
    "чизкейки замороженные",
    "сладости для кофейни",
    "замороженная выпечка и десерты"
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ледяной десерт",
    "image": "https://gelatodessert/icon.svg",
    "@id": "https://gelatodessert",
    "url": "https://gelatodessert",
    "telephone": "+79114864797",
    "priceRange": "₽₽",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Профессора Севастьянова, 3 — Маслобаза",
      "addressLocality": "Калининград",
      "addressRegion": "Калининградская область",
      "postalCode": "236040",
      "addressCountry": "RU"
    },
    "hasMap": "https://yandex.ru/maps/-/CPfBbWyF",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.714822,
      "longitude": 20.509014
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://vk.com/club233930785",
      "https://t.me/desserts_kaliningrad"
    ]
  };
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="9fbb258f2cc1c15c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://mc.yandex.com" />
        <link rel="preconnect" href="https://maps.yastatic.net" />
        <link rel="preconnect" href="https://yandex.ru" />
      </head>
      <body
        className="font-sans antialiased bg-white text-slate-900"
      >
        <CartProvider>
          {children}
          <CookieBanner />
        </CartProvider>
        <YandexMetrica />
      </body>
    </html>
  );
}
