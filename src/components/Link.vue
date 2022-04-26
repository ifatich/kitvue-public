<template>
  <a :href="action" class="btn btn-tertiary"
    >{{ text }}
    <img
      src="https://dl.dropboxusercontent.com/s/ft5eipwmtxysb0n/icon-chevron-right-green.svg"
      alt=""
  /></a>
</template>
<script>
export default {
  name: "k-link",
  props: {
    text: {
      type: String,
      default: "Simulasi Gadai",
    },
    action: {
      type: [String, Function],
      default:
        "https://dl.dropboxusercontent.com/s/ft5eipwmtxysb0n/icon-chevron-right-green.svg",
    },
  },
};
</script>
<style></style>
