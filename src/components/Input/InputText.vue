<script setup>
import { defineOptions, defineProps, defineEmits, computed } from 'vue'

defineOptions({ name: 'InputText', inheritAttrs: false })

const props = defineProps([
  'error',
  'label',
  'suffixIcon',
  'class',
  'modelValue',
  'type'
])
const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get() {
    return toUppercaseString(props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', toUppercaseString(newValue))
  }
})

const handleInput = (e) => {
  if (props.type === 'number') {
    const key = e.key || String.fromCharCode(e.keyCode || e.which)
    const isNumericInput =
      (key >= '0' && key <= '9') ||
      (key >= 'NumPad0' && key <= 'NumPad9') ||
      key === 'Delete' ||
      key === 'Backspace' ||
      key === 'Tab' ||
      key === '.'

    if (!isNumericInput) {
      e.preventDefault()
    }
  }
}

function toUppercaseString(val) {
  if (val) return val.toUpperCase()
}
</script>

<template>
  <div :class="['group-input', props.class]">
    <label v-if="label" :for="$attrs.id" class="form-label">
      {{ label }}
    </label>
    <div class="input-group custom-input-group-icon p-0">
      <slot name="prefix" />
      <input
        @keydown="handleInput"
        v-model="inputValue"
        class="form-control"
        v-bind="$attrs"
      />
      <div v-if="suffixIcon" class="input-group-icon mx-2">
        <img :src="suffixIcon" />
      </div>
      <slot name="suffix" />
    </div>
    <div v-if="props.error" class="error-text mt-1">{{ error }}</div>
  </div>
</template>
