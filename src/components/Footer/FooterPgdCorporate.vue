<template>
  <div class="footer-pgd">
    <div class="footer-pgd-top">
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

          <h4>{{ menu2.label }}</h4>

          <div class="box-map">
            <ul>
              <li v-for="(item, index) in menu2.items" :key="index">
                <a :href="item.link">{{ item.action }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-box__div-2">
          <div class="box-map-2">
            <h4>PT Pegadaian (Persero) terdaftar dan diawasi oleh</h4>
            <img
              src="/assets/images/ojk.png"
            />
          </div>

          <div class="box-map-2">
            <h4>PT Pegadaian (Persero) telah terverifikasi</h4>
            <img
              src="/assets/images/logo_safegard.png"
            />
          </div>
        </div>

        <div class="footer-box__div-3">
          <h4>Kantor Pusat Pegadaian</h4>
          <div class="box-map-3">
            <div class="location">
              <img
                class="location__icon"
                src="/assets/images/pinpoint.svg"
                alt=""
              />
              <span class="location__text">
                Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia
              </span>
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
                <span>021 8063 5162</span>
              </div>
            </div>
            <img
              class="call-center"
              src="/assets/images/call-center.svg"
              alt=""
            />
          </div>

          <div class="social-media">
            <h4>Ikuti Media Sosial Kami</h4>
            <div class="box-map-3">
              <div class="outer-box-sosmed">
                <a
                  href="https://www.facebook.com/PegadaianPersero"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    :src="socialMedia.facebook"
                    class="box-sosmed__icon"
                    alt=""
                  />
                </a>
                <a
                  href="https://twitter.com/Pegadaian"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    :src="socialMedia.twitter"
                    class="box-sosmed__icon"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/pegadaian_id/"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    :src="socialMedia.instagram"
                    class="box-sosmed__icon"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_acigZTCXTQuXL-3hqm6Gg"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    :src="socialMedia.youtube"
                    class="box-sosmed__icon"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-pgd-bottom">
      <div class="copyright">
        Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-footer-pgd-corporate",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Produk dan Layanan" },
            { link: "./artikel.html", action: "Hubungan Investor" },
            { link: "./acara.html", action: "Profil Korporasi" },
            { link: "./simulasi-emas.html", action: "Berita" },
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
            { link: "/faq", action: "FAQ" },
            { link: "/kebijakan-privasi", action: "Kebijakan Privasi" },
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
