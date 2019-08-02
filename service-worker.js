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
    "revision": "0bc55550ff5d99d179f1edbdc4d71773"
  },
  {
    "url": "assets/css/0.styles.62fd4d64.css",
    "revision": "bde4212c56c02fe276905fcd34c5dd28"
  },
  {
    "url": "assets/fonts/fa-brands-400.4f786efd.woff2",
    "revision": "4f786efdf6328877ec2448bf265bcc8f"
  },
  {
    "url": "assets/fonts/fa-brands-400.72f5c754.woff",
    "revision": "72f5c754189a296467db59e26e2b4671"
  },
  {
    "url": "assets/fonts/fa-brands-400.75dae2b6.ttf",
    "revision": "75dae2b62813bc641a9b6a2fc041e4de"
  },
  {
    "url": "assets/fonts/fa-brands-400.e33a1a54.eot",
    "revision": "e33a1a54eb0a1e560362fcf5335ac26c"
  },
  {
    "url": "assets/fonts/fa-regular-400.76d069c8.ttf",
    "revision": "76d069c84f54a63d1bf9e29c76fe65e6"
  },
  {
    "url": "assets/fonts/fa-regular-400.d90e1b03.woff2",
    "revision": "d90e1b03a9168c0d775a52098423adfb"
  },
  {
    "url": "assets/fonts/fa-regular-400.d98ffd73.eot",
    "revision": "d98ffd73c6b104b42bfe69c987a72924"
  },
  {
    "url": "assets/fonts/fa-regular-400.f9695ea8.woff",
    "revision": "f9695ea8029b2975dea6753bf6f1bf1c"
  },
  {
    "url": "assets/fonts/fa-solid-900.55ce8d0c.woff",
    "revision": "55ce8d0ca92adb7c283d6043d0edf46f"
  },
  {
    "url": "assets/fonts/fa-solid-900.60ce8cf4.woff2",
    "revision": "60ce8cf4dd9fe177abdfeda21e20798e"
  },
  {
    "url": "assets/fonts/fa-solid-900.e9809ab6.ttf",
    "revision": "e9809ab6a5a34dc6b7966de82265d6bd"
  },
  {
    "url": "assets/fonts/fa-solid-900.f9b8a1aa.eot",
    "revision": "f9b8a1aa417e318d5be775e14ee3c475"
  },
  {
    "url": "assets/img/1.a233a244.jpg",
    "revision": "a233a24486875361422952f285f779ac"
  },
  {
    "url": "assets/img/2.fc0a46f6.jpg",
    "revision": "fc0a46f6088d8a31f08fe2ace3472f22"
  },
  {
    "url": "assets/img/3.05382ae6.jpg",
    "revision": "05382ae612ae46b99cc657351072aacf"
  },
  {
    "url": "assets/img/4.364291b2.jpg",
    "revision": "364291b2811fd59a521c74a2c5468fd5"
  },
  {
    "url": "assets/img/air.ee3648a7.svg",
    "revision": "ee3648a793b459842574d14c5f4958c4"
  },
  {
    "url": "assets/img/artifact-1.5c2821f6.jpeg",
    "revision": "5c2821f6a106672a3980cc53ee8c9738"
  },
  {
    "url": "assets/img/car.b0c7cdf0.jpeg",
    "revision": "b0c7cdf020e1d498d560b82ab2d229d0"
  },
  {
    "url": "assets/img/chest-mailroom.2f9b0d52.jpeg",
    "revision": "2f9b0d5210f3d7402bd36f322be9ae2c"
  },
  {
    "url": "assets/img/chest-state.5ede3009.jpeg",
    "revision": "5ede3009d34ed03ea342b51c92bff7b1"
  },
  {
    "url": "assets/img/chest-turbine.d36fdd05.jpeg",
    "revision": "d36fdd050d0df8978168275f5ebb84df"
  },
  {
    "url": "assets/img/clock-bridge.09a08785.jpeg",
    "revision": "09a08785e9bc2e3ed0621245f83822b5"
  },
  {
    "url": "assets/img/clock-location-berths.842be2b7.jpeg",
    "revision": "842be2b79b1337fc751fe8e09ad5a827"
  },
  {
    "url": "assets/img/clock-location-grand-staircase.2d451c59.jpg",
    "revision": "2d451c59dd0c05bd963ce51826e880cf"
  },
  {
    "url": "assets/img/clock-location-kitchen.41f76745.jpg",
    "revision": "41f767457f44b3a8f611364a48bb20c0"
  },
  {
    "url": "assets/img/clock-location-mailroom.41265379.jpg",
    "revision": "412653790787f0eb4ab500189007601d"
  },
  {
    "url": "assets/img/cracker.5dd5c4b0.jpeg",
    "revision": "5dd5c4b06785a455fb3a7c09b9f7758f"
  },
  {
    "url": "assets/img/distillery-piece-1-location.ee11e449.jpeg",
    "revision": "ee11e449897d9262dcc271d4cda9a95c"
  },
  {
    "url": "assets/img/distillery-piece-2-location1.b56b5af5.jpeg",
    "revision": "b56b5af55d753f63989da8fcf3d89ee0"
  },
  {
    "url": "assets/img/distillery.216c4fb1.jpeg",
    "revision": "216c4fb13d434dd46848b5a129279726"
  },
  {
    "url": "assets/img/distillery3.864360aa.jpeg",
    "revision": "864360aab78da6f8a8904177600c6b57"
  },
  {
    "url": "assets/img/distillery32.f9f71b43.jpeg",
    "revision": "f9f71b4384143523748bb09148a4dd48"
  },
  {
    "url": "assets/img/earth.5127b0a9.svg",
    "revision": "5127b0a96cd7868271f7e074b6188df2"
  },
  {
    "url": "assets/img/engineroom-dials.cce0c492.png",
    "revision": "cce0c4922b6f40030cae25aab01382f3"
  },
  {
    "url": "assets/img/fa-brands-400.060ea8dd.svg",
    "revision": "060ea8dd8446c15159ed6ec217ae29b9"
  },
  {
    "url": "assets/img/fa-regular-400.0234a585.svg",
    "revision": "0234a585809be071bd68db999f27f829"
  },
  {
    "url": "assets/img/fa-solid-900.d42cc8bb.svg",
    "revision": "d42cc8bb088b9bbcb51b1db2d9210976"
  },
  {
    "url": "assets/img/fire.37fb0add.svg",
    "revision": "37fb0add718a9a817f4bf9633965afca"
  },
  {
    "url": "assets/img/firework-danu.b821ff01.jpeg",
    "revision": "b821ff010819f71afa621d41473f98a1"
  },
  {
    "url": "assets/img/firework-poopdeck.137bc820.jpeg",
    "revision": "137bc820c59837a2bf02eda399afd98f"
  },
  {
    "url": "assets/img/firework-shield.251e4320.jpeg",
    "revision": "251e4320245c5ac100eb5f3859bdd905"
  },
  {
    "url": "assets/img/firework-strafe.2769f65f.jpeg",
    "revision": "2769f65ffadfe22c49e61ec75448f480"
  },
  {
    "url": "assets/img/getter-engine.8296f4e2.jpeg",
    "revision": "8296f4e2c0ab291f6267cfde6116664d"
  },
  {
    "url": "assets/img/getter-mailroom.6a2689b6.jpeg",
    "revision": "6a2689b6bb1aad749f77a619ec2a2cde"
  },
  {
    "url": "assets/img/getter-millionaire.e5beb069.jpeg",
    "revision": "e5beb0692581b644ea145e12a4b687d3"
  },
  {
    "url": "assets/img/kraken-forecastle.40f49d9f.jpeg",
    "revision": "40f49d9f1c4916804fe5eef4a68b7a3b"
  },
  {
    "url": "assets/img/large-safe.d5d85967.jpeg",
    "revision": "d5d85967f13c8bfd4827b40cd0f9f7aa"
  },
  {
    "url": "assets/img/lights.aaaad769.jpeg",
    "revision": "aaaad769c47d2396b509a84295afe7a8"
  },
  {
    "url": "assets/img/middle-location2.59a22c76.jpeg",
    "revision": "59a22c76aef38b80b6c50e87bfafeeca"
  },
  {
    "url": "assets/img/outlet-1stclass.7b841ffa.jpeg",
    "revision": "7b841ffa3ba756eea22049afbb76aa2b"
  },
  {
    "url": "assets/img/outlet-aft.d3aefacb.jpeg",
    "revision": "d3aefacbbd23bc19888cb97f3d0974da"
  },
  {
    "url": "assets/img/outlet-berths.44dd0544.jpeg",
    "revision": "44dd05446af1479fb50e73cc97344f32"
  },
  {
    "url": "assets/img/outlet-grand.bfcb2deb.jpeg",
    "revision": "bfcb2deb8668d3c118c1b396f64852f9"
  },
  {
    "url": "assets/img/outlet-state.dc10046c.jpeg",
    "revision": "dc10046c6c1af64b740281a17244a11c"
  },
  {
    "url": "assets/img/reward-binoculars.89b4a440.jpeg",
    "revision": "89b4a4402c6170a9391cf8d697668ee2"
  },
  {
    "url": "assets/img/safe-berths.ccb56afc.jpeg",
    "revision": "ccb56afc44e677840eaf90fef84917a3"
  },
  {
    "url": "assets/img/safe-bridge.20f6c507.jpeg",
    "revision": "20f6c5073a93c9602c870080db5bd1cd"
  },
  {
    "url": "assets/img/safe-millionaire.b6144620.jpeg",
    "revision": "b61446203a1a960c2811dba7bfc8fe09"
  },
  {
    "url": "assets/img/safe-zeus.7759d2ee.jpeg",
    "revision": "7759d2ee0f4004715066221ffa14caa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sender-aft.5d8710e3.jpeg",
    "revision": "5d8710e303cbaa4d21dda5170332551e"
  },
  {
    "url": "assets/img/sender-berths.3dc68156.jpeg",
    "revision": "3dc68156dd8b684ad35d1371bacc9d39"
  },
  {
    "url": "assets/img/sender-bridge.304caa47.jpeg",
    "revision": "304caa47505ff7a1abde521ecd49e774"
  },
  {
    "url": "assets/img/sender-rk7.c851eda5.jpeg",
    "revision": "c851eda57ede94db0685a3179f53262c"
  },
  {
    "url": "assets/img/sender-zeus.9c3efb61.jpg",
    "revision": "9c3efb61e02784def36641d3d667ff17"
  },
  {
    "url": "assets/img/shield-part3-location2.8716dc2d.jpeg",
    "revision": "8716dc2d29ce9ca01ad82149883f93a5"
  },
  {
    "url": "assets/img/shield-piece-1-location1.898a16c6.jpg",
    "revision": "898a16c64396e35c18c74549137d237f"
  },
  {
    "url": "assets/img/shield-piece-1-location2.17910081.jpeg",
    "revision": "17910081fca535ebc76c8c8dbf77e90c"
  },
  {
    "url": "assets/img/shield-piece-2-location2.ae8e5cf3.jpeg",
    "revision": "ae8e5cf3912d7079822758a0373c1a2d"
  },
  {
    "url": "assets/img/shield-piece-3-location1.0dcfe54c.jpeg",
    "revision": "0dcfe54c6fecb63dcc52a823f3587855"
  },
  {
    "url": "assets/img/shield.06e18e9c.jpeg",
    "revision": "06e18e9c137bd0a1d07c1d4779430067"
  },
  {
    "url": "assets/img/switch.c9d66f65.jpeg",
    "revision": "c9d66f65fd10d5e25e67a15fc9cf4c32"
  },
  {
    "url": "assets/img/terminal-air.ef1a9898.jpeg",
    "revision": "ef1a9898b198c48f091d79adba101466"
  },
  {
    "url": "assets/img/terminal-earth.a7b63d52.jpeg",
    "revision": "a7b63d525c640d38415580d73b7688da"
  },
  {
    "url": "assets/img/terminal-fire.71a7a351.jpg",
    "revision": "71a7a351b8a6b7b1de07c5448ca9247f"
  },
  {
    "url": "assets/img/terminal-water.ac749eeb.jpeg",
    "revision": "ac749eeb447fd0c7c34abebe863d36df"
  },
  {
    "url": "assets/img/valve-boiler_room.25b077c7.jpeg",
    "revision": "25b077c7b8c2b5d5f0047a9c10838ef6"
  },
  {
    "url": "assets/img/valve-cargo_hold.daf38d80.jpeg",
    "revision": "daf38d80e95736bf489a87bfeedba660"
  },
  {
    "url": "assets/img/water.4ecf1e5a.svg",
    "revision": "4ecf1e5a4c43fb4de48afa3b1a2c11f6"
  },
  {
    "url": "assets/js/10.b15312f7.js",
    "revision": "d9ecb4c3a5175d5b5a10e70a940378b8"
  },
  {
    "url": "assets/js/11.6dfef60e.js",
    "revision": "9a3ec6f0dbea04deda4572183719303a"
  },
  {
    "url": "assets/js/12.7b3ecea7.js",
    "revision": "9eb5e3d0106e4cff6c6f3506d7468be6"
  },
  {
    "url": "assets/js/13.7f51e27a.js",
    "revision": "976191ff11dc8a0314589af5ce9935ce"
  },
  {
    "url": "assets/js/14.17ea3d28.js",
    "revision": "4fe94eb4d4816d3b0cd6b032a4387fa4"
  },
  {
    "url": "assets/js/15.03380ab4.js",
    "revision": "1d1a0f33b20641141b1d4b0f245e37b5"
  },
  {
    "url": "assets/js/16.47f5217e.js",
    "revision": "7d1c83121c3b7be8621c64c5ccb7a54c"
  },
  {
    "url": "assets/js/17.5aba6191.js",
    "revision": "3e174d7a9bc2c9dd13bbf0deee60abc1"
  },
  {
    "url": "assets/js/18.b3aaca70.js",
    "revision": "0ea84cc662d8ae496c9bf41cd4338ba0"
  },
  {
    "url": "assets/js/19.de27228f.js",
    "revision": "aa8f4c6bf208afbf8749a889de9116eb"
  },
  {
    "url": "assets/js/2.c0ab635b.js",
    "revision": "905573de6b4d8ac2883d39471572928b"
  },
  {
    "url": "assets/js/20.832ef387.js",
    "revision": "9ba07f9e775f47fe5edc488e0e51df32"
  },
  {
    "url": "assets/js/21.10f83eb1.js",
    "revision": "ba6cca36a7ce9c16402cbb2d12761c27"
  },
  {
    "url": "assets/js/22.fc259ff9.js",
    "revision": "4e5e8f992c76af6442a12632a7a0bcb3"
  },
  {
    "url": "assets/js/23.dd041fbe.js",
    "revision": "e367a462abf1192faf4b6c86b7da6645"
  },
  {
    "url": "assets/js/3.b75057c5.js",
    "revision": "48f9867c3c441a75db55f0b10e83f84f"
  },
  {
    "url": "assets/js/4.25265078.js",
    "revision": "c94407f4f8fa433d22ee03fc5e9d1584"
  },
  {
    "url": "assets/js/5.c6d218cd.js",
    "revision": "4307c871b049b6a1c6f9c0e76df5480d"
  },
  {
    "url": "assets/js/6.63fc4644.js",
    "revision": "2039276decc1a1750a0efce30a0493e6"
  },
  {
    "url": "assets/js/7.247f2789.js",
    "revision": "aeb618cc89a2d5a78b6f1a5cb9fabe43"
  },
  {
    "url": "assets/js/8.f5662459.js",
    "revision": "f32c892d45c7c7d1f6dc08977f0be85c"
  },
  {
    "url": "assets/js/9.7226142b.js",
    "revision": "2ba81c39da9ff9737a6fe27b4a18e08e"
  },
  {
    "url": "assets/js/app.bc8843e1.js",
    "revision": "ad55f40b0bcb314ca081264be4f09a96"
  },
  {
    "url": "Icon-144.png",
    "revision": "618b3cdda6ba40df78b2c460d0da917a"
  },
  {
    "url": "Icon-192.png",
    "revision": "f231283b325120b94919e5b56ac48c9e"
  },
  {
    "url": "Icon-36.png",
    "revision": "00a31f0144fca5a0e04d06abe91690fc"
  },
  {
    "url": "Icon-48.png",
    "revision": "90eb09a59fd9ca67f1e68e9bebbe1119"
  },
  {
    "url": "Icon-512.png",
    "revision": "9f874b7a52e425762e60a55fe4e3eae8"
  },
  {
    "url": "Icon-72.png",
    "revision": "9c657fc9857acac9f11c9139ea50c614"
  },
  {
    "url": "Icon-96.png",
    "revision": "ee4b3b9457bf6d3915686a42935c8c10"
  },
  {
    "url": "index.html",
    "revision": "ae3941ad8be8bd6e45c283c7486253fa"
  },
  {
    "url": "logo.png",
    "revision": "6e726fec1c35e97eaf0ce77d143d1459"
  },
  {
    "url": "zh/guide/bo4/blood_of_the_dead/ix.html",
    "revision": "cfbf268404784029301cbca471ad61e0"
  },
  {
    "url": "zh/guide/bo4/ix/ix.html",
    "revision": "a32e90bc33d0f7c5a13e64d7b7a82839"
  },
  {
    "url": "zh/guide/bo4/voyage_of_despair/voyage_of_despair.html",
    "revision": "fc89f36fae44f097431d27c1ddf52523"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c309ff3de9cde7de1c247caea7ff0058"
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
