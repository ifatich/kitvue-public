<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <BAccordion>
        <BAccordionItem :id="dynamicId" class="accordion-item" :title="header">
            <slot></slot>
        </BAccordionItem>
    </BAccordion>
</template>

<script>
import { BAccordion, BAccordionItem } from 'bootstrap-vue-next'
export default {
    name: "AccordionComponent",
    components: {
      BAccordion, BAccordionItem
    },
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
