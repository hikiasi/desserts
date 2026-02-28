import type { Metadata } from "next";
import { Inter, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CookieBanner } from "@/components/layout/CookieBanner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Премиальные замороженные десерты для кафе и магазинов в Калининграде",
  description: "Замороженные десерты для кафе, ресторанов, магазинов в Калининграде. Профитроли, торты, ЗОЖ-линейка. Прямые поставки от производителя. Срок хранения 180 дней. Доставка от 2000₽ бесплатно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="8fcd8e67616dddd3" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${nunito.variable} font-sans antialiased bg-white text-slate-900`}
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
