<template>
  <ul class="styled-ul">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  name: "k-list-group-unordered",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          "Memiliki identitas yang masih berlaku (KTP/Paspor)",
          "Mengisi formulir pembukaan Rekening Tabungan Emas",
          "Biaya transaksi Tabungan Emas",
        ];
      },
    },
  },
};
</script>
<style></style>
