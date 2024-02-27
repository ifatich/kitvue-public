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

const selectedText = ref()

const selectedValue = computed({
  get: () => (props.modelValue ? props.modelValue : null),
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})

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

      <BDropdownItem
        @click.stop
      >
            <BDropdownItemButton 
                buttonClass="d-flex justify-content-between mt-1"
            >
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
