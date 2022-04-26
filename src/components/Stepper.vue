<template>
  <ol class="stepper-ol">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="item.active === true ? 'active' : ''"
    >
      {{ item.label }}
    </li>
    <!-- <li class="active">Detail Jaminan</li>
    <li>Detail Pinjaman</li>
    <li>Cabang Pengajuan</li>
    <li>Waktu Kedatangan</li> -->
  </ol>
</template>
<script>
export default {
  name: "k-stepper",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          { active: false, label: "Detail Jaminan" },
          { active: true, label: "Detail Pinjaman" },
          { active: false, label: "Cabang Pengajuan" },
          { active: false, label: "Waktu Kedatangan" },
        ];
      },
      active: {
        type: Boolean,
      },
      label: {
        type: String,
      },
    },
  },
};
// class="breadcrumb-item" :class="pages.current ? 'active': ''" :aria-current="page.current ? 'page' : undefined"
</script>
<style></style>
