<script setup>
import { defineOptions, defineEmits, defineProps, computed } from 'vue'

defineOptions({ name: 'InputTextArea', inheritAttrs: false })

const props = defineProps(['error', 'label', 'class', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get() {
    return toUppercaseString(props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', toUppercaseString(newValue))
  }
})

function toUppercaseString(val) {
  if (val) return val.toUpperCase()
}

</script>

<template>
  <div :class="['group-input', props.class]">
    <label v-if="label" :for="$attrs.id" class="form-label">
      {{ props.label }}
    </label>
    <div class="input-group custom-input-group-icon lg">
      <textarea
        v-bind="$attrs"
        class="form-control text-area"
        v-model="inputValue"
      />
    </div>
    <div v-if="props.error" class="error-text mt-1">{{ error }}</div>
  </div>
</template>
