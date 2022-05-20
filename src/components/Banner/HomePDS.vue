<script>
export default {
  name: "k-homepage-pds",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        "/assets/images/banner-1.png",
        "/assets/images/banner-1.png",
      ],
    },
  },
};
</script>
<template lang="">
  <section class="hero-carousel container">
    <a
      href=""
      class="hero-carousel__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <img :src="item" alt="" />
    </a>
  </section>
</template>
