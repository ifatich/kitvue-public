<template lang="">
  <div>
    <div class="pb-3">
      <div :class="`pgd-alert-copy-${color}`">
        <span>{{ label }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-alert-basic",
  props: {
    label: String,
    color: {
      validator(value) {
        return ["primary", "blue", "red", "yellow"].includes(value);
      },
    },
  },
};
</script>
<style lang=""></style>
