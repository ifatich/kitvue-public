<script setup>
import { defineOptions, defineModel, defineProps } from 'vue'

defineOptions({ name: 'InputText', inheritAttrs: false })

const props = defineProps(['error', 'label', 'suffixIcon', 'class'])

const model = defineModel()
</script>

<template>
  <div :class="['group-input', props.class]">
    <label v-if="label" :for="$attrs.id" class="form-label">
      {{ label }}
    </label>
    <div class="input-group custom-input-group-icon p-0">
      <slot name="prefix" />
      <input type="text" v-model="model" class="form-control" v-bind="$attrs" />
      <div v-if="suffixIcon" class="input-group-icon mx-2">
        <img :src="suffixIcon" />
      </div>
      <slot name="suffix" />
    </div>
    <div v-if="props.error" class="error-text mt-1">{{ error }}</div>
  </div>
</template>
