<script setup>
import { defineOptions, defineModel, defineProps } from 'vue'

defineOptions({ name: 'InputTextArea', inheritAttrs: false })

const props = defineProps(['error', 'label', 'suffixIcon', 'class'])

const model = defineModel()
</script>

<template>
  <div :class="['group-input', props.class]">
    <label v-if="label" :for="$attrs.id" class="form-label">
      {{ props.label }}
    </label>
    <div class="input-group custom-input-group-icon lg">
      <textarea class="form-control text-area" v-model="model" />
    </div>
    <div v-if="props.error" class="error-text mt-1">{{ error }}</div>
  </div>
</template>
