<template>
  <div class="p-2">
    <div :class="['card-why-produk', classes]">
      <img
        src="/assets/images/checklist.svg"
        alt=""
      />
      <p>
        Dapatx dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang
        berkali-kali.
      </p>
    </div>
  </div>

  <div class="p-2">
    <div :class="['card-why-produk', classes]">
      <img
        src="/assets/images/checklist.svg"
        alt=""
      />
      <p>
        Dapat dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang
        berkali-kali.
      </p>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from "vue";

export default {
  name: "k-list-group-unit",
  props: {
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "sm",
      Validator: function (value) {
        return ["lg", "sm"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`${props.size ? `${props.size}-unit` : "sm-unit"}`]: true,
      })),
    };
  },
};
</script>
<style></style>
