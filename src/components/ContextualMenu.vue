<template>
  <div class="contextual-menu">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="contextual-menu__item"
    >
      <p>{{ item.label }}</p>
      <img :src="item.icon" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "k-contextual-menu",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Ubah",
            action: "",
            icon: "/assets/images/edit-filled.svg",
          },
          {
            label: "Hapus",
            action: "",
            icon: "/assets/images/icon-delete-dark.svg",
          },
        ];
      },
    },
  },
};
</script>
<style></style>
