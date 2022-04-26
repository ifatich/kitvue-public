<template>
  <label class="custom-control custom-switch">
    <input
      :disabled="disabled"
      :checked="checked"
      type="checkbox"
      class="custom-switch-control-input"
    />
    <span class="custom-switch-control-indicator"></span>
    {{ label }}
  </label>
</template>
<script>
export default {
  name: "k-switch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style></style>
