<template>
  <div class="box-promo btn-box-promo">
    <div class="icon">
      <img
        src="https://dl.dropboxusercontent.com/s/j0g3sis191rz7ag/coupon-ico.svg"
        alt=""
      />
    </div>
    <div class="btn-box-promo__text">
      <h5>{{ code }}</h5>
      <p>{{ label }}</p>
    </div>

    <a class="btn-tertiary delete-promo"
      ><img
        src="https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg"
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
