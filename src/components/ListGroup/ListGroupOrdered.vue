<template>
  <ol class="styled-ol">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ol>
</template>
<script>
export default {
  name: "k-list-group-ordered",
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
<style></style>
