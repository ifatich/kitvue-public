<script setup>
import {
  computed,
  defineOptions,
  defineProps,
  ref,
  defineEmits,
  useAttrs
} from 'vue'
import { BDropdown, BDropdownItem, BDropdownItemButton } from 'bootstrap-vue-next'

defineOptions({ name: 'InputDropdown', inheritAttrs: false })

const attrs = useAttrs()
const props = defineProps([
  'error',
  'label',
  'items',
  'itemValue',
  'itemText',
  'modelValue',
  'placeholder',
  'class'
])
const emit = defineEmits(['update:modelValue'])

const search = ref()
const selectedText = ref()

const filteredItems = computed(() =>
  search.value
    ? props.items.filter((i) =>
        i[props.itemText].toLowerCase().includes(search.value.toLowerCase())
      )
    : props.items
)

const selectedValue = computed({
  get: () => (props.modelValue ? props.modelValue : null),
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})

const handleOptionClick = (option) => {
  selectedValue.value = option[props.itemValue]
  selectedText.value = option[props.itemText]
  if (attrs.onChange && attrs.onInput && attrs.onBlur) {
    attrs.onChange()
    attrs.onInput()
    attrs.onBlur()
  }
}
</script>

<template>
  <div :class="['group-input', props.class]">
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
        {{ selectedText || props.placeholder }}
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
        <BDropdownItemButton
          buttonClass="d-flex justify-content-between mt-1"
        >
          {{ option[props.itemText] }}
          <span v-if="selectedValue === option[props.itemValue]">
            <img src="../../assets/icon/check_round.svg" />
          </span>
        </BDropdownItemButton>
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
