<script setup>
/* eslint-disable */
import {
  computed,
  defineOptions,
  defineProps,
  ref,
  defineEmits,
  useAttrs
} from 'vue'
import { BDropdown, BDropdownItem, BFormInput, BDropdownItemButton, BSpinner } from 'bootstrap-vue-next'

defineOptions({ name: 'InputDropdown', inheritAttrs: false })

const attrs = useAttrs()

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: String,
  label: String,
  items: Array,
  itemValue: String,
  itemText: String,
  modelValue: String,
  placeholder: String,
  class: String,
  errorFetch: String,
  executeFetch: Function
})

const emit = defineEmits(['update:modelValue'])

const search = ref()

const filteredItems = computed(() =>
  search.value
    ? props.items.filter((i) =>
        i[props.itemText].toLowerCase().includes(search.value.toLowerCase())
      )
    : props.items
)

const selectedText = computed(() => {
  if (selectedValue.value && props.items.length > 0) {
    const findItem = props.items.find(v => v[props.itemValue] === selectedValue.value)
    if (findItem) return findItem[props.itemText]
    return ''
  } else {
    return ''
  }
})

const selectedValue = computed({
  get: () => (props.modelValue ? props.modelValue : null),
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})

const handleOptionClick = (option) => {
  selectedValue.value = option[props.itemValue]
  if (attrs.onChange && attrs.onInput && attrs.onBlur) {
    attrs.onChange()
    attrs.onInput()
    attrs.onBlur()
  }
}
</script>

<template>
  <div :class="['group-input', props.class]">
    <div class="label-container">
      <label v-if="props.label" :for="$attrs.id" class="form-label overflow-hidden">
        {{ props.label }}
      </label>
      <img v-if="props.errorFetch" @click="props.executeFetch" class="icon-refresh" src="../../assets/icon/refresh.svg" />
    </div>
    <BDropdown
      :value="selectedValue"
      toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
      class="prevent-zero gkit-dd"
      v-bind="$attrs"
      :disabled="disabled || loading"
    >
      <template #button-content>
        <p class="overflow-hidden my-auto text-ellipsis">
          {{ selectedText || props.placeholder }}
          </p>
        <span>
          <BSpinner v-if="loading" small />
          <img v-else src="../../assets/icon/chevron_down.svg" />
        </span>
      </template>

      <b-form-input
        @click.stop
        v-model="search"
        :placeholder="'Cari ' + props.label.toLowerCase()"
        :id="$attrs.id + '_search'"
      ></b-form-input>
      <BDropdownItem
        v-for="(option, index) in filteredItems"
        :key="option[props.itemValue]"
        @click="handleOptionClick(option)"
        :id="$attrs.id + '_value_' + option[props.itemValue]"
      >
        <BDropdownItemButton
        class="overflow-hidden"
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

.text-ellipsis {
  text-overflow: ellipsis;
}

.label-container {
  display: flex;
  align-items: center;
}

.icon-refresh {
  width: 1.2rem;
  margin-left: .2rem;
  cursor: pointer;
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
