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
    "revision": "add10564de962f55f7a588e4edbfa69d"
  },
  {
    "url": "accumulate/1.html",
    "revision": "afa3cc24777897e99220772c3557168e"
  },
  {
    "url": "accumulate/2.html",
    "revision": "057634b9d01dc792922aada9f215ec4c"
  },
  {
    "url": "accumulate/3.html",
    "revision": "a4d9bf289a1ee4fcb3c516ec275535d4"
  },
  {
    "url": "accumulate/4.html",
    "revision": "1679a12388c8e41b4d92c4cd261c7711"
  },
  {
    "url": "accumulate/5.html",
    "revision": "191cacd647beb48d9a82a06f8ace2f87"
  },
  {
    "url": "accumulate/index.html",
    "revision": "0d74435063d8a654670a835c0c6c1663"
  },
  {
    "url": "algorithm/1.html",
    "revision": "5cdf224701486e7f4efd0e89f78d8218"
  },
  {
    "url": "algorithm/2.html",
    "revision": "b62400645ec4f1118a8f0bd19ea81c30"
  },
  {
    "url": "algorithm/3.html",
    "revision": "5b12a575625d41e838d3480e53a125de"
  },
  {
    "url": "algorithm/4.html",
    "revision": "0b1923a6d22c6b08ac38218bf794ff7e"
  },
  {
    "url": "algorithm/5.html",
    "revision": "97092c187229893f305ab0c388850a4e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "23a41e1f1a6994138ef3efb53274bf2b"
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
    "url": "assets/js/10.d4e96276.js",
    "revision": "60642454930f4b18344e9029ae9688ba"
  },
  {
    "url": "assets/js/11.8282ca15.js",
    "revision": "e376a8d19739e20a3102f73ac54173f1"
  },
  {
    "url": "assets/js/12.3612665a.js",
    "revision": "c63cb93b21b39100e74a16630e0b1189"
  },
  {
    "url": "assets/js/13.d2fae164.js",
    "revision": "90d75402d76a7f6034b3e35cf691b78a"
  },
  {
    "url": "assets/js/14.75952df8.js",
    "revision": "cc1017f8cb22cd0b5bc385f777cf34b1"
  },
  {
    "url": "assets/js/15.8dd8bc33.js",
    "revision": "d9c3f02d595ef4e5a094d5b8070b8c9b"
  },
  {
    "url": "assets/js/16.fd832847.js",
    "revision": "fcd0108b79792d22ed252e2690b57d70"
  },
  {
    "url": "assets/js/17.1c516349.js",
    "revision": "c75b37ed70d18e051ad94da6034078ef"
  },
  {
    "url": "assets/js/18.92e53276.js",
    "revision": "8c51b2f169694b6905724833223a85f8"
  },
  {
    "url": "assets/js/19.19c4743c.js",
    "revision": "094e80a3e27c4a6207808b420460d582"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/20.fa172edb.js",
    "revision": "81feb6abfe2ca94fc39575e97a2d9d9e"
  },
  {
    "url": "assets/js/21.d5219ad1.js",
    "revision": "44d05fcaf31ab28df2ba9d12ae4eb0be"
  },
  {
    "url": "assets/js/22.653df740.js",
    "revision": "11f576391c9c0946b383f74406833f95"
  },
  {
    "url": "assets/js/23.85eda409.js",
    "revision": "3952e91d82ebbefca14af9e61b1945d2"
  },
  {
    "url": "assets/js/3.aed0c78a.js",
    "revision": "533a391217c12dc2c7f15c8f5d064eb1"
  },
  {
    "url": "assets/js/4.dd99c4a2.js",
    "revision": "b474d3bd50738b9d2a016c67943e6c55"
  },
  {
    "url": "assets/js/5.85f0d872.js",
    "revision": "dd8257a937d2c3d2c74bf3e079f60832"
  },
  {
    "url": "assets/js/6.e73572a1.js",
    "revision": "26e71b98551838fe52bc2aed242bd642"
  },
  {
    "url": "assets/js/7.b79adf72.js",
    "revision": "2199307c26ec02e1c36d4d64f2480d9e"
  },
  {
    "url": "assets/js/8.bb2e147d.js",
    "revision": "898aaef589a6f326195c267ef9b2eb40"
  },
  {
    "url": "assets/js/9.7d7233f4.js",
    "revision": "9bbf5e90355506328a021bd01ee31139"
  },
  {
    "url": "assets/js/app.da5745cb.js",
    "revision": "e34ffd738ba3651ec9b9ef120e5c0287"
  },
  {
    "url": "guide.html",
    "revision": "382c1545209eafc3971218e2b935af1f"
  },
  {
    "url": "images/2f90cbc1e6c04fc99dbb9d7a343bac8d.png",
    "revision": "1165099e9dfb3a7d1a62ff89bd5e080e"
  },
  {
    "url": "images/5964f8c48b61480b874cdc72d9c985cb.png",
    "revision": "2f90ea96da2a499ef01cf4cf219e0a84"
  },
  {
    "url": "images/image-20230219192443436.png",
    "revision": "5db36e38715a7c9ed258e030a84e0d44"
  },
  {
    "url": "images/image-20230221223011581.png",
    "revision": "c464037cd972a000376b046dd019946a"
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
    "revision": "c8d71998a92dc408df285f75c7a4f83c"
  },
  {
    "url": "others/1.html",
    "revision": "2724c61789c6f547a8f6f6a9a422fd6e"
  },
  {
    "url": "others/2.html",
    "revision": "bf665527354b73fc3830de2f63807b92"
  },
  {
    "url": "others/3.html",
    "revision": "2a1c74b6061c48f08b318012beec4453"
  },
  {
    "url": "others/4.html",
    "revision": "db6f1968b7bc29095e5b0d1f96cc8e4b"
  },
  {
    "url": "others/5.html",
    "revision": "33c33ecae9702a1161b4f7b87ef103c5"
  },
  {
    "url": "others/index.html",
    "revision": "c6baa507492fe8c06f4773605aa62d6c"
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
