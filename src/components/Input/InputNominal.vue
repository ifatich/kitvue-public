<template>
  <div class="p-5">
    <div class="group-input">
      <div class="input-group custom-input-group mb-2">
        <span class="input-group-text" id="basic-addon1">Rupiah</span>
        <input
          type="tel"
          :class="['form-control prevent-zero rupiah', classes]"
          placeholder="Text Input"
          aria-label="Masukkanrupiah"
          aria-describedby="basic-addon1"
          v-model="currentValue"
          @input="handleInput"
        />
      </div>
    </div>

    <div class="group-input">
      <div class="input-group custom-input-group mb-2">
        <input
          type="tel"
          class="form-control prevent-zero rupiah"
          placeholder="Text Input"
          aria-label="Masukkanrupiah"
          aria-describedby="basic-addon2"
          onkeyup="this.value = verifyFormatRp3(this.value, 'Rp. ')"
        />
        <span class="input-group-text right" id="basic-addon2">%</span>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from "vue";

export default {
  name: "k-input",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-info.svg",
    },
    placeholder: {
      type: String,
      default: "placeholder . . .",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    currentValue: "",
  }),
  watch: {
    value: {
      handler(after) {
        this.currentValue = this.format(after);
      },
      immediate: true,
    },
  },
  methods: {
    format: (value) =>
      (value + "").replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."),

    handleInput() {
      this.currentValue = this.format(this.currentValue);
      this.$emit("input", (this.currentValue + "").replace(/[^0-9]/g, ""));
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`${props.error ? "is-invalid" : ""}`]: true,
      })),
    };
  },
  
};
</script>
<style></style>
