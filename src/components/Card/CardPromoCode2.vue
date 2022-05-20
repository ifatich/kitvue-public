<template>
  <a href="" class="box-promo btn-box-promo">
    <div class="icon">
      <img
        src="/assets/images/coupon-ico.svg"
        alt=""
      />
    </div>
    <div class="btn-box-promo__text">
      <p>{{ label }}</p>
    </div>
  </a>
</template>
<script>
export default {
  name: "k-card-promo-code-2",
  props: {
    label: {
      type: String,
      default: "Gunakan Kode Promo",
    },
    action: Function,
  },
};
</script>
<style></style>
