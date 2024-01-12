<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <label :for="id" class="form-label mb-1" :id="id">
            {{ title }}
        </label>
        <b-dropdown v-model="selectedOption" toggle-class="w-100 btn-neutral gkit-dd">
            <template #button-content>
                {{ selectedOption || 'Pilih ' + title.toLowerCase() }}
                <span>
                    <img :src="require('../../assets/icon/chevron_down.svg')" />
                </span>
            </template>
            <b-dropdown-form @submit.stop.prevent>
                <b-form-input v-model="searchTerm" :placeholder="['Pilih '+ title.toLowerCase()]"></b-form-input>
            </b-dropdown-form>
            <b-dropdown-item v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
                {{ option.label }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
    
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Title",
            },
            placeholder: {
                type: String,
                default: "placeholder . . .",
            },
        },
        data() {
            return {
                options: [{
                        id: 1,
                        label: "Option 1"
                    },
                    {
                        id: 2,
                        label: "Option 2"
                    },
                    {
                        id: 3,
                        label: "Option 3"
                    },
                ],
                selectedOption: null,
                searchTerm: "",
            };
        },
        computed: {
            filteredOptions() {
                const searchTermLowerCase = this.searchTerm.toLowerCase();
                return this.options.filter((option) =>
                    option.label.toLowerCase().includes(searchTermLowerCase)
                );
            },
        },
        methods: {
            selectOption(option) {
                this.selectedOption = option.label;
                this.searchTerm = "";
            },
        },
    };
</script>

<style scoped>
    .btn-group {
        width: 100%;
    }
</style>