<script setup>
import {
  defineOptions,
  ref,
  defineModel,
  watch,
  computed,
  defineProps
} from 'vue'
import DateRangePicker from './DateRangePicker.vue'
import {
  BDropdown,
  BDropdownItem,
  BDropdownItemButton
} from 'bootstrap-vue-next'

defineOptions({ name: 'DateRangePickerOption', inheritAttrs: false })

const SELECTED_PRESET = ref('ANY')
const dateRangeDisabled = computed(() =>
  SELECTED_PRESET.value === 'ANY' ? false : true
)
const props = defineProps({
  label: {},
  error: {},
  preset: {
    default: [
      {
        label: '7 Hari Terakhir',
        value: '7'
      },
      {
        label: '30 Hari Terakhir',
        value: '30'
      }
    ]
  },
  showAny: {
    default: true
  }
})

const startDate = defineModel('startDate')
const endDate = defineModel('endDate')

const getDateString = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const getFormattedDateString = (dateString) => {
  const [year, month, day] = dateString.split('-')

  return `${day}/${month}/${year}`
}

const valueString = computed(() =>
  startDate.value && endDate.value
    ? `${getFormattedDateString(startDate.value)} - ${getFormattedDateString(
        endDate.value
      )}`
    : ''
)

watch(SELECTED_PRESET, () => {
  if (SELECTED_PRESET.value === 'ANY') {
    startDate.value = ''
    endDate.value = ''
    return
  }
  const todaysDate = new Date()
  const previousDate = new Date()
  previousDate.setDate(todaysDate.getDate() - parseInt(SELECTED_PRESET.value))
  startDate.value = getDateString(previousDate)
  endDate.value = getDateString(todaysDate)
})
</script>

<template>
  <div class="group-input">
    <div class="label-container">
      <label class="form-label overflow-hidden"> {{ props.label }} </label>
    </div>
    <BDropdown
      v-bind="$attrs"
      class="prevent-zero gkit-dd"
      toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
    >
      <template #button-content>
        <p class="overflow-hidden my-auto text-ellipsis">
          {{ valueString }}
        </p>
        <span>
          <img src="../../assets/icon/chevron_down.svg" />
        </span>
      </template>
      <div
        v-for="preset in props.preset"
        :key="preset.value"
        class="preset-btn mt-2"
        :class="{
          'preset-btn--selected': SELECTED_PRESET === preset.value
        }"
      >
        <BDropdownItem>
          <BDropdownItemButton
            class="overflow-hidden"
            buttonClass="d-flex align-items-center"
            @click.stop="SELECTED_PRESET = preset.value"
          >
            <div
              class="btn-identifier"
              :class="{
                'btn-identifier--selected': SELECTED_PRESET === preset.value
              }"
            >
              &nbsp;
            </div>
            {{ preset.label }}
          </BDropdownItemButton>
        </BDropdownItem>
      </div>
      <div
        v-if="props.showAny"
        class="preset-btn mt-2"
        :class="{ 'preset-btn--selected': SELECTED_PRESET === 'ANY' }"
      >
        <BDropdownItem>
          <BDropdownItemButton
            class="overflow-hidden"
            buttonClass="d-flex align-items-center test"
            @click.stop="SELECTED_PRESET = 'ANY'"
          >
            <div
              class="btn-identifier"
              :class="{ 'btn-identifier--selected': SELECTED_PRESET === 'ANY' }"
            >
              &nbsp;
            </div>
            Rentang Waktu
          </BDropdownItemButton>
        </BDropdownItem>
      </div>
      <div>
        <DateRangePicker
          v-model:start-date="startDate"
          v-model:end-date="endDate"
          class="mt-4"
          @click.stop
          :disabled="dateRangeDisabled"
        />
      </div>
    </BDropdown>
    <div class="error-text">{{ props.error }}</div>
  </div>
</template>

<style lang="scss">
.preset-btn {
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid lightgrey;
  background-color: transparent;
  border-color: lightgray;

  &--selected {
    background-color: rgba(0, 255, 0, 0.15);
    border-color: green;
  }

  & .dropdown-item {
    margin-top: 0 !important;

    &:hover,
    &:active,
    &:focus {
      background-color: transparent !important;
    }
  }
}

.btn-identifier {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 2px solid grey;
  margin-right: 0.6rem;

  &--selected {
    border: 6.5px solid green;
  }
}
</style>
