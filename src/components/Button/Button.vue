<template>
  <button class="btn" :class="[`btn-${type}`, `btn-${size}`]">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: "k-button",
  props: {
    label: String,
    type: {
      validator(value) {
        return [
          "primary",
          "outline-primary",
          "link",
          "tertiary",
          "secondary",
        ].includes(value);
      },
    },
    size: {
      validator(value) {
        return ["sm", "md", "lg", "xl"].includes(value);
      },
    },
  },
};
</script>
<style></style>
