<template>
    <div>
        <label :for="id" class="form-label">
            {{ 'Pilih ' + label.toLowerCase() }}
            <img :src="require('../../assets/images/icon-info.svg')" />
        </label>
        <BDropdown v-model="selectedOption"
            toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center" :aria-label="id"
            :aria-describedby="id" :id="id">
            <template #button-content>
                {{ title || 'Pilih ' + label.toLowerCase() }}
                <span>
                    <img :src="require('../../assets/icon/chevron_down.svg')" />
                </span>
            </template>

            <BDropdownForm @submit.stop.prevent>
                <b-form-input :model="searchTerm" :placeholder="'Cari ' + label.toLowerCase()"></b-form-input>
            </BDropdownForm>
            <BDropdownItem v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)">
                {{ option.label }}
            </BDropdownItem>
        </BDropdown>
        <div v-if="localError" class="error-text mt-1">
            Pilih {{ label.toLowerCase() }}
        </div>
    </div>
</template>


<script>
    import {
        BDropdown,
        BDropdownItem,
        BDropdownForm
    } from 'bootstrap-vue-next';
    import {
        computed
    } from 'vue';

    export default {
        name: "DropdownComponent",
        components: {
            BDropdown,
            BDropdownItem,
            BDropdownForm
        },
        props: {
            modelValue: String,
            id: {
                type: String,
            },
            label: {
                type: String,
                default: "Title",
            },
            title: {
                type: String,
                default: "Title",
            },
            placeholder: {
                type: String,
                default: "placeholder . . .",
            },
            buttonText: {
                type: String,
            },
            items: Array
        },
        setup(props, {
            emit
        }) {
            const selectedValue = computed({
                get: () => props.modelValue,
                set: (value) => emit('update:modelValue', value)
            })

            return {
                selectedValue,
            }
        },
        data() {
            return {
                selectedOption: null,
                searchTerm: "",
                localError: false,
            };
        },
        watch: {
            selectedOption(newVal) {
                this.localError = !newVal;
            },
        },
        computed: {
            filteredOptions() {
                const searchTermLowerCase = this.searchTerm.toLowerCase();
                return this.items.filter((option) =>
                    option.label.toLowerCase().includes(searchTermLowerCase)
                );
            },
            isDropdownValid() {
                return this.selectedOption !== null && this.selectedOption !== undefined;
            },
        },
        methods: {
            selectOption(option) {
                this.selectedOption = option.label;
                this.searchTerm = "";
                this.selectedValue = option.label;
            },
        },

    };
</script>

<style scoped>
    .btn-group {
        width: 100%;
    }

    .error-text {
        color: #ae1e22;
        font-size: var(--g-kit-font-size-omega);
        line-height: var(--g-kit-line-height-omega);
        font-weight: var(--g-kit-font-weight-normal);
    }
</style>