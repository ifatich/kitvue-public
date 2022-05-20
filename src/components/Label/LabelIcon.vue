<template>
  <div :class="[classes]"><img :src="icon" alt="" />{{ text }}</div>
  <!-- <div class="pgd-status-blue">
    <img
      src="https://dl.dropboxusercontent.com/s/8dx7mmeozqodu20/icon-crown.svg"
      alt=""
    />Status
  </div> -->
</template>
<script>
import { computed, reactive } from "vue";

export default {
  name: "k-label-icon",
  props: {
    text: {
      type: String,
      default: "Status",
    },
    variant: {
      type: String,
      default: "",
      Validator: function (value) {
        return ["blue", "red", "yellow"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-crown-green.svg",
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`${
          props.variant ? `pgd-status-${props.variant}` : "pgd-status"
        }`]: true,
      })),
    };
  },
};
</script>
<style></style>
