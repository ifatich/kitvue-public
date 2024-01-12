<template>
    <div class="group-input">
        <label for="" class="form-label">
            {{ title }}
            <img :src="require('../../assets/images/icon-info.svg')" />
        </label>
        <div class="input-group custom-input-group-icon lg">
            <div class="input-group-icon">
                <img :src="require('../../assets/images/world.svg')" />
            </div>
            <textarea :type="type" :class="['form-control', classes]" :id="name"
                @input="$emit('input', $event.target.value)" :disabled="disabled" :required="required"
                :error="error" :placeholder="placeholder" />
        </div>
    </div>
</template>
<script>
import { computed, reactive } from "vue";

export default {
  props: {
    title: {
        type: String,
        default: "Title",
    },
    icon: {
        type: String,
        default: "/assets/images/icon-info.svg",
    },
    placeholder: {
        type: String,
        default: "placeholder Textarea . . .",
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