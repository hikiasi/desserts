import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CookieBanner } from "@/components/layout/CookieBanner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Замороженные десерты в Калининграде — Ледяной десерт",
  description: "Премиальные замороженные десерты для кафе, ресторанов и магазинов в Калининграде. В ассортименте: профитроли, мини торты, ЗОЖ-линейка без сахара. Прямые поставки, срок хранения 180 дней. Доставка от 2000₽ бесплатно.",
  keywords: "замороженные десерты, десерты для кафе и ресторанов, профитроли, мини торты, десерты калининград, оптовые поставки десертов",
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
    "image": "https://desserts-kaliningrad.ru/icon.svg",
    "@id": "https://desserts-kaliningrad.ru",
    "url": "https://desserts-kaliningrad.ru",
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
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://vk.com/market-129683673",
      "https://t.me/desserts_kaliningrad"
    ]
  };

  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="8fcd8e67616dddd3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <CartProvider>
          {children}
          <CookieBanner />
        </CartProvider>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107041309', 'ym');

            ym(107041309, 'init', {
              ssr:true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/107041309" style={{position:'absolute', left:'-9999px'}} alt="" /></div>
        </noscript>
      </body>
    </html>
  );
}
