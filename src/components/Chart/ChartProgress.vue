<template>
  <div class="progress">
    <div
      class="progress-bar"
      :style="`width: ${value}%`"
      role="progressbar"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>
<script>
export default {
  name: "k-chart-progress",
  props: {
    value: {
      type: Number,
      default: function () {
        return 20;
      },
    },
  },
};
</script>
<style></style>
