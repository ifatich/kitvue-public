<template>
  <div class="card-voucher">
    <div class="card-voucher__top">
      <img :src="image" alt="" />
    </div>
    <div class="card-voucher__bottom">
      <a :href="target">{{ title }}</a>
      <div class="voucher-period">
        <div class="voucher-period__desc">
          <img
            src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
            alt=""
          />
          <span>{{ subtitle }}</span>
        </div>
        <a :href="linkText">
          <h5>Gunakan</h5>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-card-voucher",
  props: {
    image: {
      type: String,
      default:
        "https://dl.dropboxusercontent.com/s/fr18rgd6lhrrqrf/voucher-active.png",
    },
    title: {
      type: String,
      default: "Diskon Beli Emas hingga Rp 300.000",
    },
    subtitle: {
      type: String,
      default: "Berlaku hingga 31 Okt 2020",
    },
    target: {
      type: String,
      default: "./promo-detail.html",
    },
    linkText: {
      type: String,
      default: "",
    },
  },
};
</script>
<style></style>
