<template>
  <div class="p-5">
    <div class="group-input">
      <label :for="title" class="group-input__label"
        >{{ title }} <img :src="icon" alt=""
      /></label>
      <div class="input-group custom-input-group-icon">
        <div class="input-group-icon">
          <img
            src="/assets/images/icon-avatar.svg"
            alt=""
          />
        </div>
        <input
          :type="type"
          :class="['form-control', classes]"
          :id="name"
          @input="$emit('input', $event.target.value)"
          :disabled="disabled"
          :required="required"
          :error="error"
          :placeholder="placeholder"
        />
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
      type: String,
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
