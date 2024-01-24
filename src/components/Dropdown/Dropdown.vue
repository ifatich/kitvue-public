<template>
    <div>
        <label :for="id" class="form-label">
            {{ label }}
            <img src="../../assets/images/icon-info.svg" />
        </label>
        <BDropdown
            v-model="show"
            toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center"
            :aria-label="id"
            :aria-describedby="id"
            :id="id" >

            <template #button-content>
                {{ selectedOption || placeholder }}
                <span>
                    <img src="../../assets/icon/chevron_down.svg" />
                </span>
            </template>

            <BDropdownForm>
                <b-form-input v-model="searchTerm" :placeholder="'Cari ' + label.toLowerCase()"></b-form-input>
            </BDropdownForm>
            <BDropdownItem v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
                {{ option.label }}
            </BDropdownItem>
        </BDropdown>
    </div>
</template>

<script>
    import {
        BDropdown,
        BDropdownItem,
        BDropdownForm,
        BFormInput
    } from 'bootstrap-vue-next';
    import {
        computed
    } from 'vue';

    export default {
        name: "DropdownComponent",
        components: {
            BDropdown,
            BDropdownItem,
            BDropdownForm,
            BFormInput
        },
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            id: {
                type: String,
            },
            label: {
                type: String,
                default: "Title",
            },
            placeholder: {
                type: String,
                default: "placeholder . . .",
            },
            items: Array,
            itemText: {
              type: String,
              default: "label"
            },
            itemValue: {
              type: String,
              default: "id"
            }
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
                selectedOption: '',
                searchTerm: "",
                show: false
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
                this.searchTerm = "";
                this.selectedValue = option[this.itemValue];
                this.selectedOption = option[this.itemText];
            },
        },

    };
</script>

<style scoped>
    .btn-group {
        width: 100%;
    }
</style>
