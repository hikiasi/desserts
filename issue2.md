68
Performance
90
Accessibility
96
Best Practices
100
SEO
68
FCP
+10
LCP
+2
TBT
+22
CLS
+25
SI
+10
Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Expand view
First Contentful Paint
1.4 s
Largest Contentful Paint
6.7 s
Total Blocking Time
360 ms
Cumulative Layout Shift
0
Speed Index
1.8 s
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT
Insights
Use efficient cache lifetimes Est savings of 71 KiB
A long cache lifetime can speed up repeat visits to your page. Learn more about caching.FCPLCPUnscored
Request
Cache TTL
Transfer Size
Yandex Metrica analytics 
89 KiB
/metrika/tag.js?id=108…(mc.yandex.ru)
1h
89 KiB
/sync_cook…?cid=108…&scid=875f96d5-…&token=10991.DmBhHI_Y2…(mc.yandex.com)
None
0 KiB
/sync_cook…?cid=108…&scid=9799cf40-…&token=10991.sjOJO9v5w…(mc.yandex.com)
None
0 KiB
Render-blocking requests Est savings of 240 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
localhost 1st party
12.5 KiB	160 ms
…chunks/5bc39f2cb7c0c9e3.css(localhost)
12.5 KiB
160 ms
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Top function call
Total reflow time
69be39811437728d.js:2
4 ms
Source
Total reflow time
[unattributed]
63 ms
16034fc5cd760dab.js:11
0 ms
16034fc5cd760dab.js:3
4 ms
4fd40ecfc69820d3.js:5
0 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 269 ms
Initial Navigation
http://localhost:3000 - 40 ms, 22.61 KiB
…chunks/5bc39f2cb7c0c9e3.css(localhost) - 63 ms, 12.45 KiB
…media/1bffadaabf893a1e-s.7cd81963.woff2(localhost) - 269 ms, 83.57 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
no origins were preconnected
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Legacy JavaScript Est savings of 13 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingFCPLCPUnscored
URL
Wasted bytes
localhost 1st party
13.5 KiB
…chunks/69be398…d.js(localhost)
13.5 KiB
69be39811437728d.js:1
Array.prototype.at
69be39811437728d.js:1
Array.prototype.flat
69be39811437728d.js:1
Array.prototype.flatMap
69be39811437728d.js:1
Object.fromEntries
69be39811437728d.js:1
Object.hasOwn
69be39811437728d.js:1
String.prototype.trimEnd
69be39811437728d.js:1
String.prototype.trimStart
Optimize DOM size
LCP breakdown
3rd parties
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Reduce JavaScript execution time 1.5 s
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to reduce Javascript execution time.TBTUnscored
URL
Total CPU Time
Script Evaluation
Script Parse
localhost 1st party
2,578 ms	874 ms	34 ms
http://localhost:3000
1,140 ms
23 ms
9 ms
…chunks/a70928e1a8e401f6.js(localhost)
721 ms
215 ms
8 ms
…chunks/69be398…d.js(localhost)
717 ms
636 ms
18 ms
Yandex Metrica analytics 
670 ms	583 ms	20 ms
/metrika/tag.js?id=108…(mc.yandex.ru)
670 ms
583 ms
20 ms
Unattributable
219 ms	16 ms	0 ms
Unattributable
219 ms
16 ms
0 ms
Minimize main-thread work 3.5 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBTUnscored
Category
Time Spent
Script Evaluation
1,488 ms
Style & Layout
950 ms
Other
818 ms
Rendering
138 ms
Script Parsing & Compilation
107 ms
Parse HTML & CSS
33 ms
Garbage Collection
12 ms
Reduce unused JavaScript Est savings of 68 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCPUnscored
URL
Transfer Size
Est Savings
Yandex Metrica analytics 
88.2 KiB	43.9 KiB
/metrika/tag.js?id=108…(mc.yandex.ru)
88.2 KiB
43.9 KiB
localhost 1st party
68.3 KiB	23.7 KiB
…chunks/69be398…d.js(localhost)
68.3 KiB
23.7 KiB
Page prevented back/forward cache restoration 2 failure reasons
Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. Learn more about the bfcacheUnscored
Failure reason
Failure type
Pages with WebSocket cannot enter back/forward cache.
Pending browser support
http://localhost:3000
An iframe on the page started a navigation that did not complete.
Not actionable
Avoid long main-thread tasks 10 long tasks found
More information about the performance of your application. These numbers don't directly affect the Performance score.
Passed audits (16)