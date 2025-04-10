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
            gap: .75rem;
        }
        .page-item {
            min-width: 40px;

            &.disabled {
                pointer-events: none;

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

                    margin: 0px !important;

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

                    margin: 0px !important;

                }
            }
            .page-link {
                border-radius: 6px !important;
                font-size: var(--g-kit-font-size-omicron);
                line-height: var(--g-kit-line-height-omicron);
                font-weight: var(--g-kit-font-weight-normal);
                border: 1px solid var(--g-kit-black-20);

                aspect-ratio: 1/1;
            }
        }
    }
</style>
