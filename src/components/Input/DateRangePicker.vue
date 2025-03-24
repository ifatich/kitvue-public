<template>
  <div>
    <div :class="['date-range-picker', { 'with-separator': props.separator }]">
      <CalendarDropdown
        :disabled="props.disabled"
        :title="props.firstLabel"
        v-model="startDate"
        :placeholder="props.firstPlaceholder"
        :min-date="props.minStartDate"
        :max-date="endDate"
        :format-type="props.formatType"
        @buttom-sheet-shown="handleOffcanvasToggle"
      />
      <div v-if="props.separator" class="form-label d-block" style="top: 40px; position: relative; height: min-content;">s.d</div>
      <CalendarDropdown
        :disabled="props.disabled"
        :title="props.secondLabel"
        v-model="endDate"
        :placeholder="props.secondPlaceholder"
        :min-date="startDate || props.minEndDate"
        :format-type="props.formatType"
        @buttom-sheet-shown="handleOffcanvasToggle"
      />
    </div>
    <div v-if="errorValidation" class="error-text mt-2">
      {{ errorValidation }}
    </div>
  </div>
</template>

<script setup>
import CalendarDropdown from './CalendarDropdown.vue';
import { computed, defineProps } from 'vue'

const startDate = defineModel('startDate') // eslint-disable-line
const endDate = defineModel('endDate') // eslint-disable-line
const emits = defineEmits(['buttomSheetShown']) // eslint-disable-line

const errorValidation = computed(() => {
  if (startDate.value && endDate.value && startDate.value > endDate.value) {
    return 'Tanggal akhir harus lebih besar dari tanggal awal'
  } else {
    return null
  }
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  firstLabel: {
    type: String,
    default: 'Dari',
    required: true
  },
  secondLabel: {
    type: String,
    default: 'Hingga'
  },
  separator: {
    type: Boolean,
    default: false
  },
  firstPlaceholder: {
    type: String,
    default: 'DD / MM / YYYY'
  },
  secondPlaceholder: {
    type: String,
    default: 'DD / MM / YYYY'
  },
  minStartDate: {
    type: Date,
  },
  minEndDate: {
    type: Date,
  },
  /**
   * @value date | short
   * @default date
   */
  formatType: {
    type: String,
    default: 'date'
  }
})

const handleOffcanvasToggle = (value) => {
  emits('buttomSheetShown', value)
}
</script>

<script>
export default {
  name: 'DateRangePicker'
}
</script>

<style scoped>
.form-label {
  display: none;
}

.date-range-picker {
  display: flex;
  gap: 16px;
}

.date-range-picker.with-separator {
  gap: 8px;
}
</style>
