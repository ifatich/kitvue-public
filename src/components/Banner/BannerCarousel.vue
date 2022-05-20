<template>
  <div class="p-5">
    <div class="pgd-carousel-promo">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="pgd-carousel-promo__item"
      >
        <div class="promo-left">
          <img
            src="/assets/images/img-promo.png"
            alt=""
          />
        </div>
        <div class="promo-right">
          <div class="promo-right__top">
            <div class="pgd-status">{{ item.statusLabel }}i</div>
            <div class="pr-top-date">{{ item.periodeLabel }}</div>
          </div>
          <div class="promo-right__content">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.description }}
            </p>
            <a :href="item.action" class="btn-tertiary">Baca Selengkapnya</a>
          </div>
          <div class="promo-right__code">
            <div class="pr-code-top">
              <img
                src="/assets/images/coupon.png"
                alt=""
              />
              <h5>Kode Promo</h5>
            </div>
            <div class="pr-code-bottom">
              <h2 :id="item.promoCode + index">{{ item.promoCode }}</h2>
              <button
                class="btn-tertiary copyPromo1"
                onclick="copyPromo('#code2');showToast('2')"
              >
                Salin
              </button>
              <div :id="index" class="toast-promo bg-primary">
                <span>Kode Promo berhasil disalin</span>
                <button class="btn-tertiary" onclick="$('#3').hide()">
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-nav-background"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-banner-carousel",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            image:
              "/assets/images/image-banner2.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: `1. Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
              Emas.
              2 .Diskon sebesar 40%, maksimal Rp20.000.
              3. Minimal transaksi Rp50.000,-.`,
            action: function () {
              return "/";
            },
            promoCode: "Promi",
          },
          {
            image:
              "/assets/images/image-banner3.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promix",
          },
          {
            image:
              "/assets/images/image-banner2.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promiy",
          },
          {
            image:
              "/assets/images/image-banner1.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promip",
          },
        ];
      },
    },
  },
};
</script>
