<template>
    <div class="group-input">
        <label v-if="label" :for="$attrs.id" class="form-label">
            {{ label }}
        </label>
        <b-form-select toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
            class="form-control" v-model="currentValue" :options="items" :value-field="itemValue" :text-field="itemText"
            :disabled="disabled" :size="size" v-bind="$attrs">
            <template #first>
                <BFormSelectOption value="" disabled>{{ placeholder }}</BFormSelectOption>
            </template>
        </b-form-select>
        <div v-if="error" class="error-text mt-1">{{ error }}</div>
    </div>
</template>

<script>
    import "select2/dist/css/select2.min.css";
    import "select2";
    import $ from "jquery";
    import {
        computed
    } from 'vue'
    import {
        BFormSelect,
        BFormSelectOption
    } from 'bootstrap-vue-next'
    export default {
        name: "AutoCompleteComponent",
        inheritAttrs: false,
        components: {
            BFormSelect,
            BFormSelectOption
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
        setup(props, {
            emit
        }) {
            const currentValue = computed({
                get: () => props.modelValue,
                set: (value) => emit('update:modelValue', value)
            })

            return {
                currentValue
            }
        },
        mounted() {
            $(this.$el).find("select").select2();
        },
        beforeUnmount() {
            $(this.$el).find("select").select2("destroy");
        },
    }
</script>

<style lang="scss">
    .select2-container {
        .select2-selection--single {
            .select2-selection__rendered {
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .select2-selection__arrow {
                height: 26px;
                position: relative;
                top: 1px;
                right: 16px;
                width: 20px;
            }

            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            height: 48px;
            -moz-user-select: none;
            user-select: none;
            -webkit-user-select: none;
            align-items: center;
            justify-content: space-between;
        }

        &--default {
            .select2-search--dropdown {
                .select2-search__field {
                    border: 1px solid #aaa;
                    border-radius: 6px;
                    height: 48px;
                    padding: 1rem;

                    &:focus-visible {
                        outline: none;
                    }
                }
            }

            .select2-results__option--highlighted.select2-results__option--selectable {
                background-color: unset;
                color: var(--g-kit-lime-50);
                display: flex;
                justify-content: space-between;
                align-items: center;

                &::after {
                    content: url('../../assets/icon/check_round.svg');
                    width: 24px;
                    height: 24px;
                }
            }

            .select2-results__option--selected {
                background-color: unset;
                color: var(--g-kit-lime-80);
            }
        }

        &--open {
            .select2-dropdown--below {
                padding: 1rem;
            }
        }

        .select2-results__option {
            margin-top: 1rem;
            padding: unset;
        }

        .select2-search--dropdown {
            padding: unset;
        }
    }
</style>
