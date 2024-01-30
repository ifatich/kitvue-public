<template>
    <div>
        <label :for="id" class="form-label">
            {{ label }}
            <img src="../../assets/images/icon-info.svg" />
        </label>
        <BDropdown v-model="selectedOption"
            toggle-class="w-100 btn-neutral gkit-dd d-flex justify-content-between align-items-center" :aria-label="id"
            :class="['prevent-zero gkit-dd', { 'is-inval': localError }]"
            :aria-describedby="id" :id="id">
            <template #button-content>
                {{ selectedOption || placeholder }}
                <span>
                    <img src="../../assets/icon/chevron_down.svg" />
                </span>
            </template>

            <BDropdownForm @submit.stop.prevent>
                <b-form-input :model="searchTerm" :placeholder="'Cari ' + label.toLowerCase()"></b-form-input>
            </BDropdownForm>
            <BDropdownItem v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
                {{ option.label }}
            </BDropdownItem>
        </BDropdown>
        <div :class="{ 'error-text': localError, 'mt-1': localError }" v-if="localError">
            Pilih {{ label.toLowerCase() }}
        </div>
    </div>
</template>


<script>
import { BDropdown, BDropdownItem, BDropdownForm } from 'bootstrap-vue-next';
import { computed } from 'vue';

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
        items: Array,
        value: {
            type: [String, Number],
            default: "",
        },
    },
    setup(props, { emit }) {
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
        selectedValue(newVal) {
            if (newVal === null || newVal === "") {
                this.localError = newVal;
            } else {
                this.localError = !newVal;
            }
        }
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
