<template>
  <img :src="image" />
</template>
<script>
export default {
  name: "k-logo",
  props: {
    image: {
      type: String,
      default: "/assets/images/BUMN.svg",
    },
  },
};
</script>
<style></style>
