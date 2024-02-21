<script setup>
import { defineOptions, defineProps, defineEmits, computed } from 'vue'

defineOptions({ name: 'InputText', inheritAttrs: false })

const props = defineProps(['error', 'label', 'suffixIcon', 'class', 'modelValue', 'type'])
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
      {{ label }}
    </label>
    <div class="input-group custom-input-group-icon p-0">
      <slot name="prefix" />
      <input type="text" v-model="inputValue" class="form-control" v-bind="$attrs" />
      <div v-if="suffixIcon" class="input-group-icon mx-2">
        <img :src="suffixIcon" />
      </div>
      <slot name="suffix" />
    </div>
    <div v-if="props.error" class="error-text mt-1">{{ error }}</div>
  </div>
</template>
