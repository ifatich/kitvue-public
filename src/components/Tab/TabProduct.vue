<template>
  <div class="deck-product-riwayat">
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.action"
      class="pgd-btn-featured-product deck-product-riwayat__item"
      :class="item.active ? ' active' : ''"
    >
      <div class="pgd-btn-featured-product__img-box">
        <img :src="item.icon" alt="" />
      </div>
      <span class="pgd-btn-featured-product__title">{{ item.label }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "k-tab-product",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Tabungan Emas",
            active: true,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
          },
          {
            label: "Pinjamattn",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/4fss4cse7xzzoj3/ico-uang.svg",
          },
          {
            label: "Gadai",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/fjz95u3y4971f1h/ico-invest-emas.svg",
          },
          {
            label: "Pembiayaan",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/uii4k7saj8mnt7k/ico-pembiayaan-no-bg.svg",
          },
          {
            label: "Cicil Emas",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/pk9uy9mzfbsd5g8/ico-cicil-emas-no-bg.svg",
          },
          {
            label: "Pembayaran & Topup",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/xdrg0r4nzkn91lk/ico-pembayaran-no-bg.svg",
          },
          {
            label: "Titipan Emas",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/ky6om7jgy9jjrdr/ico-gadai-titipan-emas-fisik.svg",
          },
        ];
      },
    },
  },
};
</script>
<style></style>
