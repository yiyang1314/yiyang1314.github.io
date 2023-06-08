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
    "revision": "fb853f1ae142bf5adefa7cc4b5830f01"
  },
  {
    "url": "accumulate/index.html",
    "revision": "ca699a03fd4c828190e8c28d4c0b7999"
  },
  {
    "url": "algorithm/index.html",
    "revision": "378381b1d5fe0479d9f59c6d07f59a2c"
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
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/3.b0ae39a2.js",
    "revision": "60029b70cd7c033bd218956809e20da3"
  },
  {
    "url": "assets/js/4.01552ece.js",
    "revision": "aabefa1a3459f27d85e6534b9a44b809"
  },
  {
    "url": "assets/js/5.49183077.js",
    "revision": "08b8c5c2501789e484b412f36758605d"
  },
  {
    "url": "assets/js/6.ba2574a6.js",
    "revision": "69202df82a3ba509520b36c3990d7eb3"
  },
  {
    "url": "assets/js/7.73c62fb9.js",
    "revision": "f3fe2c3eafa787c3370b1a30cd30980b"
  },
  {
    "url": "assets/js/8.9826a9ea.js",
    "revision": "61568b6432785bce582f2999c3107f33"
  },
  {
    "url": "assets/js/app.27a4c54c.js",
    "revision": "bc49cbfec96221156d50efcb07a6a7e1"
  },
  {
    "url": "guide.html",
    "revision": "d14f95896c3956e2b7e6f9f134a8fa0f"
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
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "2610dc06bdd36b8f27f93ef0c1139175"
  },
  {
    "url": "others/index.html",
    "revision": "ed43680564d0166ba707ba83e3c3b40f"
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
