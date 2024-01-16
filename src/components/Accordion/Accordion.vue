<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <BAccordion>
        <BAccordionItem :id="dynamicId" class="accordion-item" :title="header">
            <slot></slot>
        </BAccordionItem>
    </BAccordion>
</template>

<script>
export default {
    name: "AccordionComponent",
    props: {
        header: String,
    },
    data() {
        return {
        dynamicId: 'gkitacc' + Math.floor(Math.random() * 1000),
        };
    },
};
</script>