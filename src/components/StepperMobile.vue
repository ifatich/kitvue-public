<template>
  <div class="p-5">
    <div class="stepper-ol-mobile-version">
      <p>Langkah {{ currentStep }} dari {{ lastStep }}</p>
      <h5>{{ label }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-stepper-mobile",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
    lastStep: {
      type: Number,
      default: 4,
    },
    label: {
      type: String,
      default: "Detail Jaminan",
    },
  },
};
</script>
