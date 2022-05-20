<template>
  <div class="box-promo btn-box-promo">
    <div class="icon">
      <img
        src="/assets/images/coupon-ico.svg"
        alt=""
      />
    </div>
    <div class="btn-box-promo__text">
      <h5>{{ code }}</h5>
      <p>{{ label }}</p>
    </div>

    <a class="btn-tertiary delete-promo"
      ><img
        src="/assets/images/close.svg"
        alt=""
    /></a>
  </div>
</template>
<script>
export default {
  name: "k-card-promo-code-3",
  props: {
    code: {
      type: String,
      default: "MULAINABUNG",
    },
    label: {
      type: String,
      default: "Gunakan Kode Promo",
    },
    action: Function,
  },
};
</script>
<style></style>
