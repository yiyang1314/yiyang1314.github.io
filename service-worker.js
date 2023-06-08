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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "847d152c71d92f8f37bd9faf076e8c5f"
  },
  {
    "url": "accumulate/1.html",
    "revision": "76009ef68ea7cf68bf3aba5166bcfd21"
  },
  {
    "url": "accumulate/3.html",
    "revision": "8c6e9f031f97ba0e56b5719df7e78a3b"
  },
  {
    "url": "accumulate/4.html",
    "revision": "9b4aa2afb14a51954b22a6a0af83285a"
  },
  {
    "url": "accumulate/5.html",
    "revision": "7016760a1eeb2b018a7f389ca2cdf79b"
  },
  {
    "url": "accumulate/index.html",
    "revision": "14cdf920955f5d1f03dcb815c1a54615"
  },
  {
    "url": "algorithm/1.html",
    "revision": "fa7da95ad7567f6ebc4ca835c2e8d214"
  },
  {
    "url": "algorithm/2.html",
    "revision": "229ae724bcb65b963a4fbe58e8386a51"
  },
  {
    "url": "algorithm/4.html",
    "revision": "cc43633b61cdd9c5f3478f597c22381c"
  },
  {
    "url": "algorithm/5.html",
    "revision": "2ec0eb41a06a18c8c8eba3222ccc3450"
  },
  {
    "url": "algorithm/index.html",
    "revision": "571b918978f2b3ae855b26c717b88433"
  },
  {
    "url": "assets/css/0.styles.c9120bc4.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cfc7b205.js",
    "revision": "c6ca03c67e89f5c6cdf9095b91b9fd4c"
  },
  {
    "url": "assets/js/11.cb8ae4bc.js",
    "revision": "957d71ae4cb64c2434e3786b2a3dd10d"
  },
  {
    "url": "assets/js/12.ab3ecb05.js",
    "revision": "ad4a5a65a7a1f2ea2d0663a3d5532374"
  },
  {
    "url": "assets/js/13.86f17a9a.js",
    "revision": "edbcf189c405a89543ce472d35766321"
  },
  {
    "url": "assets/js/14.ded0f1b1.js",
    "revision": "d92f95d5c5ed7d493bc63135bb42f2ee"
  },
  {
    "url": "assets/js/15.86569fc0.js",
    "revision": "bc74d028a5dc1ddb3c99f6e745eaa915"
  },
  {
    "url": "assets/js/16.38bf9bf2.js",
    "revision": "f7aa45e6cb828693f853781193f9a084"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/3.b0ae39a2.js",
    "revision": "60029b70cd7c033bd218956809e20da3"
  },
  {
    "url": "assets/js/4.a57a78a9.js",
    "revision": "3425c90a79174ceacd5190d4bcaf4aa3"
  },
  {
    "url": "assets/js/5.11d7f905.js",
    "revision": "6d448a72010b5d4cdba0d927134d4b1b"
  },
  {
    "url": "assets/js/6.adf1cbb1.js",
    "revision": "ae4dbc7ccd58c4e4c90b44ab406baa9e"
  },
  {
    "url": "assets/js/7.1581cf2f.js",
    "revision": "c2beaac32c7278a9aa0f2536e61c6d11"
  },
  {
    "url": "assets/js/8.3ca4c508.js",
    "revision": "22c45314d199ea5517c215c0c98d0931"
  },
  {
    "url": "assets/js/9.93f8b21b.js",
    "revision": "0376d2031aaad5d2f1f1568fb4affb7f"
  },
  {
    "url": "assets/js/app.4da30dd0.js",
    "revision": "48303985da7a65fdad31fdf34cb641bc"
  },
  {
    "url": "guide.html",
    "revision": "788108960e74c6c92320684439bedd54"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.png",
    "revision": "952983bdd6c11d2418653484cd0f1663"
  },
  {
    "url": "images/test.jpg",
    "revision": "db130ba01e25e42cf69d6a29fcc27911"
  },
  {
    "url": "index.html",
    "revision": "3a46e76c6e4938b07b7e5ec85d0ca4d1"
  },
  {
    "url": "others/index.html",
    "revision": "46a9c734d44c8ebe1e571706a48b48cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
