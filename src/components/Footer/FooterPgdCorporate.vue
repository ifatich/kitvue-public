<template>
  <div class="footer-pgd">
    <div class="footer-pgd-top">
      <div class="footer-box">
        <div class="footer-box__div">
          <h4>Tautan Cepat</h4>
          <div class="box-map">
            <ul>
              <li>
                <a href="">Produk dan Layanan</a>
              </li>
              <li>
                <a href="">Hubungan Investor</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Profil Korporasi</a>
              </li>
              <li>
                <Link to="/berita">Berita</Link>
              </li>
            </ul>
          </div>

          <h4>Bantuan</h4>
          <div class="box-map">
            <ul>
              <li>
                <Link to="/syarat-dan-ketentuan">Syarat dan Ketentuan</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-box__div-2">
          <div class="box-map-2">
            <h4>PT Pegadaian (Persero) terdaftar dan diawasi oleh</h4>
            <img
              src="https://dl.dropboxusercontent.com/s/u0hdhxyv9hcmar3/ojk.png"
            />
          </div>

          <div class="box-map-2">
            <h4>PT Pegadaian (Persero) telah terverifikasi</h4>
            <img
              src="https://dl.dropboxusercontent.com/s/x9bkfnvtuyoniqp/logo_safegard.png"
            />
          </div>
        </div>

        <div class="footer-box__div-3">
          <h4>Kantor Pusat Pegadaian</h4>
          <div class="box-map-3">
            <div class="location">
              <img
                class="location__icon"
                src="https://dl.dropboxusercontent.com/s/6zfu1my4mi6zsbp/pinpoint.svg"
                alt=""
              />
              <span class="location__text">
                Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia
              </span>
            </div>
            <div class="contact">
              <div class="contact__phone">
                <img
                  src="https://dl.dropboxusercontent.com/s/zha8knznkbyigrh/phone.svg"
                  alt=""
                />
                <span>021 3155 550 </span>
              </div>
              <div class="contact__box">
                <img
                  src="https://dl.dropboxusercontent.com/s/rh0hy2qyn0hwfjh/box-mail.svg"
                  alt=""
                />
                <span>021 8063 5162</span>
              </div>
            </div>
            <img
              class="call-center"
              src="https://dl.dropboxusercontent.com/s/h6guv72qux35urd/call-center.svg"
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
                    class="box-sosmed__icon"
                    src="https://dl.dropboxusercontent.com/s/td9ju6ilnuz9w4h/facebook.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://twitter.com/Pegadaian"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    class="box-sosmed__icon"
                    src="https://dl.dropboxusercontent.com/s/l12f586kdmxxch8/twitter.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/pegadaian_id/"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    class="box-sosmed__icon"
                    src="https://dl.dropboxusercontent.com/s/nxamq3dx5osmmib/instagram.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_acigZTCXTQuXL-3hqm6Gg"
                  class="box-sosmed"
                  target="blank"
                >
                  <img
                    class="box-sosmed__icon"
                    src="https://dl.dropboxusercontent.com/s/945mjb6z4ipeahj/youtube.svg"
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
  props: {},
};
</script>
<style></style>
