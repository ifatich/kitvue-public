<template>
  <section class="section-bg-top">
    <div class="section-bg-top__back container">
      <a @onclick="action">
        <img
          src="/assets/images/arrow-left-white.svg"
          alt=""
        />
      </a>
      <h4>{{ label }}</h4>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-nav-beli-tabungan-emas",
  props: {
    label: {
      type: String,
      default: "Beli Tabungan Emas",
    },
    action: {
      type: Function,
      default: function () {
        window.history.go(-1);
      },
    },
  },
};
</script>
