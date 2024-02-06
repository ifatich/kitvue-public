<template>
    <div>
        <b-form-group class="radio-container">
            <label class="radio-content" v-for="(item, index) in items" :key="index">
                <b-form-radio :value="item.value" v-model="selected" @change="emitSelected">{{ item.text }}</b-form-radio>
            </label>
        </b-form-group>

    </div>
</template>

<script>
    export default {
        name: 'RadioComponent',
        props: {
            items: {
                type: Array,
                default: () => [],
            },
            defaultSelected: {
                type: [String, Number],
                default: null,
            },
        },
        data() {
            return {
                selected: this.defaultSelected,
            };
        },
        methods: {
            emitSelected() {
                this.$emit('selected', this.selected);
            },
        },
    };
</script>


<style scoped lang="scss">
    .radio-container {
        float: left;
        gap: 1rem;
        width: 100%;

        label {
            cursor: pointer;

            display: flex;
            align-items: center;

            padding: 1rem;
            border: 1px solid var(--g-kit-black-20);
            background-color: white;
            border-radius: 6px;

            font-size: var(--g-kit-font-size-omicron);
            line-height: var(--g-kit-line-height-omicron);
            font-weight: var(--g-kit-font-weight-bold);
            color: var(--g-kit-black-50);

            margin-bottom: 1rem;

            &:has(input:checked) {
                color: var(--g-kit-lime-50);
                background-color: var(--g-kit-lime-10);
                border-color: var(--g-kit-lime-50);
            }
        }
    }
</style>