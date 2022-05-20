<template>
  <a :href="action" class="btn btn-tertiary"
    >{{ text }}
    <img
      src="/assets/images/icon-chevron-right-green.svg"
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
        "/assets/images/icon-chevron-right-green.svg",
    },
  },
};
</script>
<style></style>
