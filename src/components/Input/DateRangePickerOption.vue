<script setup>
import { defineOptions, ref } from 'vue'
import DateRangePicker from './DateRangePicker.vue'
import {
  BDropdown,
  BDropdownItem,
  BDropdownItemButton
} from 'bootstrap-vue-next'

defineOptions({ name: 'DateRangePickerOption', inheritAttrs: false })

const SELECTED_PRESET = ref('30')
</script>

<template>
  <div class="group-input">
    <div class="label-container">
      <label class="form-label overflow-hidden"> Ini Label Pokoknya </label>
    </div>
    <BDropdown
      v-bind="$attrs"
      class="prevent-zero gkit-dd"
      toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
    >
      <template #button-content>
        <p class="overflow-hidden my-auto text-ellipsis">
          Ini Value Tanggalnya Pokoknya
        </p>
        <span>
          <img src="../../assets/icon/chevron_down.svg" />
        </span>
      </template>
      <BDropdownItem
        class="preset-btn mt-2"
        :class="{
          'preset-btn--selected': SELECTED_PRESET === '7'
        }"
      >
        <BDropdownItemButton
          class="overflow-hidden"
          buttonClass="d-flex align-items-center"
          @click.stop="SELECTED_PRESET = '7'"
        >
          <div
            class="btn-identifier"
            :class="{ 'btn-identifier--selected': SELECTED_PRESET === '7' }"
          >
            &nbsp;
          </div>
          7 Hari Terakhir
        </BDropdownItemButton>
      </BDropdownItem>
      <BDropdownItem
        class="preset-btn mt-2"
        :class="{ 'preset-btn--selected': SELECTED_PRESET === '30' }"
      >
        <BDropdownItemButton
          class="overflow-hidden"
          buttonClass="d-flex align-items-center test"
          @click.stop="SELECTED_PRESET = '30'"
        >
          <div
            class="btn-identifier"
            :class="{ 'btn-identifier--selected': SELECTED_PRESET === '30' }"
          >
            &nbsp;
          </div>
          30 Hari Terakhir
        </BDropdownItemButton>
      </BDropdownItem>
      <BDropdownItem
        class="preset-btn mt-2"
        :class="{ 'preset-btn--selected': SELECTED_PRESET === 'ANY' }"
      >
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
      <div>
        <DateRangePicker class="mt-4" @click.stop />
      </div>
    </BDropdown>
    <div class="error-text">Kalo ini error pokoknya</div>
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

    &:hover {
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
