"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const METRIKA_ID = 108251681
const CONSENT_KEY = "cookie-consent"

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void
  }
}

export function YandexMetrica() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const tryEnable = () => {
      if (localStorage.getItem(CONSENT_KEY) !== "true") {
        return
      }

      const schedule = window.requestIdleCallback
        ? () => window.requestIdleCallback(() => setEnabled(true), { timeout: 3000 })
        : () => window.setTimeout(() => setEnabled(true), 1500)

      schedule()
    }

    tryEnable()
    window.addEventListener("cookie-consent-granted", tryEnable)

    return () => {
      window.removeEventListener("cookie-consent-granted", tryEnable)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <Script id="yandex-metrika" strategy="lazyOnload">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

          ym(${METRIKA_ID}, 'init', {
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
        <div><img src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" /></div>
      </noscript>
    </>
  )
}
