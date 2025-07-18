<script setup>
import { defineOptions, defineProps, defineModel } from 'vue'
import { BModal, BButton, BCarousel, BCarouselSlide } from 'bootstrap-vue-next'

defineOptions({ name: 'ModalSlider' })

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    default: () => []
  }
})

const model = defineModel()
</script>

<template>
  <div>
    <BModal :class="[`modal-slider-component`,props.title && 'border-bottom']"
      v-model="model" :title="props.title"
      ok-only
      no-stacking
      hide-footer
      centered>
      <template #modal-header="{ close }">
        <BButton class="btn btn-outline-danger" @click="close()">
          Close Modal
        </BButton>
      </template>

      <BCarousel id="carousel"
        :key="model"
        :interval="0"
        controls
        img-width="532"
        img-height="416">
        <BCarouselSlide v-for="(imgSrc, index) in props.images" :key="index" :img-src="imgSrc"></BCarouselSlide>
      </BCarousel>
    </BModal>
  </div>
</template>

<style lang="scss">
  .modal-slider-component {
    .carousel {
      button {
          &.carousel-control-next {
            left: unset;
            right: 24px;
            bottom: 200px;
            padding: 0.5rem;
            height: 40px;
            background-color: white;
            border-radius: 20rem;
            .carousel-control-next-icon {
              width: 24px;
              height: 24px;
              background-size: cover;
              background-image: url('../../assets/icon/chevron_right.svg');
            }
          }
          &.carousel-control-prev {
            left: 24px;
            bottom: 200px;
            padding: 0.5rem;
            height: 40px;
            background-color: white;
            border-radius: 20rem;
            .carousel-control-prev-icon{
              width: 24px;
              height: 24px;
              background-size: cover;
              background-image: url('../../assets/icon/chevron_left.svg');
            }
          }
        
      }
      .carousel-inner {
        .carousel-item {
          transition: transform 0.4s ease-out; // dari 0.6s ke 0.3s
          padding-inline: 1rem;
          background-color: transparent !important;
          img {
            object-fit: cover;
            border-radius: 0.25rem;
          }
        }
      }
    }

    .modal-body{
      padding-inline: 0;
    }
    
  }

  .modal-slider-component.border-bottom {
    .modal-header{
      border-bottom: 1px solid var(--g-kit-black-20);
    }
  }
</style>
