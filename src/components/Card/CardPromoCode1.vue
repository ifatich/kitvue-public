<template>
  <div class="pgd-carousel-get-promo__item">
    <div class="content-top">
      <h5>{{ label }}</h5>
      <p>{{ code }}</p>
    </div>
    <div class="content-bottom">
      <p>Gunakan</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-card-promo-code-1",
  props: {
    label: {
      type: String,
      default: "Diskon buka tabungan emas Rp 30.000 untuk pengguna pertama.",
    },
    code: {
      type: String,
      default: "MULAIMENABUNG",
    },
    action: Function,
  },
};
</script>
<style></style>
