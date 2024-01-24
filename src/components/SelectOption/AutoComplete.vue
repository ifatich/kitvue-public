<template>
  <b-form-select
    toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
    v-model="currentValue"
    :options="items"
    :value-field="itemValue"
    :text-field="itemText"
    :disabled="disabled"
    :search="true"
    :size="size"
    required
  >
    <template #default>
      <!-- <BFormSelectOption :value="null"> -->
        <!-- <b-form-input v-model="searchTerm" placeholder="Cari"></b-form-input> -->
        <h5>ini Slot</h5>
      <!-- </BFormSelectOption> -->
    </template>
  </b-form-select>
</template>

<script>
  import { computed } from 'vue'
  import { BFormSelect, BFormInput, BFormSelectOption } from 'bootstrap-vue-next'
  export default {
    name: "AutoCompleteComponent",
    components: { BFormSelect, BFormInput, BFormSelectOption },
    props: {
      modelValue: {
        type: String,
        default: ''
      },
      items: Array,
      itemText: {
        type: String,
        default: 'text'
      },
      itemValue: {
        type: String,
        default: 'value'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      }
    },
    setup(props, { emit }) {
      const currentValue = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value)
      })

      return {
        currentValue
      }
    },
    data() {
      return {
        searchTerm: '',
      };
    },
  }
</script>
