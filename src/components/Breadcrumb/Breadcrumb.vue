<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: idx === items.length - 1 }"
      >
        <template v-if="index === items.length - 1">{{ item }}</template>

        <a href="./index.html" v-if="index !== items.length - 1">{{ item }}</a>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "k-breadcrumbs",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ["Beranda", "Produk", "Layanan Jasa", "Safe Deposit Box"],
    },
  },
};
</script>
<style></style>
