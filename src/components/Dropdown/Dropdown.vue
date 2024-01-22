<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <b-dropdown v-model="selectedOption" toggle-class="w-100 btn-neutral gkit-dd">
        <template #button-content>
            {{ selectedOption || 'Pilih ' + title.toLowerCase() }}
            <span>
                <img :src="require('../../assets/icon/chevron_down.svg')" />
            </span>
        </template>
        <b-dropdown-form @submit.stop.prevent>
            <b-form-input v-model="searchTerm" :placeholder="'Pilih '+ title.toLowerCase()"></b-form-input>
        </b-dropdown-form>
        <b-dropdown-item v-for="option in options" :key="option.value" @click="selectOption(option)">
            {{ option.label }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
    import {
        computed
    } from 'vue'

    export default {
        name: "DropdownComponent",
        props: {
            modelValue: String,
            id: {
                type: String,
                default: "id-dropdown",
            },
            title: {
                type: String,
                default: "Title",
            },
            placeholder: {
                type: String,
                default: "placeholder . . .",
            },
            items: {
                type: Array,
            },
            options: {
                type: Array,
                default: () => [],
            },
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
            };
        },
        computed: {
            filteredOptions() {
                const searchTermLowerCase = this.searchTerm.toLowerCase();
                return this.items.filter((option) =>
                    option.label.toLowerCase().includes(searchTermLowerCase)
                );
            },
        },
        methods: {
            selectOption(option) {
                this.selectedOption = option.label;
                this.searchTerm = "";
                this.selectedValue = option.id;
            },
        },
    };
</script>

<style scoped>
    .btn-group {
        width: 100%;
    }
</style>