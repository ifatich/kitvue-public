<script>
export default {
  name: "k-homepage-pegadaian-corporate",
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
  <div class="carousel-hero">
    <div class="swiper swiper-container carousel-hero-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div class="carousel-hero-tile">
            <div class="carousel-hero-tile__banner-background">
              <img :src="item" alt="thumbnail" />
            </div>
            <div class="carousel-hero-tile__banner">
              <img :src="item" alt="thumbnail" />
            </div>
          </div>
        </div>
      </div>
      <span
        class="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>

    <div class="carousel-navigator">
      <button class="btn-circle btn-circle-prev">
        <img
          src="/assets/images/chevron-left.svg"
          alt="go to previous slide"
        />
      </button>
      <button class="btn-circle btn-circle-next">
        <img
          src="/assets/images/chevron-right.svg"
          alt="go to next slide"
        />
      </button>
    </div>
    <div class="carousel-indicators"></div>
  </div>
</template>
<style lang=""></style>
