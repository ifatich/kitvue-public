<template lang="">
  <div class="produk-konvensional">
    <div class="section-jumbotron-produk">
      <div class="section-jumbotron-produk__content container">
        <div class="left-section">
          <img :src="mainImage" alt="" />
          <p>
            {{ mainDescription }}
          </p>
          <a
            href="#gadai-kendaraan"
            id="gadai-kendaraan"
            class="btn btn-primary"
            >Lihat lebih banyak <img :src="mainLogo" alt=""
          /></a>
        </div>
        <div class="right-section">
          <img
            src="/assets/images/round-img5.png"
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
      <h4>{{ subtitle }}</h4>
      <p>{{ subDescription }}}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-produk-konvensional",
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
        "/assets/images/gadai-kendaraan.png",
    },
    subTitle: {
      type: String,
      default: "Apa itu Pegadaian Gadai Kendaraan?",
    },
    subDescription: {
      type: String,
      default: `Pegadaian Gadai Kendaraan adalah kredit dengan sistem gadai untuk
        kebutuhan konsumtif maupun produktif dengan barang jaminan berupa
        kendaraan bermotor baik kendaraan roda dua maupun roda empat.`,
    },
    subLogo: {
      type: String,
      default:
        "/assets/images/ico-kendaraan.svg",
    },
  },
};
</script>
