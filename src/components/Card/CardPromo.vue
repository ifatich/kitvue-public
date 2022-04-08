<template>
  <div class="card-promo">
    <div class="card-promo__top">
      <img
        src="https://dl.dropboxusercontent.com/s/vi6mqix3kmzs6n8/img-promo.png"
        alt=""
      />
    </div>
    <div class="card-promo__bottom">
      <div class="promo-title-box">
        <div class="slug-box">
          <div class="pgd-status">108 Hari lagi</div>
          <div class="slug-box__date">01 April – 31 Juli 2021</div>
        </div>
        <h4>Diskon 40% Buka Tabungan Emas di Pegadaian</h4>
      </div>
      <div class="promo-code-box">
        <div class="promo-code-box__top">
          <img
            src="https://dl.dropboxusercontent.com/s/9zbkljajtry1tzs/coupon.png"
            alt=""
          />
          <h5>Kode Promo</h5>
        </div>
        <div class="promo-code-box__bottom">
          <h2 id="code1">RENCANAEMAS</h2>
          <button
            class="btn-tertiary copyPromo1"
            onclick="copyPromo('#code1');showToast('1'); "
          >
            Salin
          </button>
          <div id="1" class="toast-promo bg-primary">
            <span>Kode Promo berhasil disalin</span>
            <button class="btn-tertiary" onclick="$('#1').hide()">
              <img
                src="https://dl.dropboxusercontent.com/s/9adobynb1elkelw/close-white.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="promo-guide">
        <ol>
          <li>
            Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas.
          </li>
          <li>Diskon sebesar 40%, maksimal Rp20.000.</li>
          <li>Minimal transaksi Rp50.000,-</li>
          <li>
            Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian
            Digital, dan aplikasi Pegadaian Syariah Digital.
          </li>
          <li>Masa aktif kode promo berakhir pada 30 April 2021.</li>
        </ol>

        <div class="more-guide" id="guide1">
          <span
            >Cara menggunakan Promo RENCANAEMAS di aplikasi Pegadaian
            Digital:</span
          >
          <ol>
            <li>
              Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
              Emas.
            </li>
            <li>Diskon sebesar 40%, maksimal Rp20.000.</li>
            <li>Minimal transaksi Rp50.000,-</li>
            <li>
              Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi
              Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital.
            </li>
            <li>Masa aktif kode promo berakhir pada 30 April 2021.</li>
          </ol>
        </div>
      </div>
      <button id="btn-open1" class="btn-tertiary" onclick="openGuide('1')">
        Baca Selengkapnya
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-card-promo",
  props: {},
};
</script>
<style></style>
