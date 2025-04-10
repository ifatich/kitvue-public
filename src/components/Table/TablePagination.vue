<script setup>
    import { computed } from 'vue'
    import { BPagination } from 'bootstrap-vue-next'
    import { defineOptions, defineProps, defineEmits } from 'vue'

    defineOptions({ name: 'TablePagination' })
    const props = defineProps(['size','totalRows','perPage','limit','modelValue'])
    const emit = defineEmits(['update:modelValue'])

    const currentPage = computed({
        get: () => (props.modelValue ? props.modelValue : 1),
        set: (newValue) => {
            emit('update:modelValue', newValue)
        }
    })
</script>

<template>
    <BPagination
        v-model="currentPage"
        :total-rows="props.totalRows"
        :per-page="props.perPage"
        :size="props.size"
        fill
        first-number
        last-number
        :limit="props.limit"
    />
</template>

<style lang="scss">
    .custom-pagination {
        &.pagination{
            gap: 1.25rem;
        }
        .page-item {
            &.disabled {
                .page-link {
                    background-color: #fff;
                    border-color: var(--g-kit-black-20);
                    color: var(--g-kit-black-50);
                    pointer-events: none;
                }
            }
            &:first-child {
                .page-link {
                    border-radius: 6px;
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                    align-items: center;
                    aspect-ratio: 1/1;
                }
            }
            &:last-child {
                .page-link {
                    border-radius: 6px;
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                    align-items: center;
                    aspect-ratio: 1/1;
                }
            }
            .page-link {
                border-radius: 6px !important;
                font-size: var(--g-kit-font-size-sigma);
                line-height: unset;
                font-weight: var(--g-kit-font-weight-normal);
                border: 1px solid var(--g-kit-black-20);

                width: 40px;
                height: unset;
                aspect-ratio: 1/1;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
