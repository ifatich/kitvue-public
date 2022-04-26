<template>
  <div class="table-box">
    <div class="table-box-content mb-0">
      <table class="table table-striped">
        <tbody>
          <tr v-for="field in fields" :key="field.key">
            <td class="bg-primary-pgd">{{ field.label }}</td>
            <td v-for="item in items[field.key]" :key="item.key">{{ item }}</td>
          </tr>
          <!-- <tr>
            <td class="bg-primary-pgd">Uang Muka</td>
            <td>Minimal 15%</td>
          </tr>
          <tr>
            <td class="bg-primary-pgd">Margin/mu'nah pemeliharaan</td>
            <td>0,92% x nilai taksiran emas per bulan</td>
          </tr>
          <tr>
            <td class="bg-primary-pgd">Administrasi</td>
            <td>Rp 50.000 per transaksi</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-table-2",
  props: {
    fields: {
      type: Array,
      default: function () {
        return [
          { key: "Uang_Muka", label: "Uang Muka" },
          { key: "Margin", label: "Margin/mu'nah pemeliharaan" },
          { key: "Administrasi", label: "Administrasi" },
        ];
      },
    },
    items: {
      type: Object,
      default: function () {
        return {
          Uang_Muka: ["Minimal 15%"],
          Margin: ["0,92% x nilai taksiran emas per bulan"],
          Administrasi: ["Rp 50.000 per transaksi"],
        };
      },
    },
    // items: {
    //   type: Array,
    //   default: function () {
    //     return [
    //       {
    //         Uang_Muka: "A",
    //         Margin: "Rp 50.000 - Rp 500.000",
    //         Administrasi: "1%",
    //       },
    //     ];
    //   },
    // },
  },
};
</script>
<style></style>
