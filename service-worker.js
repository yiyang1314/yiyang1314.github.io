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
    "revision": "34d8542796f58187f12ca5914d3006ce"
  },
  {
    "url": "5xx.html",
    "revision": "a4c0ff2c63553ce52c925a95ca58807a"
  },
  {
    "url": "accumulate/1.html",
    "revision": "9242b9fd936067a6d4a8d94f9ff9b4bd"
  },
  {
    "url": "accumulate/2.html",
    "revision": "6aa58e310186cc34358f6cabd12d1cef"
  },
  {
    "url": "accumulate/3.html",
    "revision": "5b7ddc8efdc3f2e1fe01f4f5e1e6db0f"
  },
  {
    "url": "accumulate/4.html",
    "revision": "29502de89103e4ee8f3ff4395f8e7d6a"
  },
  {
    "url": "accumulate/5.html",
    "revision": "a52f58b3d94611922ab32e105dbdb75a"
  },
  {
    "url": "accumulate/index.html",
    "revision": "9b3eafdb4e47d99382ed1fa54ca701ad"
  },
  {
    "url": "algorithm/1.html",
    "revision": "7c26b38c9438b6314cd31513c6f5eb25"
  },
  {
    "url": "algorithm/2.html",
    "revision": "92af8f1db2f392818d40b9f1b197b48b"
  },
  {
    "url": "algorithm/3.html",
    "revision": "80ba3175e5eeb56e36c624b155a05546"
  },
  {
    "url": "algorithm/4.html",
    "revision": "8dd55771a8374ed86706250520e7f1e2"
  },
  {
    "url": "algorithm/5.html",
    "revision": "ec19ae30b39d40e353d9d2d66b961cea"
  },
  {
    "url": "algorithm/index.html",
    "revision": "874cfc67bbdc60f0f844eeabb539bccf"
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
    "url": "assets/js/10.65095a15.js",
    "revision": "171466a7afa711241bb156d6cf89737b"
  },
  {
    "url": "assets/js/11.da4e65db.js",
    "revision": "3dc09a04b81748f3024be232fdb4b4ee"
  },
  {
    "url": "assets/js/12.84daea9a.js",
    "revision": "7618d6beaff923a2e1ad346d582f9bdd"
  },
  {
    "url": "assets/js/13.8e7b2869.js",
    "revision": "20affc646c7908f97029d6e92202d7a5"
  },
  {
    "url": "assets/js/14.2c8629fc.js",
    "revision": "048b2e0129a157b6e03d3a140657bb4e"
  },
  {
    "url": "assets/js/15.cc9cf77f.js",
    "revision": "67abecccfb2eafa1bff5ff34dcd8f8d0"
  },
  {
    "url": "assets/js/16.4cba7d92.js",
    "revision": "1db80231d0503fe0bc11af1f077799a1"
  },
  {
    "url": "assets/js/17.0bbf9d1c.js",
    "revision": "92268c947ce8c334060192c2ac53ebe0"
  },
  {
    "url": "assets/js/18.4982ec2b.js",
    "revision": "5f54065b2585d44311ad38378fe91bba"
  },
  {
    "url": "assets/js/19.5ed4fd91.js",
    "revision": "b0a30e752219c897b50aa29b1908eee0"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/20.564b8aea.js",
    "revision": "d66a718727ff560f75bcf13b8c414b6a"
  },
  {
    "url": "assets/js/21.145b5597.js",
    "revision": "b137af3d2de0aa89134c02976e6d4a19"
  },
  {
    "url": "assets/js/22.1b26b27d.js",
    "revision": "bfeb2014babdf67b5037b88617cbcded"
  },
  {
    "url": "assets/js/23.9a7d8775.js",
    "revision": "b2e187251dc5506921b9c7c6cbf77d58"
  },
  {
    "url": "assets/js/24.7be4ad9e.js",
    "revision": "6a4f4f65850401a8fda2a926d6874996"
  },
  {
    "url": "assets/js/25.38b5787f.js",
    "revision": "87dce913b8c34bb6410b4f3d0cb18307"
  },
  {
    "url": "assets/js/26.ae8ebd57.js",
    "revision": "b0652d3c81a0809f5672c9f8cd2e3c69"
  },
  {
    "url": "assets/js/27.58351d17.js",
    "revision": "09f5ae0a0e79eba87c5aada41daa322b"
  },
  {
    "url": "assets/js/28.1156d8cc.js",
    "revision": "6a031c3504b4594f6816fc2a67fcaf9c"
  },
  {
    "url": "assets/js/29.9e907bbe.js",
    "revision": "649031597b14fc209febdd4a1354ea39"
  },
  {
    "url": "assets/js/3.7efa24b5.js",
    "revision": "60ed2d216a243c8e718fac4c219c9ad6"
  },
  {
    "url": "assets/js/30.24725856.js",
    "revision": "4de389e0a8df125331d28b8b63bd27e7"
  },
  {
    "url": "assets/js/31.4ef0fbd2.js",
    "revision": "7ff01ce26f11f62ba1eab55d0667c0e7"
  },
  {
    "url": "assets/js/4.1458f423.js",
    "revision": "19978e4b1aca2ad97dc39f3bbd2cacac"
  },
  {
    "url": "assets/js/5.5c46b731.js",
    "revision": "cd77c5d910319392811b149b68025e32"
  },
  {
    "url": "assets/js/6.f6cc5d57.js",
    "revision": "49403f3de116450bedfd70eacb7df731"
  },
  {
    "url": "assets/js/7.99420bbf.js",
    "revision": "489e31e64f0bfa85e36f60b540bd8f94"
  },
  {
    "url": "assets/js/8.4936af28.js",
    "revision": "60b1fb78aeb1e5f1914d1139d0632b33"
  },
  {
    "url": "assets/js/9.4e419e82.js",
    "revision": "dc5564a0b6e2c0ce287761b511c7ec15"
  },
  {
    "url": "assets/js/app.cc6957d8.js",
    "revision": "c4741fd06e19a749f8b1970dc7961908"
  },
  {
    "url": "bot-eyes/index.html",
    "revision": "50430ed4f578e922ed8a38dfaf5cc4f2"
  },
  {
    "url": "dotnet/camera-1.html",
    "revision": "729de5bb9fd1da244119fc0f3e591a91"
  },
  {
    "url": "dotnet/index.html",
    "revision": "f8c7c04dbbb70be0ea8a7d6a9cec18b2"
  },
  {
    "url": "dotnet/winform.html",
    "revision": "73df3f383f5edc8f160b2be3b9507c63"
  },
  {
    "url": "dotnet/wpf-1.html",
    "revision": "abb7c00f4c55b5c6fa60312b0dc870af"
  },
  {
    "url": "guide.html",
    "revision": "517a620b0981e659bc85526b29ae5ede"
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
    "url": "images/image-20230610235211871.png",
    "revision": "817643d6bf68bf842273f01d6b3d483d"
  },
  {
    "url": "images/image-20230610235256751.png",
    "revision": "d013fc289188cffeb2fd14e787aac7fc"
  },
  {
    "url": "images/image-20230611000018519.png",
    "revision": "556f7e578022f7f4a82a1270105126c0"
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
    "revision": "25a850ead36434e6c7f3f684cfd16031"
  },
  {
    "url": "navs/index.html",
    "revision": "670194778058a2ac61654d13b4f7b742"
  },
  {
    "url": "others/1.html",
    "revision": "f2253d82eb78b2182beb9c4c92ff5401"
  },
  {
    "url": "others/2.html",
    "revision": "89f1ccf9857a1b46d935c7809951315d"
  },
  {
    "url": "others/3.html",
    "revision": "aa79450e76226609601636ee3275e32a"
  },
  {
    "url": "others/4.html",
    "revision": "b83cb719736f7642c8ad15be6e40ee10"
  },
  {
    "url": "others/5.html",
    "revision": "5dbe65f6472a571aed5faf50b48b1ff2"
  },
  {
    "url": "others/index.html",
    "revision": "74b0b480af96392b0c40dc3bd81bd25e"
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
