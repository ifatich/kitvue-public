<script setup>
import { defineOptions } from 'vue'
import InputText from './InputText.vue'

defineOptions({
  name: 'InputRupiah'
})
</script>

<template>
  <InputText type="number">
    <template #prefix>
      <span class="input-group-text border-0">Rupiah</span>
    </template>
  </InputText>
</template>
