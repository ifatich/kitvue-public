<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide h-50"
    data-bs-ride="carousel"
  >
    <div v-if="indicators" class="carousel-indicators">
      <button
        v-for="(item, index) in data"
        :key="index"
        type="button"
        :data-bs-target="['#carouselExampleCaptions']"
        :data-bs-slide-to="`${index}`"
        :class="{ 'active': index === itemActive }"
        :aria-current="{ 'active': index === itemActive }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="{ 'carousel-item': true, 'active': index === itemActive }"
      >
        <img :src="item.image" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <button
      v-if="controls"
      class="carousel-control-prev"
      type="button"
      :data-bs-target="['#carouselExampleCaptions']"
      :data-bs-slide="['prev']"
      @click="setActive(itemActive - 1)"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      v-if="controls"
      class="carousel-control-next"
      type="button"
      :data-bs-target="['#carouselExampleCaptions']"
      :data-bs-slide="['next']"
      @click="setActive(itemActive + 1)"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "k-carousel",
  props: {
    active: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
    },
    indicators: {
      type: Boolean,
    },
  },
  created() {
    this.itemActive = this.active;
  },
  data() {
    return {
      itemActive: 0,
    };
  },
  methods: {
    setActive(index) {
      let active = index;

      if (index === this.data.length) active = 0;
      else if (index === -1) active = this.data.length - 1;

      this.itemActive = active;
    },
  },
};
</script>

<style scoped>
.carousel .carousel-item {
  height: 300px;
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 300px;
}
</style>