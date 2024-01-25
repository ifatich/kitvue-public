<template>
    <div class="group-input">
        <label v-if="label" :for="$attrs.id" class="form-label">
            {{  'Pilih ' + label.toLowerCase() }}
        </label>
        <b-form-select
            toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
            class="form-control" 
            v-model="currentValue" 
            :options="items" 
            filter
            filter-placeholder="Cari item..."
            :value-field="itemValue" 
            :text-field="itemText"
            :disabled="disabled" 
            :size="size" 
            :placeholder="'Pilih ' + label.toLowerCase()"
            v-bind="$attrs"
        ></b-form-select>
        <div v-if="error" class="error-text mt-1">{{ error }}</div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { BFormSelect } from 'bootstrap-vue-next';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

export default {
    name: "AutoCompleteComponent",
    inheritAttrs: false,
    components: {
        BFormSelect
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        items: Array,
        label: {
            type: String,
            default: ''
        },
        itemText: {
            type: String,
            default: 'label'
        },
        itemValue: {
            type: String,
            default: 'id'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        },
        placeholder: {
            type: String,
            default: ''
        },
        error: String
    },
    setup(props, { emit }) {
        const currentValue = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        });

        return {
            currentValue
        };
    }
};
</script>