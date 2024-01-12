<template>
    <h2 class="accordion-header" :id="'heading' + index">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index"
            :aria-expanded="isOpenProp"
            :aria-controls="'collapse' + index"
            @click="toggleAccordionProp"
            >
            {{ title }}
        </button>
    </h2>
</template>

<script>
    export default {
        name: 'HeadAccordion',
        props: {
            title: String,
            index: Number,
            isOpenProp: Boolean,
            toggleAccordionProp: Function,
        },
        computed: {
            isOpen() {
                // Tentukan logika untuk menentukan apakah accordion terbuka atau tidak
                // Misalnya, Anda dapat menggunakan state di dalam komponen ini.
                return false;
            },
        },
        methods: {
            toggleAccordion() {
                // Implementasikan logika untuk mengatur state dan membuka/tutup accordion
                // Misalnya, Anda dapat menggunakan event bus atau properti reactive.
            },
        },
    };
</script>