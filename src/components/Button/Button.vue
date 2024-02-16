<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button class="btn" :class="[`btn-${type}`, `btn-${size}`]" :disabled="loading || disabled">
      <div class="d-flex justify-content-center align-items-center">
        <BSpinner v-if="loading" :small="size === 'sm' || size==='md'" />
        &nbsp;
        <span>{{ label }}</span>
      </div>
    </button>
</template>

<script>
    import { BSpinner } from 'bootstrap-vue-next'
    export default {
        name: "ButtonComponent",
        components: { BSpinner },
        props: {
            label: String,
            type: {
                validator(value) {
                    return [
                        "primary",
                        "outline-primary",
                        "link",
                        "tertiary",
                        "secondary",
                        "neutral",
                    ].includes(value);
                },
            },
            loading: {
              type: Boolean,
              default: false
            },
            disabled: {
              type: Boolean,
              default: false
            },
            size: {
                validator(value) {
                    return ["sm", "md", "lg", "xl"].includes(value);
                },
            },
        }
    };
</script>
