/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e69f4965f1b0aef2763b02be329e0c9"
  },
  {
    "url": "assets/css/0.styles.37aece68.css",
    "revision": "23203c586d29e4335fec2f73400025ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.7b31f2c5.js",
    "revision": "353e6e685f39d885baf09fb269d1e087"
  },
  {
    "url": "assets/js/16.a6459977.js",
    "revision": "75791849ed3fb2c8183c76b6e2ce6d4a"
  },
  {
    "url": "assets/js/17.a9f3a62d.js",
    "revision": "d051bc2276ede0597d831397f1145a63"
  },
  {
    "url": "assets/js/18.d8070267.js",
    "revision": "ed75a869134ac19fa7e978a7cca1d4e7"
  },
  {
    "url": "assets/js/19.4a80171f.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.cf27766b.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.3981269e.js",
    "revision": "242c7a5e8f24a72c02a36ac160230115"
  },
  {
    "url": "assets/js/21.8ca0f251.js",
    "revision": "4a59df6ec681cc1cbce34915b0a7206a"
  },
  {
    "url": "assets/js/22.c606fd39.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.d4537753.js",
    "revision": "b0dba7b917f3acf2add1dff09d0635f8"
  },
  {
    "url": "assets/js/24.e9fd0747.js",
    "revision": "aee22cad59c7b81c9981d293d118d54c"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.e8a1a959.js",
    "revision": "eb483a3d380d08bf6c266fc6e6ad6c73"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a8cd9ccda6df66f7889607729383bb8d"
  },
  {
    "url": "design/index.html",
    "revision": "345251cb62ba1aaa0130f1d138e15908"
  },
  {
    "url": "index.html",
    "revision": "fb25e270a592bad40dd911b41f826bc8"
  },
  {
    "url": "intro/index.html",
    "revision": "7e005b0d49a3a66798e0752dc5e07a56"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5947319ccc720db5a079b0413d6bc0e1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "7843b5291be7445f3bb08a48fc86f1d5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6025bdf17d7bf4f4c891e1b1d2f7566c"
  },
  {
    "url": "software/index.html",
    "revision": "82301e6a90e6caaaf20ad2bf59747f0c"
  },
  {
    "url": "test/index.html",
    "revision": "25ee9555019da13d10bf56693d2056bd"
  },
  {
    "url": "use cases/index.html",
    "revision": "02b416e2dd5c7b5b2aad5dad47503197"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
