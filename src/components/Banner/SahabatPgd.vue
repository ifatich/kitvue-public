<script>
export default {
  name: "k-homepage-sahabat-pegadaian-banner",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          imageUrl:
            "/assets/images/banner.png",
          tag: "Inspirasi",
          title: "Ide Hadiah untuk Ibu Tersayang",
          desc: `“Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah”
          Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih
          sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski
          kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...`,
        },
        {
          imageUrl:
            "/assets/images/banner.png",
          tag: "Inspirasi",
          title: "Ide Hadiah untuk Ibu Tersayang",
          desc: `“Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah”
          Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih
          sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski
          kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...`,
        },
      ],
    },
  },
};
</script>
<template lang="">
  <section class="pgd-hero-carousel">
    <a
      href=""
      class="pgd-hero-carousel__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="img-overlay">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="content-item">
        <div class="content-item__tag bg-primary">{{ item.tag }}</div>
        <h2 class="content-item__title">{{ item.title }}</h2>
        <p class="content-item__desc">
          {{ item.desc }}
        </p>
      </div>
    </a>
  </section>
</template>
