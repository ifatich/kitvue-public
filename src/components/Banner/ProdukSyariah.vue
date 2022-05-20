<template lang="">
  <div class="produk-syariah">
    <div class="section-jumbotron-produk">
      <div class="section-jumbotron-produk__content container">
        <div class="left-section">
          <img :src="mainImage" alt="" />
          <p>
            {{ mainTitle }}
          </p>
          <a
            href="#gadai-kendaraan-syariah"
            id="gadai-kendaraan-syariah"
            class="btn btn-primary"
            >Lihat lebih banyak <img :src="mainLogo" alt=""
          /></a>
        </div>
        <div class="right-section">
          <img
            src="/assets/images/round-img10.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section-definition-produk bg-primary">
    <div class="section-definition-produk__content container">
      <div class="icon-box">
        <img :src="subLogo" alt="" />
      </div>
      <h4>{{ subTitle }}</h4>
      <p>
        {{ subDescription }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-produk-syariah",
  props: {
    mainLogo: {
      type: String,
      default:
        "/assets/images/ico-down-white.svg",
    },
    mainDescription: {
      type: String,
      default: `Dapatkan pinjaman dengan mudah dan aman dengan gadai kendaraan
            bermotor.`,
    },
    mainImage: {
      type: String,
      default:
        "/assets/images/gadai-kendaraan-syariah.png",
    },
    subTitle: {
      type: String,
      default: "Apa itu Pegadaian Gadai Kendaraan Syariah?",
    },
    subDescription: {
      type: String,
      default: `Pegadaian Gadai Kendaraan Syariah adalah pemberian pinjaman secara
        syariah dengan akad rahn yang diberikan ke seluruh golongan nasabah
        untuk kebutuhan konsumtif maupun produktif dengan jaminan kendaraan baik
        mobil maupun motor dengan menggunakan akad syariah.`,
    },
    subLogo: {
      type: String,
      default:
        "/assets/images/ico-kendaraan.svg",
    },
    items: {
      type: Array,
      default: function () {
        return [
          { imageUrl: "imag", target: "target" },
          { imageUrl: "imag", target: "target" },
          { imageUrl: "imag", target: "target" },
        ];
      },
    },
  },
};
</script>
