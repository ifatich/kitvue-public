<template>
  <div class="p-5">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="pgd-carousel-triple"
    >
      <a :href="item.action" class="pgd-carousel-triple__item">
        <div class="box-top">
          <div class="img-overlay">
            <img :src="item.image" alt="" />
          </div>
          <div class="content-item">
            <div class="content-item__tag bg-primary">{{ item.label }}</div>
            <h2 class="content-item__title">
              {{ item.title }}
            </h2>
            <div class="content-item__date">
              <img
                src="/assets/images/clock.svg"
                alt=""
              />
              <span>{{ item.periodeLabel }}</span>
            </div>
          </div>
        </div>
        <div class="bottom-nav-background"></div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-highlight-carousel",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            image:
              "/assets/images/banner-artikel1.png",
            label: "Inspirasi",
            periodeLabel: "16 December 2020",
            title: "Cara Jualan Online Selama Bulan Ramadan",
            description: `1. Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
              Emas.
              2 .Diskon sebesar 40%, maksimal Rp20.000.
              3. Minimal transaksi Rp50.000,-.`,
            action: function () {
              return "/";
            },
          },
          {
            image:
              "/assets/images/image-banner3.png",
            label: "Label",
            periodeLabel: "16 December 2020",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
          },
          {
            image:
              "/assets/images/image-banner2.png",
            label: "Label",
            periodeLabel: "16 December 2020",
            title: "Cara Jualan Online Selama Jelang Ramadan",
            description: "Des",
            action: function () {
              return "/";
            },
          },
        ];
      },
    },
  },
};
</script>
