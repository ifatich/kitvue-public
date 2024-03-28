<template>
    <div>
        <div :class="`alert alert-${color} ${variantClass}`">
            <div class="row">
                <div class="col-10">
                  {{ label }}
                </div>
                <div class="col-2 text-end">
                  <slot name="action" />
                </div>
            </div>
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
