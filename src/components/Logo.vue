<template>
  <img :src="image" />
</template>
<script>
export default {
  name: "k-logo",
  props: {
    image: {
      type: String,
      default: "https://dl.dropboxusercontent.com/s/wca0lc73wnzszqp/BUMN.svg",
    },
  },
};
</script>
<style></style>
