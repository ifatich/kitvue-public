<template>
  <footer>
    <div class="footer-top container">
      <div class="footer-box">
        <div class="footer-box__div">
          <h4>{{ menu1.label }}</h4>

          <div class="box-map">
            <ul>
              <li v-for="(item, index) in menu1.items" :key="index">
                <a :href="item.link">{{ item.action }}</a>
              </li>
            </ul>
          </div>
          <!-- <h4>Tautan Cepat</h4>
          <div class="box-map">
            <ul>
              <li><a href="#tentangpgd">Tentang Pegadaian Digital</a></li>
              <li><a href="#promo">Promo</a></li>
              <li><a href="#pusatbantuan">Pusat Bantuan</a></li>
              <li><a href="#syaratdanketentuan">Syarat & Ketentuan</a></li>
              <li><a href="#hubungikami">Hubungi Kami</a></li>
            </ul>
          </div> -->
        </div>
        <div class="footer-box__div">
          <h4>Download Pegadaian Digital</h4>

          <div class="box-download-app">
            <a
              href="https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en&gl=US"
            >
              <img
                src="/assets/images/google-play-badge.png"
                alt=""
            /></a>
            <a
              href="https://apps.apple.com/us/app/pegadaian-digital/id1350501409"
            >
              <img
                src="/assets/images/badge-app.png"
                alt=""
            /></a>
          </div>

          <span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br />

          <img
            src="/assets/images/ojk.png"
            alt=""
            class="ojk"
          />
        </div>
        <div class="footer-box__div-3">
          <h4>Kantor Pusat Pegadaian</h4>
          <div class="box-map-2">
            <div class="location">
              <img
                class="location__icon"
                src="/assets/images/pinpoint.svg"
              />
              <span class="location__text"
                >Jl. Kramat Raya 162 Jakarta Pusat 10430<br />
                Indonesia</span
              >
            </div>

            <div class="contact">
              <div class="contact__phone">
                <img
                  src="/assets/images/phone.svg"
                  alt=""
                />
                <span>021 3155 550 </span>
              </div>
              <div class="contact__box">
                <img
                  src="/assets/images/box-mail.svg"
                  alt=""
                />
                <span>021 8063 5162 </span>
              </div>
            </div>

            <img
              src="/assets/images/call-center.svg"
              class="call-center"
              alt=""
            />
          </div>

          <div class="social-media-desktop">
            <h4>Ikuti Media Sosial Kami</h4>
            <div class="box-map-2">
              <div class="outer-box-socmed">
                <a href="https://facebook.com/shbtpegadaian" class="box-socmed">
                  <img
                    :src="socialMedia.facebook"
                    alt=""
                    class="box-socmed__icon"
                  />
                </a>
                <a href="https://twitter.com/shbt_pegadaian" class="box-socmed">
                  <img
                    :src="socialMedia.twitter"
                    alt=""
                    class="box-socmed__icon"
                  />
                </a>
                <a
                  href="https://instagram.com/sahabatpegadaian"
                  class="box-socmed"
                >
                  <img
                    :src="socialMedia.instagram"
                    alt=""
                    class="box-socmed__icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/c/PTPegadaianPersero_official"
                  class="box-socmed"
                >
                  <img
                    :src="socialMedia.youtube"
                    alt=""
                    class="box-socmed__icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "k-footer-pds-onboarding",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Gadaiy" },
            { link: "./artikel.html", action: "Pembiayaan" },
            { link: "./acara.html", action: "Pembayaran dan Top Up" },
            { link: "./simulasi-emas.html", action: "Cicil Emas" },
            { link: "./ebook.html", action: "Cabang Pegadaian" },
          ],
        };
      },
    },
    menu2: {
      type: Object,
      default: function () {
        return {
          label: "Bantuan",
          items: [
            { link: "./syarat-ketentuan.html", action: "Syarat dan Ketentuan" },
            { link: "./hubungi-kami.html", action: "Hubungi Kami" },
          ],
        };
      },
    },
    socialMedia: {
      type: Object,
      default: function () {
        return {
          facebook:
            "/assets/images/facebook.svg",
          twitter:
            "/assets/images/twitter.svg",
          instagram:
            "/assets/images/instagram.svg",
          youtube:
            "/assets/images/youtube.svg",
        };
      },
    },
  },
};
</script>
<style></style>
