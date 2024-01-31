<script setup>
import {
  computed,
  defineOptions,
  defineProps,
  ref,
  defineEmits,
  useAttrs
} from 'vue'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'

defineOptions({ name: 'InputDropdown', inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps([
  'error',
  'label',
  'items',
  'class',
  'value',
  'modelValue'
])
const emit = defineEmits(['update:modelValue'])

const search = ref()

const filteredItems = computed(() =>
  search.value
    ? props.items.filter((i) =>
        i[props.value].toLowerCase().includes(search.value.toLowerCase())
      )
    : props.items
)

const selectedValue = computed({
  get: () => (props.modelValue ? props.modelValue[props.value] : null),
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const handleOptionClick = (option) => {
  selectedValue.value = option
  if (attrs.onChange && attrs.onInput && attrs.onBlur) {
    attrs.onChange()
    attrs.onInput()
    attrs.onBlur()
  }
}
</script>

<template>
  <div>
    <label v-if="props.label" :for="$attrs.id" class="form-label">
      {{ props.label }}
    </label>
    <BDropdown
      :value="selectedValue"
      toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
      class="prevent-zero gkit-dd"
      v-bind="$attrs"
    >
      <template #button-content>
        {{ selectedValue || props.placeholder }}
        <span>
          <img src="../../assets/icon/chevron_down.svg" />
        </span>
      </template>

      <b-form-input
        @click.stop
        v-model="search"
        :placeholder="'Cari ' + props.label.toLowerCase()"
      ></b-form-input>
      <BDropdownItem
        v-for="(option, index) in filteredItems"
        :key="index"
        @click="handleOptionClick(option)"
      >
        {{ option[props.value] }}
      </BDropdownItem>
    </BDropdown>
    <div class="error-text" v-if="props.error">
      {{ props.error }}
    </div>
  </div>
</template>

<style lang="scss">
.btn-group {
  width: 100%;
}

.gkit-dd {
  .dropdown-menu {
    &.show {
      margin-top: -4px;
    }
  }
}

.error-text {
  color: #ae1e22;
  font-size: var(--g-kit-font-size-omega);
  line-height: var(--g-kit-line-height-omega);
  font-weight: var(--g-kit-font-weight-normal);
}
</style>
