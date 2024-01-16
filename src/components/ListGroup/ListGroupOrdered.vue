<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ol class="styled-ol">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ol>
</template>
<script>
    export default {
        name: "ListOrdered",
        props: {
            items: {
                type: Array,
                default: function () {
                    return [
                        "Nasabah mengisi formulir dan melampirkan fotokopi KTP",
                        "Nasabah membayar biaya admin Rp 10.000, biaya pengelolaan rekening Rp30.000 dan biaya materai Rp 10.000",
                        "Nasabah membeli emas batangan dengan berat minimal 0.01 gram",
                        "Nasabah membeli emas batangan dengan berat minimal 0.01 gram",
                    ];
                },
            },
        },
    };
</script>
<style scoped>

.styled-ol {
    list-style: none;
}

.styled-ol li {
    counter-increment: my-awesome-counter;
    font-size: var(--g-kit-font-size-omicron);
    line-height: var(--g-kit-line-height-omicron);
    font-weight: var(--g-kit-font-weight-normal);
    margin-bottom: 16px;
    position: relative
}

.styled-ol li:before {
    --size: 24px;
    background: var(--g-kit-lime-10);
    border-radius: 100%;
    color: var(--g-kit-lime-50);
    content: counter(my-awesome-counter);
    height: var(--size);
    left: calc(var(--size)*-1 - 10px);
    position: absolute;
    text-align: center;
    top: 0;
    width: var(--size)
}

</style>