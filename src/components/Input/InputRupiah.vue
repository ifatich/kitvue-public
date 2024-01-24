<script setup>
import { defineOptions, defineProps, defineEmits, computed } from 'vue'
import InputText from './InputText.vue'

defineOptions({
  name: 'InputRupiah'
})

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const rupiahValue = computed({
  get() {
    return formatDecimal(props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', unformatDecimal(newValue))
  }
})

const formatDecimal = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0
  })
  return formatter.format(value)
}

const unformatDecimal = (value) => {
  let unformatted = ''
  if (value) {
    const number = Number(value.replace(/[^0-9.-]/g, ''))
    if (!isNaN(number)) {
      unformatted = String(number)
    }
  }
  return unformatted
}

const onlyNumber = (event) => {
  const keyCode = event.keyCode ? event.keyCode : event.which
  if (
    !(
      (keyCode >= 48 && keyCode <= 57) || // Numbers
      (keyCode >= 96 && keyCode <= 105) || // Numpad
      keyCode === 46 || // Delete
      keyCode === 8 || // Backspace
      keyCode === 9 || // Tab
      keyCode === 190 || // Period
      keyCode === 110 || // Numpad Period
      keyCode === 189 ||
      keyCode === 109
    )
  ) {
    event.preventDefault()
  }
}
</script>

<template>
  <InputText v-model="rupiahValue" @keydown="onlyNumber">
    <template #prefix>
      <span class="input-group-text border-0">Rupiah</span>
    </template>
  </InputText>
</template>
