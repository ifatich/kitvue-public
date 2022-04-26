<template lang="">
  <div>
    <div class="pb-3">
      <div :class="`pgd-alert-${color}`">
        {{ label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-alert",
  props: {
    label: String,
    color: {
      validator(value) {
        return ["green", "light-blue", "red", "yellow"].includes(value);
      },
    },
  },
};
</script>
<style lang=""></style>
