<template>
    <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index">
        <div class="accordion-body">
            {{ body }}
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BodyAccordion',
        props: {
            index: Number,
            body: String, // Pastikan properti body didefinisikan dengan benar
        },
    };
</script>