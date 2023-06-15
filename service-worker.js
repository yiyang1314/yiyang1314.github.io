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
    "revision": "06764db638feb19ebb6dfa3f913d0d80"
  },
  {
    "url": "5xx.html",
    "revision": "284caee177309e1b584a7aabaa1d99d7"
  },
  {
    "url": "accumulate/1.html",
    "revision": "9c3f6e382c56313c697297d6b47ff521"
  },
  {
    "url": "accumulate/2.html",
    "revision": "d666e7c4a4c7c0bfa0f80fb651a72e02"
  },
  {
    "url": "accumulate/3.html",
    "revision": "3159239c55627646a0fde35b08a0fef9"
  },
  {
    "url": "accumulate/4.html",
    "revision": "468511a6b24ad8aa0ff09b872e26117e"
  },
  {
    "url": "accumulate/5.html",
    "revision": "7bf6b04cf96772549b447afc9ea8ff30"
  },
  {
    "url": "accumulate/index.html",
    "revision": "139a3e388160ed4a204cad144b11d80f"
  },
  {
    "url": "algorithm/1.html",
    "revision": "a7dac72ca4739ef82009541e38f622a0"
  },
  {
    "url": "algorithm/2.html",
    "revision": "ba5090c5c6d55dd2da73259f14e5da09"
  },
  {
    "url": "algorithm/3.html",
    "revision": "56b965fd6dba9c716ebaf435c854fedf"
  },
  {
    "url": "algorithm/4.html",
    "revision": "a4fdabac744fcccad8f720a2238f1d6b"
  },
  {
    "url": "algorithm/5.html",
    "revision": "d8a41c55bee94df2163ca192e1c786a4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a3f1b29b54c2cb6871aca0fc3c824dd9"
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
    "url": "assets/js/23.48c64113.js",
    "revision": "f0ec8614fb83f6ae84fbb35326003cf6"
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
    "url": "assets/js/app.e873f12b.js",
    "revision": "df29ab315033d9410ea21a29229bb134"
  },
  {
    "url": "bot-eyes/index.html",
    "revision": "bd6c0aa67f56391a833be589def7d3c3"
  },
  {
    "url": "dotnet/camera-1.html",
    "revision": "c80ac3ffdbe6ecfeae4d642719721d1d"
  },
  {
    "url": "dotnet/index.html",
    "revision": "b78c1ecc3917f2c7328154ad9976e161"
  },
  {
    "url": "dotnet/winform.html",
    "revision": "3bfc523dd1f58244c19a26ccefee69f3"
  },
  {
    "url": "dotnet/wpf-1.html",
    "revision": "3797a9eb2e7169a515391385305ace77"
  },
  {
    "url": "guide.html",
    "revision": "8734b1b6da474803151b375dde0fc8fa"
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
    "revision": "914369a782cb04d2d6c73e33f6373fbf"
  },
  {
    "url": "navs/index.html",
    "revision": "3ba8530645693fbda51765fd1def3b0a"
  },
  {
    "url": "others/1.html",
    "revision": "f8dda77dd04c7f49ec3263c4c87e361a"
  },
  {
    "url": "others/2.html",
    "revision": "5f30ddf42b20537337a03f67b5688e3e"
  },
  {
    "url": "others/3.html",
    "revision": "93691b4c637bda0f0f2795d8d6659fe5"
  },
  {
    "url": "others/4.html",
    "revision": "7d7d79c57c20e16cbee3cdf2ec0189f7"
  },
  {
    "url": "others/5.html",
    "revision": "9e51b5bee09c69d94c031deb191fe12f"
  },
  {
    "url": "others/index.html",
    "revision": "234bba7234eab32a8c8250727e793845"
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
