<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="group-input">
    <label :for="id" class="form-label">
      {{ label }}
    </label>
    <div class="input-group custom-input-group-icon lg">
      <textarea
        :type="type"
        :class="['form-control text-area', classes]"
        :id="id"
        @input="$emit('input', $event.target.value)"
        :disabled="disabled"
        :required="required"
        :error="error"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'

export default {
  name: 'TextArea',
  props: {
    id: {
      default: '150'
    },
    label: {
      type: String
    },
    icon: {
      type: String,
      default: '/assets/images/icon-info.svg'
    },
    placeholder: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        [`${props.error ? 'is-invalid' : ''}`]: true
      }))
    }
  }
}
</script>
<style></style>
