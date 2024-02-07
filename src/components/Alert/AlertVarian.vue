<template>
    <div>
        <div :class="`alert alert-${color} ${variantClass}`">
            {{ label }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlertVarian",
        props: {
            label: String,
            color: {
                validator(value) {
                    return ["green", "light-blue", "red", "yellow"].includes(value);
                },
            },
            variant: String,
        },
        computed: {
            variantClass() {
                return this.variant ? `alert-${this.variant}` : '';
            },
        },
    };
</script>