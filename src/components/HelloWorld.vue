<template>
    <div>
        <div>
            <b-button-group>
                <b-button v-for="(button, index) in buttons" :key="index">
                    {{ button.label }}
                </b-button>
            </b-button-group>
        </div>
        <div class="mt-3">
            <b-button-group>
                <b-button v-for="(button, index) in variantButtons" :key="index" :variant="button.variant">
                    {{ button.label }}
                </b-button>
            </b-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            buttons: {
                type: Array,
                required: true,
            },
            variantButtons: {
                type: Array,
                required: true,
            },
        },
    };
</script>